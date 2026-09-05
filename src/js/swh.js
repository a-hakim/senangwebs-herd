import '../css/swh.css';

/**
 * SenangWebs Herd (SWH)
 * A lightweight library for managing multiple HTML files within a single page using tabs and lazy-loaded iframes.
 * @version 1.1.0
 */

const SWH = (function(window) {
    'use strict';

    let instanceCounter = 0;

    // Tracks storage keys already claimed by instances so collisions can be warned about
    const storageKeyRegistry = new Set();

    /**
     * SWH Constructor
     * @param {Object} config - Configuration options
     * @param {HTMLElement} config.container - The container element for SWH
     * @param {HTMLElement} config.tabsContainer - Element to hold tab buttons
     * @param {HTMLElement} config.contentContainer - Element to hold iframe content
     * @param {Array<{id: string, title: string, url: string}>} config.presetTabs - Initial tabs to create
     * @param {string} config.storageKey - LocalStorage key for tab state
     * @param {string} config.defaultTab - Tab to activate if no previous state exists
     * @param {boolean} config.allowClose - Enable UI to close tabs
     * @param {number} config.maxTabs - Maximum open tabs at once
     * @param {boolean|string} config.sandbox - Iframe sandbox: true applies all restrictions, a string sets specific sandbox tokens, false disables
     * @param {string} config.tabsLabel - Accessible label for the tab list (aria-label, only applied when none present)
     */
    class SWH {
        constructor(config = {}) {
            // Validate required elements
            if (!config.container || !(config.container instanceof HTMLElement)) {
                throw new Error('SWH: container element is required');
            }
            if (!config.tabsContainer || !(config.tabsContainer instanceof HTMLElement)) {
                throw new Error('SWH: tabsContainer element is required');
            }
            if (!config.contentContainer || !(config.contentContainer instanceof HTMLElement)) {
                throw new Error('SWH: contentContainer element is required');
            }

            // Store configuration
            this.config = {
                container: config.container,
                tabsContainer: config.tabsContainer,
                contentContainer: config.contentContainer,
                presetTabs: config.presetTabs || [],
                storageKey: config.storageKey || 'swh-tabs',
                defaultTab: config.defaultTab || null,
                allowClose: config.allowClose || false,
                maxTabs: (typeof config.maxTabs === 'number' && config.maxTabs >= 0) ? config.maxTabs : Infinity,
                sandbox: (config.sandbox === true || (typeof config.sandbox === 'string' && config.sandbox.trim())) ? config.sandbox : false,
                tabsLabel: (typeof config.tabsLabel === 'string' && config.tabsLabel.trim()) ? config.tabsLabel.trim() : 'Tabs'
            };

            // Warn when another instance already uses the same storage key,
            // as both instances will read/write each other's tab state
            if (storageKeyRegistry.has(this.config.storageKey)) {
                console.warn(`SWH: storageKey "${this.config.storageKey}" is already in use by another instance; their states may overwrite each other`);
            } else {
                storageKeyRegistry.add(this.config.storageKey);
            }

            this.instanceId = ++instanceCounter;
            this.tabCounter = 0;

            // Initialize internal state
            this.state = {
                openTabs: [],        // Array of {id, title, url, loaded}
                activeTabId: null,   // Currently active tab ID
                tabElements: new Map(),    // Map of tab ID to tab button element
                iframeElements: new Map()  // Map of tab ID to iframe element
            };

            // Initialize event system
            this.events = new Map();

            // Add accessible semantics to the tab collection
            this.config.tabsContainer.setAttribute('role', 'tablist');

            // Apply an accessible label to the tab list only when none exists
            this._ownsAriaLabel = !this.config.tabsContainer.getAttribute('aria-label');
            if (this._ownsAriaLabel) {
                this.config.tabsContainer.setAttribute('aria-label', this.config.tabsLabel);
            }

            // Debounced state persistence; flushed on pagehide so a quick
            // reload never loses the latest tab state
            this._persistTimer = null;
            this._handlePageHide = () => {
                this.cancelScheduledPersist();
                this.persistState();
            };
            window.addEventListener('pagehide', this._handlePageHide);

            // Initialize the instance
            this.init();
        }

        /**
         * Initialize SWH instance
         */
        init() {
            // Try to restore state from localStorage
            const restored = this.restoreState();

            // If no state was restored, create preset tabs
            if (!restored && this.config.presetTabs.length > 0) {
                this.config.presetTabs.forEach(tab => {
                    this.openTab(tab.id, tab.title, tab.url);
                });

                // Activate default tab if specified
                if (this.config.defaultTab) {
                    this.switchTab(this.config.defaultTab);
                } else if (this.config.presetTabs.length > 0) {
                    // Activate first tab if no default specified
                    this.switchTab(this.config.presetTabs[0].id);
                }
            }
        }

        /**
         * Open a new tab
         * @param {string} id - Unique tab identifier
         * @param {string} title - Tab title to display
         * @param {string} url - URL to load in iframe
         * @returns {boolean} Success status
         */
        openTab(id, title, url) {
            // Validate inputs
            if (!id || typeof id !== 'string') {
                console.warn('SWH: Tab ID must be a non-empty string');
                return false;
            }

            // Check for duplicate tab ID
            if (this.state.openTabs.find(tab => tab.id === id)) {
                console.warn(`SWH: Tab with ID "${id}" already exists`);
                this.switchTab(id); // Switch to existing tab
                return false;
            }

            // Check maxTabs limit
            if (this.state.openTabs.length >= this.config.maxTabs) {
                console.warn(`SWH: Maximum tabs limit (${this.config.maxTabs}) reached`);
                this.emit('maxTabsReached', { maxTabs: this.config.maxTabs });
                return false;
            }

            // Coerce title/url defensively so malformed input (e.g. from
            // corrupted localStorage) can never render as "undefined"
            const tabTitle = (typeof title === 'string' && title.trim()) ? title.trim() : id;
            const tabUrl = typeof url === 'string' ? url : '';

            const elementId = `swh-${this.instanceId}-${++this.tabCounter}`;

            // Create tab button
            const tabButton = this.createTabButton(id, tabTitle, elementId);

            // Create iframe
            const iframe = this.createIframe(id, tabUrl, elementId);

            // Add to state
            this.state.openTabs.push({
                id: id,
                title: tabTitle,
                url: tabUrl,
                loaded: false
            });
            this.state.tabElements.set(id, tabButton);
            this.state.iframeElements.set(id, iframe);

            // Append to DOM
            this.config.tabsContainer.appendChild(tabButton);
            this.config.contentContainer.appendChild(iframe);

            // Schedule state persistence
            this.schedulePersist();

            // Emit event
            this.emit('tabOpened', { id, title: tabTitle, url: tabUrl });

            return true;
        }

        /**
         * Create a tab button element
         * @param {string} id - Tab ID
         * @param {string} title - Tab title
         * @param {string} elementId - Unique DOM ID shared with the tab panel
         * @returns {HTMLElement} Tab button element
         */
        createTabButton(id, title, elementId) {
            const button = document.createElement('button');
            button.className = 'swh-tab';
            button.id = `${elementId}-tab`;
            button.setAttribute('role', 'tab');
            button.setAttribute('data-swh-tab', id);
            button.setAttribute('aria-controls', `${elementId}-panel`);
            button.setAttribute('aria-selected', 'false');
            button.setAttribute('tabindex', '-1');
            button.textContent = title;

            // Add click handler to switch tabs
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(id);
            });

            button.addEventListener('keydown', (e) => {
                this.handleTabKeydown(e, id);
            });

            // Add close button if allowed
            if (this.config.allowClose) {
                const closeBtn = document.createElement('span');
                closeBtn.className = 'swh-tab-close';
                closeBtn.setAttribute('aria-hidden', 'true');
                closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
                closeBtn.setAttribute('title', 'Close tab');
                
                closeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.closeTab(id);
                });
                
                button.appendChild(closeBtn);
            }

            return button;
        }

        /**
         * Create an iframe element
         * @param {string} id - Tab ID
         * @param {string} url - URL to load
         * @param {string} elementId - Unique DOM ID shared with the tab
         * @returns {HTMLElement} Iframe element
         */
        createIframe(id, url, elementId) {
            const iframe = document.createElement('iframe');
            iframe.className = 'swh-iframe';
            iframe.id = `${elementId}-panel`;
            iframe.setAttribute('role', 'tabpanel');
            iframe.setAttribute('data-swh-iframe', id);
            iframe.setAttribute('data-url', url);
            iframe.setAttribute('aria-labelledby', `${elementId}-tab`);
            iframe.style.display = 'none';

            // Apply optional sandboxing
            if (this.config.sandbox === true) {
                iframe.setAttribute('sandbox', '');
            } else if (typeof this.config.sandbox === 'string' && this.config.sandbox.trim()) {
                iframe.setAttribute('sandbox', this.config.sandbox.trim());
            }

            // Add load event handler
            iframe.addEventListener('load', () => {
                iframe.classList.remove('loading');

                // Only mark as loaded if iframe actually has a src
                // (empty iframes fire load event too, but we don't want to mark those as loaded)
                if (iframe.getAttribute('src')) {
                    const tab = this.state.openTabs.find(t => t.id === id);
                    if (tab) {
                        tab.loaded = true;
                        this.emit('tabLoaded', { id });
                    }
                }
            });

            return iframe;
        }

        /**
         * Handle keyboard navigation within the tab list
         * @param {KeyboardEvent} event - Keyboard event
         * @param {string} id - Current tab ID
         */
        handleTabKeydown(event, id) {
            const currentIndex = this.state.openTabs.findIndex(tab => tab.id === id);
            if (currentIndex === -1) {
                return;
            }

            let targetIndex = null;

            if (event.key === 'ArrowLeft') {
                targetIndex = (currentIndex - 1 + this.state.openTabs.length) % this.state.openTabs.length;
            } else if (event.key === 'ArrowRight') {
                targetIndex = (currentIndex + 1) % this.state.openTabs.length;
            } else if (event.key === 'Home') {
                targetIndex = 0;
            } else if (event.key === 'End') {
                targetIndex = this.state.openTabs.length - 1;
            } else if (event.key === 'Delete' && this.config.allowClose) {
                event.preventDefault();
                if (this.closeTab(id)) {
                    const activeTab = this.state.tabElements.get(this.state.activeTabId);
                    if (activeTab) {
                        activeTab.focus();
                    }
                }
                return;
            } else {
                return;
            }

            event.preventDefault();
            const targetTab = this.state.openTabs[targetIndex];
            if (targetTab && this.switchTab(targetTab.id)) {
                this.state.tabElements.get(targetTab.id).focus();
            }
        }

        /**
         * Switch to a specific tab
         * @param {string} id - Tab ID to switch to
         * @returns {boolean} Success status
         */
        switchTab(id) {
            const tab = this.state.openTabs.find(t => t.id === id);
            if (!tab) {
                console.warn(`SWH: Tab "${id}" not found`);
                return false;
            }

            const tabElement = this.state.tabElements.get(id);
            const iframeElement = this.state.iframeElements.get(id);

            if (!tabElement || !iframeElement) {
                console.error(`SWH: Elements for tab "${id}" not found`);
                return false;
            }

            // Deactivate current active tab
            if (this.state.activeTabId) {
                const currentTabElement = this.state.tabElements.get(this.state.activeTabId);
                const currentIframeElement = this.state.iframeElements.get(this.state.activeTabId);
                
                if (currentTabElement) {
                    currentTabElement.classList.remove('active');
                    currentTabElement.setAttribute('aria-selected', 'false');
                    currentTabElement.setAttribute('tabindex', '-1');
                }
                if (currentIframeElement) {
                    currentIframeElement.style.display = 'none';
                }
            }

            // Activate target tab
            tabElement.classList.add('active');
            tabElement.setAttribute('aria-selected', 'true');
            tabElement.setAttribute('tabindex', '0');
            iframeElement.style.display = 'block';

            // Keep the active tab visible when the tab bar overflows
            if (typeof tabElement.scrollIntoView === 'function') {
                tabElement.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            }

            // Lazy load: set src only on first activation
            // Use getAttribute to check if src attribute is actually set (not the resolved URL)
            if (!tab.loaded && !iframeElement.getAttribute('src')) {
                iframeElement.classList.add('loading');
                iframeElement.src = tab.url;
            }

            // Update state
            this.state.activeTabId = id;

            // Schedule state persistence
            this.schedulePersist();

            // Emit event
            this.emit('tabSwitched', { id, tab });

            return true;
        }

        /**
         * Close a specific tab
         * @param {string} id - Tab ID to close
         * @param {boolean} [force=false] - Internal: bypass the last-tab guard (used by clearTabs)
         * @returns {boolean} Success status
         */
        closeTab(id, force = false) {
            // Prevent closing if only one tab remains
            if (!force && this.state.openTabs.length <= 1) {
                console.warn('SWH: Cannot close the last remaining tab');
                return false;
            }

            const tabIndex = this.state.openTabs.findIndex(t => t.id === id);
            if (tabIndex === -1) {
                console.warn(`SWH: Tab "${id}" not found`);
                return false;
            }

            const tabElement = this.state.tabElements.get(id);
            const iframeElement = this.state.iframeElements.get(id);

            // Remove from DOM
            if (tabElement && tabElement.parentNode) {
                tabElement.parentNode.removeChild(tabElement);
            }
            if (iframeElement && iframeElement.parentNode) {
                iframeElement.parentNode.removeChild(iframeElement);
            }

            // Remove from state
            this.state.openTabs.splice(tabIndex, 1);
            this.state.tabElements.delete(id);
            this.state.iframeElements.delete(id);

            // If closing active tab, switch to adjacent tab
            if (this.state.activeTabId === id) {
                const newIndex = Math.max(0, tabIndex - 1);
                const newTab = this.state.openTabs[newIndex];
                if (newTab) {
                    this.switchTab(newTab.id);
                }
            }

            // Schedule state persistence
            this.schedulePersist();

            // Emit event
            this.emit('tabClosed', { id });

            return true;
        }

        /**
         * Reload a specific tab's iframe
         * @param {string} id - Tab ID to reload
         * @returns {boolean} Success status
         */
        reloadTab(id) {
            const tab = this.state.openTabs.find(t => t.id === id);
            const iframeElement = this.state.iframeElements.get(id);

            if (!tab || !iframeElement) {
                console.warn(`SWH: Tab "${id}" not found`);
                return false;
            }

            // Reset loaded state
            tab.loaded = false;

            // Force a fresh navigation: removing the src attribute and re-assigning
            // it guarantees a reload even when the URL is unchanged, and works for
            // cross-origin frames (unlike contentWindow.location.reload())
            iframeElement.removeAttribute('src');
            if (tab.url) {
                iframeElement.classList.add('loading');
                iframeElement.src = tab.url;
            }

            return true;
        }

        /**
         * Get array of currently open tabs
         * @returns {Array} Array of tab objects
         */
        getOpenTabs() {
            return this.state.openTabs.map(tab => ({...tab}));
        }

        /**
         * Get currently active tab ID
         * @returns {string|null} Active tab ID
         */
        getActiveTab() {
            return this.state.activeTabId;
        }

        /**
         * Close all tabs and clear state from localStorage
         */
        clearTabs() {
            // Close every tab (force bypasses the last-tab guard)
            const tabIds = this.state.openTabs.map(t => t.id);
            tabIds.forEach(id => this.closeTab(id, true));

            this.state.activeTabId = null;

            // Cancel any pending debounced persist so it cannot re-write
            // storage after the removeItem below
            this.cancelScheduledPersist();

            // Clear localStorage
            try {
                localStorage.removeItem(this.config.storageKey);
            } catch (e) {
                console.warn('SWH: Failed to clear localStorage', e);
            }
        }

        /**
         * Destroy the instance: removes all created DOM elements,
         * clears state and event listeners, and detaches from the container.
         * Does not touch the persisted state in localStorage.
         */
        destroy() {
            // Stop pending persistence and stop listening for pagehide
            this.cancelScheduledPersist();
            window.removeEventListener('pagehide', this._handlePageHide);

            // Remove all created tab buttons and iframes from the DOM
            this.state.tabElements.forEach(element => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            });
            this.state.iframeElements.forEach(element => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            });

            // Reset internal state
            this.state.openTabs = [];
            this.state.tabElements.clear();
            this.state.iframeElements.clear();
            this.state.activeTabId = null;

            // Drop all registered event listeners
            this.events.clear();

            // Remove the tablist role and the aria-label we applied (if any)
            this.config.tabsContainer.removeAttribute('role');
            if (this._ownsAriaLabel) {
                this.config.tabsContainer.removeAttribute('aria-label');
            }

            // Detach the instance reference from the container
            if (this.config.container._swhInstance === this) {
                delete this.config.container._swhInstance;
            }
        }

        /**
         * Persist current state to localStorage immediately
         */
        persistState() {
            try {
                const state = {
                    openTabs: this.state.openTabs,
                    activeTabId: this.state.activeTabId
                };
                localStorage.setItem(this.config.storageKey, JSON.stringify(state));
            } catch (e) {
                console.warn('SWH: Failed to persist state to localStorage', e);
            }
        }

        /**
         * Schedule a debounced persistState call (used for high-frequency
         * operations like open/switch/close)
         */
        schedulePersist() {
            if (this._persistTimer !== null) {
                clearTimeout(this._persistTimer);
            }
            this._persistTimer = setTimeout(() => {
                this._persistTimer = null;
                this.persistState();
            }, 150);
        }

        /**
         * Cancel a pending debounced persist
         */
        cancelScheduledPersist() {
            if (this._persistTimer !== null) {
                clearTimeout(this._persistTimer);
                this._persistTimer = null;
            }
        }

        /**
         * Restore state from localStorage
         * @returns {boolean} Whether state was restored
         */
        restoreState() {
            try {
                const stored = localStorage.getItem(this.config.storageKey);
                if (!stored) {
                    return false;
                }

                const state = JSON.parse(stored);
                if (!state || !Array.isArray(state.openTabs)) {
                    return false;
                }

                // Only keep well-formed entries (id is required; title/url are
                // coerced defensively by openTab)
                const validTabs = state.openTabs.filter(tab =>
                    tab && typeof tab.id === 'string' && tab.id.trim() !== ''
                );
                if (validTabs.length === 0) {
                    return false;
                }

                // Recreate tabs from stored state
                validTabs.forEach(tab => {
                    this.openTab(tab.id, tab.title, tab.url);
                });

                if (this.state.openTabs.length === 0) {
                    // Nothing could be reopened (e.g. maxTabs is 0)
                    return false;
                }

                // Restore active tab, falling back to defaultTab, then to the
                // first restored tab so the UI is never left blank
                const hasActive = state.activeTabId &&
                    this.state.openTabs.some(t => t.id === state.activeTabId);
                if (hasActive) {
                    this.switchTab(state.activeTabId);
                } else {
                    const fallback = (this.config.defaultTab &&
                        this.state.openTabs.some(t => t.id === this.config.defaultTab))
                        ? this.config.defaultTab
                        : this.state.openTabs[0].id;
                    this.switchTab(fallback);
                }

                return true;
            } catch (e) {
                console.warn('SWH: Failed to restore state from localStorage', e);
                return false;
            }
        }

        /**
         * Register an event listener
         * @param {string} event - Event name
         * @param {Function} callback - Callback function
         */
        on(event, callback) {
            if (typeof callback !== 'function') {
                console.warn('SWH: Event callback must be a function');
                return;
            }

            if (!this.events.has(event)) {
                this.events.set(event, []);
            }
            this.events.get(event).push(callback);
        }

        /**
         * Unregister an event listener
         * @param {string} event - Event name
         * @param {Function} callback - Callback function to remove
         */
        off(event, callback) {
            if (!this.events.has(event)) {
                return;
            }

            const callbacks = this.events.get(event);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }

        /**
         * Emit an event
         * @param {string} event - Event name
         * @param {*} data - Event data
         */
        emit(event, data) {
            if (!this.events.has(event)) {
                return;
            }

            const callbacks = this.events.get(event);
            callbacks.forEach(callback => {
                try {
                    callback(data);
                } catch (e) {
                    console.error(`SWH: Error in event handler for "${event}"`, e);
                }
            });
        }
    }

    /**
     * Auto-initialize SWH instances from HTML attributes
     */
    function autoInit() {
        const containers = document.querySelectorAll('[data-swh]');
        let defaultKeyUsage = 0;

        containers.forEach(container => {
            // Extract configuration from data attributes
            // The legacy default key 'swh-tabs' is only kept for the first
            // keyless container; subsequent ones get derived keys so multiple
            // instances never overwrite each other's state
            let storageKey = container.getAttribute('data-swh-storage-key');
            if (!storageKey) {
                defaultKeyUsage++;
                storageKey = defaultKeyUsage === 1 ? 'swh-tabs' : `swh-tabs-${defaultKeyUsage}`;
            }

            const maxTabsAttr = parseInt(container.getAttribute('data-swh-max-tabs'), 10);
            const sandboxAttr = container.getAttribute('data-swh-sandbox');

            const config = {
                container: container,
                tabsContainer: container.querySelector('[data-swh-tabs]'),
                contentContainer: container.querySelector('[data-swh-content]'),
                storageKey: storageKey,
                defaultTab: container.getAttribute('data-swh-default-tab') || null,
                allowClose: container.hasAttribute('data-swh-allow-close'),
                maxTabs: (maxTabsAttr !== null && !isNaN(maxTabsAttr) && maxTabsAttr >= 0) ? maxTabsAttr : Infinity,
                sandbox: sandboxAttr === null ? false : (sandboxAttr.trim() ? sandboxAttr.trim() : true),
                tabsLabel: container.getAttribute('data-swh-tabs-label') || undefined
            };

            // Discover preset tabs from existing markup
            const presetTabs = [];
            const tabButtons = container.querySelectorAll('[data-swh-tab]');

            tabButtons.forEach(button => {
                const id = button.getAttribute('data-swh-tab');
                const title = button.textContent.trim();
                const iframe = container.querySelector(`[data-swh-iframe="${id}"]`);

                if (iframe) {
                    const url = iframe.getAttribute('data-url') || iframe.getAttribute('src') || '';
                    presetTabs.push({ id, title, url });

                    // Remove original elements (will be recreated by SWH)
                    button.parentNode.removeChild(button);
                    iframe.parentNode.removeChild(iframe);
                } else {
                    // Orphan tab button without matching iframe: SWH cannot
                    // manage it, so remove it instead of leaving dead markup
                    console.warn(`SWH: No iframe found for tab "${id}"; removing orphan tab button`);
                    button.parentNode.removeChild(button);
                }
            });

            config.presetTabs = presetTabs;

            // Create SWH instance
            const instance = new SWH(config);
            
            // Store instance on container for programmatic access
            container._swhInstance = instance;
        });
    }

    // Auto-initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoInit);
    } else {
        autoInit();
    }

    // Export SWH to global scope
    window.SWH = SWH;

    return SWH;
})(window);

export default SWH;

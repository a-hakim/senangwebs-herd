(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SWH"] = factory();
	else
		root["SWH"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/swh.css"
/*!*************************!*\
  !*** ./src/css/swh.css ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/swh.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_swh_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/swh.css */ "./src/css/swh.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * SenangWebs Herd (SWH)
 * A lightweight library for managing multiple HTML files within a single page using tabs and lazy-loaded iframes.
 * @version 1.1.0
 */

var SWH = function (window) {
  'use strict';

  var instanceCounter = 0;

  // Tracks storage keys already claimed by instances so collisions can be warned about
  var storageKeyRegistry = new Set();

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
  var SWH = /*#__PURE__*/function () {
    function SWH() {
      var _this = this;
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, SWH);
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
        maxTabs: typeof config.maxTabs === 'number' && config.maxTabs >= 0 ? config.maxTabs : Infinity,
        sandbox: config.sandbox === true || typeof config.sandbox === 'string' && config.sandbox.trim() ? config.sandbox : false,
        tabsLabel: typeof config.tabsLabel === 'string' && config.tabsLabel.trim() ? config.tabsLabel.trim() : 'Tabs'
      };

      // Warn when another instance already uses the same storage key,
      // as both instances will read/write each other's tab state
      if (storageKeyRegistry.has(this.config.storageKey)) {
        console.warn("SWH: storageKey \"".concat(this.config.storageKey, "\" is already in use by another instance; their states may overwrite each other"));
      } else {
        storageKeyRegistry.add(this.config.storageKey);
      }
      this.instanceId = ++instanceCounter;
      this.tabCounter = 0;

      // Initialize internal state
      this.state = {
        openTabs: [],
        // Array of {id, title, url, loaded}
        activeTabId: null,
        // Currently active tab ID
        tabElements: new Map(),
        // Map of tab ID to tab button element
        iframeElements: new Map() // Map of tab ID to iframe element
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
      this._handlePageHide = function () {
        _this.cancelScheduledPersist();
        _this.persistState();
      };
      window.addEventListener('pagehide', this._handlePageHide);

      // Initialize the instance
      this.init();
    }

    /**
     * Initialize SWH instance
     */
    return _createClass(SWH, [{
      key: "init",
      value: function init() {
        var _this2 = this;
        // Try to restore state from localStorage
        var restored = this.restoreState();

        // If no state was restored, create preset tabs
        if (!restored && this.config.presetTabs.length > 0) {
          this.config.presetTabs.forEach(function (tab) {
            _this2.openTab(tab.id, tab.title, tab.url);
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
    }, {
      key: "openTab",
      value: function openTab(id, title, url) {
        // Validate inputs
        if (!id || typeof id !== 'string') {
          console.warn('SWH: Tab ID must be a non-empty string');
          return false;
        }

        // Check for duplicate tab ID
        if (this.state.openTabs.find(function (tab) {
          return tab.id === id;
        })) {
          console.warn("SWH: Tab with ID \"".concat(id, "\" already exists"));
          this.switchTab(id); // Switch to existing tab
          return false;
        }

        // Check maxTabs limit
        if (this.state.openTabs.length >= this.config.maxTabs) {
          console.warn("SWH: Maximum tabs limit (".concat(this.config.maxTabs, ") reached"));
          this.emit('maxTabsReached', {
            maxTabs: this.config.maxTabs
          });
          return false;
        }

        // Coerce title/url defensively so malformed input (e.g. from
        // corrupted localStorage) can never render as "undefined"
        var tabTitle = typeof title === 'string' && title.trim() ? title.trim() : id;
        var tabUrl = typeof url === 'string' ? url : '';
        var elementId = "swh-".concat(this.instanceId, "-").concat(++this.tabCounter);

        // Create tab button
        var tabButton = this.createTabButton(id, tabTitle, elementId);

        // Create iframe
        var iframe = this.createIframe(id, tabUrl, elementId);

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
        this.emit('tabOpened', {
          id: id,
          title: tabTitle,
          url: tabUrl
        });
        return true;
      }

      /**
       * Create a tab button element
       * @param {string} id - Tab ID
       * @param {string} title - Tab title
       * @param {string} elementId - Unique DOM ID shared with the tab panel
       * @returns {HTMLElement} Tab button element
       */
    }, {
      key: "createTabButton",
      value: function createTabButton(id, title, elementId) {
        var _this3 = this;
        var button = document.createElement('button');
        button.className = 'swh-tab';
        button.id = "".concat(elementId, "-tab");
        button.setAttribute('role', 'tab');
        button.setAttribute('data-swh-tab', id);
        button.setAttribute('aria-controls', "".concat(elementId, "-panel"));
        button.setAttribute('aria-selected', 'false');
        button.setAttribute('tabindex', '-1');
        button.textContent = title;

        // Add click handler to switch tabs
        button.addEventListener('click', function (e) {
          e.preventDefault();
          _this3.switchTab(id);
        });
        button.addEventListener('keydown', function (e) {
          _this3.handleTabKeydown(e, id);
        });

        // Add close button if allowed
        if (this.config.allowClose) {
          var closeBtn = document.createElement('span');
          closeBtn.className = 'swh-tab-close';
          closeBtn.setAttribute('aria-hidden', 'true');
          closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
          closeBtn.setAttribute('title', 'Close tab');
          closeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            _this3.closeTab(id);
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
    }, {
      key: "createIframe",
      value: function createIframe(id, url, elementId) {
        var _this4 = this;
        var iframe = document.createElement('iframe');
        iframe.className = 'swh-iframe';
        iframe.id = "".concat(elementId, "-panel");
        iframe.setAttribute('role', 'tabpanel');
        iframe.setAttribute('data-swh-iframe', id);
        iframe.setAttribute('data-url', url);
        iframe.setAttribute('aria-labelledby', "".concat(elementId, "-tab"));
        iframe.style.display = 'none';

        // Apply optional sandboxing
        if (this.config.sandbox === true) {
          iframe.setAttribute('sandbox', '');
        } else if (typeof this.config.sandbox === 'string' && this.config.sandbox.trim()) {
          iframe.setAttribute('sandbox', this.config.sandbox.trim());
        }

        // Add load event handler
        iframe.addEventListener('load', function () {
          iframe.classList.remove('loading');

          // Only mark as loaded if iframe actually has a src
          // (empty iframes fire load event too, but we don't want to mark those as loaded)
          if (iframe.getAttribute('src')) {
            var tab = _this4.state.openTabs.find(function (t) {
              return t.id === id;
            });
            if (tab) {
              tab.loaded = true;
              _this4.emit('tabLoaded', {
                id: id
              });
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
    }, {
      key: "handleTabKeydown",
      value: function handleTabKeydown(event, id) {
        var currentIndex = this.state.openTabs.findIndex(function (tab) {
          return tab.id === id;
        });
        if (currentIndex === -1) {
          return;
        }
        var targetIndex = null;
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
            var activeTab = this.state.tabElements.get(this.state.activeTabId);
            if (activeTab) {
              activeTab.focus();
            }
          }
          return;
        } else {
          return;
        }
        event.preventDefault();
        var targetTab = this.state.openTabs[targetIndex];
        if (targetTab && this.switchTab(targetTab.id)) {
          this.state.tabElements.get(targetTab.id).focus();
        }
      }

      /**
       * Switch to a specific tab
       * @param {string} id - Tab ID to switch to
       * @returns {boolean} Success status
       */
    }, {
      key: "switchTab",
      value: function switchTab(id) {
        var tab = this.state.openTabs.find(function (t) {
          return t.id === id;
        });
        if (!tab) {
          console.warn("SWH: Tab \"".concat(id, "\" not found"));
          return false;
        }
        var tabElement = this.state.tabElements.get(id);
        var iframeElement = this.state.iframeElements.get(id);
        if (!tabElement || !iframeElement) {
          console.error("SWH: Elements for tab \"".concat(id, "\" not found"));
          return false;
        }

        // Deactivate current active tab
        if (this.state.activeTabId) {
          var currentTabElement = this.state.tabElements.get(this.state.activeTabId);
          var currentIframeElement = this.state.iframeElements.get(this.state.activeTabId);
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
          tabElement.scrollIntoView({
            block: 'nearest',
            inline: 'nearest'
          });
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
        this.emit('tabSwitched', {
          id: id,
          tab: tab
        });
        return true;
      }

      /**
       * Close a specific tab
       * @param {string} id - Tab ID to close
       * @param {boolean} [force=false] - Internal: bypass the last-tab guard (used by clearTabs)
       * @returns {boolean} Success status
       */
    }, {
      key: "closeTab",
      value: function closeTab(id) {
        var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        // Prevent closing if only one tab remains
        if (!force && this.state.openTabs.length <= 1) {
          console.warn('SWH: Cannot close the last remaining tab');
          return false;
        }
        var tabIndex = this.state.openTabs.findIndex(function (t) {
          return t.id === id;
        });
        if (tabIndex === -1) {
          console.warn("SWH: Tab \"".concat(id, "\" not found"));
          return false;
        }
        var tabElement = this.state.tabElements.get(id);
        var iframeElement = this.state.iframeElements.get(id);

        // Remove from DOM
        if (tabElement && tabElement.parentNode) {
          tabElement.parentNode.removeChild(tabElement);
        }
        if (iframeElement && iframeElement.parentNode) {
          iframeElement.parentNode.removeChild(iframeElement);
        }

        // Remove from state
        this.state.openTabs.splice(tabIndex, 1);
        this.state.tabElements["delete"](id);
        this.state.iframeElements["delete"](id);

        // If closing active tab, switch to adjacent tab
        if (this.state.activeTabId === id) {
          var newIndex = Math.max(0, tabIndex - 1);
          var newTab = this.state.openTabs[newIndex];
          if (newTab) {
            this.switchTab(newTab.id);
          }
        }

        // Schedule state persistence
        this.schedulePersist();

        // Emit event
        this.emit('tabClosed', {
          id: id
        });
        return true;
      }

      /**
       * Reload a specific tab's iframe
       * @param {string} id - Tab ID to reload
       * @returns {boolean} Success status
       */
    }, {
      key: "reloadTab",
      value: function reloadTab(id) {
        var tab = this.state.openTabs.find(function (t) {
          return t.id === id;
        });
        var iframeElement = this.state.iframeElements.get(id);
        if (!tab || !iframeElement) {
          console.warn("SWH: Tab \"".concat(id, "\" not found"));
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
    }, {
      key: "getOpenTabs",
      value: function getOpenTabs() {
        return this.state.openTabs.map(function (tab) {
          return _objectSpread({}, tab);
        });
      }

      /**
       * Get currently active tab ID
       * @returns {string|null} Active tab ID
       */
    }, {
      key: "getActiveTab",
      value: function getActiveTab() {
        return this.state.activeTabId;
      }

      /**
       * Close all tabs and clear state from localStorage
       */
    }, {
      key: "clearTabs",
      value: function clearTabs() {
        var _this5 = this;
        // Close every tab (force bypasses the last-tab guard)
        var tabIds = this.state.openTabs.map(function (t) {
          return t.id;
        });
        tabIds.forEach(function (id) {
          return _this5.closeTab(id, true);
        });
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
    }, {
      key: "destroy",
      value: function destroy() {
        // Stop pending persistence and stop listening for pagehide
        this.cancelScheduledPersist();
        window.removeEventListener('pagehide', this._handlePageHide);

        // Remove all created tab buttons and iframes from the DOM
        this.state.tabElements.forEach(function (element) {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        });
        this.state.iframeElements.forEach(function (element) {
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
    }, {
      key: "persistState",
      value: function persistState() {
        try {
          var state = {
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
    }, {
      key: "schedulePersist",
      value: function schedulePersist() {
        var _this6 = this;
        if (this._persistTimer !== null) {
          clearTimeout(this._persistTimer);
        }
        this._persistTimer = setTimeout(function () {
          _this6._persistTimer = null;
          _this6.persistState();
        }, 150);
      }

      /**
       * Cancel a pending debounced persist
       */
    }, {
      key: "cancelScheduledPersist",
      value: function cancelScheduledPersist() {
        if (this._persistTimer !== null) {
          clearTimeout(this._persistTimer);
          this._persistTimer = null;
        }
      }

      /**
       * Restore state from localStorage
       * @returns {boolean} Whether state was restored
       */
    }, {
      key: "restoreState",
      value: function restoreState() {
        var _this7 = this;
        try {
          var stored = localStorage.getItem(this.config.storageKey);
          if (!stored) {
            return false;
          }
          var state = JSON.parse(stored);
          if (!state || !Array.isArray(state.openTabs)) {
            return false;
          }

          // Only keep well-formed entries (id is required; title/url are
          // coerced defensively by openTab)
          var validTabs = state.openTabs.filter(function (tab) {
            return tab && typeof tab.id === 'string' && tab.id.trim() !== '';
          });
          if (validTabs.length === 0) {
            return false;
          }

          // Recreate tabs from stored state
          validTabs.forEach(function (tab) {
            _this7.openTab(tab.id, tab.title, tab.url);
          });
          if (this.state.openTabs.length === 0) {
            // Nothing could be reopened (e.g. maxTabs is 0)
            return false;
          }

          // Restore active tab, falling back to defaultTab, then to the
          // first restored tab so the UI is never left blank
          var hasActive = state.activeTabId && this.state.openTabs.some(function (t) {
            return t.id === state.activeTabId;
          });
          if (hasActive) {
            this.switchTab(state.activeTabId);
          } else {
            var fallback = this.config.defaultTab && this.state.openTabs.some(function (t) {
              return t.id === _this7.config.defaultTab;
            }) ? this.config.defaultTab : this.state.openTabs[0].id;
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
    }, {
      key: "on",
      value: function on(event, callback) {
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
    }, {
      key: "off",
      value: function off(event, callback) {
        if (!this.events.has(event)) {
          return;
        }
        var callbacks = this.events.get(event);
        var index = callbacks.indexOf(callback);
        if (index > -1) {
          callbacks.splice(index, 1);
        }
      }

      /**
       * Emit an event
       * @param {string} event - Event name
       * @param {*} data - Event data
       */
    }, {
      key: "emit",
      value: function emit(event, data) {
        if (!this.events.has(event)) {
          return;
        }
        var callbacks = this.events.get(event);
        callbacks.forEach(function (callback) {
          try {
            callback(data);
          } catch (e) {
            console.error("SWH: Error in event handler for \"".concat(event, "\""), e);
          }
        });
      }
    }]);
  }();
  /**
   * Auto-initialize SWH instances from HTML attributes
   */
  function autoInit() {
    var containers = document.querySelectorAll('[data-swh]');
    var defaultKeyUsage = 0;
    containers.forEach(function (container) {
      // Extract configuration from data attributes
      // The legacy default key 'swh-tabs' is only kept for the first
      // keyless container; subsequent ones get derived keys so multiple
      // instances never overwrite each other's state
      var storageKey = container.getAttribute('data-swh-storage-key');
      if (!storageKey) {
        defaultKeyUsage++;
        storageKey = defaultKeyUsage === 1 ? 'swh-tabs' : "swh-tabs-".concat(defaultKeyUsage);
      }
      var maxTabsAttr = parseInt(container.getAttribute('data-swh-max-tabs'), 10);
      var sandboxAttr = container.getAttribute('data-swh-sandbox');
      var config = {
        container: container,
        tabsContainer: container.querySelector('[data-swh-tabs]'),
        contentContainer: container.querySelector('[data-swh-content]'),
        storageKey: storageKey,
        defaultTab: container.getAttribute('data-swh-default-tab') || null,
        allowClose: container.hasAttribute('data-swh-allow-close'),
        maxTabs: maxTabsAttr !== null && !isNaN(maxTabsAttr) && maxTabsAttr >= 0 ? maxTabsAttr : Infinity,
        sandbox: sandboxAttr === null ? false : sandboxAttr.trim() ? sandboxAttr.trim() : true,
        tabsLabel: container.getAttribute('data-swh-tabs-label') || undefined
      };

      // Discover preset tabs from existing markup
      var presetTabs = [];
      var tabButtons = container.querySelectorAll('[data-swh-tab]');
      tabButtons.forEach(function (button) {
        var id = button.getAttribute('data-swh-tab');
        var title = button.textContent.trim();
        var iframe = container.querySelector("[data-swh-iframe=\"".concat(id, "\"]"));
        if (iframe) {
          var url = iframe.getAttribute('data-url') || iframe.getAttribute('src') || '';
          presetTabs.push({
            id: id,
            title: title,
            url: url
          });

          // Remove original elements (will be recreated by SWH)
          button.parentNode.removeChild(button);
          iframe.parentNode.removeChild(iframe);
        } else {
          // Orphan tab button without matching iframe: SWH cannot
          // manage it, so remove it instead of leaving dead markup
          console.warn("SWH: No iframe found for tab \"".concat(id, "\"; removing orphan tab button"));
          button.parentNode.removeChild(button);
        }
      });
      config.presetTabs = presetTabs;

      // Create SWH instance
      var instance = new SWH(config);

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
}(window);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SWH);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=swh.js.map
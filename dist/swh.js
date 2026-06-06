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
 * @version 1.0.0
 */

var SWH = function (window) {
  'use strict';

  var instanceCounter = 0;

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
   */
  var SWH = /*#__PURE__*/function () {
    function SWH() {
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
        maxTabs: config.maxTabs || Infinity
      };
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

      // Initialize the instance
      this.init();
    }

    /**
     * Initialize SWH instance
     */
    return _createClass(SWH, [{
      key: "init",
      value: function init() {
        var _this = this;
        // Try to restore state from localStorage
        var restored = this.restoreState();

        // If no state was restored, create preset tabs
        if (!restored && this.config.presetTabs.length > 0) {
          this.config.presetTabs.forEach(function (tab) {
            _this.openTab(tab.id, tab.title, tab.url);
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
        var elementId = "swh-".concat(this.instanceId, "-").concat(++this.tabCounter);

        // Create tab button
        var tabButton = this.createTabButton(id, title, elementId);

        // Create iframe
        var iframe = this.createIframe(id, url, elementId);

        // Add to state
        this.state.openTabs.push({
          id: id,
          title: title,
          url: url,
          loaded: false
        });
        this.state.tabElements.set(id, tabButton);
        this.state.iframeElements.set(id, iframe);

        // Append to DOM
        this.config.tabsContainer.appendChild(tabButton);
        this.config.contentContainer.appendChild(iframe);

        // Persist state
        this.persistState();

        // Emit event
        this.emit('tabOpened', {
          id: id,
          title: title,
          url: url
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
        var _this2 = this;
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
          _this2.switchTab(id);
        });
        button.addEventListener('keydown', function (e) {
          _this2.handleTabKeydown(e, id);
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
            _this2.closeTab(id);
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
        var _this3 = this;
        var iframe = document.createElement('iframe');
        iframe.className = 'swh-iframe';
        iframe.id = "".concat(elementId, "-panel");
        iframe.setAttribute('role', 'tabpanel');
        iframe.setAttribute('data-swh-iframe', id);
        iframe.setAttribute('data-url', url);
        iframe.setAttribute('aria-labelledby', "".concat(elementId, "-tab"));
        iframe.style.display = 'none';

        // Add load event handler
        iframe.addEventListener('load', function () {
          // Only mark as loaded if iframe actually has a src
          // (empty iframes fire load event too, but we don't want to mark those as loaded)
          if (iframe.getAttribute('src')) {
            var tab = _this3.state.openTabs.find(function (t) {
              return t.id === id;
            });
            if (tab) {
              tab.loaded = true;
              _this3.emit('tabLoaded', {
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

        // Lazy load: set src only on first activation
        // Use getAttribute to check if src attribute is actually set (not the resolved URL)
        if (!tab.loaded && !iframeElement.getAttribute('src')) {
          iframeElement.src = tab.url;
        }

        // Update state
        this.state.activeTabId = id;

        // Persist state
        this.persistState();

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
       * @returns {boolean} Success status
       */
    }, {
      key: "closeTab",
      value: function closeTab(id) {
        // Prevent closing if only one tab remains
        if (this.state.openTabs.length <= 1) {
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

        // Persist state
        this.persistState();

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

        // Reload iframe
        if (iframeElement.src) {
          iframeElement.src = iframeElement.src;
        } else {
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
       * Close all tabs and clear state
       */
    }, {
      key: "clearTabs",
      value: function clearTabs() {
        // Close all tabs except the first one
        var tabIds = this.state.openTabs.map(function (t) {
          return t.id;
        });
        for (var i = tabIds.length - 1; i > 0; i--) {
          this.closeTab(tabIds[i]);
        }

        // Clear localStorage
        try {
          localStorage.removeItem(this.config.storageKey);
        } catch (e) {
          console.warn('SWH: Failed to clear localStorage', e);
        }
      }

      /**
       * Persist current state to localStorage
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
       * Restore state from localStorage
       * @returns {boolean} Whether state was restored
       */
    }, {
      key: "restoreState",
      value: function restoreState() {
        var _this4 = this;
        try {
          var stored = localStorage.getItem(this.config.storageKey);
          if (!stored) {
            return false;
          }
          var state = JSON.parse(stored);
          if (!state || !Array.isArray(state.openTabs) || state.openTabs.length === 0) {
            return false;
          }

          // Recreate tabs from stored state
          state.openTabs.forEach(function (tab) {
            _this4.openTab(tab.id, tab.title, tab.url);
          });

          // Restore active tab
          if (state.activeTabId) {
            this.switchTab(state.activeTabId);
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
    containers.forEach(function (container) {
      // Extract configuration from data attributes
      var config = {
        container: container,
        tabsContainer: container.querySelector('[data-swh-tabs]'),
        contentContainer: container.querySelector('[data-swh-content]'),
        storageKey: container.getAttribute('data-swh-storage-key') || 'swh-tabs',
        defaultTab: container.getAttribute('data-swh-default-tab') || null,
        allowClose: container.hasAttribute('data-swh-allow-close'),
        maxTabs: parseInt(container.getAttribute('data-swh-max-tabs')) || Infinity
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
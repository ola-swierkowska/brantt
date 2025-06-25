/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/moveto/dist/moveTo.js":
/*!********************************************!*\
  !*** ./node_modules/moveto/dist/moveTo.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
/*!
 * MoveTo - A lightweight scroll animation javascript library without any dependency.
 * Version 1.8.2 (28-06-2019 14:30)
 * Licensed under MIT
 * Copyright 2019 Hasan Aydoğdu <hsnaydd@gmail.com>
 */



var MoveTo = function () {
  /**
   * Defaults
   * @type {object}
   */
  var defaults = {
    tolerance: 0,
    duration: 800,
    easing: 'easeOutQuart',
    container: window,
    callback: function callback() {}
  };
  /**
   * easeOutQuart Easing Function
   * @param  {number} t - current time
   * @param  {number} b - start value
   * @param  {number} c - change in value
   * @param  {number} d - duration
   * @return {number} - calculated value
   */

  function easeOutQuart(t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
  }
  /**
   * Merge two object
   *
   * @param  {object} obj1
   * @param  {object} obj2
   * @return {object} merged object
   */


  function mergeObject(obj1, obj2) {
    var obj3 = {};
    Object.keys(obj1).forEach(function (propertyName) {
      obj3[propertyName] = obj1[propertyName];
    });
    Object.keys(obj2).forEach(function (propertyName) {
      obj3[propertyName] = obj2[propertyName];
    });
    return obj3;
  }

  ;
  /**
   * Converts camel case to kebab case
   * @param  {string} val the value to be converted
   * @return {string} the converted value
   */

  function kebabCase(val) {
    return val.replace(/([A-Z])/g, function ($1) {
      return '-' + $1.toLowerCase();
    });
  }

  ;
  /**
   * Count a number of item scrolled top
   * @param  {Window|HTMLElement} container
   * @return {number}
   */

  function countScrollTop(container) {
    if (container instanceof HTMLElement) {
      return container.scrollTop;
    }

    return container.pageYOffset;
  }

  ;
  /**
   * MoveTo Constructor
   * @param {object} options Options
   * @param {object} easeFunctions Custom ease functions
   */

  function MoveTo() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.options = mergeObject(defaults, options);
    this.easeFunctions = mergeObject({
      easeOutQuart: easeOutQuart
    }, easeFunctions);
  }
  /**
   * Register a dom element as trigger
   * @param  {HTMLElement} dom Dom trigger element
   * @param  {function} callback Callback function
   * @return {function|void} unregister function
   */


  MoveTo.prototype.registerTrigger = function (dom, callback) {
    var _this = this;

    if (!dom) {
      return;
    }

    var href = dom.getAttribute('href') || dom.getAttribute('data-target'); // The element to be scrolled

    var target = href && href !== '#' ? document.getElementById(href.substring(1)) : document.body;
    var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));

    if (typeof callback === 'function') {
      options.callback = callback;
    }

    var listener = function listener(e) {
      e.preventDefault();

      _this.move(target, options);
    };

    dom.addEventListener('click', listener, false);
    return function () {
      return dom.removeEventListener('click', listener, false);
    };
  };
  /**
   * Move
   * Scrolls to given element by using easeOutQuart function
   * @param  {HTMLElement|number} target Target element to be scrolled or target position
   * @param  {object} options Custom options
   */


  MoveTo.prototype.move = function (target) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (target !== 0 && !target) {
      return;
    }

    options = mergeObject(this.options, options);
    var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;
    var from = countScrollTop(options.container);
    var startTime = null;
    var lastYOffset;
    distance -= options.tolerance; // rAF loop

    var loop = function loop(currentTime) {
      var currentYOffset = countScrollTop(_this2.options.container);

      if (!startTime) {
        // To starts time from 1, we subtracted 1 from current time
        // If time starts from 1 The first loop will not do anything,
        // because easing value will be zero
        startTime = currentTime - 1;
      }

      var timeElapsed = currentTime - startTime;

      if (lastYOffset) {
        if (distance > 0 && lastYOffset > currentYOffset || distance < 0 && lastYOffset < currentYOffset) {
          return options.callback(target);
        }
      }

      lastYOffset = currentYOffset;

      var val = _this2.easeFunctions[options.easing](timeElapsed, from, distance, options.duration);

      options.container.scroll(0, val);

      if (timeElapsed < options.duration) {
        window.requestAnimationFrame(loop);
      } else {
        options.container.scroll(0, distance + from);
        options.callback(target);
      }
    };

    window.requestAnimationFrame(loop);
  };
  /**
   * Adds custom ease function
   * @param {string}   name Ease function name
   * @param {function} fn   Ease function
   */


  MoveTo.prototype.addEaseFunction = function (name, fn) {
    this.easeFunctions[name] = fn;
  };
  /**
   * Returns options which created from trigger dom element
   * @param  {HTMLElement} dom Trigger dom element
   * @param  {object} options The instance's options
   * @return {object} The options which created from trigger dom element
   */


  function _getOptionsFromTriggerDom(dom, options) {
    var domOptions = {};
    Object.keys(options).forEach(function (key) {
      var value = dom.getAttribute("data-mt-".concat(kebabCase(key)));

      if (value) {
        domOptions[key] = isNaN(value) ? value : parseInt(value, 10);
      }
    });
    return domOptions;
  }

  return MoveTo;
}();

if (true) {
  module.exports = MoveTo;
} else {}

/***/ }),

/***/ "./node_modules/reframe.js/dist/reframe.es.js":
/*!****************************************************!*\
  !*** ./node_modules/reframe.js/dist/reframe.es.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reframe)
/* harmony export */ });
/**
  reframe.js - Reframe.js: responsive iframes for embedded content
  @version v4.0.2
  @link https://github.com/yowainwright/reframe.ts#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (http://jeffry.in)
  @license MIT
**/
/**
 * REFRAME.TS 🖼
 * ---
 * @param target
 * @param cName
 * @summary defines the height/width ratio of the targeted <element>
 */
function reframe(target, cName) {
    var _a, _b;
    var frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
    var c = cName || 'js-reframe';
    if (!('length' in frames))
        frames = [frames];
    for (var i = 0; i < frames.length; i += 1) {
        var frame = frames[i];
        var hasClass = frame.className.split(' ').indexOf(c) !== -1;
        if (hasClass || frame.style.width.indexOf('%') > -1) {
            return;
        }
        // get height width attributes
        var height = frame.getAttribute('height') || frame.offsetHeight;
        var width = frame.getAttribute('width') || frame.offsetWidth;
        var heightNumber = typeof height === 'string' ? parseInt(height) : height;
        var widthNumber = typeof width === 'string' ? parseInt(width) : width;
        // general targeted <element> sizes
        var padding = (heightNumber / widthNumber) * 100;
        // created element <wrapper> of general reframed item
        // => set necessary styles of created element <wrapper>
        var div = document.createElement('div');
        div.className = c;
        var divStyles = div.style;
        divStyles.position = 'relative';
        divStyles.width = '100%';
        divStyles.paddingTop = "".concat(padding, "%");
        // set necessary styles of targeted <element>
        var frameStyle = frame.style;
        frameStyle.position = 'absolute';
        frameStyle.width = '100%';
        frameStyle.height = '100%';
        frameStyle.left = '0';
        frameStyle.top = '0';
        // reframe targeted <element>
        (_a = frame.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(div, frame);
        (_b = frame.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(frame);
        div.appendChild(frame);
    }
}




/***/ }),

/***/ "./src/scripts/modules/a11y-focus-search-field.js":
/*!********************************************************!*\
  !*** ./src/scripts/modules/a11y-focus-search-field.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initA11yFocusSearchField = () => {
  const urlSearch = window.location.search;
  const urlParams = new URLSearchParams(urlSearch);
  if (urlParams.has('s')) {
    const searchField = document.querySelector('main input[name="s"]');
    if (searchField) {
      searchField.focus({
        preventScroll: true
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initA11yFocusSearchField);

/***/ }),

/***/ "./src/scripts/modules/a11y-skip-link.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/a11y-skip-link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ "./node_modules/moveto/dist/moveTo.js");
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);

const initA11ySkipLink = () => {
  // Go through all the headings of the page and select the first one
  const a11ySkipLinkTarget = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
  const a11ySkipLink = document.querySelectorAll('.skip-link')[0];

  // Register trigger element
  // eslint-disable-next-line no-unused-vars, no-restricted-globals
  const moveTo = new (moveto__WEBPACK_IMPORTED_MODULE_0___default())();

  // When clicked, move focus to the target element

  if (a11ySkipLink) {
    a11ySkipLink.addEventListener('click', () => {
      a11ySkipLinkTarget.setAttribute('tabindex', '-1');
      a11ySkipLinkTarget.focus();
      moveTo.move(a11ySkipLinkTarget);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initA11ySkipLink);

/***/ }),

/***/ "./src/scripts/modules/anchors.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/anchors.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ "./node_modules/moveto/dist/moveTo.js");
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-param-reassign, no-undef */


const initAnchors = () => {
  const easeFunctions = {
    easeInQuad(t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad(t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    }
  };
  const moveTo = new (moveto__WEBPACK_IMPORTED_MODULE_0___default())({
    ease: 'easeInQuad'
  }, easeFunctions);
  let triggers = document.querySelectorAll('a[href*="#"]:not([href="#"]):not(#top)');
  triggers = Array.from(triggers);
  triggers.forEach(trigger => {
    moveTo.registerTrigger(trigger);
    const targetId = trigger.hash.substring(1);
    const target = document.getElementById(targetId);
    trigger.addEventListener('click', event => {
      event.preventDefault(); // Prevent default behavior of anchor links

      // If the trigger is nav-link, close nav
      if (trigger.classList.contains('nav-link') || trigger.classList.contains('dropdown-item')) {
        document.body.classList.remove('js-nav-active');

        // Additional navigation cleanup
        const html = document.documentElement;
        const container = document.getElementById('main-navigation-wrapper');
        const menu = container?.querySelector('ul');
        const button = document.getElementById('nav-toggle');
        if (html) html.classList.remove('disable-scroll');
        if (container) container.classList.remove('is-active');
        if (button) {
          button.classList.remove('is-active');
          button.setAttribute('aria-expanded', 'false');
        }
        if (menu) menu.setAttribute('aria-expanded', 'false');
      }

      // Check if the target element exists on the current page
      if (target) {
        // Scroll to the target element
        moveTo.move(target);

        // Update URL history
        window.history.pushState('', '', trigger.hash);

        // Focus on the target element after a delay
        setTimeout(() => {
          target.setAttribute('tabindex', '-1');
          target.focus();
        }, 500);
      } else {
        // Navigate to the target page
        window.location.href = trigger.href;
      }
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initAnchors);

/***/ }),

/***/ "./src/scripts/modules/external-link.js":
/*!**********************************************!*\
  !*** ./src/scripts/modules/external-link.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChildAltText: () => (/* binding */ getChildAltText),
/* harmony export */   initExternalLinkLabels: () => (/* binding */ initExternalLinkLabels),
/* harmony export */   styleExternalLinks: () => (/* binding */ styleExternalLinks)
/* harmony export */ });
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localization */ "./src/scripts/modules/localization.js");
/* eslint-disable no-param-reassign */

function isLinkExternal(link, localDomains) {
  // Empty links are not external
  if (!link.length) {
    return false;
  }
  const exceptions = ['#', 'tel:', 'mailto:', '/'];

  // Check if the url starts with some of the exceptions
  const isException = exceptions.some(exception => {
    const compare = new RegExp(`^${exception}`, 'g');
    return compare.test(link);
  });
  if (isException) {
    return false;
  }
  let linkUrl;
  try {
    linkUrl = new URL(link);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(`Invalid URL: ${link}`);
    return false;
  }
  // Check if host is one of the local domains
  return !localDomains.some(domain => linkUrl.host === domain);
}

/**
  * Try to get image alt texts from inside a link
  * to use in aria-label, when only elements inside
  * of link are images
  * @param {*} link DOM link element
  * @returns string
  */
function getChildAltText(link) {
  const children = [...link.children];
  if (children.length === 0) {
    return '';
  }
  const childImgs = children.filter(child => child.tagName.toLowerCase() === 'img');

  // If there are other elements than img elements, no need to add aria-label
  if (children.length !== childImgs.length) {
    return '';
  }

  // Find alt texts and add to array
  const altTexts = childImgs.filter(child => child.alt && child.alt !== '').map(child => child.alt);

  // If there is no alt texts,
  if (!altTexts.length) {
    return '';
  }
  return altTexts.join(', ');
}
function styleExternalLinks() {
  let localDomains = [window.location.host];
  if (typeof window.air_light_externalLinkDomains !== 'undefined') {
    localDomains = localDomains.concat(window.air_light_externalLinkDomains);
  }
  const links = document.querySelectorAll('a');
  const externalLinks = [...links].filter(link => isLinkExternal(link.href, localDomains));

  // eslint-disable-next-line consistent-return
  externalLinks.forEach(externalLink => {
    // Abort mission if there is only img element inside of link
    if (externalLink.childElementCount === 1 && externalLink.children[0].tagName.toLowerCase() === 'img') {
      return false;
    }
    if (!externalLink.classList.contains('no-external-link-label')) {
      const textContent = externalLink.textContent.trim().length ? externalLink.textContent.trim() : getChildAltText(externalLink);
      if (textContent && !externalLink.getAttribute('aria-label')) {
        const ariaLabel = externalLink.target === '_blank' ? `${textContent}: ${(0,_localization__WEBPACK_IMPORTED_MODULE_0__["default"])('external_link')}, ${(0,_localization__WEBPACK_IMPORTED_MODULE_0__["default"])('target_blank')}` : `${textContent}: ${(0,_localization__WEBPACK_IMPORTED_MODULE_0__["default"])('external_link')}`;
        externalLink.setAttribute('aria-label', ariaLabel);
      }
    }

    // Arrow icon won't be added if one of these classes is defined for the link
    const classExceptions = ['no-external-link-indicator', 'global-link', 'button'];
    if (!classExceptions.some(className => externalLink.classList.contains(className))) {
      // Add SVG arrow icon
      externalLink.insertAdjacentHTML('beforeend', '<svg class="external-link-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 9"><path d="M4.499 1.497h4v4m0-4l-7 7" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
      externalLink.classList.add('is-external-link');
    }
  });
}
function initExternalLinkLabels() {
  // Add aria-labels to links without text or aria-labels and contain image with alt text
  const links = [...document.querySelectorAll('a')];
  // eslint-disable-next-line no-unused-vars
  const linksWithImgChildren = links.forEach(link => {
    // If link already has text content or an aria label no need to add aria-label
    if (link.textContent.trim() !== '' || link.ariaLabel) {
      return;
    }
    const ariaLabel = getChildAltText(link);
    if (ariaLabel !== '') {
      link.ariaLabel = ariaLabel;
    }
  });
}

/***/ }),

/***/ "./src/scripts/modules/localization.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/localization.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getLocalization)
/* harmony export */ });
function getLocalization(stringKey) {
  if (typeof window.air_light_screenReaderText === 'undefined' || typeof window.air_light_screenReaderText[stringKey] === 'undefined') {
    // eslint-disable-next-line no-console
    console.error(`Missing translation for ${stringKey}`);
    return '';
  }
  return window.air_light_screenReaderText[stringKey];
}

/***/ }),

/***/ "./src/scripts/modules/navigation.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/navigation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navClick: () => (/* binding */ navClick),
/* harmony export */   navDesktop: () => (/* binding */ navDesktop),
/* harmony export */   navMobile: () => (/* binding */ navMobile),
/* harmony export */   navSticky: () => (/* binding */ navSticky)
/* harmony export */ });
/* harmony import */ var _navigation_add_multiple_event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/add-multiple-event-listeners */ "./src/scripts/modules/navigation/add-multiple-event-listeners.js");
/* harmony import */ var _navigation_calculate_burger_menu_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/calculate-burger-menu-position */ "./src/scripts/modules/navigation/calculate-burger-menu-position.js");
/* harmony import */ var _navigation_a11y_focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/a11y-focus-trap */ "./src/scripts/modules/navigation/a11y-focus-trap.js");
/* harmony import */ var _navigation_calculate_dropdown_toggle_height__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/calculate-dropdown-toggle-height */ "./src/scripts/modules/navigation/calculate-dropdown-toggle-height.js");
/* harmony import */ var _navigation_check_for_submenu_overflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/check-for-submenu-overflow */ "./src/scripts/modules/navigation/check-for-submenu-overflow.js");
/* harmony import */ var _navigation_dropdown_menu_on_hover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/dropdown-menu-on-hover */ "./src/scripts/modules/navigation/dropdown-menu-on-hover.js");
/* harmony import */ var _navigation_a11y_add_dropdown_toggle_labels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/a11y-add-dropdown-toggle-labels */ "./src/scripts/modules/navigation/a11y-add-dropdown-toggle-labels.js");
/* harmony import */ var _navigation_a11y_dropdown_menu_keyboard_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/a11y-dropdown-menu-keyboard-navigation */ "./src/scripts/modules/navigation/a11y-dropdown-menu-keyboard-navigation.js");
/* harmony import */ var _navigation_convert_dropdown_menu_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/convert-dropdown-menu-items */ "./src/scripts/modules/navigation/convert-dropdown-menu-items.js");
/* harmony import */ var _navigation_close_sub_menu_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/close-sub-menu-handler */ "./src/scripts/modules/navigation/close-sub-menu-handler.js");
/* harmony import */ var _navigation_a11y_add_dropdown_toggle_labels_click__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navigation/a11y-add-dropdown-toggle-labels-click */ "./src/scripts/modules/navigation/a11y-add-dropdown-toggle-labels-click.js");
/* harmony import */ var _navigation_a11y_dropdown_menu_keyboard_navigation_click__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/a11y-dropdown-menu-keyboard-navigation-click */ "./src/scripts/modules/navigation/a11y-dropdown-menu-keyboard-navigation-click.js");
/**
 * Navigation.js module
 * The original, accessible navigation module for Air-light
 */

// Import functions needed for the navigation module









// Navigation desktop click functions




const navDesktop = () => {
  const navPrimary = document.querySelector('.nav-primary');

  // If .nav-primary doesn't exist, don't continue
  if (!navPrimary) {
    return;
  }

  // Define globals
  const menuItems = navPrimary.querySelectorAll('.menu-item');

  // Define focusable elements on sub-menu (.menu-item a, .dropdown button)
  const focusableElementsforDropdown = document.querySelectorAll('.menu-item a, .dropdown button, .button-nav');

  // If main-menu is not found, bail
  if (!document.getElementById('main-menu')) {
    return;
  }

  // Dropdown menus
  (0,_navigation_a11y_add_dropdown_toggle_labels__WEBPACK_IMPORTED_MODULE_6__["default"])(menuItems);
  (0,_navigation_a11y_dropdown_menu_keyboard_navigation__WEBPACK_IMPORTED_MODULE_7__["default"])(menuItems, focusableElementsforDropdown);

  // Dropdown on mouse hover
  (0,_navigation_dropdown_menu_on_hover__WEBPACK_IMPORTED_MODULE_5__["default"])(menuItems);

  // Check for submenu overflow
  (0,_navigation_check_for_submenu_overflow__WEBPACK_IMPORTED_MODULE_4__["default"])(menuItems);
};
const navClick = () => {
  // If main-menu is not found, bail
  if (!document.getElementById('main-menu')) {
    return;
  }
  // Search for all menu items that have submenus
  const dropdownMenuItems = document.querySelectorAll('.menu-item-has-children');

  // Convert submenus to clickable elements
  (0,_navigation_convert_dropdown_menu_items__WEBPACK_IMPORTED_MODULE_8__["default"])(dropdownMenuItems);

  // Define globals
  const menuItems = document.querySelectorAll('.menu-item');
  // Define focusable elements on sub-menu (.menu-item a, .dropdown button)
  const focusableElementsforDropdown = document.querySelectorAll('.menu-item a, .dropdown button, .button-nav');

  // Dropdown menus
  (0,_navigation_a11y_add_dropdown_toggle_labels_click__WEBPACK_IMPORTED_MODULE_10__["default"])(menuItems);
  (0,_navigation_a11y_dropdown_menu_keyboard_navigation_click__WEBPACK_IMPORTED_MODULE_11__["default"])(menuItems, focusableElementsforDropdown);

  // Handle different scenarios when menus should be closed
  (0,_navigation_close_sub_menu_handler__WEBPACK_IMPORTED_MODULE_9__["default"])(menuItems);
};
const navMobile = () => {
  // If burger toggle is not found, bail
  if (!document.getElementById('nav-toggle')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No nav-toggle found.');
    return;
  }
  function navToggle(e) {
    // If clicked with mouse or enter key
    if (e.type === 'click' || e.keyCode === 13) {
      // Activate nav
      document.body.classList.toggle('js-nav-active');

      // Scroll to top when triggering mobile navigation
      // to ensure no gaps are between header and navigation
      // Please note, if you use sticky-nav, comment out the next line
      window.scrollTo(0, 0);

      // Toggle aria-expanded attribute, if it's false, change to true and vice versa
      if (document.getElementById('nav-toggle').getAttribute('aria-expanded') === 'false') {
        document.getElementById('nav-toggle').setAttribute('aria-expanded', 'true');
      } else {
        document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');
      }

      // Toggle aria-label
      // eslint-disable-next-line camelcase, no-undef
      if (document.getElementById('nav-toggle').getAttribute('aria-label') === air_light_screenReaderText.expand_toggle) {
        // eslint-disable-next-line camelcase, no-undef
        document.getElementById('nav-toggle').setAttribute('aria-label', air_light_screenReaderText.collapse_toggle);
      } else {
        // eslint-disable-next-line camelcase, no-undef
        document.getElementById('nav-toggle').setAttribute('aria-label', air_light_screenReaderText.expand_toggle);
      }

      // Center vertically the absolute positioned mobile dropdown toggles by setting fixed height
      (0,_navigation_calculate_dropdown_toggle_height__WEBPACK_IMPORTED_MODULE_3__["default"])();

      // Focusable elements
      const navContainer = document.getElementById('nav');
      const focusableElements = [...navContainer.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(el => !el.hasAttribute('disabled')).filter(el => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
      focusableElements.forEach(menuItem => {
        menuItem.addEventListener('keydown', _navigation_a11y_focus_trap__WEBPACK_IMPORTED_MODULE_2__["default"]);
      });
    }
  }

  // When clicking #nav-toggle, add .js-nav-active body class
  (0,_navigation_add_multiple_event_listeners__WEBPACK_IMPORTED_MODULE_0__["default"])(document.getElementById('nav-toggle'), ['click', 'keydown', 'keypress'], navToggle);

  // Get all dropdown-toggles
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Loop through dropdown-toggles
  dropdownToggles.forEach(dropdownToggle => {
    // When clicking a dropdown-toggle, add .js-dropdown-active class to the parent .menu-item
    (0,_navigation_add_multiple_event_listeners__WEBPACK_IMPORTED_MODULE_0__["default"])(dropdownToggle, ['click', 'keydown', 'keypress'], _navigation_calculate_dropdown_toggle_height__WEBPACK_IMPORTED_MODULE_3__["default"]);
  });

  // Calculate mobile nav-toggle position
  (0,_navigation_calculate_burger_menu_position__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

// Sticky navigation
// eslint-disable-next-line no-unused-vars
const navSticky = () => {
  function initStickyNavStyles() {
    // Add default styles for sticky navigation as <style>
    const style = document.createElement('style');
    style.innerHTML = `
    .header {
      transition: all 100ms cubic-bezier(.4, 0, .2, 1);
      overflow: visible;
      width: 100%;
      z-index: 100;
    }

    .header.is-fixed {
      animation-duration: 300ms;
      animation-iteration-count: 1;
      animation-name: roll-in;
      background-color: var(--color-white);
      border-bottom: 1px solid var(--color-black);
      left: 0;
      position: fixed;
      top: 0;
    }

    @keyframes roll-in {
      0% {
        opacity: 0;
        top: -100%;
      }

      100% {
        opacity: 1;
        top: 0;
      }
    }`;
    document.head.appendChild(style);
  }
  function initStickyNav() {
    // Get --width-max-mobile from CSS
    const widthMaxMobile = getComputedStyle(document.documentElement).getPropertyValue('--width-max-mobile');

    // Let's see if we are on mobile viewport
    const isMobile = window.matchMedia(`(max-width: ${widthMaxMobile})`).matches;

    // If things are not okay, bail
    if (isMobile) {
      return;
    }
    const siteHeader = document.querySelector('.header');
    const headerHeight = getComputedStyle(siteHeader).height.split('px')[0];
    const scrollValue = window.scrollY;
    if (scrollValue > headerHeight) {
      siteHeader.classList.add('is-fixed');
    } else if (scrollValue < headerHeight) {
      siteHeader.classList.remove('is-fixed');
    }
    if (window.pageYOffset > headerHeight) {
      siteHeader.classList.add('is-fixed');
    }
  }
  window.addEventListener('scroll', initStickyNav);
  window.addEventListener('DOMContentLoaded', initStickyNavStyles);
};

// Export different navigation functions


// Reinit some things
window.addEventListener('resize', () => {
  // Center vertically the absolute positioned burger
  (0,_navigation_calculate_burger_menu_position__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Center vertically the absolute positioned mobile dropdown toggles by setting fixed height
  (0,_navigation_calculate_dropdown_toggle_height__WEBPACK_IMPORTED_MODULE_3__["default"])();

  // Check for submenu overflow
  (0,_navigation_check_for_submenu_overflow__WEBPACK_IMPORTED_MODULE_4__["default"])(document.querySelectorAll('.menu-item'));
});

/***/ }),

/***/ "./src/scripts/modules/navigation/a11y-add-dropdown-toggle-labels-click.js":
/*!*********************************************************************************!*\
  !*** ./src/scripts/modules/navigation/a11y-add-dropdown-toggle-labels-click.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Add proper link labels for screen readers
function a11yAddDropdownToggleLabelsClick(items) {
  items.forEach(li => {
    // If .dropdown-toggle does not exist then do nothing
    if (!li.querySelector('.dropdown-toggle')) {
      return;
    }

    // Add helper class to dropdown-toggle
    li.querySelector('.dropdown-toggle').classList.add('menu-item-clickable');

    // Remove .dropdown-toggle class
    li.querySelector('.dropdown-toggle').classList.remove('dropdown-toggle');

    // Get the dropdown-button
    const dropdownButton = li.querySelector('.menu-item-clickable');

    // Get the link text that is children of this item
    const linkText = dropdownButton.innerHTML;
    // Add the aria-label to the dropdown button
    // eslint-disable-next-line camelcase, no-undef
    dropdownButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (a11yAddDropdownToggleLabelsClick);

/***/ }),

/***/ "./src/scripts/modules/navigation/a11y-add-dropdown-toggle-labels.js":
/*!***************************************************************************!*\
  !*** ./src/scripts/modules/navigation/a11y-add-dropdown-toggle-labels.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Add proper link labels for screen readers
function a11yAddDropdownToggleLabels(items) {
  items.forEach(li => {
    // If .dropdown-class does not exist then do nothing
    if (!li.querySelector('.dropdown')) {
      return;
    }

    // Get the dropdown-button
    const dropdownButton = li.querySelector('.dropdown-toggle');

    // Get the link text that is children of this item
    const linkText = li.querySelector('.dropdown').innerText;

    // Add the aria-label to the dropdown button
    // eslint-disable-next-line camelcase, no-undef
    dropdownButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (a11yAddDropdownToggleLabels);

/***/ }),

/***/ "./src/scripts/modules/navigation/a11y-dropdown-menu-keyboard-navigation-click.js":
/*!****************************************************************************************!*\
  !*** ./src/scripts/modules/navigation/a11y-dropdown-menu-keyboard-navigation-click.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_multiple_event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-multiple-event-listeners */ "./src/scripts/modules/navigation/add-multiple-event-listeners.js");
// Import required modules


// Accessible keyboard navigation for dropdown menus
function a11yDropdownMenuKeyboardNavigationClick(items, focusableElements) {
  focusableElements.forEach(item => {
    item.addEventListener('keyup', e => {
      // Get this item
      const thisElement = e.target;

      // Get this menu-item
      // eslint-disable-next-line no-unused-vars
      const thisMenuItem = thisElement.parentNode;

      // Close previous dropdown if this parent contains id main-menu
      if (thisElement.parentNode.parentNode.id === 'main-menu' || thisElement.classList.contains('button-nav') && thisElement.parentNode.parentNode.id === 'main-menu') {
        // If we have previous item
        if (thisElement.parentNode.previousElementSibling) {
          // Get the previous item
          const previousItem = thisElement.parentNode.previousElementSibling;
          // Get main level sub-menu
          const mainLevelSubMenu = previousItem.querySelector('.sub-menu');

          // If sub-menu found, close nested sub-menus first
          if (mainLevelSubMenu && mainLevelSubMenu.querySelectorAll('.menu-item-has-children')) {
            mainLevelSubMenu.querySelectorAll('.menu-item-has-children').forEach(subMenu => {
              // Get the previous item's dropdown
              const previousItemDropdownToggle = subMenu.querySelector('.dropdown-toggle');
              const previousItemDropdown = subMenu.querySelector('.sub-menu');

              // Remove toggled-on class from previous item button
              previousItemDropdownToggle.classList.remove('toggled-on');

              // Remove toggled-on class from previous sibling
              previousItemDropdown.classList.remove('toggled-on');

              // Change toggle button aria-label
              // eslint-disable-next-line camelcase, no-undef
              previousItemDropdownToggle.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${previousItemDropdownToggle.innerText}`);

              // Change toggle button aria-expanded
              previousItemDropdownToggle.setAttribute('aria-expanded', 'false');
            });
          }

          // Close main level sub-menu
          const previousItemDropdownToggle = previousItem.querySelector('.dropdown-toggle');
          const previousItemDropdown = previousItem.querySelector('.sub-menu');
          if (previousItemDropdownToggle && previousItemDropdown) {
            // Remove toggled-on class from previous item button
            previousItemDropdownToggle.classList.remove('toggled-on');

            // Remove toggled-on class from previous sibling
            previousItemDropdown.classList.remove('toggled-on');

            // Change toggle button aria-label
            // eslint-disable-next-line camelcase, no-undef
            previousItemDropdownToggle.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${previousItemDropdownToggle.innerText}`);

            // Change toggle button aria-expanded
            previousItemDropdownToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });

    // NVDA supported keyboard navigation (NVDA and mobile need click event to work)
    (0,_add_multiple_event_listeners__WEBPACK_IMPORTED_MODULE_0__["default"])(item, ['click', 'keydown', 'keypress'], e => {
      // Get this link or button
      const thisElement = e.target;

      // Define the elements of this dropdown
      const firstDropdown = thisElement.parentNode.parentNode.parentNode.querySelector('.sub-menu');
      const thisDropdown = thisElement.nextElementSibling;
      const dropdownToggleButton = thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle');

      // Open navigation on Enter, e.type click is for NVDA
      if (e.key === 'Enter' || e.type === 'click') {
        // If this item is a hyperlink, do nothing. We want to use Enter only with buttons
        if (thisElement.tagName === 'A') {
          return;
        }

        // Get the text of button
        const linkLabel = thisElement.innerText;

        // Toggle toggled-on class
        thisElement.classList.toggle('toggled-on');

        // If aria-expanded is false, set it to true
        if (thisElement.getAttribute('aria-expanded') === 'false') {
          // Set aria-expanded to true
          thisElement.setAttribute('aria-expanded', 'true');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.collapse_for} ${linkLabel}`);
        } else {
          // Set aria-expanded to false
          thisElement.setAttribute('aria-expanded', 'false');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);
        }

        // Toggle the dropdown
        if (thisDropdown && !thisDropdown.classList.contains('toggled-on')) {
          // Add toggled-on class to this dropdown
          thisDropdown.classList.add('toggled-on');
        } else {
          // Remove toggled-on class from this dropdown
          // eslint-disable-next-line no-lonely-if
          if (thisDropdown) {
            thisDropdown.classList.remove('toggled-on');
          }
        }
      }

      // Close navigation on Escape
      if (e.key === 'Escape') {
        // Close mobile nav if no sub-menu is open
        if (thisElement.parentNode.parentNode.id === 'main-menu' && !thisElement.parentNode.classList.contains('toggled-on')) {
          document.body.classList.remove('js-nav-active');

          // Move focus back to nav-toggle
          document.getElementById('nav-toggle').focus();
        }

        // If we're on main level and nav item is not open, do nothing
        if (thisElement.parentNode.parentNode.id === 'main-menu' && !thisElement.parentNode.classList.contains('toggled-on')) {
          return;
        }

        // Remove toggled-on classes from this dropdown
        firstDropdown.classList.remove('toggled-on');

        // Set aria expanded attribute to false
        dropdownToggleButton.setAttribute('aria-expanded', 'false');

        // Remove toggled-on
        dropdownToggleButton.classList.remove('toggled-on');

        // Get the link label of dropdown link
        const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

        // Set aria label attribute
        // eslint-disable-next-line camelcase, no-undef
        dropdownToggleButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);

        // If we're on button, add aria-expanded to false
        if (thisElement.classList.contains('dropdown-toggle')) {
          thisElement.setAttribute('aria-expanded', 'false');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);
        }

        // Move focus back to previous .dropdown-toggle, but only if we're not on main level
        if (thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Delay toggling for NVDA for 100 ms
          setTimeout(() => {
            dropdownToggleButton.focus();
          }, 100);
        }
      }

      // If no arrow keys used, do not continue
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        return;
      }

      // Arrow keys
      switch (e.code) {
        // ArrowUp
        case 'ArrowUp':
          // Stop propagation
          e.stopPropagation();

          // Stop scrolling
          e.preventDefault();

          // If we're on the sub-menu, move up
          if (thisElement.parentNode.parentNode.previousElementSibling && thisElement.parentNode.parentNode.previousElementSibling.classList.contains('dropdown-toggle')) {
            // Focus to the previous link
            thisElement.parentNode.parentNode.previousElementSibling.focus();
          }

          // If this is a .dropdown-toggle button and aria-expanded is true, close the dropdown
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true') {
            // Remove toggled-on class from this dropdown
            thisDropdown.classList.remove('toggled-on');
            thisElement.classList.remove('toggled-on');

            // Set aria-expanded attribute to false
            thisElement.setAttribute('aria-expanded', 'false');

            // Get the link label of .dropdown link
            const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

            // Set aria-label of the dropdown button
            // eslint-disable-next-line camelcase, no-undef
            thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);

            // Move focus back to previous .dropdown-toggle
            dropdownToggleButton.focus();
          }

          // If this is a correct element, focus to the previous link
          if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
            // If there is no previous items, bail
            if (!thisElement.parentNode.previousElementSibling) {
              return;
            }

            // Get the previous link
            const previousLink = thisElement.parentNode.previousElementSibling.querySelector('a');

            // Get .dropdown-toggle element
            const previousToggle = thisElement.parentNode.previousElementSibling.querySelector('.dropdown-toggle');

            // If previous element is .dropdown-toggle element, focus to it
            if (previousToggle && !thisElement.querySelector('.dropdown-toggle')) {
              previousToggle.focus();
            } else {
              // If previous element is a link, focus to it
              previousLink.focus();
            }
          }
          break;

        // ArrowDown
        case 'ArrowDown':
          // Stop propagation
          e.stopPropagation();

          // Stop scrolling
          e.preventDefault();

          // If we're on the sub-menu, move down
          if (thisElement.parentNode.parentNode.nextElementSibling && thisElement.parentNode.parentNode.nextElementSibling.classList.contains('dropdown-toggle')) {
            // Focus to the next link
            thisElement.parentNode.parentNode.nextElementSibling.focus();
          }

          // If this is a .dropdown-toggle button and aria-expanded is true, move down
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true') {
            // Focus to the next link
            thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();
          }

          // If this is a .dropdown-toggle button and aria-expanded is false, open sub-menu
          // (if we are not inside sub-menu)
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && !thisElement.parentNode.parentNode.classList.contains('sub-menu')) {
            // Open sub-menu
            thisElement.click();

            // Focus to the next link under sub-menu
            thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();

            // Don't do anything else
            return;
          }

          // If we are in fact in sub menu, move to next link
          if (thisElement.parentNode.parentNode.classList.contains('sub-menu')) {
            // Focus to the next link or .dropdown-toggle
            // Generally focus the next link
            if (thisElement.parentNode.nextElementSibling.querySelector(':scope > a')) {
              thisElement.parentNode.nextElementSibling.querySelector(':scope > a').focus();
            } else {
              // If there is no next link, focus to the next .dropdown-toggle
              thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle').focus();
            }
          }

          // If this is a correct element, focus to the next link
          if ((thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') && !thisElement.classList.contains('dropdown-toggle')) {
            // If there is no next items, bail
            if (!thisElement.parentNode.nextElementSibling) {
              return;
            }

            // Get the next link
            const nextLink = thisElement.parentNode.nextElementSibling.querySelector('a');

            // Get .dropdown-toggle element
            let nextToggle = thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle');

            // If this has class .dropdown-item, jump to the next .dropdown-toggle
            if (thisElement.classList.contains('dropdown-item')) {
              // If there is a toggle
              if (thisElement.nextElementSibling) {
                // Get the dropdown-toggle element
                nextToggle = thisElement.nextElementSibling;

                // If next element is .dropdown-toggle element, focus to it
                if (nextToggle) {
                  nextToggle.focus();
                }
              }
            }

            // If next element is .dropdown-toggle element, focus to it
            if (nextToggle && !thisElement.querySelector('.dropdown-toggle')) {
              nextToggle.focus();
            } else {
              // If next element is a link, focus to it
              nextLink.focus();
            }
          }
          break;

        // ArrowLeft
        case 'ArrowLeft':
          // Stop propagation
          e.stopPropagation();

          // Stop scrolling
          e.preventDefault();

          // If we are on the first link, move to the dropdown-toggle and close menu
          if (thisElement.parentNode.previousElementSibling === null && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Focus to the previous link
            thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle').focus();

            // Close the dropdown
            thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle').click();

            // Don't do anything else
            return;
          }

          // If this is a .dropdown-toggle button and aria-expanded is true, move left
          if (thisElement.parentNode.previousElementSibling && thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Focus to the previous link
            thisElement.parentNode.previousElementSibling.querySelector('a').focus();
          }

          // If this is a .dropdown-toggle button and aria-expanded is false, close the dropdown
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Remove toggled-on class from this dropdown
            thisDropdown.classList.remove('toggled-on');

            // Set aria-expanded attribute to false
            thisElement.setAttribute('aria-expanded', 'false');

            // Get the link label of .dropdown link
            const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

            // Set aria-label of the dropdown button
            // eslint-disable-next-line camelcase, no-undef
            thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);

            // Move focus back to previous .dropdown-toggle
            dropdownToggleButton.focus();
          }

          // If this is a correct element, focus to the previous link
          if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
            // If this is a .dropdown-toggle button and aria-expanded is false,
            // move to the link directly before it
            if (thisElement.previousElementSibling && thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false') {
              // Focus to the previous link
              thisElement.previousElementSibling.focus();

              // Don't do anything else
              return;
            }

            // If there is no previous items, bail
            if (!thisElement.parentNode.previousElementSibling) {
              return;
            }

            // Get the previous link
            const previousLink = thisElement.parentNode.previousElementSibling.querySelector('a');

            // Get .dropdown-toggle element
            const previousToggle = thisElement.parentNode.previousElementSibling.querySelector('.dropdown-toggle');

            // If previous element is .dropdown-toggle element, focus to it
            if (previousToggle) {
              previousToggle.focus();
            } else {
              // If previous element is a link, focus to it
              previousLink.focus();
            }
          }
          break;

        // ArrowRight
        case 'ArrowRight':
          // Stop propagation
          e.stopPropagation();

          // Stop scrolling
          e.preventDefault();

          // If this is a .dropdown-toggle button and aria-expanded is true, move right
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Focus to the next link
            thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();
          }

          // If this has class .dropdown-item, jump to the next .dropdown-toggle
          if (thisElement.nextElementSibling) {
            thisElement.nextElementSibling.focus();

            // Disable other actions if this is a .dropdown-item
            if (thisElement.classList.contains('dropdown-item')) {
              return;
            }
          }

          // If this is a .dropdown-toggle button and aria-expanded is false, open sub-menu
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Open sub-menu
            thisElement.click();

            // Do nothing else
            return;
          }

          // If this is a dropdown-toggle button and aria-expanded is true, move right
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Focus to the next link
            thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();

            // Don't do anything else
            return;
          }

          // If this is a correct element, focus to the previous link
          if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
            // If there is no next items, bail
            if (!thisElement.parentNode.nextElementSibling) {
              return;
            }

            // Get the next link
            const nextLink = thisElement.parentNode.nextElementSibling.querySelector('a');

            // Get .dropdown-toggle element
            const nextToggle = thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle');

            // If next element is .dropdown-toggle element, focus to it
            if (nextToggle) {
              nextToggle.focus();
            } else {
              // If next element is a link, focus to it
              nextLink.focus();
            }
          }
          break;
        default:
          break;
      }
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (a11yDropdownMenuKeyboardNavigationClick);

/***/ }),

/***/ "./src/scripts/modules/navigation/a11y-dropdown-menu-keyboard-navigation.js":
/*!**********************************************************************************!*\
  !*** ./src/scripts/modules/navigation/a11y-dropdown-menu-keyboard-navigation.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _add_multiple_event_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-multiple-event-listeners */ "./src/scripts/modules/navigation/add-multiple-event-listeners.js");
// Import required modules


// Accessible keyboard navigation for dropdown menus
function a11yDropdownMenuKeyboardNavigation(items, focusableElements) {
  focusableElements.forEach(item => {
    item.addEventListener('keyup', e => {
      // Get this item
      const thisElement = e.target;

      // Close previous dropdown if this parent contains id main-menu
      if (thisElement.parentNode.parentNode.id === 'main-menu' || thisElement.classList.contains('button-nav') && thisElement.parentNode.parentNode.id === 'main-menu') {
        // If we have previous item
        if (thisElement.parentNode.previousElementSibling) {
          // Get the previous item
          const previousItem = thisElement.parentNode.previousElementSibling;

          // Remove toggled-on class from previous item
          previousItem.classList.remove('toggled-on');

          // Remove hover-intent class from previous item
          previousItem.classList.remove('hover-intent');

          // If sub-menu found
          if (previousItem.querySelector('.sub-menu')) {
            // Get the previous item's dropdown
            const previousItemDropdown = previousItem.querySelector('.sub-menu');

            // Remove toggled-on class from previous sibling
            previousItemDropdown.classList.remove('toggled-on');

            // Remove hover-intent class from previous sibling
            previousItemDropdown.classList.remove('hover-intent');

            // Change toggle button aria-label
            // eslint-disable-next-line camelcase, no-undef
            previousItem.querySelector('.dropdown-toggle').setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${previousItem.querySelector('.dropdown-item').innerText}`);

            // Change toggle button aria-expanded
            previousItem.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');

            // Toggle toggled-on class on previousItem
            previousItem.querySelector('.dropdown-toggle').classList.remove('toggled-on');
          }
        }
      }
    });

    // NVDA supported keyboard navigation (NVDA and mobile need click event to work)
    (0,_add_multiple_event_listeners__WEBPACK_IMPORTED_MODULE_0__["default"])(item, ['click', 'keydown', 'keypress'], e => {
      // Get this link
      const thisElement = e.target;

      // Get this menu-item
      const thisMenuItem = thisElement.parentNode;

      // Define the elements of this dropdown
      const firstDropdown = thisElement.parentNode.parentNode.parentNode.querySelector('.sub-menu');
      const thisDropdown = thisElement.nextElementSibling;
      const dropdownToggleButton = thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle');

      // Remove removing-hover class
      thisElement.classList.remove('removing-hover');
      thisMenuItem.parentNode.classList.remove('removing-hover');

      // Open navigation on Enter, e.type click is for NVDA
      if (e.key === 'Enter' || e.type === 'click') {
        // If this item is a hyperlink, do nothing. We want to use Enter only with buttons
        if (thisElement.tagName === 'A') {
          return;
        }

        // If link label not found, do nothing
        if (!thisElement.parentNode.querySelector('.dropdown-item')) {
          return;
        }

        // Get the link label of .dropdown link
        const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

        // Toggle toggled-on class
        thisElement.classList.toggle('toggled-on');

        // If aria-expanded is false, set it to true
        if (thisElement.getAttribute('aria-expanded') === 'false') {
          // Set aria-expanded to true
          thisElement.setAttribute('aria-expanded', 'true');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.collapse_for} ${linkLabel}`);
        } else {
          // Set aria-expanded to false
          thisElement.setAttribute('aria-expanded', 'false');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);
        }

        // Toggle the dropdown
        if (thisDropdown && !thisDropdown.classList.contains('toggled-on')) {
          // Add hover-intent class to this menu-item
          thisMenuItem.classList.add('hover-intent');

          // Add toggled-on class to this dropdown
          thisDropdown.classList.add('toggled-on');
        } else {
          // Remove hover-intent class from this menu-item
          if (thisMenuItem) {
            thisMenuItem.classList.remove('hover-intent');
          }

          // Remove toggled-on class from this dropdown
          if (thisDropdown) {
            thisDropdown.classList.remove('toggled-on');
          }
        }
      }

      // Close navigation on Escape
      if (e.key === 'Escape') {
        // Close mobile nav if no sub-menu is open
        if (thisElement.parentNode.parentNode.id === 'main-menu' && !thisElement.parentNode.classList.contains('toggled-on')) {
          document.body.classList.remove('js-nav-active');

          // Move focus back to nav-toggle
          document.getElementById('nav-toggle').focus();
        }

        // If we're on main level and nav item is not open, do nothing
        if (thisElement.parentNode.parentNode.id === 'main-menu' && !thisElement.parentNode.classList.contains('hover-intent')) {
          return;
        }

        // Remove toggled-on classes from this dropdown
        firstDropdown.classList.remove('toggled-on');

        // Remove hover-intent classes from the current menu-item
        thisMenuItem.classList.remove('hover-intent');

        // Hide menu if we're on second level
        thisMenuItem.parentNode.parentNode.classList.remove('hover-intent');

        // Set aria expanded attribute to false
        dropdownToggleButton.setAttribute('aria-expanded', 'false');

        // Remove toggled-on
        dropdownToggleButton.classList.remove('toggled-on');

        // Get the link label of dropdown link
        const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

        // Set aria label attribute
        // eslint-disable-next-line camelcase, no-undef
        dropdownToggleButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);

        // If we're on button, add aria-expanded to false
        if (thisElement.classList.contains('dropdown-toggle')) {
          thisElement.setAttribute('aria-expanded', 'false');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);
        }

        // Move focus back to previous .dropdown-toggle, but only if we're not on main level
        if (thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Delay toggling for NVDA for 100 ms
          setTimeout(() => {
            dropdownToggleButton.focus();
          }, 100);
        }
      }

      // If no arrow keys used, do not continue
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        return;
      }

      // Arrow keys
      switch (e.code) {
        // ArrowUp
        case 'ArrowUp':
          // Stop propagation
          e.stopPropagation();

          // Stop scrolling
          e.preventDefault();

          // If we're on the sub-menu, move up
          if (thisElement.parentNode.parentNode.previousElementSibling && thisElement.parentNode.parentNode.previousElementSibling.classList.contains('dropdown-toggle')) {
            // Focus to the previous link
            thisElement.parentNode.parentNode.previousElementSibling.focus();
          }

          // If this is a .dropdown-toggle button and aria-expanded is true, close the dropdown
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true') {
            // Remove hover-intent class from this menu-item
            thisMenuItem.classList.remove('hover-intent');

            // Remove toggled-on class from this dropdown
            thisDropdown.classList.remove('toggled-on');

            // Set aria-expanded attribute to false
            thisElement.setAttribute('aria-expanded', 'false');

            // Get the link label of .dropdown link
            const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

            // Set aria-label of the dropdown button
            // eslint-disable-next-line camelcase, no-undef
            thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);

            // Move focus back to previous .dropdown-toggle
            dropdownToggleButton.focus();
          }

          // If this is a correct element, focus to the previous link
          if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
            // If there is no previous items, bail
            if (!thisElement.parentNode.previousElementSibling) {
              return;
            }

            // Get the previous link
            const previousLink = thisElement.parentNode.previousElementSibling.querySelector('a');

            // Get .dropdown-toggle element
            const previousToggle = thisElement.parentNode.previousElementSibling.querySelector('.dropdown-toggle');

            // If previous element is .dropdown-toggle element, focus to it
            if (previousToggle && !thisElement.querySelector('.dropdown-toggle')) {
              previousToggle.focus();
            } else {
              // If previous element is a link, focus to it
              previousLink.focus();
            }
          }
          break;

        // ArrowDown
        case 'ArrowDown':
          // Stop propagation
          e.stopPropagation();

          // Stop scrolling
          e.preventDefault();

          // If we're on the sub-menu, move down
          if (thisElement.parentNode.parentNode.nextElementSibling && thisElement.parentNode.parentNode.nextElementSibling.classList.contains('dropdown-toggle')) {
            // Focus to the next link
            thisElement.parentNode.parentNode.nextElementSibling.focus();
          }

          // If this is a .dropdown-toggle button and aria-expanded is true, move down
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true') {
            // Focus to the next link
            thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();
          }

          // If this is a .dropdown-toggle button and aria-expanded is false, open sub-menu
          // (if we are not inside sub-menu)
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && !thisElement.parentNode.parentNode.classList.contains('sub-menu')) {
            // Open sub-menu
            thisElement.click();

            // Focus to the next link under sub-menu
            thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();

            // Don't do anything else
            return;
          }

          // If we are in fact in sub menu, move to next link
          if (thisElement.parentNode.parentNode.classList.contains('sub-menu')) {
            // Focus to the next link
            thisElement.parentNode.nextElementSibling.querySelector('a').focus();
          }

          // If this is a correct element, focus to the next link
          if ((thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') && !thisElement.classList.contains('dropdown-toggle')) {
            // If there is no next items, bail
            if (!thisElement.parentNode.nextElementSibling) {
              return;
            }

            // Get the next link
            const nextLink = thisElement.parentNode.nextElementSibling.querySelector('a');

            // Get .dropdown-toggle element
            let nextToggle = thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle');

            // If this has class .dropdown-item, jump to the next .dropdown-toggle
            if (thisElement.classList.contains('dropdown-item')) {
              // If there is a toggle
              if (thisElement.nextElementSibling) {
                // Get the dropdown-toggle element
                nextToggle = thisElement.nextElementSibling;

                // If next element is .dropdown-toggle element, focus to it
                if (nextToggle) {
                  nextToggle.focus();
                }
              }
            }

            // If next element is .dropdown-toggle element, focus to it
            if (nextToggle && !thisElement.querySelector('.dropdown-toggle')) {
              nextToggle.focus();
            } else {
              // If next element is a link, focus to it
              nextLink.focus();
            }
          }
          break;

        // ArrowLeft
        case 'ArrowLeft':
          // Stop propagation
          e.stopPropagation();

          // Stop scrolling
          e.preventDefault();

          // If we are on the first link, move to the dropdown-toggle and close menu
          if (thisElement.parentNode.previousElementSibling === null && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Focus to the previous link
            thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle').focus();

            // Close the dropdown
            thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle').click();

            // Don't do anything else
            return;
          }

          // If this is a .dropdown-toggle button and aria-expanded is true, move left
          if (thisElement.parentNode.previousElementSibling && thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Focus to the previous link
            thisElement.parentNode.previousElementSibling.querySelector('a').focus();
          }

          // If this is a .dropdown-toggle button and aria-expanded is false, close the dropdown
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Remove hover-intent class from this menu-item
            thisMenuItem.classList.remove('hover-intent');

            // Remove toggled-on class from this dropdown
            thisDropdown.classList.remove('toggled-on');

            // Set aria-expanded attribute to false
            thisElement.setAttribute('aria-expanded', 'false');

            // Get the link label of .dropdown link
            const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

            // Set aria-label of the dropdown button
            // eslint-disable-next-line camelcase, no-undef
            thisElement.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkLabel}`);

            // Move focus back to previous .dropdown-toggle
            dropdownToggleButton.focus();
          }

          // If this is a correct element, focus to the previous link
          if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
            // If this is a .dropdown-toggle button and aria-expanded is false,
            // move to the link directly before it
            if (thisElement.previousElementSibling && thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false') {
              // Focus to the previous link
              thisElement.previousElementSibling.focus();

              // Don't do anything else
              return;
            }

            // If there is no previous items, bail
            if (!thisElement.parentNode.previousElementSibling) {
              return;
            }

            // Get the previous link
            const previousLink = thisElement.parentNode.previousElementSibling.querySelector('a');

            // Get .dropdown-toggle element
            const previousToggle = thisElement.parentNode.previousElementSibling.querySelector('.dropdown-toggle');

            // If previous element is .dropdown-toggle element, focus to it
            if (previousToggle) {
              previousToggle.focus();
            } else {
              // If previous element is a link, focus to it
              previousLink.focus();
            }
          }
          break;

        // ArrowRight
        case 'ArrowRight':
          // Stop propagation
          e.stopPropagation();

          // Stop scrolling
          e.preventDefault();

          // If this is a .dropdown-toggle button and aria-expanded is true, move right
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Focus to the next link
            thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();
          }

          // If this has class .dropdown-item, jump to the next .dropdown-toggle
          if (thisElement.nextElementSibling) {
            thisElement.nextElementSibling.focus();

            // Disable other actions if this is a .dropdown-item
            if (thisElement.classList.contains('dropdown-item')) {
              return;
            }
          }

          // If this is a .dropdown-toggle button and aria-expanded is false, open sub-menu
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Open sub-menu
            thisElement.click();

            // Do nothing else
            return;
          }

          // If this is a dropdown-toggle button and aria-expanded is true, move right
          if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
            // Focus to the next link
            thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();

            // Don't do anything else
            return;
          }

          // If this is a correct element, focus to the previous link
          if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
            // If there is no next items, bail
            if (!thisElement.parentNode.nextElementSibling) {
              return;
            }

            // Get the next link
            const nextLink = thisElement.parentNode.nextElementSibling.querySelector('a');

            // Get .dropdown-toggle element
            const nextToggle = thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle');

            // If next element is .dropdown-toggle element, focus to it
            if (nextToggle) {
              nextToggle.focus();
            } else {
              // If next element is a link, focus to it
              nextLink.focus();
            }
          }
          break;
        default:
          break;
      }
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (a11yDropdownMenuKeyboardNavigation);

/***/ }),

/***/ "./src/scripts/modules/navigation/a11y-focus-trap.js":
/*!***********************************************************!*\
  !*** ./src/scripts/modules/navigation/a11y-focus-trap.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function a11yFocusTrap(e) {
  // Init focusable elements
  let focusableElements = [];

  // Define container
  const container = document.getElementById('nav');

  // Define nav-toggle
  const navToggle = document.getElementById('nav-toggle');

  // Get --width-max-mobile from CSS
  const widthMaxMobile = getComputedStyle(document.documentElement).getPropertyValue('--width-max-mobile');

  // Let's see if we are on mobile viewport
  const isMobile = window.matchMedia(`(max-width: ${widthMaxMobile})`).matches;

  // If things are not okay, bail
  if (!container || !navToggle || !isMobile) {
    return;
  }

  // Set focusable elements inside main navigation.
  focusableElements = [...container.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(el => !el.hasAttribute('disabled')).filter(el => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));

  // Get first and last focusable element
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  // On key down on first element, if it's a Shift+Tab, redirect to last element
  if (firstFocusableElement === e.target && e.code === 'Tab' && e.shiftKey) {
    e.preventDefault();
    lastFocusableElement.focus();
  }
  // On key down on last element, if it's a Tab, redirect to first element
  if (lastFocusableElement === e.target && e.code === 'Tab' && !e.shiftKey) {
    e.preventDefault();
    firstFocusableElement.focus();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (a11yFocusTrap);

/***/ }),

/***/ "./src/scripts/modules/navigation/add-multiple-event-listeners.js":
/*!************************************************************************!*\
  !*** ./src/scripts/modules/navigation/add-multiple-event-listeners.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Event listener helper function
function addMultipleEventListeners(element, events, handler) {
  events.forEach(e => element.addEventListener(e, handler));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMultipleEventListeners);

/***/ }),

/***/ "./src/scripts/modules/navigation/calculate-burger-menu-position.js":
/*!**************************************************************************!*\
  !*** ./src/scripts/modules/navigation/calculate-burger-menu-position.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Calculate burger menu position
function calculateBurgerMenuPosition() {
  // If nav-toggle, site-header or main-menu not found, bail
  if (!document.getElementById('nav-toggle') || !document.querySelector('.site-header') || !document.getElementById('menu-items-wrapper')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No nav-toggle or site-header found.');
    return;
  }

  // Set viewport
  const viewportWidth = document.documentElement.clientWidth || document.body.clientWidth;

  // Get --width-max-mobile from CSS
  const widthMaxMobile = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--width-max-mobile'), 10);

  // Get the height of .site-header and #nav-toggle
  // Calculate the top position of the toggle to be exactly in the center vertically
  const siteHeaderHeight = document.querySelector('.site-header').offsetHeight;

  // Set navigation position from top if on mobile
  if (viewportWidth <= widthMaxMobile) {
    document.getElementById('menu-items-wrapper').style.top = `${siteHeaderHeight}px`;
    document.getElementById('menu-items-wrapper').style.height = `calc(100vh - ${siteHeaderHeight}px)`;

    // If there is air-notification element(s), calculate top and height of menu-items-wrapper
    if (document.querySelector('.air-notification')) {
      // Get air-notification element(s)
      const airNotifications = document.querySelectorAll('.air-notification');

      // Get the height of air-notification(s)
      let airNotificationsHeight = 0;
      airNotifications.forEach(airNotification => {
        airNotificationsHeight = airNotification.offsetHeight + airNotificationsHeight;
      });

      // Set the height and top of menu-items-wrapper
      document.getElementById('menu-items-wrapper').style.height = `calc(100vh - ${siteHeaderHeight + airNotificationsHeight}px)`;
      document.getElementById('menu-items-wrapper').style.top = `${siteHeaderHeight + airNotificationsHeight}px`;

      // When air-notification is closed, recalculate the height of menu-items-wrapper
      airNotifications.forEach(airNotification => {
        const button = airNotification.querySelector('button');
        const currentNotificationHeight = airNotification.offsetHeight;
        if (button) {
          button.addEventListener('click', () => {
            airNotificationsHeight -= currentNotificationHeight;
            document.getElementById('menu-items-wrapper').style.height = `calc(100vh - ${siteHeaderHeight + airNotificationsHeight}px)`;
            document.getElementById('menu-items-wrapper').style.top = `${siteHeaderHeight + airNotificationsHeight}px`;
          });
        }
      });
    }
  } else {
    document.getElementById('menu-items-wrapper').style.top = '0';
    document.getElementById('menu-items-wrapper').style.height = 'auto';
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateBurgerMenuPosition);

/***/ }),

/***/ "./src/scripts/modules/navigation/calculate-dropdown-toggle-height.js":
/*!****************************************************************************!*\
  !*** ./src/scripts/modules/navigation/calculate-dropdown-toggle-height.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Calculate mobile nav-toggle height
function calculateDropdownToggleHeight() {
  // If .dropdown-toggle not found, bail
  if (!document.querySelectorAll('.dropdown-toggle')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No dropdown-toggles found.');
    return;
  }

  // Find all .dropdown-toggle elements on mobile
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  // Loop through dropdown toggles
  dropdownToggles.forEach(dropdownToggle => {
    // Get the height of previous element

    const previousElement = dropdownToggle.previousElementSibling;
    if (previousElement) {
      const previousElementHeight = previousElement.offsetHeight;
      // Set the height of the dropdown toggle
      // eslint-disable-next-line no-param-reassign
      dropdownToggle.style.height = `${previousElementHeight}px`;
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculateDropdownToggleHeight);

/***/ }),

/***/ "./src/scripts/modules/navigation/check-for-submenu-overflow.js":
/*!**********************************************************************!*\
  !*** ./src/scripts/modules/navigation/check-for-submenu-overflow.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _is_out_of_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-out-of-viewport */ "./src/scripts/modules/navigation/is-out-of-viewport.js");
// Import required modules


// Check for submenu overflow
function checkForSubmenuOverflow(items) {
  // If items not found, bail
  if (!items) {
    // eslint-disable-next-line no-console
    console.log('Warning: No items for sub-menus found.');
    return;
  }
  items.forEach(li => {
    // Find sub menus
    const subMenusUnderMenuItem = li.querySelectorAll('.sub-menu');

    // Loop through sub menus
    subMenusUnderMenuItem.forEach(subMenu => {
      // First let's check if submenu exists
      if (typeof subMenusUnderMenuItem !== 'undefined') {
        // Check if the sub menu is out of viewport or not
        const isOut = (0,_is_out_of_viewport__WEBPACK_IMPORTED_MODULE_0__["default"])(subMenu);

        // At least one side of the element is out of viewport
        if (isOut.right) {
          subMenu.classList.add('is-out-of-viewport');
        }
      }
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkForSubmenuOverflow);

/***/ }),

/***/ "./src/scripts/modules/navigation/close-sub-menu-handler.js":
/*!******************************************************************!*\
  !*** ./src/scripts/modules/navigation/close-sub-menu-handler.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _close_sub_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./close-sub-menu */ "./src/scripts/modules/navigation/close-sub-menu.js");

function closeSubMenuHandler(items) {
  // Close open dropdowns when clicking outside of the menu
  const page = document.getElementById('page');
  page.addEventListener('click', e => {
    // If the click is inside the menu, bail
    if (e.target.closest('.menu-items')) {
      return;
    }
    items.forEach(li => {
      (0,_close_sub_menu__WEBPACK_IMPORTED_MODULE_0__["default"])(li);
    });
  });

  // Close open dropdown when pressing escape
  items.forEach(li => {
    li.addEventListener('keydown', keydownMouseoverEvent => {
      if (keydownMouseoverEvent.key === 'Escape') {
        (0,_close_sub_menu__WEBPACK_IMPORTED_MODULE_0__["default"])(li);
      }
    });
  });

  // Close other dropdowns when opening a new one
  items.forEach(li => {
    // Bail if no dropdown
    if (!li.classList.contains('menu-item-has-children')) {
      return;
    }
    const dropdownToggle = li.querySelector('.dropdown-toggle');
    const sameLevelDropdowns = li.parentNode.querySelectorAll(':scope > .menu-item-has-children');

    // Add event listener to dropdown toggle
    dropdownToggle.addEventListener('click', () => {
      // We want to close other dropdowns only when a new one is opened
      if (!dropdownToggle.classList.contains('toggled-on')) {
        return;
      }
      sameLevelDropdowns.forEach(sameLevelDropdown => {
        if (sameLevelDropdown !== li) {
          // Close all other sub level dropdowns
          sameLevelDropdown.querySelectorAll('.menu-item').forEach(subLi => {
            (0,_close_sub_menu__WEBPACK_IMPORTED_MODULE_0__["default"])(subLi);
          });
          // Close other same level dropdowns
          (0,_close_sub_menu__WEBPACK_IMPORTED_MODULE_0__["default"])(sameLevelDropdown);
        }
      });
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeSubMenuHandler);

/***/ }),

/***/ "./src/scripts/modules/navigation/close-sub-menu.js":
/*!**********************************************************!*\
  !*** ./src/scripts/modules/navigation/close-sub-menu.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function closeSubMenu(li) {
  // If menu item is not a dropdown then do nothing
  if (!li.querySelector('.dropdown-toggle') && !li.querySelector('.sub-menu')) {
    return;
  }

  // Get the dropdown-button
  const dropdownButton = li.querySelector('.dropdown-toggle');

  // Get the submenu
  const subMenu = li.querySelector('.sub-menu');

  // If the dropdown-menu is not open, bail
  if (!subMenu.classList.contains('toggled-on')) {
    return;
  }

  // Remove the open class from the dropdown-menu
  subMenu.classList.remove('toggled-on');

  // Remove the open class from the dropdown-button
  dropdownButton.classList.remove('toggled-on');

  // Remove the aria-expanded attribute from the dropdown-button
  dropdownButton.setAttribute('aria-expanded', 'false');

  // Get the link text that is children of this item
  const linkText = dropdownButton.innerHTML;

  // Add the aria-label to the dropdown button
  // eslint-disable-next-line camelcase, no-undef
  dropdownButton.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeSubMenu);

/***/ }),

/***/ "./src/scripts/modules/navigation/convert-dropdown-menu-items.js":
/*!***********************************************************************!*\
  !*** ./src/scripts/modules/navigation/convert-dropdown-menu-items.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function convertDropdownMenuItems(items) {
  items.forEach(li => {
    // Get dropdown toggle button
    const dropdownToggle = li.querySelector('.dropdown-toggle');

    // Get dropdown menu item data
    const menuItemTitle = li.querySelector('a > span').innerHTML;
    const menuItemLinkElement = li.querySelector('a');
    const menuItemLink = menuItemLinkElement.href;

    // Remove dropdown menu item link
    menuItemLinkElement.remove();

    // Add dropdown menu item title to dropdown toggle button
    dropdownToggle.innerHTML = menuItemTitle;

    // Create new nav element
    const navElement = document.createElement('li');
    navElement.classList.add('menu-item');

    // Add dropdown menu item data to nav element
    // Create elements
    const navElementLink = document.createElement('a');
    const navElementLinkSpan = document.createElement('span');

    // Add data to elements
    // Span
    navElementLinkSpan.innerHTML = menuItemTitle;
    navElementLinkSpan.setAttribute('itemprop', 'name');
    // Link
    navElementLink.setAttribute('itemprop', 'url');
    navElementLink.href = menuItemLink;
    navElementLink.classList.add('dropdown-item');

    // Append elements
    navElementLink.appendChild(navElementLinkSpan);
    navElement.appendChild(navElementLink);

    // Get the sub menu first child and add the new nav element before it
    const subMenuFirstChild = li.querySelector('.sub-menu > li');
    const subMenu = li.querySelector('.sub-menu');
    subMenu.insertBefore(navElement, subMenuFirstChild);
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertDropdownMenuItems);

/***/ }),

/***/ "./src/scripts/modules/navigation/dropdown-menu-on-hover.js":
/*!******************************************************************!*\
  !*** ./src/scripts/modules/navigation/dropdown-menu-on-hover.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Dropdown menu function
function dropdownMenuOnHover(items) {
  // Optional timeout
  const hoverIntentTimeout = 0;
  items.forEach(li => {
    // eslint-disable-next-line func-names
    li.addEventListener('mouseover', function () {
      // Get --width-max-mobile from CSS
      const widthMaxMobile = getComputedStyle(document.documentElement).getPropertyValue('--width-max-mobile');

      // Let's see if we are on mobile viewport
      const isMobile = window.matchMedia(`(max-width: ${widthMaxMobile})`).matches;

      // If rules don't apply, bail
      if (li.classList.contains('removing-hover') || isMobile) {
        return;
      }

      // Add hover classes
      this.classList.add('hover-intent');
      this.classList.add('hovering');
      this.parentNode.classList.add('hover-intent');
      this.parentNode.classList.add('hovering');

      // Remove hovering class after a while
      setTimeout(() => {
        this.classList.remove('hovering');
        this.parentNode.classList.remove('hovering');
      }, 500);
      document.addEventListener('keydown', keydownMouseoverEvent => {
        // If rules don't apply, bail
        if (this.classList.contains('removing-hover') || !this.classList.contains('hovering') || !this.parentNode.classList.contains('hovering')) {
          return;
        }

        // Close navigation on Escape while hovering the navigation
        if (keydownMouseoverEvent.key === 'Escape') {
          li.classList.remove('hover-intent');
          li.parentNode.classList.remove('hover-intent');
          li.parentNode.parentNode.classList.remove('hover-intent');

          // Add class removing-hover to prevent the menu from opening again when moving the mouse
          li.classList.add('removing-hover');
          li.parentNode.classList.add('removing-hover');

          // Remove removing-hover class after a while to re-initialize the menu
          setTimeout(() => {
            this.classList.remove('removing-hover');
            this.parentNode.classList.remove('removing-hover');
          }, 500);
        }
      });

      // Remove removing-hover class after a while to re-initialize the menu
      setTimeout(() => {
        this.classList.remove('removing-hover');
        this.parentNode.classList.remove('removing-hover');
      }, 500);
    });

    // eslint-disable-next-line func-names
    li.addEventListener('mouseleave', function () {
      setTimeout(() => {
        // Remove hover-intent class on mouse leave
        this.classList.remove('hover-intent');
        this.parentNode.classList.remove('hover-intent');
        const dropdownToggles = this.querySelectorAll('.dropdown-toggle');
        dropdownToggles.forEach(dropdownToggle => {
          // Set aria-expanded to false for all dropdown-toggle elements
          dropdownToggle.setAttribute('aria-expanded', 'false');
          if (dropdownToggle.parentNode.querySelector('.dropdown')) {
            const linkText = dropdownToggle.parentNode.querySelector('.dropdown').textContent;

            // Set aria-label to expand for all dropdown-toggle elements
            // eslint-disable-next-line camelcase, no-undef
            dropdownToggle.setAttribute('aria-label', `${air_light_screenReaderText.expand_for} ${linkText}`);
          }
        });
      }, hoverIntentTimeout);
      setTimeout(() => {
        // Remove removing-hover class after a while to re-initialize the menu
        this.classList.remove('removing-hover');
        this.parentNode.classList.remove('removing-hover');
      }, 500);
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropdownMenuOnHover);

/***/ }),

/***/ "./src/scripts/modules/navigation/is-out-of-viewport.js":
/*!**************************************************************!*\
  !*** ./src/scripts/modules/navigation/is-out-of-viewport.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Check if an element is out of the viewport
// eslint-disable-next-line func-names
const isOutOfViewport = function (elem) {
  // Get element's bounding
  const bounding = elem.getBoundingClientRect();

  // Check if it's out of the viewport on each side
  const out = {};
  out.top = bounding.top < 0;
  out.left = bounding.left < 0;
  out.bottom = bounding.bottom >= (document.documentElement.clientHeight || document.body.clientHeight);
  out.right = bounding.right >= (document.documentElement.clientWidth || document.body.clientWidth);
  out.any = out.top || out.left || out.bottom || out.right;
  return out;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isOutOfViewport);

/***/ }),

/***/ "./src/scripts/modules/top.js":
/*!************************************!*\
  !*** ./src/scripts/modules/top.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moveto */ "./node_modules/moveto/dist/moveTo.js");
/* harmony import */ var moveto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moveto__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable max-len */

const backToTop = () => {
  // Back to top button
  const moveToTop = new (moveto__WEBPACK_IMPORTED_MODULE_0___default())({
    duration: 300,
    easing: 'easeOutQuart'
  });
  const topButton = document.getElementById('top');
  const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  function trackScroll() {
    const scrolled = window.pageYOffset;
    const scrollAmount = document.documentElement.clientHeight;
    if (scrolled > scrollAmount) {
      topButton.classList.add('is-visible');
    }
    if (scrolled < scrollAmount) {
      topButton.classList.remove('is-visible');
    }
  }
  function scroll(focusVisible) {
    // Check if user prefers reduced motion, if so, just scroll to top
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      focusableElements[0].focus({
        focusVisible
      });
      return;
    }

    // Move smoothly to the first focusable element on the page
    moveToTop.move(focusableElements[0]);

    // Focus too, if on keyboard
    focusableElements[0].focus({
      preventScroll: true,
      focusVisible
    });
  }
  if (topButton) {
    topButton.addEventListener('click', event => {
      // Don't add hash in the end of the url
      event.preventDefault();

      // Focus without visibility (as user is not using keyboard)
      scroll(false);
    });
    topButton.addEventListener('keydown', event => {
      // Don't propagate keydown event to click event
      event.preventDefault();

      // Scroll with focus visible
      scroll(true);
    });
  }
  window.addEventListener('scroll', trackScroll);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backToTop);

/***/ }),

/***/ "./src/styles/gutenberg-editor-styles.scss":
/*!*************************************************!*\
  !*** ./src/styles/gutenberg-editor-styles.scss ***!
  \*************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nUndefined mixin.\n\u001b[34m   ╷\u001b[0m\n\u001b[34m13 │\u001b[0m       \u001b[31m@include button-size-small()\u001b[0m;\n\u001b[34m   │\u001b[0m \u001b[31m      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\u001b[0m\n\u001b[34m   ╵\u001b[0m\n  src/styles/gutenberg/layout/_button.scss 13:7  @import\n  src/styles/gutenberg-editor-styles.scss 35:9   root stylesheet\n    at tryRunOrWebpackError (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/HookWebpackError.js:86:9)\n    at __webpack_require_module__ (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5301:12)\n    at __webpack_require__ (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5258:18)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5330:20\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at done (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/Hook.js:18:14)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5236:43\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5198:16\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5166:15\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at done (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3527:9)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5112:8\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3531:6\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:111:20)\n    at ItemCacheFacade.store (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3530:11\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:95:34\n    at Array.<anonymous> (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/cache/MemoryCachePlugin.js:45:13)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:79:18)\n    at ItemCacheFacade.get (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3498:9)\n    at codeGen (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5100:11)\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5130:14\n    at processQueue (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nUndefined mixin.\n\u001b[34m   ╷\u001b[0m\n\u001b[34m13 │\u001b[0m       \u001b[31m@include button-size-small()\u001b[0m;\n\u001b[34m   │\u001b[0m \u001b[31m      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\u001b[0m\n\u001b[34m   ╵\u001b[0m\n  src/styles/gutenberg/layout/_button.scss 13:7  @import\n  src/styles/gutenberg-editor-styles.scss 35:9   root stylesheet\n    at Object.<anonymous> (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/src/styles/gutenberg-editor-styles.scss:1:7)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:494:10\n    at Hook.eval [as call] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/Hook.js:14:14)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5303:39\n    at tryRunOrWebpackError (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/HookWebpackError.js:81:7)\n    at __webpack_require_module__ (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5301:12)\n    at __webpack_require__ (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5258:18)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5330:20\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at done (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/Hook.js:18:14)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5236:43\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5198:16\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5166:15\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at done (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3527:9)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5112:8\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3531:6\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:111:20)\n    at ItemCacheFacade.store (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3530:11\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:95:34\n    at Array.<anonymous> (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/cache/MemoryCachePlugin.js:45:13)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:79:18)\n    at ItemCacheFacade.get (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3498:9)\n    at codeGen (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5100:11)\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5130:14\n    at processQueue (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/src/styles/gutenberg-editor-styles.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nUndefined mixin.\\n\\u001b[34m   ╷\\u001b[0m\\n\\u001b[34m13 │\\u001b[0m       \\u001b[31m@include button-size-small()\\u001b[0m;\\n\\u001b[34m   │\\u001b[0m \\u001b[31m      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\\u001b[0m\\n\\u001b[34m   ╵\\u001b[0m\\n  src/styles/gutenberg/layout/_button.scss 13:7  @import\\n  src/styles/gutenberg-editor-styles.scss 35:9   root stylesheet\");");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nUndefined mixin.\n\u001b[34m   ╷\u001b[0m\n\u001b[34m17 │\u001b[0m       \u001b[31m@include button-size-small()\u001b[0m;\n\u001b[34m   │\u001b[0m \u001b[31m      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\u001b[0m\n\u001b[34m   ╵\u001b[0m\n  src/styles/layout/_forms.scss 17:7  @import\n  src/styles/style.scss 38:9          root stylesheet\n    at tryRunOrWebpackError (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/HookWebpackError.js:86:9)\n    at __webpack_require_module__ (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5301:12)\n    at __webpack_require__ (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5258:18)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5330:20\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at done (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5236:43\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5198:16\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5166:15\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at done (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3527:9)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5112:8\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3531:6\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:111:20)\n    at ItemCacheFacade.store (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3530:11\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:95:34\n    at Array.<anonymous> (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/cache/MemoryCachePlugin.js:45:13)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:79:18)\n    at ItemCacheFacade.get (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3498:9)\n    at codeGen (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5100:11)\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5130:14\n    at processQueue (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nUndefined mixin.\n\u001b[34m   ╷\u001b[0m\n\u001b[34m17 │\u001b[0m       \u001b[31m@include button-size-small()\u001b[0m;\n\u001b[34m   │\u001b[0m \u001b[31m      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\u001b[0m\n\u001b[34m   ╵\u001b[0m\n  src/styles/layout/_forms.scss 17:7  @import\n  src/styles/style.scss 38:9          root stylesheet\n    at Object.<anonymous> (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/src/styles/style.scss:1:7)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:494:10\n    at Hook.eval [as call] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5303:39\n    at tryRunOrWebpackError (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/HookWebpackError.js:81:7)\n    at __webpack_require_module__ (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5301:12)\n    at __webpack_require__ (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5258:18)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5330:20\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at done (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5236:43\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5198:16\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5166:15\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3485:9)\n    at done (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3527:9)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5112:8\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3531:6\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:111:20)\n    at ItemCacheFacade.store (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3530:11\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:95:34\n    at Array.<anonymous> (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/cache/MemoryCachePlugin.js:45:13)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Cache.js:79:18)\n    at ItemCacheFacade.get (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:3498:9)\n    at codeGen (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5100:11)\n    at symbolIterator (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/neo-async/async.js:3463:5)\n    at /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/Compilation.js:5130:14\n    at processQueue (/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for /Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/Applications/MAMP/htdocs/brantt_/brantt_ docker/wp-content/themes/brantt/src/styles/style.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nUndefined mixin.\\n\\u001b[34m   ╷\\u001b[0m\\n\\u001b[34m17 │\\u001b[0m       \\u001b[31m@include button-size-small()\\u001b[0m;\\n\\u001b[34m   │\\u001b[0m \\u001b[31m      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^\\u001b[0m\\n\\u001b[34m   ╵\\u001b[0m\\n  src/styles/layout/_forms.scss 17:7  @import\\n  src/styles/style.scss 38:9          root stylesheet\");");

/***/ })

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_gutenberg_editor_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/gutenberg-editor-styles.scss */ "./src/styles/gutenberg-editor-styles.scss");
/* harmony import */ var _styles_gutenberg_editor_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_gutenberg_editor_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reframe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reframe.js */ "./node_modules/reframe.js/dist/reframe.es.js");
/* harmony import */ var _scripts_modules_external_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/modules/external-link */ "./src/scripts/modules/external-link.js");
/* harmony import */ var _scripts_modules_anchors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/modules/anchors */ "./src/scripts/modules/anchors.js");
/* harmony import */ var _scripts_modules_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/modules/top */ "./src/scripts/modules/top.js");
/* harmony import */ var _scripts_modules_a11y_skip_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/modules/a11y-skip-link */ "./src/scripts/modules/a11y-skip-link.js");
/* harmony import */ var _scripts_modules_a11y_focus_search_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/modules/a11y-focus-search-field */ "./src/scripts/modules/a11y-focus-search-field.js");
/* harmony import */ var _scripts_modules_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/modules/navigation */ "./src/scripts/modules/navigation.js");
/* eslint-disable max-len, no-param-reassign, no-unused-vars */
/**
 * Air theme JavaScript.
 */



// Import modules








// Define Javascript is active by changing the body class
document.body.classList.remove('no-js');
document.body.classList.add('js');
document.addEventListener('DOMContentLoaded', () => {
  (0,_scripts_modules_anchors__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_scripts_modules_top__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_scripts_modules_external_link__WEBPACK_IMPORTED_MODULE_3__.styleExternalLinks)();
  (0,_scripts_modules_external_link__WEBPACK_IMPORTED_MODULE_3__.initExternalLinkLabels)();
  (0,_scripts_modules_a11y_skip_link__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_scripts_modules_a11y_focus_search_field__WEBPACK_IMPORTED_MODULE_7__["default"])();

  // Init navigation
  // If you want to enable click based navigation, comment navDesktop() and uncomment navClick()
  // Remember to enable styles in sass/navigation/navigation.scss
  (0,_scripts_modules_navigation__WEBPACK_IMPORTED_MODULE_8__.navDesktop)();
  // navClick();
  (0,_scripts_modules_navigation__WEBPACK_IMPORTED_MODULE_8__.navMobile)();

  // Uncomment if you like to use a sticky navigation
  // navSticky();

  // Fit video embeds to container
  (0,reframe_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.wp-has-aspect-ratio iframe');
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
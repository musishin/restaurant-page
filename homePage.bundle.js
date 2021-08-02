/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _images_cafe_main_8_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cafe-main-8.jpeg */ \"./src/images/cafe-main-8.jpeg\");\n\n\nfunction homePage() {\n    const bodyCont = document.createElement('div');\n    const leftCont = document.createElement('div');\n    const restName = document.createElement('span');\n    const tabCont = document.createElement('div');\n    const homeItem = document.createElement('span');\n    const menuItem = document.createElement('span');\n    const contactItem = document.createElement('span');\n    const mainCont = document.createElement('div');\n    const imgCont = document.createElement('div');\n    const homeImg = document.createElement('img');\n    const infoCont = document.createElement('div');\n    const blurbCont = document.createElement('div');\n    const blurbText = document.createElement('div');\n    const hoursCont = document.createElement('div');\n\n    bodyCont.appendChild(leftCont);\n    leftCont.appendChild(restName);\n    leftCont.appendChild(tabCont);\n    tabCont.appendChild(homeItem);\n    tabCont.appendChild(menuItem);\n    tabCont.appendChild(contactItem);\n    bodyCont.appendChild(mainCont);\n    mainCont.appendChild(imgCont);\n    imgCont.appendChild(homeImg);\n    mainCont.appendChild(infoCont);\n    infoCont.appendChild(blurbCont);\n    blurbCont.appendChild(blurbText);\n    infoCont.appendChild(hoursCont);\n\n    restName.innerHTML = 'Seventh Heaven Caf&egrave;';\n    homeItem.innerHTML = 'Home';\n    menuItem.innerHTML = 'Menu';\n    contactItem.innerHTML = 'Contact';\n    blurbText.innerHTML = 'Seventh Heaven, alternatively spelled 7th Heaven, is a bar and restaurant owned and run by Tifa Lockhart in the Final Fantasy VII series, located in the Sector 7 slums of Midgar. It has served as a home base for many of the games\\' main characters, specifically in Final Fantasy VII. Located in the slums of Sector 7 in Midgar, the original Seventh Heaven bar was built by an unnamed carpenter during the events of Crisis Core -Final Fantasy VII-, and named \"Seventh Heaven\" by Zack Fair during a conversation.';\n\n    bodyCont.setAttribute('id', 'body-cont');\n    leftCont.setAttribute('id', 'left-cont');\n    restName.setAttribute('id', 'rest-name');\n    tabCont.setAttribute('id', 'tab-cont');\n    homeItem.classList.add('menu-items');\n    menuItem.classList.add('menu-items');\n    contactItem.classList.add('menu-items');\n    mainCont.setAttribute('id', 'main-cont');\n    mainCont.classList.add('parallax');\n    imgCont.setAttribute('id', 'img-cont');\n    imgCont.classList.add('parallax-layer', 'parallax-layer-back');\n    homeImg.src = _images_cafe_main_8_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    infoCont.setAttribute('id', 'info-cont');\n    infoCont.classList.add('parallax-layer', 'parallax-layer-base');\n    bodyCont.setAttribute('id', 'body-cont');\n    blurbCont.setAttribute('id', 'blurb-cont');\n    blurbText.setAttribute('id', 'blurb-text');\n    hoursCont.setAttribute('id', 'hours-cont');\n\n    return bodyCont;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ }),

/***/ "./src/images/cafe-main-8.jpeg":
/*!*************************************!*\
  !*** ./src/images/cafe-main-8.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"accea90ffc81728d706e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cafe-main-8.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/homePage.js");
/******/ 	
/******/ })()
;
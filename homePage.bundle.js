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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\n    const bodyCont = document.createElement('div');\n    const leftCont = document.createElement('div');\n    const restName = document.createElement('span');\n    const tabCont = document.createElement('div');\n    const homeItem = document.createElement('span');\n    const menuItem = document.createElement('span');\n    const contactItem = document.createElement('span');\n    const mainCont = document.createElement('div');\n    const imgCont = document.createElement('div');\n    const homeImg = document.createElement('img');\n    const infoCont = document.createElement('div');\n\n    bodyCont.appendChild(leftCont);\n    leftCont.appendChild(restName);\n    leftCont.appendChild(tabCont);\n    tabCont.appendChild(homeItem);\n    tabCont.appendChild(menuItem);\n    tabCont.appendChild(contactItem);\n    bodyCont.appendChild(mainCont);\n    mainCont.appendChild(imgCont);\n    imgCont.appendChild(homeImg);\n    mainCont.appendChild(infoCont);\n\n    restName.innerHTML = 'Seventh Heaven Caf&egrave;';\n    homeItem.innerHTML = 'Home';\n    menuItem.innerHTML = 'Menu';\n    contactItem.innerHTML = 'Contact';\n\n    leftCont.setAttribute('id', 'left-cont');\n    restName.setAttribute('id', 'rest-name');\n    tabCont.setAttribute('id', 'tab-cont');\n    homeItem.classList.add('menu-items');\n    menuItem.classList.add('menu-items');\n    contactItem.classList.add('menu-items');\n    mainCont.setAttribute('id', 'main-cont');\n    mainCont.classList.add('parallax');\n    imgCont.setAttribute('id', 'img-cont');\n    imgCont.classList.add('parallax-layer', 'parallax-layer-back');\n    homeImg.src = '../src/images/cafe-main-7.jpeg';\n    infoCont.setAttribute('id', 'info-cont');\n    infoCont.classList.add('parallax-layer', 'parallax-layer-base');\n    bodyCont.setAttribute('id', 'body-cont');\n\n    return bodyCont;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/homePage.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
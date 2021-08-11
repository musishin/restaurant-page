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

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\n/* harmony import */ var _images_cafe_main_4_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cafe-main-4.jpeg */ \"./src/images/cafe-main-4.jpeg\");\n\n\nfunction contactPage() {\n    const bodyCont = document.createElement('div');\n    const mainCont = document.createElement('div');\n    const contactImgCont = document.createElement('div');\n    const contactImg = document.createElement('img');\n    const contactTitle = document.createElement('div');\n\n    const contactCont = document.createElement('div');\n    const contAddressCont = document.createElement('div');\n    const contHoursCont = document.createElement('div');\n    const contContactCont = document.createElement('div');\n\n    const contAddressTitle = document.createElement('div');\n    const contHoursTitle = document.createElement('div');\n    const contContactTitle = document.createElement('div');\n\n    const contAddressInfo = document.createElement('div');\n    const contHoursInfo = document.createElement('div');\n    const contContactInfo = document.createElement('div');\n\n    const footer = document.createElement('div');\n    const footerSecOne = document.createElement('div');\n    const footerSecTwo = document.createElement('div');\n    const footerSecThree = document.createElement('div');\n    const footerSecOneTitle = document.createElement('div');\n    const footerSecTwoTitle = document.createElement('div');\n    const footerSecThreeTitle = document.createElement('div');\n    const footerSecOneText = document.createElement('div');\n    const footerSecTwoText = document.createElement('div');\n    const footerSecThreeText = document.createElement('div');\n\n    bodyCont.appendChild(mainCont);\n    mainCont.appendChild(contactImgCont);\n    contactImgCont.appendChild(contactImg);\n    contactImgCont.appendChild(contactTitle);\n    mainCont.appendChild(contactCont);\n    contactCont.appendChild(contAddressCont);\n    contactCont.appendChild(contHoursCont);\n    contactCont.appendChild(contContactCont);\n    contAddressCont.appendChild(contAddressTitle);\n    contHoursCont.appendChild(contHoursTitle);\n    contContactCont.appendChild(contContactTitle);\n    contAddressCont.appendChild(contAddressInfo);\n    contHoursCont.appendChild(contHoursInfo);\n    contContactCont.appendChild(contContactInfo);\n\n    mainCont.appendChild(footer);\n    footer.appendChild(footerSecOne);\n    footer.appendChild(footerSecTwo);\n    footer.appendChild(footerSecThree);\n    footerSecOne.appendChild(footerSecOneTitle);\n    footerSecOne.appendChild(footerSecOneText);\n    footerSecTwo.appendChild(footerSecTwoTitle);\n    footerSecTwo.appendChild(footerSecTwoText);\n    footerSecThree.appendChild(footerSecThreeTitle);\n    footerSecThree.appendChild(footerSecThreeText);\n\n    contactTitle.innerHTML = 'Contact Us';\n    contAddressTitle.innerHTML = 'Our Location';\n    contHoursTitle.innerHTML = 'Hours';\n    contContactTitle.innerHTML = 'Contact Us';\n    contAddressInfo.innerHTML = '7777 Seventh Street<br>Sector 7, Midgar 01277';\n    contHoursInfo.innerHTML = 'Mon - Thurs: 7AM - 2AM<br>Fri - Sat: 12PM - 2AM<br>Sun: 12PM - 12AM';\n    contContactInfo.innerHTML = 'Phone: 703-777-7777<br>Email: supportseventh@heaven.com';\n\n    footerSecOneTitle.innerHTML = 'ABOUT OUR COMPANY';\n    footerSecTwoTitle.innerHTML = 'POLICY AND PROMOTION';\n    footerSecThreeTitle.innerHTML = 'REWARDS';\n    footerSecOneText.innerText = '\\n\\n\\nABOUT SEVENTH HEAVEN\\n\\n\\nCAREERS\\n\\n\\nINVESTOR RELATIONS';\n    footerSecTwoText.innerText = '\\n\\n\\nSTORE POLICY';\n    footerSecThreeText.innerText = '\\n\\n\\nABOUT MEMBERS\\' POLICY';\n\n    contactImg.src = _images_cafe_main_4_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n\n    bodyCont.classList.add('body-cont');\n    mainCont.setAttribute('id', 'main-cont');\n    mainCont.classList.add('parallax');\n    contactImgCont.classList.add('parallax-layer', 'parallax-layer-back');\n    contactImgCont.setAttribute('id', 'contact-top-cont');\n    contactImg.setAttribute('id', 'contact-top-img');\n    contactImg.classList.add('image-fade-in');\n    contactTitle.setAttribute('id', 'contact-title');\n    contactTitle.classList.add('image-fade-in');\n    contactCont.classList.add('parallax-layer', 'parallax-layer-base');\n    contactCont.setAttribute('id', 'contact-cont');\n    contAddressCont.classList.add('contact-cont-divs');\n    contHoursCont.classList.add('contact-cont-divs');\n    contContactCont.classList.add('contact-cont-divs');\n    contAddressTitle.classList.add('contact-div-titles');\n    contHoursTitle.classList.add('contact-div-titles');\n    contContactTitle.classList.add('contact-div-titles');\n    contAddressInfo.classList.add('contact-div-info');\n    contHoursInfo.classList.add('contact-div-info');\n    contContactInfo.classList.add('contact-div-info');\n\n    footer.setAttribute('id', 'footer');\n    footer.classList.add('parallax-layer', 'parallax-layer-base');\n    footerSecOne.classList.add('footer-section');\n    footerSecTwo.classList.add('footer-section');\n    footerSecThree.classList.add('footer-section');\n    footerSecOneTitle.classList.add('footer-section-title');\n    footerSecTwoTitle.classList.add('footer-section-title');\n    footerSecThreeTitle.classList.add('footer-section-title');\n    footerSecOneText.classList.add('footer-section-text');\n    footerSecTwoText.classList.add('footer-section-text');\n    footerSecThreeText.classList.add('footer-section-text');\n\n    return bodyCont;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/images/cafe-main-4.jpeg":
/*!*************************************!*\
  !*** ./src/images/cafe-main-4.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"933d304d2419691ca5d5.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cafe-main-4.jpeg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/contactPage.js");
/******/ 	
/******/ })()
;
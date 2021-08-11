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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Galatea Regular Regular.woff */ \"./src/fonts/Galatea Regular Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/Galatea Regular Thin.woff */ \"./src/fonts/Galatea Regular Thin.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/Galatea Regular Light.woff */ \"./src/fonts/Galatea Regular Light.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Galatea Regular Medium.woff */ \"./src/fonts/Galatea Regular Medium.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Galatea Regular Bold.woff */ \"./src/fonts/Galatea Regular Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Galatea';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff');\\n}\\n@font-face {\\n    font-family: Galatea-Thin;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\n}\\n@font-face {\\n    font-family: Galatea-Light;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff');\\n}\\n@font-face {\\n    font-family: Galatea-Medium;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff');\\n}\\n@font-face {\\n    font-family: Galatea-Bold;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('woff');\\n}\\n\\n\\n\\n/* Parallax */\\n\\n.parallax {\\n    perspective: 1px;\\n    height: 100vh;\\n    overflow-x: hidden;\\n    overflow-y: auto;\\n}\\n\\n.parallax-layer {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n}\\n\\n.parallax-layer-base {\\n    transform: translateZ(0);\\n}\\n\\n.parallax-layer-back {\\n    transform: translateZ(-1px) scale(1.5);\\n}\\n\\n\\n\\n/* animation */\\n\\n.image-fade-in {\\n    animation: fadeIn 3s;\\n    -webkit-animation: fadeIn 3s;\\n    -moz-animation: fadeIn 3s;\\n    -o-animation: fadeIn 3s;\\n    -ms-animation: fadeIn 3s;\\n}\\n\\n@keyframes fadeIn {\\n    0% { opacity: 0; }\\n    100% { opacity: 1; }\\n}\\n\\n@-moz-keyframes fadeIn {\\n    0% { opacity:0; }\\n    100% { opacity:1; }\\n}\\n  \\n@-webkit-keyframes fadeIn {\\n    0% { opacity:0; }\\n    100% { opacity:1; }\\n}\\n  \\n@-o-keyframes fadeIn {\\n    0% { opacity:0; }\\n    100% { opacity:1; }\\n}\\n  \\n@-ms-keyframes fadeIn {\\n    0% { opacity:0; }\\n    100% { opacity:1; }\\n}\\n\\n\\n\\n/* Main content div */\\n\\nbody {\\n    padding: 0%;\\n    margin: 0%;\\n}\\n\\n#content {\\n    width: 100%;\\n    display: flex;\\n}\\n\\n.body-cont {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n\\n\\n/* Main left bar */\\n\\n#left-cont {\\n    position: fixed;\\n    left: 0;\\n    top: 0;\\n    bottom: 0;\\n    height: 100%;\\n    width: 25%;\\n    background: rgb(255, 255, 255);\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    transition: 1s;\\n    z-index: 1;\\n}\\n\\n#rest-name {\\n    font-size: 2vw;\\n    font-family: 'Galatea-Light';\\n    font-style: italic;\\n}\\n\\n#tab-cont {\\n    margin-top: 10px;\\n    width: 50%;\\n    display: flex;\\n    justify-content: space-between;\\n    font-family: 'Galatea-Thin';\\n}\\n\\n.menu-items {\\n    font-size: 1vw;\\n    cursor: pointer;\\n}\\n\\n.menu-items:hover {\\n    text-decoration: underline;\\n}\\n\\n#social-cont {\\n    position: absolute;\\n    bottom: 40%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-around;\\n    width: 50%;\\n}\\n\\n.social-logo {\\n    width: 0.9vw;\\n    cursor: pointer;\\n}\\n\\n\\n\\n/* Home Page */\\n\\n#main-cont {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    position: relative;\\n}\\n\\n#span-cont {\\n    margin-left: 25%;\\n    width: 75%;\\n    height: 100vh;\\n    position: absolute;\\n    font-size: 35px;\\n    color: white;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n#img-cont {\\n    margin-top: -1%;\\n    margin-left: 25%;\\n    width: 100%;\\n    height: 100vh;\\n    overflow: hidden;\\n}\\n\\n#img-cont img {\\n    object-fit: cover;\\n    height: 100%;\\n    width: 100%;\\n}\\n\\n#info-cont {\\n    width: 100%;\\n    background: rgb(255, 255, 255);\\n    margin-top: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    position: relative;\\n    transition: 1s;\\n}\\n\\n#blurb-cont {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    flex-direction: column;\\n    width: 75%;\\n    height: 500px;\\n    margin-left: 25%;\\n    transition: 1s;\\n}\\n\\n#blurb-title {\\n    font-family: 'Galatea';\\n    font-size: 30px;\\n}\\n\\n#blurb-text {\\n    font-family: 'Galatea-Thin';\\n    font-size: 14.5px;\\n    width: 550px;\\n    text-align: center;\\n    margin-top: 40px;\\n}\\n\\n#hours-cont {\\n    border-top: none;\\n    width: 75%;\\n    margin-left: 25%;\\n    height: 60vh;\\n    min-height: 475px;\\n    max-height: 500px;\\n    background: #747243;\\n    display: flex;\\n}\\n\\n#hours-img {\\n    width: 50%;\\n    object-fit: cover;\\n}\\n\\n#hours-inner-cont {\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n#hours-title {\\n    font-family: 'Galatea-Light';\\n    font-size: 20px;\\n    text-align: center;\\n    color: white;\\n    font-style: italic;\\n}\\n\\n#address-title {\\n    font-family: 'Galatea-Light';\\n    font-size: 20px;\\n    margin-top: 50px;\\n    text-align: center;\\n    color: white;\\n    font-style: italic;\\n}\\n\\n#hours-text {\\n    font-family: 'Galatea-Thin';\\n    font-size: 14px;\\n    text-align: center;\\n    color: white;\\n    margin-top: 10px;\\n}\\n\\n#address-text {\\n    font-family: 'Galatea-Thin';\\n    font-size: 14px;\\n    text-align: center;\\n    color: white;\\n    margin-top: 10px;\\n}\\n\\n#order-text {\\n    width: 60%;\\n    margin-top: 50px;\\n    text-align: center;\\n    font-size: 15px;\\n    color: white;\\n    font-family: 'Galatea-Thin';\\n}\\n\\n#order-btn {\\n    width: 110px;\\n    height: 40px;\\n    cursor: pointer;\\n    margin-top: 20px;\\n    border: none;\\n    background: #13130A;\\n    color: white;\\n    font-family: 'Galatea-Light';\\n    font-size: 14px;\\n    transition: 0.5s;\\n}\\n\\n#order-btn:hover {\\n    background: white;\\n    color: #13130A;\\n}\\n\\n#about-btn {\\n    width: 110px;\\n    height: 40px;\\n    cursor: pointer;\\n    margin-top: 35px;\\n    border: 1px solid #13130A;\\n    background: #13130A;\\n    color: white;\\n    font-family: 'Galatea-Light';\\n    font-size: 14px;\\n    transition: 0.5s;\\n}\\n\\n#about-btn:hover {\\n    background: white;\\n    border: 1px solid #13130A;\\n    color: #13130A;\\n}\\n\\n#mail-cont {\\n    width: 75%;\\n    height: 250px;\\n    margin-left: 25%;\\n    margin-bottom: 50px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    background: rgb(245, 245, 245);\\n}\\n\\n#mail-inner-cont {\\n    width: 50%;\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n#mail-text {\\n    width: 100%;\\n    font-family: 'Galatea-Light';\\n    font-size: 25px;\\n}\\n\\n#mail-form {\\n    width: 100%;\\n    height: 50%;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n#mail-input {\\n    width: 380px;\\n    height: 34px;\\n    font-size: 18px;\\n    font-family: 'Galatea-Light';\\n    padding-left: 5px;\\n    border: none;\\n}\\n\\n#mail-btn {\\n    width: 110px;\\n    height: 34px;\\n    cursor: pointer;\\n    margin-left: 50px;\\n    background: #13130A;\\n    color: white;\\n    font-family: 'Galatea-Light';\\n    font-size: 14px;\\n    transition: 0.5s;\\n    border: none;\\n    border: 1px solid #13130A;\\n}\\n\\n#mail-btn:hover {\\n    background: rgb(240, 240, 240);\\n    border: 1px solid #13130A;\\n    color: #13130A;\\n}\\n\\n#footer {\\n    background: white;\\n    margin-left: 25%;\\n    width: 75%;\\n    height: 40vh;\\n    min-height: 315px;\\n    max-height: 320px;\\n    display: flex;\\n    justify-content: space-between;\\n    position: relative;\\n}\\n\\n.footer-section {\\n    width: 30%;\\n    height: 100%;\\n}\\n\\n.footer-section-title {\\n    width: 100%;\\n    font-size: 12px;\\n    font-family: 'Galatea';\\n}\\n\\n.footer-section-text {\\n    width: 100%;\\n    font-family: 'Galatea-Light';\\n    font-size: 10px;\\n}\\n\\n\\n\\n/* Menu Page */\\n\\n#menu-body-cont {\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n}\\n\\n#menu-top-cont {\\n    width: 100%;\\n    height: 100vh;\\n    overflow: hidden;\\n    margin-left: 25%;\\n    margin-top: -1%;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n#menu-top-img {\\n    width: 100%;\\n    object-fit: cover;\\n}\\n\\n#menu-title {\\n    position: absolute;\\n    left: 100px;\\n    top: 25%;\\n    bottom: 25%;\\n    height: 50%;\\n    font-size: 40px;\\n    font-family: 'Galatea-Thin';\\n    display: flex;\\n    align-items: center;\\n    font-style: italic;\\n}\\n\\n#menu-cont {\\n    display: flex;\\n    justify-content: space-between;\\n    flex-wrap: wrap;\\n    position: relative;\\n    background: rgb(245, 245, 245);\\n    width: 71%;\\n    margin-top: 100vh;\\n    margin-bottom: 50px;\\n    transition: 1s;\\n    margin-left: 25%;\\n    padding: 0 2% 2% 2%;\\n}\\n\\n.food-item {\\n    width: 31.5%;\\n    height: auto;\\n    margin-top: 2.5%;\\n}\\n\\n.food-img {\\n    width: 100%;\\n    object-fit: contain;\\n    margin-bottom: 10px;\\n}\\n\\n.food-txt {\\n    width: 100%;\\n    font-family: 'Galatea';\\n    font-size: 19px;\\n}\\n\\n.food-price {\\n    width: 100%;\\n    font-family: 'Galatea-Thin';\\n    font-size: 15px;\\n}\\n\\n\\n\\n/* Contact Page */\\n\\n#contact-top-cont {\\n    width: 100%;\\n    height: 100vh;\\n    overflow: hidden;\\n    margin-left: 25%;\\n    margin-top: -1%;\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n#contact-top-img {\\n    width: 100%;\\n    object-fit: cover;\\n}\\n\\n#contact-title {\\n    position: absolute;\\n    left: 100px;\\n    top: 25%;\\n    bottom: 25%;\\n    height: 50%;\\n    font-size: 40px;\\n    font-family: 'Galatea-Thin';\\n    display: flex;\\n    align-items: center;\\n    font-style: italic;\\n    color: white;\\n}\\n\\n#contact-cont {\\n    display: flex;\\n    position: relative;\\n    background: rgb(245, 245, 245);\\n    width: 75%;\\n    min-height: 300px;\\n    margin-top: 100vh;\\n    margin-bottom: 50px;\\n    transition: 1s;\\n    margin-left: 25%;\\n}\\n\\n.contact-cont-divs {\\n    width: 33.3%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.contact-div-titles {\\n    font-family: 'Galatea';\\n    font-size: 20px;\\n    margin-bottom: 20px;\\n}\\n\\n.contact-div-info {\\n    font-family: 'Galatea-Thin';\\n    font-size: 15px;\\n    text-align: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\n/* harmony import */ var _images_cafe_main_4_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cafe-main-4.jpeg */ \"./src/images/cafe-main-4.jpeg\");\n\n\nfunction contactPage() {\n    const bodyCont = document.createElement('div');\n    const mainCont = document.createElement('div');\n    const contactImgCont = document.createElement('div');\n    const contactImg = document.createElement('img');\n    const contactTitle = document.createElement('div');\n\n    const contactCont = document.createElement('div');\n    const contAddressCont = document.createElement('div');\n    const contHoursCont = document.createElement('div');\n    const contContactCont = document.createElement('div');\n\n    const contAddressTitle = document.createElement('div');\n    const contHoursTitle = document.createElement('div');\n    const contContactTitle = document.createElement('div');\n\n    const contAddressInfo = document.createElement('div');\n    const contHoursInfo = document.createElement('div');\n    const contContactInfo = document.createElement('div');\n\n    const footer = document.createElement('div');\n    const footerSecOne = document.createElement('div');\n    const footerSecTwo = document.createElement('div');\n    const footerSecThree = document.createElement('div');\n    const footerSecOneTitle = document.createElement('div');\n    const footerSecTwoTitle = document.createElement('div');\n    const footerSecThreeTitle = document.createElement('div');\n    const footerSecOneText = document.createElement('div');\n    const footerSecTwoText = document.createElement('div');\n    const footerSecThreeText = document.createElement('div');\n\n    bodyCont.appendChild(mainCont);\n    mainCont.appendChild(contactImgCont);\n    contactImgCont.appendChild(contactImg);\n    contactImgCont.appendChild(contactTitle);\n    mainCont.appendChild(contactCont);\n    contactCont.appendChild(contAddressCont);\n    contactCont.appendChild(contHoursCont);\n    contactCont.appendChild(contContactCont);\n    contAddressCont.appendChild(contAddressTitle);\n    contHoursCont.appendChild(contHoursTitle);\n    contContactCont.appendChild(contContactTitle);\n    contAddressCont.appendChild(contAddressInfo);\n    contHoursCont.appendChild(contHoursInfo);\n    contContactCont.appendChild(contContactInfo);\n\n    mainCont.appendChild(footer);\n    footer.appendChild(footerSecOne);\n    footer.appendChild(footerSecTwo);\n    footer.appendChild(footerSecThree);\n    footerSecOne.appendChild(footerSecOneTitle);\n    footerSecOne.appendChild(footerSecOneText);\n    footerSecTwo.appendChild(footerSecTwoTitle);\n    footerSecTwo.appendChild(footerSecTwoText);\n    footerSecThree.appendChild(footerSecThreeTitle);\n    footerSecThree.appendChild(footerSecThreeText);\n\n    contactTitle.innerHTML = 'Contact Us';\n    contAddressTitle.innerHTML = 'Our Location';\n    contHoursTitle.innerHTML = 'Hours';\n    contContactTitle.innerHTML = 'Contact Us';\n    contAddressInfo.innerHTML = '7777 Seventh Street<br>Sector 7, Midgar 01277';\n    contHoursInfo.innerHTML = 'Mon - Thurs: 7AM - 2AM<br>Fri - Sat: 12PM - 2AM<br>Sun: 12PM - 12AM';\n    contContactInfo.innerHTML = 'Phone: 703-777-7777<br>Email: supportseventh@heaven.com';\n\n    footerSecOneTitle.innerHTML = 'ABOUT OUR COMPANY';\n    footerSecTwoTitle.innerHTML = 'POLICY AND PROMOTION';\n    footerSecThreeTitle.innerHTML = 'REWARDS';\n    footerSecOneText.innerText = '\\n\\n\\nABOUT SEVENTH HEAVEN\\n\\n\\nCAREERS\\n\\n\\nINVESTOR RELATIONS';\n    footerSecTwoText.innerText = '\\n\\n\\nSTORE POLICY';\n    footerSecThreeText.innerText = '\\n\\n\\nABOUT MEMBERS\\' POLICY';\n\n    contactImg.src = _images_cafe_main_4_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n\n    bodyCont.classList.add('body-cont');\n    mainCont.setAttribute('id', 'main-cont');\n    mainCont.classList.add('parallax');\n    contactImgCont.classList.add('parallax-layer', 'parallax-layer-back');\n    contactImgCont.setAttribute('id', 'contact-top-cont');\n    contactImg.setAttribute('id', 'contact-top-img');\n    contactImg.classList.add('image-fade-in');\n    contactTitle.setAttribute('id', 'contact-title');\n    contactTitle.classList.add('image-fade-in');\n    contactCont.classList.add('parallax-layer', 'parallax-layer-base');\n    contactCont.setAttribute('id', 'contact-cont');\n    contAddressCont.classList.add('contact-cont-divs');\n    contHoursCont.classList.add('contact-cont-divs');\n    contContactCont.classList.add('contact-cont-divs');\n    contAddressTitle.classList.add('contact-div-titles');\n    contHoursTitle.classList.add('contact-div-titles');\n    contContactTitle.classList.add('contact-div-titles');\n    contAddressInfo.classList.add('contact-div-info');\n    contHoursInfo.classList.add('contact-div-info');\n    contContactInfo.classList.add('contact-div-info');\n\n    footer.setAttribute('id', 'footer');\n    footer.classList.add('parallax-layer', 'parallax-layer-base');\n    footerSecOne.classList.add('footer-section');\n    footerSecTwo.classList.add('footer-section');\n    footerSecThree.classList.add('footer-section');\n    footerSecOneTitle.classList.add('footer-section-title');\n    footerSecTwoTitle.classList.add('footer-section-title');\n    footerSecThreeTitle.classList.add('footer-section-title');\n    footerSecOneText.classList.add('footer-section-text');\n    footerSecTwoText.classList.add('footer-section-text');\n    footerSecThreeText.classList.add('footer-section-text');\n\n    return bodyCont;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Bold.woff":
/*!*********************************************!*\
  !*** ./src/fonts/Galatea Regular Bold.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86e32bd5772ea9634d21.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Galatea_Regular_Bold.woff?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Light.woff":
/*!**********************************************!*\
  !*** ./src/fonts/Galatea Regular Light.woff ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c06936443247f735c290.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Galatea_Regular_Light.woff?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Medium.woff":
/*!***********************************************!*\
  !*** ./src/fonts/Galatea Regular Medium.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f34641a3d2d4558f6815.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Galatea_Regular_Medium.woff?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Regular.woff":
/*!************************************************!*\
  !*** ./src/fonts/Galatea Regular Regular.woff ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cf9c71d863325d26142c.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Galatea_Regular_Regular.woff?");

/***/ }),

/***/ "./src/fonts/Galatea Regular Thin.woff":
/*!*********************************************!*\
  !*** ./src/fonts/Galatea Regular Thin.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e6842576da6e650c172.woff\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Galatea_Regular_Thin.woff?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _images_cafe_main_8_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cafe-main-8.jpeg */ \"./src/images/cafe-main-8.jpeg\");\n/* harmony import */ var _images_cafe_main_3_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cafe-main-3.jpeg */ \"./src/images/cafe-main-3.jpeg\");\n\n\n\nfunction homePage() {\n    const bodyCont = document.createElement('div');\n    const mainCont = document.createElement('div');\n    const imgCont = document.createElement('div');\n    const homeImg = document.createElement('img');\n    const infoCont = document.createElement('div');\n    const blurbCont = document.createElement('div');\n    const blurbTitle = document.createElement('div');\n    const blurbText = document.createElement('div');\n    const hoursCont = document.createElement('div');\n    const hoursImg = document.createElement('img');\n    const hoursInnerCont = document.createElement('div');\n    const hoursTitle = document.createElement('div');\n    const hoursText = document.createElement('div');\n    const addressTitle = document.createElement('div');\n    const addressText = document.createElement('div');\n    const orderText = document.createElement('div');\n    const orderBtn = document.createElement('button');\n    const aboutBtn = document.createElement('button');\n    const mailCont = document.createElement('div');\n    const mailInnerCont = document.createElement('div');\n    const mailText = document.createElement('div');\n    const mailForm = document.createElement('form');\n    const mailInput = document.createElement('input');\n    const mailBtn = document.createElement('button');\n    const footer = document.createElement('div');\n    const footerSecOne = document.createElement('div');\n    const footerSecTwo = document.createElement('div');\n    const footerSecThree = document.createElement('div');\n    const footerSecOneTitle = document.createElement('div');\n    const footerSecTwoTitle = document.createElement('div');\n    const footerSecThreeTitle = document.createElement('div');\n    const footerSecOneText = document.createElement('div');\n    const footerSecTwoText = document.createElement('div');\n    const footerSecThreeText = document.createElement('div');\n\n    bodyCont.appendChild(mainCont);\n\n    mainCont.appendChild(imgCont);\n    mainCont.appendChild(infoCont);\n    \n    imgCont.appendChild(homeImg);\n\n    infoCont.appendChild(blurbCont);\n    infoCont.appendChild(hoursCont);\n    infoCont.appendChild(mailCont);\n    infoCont.appendChild(footer);\n\n    blurbCont.appendChild(blurbTitle);\n    blurbCont.appendChild(blurbText);\n    blurbCont.appendChild(aboutBtn);\n\n    hoursCont.appendChild(hoursImg);\n    hoursCont.appendChild(hoursInnerCont);\n\n    hoursInnerCont.appendChild(hoursTitle);\n    hoursInnerCont.appendChild(hoursText);\n    hoursInnerCont.appendChild(addressTitle);\n    hoursInnerCont.appendChild(addressText);\n    hoursInnerCont.appendChild(orderText);\n    hoursInnerCont.appendChild(orderBtn);\n\n    mailCont.appendChild(mailInnerCont);\n\n    mailInnerCont.appendChild(mailText);\n    mailInnerCont.appendChild(mailForm);\n\n    mailForm.appendChild(mailInput);\n    mailForm.appendChild(mailBtn);\n\n    footer.appendChild(footerSecOne);\n    footer.appendChild(footerSecTwo);\n    footer.appendChild(footerSecThree);\n\n    footerSecOne.appendChild(footerSecOneTitle);\n    footerSecOne.appendChild(footerSecOneText);\n    footerSecTwo.appendChild(footerSecTwoTitle);\n    footerSecTwo.appendChild(footerSecTwoText);\n    footerSecThree.appendChild(footerSecThreeTitle);\n    footerSecThree.appendChild(footerSecThreeText);\n\n    blurbText.innerHTML = 'Seventh Heaven, alternatively spelled 7th Heaven, is a bar and restaurant owned and run by Tifa Lockhart in the Final Fantasy VII series, located in the Sector 7 slums of Midgar. It has served as a home base for many of the games\\' main characters, specifically in Final Fantasy VII. Located in the slums of Sector 7 in Midgar, the original Seventh Heaven bar was built by an unnamed carpenter during the events of Crisis Core -Final Fantasy VII-, and named \"Seventh Heaven\" by Zack Fair during a conversation.';\n    aboutBtn.innerHTML = 'Learn More';\n    blurbTitle.innerHTML = 'Welcome to Seventh Heaven';\n    hoursTitle.innerHTML = 'Hours';\n    addressTitle.innerHTML = 'Address';\n    hoursText.innerHTML = 'Mon - Thurs: 7AM - 2AM<br />Fri - Sun: 7AM - 12AM';\n    addressText.innerHTML = '7777 Seventh Street<br />Sector 7, Midgar 01277';\n    orderText.innerHTML = 'Order online right now and have your food and drinks ready by the time you arrive! Click order online below.';\n    orderBtn.innerHTML = 'Order Online';\n    mailText.innerHTML = 'Join our mailing list!';\n    mailBtn.innerHTML = 'Join';\n    footerSecOneTitle.innerHTML = 'ABOUT OUR COMPANY';\n    footerSecTwoTitle.innerHTML = 'POLICY AND PROMOTION';\n    footerSecThreeTitle.innerHTML = 'REWARDS';\n    footerSecOneText.innerText = '\\n\\n\\nABOUT SEVENTH HEAVEN\\n\\n\\nCAREERS\\n\\n\\nINVESTOR RELATIONS';\n    footerSecTwoText.innerText = '\\n\\n\\nSTORE POLICY';\n    footerSecThreeText.innerText = '\\n\\n\\nABOUT MEMBERS\\' POLICY';\n\n    bodyCont.classList.add('body-cont');\n    mainCont.setAttribute('id', 'main-cont');\n    mainCont.classList.add('parallax');\n    imgCont.setAttribute('id', 'img-cont');\n    imgCont.classList.add('parallax-layer', 'parallax-layer-back');\n    homeImg.src = _images_cafe_main_8_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    homeImg.classList.add('image-fade-in');\n    infoCont.setAttribute('id', 'info-cont');\n    infoCont.classList.add('parallax-layer', 'parallax-layer-base');\n    bodyCont.setAttribute('id', 'body-cont');\n    blurbCont.setAttribute('id', 'blurb-cont');\n    blurbTitle.setAttribute('id', 'blurb-title');\n    blurbText.setAttribute('id', 'blurb-text');\n    hoursCont.setAttribute('id', 'hours-cont');\n    hoursImg.src = _images_cafe_main_3_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    hoursImg.setAttribute('id', 'hours-img');\n    hoursInnerCont.setAttribute('id', 'hours-inner-cont');\n    hoursTitle.setAttribute('id', 'hours-title');\n    hoursText.setAttribute('id', 'hours-text');\n    addressTitle.setAttribute('id', 'address-title');\n    addressText.setAttribute('id', 'address-text');\n    orderText.setAttribute('id', 'order-text');\n    orderBtn.setAttribute('id', 'order-btn');\n    aboutBtn.setAttribute('id', 'about-btn');\n    mailCont.setAttribute('id', 'mail-cont');\n    mailInnerCont.setAttribute('id', 'mail-inner-cont');\n    mailText.setAttribute('id', 'mail-text');\n    mailForm.setAttribute('type', 'text');\n    mailForm.setAttribute('id', 'mail-form');\n    mailForm.setAttribute('name', 'mail-form');\n    mailInput.setAttribute('id', 'mail-input');\n    mailBtn.setAttribute('id', 'mail-btn');\n    mailBtn.setAttribute('type', 'button');\n    footer.setAttribute('id', 'footer');\n    footerSecOne.classList.add('footer-section');\n    footerSecTwo.classList.add('footer-section');\n    footerSecThree.classList.add('footer-section');\n    footerSecOneTitle.classList.add('footer-section-title');\n    footerSecTwoTitle.classList.add('footer-section-title');\n    footerSecThreeTitle.classList.add('footer-section-title');\n    footerSecOneText.classList.add('footer-section-text');\n    footerSecTwoText.classList.add('footer-section-text');\n    footerSecThreeText.classList.add('footer-section-text');\n\n    return bodyCont;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homePage.js?");

/***/ }),

/***/ "./src/images/cafe-img-2.jpeg":
/*!************************************!*\
  !*** ./src/images/cafe-img-2.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99d0882378f34325c209.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cafe-img-2.jpeg?");

/***/ }),

/***/ "./src/images/cafe-main-3.jpeg":
/*!*************************************!*\
  !*** ./src/images/cafe-main-3.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bbee96f8b7c435e6c1cb.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cafe-main-3.jpeg?");

/***/ }),

/***/ "./src/images/cafe-main-4.jpeg":
/*!*************************************!*\
  !*** ./src/images/cafe-main-4.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"933d304d2419691ca5d5.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cafe-main-4.jpeg?");

/***/ }),

/***/ "./src/images/cafe-main-8.jpeg":
/*!*************************************!*\
  !*** ./src/images/cafe-main-8.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"accea90ffc81728d706e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/cafe-main-8.jpeg?");

/***/ }),

/***/ "./src/images/facebook.png":
/*!*********************************!*\
  !*** ./src/images/facebook.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"885950233dcfd6862af1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/facebook.png?");

/***/ }),

/***/ "./src/images/food1.jpeg":
/*!*******************************!*\
  !*** ./src/images/food1.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7374600e6aec1b07f04b.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food1.jpeg?");

/***/ }),

/***/ "./src/images/food2.jpeg":
/*!*******************************!*\
  !*** ./src/images/food2.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bca947ce855616602849.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food2.jpeg?");

/***/ }),

/***/ "./src/images/food3.jpeg":
/*!*******************************!*\
  !*** ./src/images/food3.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b0df87e89051c78b29ec.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food3.jpeg?");

/***/ }),

/***/ "./src/images/food4.jpeg":
/*!*******************************!*\
  !*** ./src/images/food4.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a2680667e7db72e012d8.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food4.jpeg?");

/***/ }),

/***/ "./src/images/food5.jpeg":
/*!*******************************!*\
  !*** ./src/images/food5.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b4180cb2978b3a41b7c7.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food5.jpeg?");

/***/ }),

/***/ "./src/images/food6.jpeg":
/*!*******************************!*\
  !*** ./src/images/food6.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"052001beb29ab679e015.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/food6.jpeg?");

/***/ }),

/***/ "./src/images/instagram.png":
/*!**********************************!*\
  !*** ./src/images/instagram.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"61c9145009045d308532.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/instagram.png?");

/***/ }),

/***/ "./src/images/twitter.png":
/*!********************************!*\
  !*** ./src/images/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ae7668843bb10fcacf5b.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/twitter.png?");

/***/ }),

/***/ "./src/images/youtube.png":
/*!********************************!*\
  !*** ./src/images/youtube.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e30ec2e6dc467634f7fd.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/youtube.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_facebook_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/facebook.png */ \"./src/images/facebook.png\");\n/* harmony import */ var _images_twitter_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/twitter.png */ \"./src/images/twitter.png\");\n/* harmony import */ var _images_instagram_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/instagram.png */ \"./src/images/instagram.png\");\n/* harmony import */ var _images_youtube_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/youtube.png */ \"./src/images/youtube.png\");\n\n\n\n\n\n\n\n\n\nconst Body = () => {\n    let bodyCont;\n    const setBodyCont = (newBodyCont) => {\n        bodyCont = newBodyCont;\n    }\n    const getBodyCont = () => bodyCont;\n    return {setBodyCont, getBodyCont}\n};\n\nconst bodyCont = Body();\n\nconst initialLoad = (() => {\n    const content = document.createElement('div');\n    const leftCont = document.createElement('div');\n    const restName = document.createElement('span');\n    const tabCont = document.createElement('div');\n    const homeItem = document.createElement('span');\n    const menuItem = document.createElement('span');\n    const contactItem = document.createElement('span');\n    const socialCont = document.createElement('div');\n    const fbLogo = document.createElement('img');\n    const twLogo = document.createElement('img');\n    const instLogo = document.createElement('img');\n    const ytLogo = document.createElement('img');\n\n    content.appendChild(leftCont);\n\n    leftCont.appendChild(restName);\n    leftCont.appendChild(tabCont);\n    leftCont.appendChild(socialCont);\n\n    tabCont.appendChild(homeItem);\n    tabCont.appendChild(menuItem);\n    tabCont.appendChild(contactItem);\n\n    socialCont.appendChild(instLogo);\n    socialCont.appendChild(fbLogo);\n    socialCont.appendChild(twLogo);\n    socialCont.appendChild(ytLogo);\n\n    document.body.appendChild(content);\n\n    restName.innerHTML = 'Seventh Heaven Caf&egrave;';\n    homeItem.innerHTML = 'Home';\n    menuItem.innerHTML = 'Menu';\n    contactItem.innerHTML = 'Contact';\n\n    fbLogo.src = _images_facebook_png__WEBPACK_IMPORTED_MODULE_4__;\n    twLogo.src = _images_twitter_png__WEBPACK_IMPORTED_MODULE_5__;\n    instLogo.src = _images_instagram_png__WEBPACK_IMPORTED_MODULE_6__;\n    ytLogo.src = _images_youtube_png__WEBPACK_IMPORTED_MODULE_7__;\n\n    content.setAttribute('id', 'content');\n    leftCont.setAttribute('id', 'left-cont');\n    restName.setAttribute('id', 'rest-name');\n    tabCont.setAttribute('id', 'tab-cont');\n    homeItem.classList.add('menu-items');\n    homeItem.setAttribute('id', 'home-item');\n    menuItem.classList.add('menu-items');\n    menuItem.setAttribute('id', 'menu-item');\n    contactItem.classList.add('menu-items');\n    contactItem.setAttribute('id', 'contact-item');\n    socialCont.setAttribute('id', 'social-cont');\n    fbLogo.classList.add('social-logo');\n    twLogo.classList.add('social-logo');\n    instLogo.classList.add('social-logo');\n    ytLogo.classList.add('social-logo');\n\n    bodyCont.setBodyCont((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.default)());\n    content.appendChild(bodyCont.getBodyCont());\n})();\n\ndocument.getElementById('home-item').addEventListener('click', () => {\n    content.removeChild(bodyCont.getBodyCont());\n    bodyCont.setBodyCont((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.default)());\n    content.appendChild(bodyCont.getBodyCont());\n});\n\ndocument.getElementById('menu-item').addEventListener('click', () => {\n    content.removeChild(bodyCont.getBodyCont());\n    bodyCont.setBodyCont((0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.default)());\n    content.appendChild(bodyCont.getBodyCont());\n});\n\ndocument.getElementById('contact-item').addEventListener('click', () => {\n    content.removeChild(bodyCont.getBodyCont());\n    bodyCont.setBodyCont((0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.default)());\n    content.appendChild(bodyCont.getBodyCont());\n});\n\n//changes color of blurb-cont background when page is scrolled up a certain amount.\ndocument.getElementById('main-cont').addEventListener('scroll', (e) => {\n    let scrollPos = 0;\n    const el = document.getElementById('info-cont');\n    scrollPos = window.pageYOffset + el.getBoundingClientRect().top;\n    console.log(scrollPos);\n    if(scrollPos <= 450) {\n        document.getElementById('blurb-cont').style.background = 'rgb(240, 240, 240)';\n    }\n    else {\n        document.getElementById('blurb-cont').style.background = 'white';\n    }\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _images_food1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/food1.jpeg */ \"./src/images/food1.jpeg\");\n/* harmony import */ var _images_food2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/food2.jpeg */ \"./src/images/food2.jpeg\");\n/* harmony import */ var _images_food3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/food3.jpeg */ \"./src/images/food3.jpeg\");\n/* harmony import */ var _images_food4_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/food4.jpeg */ \"./src/images/food4.jpeg\");\n/* harmony import */ var _images_food5_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/food5.jpeg */ \"./src/images/food5.jpeg\");\n/* harmony import */ var _images_food6_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/food6.jpeg */ \"./src/images/food6.jpeg\");\n/* harmony import */ var _images_cafe_img_2_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cafe-img-2.jpeg */ \"./src/images/cafe-img-2.jpeg\");\n\n\n\n\n\n\n\n\nfunction menuPage() {\n    const bodyCont = document.createElement('div');\n    const mainCont = document.createElement('div');\n    const menuImgCont = document.createElement('div');\n    const menuImg = document.createElement('img');\n    const menuTitle = document.createElement('div');\n    const menuCont = document.createElement('div');\n    const foodItem1 = document.createElement('div');\n    const foodItem2 = document.createElement('div');\n    const foodItem3 = document.createElement('div');\n    const foodItem4 = document.createElement('div');\n    const foodItem5 = document.createElement('div');\n    const foodItem6 = document.createElement('div');\n    const foodImg1 = document.createElement('img');\n    const foodImg2 = document.createElement('img');\n    const foodImg3 = document.createElement('img');\n    const foodImg4 = document.createElement('img');\n    const foodImg5 = document.createElement('img');\n    const foodImg6 = document.createElement('img');\n    const food1Txt = document.createElement('div');\n    const food2Txt = document.createElement('div');\n    const food3Txt = document.createElement('div');\n    const food4Txt = document.createElement('div');\n    const food5Txt = document.createElement('div');\n    const food6Txt = document.createElement('div');\n    const food1Price = document.createElement('div');\n    const food2Price = document.createElement('div');\n    const food3Price = document.createElement('div');\n    const food4Price = document.createElement('div');\n    const food5Price = document.createElement('div');\n    const food6Price = document.createElement('div');\n\n    const footer = document.createElement('div');\n    const footerSecOne = document.createElement('div');\n    const footerSecTwo = document.createElement('div');\n    const footerSecThree = document.createElement('div');\n    const footerSecOneTitle = document.createElement('div');\n    const footerSecTwoTitle = document.createElement('div');\n    const footerSecThreeTitle = document.createElement('div');\n    const footerSecOneText = document.createElement('div');\n    const footerSecTwoText = document.createElement('div');\n    const footerSecThreeText = document.createElement('div');\n\n    bodyCont.appendChild(mainCont);\n    mainCont.appendChild(menuImgCont);\n    menuImgCont.appendChild(menuImg);\n    menuImgCont.appendChild(menuTitle);\n    mainCont.appendChild(menuCont);\n    menuCont.appendChild(foodItem1);\n    menuCont.appendChild(foodItem2);\n    menuCont.appendChild(foodItem3);\n    menuCont.appendChild(foodItem4);\n    menuCont.appendChild(foodItem5);\n    menuCont.appendChild(foodItem6);\n    foodItem1.appendChild(foodImg1);\n    foodItem2.appendChild(foodImg2);\n    foodItem3.appendChild(foodImg3);\n    foodItem4.appendChild(foodImg4);\n    foodItem5.appendChild(foodImg5);\n    foodItem6.appendChild(foodImg6);\n    foodItem1.appendChild(food1Txt);\n    foodItem1.appendChild(food1Price);\n    foodItem2.appendChild(food2Txt);\n    foodItem2.appendChild(food2Price);\n    foodItem3.appendChild(food3Txt);\n    foodItem3.appendChild(food3Price);\n    foodItem4.appendChild(food4Txt);\n    foodItem4.appendChild(food4Price);\n    foodItem5.appendChild(food5Txt);\n    foodItem5.appendChild(food5Price);\n    foodItem6.appendChild(food6Txt);\n    foodItem6.appendChild(food6Price);\n\n    mainCont.appendChild(footer);\n    footer.appendChild(footerSecOne);\n    footer.appendChild(footerSecTwo);\n    footer.appendChild(footerSecThree);\n    footerSecOne.appendChild(footerSecOneTitle);\n    footerSecOne.appendChild(footerSecOneText);\n    footerSecTwo.appendChild(footerSecTwoTitle);\n    footerSecTwo.appendChild(footerSecTwoText);\n    footerSecThree.appendChild(footerSecThreeTitle);\n    footerSecThree.appendChild(footerSecThreeText);\n\n    menuTitle.innerHTML = 'Our Menu';\n    food1Txt.innerHTML = 'Taro Buttercream Bread';\n    food1Price.innerHTML = '$12.95';\n    food2Txt.innerHTML = 'Choco Cream Bread';\n    food2Price.innerHTML = '$12.95';\n    food3Txt.innerHTML = 'Honey Cheese Mochi Pancake';\n    food3Price.innerHTML = '$12.95';\n    food4Txt.innerHTML = 'Cream Cheese Stick Bread';\n    food4Price.innerHTML = '$12.95';\n    food5Txt.innerHTML = 'Garlic Cream Cheese Bread';\n    food5Price.innerHTML = '$12.95';\n    food6Txt.innerHTML = 'Red Bean Bread';\n    food6Price.innerHTML = '$12.95';\n\n    footerSecOneTitle.innerHTML = 'ABOUT OUR COMPANY';\n    footerSecTwoTitle.innerHTML = 'POLICY AND PROMOTION';\n    footerSecThreeTitle.innerHTML = 'REWARDS';\n    footerSecOneText.innerText = '\\n\\n\\nABOUT SEVENTH HEAVEN\\n\\n\\nCAREERS\\n\\n\\nINVESTOR RELATIONS';\n    footerSecTwoText.innerText = '\\n\\n\\nSTORE POLICY';\n    footerSecThreeText.innerText = '\\n\\n\\nABOUT MEMBERS\\' POLICY';\n\n    menuImg.src = _images_cafe_img_2_jpeg__WEBPACK_IMPORTED_MODULE_6__;\n    foodImg1.src = _images_food1_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n    foodImg2.src = _images_food2_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n    foodImg3.src = _images_food3_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n    foodImg4.src = _images_food4_jpeg__WEBPACK_IMPORTED_MODULE_3__;\n    foodImg5.src = _images_food5_jpeg__WEBPACK_IMPORTED_MODULE_4__;\n    foodImg6.src = _images_food6_jpeg__WEBPACK_IMPORTED_MODULE_5__;\n\n    bodyCont.classList.add('body-cont');\n    mainCont.setAttribute('id', 'main-cont');\n    mainCont.classList.add('parallax');\n    menuImgCont.classList.add('parallax-layer', 'parallax-layer-back');\n    menuImgCont.setAttribute('id', 'menu-top-cont');\n    menuImg.setAttribute('id', 'menu-top-img');\n    menuImg.classList.add('image-fade-in');\n    menuTitle.setAttribute('id', 'menu-title');\n    menuTitle.classList.add('image-fade-in');\n    menuCont.classList.add('parallax-layer', 'parallax-layer-base');\n    menuCont.setAttribute('id', 'menu-cont');\n    foodItem1.classList.add('food-item');\n    foodItem2.classList.add('food-item');\n    foodItem3.classList.add('food-item');\n    foodItem4.classList.add('food-item');\n    foodItem5.classList.add('food-item');\n    foodItem6.classList.add('food-item');\n    foodImg1.classList.add('food-img');\n    foodImg2.classList.add('food-img');\n    foodImg3.classList.add('food-img');\n    foodImg4.classList.add('food-img');\n    foodImg5.classList.add('food-img');\n    foodImg6.classList.add('food-img');\n    food1Txt.classList.add('food-txt');\n    food1Price.classList.add('food-price');\n    food2Txt.classList.add('food-txt');\n    food2Price.classList.add('food-price');\n    food3Txt.classList.add('food-txt');\n    food3Price.classList.add('food-price');\n    food4Txt.classList.add('food-txt');\n    food4Price.classList.add('food-price');\n    food5Txt.classList.add('food-txt');\n    food5Price.classList.add('food-price');\n    food6Txt.classList.add('food-txt');\n    food6Price.classList.add('food-price');\n\n    footer.setAttribute('id', 'footer');\n    footer.classList.add('parallax-layer', 'parallax-layer-base');\n    footerSecOne.classList.add('footer-section');\n    footerSecTwo.classList.add('footer-section');\n    footerSecThree.classList.add('footer-section');\n    footerSecOneTitle.classList.add('footer-section-title');\n    footerSecTwoTitle.classList.add('footer-section-title');\n    footerSecThreeTitle.classList.add('footer-section-title');\n    footerSecOneText.classList.add('footer-section-text');\n    footerSecTwoText.classList.add('footer-section-text');\n    footerSecThreeText.classList.add('footer-section-text');\n\n    return bodyCont;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
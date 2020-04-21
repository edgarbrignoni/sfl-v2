/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_globleFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/globleFunctions.js */ \"./src/js/globleFunctions.js\");\n/* harmony import */ var _js_globleFunctions_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_globleFunctions_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_applyform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/applyform.js */ \"./src/js/applyform.js\");\n/* harmony import */ var _js_applyform_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_applyform_js__WEBPACK_IMPORTED_MODULE_1__);\n// JS Goes here - ES6 supported\r\nconsole.log(\"Javascript Loaded\");\r\n\r\n//*** Imports ***//\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/applyform.js":
/*!*****************************!*\
  !*** ./src/js/applyform.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"applyform loaded\");\n\n//** Form Navigation **//\nlet applyStep1 = document.getElementById(\"applyStep1\");\nlet applyStep2 = document.getElementById(\"applyStep2\");\nlet applyStep3 = document.getElementById(\"applyStep3\");\n\nlet nextStep1 = document.getElementById(\"nextStep1\");\nlet nextStep2 = document.getElementById(\"nextStep2\");\nlet nextStep3 = document.getElementById(\"nextStep3\");\n\nlet nextButton1 = document.getElementById('nextButton1');\nlet nextButton2 = document.getElementById('nextButton2');\nlet backButton1 = document.getElementById('backButton1');\nlet backButton2 = document.getElementById('backButton2');\n\nlet progressStep1 = document.getElementById('progressStep1');\nlet progressStep2 = document.getElementById('progressStep2');\nlet progressStep3 = document.getElementById('progressStep3');\n\napplyStepOne = function ApplyStepOne() {\n  applyStep1.classList.add(\"hide\");\n  nextStep1.classList.add(\"hide\");\n  applyStep2.classList.remove(\"hide\");\n  nextStep2.classList.remove(\"hide\");\n  progressStep1.classList.add(\"complete\");\n  progressStep1.classList.remove(\"inactiveLink\");\n  progressStep1.classList.add(\"activeLink\");\n  progressStep2.classList.add(\"active\");\n}\n\napplyStepTwo = function ApplyStepTwo() {\n  applyStep2.classList.add(\"hide\");\n  nextStep2.classList.add(\"hide\");\n  applyStep3.classList.remove(\"hide\");\n  nextStep3.classList.remove(\"hide\");\n  progressStep2.classList.add(\"activeLink\");\n  progressStep2.classList.remove(\"inactiveLink\");\n  progressStep2.classList.add(\"complete\");\n  progressStep3.classList.add(\"active\");\n}\n\nbackStepOne = function BackStepOne() {\n  applyStep1.classList.remove(\"hide\");\n  nextStep1.classList.remove(\"hide\");\n  applyStep2.classList.add(\"hide\");\n  nextStep2.classList.add(\"hide\");\n  progressStep1.classList.remove(\"complete\");\n  progressStep2.classList.remove(\"active\");\n  progressStep2.classList.add(\"inactiveLink\");\n}\n\nbackStepTwo = function BackStepTwo() {\n  applyStep2.classList.remove(\"hide\");\n  nextStep2.classList.remove(\"hide\");\n  applyStep3.classList.add(\"hide\");\n  nextStep3.classList.add(\"hide\");\n  progressStep2.classList.remove(\"activeLink\");\n  progressStep2.classList.add(\"inactiveLink\");\n  progressStep2.classList.remove(\"complete\");\n  progressStep3.classList.remove(\"active\");\n}\n\nnextButton1.onclick = function() {\n  console.log(\"NextStep1 Clicked\");\n  applyStepOne()\n  scrollToTop();\n}\n\nnextButton2.onclick = function() {\n  console.log(\"NextStep2 Clicked\");\n  applyStepTwo()\n  scrollToTop();\n}\n\nbackButton1.onclick = function() {\n  console.log(\"BackStep1 Clicked\");\n  backStepOne()\n  scrollToTop();\n}\n\nbackButton2.onclick = function() {\n  console.log(\"BackStep2 Clicked\");\n  backStepTwo()\n  scrollToTop();\n}\n\nprogressStep1.onclick = function() {\n  console.log(\"progressStep1 Clicked\");\n  applyStep1.classList.remove(\"hide\");\n  nextStep1.classList.remove(\"hide\");\n  applyStep2.classList.add(\"hide\");\n  nextStep2.classList.add(\"hide\");\n  applyStep3.classList.add(\"hide\");\n  nextStep3.classList.add(\"hide\");\n\n  progressStep1.classList.remove(\"activeLink\");\n  progressStep2.classList.remove(\"activeLink\");\n  progressStep2.classList.remove(\"active\");\n  progressStep3.classList.remove(\"active\");\n  progressStep1.classList.remove(\"complete\");\n  progressStep2.classList.remove(\"complete\");\n\n  progressStep1.classList.add(\"inactiveLink\");\n  progressStep2.classList.add(\"inactiveLink\");\n  scrollToTop();\n}\n\nprogressStep2.onclick = function() {\n  console.log(\"progressStep2 Clicked\");\n\n  applyStep1.classList.add(\"hide\");\n  nextStep1.classList.add(\"hide\");\n  applyStep2.classList.remove(\"hide\");\n  nextStep2.classList.remove(\"hide\");\n  applyStep3.classList.add(\"hide\");\n  nextStep3.classList.add(\"hide\");\n\n  progressStep2.classList.remove(\"activeLink\");\n  progressStep3.classList.remove(\"active\");\n  progressStep2.classList.remove(\"complete\");\n\n  progressStep1.classList.add(\"inactiveLink\");\n  progressStep2.classList.add(\"inactiveLink\");\n  scrollToTop();\n}\n\n\n//# sourceURL=webpack:///./src/js/applyform.js?");

/***/ }),

/***/ "./src/js/globleFunctions.js":
/*!***********************************!*\
  !*** ./src/js/globleFunctions.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log(\"globalFunctions loaded\");\n\n\nscrollToTop = function scrollToTop() {\n      window.scroll({\n      top: 1,\n      behavior: 'smooth'\n  });\n}\n\n\n//# sourceURL=webpack:///./src/js/globleFunctions.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! P:\\Work\\24DATA\\git\\sfl-v2\\src\\index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });
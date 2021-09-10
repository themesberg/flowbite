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

/***/ "./src/docs.js":
/*!*********************!*\
  !*** ./src/docs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _docs_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.css */ \"./src/docs.css\");\n// css for docs\n\n\nfunction fallbackCopyTextToClipboard(text) {\n  var textArea = document.createElement(\"textarea\");\n  textArea.value = text; // Avoid scrolling to bottom\n\n  textArea.style.top = \"0\";\n  textArea.style.left = \"0\";\n  textArea.style.position = \"fixed\";\n  document.body.appendChild(textArea);\n  textArea.focus();\n  textArea.select();\n\n  try {\n    var successful = document.execCommand('copy');\n    var msg = successful ? 'successful' : 'unsuccessful';\n    console.log('Fallback: Copying text command was ' + msg);\n  } catch (err) {\n    console.error('Fallback: Oops, unable to copy', err);\n  }\n\n  document.body.removeChild(textArea);\n}\n\nfunction copyTextToClipboard(text) {\n  if (!navigator.clipboard) {\n    fallbackCopyTextToClipboard(text);\n    return;\n  }\n\n  navigator.clipboard.writeText(text).then(function () {\n    console.log('Async: Copying to clipboard was successful!');\n  }, function (err) {\n    console.error('Async: Could not copy text: ', err);\n  });\n}\n\nfunction initiateCopyToClipboard(element) {\n  var textToCopy = element.getElementsByClassName(\"code-preview\")[0].innerHTML;\n  var button = element.getElementsByClassName(\"copy-to-clipboard-button\")[0];\n  var alert = document.getElementById('copied-code-alert');\n  button.addEventListener(\"click\", function () {\n    copyTextToClipboard(textToCopy);\n    alert.classList.remove('opacity-0');\n    alert.classList.add('opacity-100');\n    setTimeout(function () {\n      alert.classList.add('opacity-0');\n      alert.classList.remove('opacity-100');\n    }, 3000);\n  });\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  document.getElementById('currentYear').textContent = new Date().getFullYear();\n  var codeExamples = document.getElementsByClassName(\"code-example\");\n\n  for (var i = 0; i < codeExamples.length; i++) {\n    initiateCopyToClipboard(codeExamples.item(i));\n  }\n});\n\n//# sourceURL=webpack://@themesberg/flowbite/./src/docs.js?");

/***/ }),

/***/ "./src/docs.css":
/*!**********************!*\
  !*** ./src/docs.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@themesberg/flowbite/./src/docs.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/docs.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=docs.bundle.js.map
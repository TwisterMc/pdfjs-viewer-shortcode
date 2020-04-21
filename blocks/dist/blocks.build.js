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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/block/block.js":
/*!***********************************!*\
  !*** ./blocks/src/block/block.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
var __ = wp.i18n.__;

var registerBlockType = wp.blocks.registerBlockType;
var MediaUpload = wp.editor.MediaUpload;
var Button = wp.components.Button;
var ALLOWED_MEDIA_TYPES = ['application/pdf'];
registerBlockType("pdfjsblock/pdfjs-embed", {
  title: __('Embed PDF.js Viewer', 'pdf-js-block'),
  icon: 'media-document',
  category: 'common',
  attributes: {
    imageURL: {
      type: 'string'
    },
    imgID: {
      type: 'number'
    },
    imgTitle: {
      type: 'string',
      "default": 'PDF File'
    }
  },
  keywords: [__('PDF Selector', 'pdf-js-block')],
  edit: function edit(props) {
    var onFileSelect = function onFileSelect(img) {
      props.setAttributes({
        imageURL: img.url,
        imgID: img.id,
        imgTitle: img.title
      });
    };

    var onRemoveImg = function onRemoveImg() {
      props.setAttributes({
        imageURL: null,
        imgID: null,
        imgTitle: null
      });
    };

    return wp.element.createElement("div", {
      className: "pdfjs-wrapper components-placeholder"
    }, wp.element.createElement("label", null, wp.element.createElement("strong", null, "PDF.js Embed")), props.attributes.imageURL ? wp.element.createElement("div", {
      className: "pdfjs-upload-wrapper"
    }, wp.element.createElement("div", null, wp.element.createElement("span", {
      className: "dashicons dashicons-media-document"
    }), wp.element.createElement("span", {
      className: "pdfjs-title"
    }, props.attributes.imgTitle ? props.attributes.imgTitle : props.attributes.imageURL)), props.isSelected ? wp.element.createElement(Button, {
      className: "button",
      onClick: onRemoveImg
    }, "Remove PDF") : null) : wp.element.createElement("div", null, wp.element.createElement(MediaUpload, {
      onSelect: onFileSelect,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: props.attributes.imgID,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(Button, {
          className: "button",
          onClick: open
        }, "Choose PDF");
      }
    })));
  },
  save: function save(props) {
    return wp.element.createElement("div", {
      className: "pdfjs-wrapper"
    }, "[pdfjs-viewer url=", props.attributes.imageURL, " download=false print=false]");
  }
});

/***/ }),

/***/ "./blocks/src/block/style.scss":
/*!*************************************!*\
  !*** ./blocks/src/block/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/block */ "./blocks/src/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL3N0eWxlLnNjc3M/NGIxNCIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiTWVkaWFVcGxvYWQiLCJlZGl0b3IiLCJCdXR0b24iLCJjb21wb25lbnRzIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImltYWdlVVJMIiwidHlwZSIsImltZ0lEIiwiaW1nVGl0bGUiLCJrZXl3b3JkcyIsImVkaXQiLCJwcm9wcyIsIm9uRmlsZVNlbGVjdCIsImltZyIsInNldEF0dHJpYnV0ZXMiLCJ1cmwiLCJpZCIsIm9uUmVtb3ZlSW1nIiwiaXNTZWxlY3RlZCIsIm9wZW4iLCJzYXZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lDbEZRQSxFLEdBQU9DLEVBQUUsQ0FBQ0MsSSxDQUFWRixFO0FBRVI7SUFFUUcsaUIsR0FBc0JGLEVBQUUsQ0FBQ0csTSxDQUF6QkQsaUI7SUFDQUUsVyxHQUFzQkosRUFBRSxDQUFDSyxNLENBQXpCRCxXO0lBQ0FFLE0sR0FBc0JOLEVBQUUsQ0FBQ08sVSxDQUF6QkQsTTtBQUNSLElBQU1FLG1CQUFtQixHQUFHLENBQUUsaUJBQUYsQ0FBNUI7QUFFQU4saUJBQWlCLENBQUMsd0JBQUQsRUFBMkI7QUFDMUNPLE9BQUssRUFBRVYsRUFBRSxDQUFFLHFCQUFGLEVBQXlCLGNBQXpCLENBRGlDO0FBRTFDVyxNQUFJLEVBQUUsZ0JBRm9DO0FBRzFDQyxVQUFRLEVBQUUsUUFIZ0M7QUFJMUNDLFlBQVUsRUFBRTtBQUNYQyxZQUFRLEVBQUU7QUFDVEMsVUFBSSxFQUFFO0FBREcsS0FEQztBQUlYQyxTQUFLLEVBQUU7QUFDTkQsVUFBSSxFQUFFO0FBREEsS0FKSTtBQU9YRSxZQUFRLEVBQUU7QUFDVEYsVUFBSSxFQUFFLFFBREc7QUFFVCxpQkFBUztBQUZBO0FBUEMsR0FKOEI7QUFnQjFDRyxVQUFRLEVBQUUsQ0FDVGxCLEVBQUUsQ0FBRSxjQUFGLEVBQWtCLGNBQWxCLENBRE8sQ0FoQmdDO0FBb0IxQ21CLE1BQUksRUFBRSxjQUFXQyxLQUFYLEVBQW1CO0FBRXhCLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBUztBQUM3QkYsV0FBSyxDQUFDRyxhQUFOLENBQW9CO0FBQ25CVCxnQkFBUSxFQUFFUSxHQUFHLENBQUNFLEdBREs7QUFFbkJSLGFBQUssRUFBRU0sR0FBRyxDQUFDRyxFQUZRO0FBR25CUixnQkFBUSxFQUFFSyxHQUFHLENBQUNaO0FBSEssT0FBcEI7QUFLQSxLQU5EOztBQVFBLFFBQU1nQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCTixXQUFLLENBQUNHLGFBQU4sQ0FBb0I7QUFDbkJULGdCQUFRLEVBQUUsSUFEUztBQUVuQkUsYUFBSyxFQUFFLElBRlk7QUFHbkJDLGdCQUFRLEVBQUU7QUFIUyxPQUFwQjtBQUtBLEtBTkQ7O0FBUUEsV0FDQztBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0Msd0NBQU8sd0RBQVAsQ0FERCxFQUdHRyxLQUFLLENBQUNQLFVBQU4sQ0FBaUJDLFFBQWxCLEdBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNDLHNDQUNDO0FBQU0sZUFBUyxFQUFDO0FBQWhCLE1BREQsRUFFQztBQUFNLGVBQVMsRUFBQztBQUFoQixPQUFnQ00sS0FBSyxDQUFDUCxVQUFOLENBQWlCSSxRQUFqQixHQUE0QkcsS0FBSyxDQUFDUCxVQUFOLENBQWlCSSxRQUE3QyxHQUF3REcsS0FBSyxDQUFDUCxVQUFOLENBQWlCQyxRQUF6RyxDQUZELENBREQsRUFLR00sS0FBSyxDQUFDTyxVQUFQLEdBQ0EseUJBQUMsTUFBRDtBQUNDLGVBQVMsRUFBQyxRQURYO0FBRUMsYUFBTyxFQUFFRDtBQUZWLG9CQURBLEdBS0csSUFWTCxDQURELEdBY0Msc0NBQ0MseUJBQUMsV0FBRDtBQUNBLGNBQVEsRUFBRUwsWUFEVjtBQUVBLGtCQUFZLEVBQUdaLG1CQUZmO0FBR0EsV0FBSyxFQUFFVyxLQUFLLENBQUNQLFVBQU4sQ0FBaUJHLEtBSHhCO0FBSUEsWUFBTSxFQUFFO0FBQUEsWUFBRVksSUFBRixRQUFFQSxJQUFGO0FBQUEsZUFDUix5QkFBQyxNQUFEO0FBQ0MsbUJBQVMsRUFBQyxRQURYO0FBRUMsaUJBQU8sRUFBRUE7QUFGVix3QkFEUTtBQUFBO0FBSlIsTUFERCxDQWpCSCxDQUREO0FBb0NBLEdBMUV5QztBQTRFMUNDLE1BQUksRUFBRSxjQUFXVCxLQUFYLEVBQW1CO0FBQ3hCLFdBQ0E7QUFBSyxlQUFTLEVBQUM7QUFBZiw2QkFDb0JBLEtBQUssQ0FBQ1AsVUFBTixDQUFpQkMsUUFEckMsaUNBREE7QUFLQTtBQWxGeUMsQ0FBM0IsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNUQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgTWVkaWFVcGxvYWQgfSAgICAgICA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgQnV0dG9uIH0gICAgICAgICAgICA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnYXBwbGljYXRpb24vcGRmJyBdO1xuXG5yZWdpc3RlckJsb2NrVHlwZShcInBkZmpzYmxvY2svcGRmanMtZW1iZWRcIiwge1xuXHRcdHRpdGxlOiBfXyggJ0VtYmVkIFBERi5qcyBWaWV3ZXInLCAncGRmLWpzLWJsb2NrJyApLFxuXHRcdGljb246ICdtZWRpYS1kb2N1bWVudCcsXG5cdFx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGltYWdlVVJMOiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0fSxcblx0XHRcdGltZ0lEOiB7XG5cdFx0XHRcdHR5cGU6ICdudW1iZXInXG5cdFx0XHR9LFxuXHRcdFx0aW1nVGl0bGU6IHtcblx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdGRlZmF1bHQ6ICdQREYgRmlsZSdcblx0XHRcdH1cblx0XHR9LFxuXHRcdGtleXdvcmRzOiBbXG5cdFx0XHRfXyggJ1BERiBTZWxlY3RvcicsICdwZGYtanMtYmxvY2snICksXG5cdFx0XSxcblxuXHRcdGVkaXQ6IGZ1bmN0aW9uICggcHJvcHMgKSB7XG5cblx0XHRcdGNvbnN0IG9uRmlsZVNlbGVjdCA9IChpbWcpID0+IHtcblx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0aW1hZ2VVUkw6IGltZy51cmwsXG5cdFx0XHRcdFx0aW1nSUQ6IGltZy5pZCxcblx0XHRcdFx0XHRpbWdUaXRsZTogaW1nLnRpdGxlLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb25SZW1vdmVJbWcgPSAoKSA9PiB7XG5cdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdGltYWdlVVJMOiBudWxsLFxuXHRcdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRcdGltZ1RpdGxlOiBudWxsLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy13cmFwcGVyIGNvbXBvbmVudHMtcGxhY2Vob2xkZXJcIj5cblx0XHRcdFx0XHQ8bGFiZWw+PHN0cm9uZz5QREYuanMgRW1iZWQ8L3N0cm9uZz48L2xhYmVsPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdChwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMKSA/IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy11cGxvYWQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLW1lZGlhLWRvY3VtZW50XCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicGRmanMtdGl0bGVcIj57IHByb3BzLmF0dHJpYnV0ZXMuaW1nVGl0bGUgPyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlIDogcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCB9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHsocHJvcHMuaXNTZWxlY3RlZCkgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29uUmVtb3ZlSW1nfVxuXHRcdFx0XHRcdFx0XHRcdFx0PlJlbW92ZSBQREY8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQpIDogbnVsbCB9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17b25GaWxlU2VsZWN0fVxuXHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5hdHRyaWJ1dGVzLmltZ0lEfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17KHtvcGVufSkgPT5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17b3Blbn1cblx0XHRcdFx0XHRcdFx0XHRcdD5DaG9vc2UgUERGPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdClcblx0XHR9LFxuXG5cdFx0c2F2ZTogZnVuY3Rpb24gKCBwcm9wcyApIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXJcIj5cblx0XHRcdFx0W3BkZmpzLXZpZXdlciB1cmw9e3Byb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkx9IGRvd25sb2FkPWZhbHNlIHByaW50PWZhbHNlXVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fVxuXHR9ICk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
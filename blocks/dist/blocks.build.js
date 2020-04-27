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
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelRow = _wp$components.PanelRow,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
var ALLOWED_MEDIA_TYPES = ['application/pdf'];
registerBlockType('pdfjsblock/pdfjs-embed', {
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
    },
    showDownload: {
      type: 'boolean',
      "default": true
    },
    showPrint: {
      type: 'boolean',
      "default": true
    },
    showFullscreen: {
      type: 'boolean',
      "default": true
    },
    viewerHeight: {
      type: 'number',
      "default": 1360
    },
    viewerWidth: {
      type: 'number',
      "default": 0
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

    var onToggleDownload = function onToggleDownload(value) {
      props.setAttributes({
        showDownload: value
      });
    };

    var onTogglePrint = function onTogglePrint(value) {
      props.setAttributes({
        showPrint: value
      });
    };

    var onToggleFullscreen = function onToggleFullscreen(value) {
      props.setAttributes({
        showFullscreen: value
      });
    };

    var onHeightChange = function onHeightChange(value) {
      props.setAttributes({
        viewerHeight: value
      });
    };

    var onWidthChange = function onWidthChange(value) {
      props.setAttributes({
        viewerWidth: value
      });
    };

    return [wp.element.createElement(InspectorControls, {
      key: "i1"
    }, wp.element.createElement(PanelBody, {
      title: __('PDF.js Options', 'pdf-js-block')
    }, wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Download Option', 'pdf-js-block'),
      help: props.attributes.showDownload ? __('Yes', 'pdf-js-block') : __('No', 'pdf-js-block'),
      checked: props.attributes.showDownload,
      onChange: onToggleDownload
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Print Option', 'pdf-js-block'),
      help: props.attributes.showPrint ? __('Yes', 'pdf-js-block') : __('No', 'pdf-js-block'),
      checked: props.attributes.showPrint,
      onChange: onTogglePrint
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Fullscreen Option', 'pdf-js-block'),
      help: props.attributes.showFullscreen ? __('Yes', 'pdf-js-block') : __('No', 'pdf-js-block'),
      checked: props.attributes.showFullscreen,
      onChange: onToggleFullscreen
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: __('Viewer Height (pixels)', 'pdf-js-block'),
      value: props.attributes.viewerHeight,
      onChange: onHeightChange
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: __('Viewer Width (pixels)', 'pdf-js-block'),
      help: "By default 0 will be 100%.",
      value: props.attributes.viewerWidth,
      onChange: onWidthChange
    })))), wp.element.createElement("div", {
      className: "pdfjs-wrapper components-placeholder",
      key: "i2"
    }, wp.element.createElement("div", null, wp.element.createElement("strong", null, __('PDF.js Embed', 'pdf-js-block'))), props.attributes.imageURL ? wp.element.createElement("div", {
      className: "pdfjs-upload-wrapper"
    }, wp.element.createElement("div", null, wp.element.createElement("span", {
      className: "dashicons dashicons-media-document"
    }), wp.element.createElement("span", {
      className: "pdfjs-title"
    }, props.attributes.imgTitle ? props.attributes.imgTitle : props.attributes.imageURL)), props.isSelected ? wp.element.createElement(Button, {
      className: "button",
      onClick: onRemoveImg
    }, __('Remove PDF', 'pdf-js-block')) : null) : wp.element.createElement("div", null, wp.element.createElement(MediaUpload, {
      onSelect: onFileSelect,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: props.attributes.imgID,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(Button, {
          className: "button",
          onClick: open
        }, __('Choose PDF', 'pdf-js-block'));
      }
    })))];
  },
  save: function save(props) {
    return wp.element.createElement("div", {
      className: "pdfjs-wrapper"
    }, "[pdfjs-viewer viewer_width=", props.attributes.viewerWidth !== 0 ? props.attributes.viewerWidth : '100%', ' ', " viewer_height=", props.attributes.viewerHeight, " url=", props.attributes.imageURL, " download=", props.attributes.showDownload.toString(), " print=", props.attributes.showPrint.toString(), " fullscreen=", props.attributes.showFullscreen.toString(), "]");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL3N0eWxlLnNjc3M/NGIxNCIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIlBhbmVsUm93IiwiUGFuZWxCb2R5IiwiVG9nZ2xlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImltYWdlVVJMIiwidHlwZSIsImltZ0lEIiwiaW1nVGl0bGUiLCJzaG93RG93bmxvYWQiLCJzaG93UHJpbnQiLCJzaG93RnVsbHNjcmVlbiIsInZpZXdlckhlaWdodCIsInZpZXdlcldpZHRoIiwia2V5d29yZHMiLCJlZGl0IiwicHJvcHMiLCJvbkZpbGVTZWxlY3QiLCJpbWciLCJzZXRBdHRyaWJ1dGVzIiwidXJsIiwiaWQiLCJvblJlbW92ZUltZyIsIm9uVG9nZ2xlRG93bmxvYWQiLCJ2YWx1ZSIsIm9uVG9nZ2xlUHJpbnQiLCJvblRvZ2dsZUZ1bGxzY3JlZW4iLCJvbkhlaWdodENoYW5nZSIsIm9uV2lkdGhDaGFuZ2UiLCJpc1NlbGVjdGVkIiwib3BlbiIsInNhdmUiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7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QWlCUyxXQUFqQixLQUFpQyxDQUFqQyxHQUFxQ0csS0FBSyxDQUFDWixVQUFOLENBQWlCUyxXQUF0RCxHQUFvRSxNQURqRyxFQUN5RyxHQUR6RyxxQkFDNkhHLEtBQUssQ0FBQ1osVUFBTixDQUFpQlEsWUFEOUksV0FDaUtJLEtBQUssQ0FBQ1osVUFBTixDQUFpQkMsUUFEbEwsZ0JBQ3NNVyxLQUFLLENBQUNaLFVBQU4sQ0FBaUJLLFlBQWpCLENBQThCdUIsUUFBOUIsRUFEdE0sYUFDdVBoQixLQUFLLENBQUNaLFVBQU4sQ0FBaUJNLFNBQWpCLENBQTJCc0IsUUFBM0IsRUFEdlAsa0JBQzBTaEIsS0FBSyxDQUFDWixVQUFOLENBQWlCTyxjQUFqQixDQUFnQ3FCLFFBQWhDLEVBRDFTLE1BREQ7QUFLQTtBQXpMMkMsQ0FBNUIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNqQkEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUEiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ICAgICAgICAgICAgICA9IHdwLmJsb2NrcztcbmNvbnN0IHsgTWVkaWFVcGxvYWQsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdFBhbmVsUm93LFxuXHRQYW5lbEJvZHksXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL3BkZiddO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3BkZmpzYmxvY2svcGRmanMtZW1iZWQnLCB7XG5cdHRpdGxlOiBfXyggJ0VtYmVkIFBERi5qcyBWaWV3ZXInLCAncGRmLWpzLWJsb2NrJyApLFxuXHRpY29uOiAnbWVkaWEtZG9jdW1lbnQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRpbWFnZVVSTDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWdJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWdUaXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnUERGIEZpbGUnLFxuXHRcdH0sXG5cdFx0c2hvd0Rvd25sb2FkOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0c2hvd1ByaW50OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0c2hvd0Z1bGxzY3JlZW46IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0fSxcblx0XHR2aWV3ZXJIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMTM2MCxcblx0XHR9LFxuXHRcdHZpZXdlcldpZHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDAsXG5cdFx0fSxcblx0fSxcblx0a2V5d29yZHM6IFtfXyggJ1BERiBTZWxlY3RvcicsICdwZGYtanMtYmxvY2snICkgXSxcblxuXHRlZGl0KCBwcm9wcyApIHtcblx0XHRjb25zdCBvbkZpbGVTZWxlY3QgPSAoIGltZyApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRpbWFnZVVSTDogaW1nLnVybCxcblx0XHRcdFx0aW1nSUQ6IGltZy5pZCxcblx0XHRcdFx0aW1nVGl0bGU6IGltZy50aXRsZSxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblJlbW92ZUltZyA9ICgpID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRpbWFnZVVSTDogbnVsbCxcblx0XHRcdFx0aW1nSUQ6IG51bGwsXG5cdFx0XHRcdGltZ1RpdGxlOiBudWxsLFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlRG93bmxvYWQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHNob3dEb3dubG9hZDogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVQcmludCA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0c2hvd1ByaW50OiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZUZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHNob3dGdWxsc2NyZWVuOiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRjb25zdCBvbkhlaWdodENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0dmlld2VySGVpZ2h0OiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRjb25zdCBvbldpZHRoQ2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHR2aWV3ZXJXaWR0aDogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdDxJbnNwZWN0b3JDb250cm9scyBrZXk9XCJpMVwiPlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXyggJ1BERi5qcyBPcHRpb25zJywgJ3BkZi1qcy1ibG9jaycgKX0+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCAnU2hvdyBEb3dubG9hZCBPcHRpb24nLCAncGRmLWpzLWJsb2NrJyApfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGYtanMtYmxvY2snIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGYtanMtYmxvY2snIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uVG9nZ2xlRG93bmxvYWR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCAnU2hvdyBQcmludCBPcHRpb24nLCAncGRmLWpzLWJsb2NrJyApfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludFxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGYtanMtYmxvY2snIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGYtanMtYmxvY2snIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uVG9nZ2xlUHJpbnR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCAnU2hvdyBGdWxsc2NyZWVuIE9wdGlvbicsICdwZGYtanMtYmxvY2snICl9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW5cblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmLWpzLWJsb2NrJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmLWpzLWJsb2NrJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17cHJvcHMuYXR0cmlidXRlcy5zaG93RnVsbHNjcmVlbn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uVG9nZ2xlRnVsbHNjcmVlbn1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCAnVmlld2VyIEhlaWdodCAocGl4ZWxzKScsICdwZGYtanMtYmxvY2snICl9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uSGVpZ2h0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17X18oICdWaWV3ZXIgV2lkdGggKHBpeGVscyknLCAncGRmLWpzLWJsb2NrJyApfVxuXHRcdFx0XHRcdFx0XHRoZWxwPVwiQnkgZGVmYXVsdCAwIHdpbGwgYmUgMTAwJS5cIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uV2lkdGhDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXIgY29tcG9uZW50cy1wbGFjZWhvbGRlclwiIGtleT1cImkyXCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHN0cm9uZz57X18oICdQREYuanMgRW1iZWQnLCAncGRmLWpzLWJsb2NrJyApfTwvc3Ryb25nPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3Byb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgPyAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy11cGxvYWQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1tZWRpYS1kb2N1bWVudFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicGRmanMtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7cHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkx9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e3Byb3BzLmlzU2VsZWN0ZWQgPyAoXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17b25SZW1vdmVJbWd9PlxuXHRcdFx0XHRcdFx0XHRcdHtfXyggJ1JlbW92ZSBQREYnLCAncGRmLWpzLWJsb2NrJyApfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9e29uRmlsZVNlbGVjdH1cblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXtBTExPV0VEX01FRElBX1RZUEVTfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuYXR0cmlidXRlcy5pbWdJRH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoeyBvcGVuIH0pID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0e19fKCAnQ2hvb3NlIFBERicsICdwZGYtanMtYmxvY2snICl9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+LFxuXHRcdF07XG5cdH0sXG5cblx0c2F2ZSggcHJvcHMgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtd3JhcHBlclwiPlxuXHRcdFx0XHRbcGRmanMtdmlld2VyIHZpZXdlcl93aWR0aD17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCAhPT0gMCA/IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggOiAnMTAwJSd9eycgJ30gdmlld2VyX2hlaWdodD17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHR9IHVybD17cHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTH0gZG93bmxvYWQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkLnRvU3RyaW5nKCl9IHByaW50PXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludC50b1N0cmluZygpfSBmdWxsc2NyZWVuPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuLnRvU3RyaW5nKCl9XVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
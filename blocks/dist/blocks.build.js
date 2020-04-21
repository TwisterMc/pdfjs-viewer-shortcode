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
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelRow = _wp$components.PanelRow,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl;
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
      label: "Show Download Option",
      help: props.attributes.showDownload ? "Yes" : "No",
      checked: props.attributes.showDownload,
      onChange: onToggleDownload
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: "Show Print Option",
      help: props.attributes.showPrint ? "Yes" : "No",
      checked: props.attributes.showPrint,
      onChange: onTogglePrint
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: "Show Fullscreen Option",
      help: props.attributes.showFullscreen ? "Yes" : "No",
      checked: props.attributes.showFullscreen,
      onChange: onToggleFullscreen
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: "Viewer Height",
      value: props.attributes.viewerHeight,
      onChange: onHeightChange
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: "Viewer Width",
      help: "By default 0 will be 100%.",
      value: props.attributes.viewerWidth,
      onChange: onWidthChange
    })))), wp.element.createElement("div", {
      className: "pdfjs-wrapper components-placeholder",
      key: "i2"
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
    })))];
  },
  save: function save(props) {
    return wp.element.createElement("div", {
      className: "pdfjs-wrapper"
    }, "[pdfjs-viewer viewer_width=", props.attributes.viewerWidth != 0 ? props.attributes.viewerWidth : '100%', " viewer_height=", props.attributes.viewerHeight, " url=", props.attributes.imageURL, " download=", props.attributes.showDownload.toString(), " print=", props.attributes.showPrint.toString(), " fullscreen=", props.attributes.showFullscreen.toString(), "]");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL3N0eWxlLnNjc3M/NGIxNCIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJJbnNwZWN0b3JDb250cm9scyIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJQYW5lbFJvdyIsIlBhbmVsQm9keSIsIlRvZ2dsZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJpbWFnZVVSTCIsInR5cGUiLCJpbWdJRCIsImltZ1RpdGxlIiwic2hvd0Rvd25sb2FkIiwic2hvd1ByaW50Iiwic2hvd0Z1bGxzY3JlZW4iLCJ2aWV3ZXJIZWlnaHQiLCJ2aWV3ZXJXaWR0aCIsImtleXdvcmRzIiwiZWRpdCIsInByb3BzIiwib25GaWxlU2VsZWN0IiwiaW1nIiwic2V0QXR0cmlidXRlcyIsInVybCIsImlkIiwib25SZW1vdmVJbWciLCJvblRvZ2dsZURvd25sb2FkIiwidmFsdWUiLCJvblRvZ2dsZVByaW50Iiwib25Ub2dnbGVGdWxsc2NyZWVuIiwib25IZWlnaHRDaGFuZ2UiLCJvbldpZHRoQ2hhbmdlIiwiaXNTZWxlY3RlZCIsIm9wZW4iLCJzYXZlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHdwLmJsb2NrcztcbmNvbnN0IHsgTWVkaWFVcGxvYWQsIEluc3BlY3RvckNvbnRyb2xzIH0gICAgICAgICAgICAgICAgICAgICAgICAgID0gd3AuZWRpdG9yO1xuY29uc3QgeyBCdXR0b24sIFBhbmVsUm93LCBQYW5lbEJvZHksIFRvZ2dsZUNvbnRyb2wsIFRleHRDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnYXBwbGljYXRpb24vcGRmJyBdO1xuXG5yZWdpc3RlckJsb2NrVHlwZShcInBkZmpzYmxvY2svcGRmanMtZW1iZWRcIiwge1xuXHR0aXRsZTogX18oICdFbWJlZCBQREYuanMgVmlld2VyJywgJ3BkZi1qcy1ibG9jaycgKSxcblx0aWNvbjogJ21lZGlhLWRvY3VtZW50Jyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1hZ2VVUkw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInXG5cdFx0fSxcblx0XHRpbWdUaXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnUERGIEZpbGUnXG5cdFx0fSxcblx0XHRzaG93RG93bmxvYWQ6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9LFxuXHRcdHNob3dQcmludDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH0sXG5cdFx0c2hvd0Z1bGxzY3JlZW46IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9LFxuXHRcdHZpZXdlckhlaWdodDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAxMzYwXG5cdFx0fSxcblx0XHR2aWV3ZXJXaWR0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAwXG5cdFx0fVxuXHR9LFxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCAnUERGIFNlbGVjdG9yJywgJ3BkZi1qcy1ibG9jaycgKSxcblx0XSxcblxuXHRlZGl0OiBmdW5jdGlvbiAoIHByb3BzICkge1xuXG5cdFx0Y29uc3Qgb25GaWxlU2VsZWN0ID0gKGltZykgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGltYWdlVVJMOiBpbWcudXJsLFxuXHRcdFx0XHRpbWdJRDogaW1nLmlkLFxuXHRcdFx0XHRpbWdUaXRsZTogaW1nLnRpdGxlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25SZW1vdmVJbWcgPSAoKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1hZ2VVUkw6IG51bGwsXG5cdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRpbWdUaXRsZTogbnVsbCxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uVG9nZ2xlRG93bmxvYWQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHNob3dEb3dubG9hZDogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCBvblRvZ2dsZVByaW50ID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRzaG93UHJpbnQ6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Ub2dnbGVGdWxsc2NyZWVuID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRzaG93RnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCBvbkhlaWdodENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0dmlld2VySGVpZ2h0OiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uV2lkdGhDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHZpZXdlcldpZHRoOiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHMga2V5PVwiaTFcIj5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnUERGLmpzIE9wdGlvbnMnLCAncGRmLWpzLWJsb2NrJyApIH0gPlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2hvdyBEb3dubG9hZCBPcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRoZWxwPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZCA/IFwiWWVzXCIgOiBcIk5vXCJ9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25Ub2dnbGVEb3dubG9hZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNob3cgUHJpbnQgT3B0aW9uXCJcblx0XHRcdFx0XHRcdFx0aGVscD17cHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnQgPyBcIlllc1wiIDogXCJOb1wifVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uVG9nZ2xlUHJpbnR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTaG93IEZ1bGxzY3JlZW4gT3B0aW9uXCJcblx0XHRcdFx0XHRcdFx0aGVscD17cHJvcHMuYXR0cmlidXRlcy5zaG93RnVsbHNjcmVlbiA/IFwiWWVzXCIgOiBcIk5vXCJ9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW59XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblRvZ2dsZUZ1bGxzY3JlZW59XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiVmlld2VyIEhlaWdodFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uSGVpZ2h0Q2hhbmdlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlZpZXdlciBXaWR0aFwiXG5cdFx0XHRcdFx0XHRcdGhlbHA9XCJCeSBkZWZhdWx0IDAgd2lsbCBiZSAxMDAlLlwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRofVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25XaWR0aENoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtd3JhcHBlciBjb21wb25lbnRzLXBsYWNlaG9sZGVyXCIga2V5PVwiaTJcIj5cblx0XHRcdFx0PGxhYmVsPjxzdHJvbmc+UERGLmpzIEVtYmVkPC9zdHJvbmc+PC9sYWJlbD5cblx0XHRcdFx0e1xuXHRcdFx0XHRcdChwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMKSA/IChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLW1lZGlhLWRvY3VtZW50XCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBkZmpzLXRpdGxlXCI+eyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlID8gcHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZSA6IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHsocHJvcHMuaXNTZWxlY3RlZCkgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29uUmVtb3ZlSW1nfVxuXHRcdFx0XHRcdFx0XHRcdD5SZW1vdmUgUERGPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9e29uRmlsZVNlbGVjdH1cblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5hdHRyaWJ1dGVzLmltZ0lEfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9eyh7b3Blbn0pID0+XG5cdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29wZW59XG5cdFx0XHRcdFx0XHRcdFx0PkNob29zZSBQREY8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cblx0XHRcdDwvZGl2PlxuXHRcdF07XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gKCBwcm9wcyApIHtcblx0XHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtd3JhcHBlclwiPlxuXHRcdFx0W3BkZmpzLXZpZXdlciB2aWV3ZXJfd2lkdGg9eyAocHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCAhPSAwKSA/IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggOiAnMTAwJScgfSB2aWV3ZXJfaGVpZ2h0PXtwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodH0gdXJsPXtwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMfSBkb3dubG9hZD17cHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWQudG9TdHJpbmcoKX0gcHJpbnQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50LnRvU3RyaW5nKCl9IGZ1bGxzY3JlZW49e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW4udG9TdHJpbmcoKX1dXG5cdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59ICk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
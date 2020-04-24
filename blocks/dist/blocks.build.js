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
      label: "Viewer Height (pixels)",
      value: props.attributes.viewerHeight,
      onChange: onHeightChange
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: "Viewer Width (pixels)",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL3N0eWxlLnNjc3M/NGIxNCIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJJbnNwZWN0b3JDb250cm9scyIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJQYW5lbFJvdyIsIlBhbmVsQm9keSIsIlRvZ2dsZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJpbWFnZVVSTCIsInR5cGUiLCJpbWdJRCIsImltZ1RpdGxlIiwic2hvd0Rvd25sb2FkIiwic2hvd1ByaW50Iiwic2hvd0Z1bGxzY3JlZW4iLCJ2aWV3ZXJIZWlnaHQiLCJ2aWV3ZXJXaWR0aCIsImtleXdvcmRzIiwiZWRpdCIsInByb3BzIiwib25GaWxlU2VsZWN0IiwiaW1nIiwic2V0QXR0cmlidXRlcyIsInVybCIsImlkIiwib25SZW1vdmVJbWciLCJvblRvZ2dsZURvd25sb2FkIiwidmFsdWUiLCJvblRvZ2dsZVByaW50Iiwib25Ub2dnbGVGdWxsc2NyZWVuIiwib25IZWlnaHRDaGFuZ2UiLCJvbldpZHRoQ2hhbmdlIiwiaXNTZWxlY3RlZCIsIm9wZW4iLCJzYXZlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gd3AuYmxvY2tzO1xuY29uc3QgeyBNZWRpYVVwbG9hZCwgSW5zcGVjdG9yQ29udHJvbHMgfSAgICAgICAgICAgICAgICAgICAgICAgICAgPSB3cC5lZGl0b3I7XG5jb25zdCB7IEJ1dHRvbiwgUGFuZWxSb3csIFBhbmVsQm9keSwgVG9nZ2xlQ29udHJvbCwgVGV4dENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdhcHBsaWNhdGlvbi9wZGYnIF07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFwicGRmanNibG9jay9wZGZqcy1lbWJlZFwiLCB7XG5cdHRpdGxlOiBfXyggJ0VtYmVkIFBERi5qcyBWaWV3ZXInLCAncGRmLWpzLWJsb2NrJyApLFxuXHRpY29uOiAnbWVkaWEtZG9jdW1lbnQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRpbWFnZVVSTDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWdJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcidcblx0XHR9LFxuXHRcdGltZ1RpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdQREYgRmlsZSdcblx0XHR9LFxuXHRcdHNob3dEb3dubG9hZDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH0sXG5cdFx0c2hvd1ByaW50OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0fSxcblx0XHRzaG93RnVsbHNjcmVlbjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH0sXG5cdFx0dmlld2VySGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEzNjAsXG5cdFx0fSxcblx0XHR2aWV3ZXJXaWR0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAwLFxuXHRcdH1cblx0fSxcblx0a2V5d29yZHM6IFtcblx0XHRfXyggJ1BERiBTZWxlY3RvcicsICdwZGYtanMtYmxvY2snICksXG5cdF0sXG5cblx0ZWRpdDogZnVuY3Rpb24gKCBwcm9wcyApIHtcblxuXHRcdGNvbnN0IG9uRmlsZVNlbGVjdCA9IChpbWcpID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRpbWFnZVVSTDogaW1nLnVybCxcblx0XHRcdFx0aW1nSUQ6IGltZy5pZCxcblx0XHRcdFx0aW1nVGl0bGU6IGltZy50aXRsZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uUmVtb3ZlSW1nID0gKCkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGltYWdlVVJMOiBudWxsLFxuXHRcdFx0XHRpbWdJRDogbnVsbCxcblx0XHRcdFx0aW1nVGl0bGU6IG51bGwsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCBvblRvZ2dsZURvd25sb2FkID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRzaG93RG93bmxvYWQ6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Ub2dnbGVQcmludCA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0c2hvd1ByaW50OiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uVG9nZ2xlRnVsbHNjcmVlbiA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0c2hvd0Z1bGxzY3JlZW46IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25IZWlnaHRDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHZpZXdlckhlaWdodDogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCBvbldpZHRoQ2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHR2aWV3ZXJXaWR0aDogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT1cImkxXCI+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1BERi5qcyBPcHRpb25zJywgJ3BkZi1qcy1ibG9jaycgKSB9ID5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNob3cgRG93bmxvYWQgT3B0aW9uXCJcblx0XHRcdFx0XHRcdFx0aGVscD17cHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWQgPyBcIlllc1wiIDogXCJOb1wifVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uVG9nZ2xlRG93bmxvYWR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTaG93IFByaW50IE9wdGlvblwiXG5cdFx0XHRcdFx0XHRcdGhlbHA9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50ID8gXCJZZXNcIiA6IFwiTm9cIn1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17cHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblRvZ2dsZVByaW50fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiU2hvdyBGdWxsc2NyZWVuIE9wdGlvblwiXG5cdFx0XHRcdFx0XHRcdGhlbHA9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW4gPyBcIlllc1wiIDogXCJOb1wifVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVufVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25Ub2dnbGVGdWxsc2NyZWVufVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlZpZXdlciBIZWlnaHQgKHBpeGVscylcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkhlaWdodENoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJWaWV3ZXIgV2lkdGggKHBpeGVscylcIlxuXHRcdFx0XHRcdFx0XHRoZWxwPVwiQnkgZGVmYXVsdCAwIHdpbGwgYmUgMTAwJS5cIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uV2lkdGhDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXIgY29tcG9uZW50cy1wbGFjZWhvbGRlclwiIGtleT1cImkyXCI+XG5cdFx0XHRcdDxsYWJlbD48c3Ryb25nPlBERi5qcyBFbWJlZDwvc3Ryb25nPjwvbGFiZWw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQocHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCkgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXVwbG9hZC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1tZWRpYS1kb2N1bWVudFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwZGZqcy10aXRsZVwiPnsgcHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZSA/IHByb3BzLmF0dHJpYnV0ZXMuaW1nVGl0bGUgOiBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7KHByb3BzLmlzU2VsZWN0ZWQpID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvblJlbW92ZUltZ31cblx0XHRcdFx0XHRcdFx0XHQ+UmVtb3ZlIFBERjwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbCB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXtvbkZpbGVTZWxlY3R9XG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuYXR0cmlidXRlcy5pbWdJRH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoe29wZW59KSA9PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvcGVufVxuXHRcdFx0XHRcdFx0XHRcdD5DaG9vc2UgUERGPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRdO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uICggcHJvcHMgKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXJcIj5cblx0XHRcdFtwZGZqcy12aWV3ZXIgdmlld2VyX3dpZHRoPXsgKHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggIT0gMCkgPyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoIDogJzEwMCUnIH0gdmlld2VyX2hlaWdodD17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHR9IHVybD17cHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTH0gZG93bmxvYWQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkLnRvU3RyaW5nKCl9IHByaW50PXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludC50b1N0cmluZygpfSBmdWxsc2NyZWVuPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuLnRvU3RyaW5nKCl9XVxuXHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSApO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
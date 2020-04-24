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
      label: __("Show Download Option", 'pdf-js-block'),
      help: props.attributes.showDownload ? __("Yes", 'pdf-js-block') : __("No", 'pdf-js-block'),
      checked: props.attributes.showDownload,
      onChange: onToggleDownload
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __("Show Print Option", 'pdf-js-block'),
      help: props.attributes.showPrint ? __("Yes", 'pdf-js-block') : __("No", 'pdf-js-block'),
      checked: props.attributes.showPrint,
      onChange: onTogglePrint
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __("Show Fullscreen Option", 'pdf-js-block'),
      help: props.attributes.showFullscreen ? __("Yes", 'pdf-js-block') : __("No", 'pdf-js-block'),
      checked: props.attributes.showFullscreen,
      onChange: onToggleFullscreen
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: __("Viewer Height (pixels)", 'pdf-js-block'),
      value: props.attributes.viewerHeight,
      onChange: onHeightChange
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: __("Viewer Width (pixels)", 'pdf-js-block'),
      help: "By default 0 will be 100%.",
      value: props.attributes.viewerWidth,
      onChange: onWidthChange
    })))), wp.element.createElement("div", {
      className: "pdfjs-wrapper components-placeholder",
      key: "i2"
    }, wp.element.createElement("label", null, wp.element.createElement("strong", null, __("PDF.js Embed", 'pdf-js-block'))), props.attributes.imageURL ? wp.element.createElement("div", {
      className: "pdfjs-upload-wrapper"
    }, wp.element.createElement("div", null, wp.element.createElement("span", {
      className: "dashicons dashicons-media-document"
    }), wp.element.createElement("span", {
      className: "pdfjs-title"
    }, props.attributes.imgTitle ? props.attributes.imgTitle : props.attributes.imageURL)), props.isSelected ? wp.element.createElement(Button, {
      className: "button",
      onClick: onRemoveImg
    }, __("Remove PDF", 'pdf-js-block')) : null) : wp.element.createElement("div", null, wp.element.createElement(MediaUpload, {
      onSelect: onFileSelect,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: props.attributes.imgID,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(Button, {
          className: "button",
          onClick: open
        }, __("Choose PDF", 'pdf-js-block'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL3N0eWxlLnNjc3M/NGIxNCIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJJbnNwZWN0b3JDb250cm9scyIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJQYW5lbFJvdyIsIlBhbmVsQm9keSIsIlRvZ2dsZUNvbnRyb2wiLCJUZXh0Q29udHJvbCIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJpbWFnZVVSTCIsInR5cGUiLCJpbWdJRCIsImltZ1RpdGxlIiwic2hvd0Rvd25sb2FkIiwic2hvd1ByaW50Iiwic2hvd0Z1bGxzY3JlZW4iLCJ2aWV3ZXJIZWlnaHQiLCJ2aWV3ZXJXaWR0aCIsImtleXdvcmRzIiwiZWRpdCIsInByb3BzIiwib25GaWxlU2VsZWN0IiwiaW1nIiwic2V0QXR0cmlidXRlcyIsInVybCIsImlkIiwib25SZW1vdmVJbWciLCJvblRvZ2dsZURvd25sb2FkIiwidmFsdWUiLCJvblRvZ2dsZVByaW50Iiwib25Ub2dnbGVGdWxsc2NyZWVuIiwib25IZWlnaHRDaGFuZ2UiLCJvbldpZHRoQ2hhbmdlIiwiaXNTZWxlY3RlZCIsIm9wZW4iLCJzYXZlIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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aUJTLFdBQWpCLElBQWdDLENBQWpDLEdBQXNDRyxLQUFLLENBQUNaLFVBQU4sQ0FBaUJTLFdBQXZELEdBQXFFLE1BRG5HLHFCQUMySEcsS0FBSyxDQUFDWixVQUFOLENBQWlCUSxZQUQ1SSxXQUMrSkksS0FBSyxDQUFDWixVQUFOLENBQWlCQyxRQURoTCxnQkFDb01XLEtBQUssQ0FBQ1osVUFBTixDQUFpQkssWUFBakIsQ0FBOEJ1QixRQUE5QixFQURwTSxhQUNxUGhCLEtBQUssQ0FBQ1osVUFBTixDQUFpQk0sU0FBakIsQ0FBMkJzQixRQUEzQixFQURyUCxrQkFDd1NoQixLQUFLLENBQUNaLFVBQU4sQ0FBaUJPLGNBQWpCLENBQWdDcUIsUUFBaEMsRUFEeFMsTUFEQTtBQUtBO0FBL0swQyxDQUEzQixDQUFqQixDOzs7Ozs7Ozs7OztBQ1ZBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB3cC5ibG9ja3M7XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBJbnNwZWN0b3JDb250cm9scyB9ICAgICAgICAgICAgICAgICAgICAgICAgICA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgQnV0dG9uLCBQYW5lbFJvdywgUGFuZWxCb2R5LCBUb2dnbGVDb250cm9sLCBUZXh0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2FwcGxpY2F0aW9uL3BkZicgXTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJwZGZqc2Jsb2NrL3BkZmpzLWVtYmVkXCIsIHtcblx0dGl0bGU6IF9fKCAnRW1iZWQgUERGLmpzIFZpZXdlcicsICdwZGYtanMtYmxvY2snICksXG5cdGljb246ICdtZWRpYS1kb2N1bWVudCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0YXR0cmlidXRlczoge1xuXHRcdGltYWdlVVJMOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZ0lEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJ1xuXHRcdH0sXG5cdFx0aW1nVGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ1BERiBGaWxlJ1xuXHRcdH0sXG5cdFx0c2hvd0Rvd25sb2FkOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0fSxcblx0XHRzaG93UHJpbnQ6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHR9LFxuXHRcdHNob3dGdWxsc2NyZWVuOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0fSxcblx0XHR2aWV3ZXJIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogMTM2MCxcblx0XHR9LFxuXHRcdHZpZXdlcldpZHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDAsXG5cdFx0fVxuXHR9LFxuXHRrZXl3b3JkczogW1xuXHRcdF9fKCAnUERGIFNlbGVjdG9yJywgJ3BkZi1qcy1ibG9jaycgKSxcblx0XSxcblxuXHRlZGl0OiBmdW5jdGlvbiAoIHByb3BzICkge1xuXG5cdFx0Y29uc3Qgb25GaWxlU2VsZWN0ID0gKGltZykgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdGltYWdlVVJMOiBpbWcudXJsLFxuXHRcdFx0XHRpbWdJRDogaW1nLmlkLFxuXHRcdFx0XHRpbWdUaXRsZTogaW1nLnRpdGxlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25SZW1vdmVJbWcgPSAoKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1hZ2VVUkw6IG51bGwsXG5cdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRpbWdUaXRsZTogbnVsbCxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uVG9nZ2xlRG93bmxvYWQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHNob3dEb3dubG9hZDogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCBvblRvZ2dsZVByaW50ID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRzaG93UHJpbnQ6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgb25Ub2dnbGVGdWxsc2NyZWVuID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRzaG93RnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRjb25zdCBvbkhlaWdodENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0dmlld2VySGVpZ2h0OiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uV2lkdGhDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHZpZXdlcldpZHRoOiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHMga2V5PVwiaTFcIj5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnUERGLmpzIE9wdGlvbnMnLCAncGRmLWpzLWJsb2NrJyApIH0gPlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiU2hvdyBEb3dubG9hZCBPcHRpb25cIiwgJ3BkZi1qcy1ibG9jaycgKSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkID8gX18oIFwiWWVzXCIsICdwZGYtanMtYmxvY2snICkgOiBfXyggXCJOb1wiLCAncGRmLWpzLWJsb2NrJyApfVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uVG9nZ2xlRG93bmxvYWR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggXCJTaG93IFByaW50IE9wdGlvblwiLCAncGRmLWpzLWJsb2NrJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17cHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnQgPyBfXyggXCJZZXNcIiwgJ3BkZi1qcy1ibG9jaycgKSA6IF9fKCBcIk5vXCIsICdwZGYtanMtYmxvY2snICl9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25Ub2dnbGVQcmludH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCBcIlNob3cgRnVsbHNjcmVlbiBPcHRpb25cIiwgJ3BkZi1qcy1ibG9jaycgKSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW4gPyBfXyggXCJZZXNcIiwgJ3BkZi1qcy1ibG9jaycgKSA6IF9fKCBcIk5vXCIsICdwZGYtanMtYmxvY2snICl9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW59XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblRvZ2dsZUZ1bGxzY3JlZW59XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiVmlld2VyIEhlaWdodCAocGl4ZWxzKVwiLCAncGRmLWpzLWJsb2NrJyApIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0fVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25IZWlnaHRDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oIFwiVmlld2VyIFdpZHRoIChwaXhlbHMpXCIsICdwZGYtanMtYmxvY2snICkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPVwiQnkgZGVmYXVsdCAwIHdpbGwgYmUgMTAwJS5cIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uV2lkdGhDaGFuZ2V9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXIgY29tcG9uZW50cy1wbGFjZWhvbGRlclwiIGtleT1cImkyXCI+XG5cdFx0XHRcdDxsYWJlbD48c3Ryb25nPnsgX18oIFwiUERGLmpzIEVtYmVkXCIsICdwZGYtanMtYmxvY2snICkgfTwvc3Ryb25nPjwvbGFiZWw+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHQocHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCkgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXVwbG9hZC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1tZWRpYS1kb2N1bWVudFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwZGZqcy10aXRsZVwiPnsgcHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZSA/IHByb3BzLmF0dHJpYnV0ZXMuaW1nVGl0bGUgOiBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMIH08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7KHByb3BzLmlzU2VsZWN0ZWQpID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvblJlbW92ZUltZ31cblx0XHRcdFx0XHRcdFx0XHQ+eyBfXyggXCJSZW1vdmUgUERGXCIsICdwZGYtanMtYmxvY2snICkgfTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbCB9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXtvbkZpbGVTZWxlY3R9XG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuYXR0cmlidXRlcy5pbWdJRH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoe29wZW59KSA9PlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvcGVufVxuXHRcdFx0XHRcdFx0XHRcdD57IF9fKCBcIkNob29zZSBQREZcIiwgJ3BkZi1qcy1ibG9jaycgKSB9PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fVxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRdO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uICggcHJvcHMgKSB7XG5cdFx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXJcIj5cblx0XHRcdFtwZGZqcy12aWV3ZXIgdmlld2VyX3dpZHRoPXsgKHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggIT0gMCkgPyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoIDogJzEwMCUnIH0gdmlld2VyX2hlaWdodD17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHR9IHVybD17cHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTH0gZG93bmxvYWQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkLnRvU3RyaW5nKCl9IHByaW50PXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludC50b1N0cmluZygpfSBmdWxsc2NyZWVuPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuLnRvU3RyaW5nKCl9XVxuXHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSApO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
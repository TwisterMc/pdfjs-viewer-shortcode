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
    }, "[pdfjs-viewer viewer_width=", props.attributes.viewerWidth !== 0 ? props.attributes.viewerWidth : '100%', ' ', "viewer_height=", props.attributes.viewerHeight, "url=", props.attributes.imageURL, "download=", props.attributes.showDownload.toString(), "print=", props.attributes.showPrint.toString(), "fullscreen=", props.attributes.showFullscreen.toString(), "]");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL3N0eWxlLnNjc3M/NGIxNCIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIlBhbmVsUm93IiwiUGFuZWxCb2R5IiwiVG9nZ2xlQ29udHJvbCIsIlRleHRDb250cm9sIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImltYWdlVVJMIiwidHlwZSIsImltZ0lEIiwiaW1nVGl0bGUiLCJzaG93RG93bmxvYWQiLCJzaG93UHJpbnQiLCJzaG93RnVsbHNjcmVlbiIsInZpZXdlckhlaWdodCIsInZpZXdlcldpZHRoIiwia2V5d29yZHMiLCJlZGl0IiwicHJvcHMiLCJvbkZpbGVTZWxlY3QiLCJpbWciLCJzZXRBdHRyaWJ1dGVzIiwidXJsIiwiaWQiLCJvblJlbW92ZUltZyIsIm9uVG9nZ2xlRG93bmxvYWQiLCJ2YWx1ZSIsIm9uVG9nZ2xlUHJpbnQiLCJvblRvZ2dsZUZ1bGxzY3JlZW4iLCJvbkhlaWdodENoYW5nZSIsIm9uV2lkdGhDaGFuZ2UiLCJpc1NlbGVjdGVkIiwib3BlbiIsInNhdmUiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7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aUJTLFdBQWpCLEtBQWlDLENBQWpDLEdBQ0VHLEtBQUssQ0FBQ1osVUFBTixDQUFpQlMsV0FEbkIsR0FFRSxNQUpKLEVBSVksR0FKWixvQkFLZ0JHLEtBQUssQ0FBQ1osVUFBTixDQUFpQlEsWUFMakMsVUFNTUksS0FBSyxDQUFDWixVQUFOLENBQWlCQyxRQU52QixlQU9XVyxLQUFLLENBQUNaLFVBQU4sQ0FBaUJLLFlBQWpCLENBQThCdUIsUUFBOUIsRUFQWCxZQVFRaEIsS0FBSyxDQUFDWixVQUFOLENBQWlCTSxTQUFqQixDQUEyQnNCLFFBQTNCLEVBUlIsaUJBU2FoQixLQUFLLENBQUNaLFVBQU4sQ0FBaUJPLGNBQWpCLENBQWdDcUIsUUFBaEMsRUFUYixNQUREO0FBYUE7QUFqTTJDLENBQTVCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDakJBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSAgICAgICAgICAgICAgPSB3cC5ibG9ja3M7XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRQYW5lbFJvdyxcblx0UGFuZWxCb2R5LFxuXHRUb2dnbGVDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWydhcHBsaWNhdGlvbi9wZGYnXTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICdwZGZqc2Jsb2NrL3BkZmpzLWVtYmVkJywge1xuXHR0aXRsZTogX18oICdFbWJlZCBQREYuanMgVmlld2VyJywgJ3BkZi1qcy1ibG9jaycgKSxcblx0aWNvbjogJ21lZGlhLWRvY3VtZW50Jyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1hZ2VVUkw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nVGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ1BERiBGaWxlJyxcblx0XHR9LFxuXHRcdHNob3dEb3dubG9hZDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHR9LFxuXHRcdHNob3dQcmludDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZSxcblx0XHR9LFxuXHRcdHNob3dGdWxsc2NyZWVuOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0dmlld2VySGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IDEzNjAsXG5cdFx0fSxcblx0XHR2aWV3ZXJXaWR0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAwLFxuXHRcdH0sXG5cdH0sXG5cdGtleXdvcmRzOiBbX18oICdQREYgU2VsZWN0b3InLCAncGRmLWpzLWJsb2NrJyApIF0sXG5cblx0ZWRpdCggcHJvcHMgKSB7XG5cdFx0Y29uc3Qgb25GaWxlU2VsZWN0ID0gKCBpbWcgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1hZ2VVUkw6IGltZy51cmwsXG5cdFx0XHRcdGltZ0lEOiBpbWcuaWQsXG5cdFx0XHRcdGltZ1RpdGxlOiBpbWcudGl0bGUsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25SZW1vdmVJbWcgPSAoKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0aW1hZ2VVUkw6IG51bGwsXG5cdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRpbWdUaXRsZTogbnVsbCxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZURvd25sb2FkID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRzaG93RG93bmxvYWQ6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlUHJpbnQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHNob3dQcmludDogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVGdWxsc2NyZWVuID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRzaG93RnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25IZWlnaHRDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHZpZXdlckhlaWdodDogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25XaWR0aENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0dmlld2VyV2lkdGg6IHZhbHVlLFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHMga2V5PVwiaTFcIj5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17X18oICdQREYuanMgT3B0aW9ucycsICdwZGYtanMtYmxvY2snICl9PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyggJ1Nob3cgRG93bmxvYWQgT3B0aW9uJywgJ3BkZi1qcy1ibG9jaycgKX1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmLWpzLWJsb2NrJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmLWpzLWJsb2NrJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17cHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblRvZ2dsZURvd25sb2FkfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyggJ1Nob3cgUHJpbnQgT3B0aW9uJywgJ3BkZi1qcy1ibG9jaycgKX1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnRcblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmLWpzLWJsb2NrJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmLWpzLWJsb2NrJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17cHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblRvZ2dsZVByaW50fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyggJ1Nob3cgRnVsbHNjcmVlbiBPcHRpb24nLCAncGRmLWpzLWJsb2NrJyApfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZi1qcy1ibG9jaycgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZi1qcy1ibG9jaycgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW59XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblRvZ2dsZUZ1bGxzY3JlZW59XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyggJ1ZpZXdlciBIZWlnaHQgKHBpeGVscyknLCAncGRmLWpzLWJsb2NrJyApfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHR9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkhlaWdodENoYW5nZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9e19fKCAnVmlld2VyIFdpZHRoIChwaXhlbHMpJywgJ3BkZi1qcy1ibG9jaycgKX1cblx0XHRcdFx0XHRcdFx0aGVscD1cIkJ5IGRlZmF1bHQgMCB3aWxsIGJlIDEwMCUuXCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGh9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbldpZHRoQ2hhbmdlfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy13cmFwcGVyIGNvbXBvbmVudHMtcGxhY2Vob2xkZXJcIiBrZXk9XCJpMlwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxzdHJvbmc+e19fKCAnUERGLmpzIEVtYmVkJywgJ3BkZi1qcy1ibG9jaycgKX08L3N0cm9uZz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtbWVkaWEtZG9jdW1lbnRcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBkZmpzLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3Byb3BzLmF0dHJpYnV0ZXMuaW1nVGl0bGVcblx0XHRcdFx0XHRcdFx0XHRcdD8gcHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHtwcm9wcy5pc1NlbGVjdGVkID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uUmVtb3ZlSW1nfT5cblx0XHRcdFx0XHRcdFx0XHR7X18oICdSZW1vdmUgUERGJywgJ3BkZi1qcy1ibG9jaycgKX1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXtvbkZpbGVTZWxlY3R9XG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17QUxMT1dFRF9NRURJQV9UWVBFU31cblx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmF0dHJpYnV0ZXMuaW1nSUR9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17KHsgb3BlbiB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXtvcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdHtfXyggJ0Nob29zZSBQREYnLCAncGRmLWpzLWJsb2NrJyApfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2Pixcblx0XHRdO1xuXHR9LFxuXG5cdHNhdmUoIHByb3BzICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXJcIj5cblx0XHRcdFx0W3BkZmpzLXZpZXdlciB2aWV3ZXJfd2lkdGg9XG5cdFx0XHRcdHtwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoICE9PSAwXG5cdFx0XHRcdFx0PyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoXG5cdFx0XHRcdFx0OiAnMTAwJSd9eycgJ31cblx0XHRcdFx0dmlld2VyX2hlaWdodD17cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHR9XG5cdFx0XHRcdHVybD17cHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTH1cblx0XHRcdFx0ZG93bmxvYWQ9e3Byb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkLnRvU3RyaW5nKCl9XG5cdFx0XHRcdHByaW50PXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludC50b1N0cmluZygpfVxuXHRcdFx0XHRmdWxsc2NyZWVuPXtwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuLnRvU3RyaW5nKCl9XVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
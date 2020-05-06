/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./blocks/src/blocks.js","editor","style"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
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
    RangeControl = _wp$components.RangeControl;
var defaultHeight = 1360;
var defaultWidth = 0;
var ALLOWED_MEDIA_TYPES = ['application/pdf'];
registerBlockType('pdfjsblock/pdfjs-embed', {
  title: __('Embed PDF.js Viewer', 'pdfjs-viewer-shortcode'),
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
      "default": defaultHeight
    },
    viewerWidth: {
      type: 'number',
      "default": defaultWidth
    }
  },
  keywords: [__('PDF Selector', 'pdfjs-viewer-shortcode')],
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
      // handle the reset button
      if (undefined === value) {
        value = defaultHeight;
      }

      props.setAttributes({
        viewerHeight: value
      });
    };

    var onWidthChange = function onWidthChange(value) {
      // handle the reset button
      if (undefined === value) {
        value = defaultWidth;
      }

      props.setAttributes({
        viewerWidth: value
      });
    };

    return [wp.element.createElement(InspectorControls, {
      key: "i1"
    }, wp.element.createElement(PanelBody, {
      title: __('PDF.js Options', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Download Option', 'pdfjs-viewer-shortcode'),
      help: props.attributes.showDownload ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.showDownload,
      onChange: onToggleDownload
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Print Option', 'pdfjs-viewer-shortcode'),
      help: props.attributes.showPrint ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.showPrint,
      onChange: onTogglePrint
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Fullscreen Option', 'pdfjs-viewer-shortcode'),
      help: props.attributes.showFullscreen ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.showFullscreen,
      onChange: onToggleFullscreen
    }))), wp.element.createElement(PanelBody, {
      title: __('Embed Height', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(RangeControl, {
      label: __('Viewer Height (pixels)', 'pdfjs-viewer-shortcode'),
      value: props.attributes.viewerHeight,
      onChange: onHeightChange,
      min: 0,
      max: 5000,
      allowReset: true,
      initialPosition: defaultHeight
    })), wp.element.createElement(PanelBody, {
      title: __('Embed Width', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(RangeControl, {
      label: __('Viewer Width (pixels)', 'pdfjs-viewer-shortcode'),
      help: "By default 0 will be 100%. Minimum 580px.",
      value: props.attributes.viewerWidth,
      onChange: onWidthChange,
      min: 0,
      max: 5000,
      allowReset: true,
      initialPosition: defaultWidth
    }))), wp.element.createElement("div", {
      className: "pdfjs-wrapper components-placeholder",
      key: "i2",
      style: {
        height: props.attributes.viewerHeight
      }
    }, wp.element.createElement("div", null, wp.element.createElement("strong", null, __('PDF.js Embed', 'pdfjs-viewer-shortcode'))), props.attributes.imageURL ? wp.element.createElement("div", {
      className: "pdfjs-upload-wrapper"
    }, wp.element.createElement("div", null, wp.element.createElement("span", {
      className: "dashicons dashicons-media-document"
    }), wp.element.createElement("span", {
      className: "pdfjs-title"
    }, props.attributes.imgTitle ? props.attributes.imgTitle : props.attributes.imageURL)), props.isSelected ? wp.element.createElement(Button, {
      className: "button",
      onClick: onRemoveImg
    }, __('Remove PDF', 'pdfjs-viewer-shortcode')) : null) : wp.element.createElement("div", null, wp.element.createElement(MediaUpload, {
      onSelect: onFileSelect,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: props.attributes.imgID,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(Button, {
          className: "button",
          onClick: open
        }, __('Choose PDF', 'pdfjs-viewer-shortcode'));
      }
    })))];
  },
  save: function save(props) {
    return wp.element.createElement("div", {
      className: "pdfjs-wrapper"
    }, "[pdfjs-viewer viewer_width=".concat(props.attributes.viewerWidth !== undefined ? props.attributes.viewerWidth : defaultWidth, " viewer_height=").concat(props.attributes.viewerHeight !== undefined ? props.attributes.viewerHeight : defaultHeight, " url=").concat(props.attributes.imageURL, " download=").concat(props.attributes.showDownload.toString(), " print=").concat(props.attributes.showPrint.toString(), " fullscreen=").concat(props.attributes.showFullscreen.toString(), "]"));
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIlBhbmVsUm93IiwiUGFuZWxCb2R5IiwiVG9nZ2xlQ29udHJvbCIsIlJhbmdlQ29udHJvbCIsImRlZmF1bHRIZWlnaHQiLCJkZWZhdWx0V2lkdGgiLCJBTExPV0VEX01FRElBX1RZUEVTIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwiaW1hZ2VVUkwiLCJ0eXBlIiwiaW1nSUQiLCJpbWdUaXRsZSIsInNob3dEb3dubG9hZCIsInNob3dQcmludCIsInNob3dGdWxsc2NyZWVuIiwidmlld2VySGVpZ2h0Iiwidmlld2VyV2lkdGgiLCJrZXl3b3JkcyIsImVkaXQiLCJwcm9wcyIsIm9uRmlsZVNlbGVjdCIsImltZyIsInNldEF0dHJpYnV0ZXMiLCJ1cmwiLCJpZCIsIm9uUmVtb3ZlSW1nIiwib25Ub2dnbGVEb3dubG9hZCIsInZhbHVlIiwib25Ub2dnbGVQcmludCIsIm9uVG9nZ2xlRnVsbHNjcmVlbiIsIm9uSGVpZ2h0Q2hhbmdlIiwidW5kZWZpbmVkIiwib25XaWR0aENoYW5nZSIsImhlaWdodCIsImlzU2VsZWN0ZWQiLCJvcGVuIiwic2F2ZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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Ziw0Q0FDbUNBLEtBQUssQ0FBQ1osVUFBTixDQUFpQlMsV0FBakIsS0FBaUNlLFNBQW5DLEdBQWlEWixLQUFLLENBQUNaLFVBQU4sQ0FBaUJTLFdBQWxFLEdBQWdGZCxZQURqSCw0QkFDbUppQixLQUFLLENBQUNaLFVBQU4sQ0FBaUJRLFlBQWpCLEtBQWtDZ0IsU0FBcEMsR0FBa0RaLEtBQUssQ0FBQ1osVUFBTixDQUFpQlEsWUFBbkUsR0FBa0ZkLGFBRG5PLGtCQUMwUGtCLEtBQUssQ0FBQ1osVUFBTixDQUFpQkMsUUFEM1EsdUJBQ2tTVyxLQUFLLENBQUNaLFVBQU4sQ0FBaUJLLFlBQWpCLENBQThCeUIsUUFBOUIsRUFEbFMsb0JBQ3NWbEIsS0FBSyxDQUFDWixVQUFOLENBQWlCTSxTQUFqQixDQUEyQndCLFFBQTNCLEVBRHRWLHlCQUM0WWxCLEtBQUssQ0FBQ1osVUFBTixDQUFpQk8sY0FBakIsQ0FBZ0N1QixRQUFoQyxFQUQ1WSxPQUREO0FBS0E7QUFyTjJDLENBQTVCLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiLFwiZWRpdG9yXCIsXCJzdHlsZVwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgTWVkaWFVcGxvYWQsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdFBhbmVsUm93LFxuXHRQYW5lbEJvZHksXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFJhbmdlQ29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBkZWZhdWx0SGVpZ2h0ID0gMTM2MDtcbmNvbnN0IGRlZmF1bHRXaWR0aCA9IDA7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdhcHBsaWNhdGlvbi9wZGYnIF07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAncGRmanNibG9jay9wZGZqcy1lbWJlZCcsIHtcblx0dGl0bGU6IF9fKCAnRW1iZWQgUERGLmpzIFZpZXdlcicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApLFxuXHRpY29uOiAnbWVkaWEtZG9jdW1lbnQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRpbWFnZVVSTDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWdJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWdUaXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnUERGIEZpbGUnLFxuXHRcdH0sXG5cdFx0c2hvd0Rvd25sb2FkOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0c2hvd1ByaW50OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0c2hvd0Z1bGxzY3JlZW46IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0fSxcblx0XHR2aWV3ZXJIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogZGVmYXVsdEhlaWdodCxcblx0XHR9LFxuXHRcdHZpZXdlcldpZHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IGRlZmF1bHRXaWR0aCxcblx0XHR9LFxuXHR9LFxuXHRrZXl3b3JkczogWyBfXyggJ1BERiBTZWxlY3RvcicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIF0sXG5cblx0ZWRpdCggcHJvcHMgKSB7XG5cdFx0Y29uc3Qgb25GaWxlU2VsZWN0ID0gKCBpbWcgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGltYWdlVVJMOiBpbWcudXJsLFxuXHRcdFx0XHRpbWdJRDogaW1nLmlkLFxuXHRcdFx0XHRpbWdUaXRsZTogaW1nLnRpdGxlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblJlbW92ZUltZyA9ICgpID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0aW1hZ2VVUkw6IG51bGwsXG5cdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRpbWdUaXRsZTogbnVsbCxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVEb3dubG9hZCA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHNob3dEb3dubG9hZDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlUHJpbnQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93UHJpbnQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZUZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93RnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uSGVpZ2h0Q2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdC8vIGhhbmRsZSB0aGUgcmVzZXQgYnV0dG9uXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gdmFsdWUgKSB7XG5cdFx0XHRcdHZhbHVlID0gZGVmYXVsdEhlaWdodDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VySGVpZ2h0OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25XaWR0aENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHQvLyBoYW5kbGUgdGhlIHJlc2V0IGJ1dHRvblxuXHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdFx0XHR2YWx1ZSA9IGRlZmF1bHRXaWR0aDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VyV2lkdGg6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT1cImkxXCI+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1BERi5qcyBPcHRpb25zJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdTaG93IERvd25sb2FkIE9wdGlvbicsXG5cdFx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25Ub2dnbGVEb3dubG9hZCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Nob3cgUHJpbnQgT3B0aW9uJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludFxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25Ub2dnbGVQcmludCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHQnU2hvdyBGdWxsc2NyZWVuIE9wdGlvbicsXG5cdFx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlRnVsbHNjcmVlbiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdFbWJlZCBIZWlnaHQnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdCdWaWV3ZXIgSGVpZ2h0IChwaXhlbHMpJyxcblx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkhlaWdodENoYW5nZSB9XG5cdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdG1heD17IDUwMDAgfVxuXHRcdFx0XHRcdFx0YWxsb3dSZXNldD17IHRydWUgfVxuXHRcdFx0XHRcdFx0aW5pdGlhbFBvc2l0aW9uPXsgZGVmYXVsdEhlaWdodCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0VtYmVkIFdpZHRoJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHQnVmlld2VyIFdpZHRoIChwaXhlbHMpJyxcblx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdGhlbHA9XCJCeSBkZWZhdWx0IDAgd2lsbCBiZSAxMDAlLiBNaW5pbXVtIDU4MHB4LlwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvbldpZHRoQ2hhbmdlIH1cblx0XHRcdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHRcdFx0bWF4PXsgNTAwMCB9XG5cdFx0XHRcdFx0XHRhbGxvd1Jlc2V0PXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRpbml0aWFsUG9zaXRpb249eyBkZWZhdWx0V2lkdGggfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXIgY29tcG9uZW50cy1wbGFjZWhvbGRlclwiIGtleT1cImkyXCIgc3R5bGU9e3toZWlnaHQ6IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0fX0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHN0cm9uZz57IF9fKCAnUERGLmpzIEVtYmVkJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfTwvc3Ryb25nPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtbWVkaWEtZG9jdW1lbnRcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBkZmpzLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IHByb3BzLmF0dHJpYnV0ZXMuaW1nVGl0bGVcblx0XHRcdFx0XHRcdFx0XHRcdDogcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCB9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0eyBwcm9wcy5pc1NlbGVjdGVkID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyBvblJlbW92ZUltZyB9PlxuXHRcdFx0XHRcdFx0XHRcdHsgX18oICdSZW1vdmUgUERGJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdCkgOiBudWxsIH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgb25GaWxlU2VsZWN0IH1cblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5pbWdJRCB9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsgb3BlbiB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBfXyggJ0Nob29zZSBQREYnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L2Rpdj4sXG5cdFx0XTtcblx0fSxcblxuXHRzYXZlKCBwcm9wcyApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy13cmFwcGVyXCI+XG5cdFx0XHRcdHtgW3BkZmpzLXZpZXdlciB2aWV3ZXJfd2lkdGg9JHsgKCBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoICE9PSB1bmRlZmluZWQgKSA/IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggOiBkZWZhdWx0V2lkdGggfSB2aWV3ZXJfaGVpZ2h0PSR7ICggcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHQgIT09IHVuZGVmaW5lZCApID8gcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHQgOiBkZWZhdWx0SGVpZ2h0IH0gdXJsPSR7IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgfSBkb3dubG9hZD0keyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZC50b1N0cmluZygpIH0gcHJpbnQ9JHsgcHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnQudG9TdHJpbmcoKSB9IGZ1bGxzY3JlZW49JHsgcHJvcHMuYXR0cmlidXRlcy5zaG93RnVsbHNjcmVlbi50b1N0cmluZygpIH1dYH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG59ICk7XG4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
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
    ToggleControl = _wp$components.ToggleControl;
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
    hideDownload: {
      type: 'boolean',
      "default": false
    },
    hidePrint: {
      type: 'boolean',
      "default": false
    },
    hideFullscreen: {
      type: 'boolean',
      "default": false
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

    var onToggleDownload = function onToggleDownload(item) {
      props.setAttributes({
        hideDownload: item
      });
    };

    var onTogglePrint = function onTogglePrint(item) {
      props.setAttributes({
        hidePrint: item
      });
    };

    var onToggleFullscreen = function onToggleFullscreen(item) {
      props.setAttributes({
        hideFullscreen: item
      });
    };

    return [wp.element.createElement(InspectorControls, {
      key: "i1"
    }, wp.element.createElement(PanelBody, {
      title: __('PDF.js Options', 'pdf-js-block')
    }, wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: "Hide Download Option",
      help: props.attributes.hideDownload ? "Yes" : "No",
      checked: props.attributes.hideDownload,
      onChange: onToggleDownload
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: "Hide Print Option",
      help: props.attributes.hidePrint ? "Yes" : "No",
      checked: props.attributes.hidePrint,
      onChange: onTogglePrint
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: "Hide Fullscreen Option",
      help: props.attributes.hideFullscreen ? "Yes" : "No",
      checked: props.attributes.hideFullscreen,
      onChange: onToggleFullscreen
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
    }, "[pdfjs-viewer url=", props.attributes.imageURL, " download=", props.attributes.hideDownload, " print=", props.attributes.hidePrint, " fullscreen=", props.attributes.hideFullscreen, "]");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL3N0eWxlLnNjc3M/NGIxNCIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiZWRpdG9yIiwiTWVkaWFVcGxvYWQiLCJJbnNwZWN0b3JDb250cm9scyIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJQYW5lbFJvdyIsIlBhbmVsQm9keSIsIlRvZ2dsZUNvbnRyb2wiLCJBTExPV0VEX01FRElBX1RZUEVTIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwiaW1hZ2VVUkwiLCJ0eXBlIiwiaW1nSUQiLCJpbWdUaXRsZSIsImhpZGVEb3dubG9hZCIsImhpZGVQcmludCIsImhpZGVGdWxsc2NyZWVuIiwia2V5d29yZHMiLCJlZGl0IiwicHJvcHMiLCJvbkZpbGVTZWxlY3QiLCJpbWciLCJzZXRBdHRyaWJ1dGVzIiwidXJsIiwiaWQiLCJvblJlbW92ZUltZyIsIm9uVG9nZ2xlRG93bmxvYWQiLCJpdGVtIiwib25Ub2dnbGVQcmludCIsIm9uVG9nZ2xlRnVsbHNjcmVlbiIsImlzU2VsZWN0ZWQiLCJvcGVuIiwic2F2ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGUUEsRSxHQUFPQyxFQUFFLENBQUNDLEksQ0FBVkYsRTtBQUVSO0lBRVFHLGlCLEdBQXNCRixFQUFFLENBQUNHLE0sQ0FBekJELGlCO2lCQUN5Q0YsRUFBRSxDQUFDSSxNO0lBQTVDQyxXLGNBQUFBLFc7SUFBYUMsaUIsY0FBQUEsaUI7cUJBQzZDTixFQUFFLENBQUNPLFU7SUFBN0RDLE0sa0JBQUFBLE07SUFBUUMsUSxrQkFBQUEsUTtJQUFVQyxTLGtCQUFBQSxTO0lBQVdDLGEsa0JBQUFBLGE7QUFFckMsSUFBTUMsbUJBQW1CLEdBQUcsQ0FBRSxpQkFBRixDQUE1QjtBQUVBVixpQkFBaUIsQ0FBQyx3QkFBRCxFQUEyQjtBQUMxQ1csT0FBSyxFQUFFZCxFQUFFLENBQUUscUJBQUYsRUFBeUIsY0FBekIsQ0FEaUM7QUFFMUNlLE1BQUksRUFBRSxnQkFGb0M7QUFHMUNDLFVBQVEsRUFBRSxRQUhnQztBQUkxQ0MsWUFBVSxFQUFFO0FBQ1hDLFlBQVEsRUFBRTtBQUNUQyxVQUFJLEVBQUU7QUFERyxLQURDO0FBSVhDLFNBQUssRUFBRTtBQUNORCxVQUFJLEVBQUU7QUFEQSxLQUpJO0FBT1hFLFlBQVEsRUFBRTtBQUNURixVQUFJLEVBQUUsUUFERztBQUVULGlCQUFTO0FBRkEsS0FQQztBQVdYRyxnQkFBWSxFQUFFO0FBQ2JILFVBQUksRUFBRSxTQURPO0FBRWIsaUJBQVM7QUFGSSxLQVhIO0FBZVhJLGFBQVMsRUFBRTtBQUNWSixVQUFJLEVBQUUsU0FESTtBQUVWLGlCQUFTO0FBRkMsS0FmQTtBQW1CWEssa0JBQWMsRUFBRTtBQUNmTCxVQUFJLEVBQUUsU0FEUztBQUVmLGlCQUFTO0FBRk07QUFuQkwsR0FKOEI7QUE0QjFDTSxVQUFRLEVBQUUsQ0FDVHpCLEVBQUUsQ0FBRSxjQUFGLEVBQWtCLGNBQWxCLENBRE8sQ0E1QmdDO0FBZ0MxQzBCLE1BQUksRUFBRSxjQUFXQyxLQUFYLEVBQW1CO0FBRXhCLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBUztBQUM3QkYsV0FBSyxDQUFDRyxhQUFOLENBQW9CO0FBQ25CWixnQkFBUSxFQUFFVyxHQUFHLENBQUNFLEdBREs7QUFFbkJYLGFBQUssRUFBRVMsR0FBRyxDQUFDRyxFQUZRO0FBR25CWCxnQkFBUSxFQUFFUSxHQUFHLENBQUNmO0FBSEssT0FBcEI7QUFLQSxLQU5EOztBQVFBLFFBQU1tQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCTixXQUFLLENBQUNHLGFBQU4sQ0FBb0I7QUFDbkJaLGdCQUFRLEVBQUUsSUFEUztBQUVuQkUsYUFBSyxFQUFFLElBRlk7QUFHbkJDLGdCQUFRLEVBQUU7QUFIUyxPQUFwQjtBQUtBLEtBTkQ7O0FBUUEsUUFBTWEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFFQyxJQUFGLEVBQVk7QUFDcENSLFdBQUssQ0FBQ0csYUFBTixDQUFvQjtBQUNuQlIsb0JBQVksRUFBRWE7QUFESyxPQUFwQjtBQUdBLEtBSkQ7O0FBTUEsUUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFFRCxJQUFGLEVBQVk7QUFDakNSLFdBQUssQ0FBQ0csYUFBTixDQUFvQjtBQUNuQlAsaUJBQVMsRUFBRVk7QUFEUSxPQUFwQjtBQUdBLEtBSkQ7O0FBTUEsUUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFFRixJQUFGLEVBQVk7QUFDdENSLFdBQUssQ0FBQ0csYUFBTixDQUFvQjtBQUNuQk4sc0JBQWMsRUFBRVc7QUFERyxPQUFwQjtBQUdBLEtBSkQ7O0FBTUEsV0FBTyxDQUNOLHlCQUFDLGlCQUFEO0FBQW1CLFNBQUcsRUFBQztBQUF2QixPQUNDLHlCQUFDLFNBQUQ7QUFBVyxXQUFLLEVBQUduQyxFQUFFLENBQUUsZ0JBQUYsRUFBb0IsY0FBcEI7QUFBckIsT0FDQyx5QkFBQyxRQUFELFFBQ0MseUJBQUMsYUFBRDtBQUNDLFdBQUssRUFBQyxzQkFEUDtBQUVDLFVBQUksRUFBRTJCLEtBQUssQ0FBQ1YsVUFBTixDQUFpQkssWUFBakIsR0FBZ0MsS0FBaEMsR0FBd0MsSUFGL0M7QUFHQyxhQUFPLEVBQUVLLEtBQUssQ0FBQ1YsVUFBTixDQUFpQkssWUFIM0I7QUFJQyxjQUFRLEVBQUVZO0FBSlgsTUFERCxDQURELEVBU0MseUJBQUMsUUFBRCxRQUNDLHlCQUFDLGFBQUQ7QUFDQyxXQUFLLEVBQUMsbUJBRFA7QUFFQyxVQUFJLEVBQUVQLEtBQUssQ0FBQ1YsVUFBTixDQUFpQk0sU0FBakIsR0FBNkIsS0FBN0IsR0FBcUMsSUFGNUM7QUFHQyxhQUFPLEVBQUVJLEtBQUssQ0FBQ1YsVUFBTixDQUFpQk0sU0FIM0I7QUFJQyxjQUFRLEVBQUVhO0FBSlgsTUFERCxDQVRELEVBaUJDLHlCQUFDLFFBQUQsUUFDQyx5QkFBQyxhQUFEO0FBQ0MsV0FBSyxFQUFDLHdCQURQO0FBRUMsVUFBSSxFQUFFVCxLQUFLLENBQUNWLFVBQU4sQ0FBaUJPLGNBQWpCLEdBQWtDLEtBQWxDLEdBQTBDLElBRmpEO0FBR0MsYUFBTyxFQUFFRyxLQUFLLENBQUNWLFVBQU4sQ0FBaUJPLGNBSDNCO0FBSUMsY0FBUSxFQUFFYTtBQUpYLE1BREQsQ0FqQkQsQ0FERCxDQURNLEVBNkJOO0FBQUssZUFBUyxFQUFDLHNDQUFmO0FBQXNELFNBQUcsRUFBQztBQUExRCxPQUNDLHdDQUFPLHdEQUFQLENBREQsRUFHR1YsS0FBSyxDQUFDVixVQUFOLENBQWlCQyxRQUFsQixHQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDQyxzQ0FDQztBQUFNLGVBQVMsRUFBQztBQUFoQixNQURELEVBRUM7QUFBTSxlQUFTLEVBQUM7QUFBaEIsT0FBZ0NTLEtBQUssQ0FBQ1YsVUFBTixDQUFpQkksUUFBakIsR0FBNEJNLEtBQUssQ0FBQ1YsVUFBTixDQUFpQkksUUFBN0MsR0FBd0RNLEtBQUssQ0FBQ1YsVUFBTixDQUFpQkMsUUFBekcsQ0FGRCxDQURELEVBS0dTLEtBQUssQ0FBQ1csVUFBUCxHQUNBLHlCQUFDLE1BQUQ7QUFDQyxlQUFTLEVBQUMsUUFEWDtBQUVDLGFBQU8sRUFBRUw7QUFGVixvQkFEQSxHQUtHLElBVkwsQ0FERCxHQWNDLHNDQUNDLHlCQUFDLFdBQUQ7QUFDQSxjQUFRLEVBQUVMLFlBRFY7QUFFQSxrQkFBWSxFQUFHZixtQkFGZjtBQUdBLFdBQUssRUFBRWMsS0FBSyxDQUFDVixVQUFOLENBQWlCRyxLQUh4QjtBQUlBLFlBQU0sRUFBRTtBQUFBLFlBQUVtQixJQUFGLFFBQUVBLElBQUY7QUFBQSxlQUNSLHlCQUFDLE1BQUQ7QUFDQyxtQkFBUyxFQUFDLFFBRFg7QUFFQyxpQkFBTyxFQUFFQTtBQUZWLHdCQURRO0FBQUE7QUFKUixNQURELENBakJILENBN0JNLENBQVA7QUFnRUEsR0FwSXlDO0FBc0kxQ0MsTUFBSSxFQUFFLGNBQVdiLEtBQVgsRUFBbUI7QUFDeEIsV0FDQTtBQUFLLGVBQVMsRUFBQztBQUFmLDZCQUNvQkEsS0FBSyxDQUFDVixVQUFOLENBQWlCQyxRQURyQyxnQkFDeURTLEtBQUssQ0FBQ1YsVUFBTixDQUFpQkssWUFEMUUsYUFDK0ZLLEtBQUssQ0FBQ1YsVUFBTixDQUFpQk0sU0FEaEgsa0JBQ3VJSSxLQUFLLENBQUNWLFVBQU4sQ0FBaUJPLGNBRHhKLE1BREE7QUFLQTtBQTVJeUMsQ0FBM0IsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNWQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgTWVkaWFVcGxvYWQsIEluc3BlY3RvckNvbnRyb2xzIH0gICAgICAgPSB3cC5lZGl0b3I7XG5jb25zdCB7IEJ1dHRvbiwgUGFuZWxSb3csIFBhbmVsQm9keSwgVG9nZ2xlQ29udHJvbCB9ICAgICAgICAgICAgPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnYXBwbGljYXRpb24vcGRmJyBdO1xuXG5yZWdpc3RlckJsb2NrVHlwZShcInBkZmpzYmxvY2svcGRmanMtZW1iZWRcIiwge1xuXHRcdHRpdGxlOiBfXyggJ0VtYmVkIFBERi5qcyBWaWV3ZXInLCAncGRmLWpzLWJsb2NrJyApLFxuXHRcdGljb246ICdtZWRpYS1kb2N1bWVudCcsXG5cdFx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRcdGF0dHJpYnV0ZXM6IHtcblx0XHRcdGltYWdlVVJMOiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0fSxcblx0XHRcdGltZ0lEOiB7XG5cdFx0XHRcdHR5cGU6ICdudW1iZXInXG5cdFx0XHR9LFxuXHRcdFx0aW1nVGl0bGU6IHtcblx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdGRlZmF1bHQ6ICdQREYgRmlsZSdcblx0XHRcdH0sXG5cdFx0XHRoaWRlRG93bmxvYWQ6IHtcblx0XHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdGhpZGVQcmludDoge1xuXHRcdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0aGlkZUZ1bGxzY3JlZW46IHtcblx0XHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0a2V5d29yZHM6IFtcblx0XHRcdF9fKCAnUERGIFNlbGVjdG9yJywgJ3BkZi1qcy1ibG9jaycgKSxcblx0XHRdLFxuXG5cdFx0ZWRpdDogZnVuY3Rpb24gKCBwcm9wcyApIHtcblxuXHRcdFx0Y29uc3Qgb25GaWxlU2VsZWN0ID0gKGltZykgPT4ge1xuXHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRpbWFnZVVSTDogaW1nLnVybCxcblx0XHRcdFx0XHRpbWdJRDogaW1nLmlkLFxuXHRcdFx0XHRcdGltZ1RpdGxlOiBpbWcudGl0bGUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvblJlbW92ZUltZyA9ICgpID0+IHtcblx0XHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdFx0aW1hZ2VVUkw6IG51bGwsXG5cdFx0XHRcdFx0aW1nSUQ6IG51bGwsXG5cdFx0XHRcdFx0aW1nVGl0bGU6IG51bGwsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvblRvZ2dsZURvd25sb2FkID0gKCBpdGVtICkgPT4ge1xuXHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRoaWRlRG93bmxvYWQ6IGl0ZW0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvblRvZ2dsZVByaW50ID0gKCBpdGVtICkgPT4ge1xuXHRcdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRoaWRlUHJpbnQ6IGl0ZW0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBvblRvZ2dsZUZ1bGxzY3JlZW4gPSAoIGl0ZW0gKSA9PiB7XG5cdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdGhpZGVGdWxsc2NyZWVuOiBpdGVtLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT1cImkxXCI+XG5cdFx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnUERGLmpzIE9wdGlvbnMnLCAncGRmLWpzLWJsb2NrJyApIH0gPlxuXHRcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiSGlkZSBEb3dubG9hZCBPcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e3Byb3BzLmF0dHJpYnV0ZXMuaGlkZURvd25sb2FkID8gXCJZZXNcIiA6IFwiTm9cIn1cblx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtwcm9wcy5hdHRyaWJ1dGVzLmhpZGVEb3dubG9hZH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17b25Ub2dnbGVEb3dubG9hZH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJIaWRlIFByaW50IE9wdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD17cHJvcHMuYXR0cmlidXRlcy5oaWRlUHJpbnQgPyBcIlllc1wiIDogXCJOb1wifVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Byb3BzLmF0dHJpYnV0ZXMuaGlkZVByaW50fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblRvZ2dsZVByaW50fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkhpZGUgRnVsbHNjcmVlbiBPcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdGhlbHA9e3Byb3BzLmF0dHJpYnV0ZXMuaGlkZUZ1bGxzY3JlZW4gPyBcIlllc1wiIDogXCJOb1wifVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Byb3BzLmF0dHJpYnV0ZXMuaGlkZUZ1bGxzY3JlZW59XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uVG9nZ2xlRnVsbHNjcmVlbn1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXIgY29tcG9uZW50cy1wbGFjZWhvbGRlclwiIGtleT1cImkyXCI+XG5cdFx0XHRcdFx0PGxhYmVsPjxzdHJvbmc+UERGLmpzIEVtYmVkPC9zdHJvbmc+PC9sYWJlbD5cblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQocHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCkgPyAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1tZWRpYS1kb2N1bWVudFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBkZmpzLXRpdGxlXCI+eyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlID8gcHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZSA6IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7KHByb3BzLmlzU2VsZWN0ZWQpID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvblJlbW92ZUltZ31cblx0XHRcdFx0XHRcdFx0XHRcdD5SZW1vdmUgUERGPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IG51bGwgfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9e29uRmlsZVNlbGVjdH1cblx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuYXR0cmlidXRlcy5pbWdJRH1cblx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyh7b3Blbn0pID0+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29wZW59XG5cdFx0XHRcdFx0XHRcdFx0XHQ+Q2hvb3NlIFBERjwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRdO1xuXHRcdH0sXG5cblx0XHRzYXZlOiBmdW5jdGlvbiAoIHByb3BzICkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtd3JhcHBlclwiPlxuXHRcdFx0XHRbcGRmanMtdmlld2VyIHVybD17cHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTH0gZG93bmxvYWQ9e3Byb3BzLmF0dHJpYnV0ZXMuaGlkZURvd25sb2FkfSBwcmludD17cHJvcHMuYXR0cmlidXRlcy5oaWRlUHJpbnR9IGZ1bGxzY3JlZW49e3Byb3BzLmF0dHJpYnV0ZXMuaGlkZUZ1bGxzY3JlZW59XVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fVxuXHR9ICk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
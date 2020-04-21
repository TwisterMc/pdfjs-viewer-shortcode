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
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./blocks/src/block/edit.js");

var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks;
var ALLOWED_MEDIA_TYPES = ['text'];
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    RangeControl = _wp$components.RangeControl;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;
registerBlockType("pdfjsblock/pdfjs-embed", {
  title: __('Embed PDF.js Viewer', 'image-selector-example'),
  icon: 'format-image',
  category: 'common',
  keywords: [__('Image Selector', 'image-selector-example')],
  supports: {
    align: ['full']
  },
  attributes: {
    bgImageId: {
      type: 'number'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: function save() {
    return wp.element.createElement(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./blocks/src/block/edit.js":
/*!**********************************!*\
  !*** ./blocks/src/block/edit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// edit.js
// Load dependencies
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    ResponsiveWrapper = _wp$components.ResponsiveWrapper,
    Spinner = _wp$components.Spinner;
var compose = wp.compose.compose;
var withSelect = wp.data.withSelect;
var ALLOWED_MEDIA_TYPES = ['image'];

var ImageSelectorEdit = /*#__PURE__*/function (_Component) {
  _inherits(ImageSelectorEdit, _Component);

  var _super = _createSuper(ImageSelectorEdit);

  function ImageSelectorEdit() {
    _classCallCheck(this, ImageSelectorEdit);

    return _super.apply(this, arguments);
  }

  _createClass(ImageSelectorEdit, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          bgImage = _this$props.bgImage,
          className = _this$props.className;
      var bgImageId = attributes.bgImageId;
      var instructions = wp.element.createElement("p", null, __('To edit the background image, you need permission to upload media.', 'image-selector-example'));
      var styles = {};

      if (bgImage && bgImage.source_url) {
        styles = {
          backgroundImage: "url(".concat(bgImage.source_url, ")")
        };
      }

      var onUpdateImage = function onUpdateImage(image) {
        setAttributes({
          bgImageId: image.id
        });
      };

      var onRemoveImage = function onRemoveImage() {
        setAttributes({
          bgImageId: undefined
        });
      };

      return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
        title: __('Background settings', 'image-selector-example'),
        initialOpen: true
      }, wp.element.createElement("div", {
        className: "wp-block-image-selector-example-image"
      }, wp.element.createElement(MediaUploadCheck, {
        fallback: instructions
      }, wp.element.createElement(MediaUpload, {
        title: __('Background image', 'image-selector-example'),
        onSelect: onUpdateImage,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: bgImageId,
        render: function render(_ref) {
          var open = _ref.open;
          return wp.element.createElement(Button, {
            className: !bgImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
            onClick: open
          }, !bgImageId && __('Set background image', 'image-selector-example'), !!bgImageId && !bgImage && wp.element.createElement(Spinner, null), !!bgImageId && bgImage && wp.element.createElement(ResponsiveWrapper, {
            naturalWidth: bgImage.media_details.width,
            naturalHeight: bgImage.media_details.height
          }, wp.element.createElement("img", {
            src: bgImage.source_url,
            alt: __('Background image', 'image-selector-example')
          })));
        }
      })), !!bgImageId && bgImage && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(MediaUpload, {
        title: __('Background image', 'image-selector-example'),
        onSelect: onUpdateImage,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: bgImageId,
        render: function render(_ref2) {
          var open = _ref2.open;
          return wp.element.createElement(Button, {
            onClick: open,
            isDefault: true,
            isLarge: true
          }, __('Replace background image', 'image-selector-example'));
        }
      })), !!bgImageId && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Button, {
        onClick: onRemoveImage,
        isLink: true,
        isDestructive: true
      }, __('Remove background image', 'image-selector-example')))))), wp.element.createElement("div", {
        className: className,
        style: styles
      }, image.id, wp.element.createElement(InnerBlocks, null)));
    }
  }]);

  return ImageSelectorEdit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose(withSelect(function (select, props) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var bgImageId = props.attributes.bgImageId;
  return {
    bgImage: bgImageId ? getMedia(bgImageId) : null
  };
}))(ImageSelectorEdit));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJlZGl0b3IiLCJJbnNwZWN0b3JDb250cm9scyIsIklubmVyQmxvY2tzIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsImNvbXBvbmVudHMiLCJQYW5lbEJvZHkiLCJQYW5lbFJvdyIsIlRleHRDb250cm9sIiwiUmFuZ2VDb250cm9sIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJSaWNoVGV4dCIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5Iiwia2V5d29yZHMiLCJzdXBwb3J0cyIsImFsaWduIiwiYXR0cmlidXRlcyIsImJnSW1hZ2VJZCIsInR5cGUiLCJlZGl0Iiwic2F2ZSIsImVsZW1lbnQiLCJDb21wb25lbnQiLCJGcmFnbWVudCIsIk1lZGlhVXBsb2FkIiwiTWVkaWFVcGxvYWRDaGVjayIsIkJ1dHRvbiIsIlJlc3BvbnNpdmVXcmFwcGVyIiwiU3Bpbm5lciIsImNvbXBvc2UiLCJ3aXRoU2VsZWN0IiwiZGF0YSIsIkltYWdlU2VsZWN0b3JFZGl0IiwicHJvcHMiLCJzZXRBdHRyaWJ1dGVzIiwiYmdJbWFnZSIsImNsYXNzTmFtZSIsImluc3RydWN0aW9ucyIsInN0eWxlcyIsInNvdXJjZV91cmwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJvblVwZGF0ZUltYWdlIiwiaW1hZ2UiLCJpZCIsIm9uUmVtb3ZlSW1hZ2UiLCJ1bmRlZmluZWQiLCJvcGVuIiwibWVkaWFfZGV0YWlscyIsIndpZHRoIiwiaGVpZ2h0Iiwic2VsZWN0IiwiZ2V0TWVkaWEiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7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QXhDO0FBQXlDLHFCQUFhO0FBQXRELFNBQ0dqRCxFQUFFLENBQUUseUJBQUYsRUFBNkIsd0JBQTdCLENBREwsQ0FERCxDQXpDRCxDQUpELENBREQsQ0FERCxFQXdEQztBQUNDLGlCQUFTLEVBQUd5QyxTQURiO0FBRUMsYUFBSyxFQUFHRTtBQUZULFNBR0dJLEtBQUssQ0FBQ0MsRUFIVCxFQUlDLHlCQUFDLFdBQUQsT0FKRCxDQXhERCxDQUREO0FBaUVBOzs7O0VBeEY4QnJCLFM7O0FBMkZqQk8sc0VBQU8sQ0FDckJDLFVBQVUsQ0FBRSxVQUFFb0IsTUFBRixFQUFVakIsS0FBVixFQUFxQjtBQUFBLGdCQUNYaUIsTUFBTSxDQUFFLE1BQUYsQ0FESztBQUFBLE1BQ3hCQyxRQUR3QixXQUN4QkEsUUFEd0I7O0FBQUEsTUFFeEJsQyxTQUZ3QixHQUVWZ0IsS0FBSyxDQUFDakIsVUFGSSxDQUV4QkMsU0FGd0I7QUFJaEMsU0FBTztBQUNOa0IsV0FBTyxFQUFFbEIsU0FBUyxHQUFHa0MsUUFBUSxDQUFFbEMsU0FBRixDQUFYLEdBQTJCO0FBRHZDLEdBQVA7QUFHQSxDQVBTLENBRFcsQ0FBUCxDQVNaZSxpQkFUWSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUFBIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzLCBJbm5lckJsb2NrcyB9ID0gd3AuZWRpdG9yO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAndGV4dCcgXTtcblxuY29uc3QgeyBQYW5lbEJvZHksIFBhbmVsUm93LCBUZXh0Q29udHJvbCwgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5cbmNvbnN0IHtcblx0UmljaFRleHQsXG59ID0gd3AuZWRpdG9yO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFxuXHRcInBkZmpzYmxvY2svcGRmanMtZW1iZWRcIixcblx0e1xuXHRcdHRpdGxlOiBfXyggJ0VtYmVkIFBERi5qcyBWaWV3ZXInLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScgKSxcblx0XHRpY29uOiAnZm9ybWF0LWltYWdlJyxcblx0XHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdFx0a2V5d29yZHM6IFtcblx0XHRcdF9fKCAnSW1hZ2UgU2VsZWN0b3InLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScgKSxcblx0XHRdLFxuXG5cdFx0c3VwcG9ydHM6IHtcblx0XHRcdGFsaWduOiBbICdmdWxsJyBdLFxuXHRcdH0sXG5cblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRiZ0ltYWdlSWQ6IHtcblx0XHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHR9LFxuXHRcdH0sXG5cblx0XHRlZGl0LFxuXG5cdFx0c2F2ZSgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG5cdFx0XHQpO1xuXHRcdH0sXG5cdH0gKTtcbiIsIi8vIGVkaXQuanNcblxuLy8gTG9hZCBkZXBlbmRlbmNpZXNcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzLCBJbm5lckJsb2NrcywgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2sgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgUGFuZWxCb2R5LCBCdXR0b24sIFJlc3BvbnNpdmVXcmFwcGVyLCBTcGlubmVyIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF07XG5cbmNsYXNzIEltYWdlU2VsZWN0b3JFZGl0IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcywgYmdJbWFnZSwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgYmdJbWFnZUlkIH0gPSBhdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IGluc3RydWN0aW9ucyA9IDxwPnsgX18oICdUbyBlZGl0IHRoZSBiYWNrZ3JvdW5kIGltYWdlLCB5b3UgbmVlZCBwZXJtaXNzaW9uIHRvIHVwbG9hZCBtZWRpYS4nLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScgKSB9PC9wPjtcblxuXHRcdGxldCBzdHlsZXMgPSB7fTtcblx0XHRpZiAoIGJnSW1hZ2UgJiYgYmdJbWFnZS5zb3VyY2VfdXJsICkge1xuXHRcdFx0c3R5bGVzID0geyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsgYmdJbWFnZS5zb3VyY2VfdXJsIH0pYCB9O1xuXHRcdH1cblxuXHRcdGNvbnN0IG9uVXBkYXRlSW1hZ2UgPSAoIGltYWdlICkgPT4ge1xuXHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRiZ0ltYWdlSWQ6IGltYWdlLmlkLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblJlbW92ZUltYWdlID0gKCkgPT4ge1xuXHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRiZ0ltYWdlSWQ6IHVuZGVmaW5lZCxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEluc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHRcdHRpdGxlPXsgX18oICdCYWNrZ3JvdW5kIHNldHRpbmdzJywgJ2ltYWdlLXNlbGVjdG9yLWV4YW1wbGUnICkgfVxuXHRcdFx0XHRcdFx0aW5pdGlhbE9wZW49eyB0cnVlIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLWltYWdlLXNlbGVjdG9yLWV4YW1wbGUtaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2sgZmFsbGJhY2s9eyBpbnN0cnVjdGlvbnMgfT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXsgX18oICdCYWNrZ3JvdW5kIGltYWdlJywgJ2ltYWdlLXNlbGVjdG9yLWV4YW1wbGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBvblVwZGF0ZUltYWdlIH1cblx0XHRcdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBiZ0ltYWdlSWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17ICEgYmdJbWFnZUlkID8gJ2VkaXRvci1wb3N0LWZlYXR1cmVkLWltYWdlX190b2dnbGUnIDogJ2VkaXRvci1wb3N0LWZlYXR1cmVkLWltYWdlX19wcmV2aWV3JyB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ICEgYmdJbWFnZUlkICYmICggX18oICdTZXQgYmFja2dyb3VuZCBpbWFnZScsICdpbWFnZS1zZWxlY3Rvci1leGFtcGxlJyApICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgISEgYmdJbWFnZUlkICYmICEgYmdJbWFnZSAmJiA8U3Bpbm5lciAvPiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyAhISBiZ0ltYWdlSWQgJiYgYmdJbWFnZSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZXNwb25zaXZlV3JhcHBlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmF0dXJhbFdpZHRoPXsgYmdJbWFnZS5tZWRpYV9kZXRhaWxzLndpZHRoIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hdHVyYWxIZWlnaHQ9eyBiZ0ltYWdlLm1lZGlhX2RldGFpbHMuaGVpZ2h0IH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17IGJnSW1hZ2Uuc291cmNlX3VybCB9IGFsdD17IF9fKCAnQmFja2dyb3VuZCBpbWFnZScsICdpbWFnZS1zZWxlY3Rvci1leGFtcGxlJyApIH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Jlc3BvbnNpdmVXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdHsgISEgYmdJbWFnZUlkICYmIGJnSW1hZ2UgJiZcblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17IF9fKCAnQmFja2dyb3VuZCBpbWFnZScsICdpbWFnZS1zZWxlY3Rvci1leGFtcGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgb25VcGRhdGVJbWFnZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYmdJbWFnZUlkIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17IG9wZW4gfSBpc0RlZmF1bHQgaXNMYXJnZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnUmVwbGFjZSBiYWNrZ3JvdW5kIGltYWdlJywgJ2ltYWdlLXNlbGVjdG9yLWV4YW1wbGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR7ICEhIGJnSW1hZ2VJZCAmJlxuXHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eyBvblJlbW92ZUltYWdlIH0gaXNMaW5rIGlzRGVzdHJ1Y3RpdmU+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnUmVtb3ZlIGJhY2tncm91bmQgaW1hZ2UnLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc05hbWUgfVxuXHRcdFx0XHRcdHN0eWxlPXsgc3R5bGVzIH1cblx0XHRcdFx0PnsgaW1hZ2UuaWQgfVxuXHRcdFx0XHRcdDxJbm5lckJsb2NrcyAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KCAoIHNlbGVjdCwgcHJvcHMgKSA9PiB7XG5cdFx0Y29uc3QgeyBnZXRNZWRpYSB9ID0gc2VsZWN0KCAnY29yZScgKTtcblx0XHRjb25zdCB7IGJnSW1hZ2VJZCB9ID0gcHJvcHMuYXR0cmlidXRlcztcblxuXHRcdHJldHVybiB7XG5cdFx0XHRiZ0ltYWdlOiBiZ0ltYWdlSWQgPyBnZXRNZWRpYSggYmdJbWFnZUlkICkgOiBudWxsLFxuXHRcdH07XG5cdH0gKSxcbikoIEltYWdlU2VsZWN0b3JFZGl0ICk7XG4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
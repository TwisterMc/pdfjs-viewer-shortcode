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


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;
var Component = wp.element.Component;

var SaveRender = /*#__PURE__*/function (_Component) {
  _inherits(SaveRender, _Component);

  var _super = _createSuper(SaveRender);

  function SaveRender() {
    _classCallCheck(this, SaveRender);

    return _super.apply(this, arguments);
  }

  _createClass(SaveRender, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return wp.element.createElement("div", null, this.props.attributes.bgImageURL);
    }
  }]);

  return SaveRender;
}(Component);

var save = compose(withSelect(function (select, props) {
  var _select = select('core'),
      getMedia = _select.getMedia;

  var bgImageId = props.attributes.bgImageId;
  return {
    bgImage: bgImageId ? getMedia(bgImageId) : null
  };
}))(SaveRender);
registerBlockType("pdfjsblock/pdfjs-embed", {
  title: __('Embed PDF.js Viewer', 'image-selector-example'),
  icon: 'format-image',
  category: 'common',
  keywords: [__('PDF Selector', 'image-selector-example')],
  supports: {
    align: ['full']
  },
  attributes: {
    bgImageId: {
      type: 'number'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: save
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
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    ResponsiveWrapper = _wp$components.ResponsiveWrapper,
    Spinner = _wp$components.Spinner;
var compose = wp.compose.compose;
var withSelect = wp.data.withSelect;
var ALLOWED_MEDIA_TYPES = ['application/pdf'];

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
          bgImage = _this$props.bgImage;
      var bgImageId = attributes.bgImageId;
      var bgImageURL = attributes.bgImageURL;
      var instructions = wp.element.createElement("p", null, __('To edit the PDF, you need permission to upload media.', 'image-selector-example'));

      if (bgImage && bgImage.source_url) {
        setAttributes({
          bgImageURL: bgImage.source_url
        });
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
        title: __('PDF Settings', 'image-selector-example'),
        initialOpen: true
      }, wp.element.createElement("div", {
        className: "wp-block-image-selector-example-image"
      }, wp.element.createElement(MediaUploadCheck, {
        fallback: instructions
      }, wp.element.createElement(MediaUpload, {
        title: __('PDF', 'image-selector-example'),
        onSelect: onUpdateImage,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: bgImageId,
        render: function render(_ref) {
          var open = _ref.open;
          return wp.element.createElement(Button, {
            className: !bgImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
            onClick: open
          }, !bgImageId && __('Choose PDF', 'image-selector-example'), !!bgImageId && !bgImage && wp.element.createElement(Spinner, null), !!bgImageId && bgImage && wp.element.createElement(ResponsiveWrapper, {
            naturalWidth: bgImage.media_details.width,
            naturalHeight: bgImage.media_details.height
          }, wp.element.createElement("img", {
            src: bgImage.source_url,
            alt: __('PDF', 'image-selector-example')
          })));
        }
      })), !!bgImageId && bgImage && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(MediaUpload, {
        title: __('Select PDF', 'image-selector-example'),
        onSelect: onUpdateImage,
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: bgImageId,
        render: function render(_ref2) {
          var open = _ref2.open;
          return wp.element.createElement(Button, {
            onClick: open,
            isDefault: true,
            isLarge: true
          }, __('Replace PDF', 'image-selector-example'));
        }
      })), !!bgImageId && wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(Button, {
        onClick: onRemoveImage,
        isLink: true,
        isDestructive: true
      }, __('Remove PDF', 'image-selector-example')))))), wp.element.createElement("div", null, bgImageURL));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiXSwibmFtZXMiOlsiX18iLCJ3cCIsImkxOG4iLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsIndpdGhTZWxlY3QiLCJkYXRhIiwiY29tcG9zZSIsIkNvbXBvbmVudCIsImVsZW1lbnQiLCJTYXZlUmVuZGVyIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiYXR0cmlidXRlcyIsImJnSW1hZ2VVUkwiLCJzYXZlIiwic2VsZWN0IiwiZ2V0TWVkaWEiLCJiZ0ltYWdlSWQiLCJiZ0ltYWdlIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJrZXl3b3JkcyIsInN1cHBvcnRzIiwiYWxpZ24iLCJ0eXBlIiwiZWRpdCIsIkZyYWdtZW50IiwiZWRpdG9yIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJNZWRpYVVwbG9hZCIsIk1lZGlhVXBsb2FkQ2hlY2siLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiQnV0dG9uIiwiUmVzcG9uc2l2ZVdyYXBwZXIiLCJTcGlubmVyIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsIkltYWdlU2VsZWN0b3JFZGl0Iiwic2V0QXR0cmlidXRlcyIsImluc3RydWN0aW9ucyIsInNvdXJjZV91cmwiLCJvblVwZGF0ZUltYWdlIiwiaW1hZ2UiLCJpZCIsIm9uUmVtb3ZlSW1hZ2UiLCJ1bmRlZmluZWQiLCJvcGVuIiwibWVkaWFfZGV0YWlscyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QXlCLHFCQUFTLE1BQWxDO0FBQW1DLG1CQUFPO0FBQTFDLGFBQ0dqRCxFQUFFLENBQUUsYUFBRixFQUFpQix3QkFBakIsQ0FETCxDQURRO0FBQUE7QUFMVixRQURELENBMUJELEVBd0NHLENBQUMsQ0FBRW1CLFNBQUgsSUFDRix5QkFBQyxnQkFBRCxRQUNDLHlCQUFDLE1BQUQ7QUFBUSxlQUFPLEVBQUc0QixhQUFsQjtBQUFrQyxjQUFNLE1BQXhDO0FBQXlDLHFCQUFhO0FBQXRELFNBQ0cvQyxFQUFFLENBQUUsWUFBRixFQUFnQix3QkFBaEIsQ0FETCxDQURELENBekNELENBSkQsQ0FERCxDQURELEVBd0RDLHNDQUFPZSxVQUFQLENBeERELENBREQ7QUE0REE7Ozs7RUFyRjhCUCxTOztBQXdGakJELHNFQUFPLENBQ3JCRixVQUFVLENBQUUsVUFBRVksTUFBRixFQUFVSixLQUFWLEVBQXFCO0FBQUEsZ0JBQ1hJLE1BQU0sQ0FBRSxNQUFGLENBREs7QUFBQSxNQUN4QkMsUUFEd0IsV0FDeEJBLFFBRHdCOztBQUFBLE1BRXhCQyxTQUZ3QixHQUVWTixLQUFLLENBQUNDLFVBRkksQ0FFeEJLLFNBRndCO0FBSWhDLFNBQU87QUFDTkMsV0FBTyxFQUFFRCxTQUFTLEdBQUdELFFBQVEsQ0FBRUMsU0FBRixDQUFYLEdBQTJCO0FBRHZDLEdBQVA7QUFHQSxDQVBTLENBRFcsQ0FBUCxDQVNacUIsaUJBVFksQ0FBZixFOzs7Ozs7Ozs7Ozs7QUNwR0E7QUFBQSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0JztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyB3aXRoU2VsZWN0IH0gPSB3cC5kYXRhO1xuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbmNsYXNzIFNhdmVSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnQgIHtcblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2Pnt0aGlzLnByb3BzLmF0dHJpYnV0ZXMuYmdJbWFnZVVSTH08L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IHNhdmUgPSBjb21wb3NlKFxuXHR3aXRoU2VsZWN0KCAoIHNlbGVjdCwgcHJvcHMgKSA9PiB7XG5cdFx0Y29uc3QgeyBnZXRNZWRpYSB9ID0gc2VsZWN0KCAnY29yZScgKTtcblx0XHRjb25zdCB7IGJnSW1hZ2VJZCB9ID0gcHJvcHMuYXR0cmlidXRlcztcblxuXHRcdHJldHVybiB7XG5cdFx0XHRiZ0ltYWdlOiBiZ0ltYWdlSWQgPyBnZXRNZWRpYSggYmdJbWFnZUlkICkgOiBudWxsLFxuXHRcdH07XG5cdH0gKSxcbikoIFNhdmVSZW5kZXIgKTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoXG5cdFwicGRmanNibG9jay9wZGZqcy1lbWJlZFwiLFxuXHR7XG5cdFx0dGl0bGU6IF9fKCAnRW1iZWQgUERGLmpzIFZpZXdlcicsICdpbWFnZS1zZWxlY3Rvci1leGFtcGxlJyApLFxuXHRcdGljb246ICdmb3JtYXQtaW1hZ2UnLFxuXHRcdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0XHRrZXl3b3JkczogW1xuXHRcdFx0X18oICdQREYgU2VsZWN0b3InLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScgKSxcblx0XHRdLFxuXG5cdFx0c3VwcG9ydHM6IHtcblx0XHRcdGFsaWduOiBbICdmdWxsJyBdLFxuXHRcdH0sXG5cblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRiZ0ltYWdlSWQ6IHtcblx0XHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHR9LFxuXHRcdH0sXG5cblx0XHRlZGl0LFxuXG5cdFx0c2F2ZSxcblx0fSApO1xuIiwiLy8gZWRpdC5qc1xuXG4vLyBMb2FkIGRlcGVuZGVuY2llc1xuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMsIE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrIH0gPSB3cC5lZGl0b3I7XG5jb25zdCB7IFBhbmVsQm9keSwgQnV0dG9uLCBSZXNwb25zaXZlV3JhcHBlciwgU3Bpbm5lciB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2FwcGxpY2F0aW9uL3BkZicgXTtcblxuY2xhc3MgSW1hZ2VTZWxlY3RvckVkaXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzLCBiZ0ltYWdlIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IHsgYmdJbWFnZUlkIH0gPSBhdHRyaWJ1dGVzO1xuXHRcdGNvbnN0IHsgYmdJbWFnZVVSTCB9ICA9IGF0dHJpYnV0ZXM7XG5cdFx0Y29uc3QgaW5zdHJ1Y3Rpb25zID0gPHA+eyBfXyggJ1RvIGVkaXQgdGhlIFBERiwgeW91IG5lZWQgcGVybWlzc2lvbiB0byB1cGxvYWQgbWVkaWEuJywgJ2ltYWdlLXNlbGVjdG9yLWV4YW1wbGUnICkgfTwvcD47XG5cblx0XHRpZiAoIGJnSW1hZ2UgJiYgYmdJbWFnZS5zb3VyY2VfdXJsICkge1xuXHRcdFx0c2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRiZ0ltYWdlVVJMOiBiZ0ltYWdlLnNvdXJjZV91cmxcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRjb25zdCBvblVwZGF0ZUltYWdlID0gKCBpbWFnZSApID0+IHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0YmdJbWFnZUlkOiBpbWFnZS5pZCxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25SZW1vdmVJbWFnZSA9ICgpID0+IHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0YmdJbWFnZUlkOiB1bmRlZmluZWQsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHRcdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdFx0XHR0aXRsZT17IF9fKCAnUERGIFNldHRpbmdzJywgJ2ltYWdlLXNlbGVjdG9yLWV4YW1wbGUnICkgfVxuXHRcdFx0XHRcdFx0aW5pdGlhbE9wZW49eyB0cnVlIH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLWltYWdlLXNlbGVjdG9yLWV4YW1wbGUtaW1hZ2VcIj5cblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2sgZmFsbGJhY2s9eyBpbnN0cnVjdGlvbnMgfT5cblx0XHRcdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPXsgX18oICdQREYnLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG9uVXBkYXRlSW1hZ2UgfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGJnSW1hZ2VJZCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXsgISBiZ0ltYWdlSWQgPyAnZWRpdG9yLXBvc3QtZmVhdHVyZWQtaW1hZ2VfX3RvZ2dsZScgOiAnZWRpdG9yLXBvc3QtZmVhdHVyZWQtaW1hZ2VfX3ByZXZpZXcnIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgISBiZ0ltYWdlSWQgJiYgKCBfXyggJ0Nob29zZSBQREYnLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScgKSApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ICEhIGJnSW1hZ2VJZCAmJiAhIGJnSW1hZ2UgJiYgPFNwaW5uZXIgLz4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgISEgYmdJbWFnZUlkICYmIGJnSW1hZ2UgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVzcG9uc2l2ZVdyYXBwZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hdHVyYWxXaWR0aD17IGJnSW1hZ2UubWVkaWFfZGV0YWlscy53aWR0aCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYXR1cmFsSGVpZ2h0PXsgYmdJbWFnZS5tZWRpYV9kZXRhaWxzLmhlaWdodCB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9eyBiZ0ltYWdlLnNvdXJjZV91cmwgfSBhbHQ9eyBfXyggJ1BERicsICdpbWFnZS1zZWxlY3Rvci1leGFtcGxlJyApIH0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1Jlc3BvbnNpdmVXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdHsgISEgYmdJbWFnZUlkICYmIGJnSW1hZ2UgJiZcblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT17IF9fKCAnU2VsZWN0IFBERicsICdpbWFnZS1zZWxlY3Rvci1leGFtcGxlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgb25VcGRhdGVJbWFnZSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgYmdJbWFnZUlkIH1cblx0XHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17IG9wZW4gfSBpc0RlZmF1bHQgaXNMYXJnZT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnUmVwbGFjZSBQREYnLCAnaW1hZ2Utc2VsZWN0b3ItZXhhbXBsZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHsgISEgYmdJbWFnZUlkICYmXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17IG9uUmVtb3ZlSW1hZ2UgfSBpc0xpbmsgaXNEZXN0cnVjdGl2ZT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgX18oICdSZW1vdmUgUERGJywgJ2ltYWdlLXNlbGVjdG9yLWV4YW1wbGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPlxuXHRcdFx0XHQ8ZGl2PnsgYmdJbWFnZVVSTCB9PC9kaXY+XG5cdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcblx0d2l0aFNlbGVjdCggKCBzZWxlY3QsIHByb3BzICkgPT4ge1xuXHRcdGNvbnN0IHsgZ2V0TWVkaWEgfSA9IHNlbGVjdCggJ2NvcmUnICk7XG5cdFx0Y29uc3QgeyBiZ0ltYWdlSWQgfSA9IHByb3BzLmF0dHJpYnV0ZXM7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YmdJbWFnZTogYmdJbWFnZUlkID8gZ2V0TWVkaWEoIGJnSW1hZ2VJZCApIDogbnVsbCxcblx0XHR9O1xuXHR9ICksXG4pKCBJbWFnZVNlbGVjdG9yRWRpdCApO1xuIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
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
/*! no static exports found */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var MediaUpload = wp.editor.MediaUpload;
var Button = wp.components.Button;
registerBlockType("pdfjsblock/pdfjs-embed", {
  title: __('Embed PDF.js Viewer', 'image-selector-example'),
  icon: 'format-image',
  category: 'common',
  attributes: {
    imageURL: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: 'img'
    },
    imgID: {
      type: 'number'
    },
    imgAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: 'img'
    }
  },
  keywords: [__('PDF Selector', 'image-selector-example')],
  edit: function edit(props) {
    var onFileSelect = function onFileSelect(img) {
      props.setAttributes({
        imageURL: img.url,
        imgID: img.id,
        imgAlt: img.alt
      });
    };

    var onRemoveImg = function onRemoveImg() {
      props.setAttributes({
        imageURL: null,
        imgID: null,
        imgAlt: null
      });
    };

    return wp.element.createElement("div", {
      className: "media-wrapper"
    }, props.attributes.imageURL ? wp.element.createElement("div", {
      className: "img-upload-wrapper"
    }, wp.element.createElement("img", {
      src: props.attributes.imageURL,
      alt: props.attributes.imgAlt
    }), props.isSelected ? wp.element.createElement(Button, {
      className: "button",
      onClick: onRemoveImg
    }, "Remove") : null) : wp.element.createElement(MediaUpload, {
      onSelect: onFileSelect,
      value: props.attributes.imgID,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(Button, {
          className: "button",
          onClick: open
        }, "Open Library");
      }
    }));
  },
  save: function save(props) {
    return wp.element.createElement("div", {
      classNme: "img-wrapper"
    }, wp.element.createElement("img", {
      src: props.attributes.imageURL,
      alt: props.attributes.imgAlt
    }));
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
/* harmony import */ var _block_block__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_block_block__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiTWVkaWFVcGxvYWQiLCJlZGl0b3IiLCJCdXR0b24iLCJjb21wb25lbnRzIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwiaW1hZ2VVUkwiLCJ0eXBlIiwic291cmNlIiwiYXR0cmlidXRlIiwic2VsZWN0b3IiLCJpbWdJRCIsImltZ0FsdCIsImtleXdvcmRzIiwiZWRpdCIsInByb3BzIiwib25GaWxlU2VsZWN0IiwiaW1nIiwic2V0QXR0cmlidXRlcyIsInVybCIsImlkIiwiYWx0Iiwib25SZW1vdmVJbWciLCJpc1NlbGVjdGVkIiwib3BlbiIsInNhdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFD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OiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBNZWRpYVVwbG9hZCB9ICAgICAgID0gd3AuZWRpdG9yO1xuY29uc3QgeyBCdXR0b24gfSAgICAgICAgICAgID0gd3AuY29tcG9uZW50cztcblxucmVnaXN0ZXJCbG9ja1R5cGUoXG5cdFwicGRmanNibG9jay9wZGZqcy1lbWJlZFwiLFxuXHR7XG5cdFx0dGl0bGU6IF9fKCAnRW1iZWQgUERGLmpzIFZpZXdlcicsICdpbWFnZS1zZWxlY3Rvci1leGFtcGxlJyApLFxuXHRcdGljb246ICdmb3JtYXQtaW1hZ2UnLFxuXHRcdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0XHRhdHRyaWJ1dGVzOiB7XG5cdFx0XHRpbWFnZVVSTDoge1xuXHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0c291cmNlOiAnYXR0cmlidXRlJyxcblx0XHRcdFx0YXR0cmlidXRlOiAnc3JjJyxcblx0XHRcdFx0c2VsZWN0b3I6ICdpbWcnLFxuXHRcdFx0fSxcblx0XHRcdGltZ0lEOiB7XG5cdFx0XHRcdHR5cGU6ICdudW1iZXInXG5cdFx0XHR9LFxuXHRcdFx0aW1nQWx0OiB7XG5cdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRzb3VyY2U6ICdhdHRyaWJ1dGUnLFxuXHRcdFx0XHRhdHRyaWJ1dGU6ICdhbHQnLFxuXHRcdFx0XHRzZWxlY3RvcjogJ2ltZydcblx0XHRcdH1cblx0XHR9LFxuXHRcdGtleXdvcmRzOiBbXG5cdFx0XHRfXyggJ1BERiBTZWxlY3RvcicsICdpbWFnZS1zZWxlY3Rvci1leGFtcGxlJyApLFxuXHRcdF0sXG5cblx0XHRlZGl0OiBmdW5jdGlvbiAoIHByb3BzICkge1xuXG5cdFx0XHRjb25zdCBvbkZpbGVTZWxlY3QgPSAoaW1nKSA9PiB7XG5cdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdGltYWdlVVJMOiBpbWcudXJsLFxuXHRcdFx0XHRcdGltZ0lEOiBpbWcuaWQsXG5cdFx0XHRcdFx0aW1nQWx0OiBpbWcuYWx0LFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgb25SZW1vdmVJbWcgPSAoKSA9PiB7XG5cdFx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoe1xuXHRcdFx0XHRcdGltYWdlVVJMOiBudWxsLFxuXHRcdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRcdGltZ0FsdDogbnVsbCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtd3JhcHBlclwiPlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdChwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMKSA/IChcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWctdXBsb2FkLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3Byb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkx9XG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9e3Byb3BzLmF0dHJpYnV0ZXMuaW1nQWx0fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0eyhwcm9wcy5pc1NlbGVjdGVkKSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17b25SZW1vdmVJbWd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+UmVtb3ZlPC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IG51bGwgfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXtvbkZpbGVTZWxlY3R9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3Byb3BzLmF0dHJpYnV0ZXMuaW1nSUR9XG5cdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsoe29wZW59KSA9PlxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvcGVufVxuXHRcdFx0XHRcdFx0XHRcdFx0Pk9wZW4gTGlicmFyeTwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpXG5cdFx0fSxcblxuXHRcdHNhdmU6IGZ1bmN0aW9uICggcHJvcHMgKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTm1lPVwiaW1nLXdyYXBwZXJcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9e3Byb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkx9XG5cdFx0XHRcdFx0XHRhbHQ9e3Byb3BzLmF0dHJpYnV0ZXMuaW1nQWx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblx0fSApO1xuIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
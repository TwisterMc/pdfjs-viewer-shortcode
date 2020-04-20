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
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    PanelColorSettings = _wp$editor.PanelColorSettings;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    RangeControl = _wp$components.RangeControl;
registerBlockType("pdfjsblock/pdfjs-textarea", {
  title: "PDF JS Text Area",
  icon: "editor-paragraph",
  category: "layout",
  attributes: {
    content: {
      type: "string"
    },
    alignment: {
      type: "string",
      "default": "none"
    },
    backgroundColor: {
      type: "string"
    },
    textColor: {
      type: "string"
    },
    textSize: {
      type: "number"
    },
    className: {
      type: "string",
      "default": ""
    }
  },
  edit: function edit(props) {
    var setAttributes = props.setAttributes;
    var _props$attributes = props.attributes,
        content = _props$attributes.content,
        alignment = _props$attributes.alignment,
        backgroundColor = _props$attributes.backgroundColor,
        textColor = _props$attributes.textColor,
        textSize = _props$attributes.textSize,
        className = _props$attributes.className;
    console.log(alignment); // return (
    // 	<div
    // 		style={{
    // 			textAlign: alignment,
    // 			backgroundColor: backgroundColor,
    // 			color: textColor,
    // 			fontSize: textSize ? `${textSize}px` : null
    // 		}}
    // 	>
    // 		{!!focus && (
    // 			<BlockControls>
    // 				<AlignmentToolbar
    // 					value={content}
    // 					onChange={alignment => setAttributes({ alignment })}
    // 				/>
    // 			</BlockControls>
    // 		)}
    // 		<InspectorControls>
    // 			<PanelBody title={__("Block Settings", "pdfjsblock")}>
    // 				<PanelColorSettings
    // 					title={__("Background Color", "pdfjsblock")}
    // 					colorSettings={[
    // 						{
    // 							value: backgroundColor,
    // 							onChange: backgroundColor =>
    // 								setAttributes({ backgroundColor: backgroundColor }),
    // 							label: __("Background Color")
    // 						}
    // 					]}
    // 				/>
    //
    // 				<PanelColorSettings
    // 					title={__("Text Color", "pdfjsblock")}
    // 					colorSettings={[
    // 						{
    // 							value: textColor,
    // 							onChange: textColor =>
    // 								setAttributes({ textColor: textColor }),
    // 							label: __("Text Color")
    // 						}
    // 					]}
    // 				/>
    // 				<PanelBody title={__("Sizes", "pdfjsblock")}>
    // 					<PanelRow>
    // 						<RangeControl
    // 							label={__("Text", "pdfjsblock")}
    // 							value={textSize}
    // 							min="8"
    // 							max="50"
    // 							onChange={textSize => setAttributes({ textSize: textSize })}
    // 						/>
    // 					</PanelRow>
    // 				</PanelBody>
    // 			</PanelBody>
    // 		</InspectorControls>
    // 		<RichText
    // 			tagName="div"
    // 			value={content}
    // 			placeholder="Your content here..."
    // 			keepPlaceholderOnFocus={true}
    // 			onChange={content => setAttributes({ content })}
    // 			className={"pdfjs-text-area" + className ? " " + className : ""}
    // 		/>
    // 	</div>
    // );
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        content = _props$attributes2.content,
        alignment = _props$attributes2.alignment,
        backgroundColor = _props$attributes2.backgroundColor,
        _props$attributes2$te = _props$attributes2.textColor,
        textColor = _props$attributes2$te === void 0 ? "white" : _props$attributes2$te,
        textSize = _props$attributes2.textSize,
        className = _props$attributes2.className; // return (
    // 	<div
    // 		style={{
    // 			textAlign: alignment,
    // 			backgroundColor: backgroundColor,
    // 			color: textColor,
    // 			fontSize: textSize ? `${textSize}px` : null
    // 		}}
    // 	>
    // 		<RichText.Content
    // 			className={"pdfjs-text-area" + className ? " " + className : ""}
    // 			tagName="div"
    // 			value={content}
    // 		/>
    // 	</div>
    // );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiZWRpdG9yIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJSaWNoVGV4dCIsIkFsaWdubWVudFRvb2xiYXIiLCJCbG9ja0NvbnRyb2xzIiwiUGFuZWxDb2xvclNldHRpbmdzIiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlBhbmVsUm93IiwiVGV4dENvbnRyb2wiLCJSYW5nZUNvbnRyb2wiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJjb250ZW50IiwidHlwZSIsImFsaWdubWVudCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciIsInRleHRTaXplIiwiY2xhc3NOYW1lIiwiZWRpdCIsInByb3BzIiwic2V0QXR0cmlidXRlcyIsImNvbnNvbGUiLCJsb2ciLCJzYXZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEk2QyxDQUE5QixDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUEiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcblxuY29uc3Qge1xuXHRJbnNwZWN0b3JDb250cm9scyxcblx0UmljaFRleHQsXG5cdEFsaWdubWVudFRvb2xiYXIsXG5cdEJsb2NrQ29udHJvbHMsXG5cdFBhbmVsQ29sb3JTZXR0aW5nc1xufSA9IHdwLmVkaXRvcjtcblxuY29uc3QgeyBQYW5lbEJvZHksIFBhbmVsUm93LCBUZXh0Q29udHJvbCwgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5yZWdpc3RlckJsb2NrVHlwZShcInBkZmpzYmxvY2svcGRmanMtdGV4dGFyZWFcIiwge1xuXHR0aXRsZTogXCJQREYgSlMgVGV4dCBBcmVhXCIsXG5cdGljb246IFwiZWRpdG9yLXBhcmFncmFwaFwiLFxuXHRjYXRlZ29yeTogXCJsYXlvdXRcIixcblx0YXR0cmlidXRlczoge1xuXHRcdGNvbnRlbnQ6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCJcblx0XHR9LFxuXHRcdGFsaWdubWVudDoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGRlZmF1bHQ6IFwibm9uZVwiXG5cdFx0fSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHtcblx0XHRcdHR5cGU6IFwic3RyaW5nXCJcblx0XHR9LFxuXHRcdHRleHRDb2xvcjoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIlxuXHRcdH0sXG5cdFx0dGV4dFNpemU6IHtcblx0XHRcdHR5cGU6IFwibnVtYmVyXCJcblx0XHR9LFxuXHRcdGNsYXNzTmFtZToge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGRlZmF1bHQ6IFwiXCJcblx0XHR9XG5cdH0sXG5cdGVkaXQ6IGZ1bmN0aW9uKHByb3BzKSB7XG5cdFx0Y29uc3QgeyBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcblx0XHRjb25zdCB7XG5cdFx0XHRjb250ZW50LFxuXHRcdFx0YWxpZ25tZW50LFxuXHRcdFx0YmFja2dyb3VuZENvbG9yLFxuXHRcdFx0dGV4dENvbG9yLFxuXHRcdFx0dGV4dFNpemUsXG5cdFx0XHRjbGFzc05hbWVcblx0XHR9ID0gcHJvcHMuYXR0cmlidXRlcztcblxuXHRcdGNvbnNvbGUubG9nKGFsaWdubWVudCk7XG5cblx0XHQvLyByZXR1cm4gKFxuXHRcdC8vIFx0PGRpdlxuXHRcdC8vIFx0XHRzdHlsZT17e1xuXHRcdC8vIFx0XHRcdHRleHRBbGlnbjogYWxpZ25tZW50LFxuXHRcdC8vIFx0XHRcdGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuXHRcdC8vIFx0XHRcdGNvbG9yOiB0ZXh0Q29sb3IsXG5cdFx0Ly8gXHRcdFx0Zm9udFNpemU6IHRleHRTaXplID8gYCR7dGV4dFNpemV9cHhgIDogbnVsbFxuXHRcdC8vIFx0XHR9fVxuXHRcdC8vIFx0PlxuXHRcdC8vIFx0XHR7ISFmb2N1cyAmJiAoXG5cdFx0Ly8gXHRcdFx0PEJsb2NrQ29udHJvbHM+XG5cdFx0Ly8gXHRcdFx0XHQ8QWxpZ25tZW50VG9vbGJhclxuXHRcdC8vIFx0XHRcdFx0XHR2YWx1ZT17Y29udGVudH1cblx0XHQvLyBcdFx0XHRcdFx0b25DaGFuZ2U9e2FsaWdubWVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYWxpZ25tZW50IH0pfVxuXHRcdC8vIFx0XHRcdFx0Lz5cblx0XHQvLyBcdFx0XHQ8L0Jsb2NrQ29udHJvbHM+XG5cdFx0Ly8gXHRcdCl9XG5cdFx0Ly8gXHRcdDxJbnNwZWN0b3JDb250cm9scz5cblx0XHQvLyBcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXtfXyhcIkJsb2NrIFNldHRpbmdzXCIsIFwicGRmanNibG9ja1wiKX0+XG5cdFx0Ly8gXHRcdFx0XHQ8UGFuZWxDb2xvclNldHRpbmdzXG5cdFx0Ly8gXHRcdFx0XHRcdHRpdGxlPXtfXyhcIkJhY2tncm91bmQgQ29sb3JcIiwgXCJwZGZqc2Jsb2NrXCIpfVxuXHRcdC8vIFx0XHRcdFx0XHRjb2xvclNldHRpbmdzPXtbXG5cdFx0Ly8gXHRcdFx0XHRcdFx0e1xuXHRcdC8vIFx0XHRcdFx0XHRcdFx0dmFsdWU6IGJhY2tncm91bmRDb2xvcixcblx0XHQvLyBcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBiYWNrZ3JvdW5kQ29sb3IgPT5cblx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yIH0pLFxuXHRcdC8vIFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKFwiQmFja2dyb3VuZCBDb2xvclwiKVxuXHRcdC8vIFx0XHRcdFx0XHRcdH1cblx0XHQvLyBcdFx0XHRcdFx0XX1cblx0XHQvLyBcdFx0XHRcdC8+XG5cdFx0Ly9cblx0XHQvLyBcdFx0XHRcdDxQYW5lbENvbG9yU2V0dGluZ3Ncblx0XHQvLyBcdFx0XHRcdFx0dGl0bGU9e19fKFwiVGV4dCBDb2xvclwiLCBcInBkZmpzYmxvY2tcIil9XG5cdFx0Ly8gXHRcdFx0XHRcdGNvbG9yU2V0dGluZ3M9e1tcblx0XHQvLyBcdFx0XHRcdFx0XHR7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0XHR2YWx1ZTogdGV4dENvbG9yLFxuXHRcdC8vIFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IHRleHRDb2xvciA9PlxuXHRcdC8vIFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgdGV4dENvbG9yOiB0ZXh0Q29sb3IgfSksXG5cdFx0Ly8gXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oXCJUZXh0IENvbG9yXCIpXG5cdFx0Ly8gXHRcdFx0XHRcdFx0fVxuXHRcdC8vIFx0XHRcdFx0XHRdfVxuXHRcdC8vIFx0XHRcdFx0Lz5cblx0XHQvLyBcdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKFwiU2l6ZXNcIiwgXCJwZGZqc2Jsb2NrXCIpfT5cblx0XHQvLyBcdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdC8vIFx0XHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHQvLyBcdFx0XHRcdFx0XHRcdGxhYmVsPXtfXyhcIlRleHRcIiwgXCJwZGZqc2Jsb2NrXCIpfVxuXHRcdC8vIFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RleHRTaXplfVxuXHRcdC8vIFx0XHRcdFx0XHRcdFx0bWluPVwiOFwiXG5cdFx0Ly8gXHRcdFx0XHRcdFx0XHRtYXg9XCI1MFwiXG5cdFx0Ly8gXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGV4dFNpemUgPT4gc2V0QXR0cmlidXRlcyh7IHRleHRTaXplOiB0ZXh0U2l6ZSB9KX1cblx0XHQvLyBcdFx0XHRcdFx0XHQvPlxuXHRcdC8vIFx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdC8vIFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0Ly8gXHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0Ly8gXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0Ly8gXHRcdDxSaWNoVGV4dFxuXHRcdC8vIFx0XHRcdHRhZ05hbWU9XCJkaXZcIlxuXHRcdC8vIFx0XHRcdHZhbHVlPXtjb250ZW50fVxuXHRcdC8vIFx0XHRcdHBsYWNlaG9sZGVyPVwiWW91ciBjb250ZW50IGhlcmUuLi5cIlxuXHRcdC8vIFx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXM9e3RydWV9XG5cdFx0Ly8gXHRcdFx0b25DaGFuZ2U9e2NvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQgfSl9XG5cdFx0Ly8gXHRcdFx0Y2xhc3NOYW1lPXtcInBkZmpzLXRleHQtYXJlYVwiICsgY2xhc3NOYW1lID8gXCIgXCIgKyBjbGFzc05hbWUgOiBcIlwifVxuXHRcdC8vIFx0XHQvPlxuXHRcdC8vIFx0PC9kaXY+XG5cdFx0Ly8gKTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbihwcm9wcykge1xuXHRcdGNvbnN0IHtcblx0XHRcdGNvbnRlbnQsXG5cdFx0XHRhbGlnbm1lbnQsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHR0ZXh0Q29sb3IgPSBcIndoaXRlXCIsXG5cdFx0XHR0ZXh0U2l6ZSxcblx0XHRcdGNsYXNzTmFtZVxuXHRcdH0gPSBwcm9wcy5hdHRyaWJ1dGVzO1xuXG5cdFx0Ly8gcmV0dXJuIChcblx0XHQvLyBcdDxkaXZcblx0XHQvLyBcdFx0c3R5bGU9e3tcblx0XHQvLyBcdFx0XHR0ZXh0QWxpZ246IGFsaWdubWVudCxcblx0XHQvLyBcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcblx0XHQvLyBcdFx0XHRjb2xvcjogdGV4dENvbG9yLFxuXHRcdC8vIFx0XHRcdGZvbnRTaXplOiB0ZXh0U2l6ZSA/IGAke3RleHRTaXplfXB4YCA6IG51bGxcblx0XHQvLyBcdFx0fX1cblx0XHQvLyBcdD5cblx0XHQvLyBcdFx0PFJpY2hUZXh0LkNvbnRlbnRcblx0XHQvLyBcdFx0XHRjbGFzc05hbWU9e1wicGRmanMtdGV4dC1hcmVhXCIgKyBjbGFzc05hbWUgPyBcIiBcIiArIGNsYXNzTmFtZSA6IFwiXCJ9XG5cdFx0Ly8gXHRcdFx0dGFnTmFtZT1cImRpdlwiXG5cdFx0Ly8gXHRcdFx0dmFsdWU9e2NvbnRlbnR9XG5cdFx0Ly8gXHRcdC8+XG5cdFx0Ly8gXHQ8L2Rpdj5cblx0XHQvLyApO1xuXHR9XG59KTtcbiIsImltcG9ydCAnLi9ibG9jay9ibG9jayc7XG4iXSwic291cmNlUm9vdCI6IiJ9
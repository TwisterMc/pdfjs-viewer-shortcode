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
  RangeControl = _wp$components.RangeControl,
  SelectControl = _wp$components.SelectControl,
  TextControl = _wp$components.TextControl;
var defaultHeight = 800;
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
      "default": !!window.pdfjs_options.pdfjs_download_button
    },
    showPrint: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_print_button
    },
    showFullscreen: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_fullscreen_link
    },
    openFullscreen: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_fullscreen_link_target
    },
    fullscreenText: {
      type: 'string',
      "default": window.pdfjs_options.pdfjs_fullscreen_link_text ? window.pdfjs_options.pdfjs_fullscreen_link_text : 'View Fullscreen'
    },
    viewerHeight: {
      type: 'number',
      "default": window.pdfjs_options.pdfjs_embed_height ? Number(window.pdfjs_options.pdfjs_embed_height) : 800
    },
    viewerWidth: {
      type: 'number',
      "default": window.pdfjs_options.pdfjs_embed_width ? Number(window.pdfjs_options.pdfjs_embed_width) : 0
    },
    viewerScale: {
      type: 'string',
      "default": window.pdfjs_options.pdfjs_viewer_scale ? window.pdfjs_options.pdfjs_viewer_scale : 'auto'
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
    var onToggleOpenFullscreen = function onToggleOpenFullscreen(value) {
      props.setAttributes({
        openFullscreen: value
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
    var onFullscreenTextChange = function onFullscreenTextChange(value) {
      value = value.replace(/(<([^>]+)>)/gi, "");
      props.setAttributes({
        fullscreenText: value
      });
    };
    return [wp.element.createElement(InspectorControls, {
      key: "i1"
    }, wp.element.createElement(PanelBody, {
      title: __('PDF.js Options', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Save Option', 'pdfjs-viewer-shortcode'),
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
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Open Fullscreen in new tab?', 'pdfjs-viewer-shortcode'),
      help: props.attributes.openFullscreen ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.openFullscreen,
      onChange: onToggleOpenFullscreen
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: "Fullscreen Text",
      value: props.attributes.fullscreenText,
      onChange: onFullscreenTextChange
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
      help: "By default 0 will be 100%.",
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
    }, wp.element.createElement("div", {
      className: "pdfjs-upload-button-wrapper"
    }, wp.element.createElement("span", {
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
    }, "[pdfjs-viewer attachment_id=".concat(props.attributes.imgID, " url=").concat(props.attributes.imageURL, " viewer_width=").concat(props.attributes.viewerWidth !== undefined ? props.attributes.viewerWidth : defaultWidth, " viewer_height=").concat(props.attributes.viewerHeight !== undefined ? props.attributes.viewerHeight : defaultHeight, " url=").concat(props.attributes.imageURL, " download=").concat(props.attributes.showDownload.toString(), " print=").concat(props.attributes.showPrint.toString(), " fullscreen=").concat(props.attributes.showFullscreen.toString(), " fullscreen_target=").concat(props.attributes.openFullscreen.toString(), " fullscreen_text=\"").concat(props.attributes.fullscreenText, "\" zoom=").concat(props.attributes.viewerScale.toString(), "  ]"));
  }
});

/***/ }),

/***/ "./blocks/src/block/editor.scss":
/*!**************************************!*\
  !*** ./blocks/src/block/editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./blocks/src/block/editor.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

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


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./blocks/src/block/editor.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./blocks/src/block/editor.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pdfjs-wrapper .dashicons {\n  vertical-align: middle;\n  margin-right: 10px; }\n\n.pdfjs-title {\n  font-size: 16px; }\n\n.pdfjs-wrapper.components-placeholder {\n  justify-content: start; }\n\n.pdfjs-upload-button-wrapper {\n  padding: 20px 0; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzPzBlNGQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9zdHlsZS5zY3NzPzRiMTQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiX3dwJGJsb2NrRWRpdG9yIiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiX3dwJGNvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwiUGFuZWxSb3ciLCJQYW5lbEJvZHkiLCJUb2dnbGVDb250cm9sIiwiUmFuZ2VDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlRleHRDb250cm9sIiwiZGVmYXVsdEhlaWdodCIsImRlZmF1bHRXaWR0aCIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJpbWFnZVVSTCIsInR5cGUiLCJpbWdJRCIsImltZ1RpdGxlIiwic2hvd0Rvd25sb2FkIiwid2luZG93IiwicGRmanNfb3B0aW9ucyIsInBkZmpzX2Rvd25sb2FkX2J1dHRvbiIsInNob3dQcmludCIsInBkZmpzX3ByaW50X2J1dHRvbiIsInNob3dGdWxsc2NyZWVuIiwicGRmanNfZnVsbHNjcmVlbl9saW5rIiwib3BlbkZ1bGxzY3JlZW4iLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfdGFyZ2V0IiwiZnVsbHNjcmVlblRleHQiLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfdGV4dCIsInZpZXdlckhlaWdodCIsInBkZmpzX2VtYmVkX2hlaWdodCIsIk51bWJlciIsInZpZXdlcldpZHRoIiwicGRmanNfZW1iZWRfd2lkdGgiLCJ2aWV3ZXJTY2FsZSIsInBkZmpzX3ZpZXdlcl9zY2FsZSIsImtleXdvcmRzIiwiZWRpdCIsInByb3BzIiwib25GaWxlU2VsZWN0IiwiaW1nIiwic2V0QXR0cmlidXRlcyIsInVybCIsImlkIiwib25SZW1vdmVJbWciLCJvblRvZ2dsZURvd25sb2FkIiwidmFsdWUiLCJvblRvZ2dsZVByaW50Iiwib25Ub2dnbGVGdWxsc2NyZWVuIiwib25Ub2dnbGVPcGVuRnVsbHNjcmVlbiIsIm9uSGVpZ2h0Q2hhbmdlIiwidW5kZWZpbmVkIiwib25XaWR0aENoYW5nZSIsIm9uRnVsbHNjcmVlblRleHRDaGFuZ2UiLCJyZXBsYWNlIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJsYWJlbCIsImhlbHAiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJtaW4iLCJtYXgiLCJhbGxvd1Jlc2V0IiwiaW5pdGlhbFBvc2l0aW9uIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJoZWlnaHQiLCJpc1NlbGVjdGVkIiwib25DbGljayIsIm9uU2VsZWN0IiwiYWxsb3dlZFR5cGVzIiwicmVuZGVyIiwiX3JlZiIsIm9wZW4iLCJzYXZlIiwiY29uY2F0IiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBD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Q0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBNZWRpYVVwbG9hZCwgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0UGFuZWxSb3csXG5cdFBhbmVsQm9keSxcblx0VG9nZ2xlQ29udHJvbCxcblx0UmFuZ2VDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBkZWZhdWx0SGVpZ2h0ID0gODAwO1xuY29uc3QgZGVmYXVsdFdpZHRoID0gMDtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2FwcGxpY2F0aW9uL3BkZicgXTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICdwZGZqc2Jsb2NrL3BkZmpzLWVtYmVkJywge1xuXHR0aXRsZTogX18oICdFbWJlZCBQREYuanMgVmlld2VyJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICksXG5cdGljb246ICdtZWRpYS1kb2N1bWVudCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0YXR0cmlidXRlczoge1xuXHRcdGltYWdlVVJMOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZ0lEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZ1RpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdQREYgRmlsZScsXG5cdFx0fSxcblx0XHRzaG93RG93bmxvYWQ6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ICEhIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Rvd25sb2FkX2J1dHRvbixcblx0XHR9LFxuXHRcdHNob3dQcmludDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfcHJpbnRfYnV0dG9uLFxuXHRcdH0sXG5cdFx0c2hvd0Z1bGxzY3JlZW46IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ICEhIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fbGluayxcblx0XHR9LFxuXHRcdG9wZW5GdWxsc2NyZWVuOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiAhISB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19mdWxsc2NyZWVuX2xpbmtfdGFyZ2V0LFxuXHRcdH0sXG5cdFx0ZnVsbHNjcmVlblRleHQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZnVsbHNjcmVlbl9saW5rX3RleHRcblx0XHRcdFx0PyB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19mdWxsc2NyZWVuX2xpbmtfdGV4dFxuXHRcdFx0XHQ6ICdWaWV3IEZ1bGxzY3JlZW4nLFxuXHRcdH0sXG5cdFx0dmlld2VySGVpZ2h0OiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2VtYmVkX2hlaWdodFxuXHRcdFx0XHQ/IE51bWJlciggd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZW1iZWRfaGVpZ2h0IClcblx0XHRcdFx0OiA4MDAsXG5cdFx0fSxcblx0XHR2aWV3ZXJXaWR0aDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19lbWJlZF93aWR0aFxuXHRcdFx0XHQ/IE51bWJlciggd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZW1iZWRfd2lkdGggKVxuXHRcdFx0XHQ6IDAsXG5cdFx0fSxcblx0XHR2aWV3ZXJTY2FsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc192aWV3ZXJfc2NhbGVcblx0XHRcdFx0PyB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc192aWV3ZXJfc2NhbGVcblx0XHRcdFx0OiAnYXV0bycsXG5cdFx0fSxcblx0fSxcblx0a2V5d29yZHM6IFsgX18oICdQREYgU2VsZWN0b3InLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSBdLFxuXG5cdGVkaXQoIHByb3BzICkge1xuXHRcdGNvbnN0IG9uRmlsZVNlbGVjdCA9ICggaW1nICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRpbWFnZVVSTDogaW1nLnVybCxcblx0XHRcdFx0aW1nSUQ6IGltZy5pZCxcblx0XHRcdFx0aW1nVGl0bGU6IGltZy50aXRsZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25SZW1vdmVJbWcgPSAoKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGltYWdlVVJMOiBudWxsLFxuXHRcdFx0XHRpbWdJRDogbnVsbCxcblx0XHRcdFx0aW1nVGl0bGU6IG51bGwsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlRG93bmxvYWQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93RG93bmxvYWQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZVByaW50ID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0c2hvd1ByaW50OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVGdWxsc2NyZWVuID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0c2hvd0Z1bGxzY3JlZW46IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZU9wZW5GdWxsc2NyZWVuID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0b3BlbkZ1bGxzY3JlZW46IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvbkhlaWdodENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHQvLyBoYW5kbGUgdGhlIHJlc2V0IGJ1dHRvblxuXHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdFx0XHR2YWx1ZSA9IGRlZmF1bHRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHZpZXdlckhlaWdodDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uV2lkdGhDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0Ly8gaGFuZGxlIHRoZSByZXNldCBidXR0b25cblx0XHRcdGlmICggdW5kZWZpbmVkID09PSB2YWx1ZSApIHtcblx0XHRcdFx0dmFsdWUgPSBkZWZhdWx0V2lkdGg7XG5cdFx0XHR9XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHZpZXdlcldpZHRoOiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25GdWxsc2NyZWVuVGV4dENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHR2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCBcIlwiKVxuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRmdWxsc2NyZWVuVGV4dDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHMga2V5PVwiaTFcIj5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnUERGLmpzIE9wdGlvbnMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0J1Nob3cgU2F2ZSBPcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlRG93bmxvYWQgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTaG93IFByaW50IE9wdGlvbicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnRcblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlUHJpbnQgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0J1Nob3cgRnVsbHNjcmVlbiBPcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93RnVsbHNjcmVlblxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZUZ1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0J09wZW4gRnVsbHNjcmVlbiBpbiBuZXcgdGFiPycsXG5cdFx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLm9wZW5GdWxsc2NyZWVuXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMub3BlbkZ1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlT3BlbkZ1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkZ1bGxzY3JlZW4gVGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5mdWxsc2NyZWVuVGV4dCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25GdWxsc2NyZWVuVGV4dENoYW5nZSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdFbWJlZCBIZWlnaHQnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdCdWaWV3ZXIgSGVpZ2h0IChwaXhlbHMpJyxcblx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkhlaWdodENoYW5nZSB9XG5cdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdG1heD17IDUwMDAgfVxuXHRcdFx0XHRcdFx0YWxsb3dSZXNldD17IHRydWUgfVxuXHRcdFx0XHRcdFx0aW5pdGlhbFBvc2l0aW9uPXsgZGVmYXVsdEhlaWdodCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0VtYmVkIFdpZHRoJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHQnVmlld2VyIFdpZHRoIChwaXhlbHMpJyxcblx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdGhlbHA9XCJCeSBkZWZhdWx0IDAgd2lsbCBiZSAxMDAlLlwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvbldpZHRoQ2hhbmdlIH1cblx0XHRcdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHRcdFx0bWF4PXsgNTAwMCB9XG5cdFx0XHRcdFx0XHRhbGxvd1Jlc2V0PXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRpbml0aWFsUG9zaXRpb249eyBkZWZhdWx0V2lkdGggfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXIgY29tcG9uZW50cy1wbGFjZWhvbGRlclwiIGtleT1cImkyXCIgc3R5bGU9e3toZWlnaHQ6IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0fX0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHN0cm9uZz57IF9fKCAnUERGLmpzIEVtYmVkJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfTwvc3Ryb25nPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLWJ1dHRvbi13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtbWVkaWEtZG9jdW1lbnRcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBkZmpzLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IHByb3BzLmF0dHJpYnV0ZXMuaW1nVGl0bGVcblx0XHRcdFx0XHRcdFx0XHRcdDogcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCB9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0eyBwcm9wcy5pc1NlbGVjdGVkID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyBvblJlbW92ZUltZyB9PlxuXHRcdFx0XHRcdFx0XHRcdHsgX18oICdSZW1vdmUgUERGJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdCkgOiBudWxsIH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgb25GaWxlU2VsZWN0IH1cblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5pbWdJRCB9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsgb3BlbiB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBfXyggJ0Nob29zZSBQREYnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L2Rpdj4sXG5cdFx0XTtcblx0fSxcblxuXHRzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtd3JhcHBlclwiPlxuXHRcdFx0XHR7YFtwZGZqcy12aWV3ZXIgYXR0YWNobWVudF9pZD0keyBwcm9wcy5hdHRyaWJ1dGVzLmltZ0lEIH0gdXJsPSR7IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgfSB2aWV3ZXJfd2lkdGg9JHsgKCBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoICE9PSB1bmRlZmluZWQgKSA/IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggOiBkZWZhdWx0V2lkdGggfSB2aWV3ZXJfaGVpZ2h0PSR7ICggcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHQgIT09IHVuZGVmaW5lZCApID8gcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHQgOiBkZWZhdWx0SGVpZ2h0IH0gdXJsPSR7IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgfSBkb3dubG9hZD0keyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZC50b1N0cmluZygpIH0gcHJpbnQ9JHsgcHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnQudG9TdHJpbmcoKSB9IGZ1bGxzY3JlZW49JHsgcHJvcHMuYXR0cmlidXRlcy5zaG93RnVsbHNjcmVlbi50b1N0cmluZygpIH0gZnVsbHNjcmVlbl90YXJnZXQ9JHsgcHJvcHMuYXR0cmlidXRlcy5vcGVuRnVsbHNjcmVlbi50b1N0cmluZygpIH0gZnVsbHNjcmVlbl90ZXh0PVwiJHsgcHJvcHMuYXR0cmlidXRlcy5mdWxsc2NyZWVuVGV4dCB9XCIgem9vbT0keyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlclNjYWxlLnRvU3RyaW5nKCl9ICBdYH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG59ICk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXRvci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wZGZqcy13cmFwcGVyIC5kYXNoaWNvbnMge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbi5wZGZqcy10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7IH1cXG5cXG4ucGRmanMtd3JhcHBlci5jb21wb25lbnRzLXBsYWNlaG9sZGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7IH1cXG5cXG4ucGRmanMtdXBsb2FkLWJ1dHRvbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDIwcHggMDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=
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
      "default": !!window.pdfjs_options.pdfjs_fullscreen_button
    },
    openFullscreen: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_fullscreen_link_button
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

    var onScaleChange = function onScaleChange(value) {
      props.setAttributes({
        viewerScale: value
      });
    };

    var onFullscreenTextChange = function onFullscreenTextChange(value) {
      props.setAttributes({
        fullscreenText: value
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
    })), wp.element.createElement(PanelBody, {
      title: __('Scale', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(SelectControl, {
      label: "Viewer Scale",
      value: props.attributes.viewerScale,
      options: [{
        label: 'Automatic',
        value: 'auto'
      }, {
        label: 'Actual Size',
        value: 'page-actual'
      }, {
        label: 'Page Fit',
        value: 'page-fit'
      }, {
        label: 'Page Width',
        value: 'page-width'
      }, {
        label: '50%',
        value: '50'
      }, {
        label: '75%',
        value: '75'
      }, {
        label: '100%',
        value: '100'
      }, {
        label: '125%',
        value: '125'
      }, {
        label: '150%',
        value: '150'
      }, {
        label: '200%',
        value: '200'
      }, {
        label: '300%',
        value: '300'
      }, {
        label: '400%',
        value: '400'
      }],
      onChange: onScaleChange
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
    }, "[pdfjs-viewer attachment_id=".concat(props.attributes.imgID, " viewer_width=").concat(props.attributes.viewerWidth !== undefined ? props.attributes.viewerWidth : defaultWidth, " viewer_height=").concat(props.attributes.viewerHeight !== undefined ? props.attributes.viewerHeight : defaultHeight, " url=").concat(props.attributes.imageURL, " download=").concat(props.attributes.showDownload.toString(), " print=").concat(props.attributes.showPrint.toString(), " fullscreen=").concat(props.attributes.showFullscreen.toString(), " fullscreen_target=").concat(props.attributes.openFullscreen.toString(), " fullscreen_text=\"").concat(encodeURIComponent(props.attributes.fullscreenText), "\" zoom=").concat(props.attributes.viewerScale.toString(), "  ]"));
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

  if (sourceMap && btoa) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzPzBlNGQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9zdHlsZS5zY3NzPzRiMTQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIlBhbmVsUm93IiwiUGFuZWxCb2R5IiwiVG9nZ2xlQ29udHJvbCIsIlJhbmdlQ29udHJvbCIsIlNlbGVjdENvbnRyb2wiLCJUZXh0Q29udHJvbCIsImRlZmF1bHRIZWlnaHQiLCJkZWZhdWx0V2lkdGgiLCJBTExPV0VEX01FRElBX1RZUEVTIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwiaW1hZ2VVUkwiLCJ0eXBlIiwiaW1nSUQiLCJpbWdUaXRsZSIsInNob3dEb3dubG9hZCIsIndpbmRvdyIsInBkZmpzX29wdGlvbnMiLCJwZGZqc19kb3dubG9hZF9idXR0b24iLCJzaG93UHJpbnQiLCJwZGZqc19wcmludF9idXR0b24iLCJzaG93RnVsbHNjcmVlbiIsInBkZmpzX2Z1bGxzY3JlZW5fYnV0dG9uIiwib3BlbkZ1bGxzY3JlZW4iLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfYnV0dG9uIiwiZnVsbHNjcmVlblRleHQiLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfdGV4dCIsInZpZXdlckhlaWdodCIsInBkZmpzX2VtYmVkX2hlaWdodCIsIk51bWJlciIsInZpZXdlcldpZHRoIiwicGRmanNfZW1iZWRfd2lkdGgiLCJ2aWV3ZXJTY2FsZSIsInBkZmpzX3ZpZXdlcl9zY2FsZSIsImtleXdvcmRzIiwiZWRpdCIsInByb3BzIiwib25GaWxlU2VsZWN0IiwiaW1nIiwic2V0QXR0cmlidXRlcyIsInVybCIsImlkIiwib25SZW1vdmVJbWciLCJvblRvZ2dsZURvd25sb2FkIiwidmFsdWUiLCJvblRvZ2dsZVByaW50Iiwib25Ub2dnbGVGdWxsc2NyZWVuIiwib25Ub2dnbGVPcGVuRnVsbHNjcmVlbiIsIm9uSGVpZ2h0Q2hhbmdlIiwidW5kZWZpbmVkIiwib25XaWR0aENoYW5nZSIsIm9uU2NhbGVDaGFuZ2UiLCJvbkZ1bGxzY3JlZW5UZXh0Q2hhbmdlIiwibGFiZWwiLCJoZWlnaHQiLCJpc1NlbGVjdGVkIiwib3BlbiIsInNhdmUiLCJ0b1N0cmluZyIsImVuY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBNZWRpYVVwbG9hZCwgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xuXG5jb25zdCB7XG5cdEJ1dHRvbixcblx0UGFuZWxSb3csXG5cdFBhbmVsQm9keSxcblx0VG9nZ2xlQ29udHJvbCxcblx0UmFuZ2VDb250cm9sLFxuXHRTZWxlY3RDb250cm9sLFxuXHRUZXh0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBkZWZhdWx0SGVpZ2h0ID0gODAwO1xuY29uc3QgZGVmYXVsdFdpZHRoID0gMDtcblxuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2FwcGxpY2F0aW9uL3BkZicgXTtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICdwZGZqc2Jsb2NrL3BkZmpzLWVtYmVkJywge1xuXHR0aXRsZTogX18oICdFbWJlZCBQREYuanMgVmlld2VyJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICksXG5cdGljb246ICdtZWRpYS1kb2N1bWVudCcsXG5cdGNhdGVnb3J5OiAnY29tbW9uJyxcblx0YXR0cmlidXRlczoge1xuXHRcdGltYWdlVVJMOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHR9LFxuXHRcdGltZ0lEOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHR9LFxuXHRcdGltZ1RpdGxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdQREYgRmlsZScsXG5cdFx0fSxcblx0XHRzaG93RG93bmxvYWQ6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ICEhIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Rvd25sb2FkX2J1dHRvbixcblx0XHR9LFxuXHRcdHNob3dQcmludDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfcHJpbnRfYnV0dG9uLFxuXHRcdH0sXG5cdFx0c2hvd0Z1bGxzY3JlZW46IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ICEhIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fYnV0dG9uLFxuXHRcdH0sXG5cdFx0b3BlbkZ1bGxzY3JlZW46IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ICEhIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fbGlua19idXR0b24sXG5cdFx0fSxcblx0XHRmdWxsc2NyZWVuVGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19mdWxsc2NyZWVuX2xpbmtfdGV4dFxuXHRcdFx0XHQ/IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fbGlua190ZXh0XG5cdFx0XHRcdDogJ1ZpZXcgRnVsbHNjcmVlbicsXG5cdFx0fSxcblx0XHR2aWV3ZXJIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZW1iZWRfaGVpZ2h0XG5cdFx0XHRcdD8gTnVtYmVyKCB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19lbWJlZF9oZWlnaHQgKVxuXHRcdFx0XHQ6IDgwMCxcblx0XHR9LFxuXHRcdHZpZXdlcldpZHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2VtYmVkX3dpZHRoXG5cdFx0XHRcdD8gTnVtYmVyKCB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19lbWJlZF93aWR0aCApXG5cdFx0XHRcdDogMCxcblx0XHR9LFxuXHRcdHZpZXdlclNjYWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX3ZpZXdlcl9zY2FsZVxuXHRcdFx0XHQ/IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX3ZpZXdlcl9zY2FsZVxuXHRcdFx0XHQ6ICdhdXRvJyxcblx0XHR9LFxuXHR9LFxuXHRrZXl3b3JkczogWyBfXyggJ1BERiBTZWxlY3RvcicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIF0sXG5cblx0ZWRpdCggcHJvcHMgKSB7XG5cdFx0Y29uc3Qgb25GaWxlU2VsZWN0ID0gKCBpbWcgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGltYWdlVVJMOiBpbWcudXJsLFxuXHRcdFx0XHRpbWdJRDogaW1nLmlkLFxuXHRcdFx0XHRpbWdUaXRsZTogaW1nLnRpdGxlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblJlbW92ZUltZyA9ICgpID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0aW1hZ2VVUkw6IG51bGwsXG5cdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRpbWdUaXRsZTogbnVsbCxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVEb3dubG9hZCA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHNob3dEb3dubG9hZDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlUHJpbnQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93UHJpbnQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZUZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93RnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlT3BlbkZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRvcGVuRnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uSGVpZ2h0Q2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdC8vIGhhbmRsZSB0aGUgcmVzZXQgYnV0dG9uXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gdmFsdWUgKSB7XG5cdFx0XHRcdHZhbHVlID0gZGVmYXVsdEhlaWdodDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VySGVpZ2h0OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25XaWR0aENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHQvLyBoYW5kbGUgdGhlIHJlc2V0IGJ1dHRvblxuXHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdFx0XHR2YWx1ZSA9IGRlZmF1bHRXaWR0aDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VyV2lkdGg6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblNjYWxlQ2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VyU2NhbGU6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25GdWxsc2NyZWVuVGV4dENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGZ1bGxzY3JlZW5UZXh0OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdDxJbnNwZWN0b3JDb250cm9scyBrZXk9XCJpMVwiPlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdQREYuanMgT3B0aW9ucycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH0+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHQnU2hvdyBEb3dubG9hZCBPcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlRG93bmxvYWQgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTaG93IFByaW50IE9wdGlvbicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnRcblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlUHJpbnQgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0J1Nob3cgRnVsbHNjcmVlbiBPcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93RnVsbHNjcmVlblxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZUZ1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0J09wZW4gRnVsbHNjcmVlbiBpbiBuZXcgdGFiPycsXG5cdFx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLm9wZW5GdWxsc2NyZWVuXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMub3BlbkZ1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlT3BlbkZ1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIkZ1bGxzY3JlZW4gVGV4dFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5mdWxsc2NyZWVuVGV4dCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25GdWxsc2NyZWVuVGV4dENoYW5nZSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdFbWJlZCBIZWlnaHQnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdCdWaWV3ZXIgSGVpZ2h0IChwaXhlbHMpJyxcblx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHQgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkhlaWdodENoYW5nZSB9XG5cdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdG1heD17IDUwMDAgfVxuXHRcdFx0XHRcdFx0YWxsb3dSZXNldD17IHRydWUgfVxuXHRcdFx0XHRcdFx0aW5pdGlhbFBvc2l0aW9uPXsgZGVmYXVsdEhlaWdodCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0VtYmVkIFdpZHRoJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHQnVmlld2VyIFdpZHRoIChwaXhlbHMpJyxcblx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdGhlbHA9XCJCeSBkZWZhdWx0IDAgd2lsbCBiZSAxMDAlLlwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvbldpZHRoQ2hhbmdlIH1cblx0XHRcdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHRcdFx0bWF4PXsgNTAwMCB9XG5cdFx0XHRcdFx0XHRhbGxvd1Jlc2V0PXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRpbml0aWFsUG9zaXRpb249eyBkZWZhdWx0V2lkdGggfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdTY2FsZScsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH0+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPVwiVmlld2VyIFNjYWxlXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJTY2FsZSB9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXsgW1xuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnQXV0b21hdGljJywgdmFsdWU6ICdhdXRvJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnQWN0dWFsIFNpemUnLCB2YWx1ZTogJ3BhZ2UtYWN0dWFsJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnUGFnZSBGaXQnLCB2YWx1ZTogJ3BhZ2UtZml0JyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnUGFnZSBXaWR0aCcsIHZhbHVlOiAncGFnZS13aWR0aCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzUwJScsIHZhbHVlOiAnNTAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICc3NSUnLCB2YWx1ZTogJzc1JyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnMTAwJScsIHZhbHVlOiAnMTAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnMTI1JScsIHZhbHVlOiAnMTI1JyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnMTUwJScsIHZhbHVlOiAnMTUwJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnMjAwJScsIHZhbHVlOiAnMjAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnMzAwJScsIHZhbHVlOiAnMzAwJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnNDAwJScsIHZhbHVlOiAnNDAwJyB9LFxuXHRcdFx0XHRcdFx0XSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uU2NhbGVDaGFuZ2UgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXIgY29tcG9uZW50cy1wbGFjZWhvbGRlclwiIGtleT1cImkyXCIgc3R5bGU9e3toZWlnaHQ6IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0fX0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHN0cm9uZz57IF9fKCAnUERGLmpzIEVtYmVkJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfTwvc3Ryb25nPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLWJ1dHRvbi13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtbWVkaWEtZG9jdW1lbnRcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBkZmpzLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IHByb3BzLmF0dHJpYnV0ZXMuaW1nVGl0bGVcblx0XHRcdFx0XHRcdFx0XHRcdDogcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCB9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0eyBwcm9wcy5pc1NlbGVjdGVkID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyBvblJlbW92ZUltZyB9PlxuXHRcdFx0XHRcdFx0XHRcdHsgX18oICdSZW1vdmUgUERGJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdCkgOiBudWxsIH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgb25GaWxlU2VsZWN0IH1cblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5pbWdJRCB9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsgb3BlbiB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBfXyggJ0Nob29zZSBQREYnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L2Rpdj4sXG5cdFx0XTtcblx0fSxcblxuXHRzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtd3JhcHBlclwiPlxuXHRcdFx0XHR7YFtwZGZqcy12aWV3ZXIgYXR0YWNobWVudF9pZD0keyBwcm9wcy5hdHRyaWJ1dGVzLmltZ0lEIH0gdmlld2VyX3dpZHRoPSR7ICggcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCAhPT0gdW5kZWZpbmVkICkgPyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoIDogZGVmYXVsdFdpZHRoIH0gdmlld2VyX2hlaWdodD0keyAoIHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0ICE9PSB1bmRlZmluZWQgKSA/IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0IDogZGVmYXVsdEhlaWdodCB9IHVybD0keyBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMIH0gZG93bmxvYWQ9JHsgcHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWQudG9TdHJpbmcoKSB9IHByaW50PSR7IHByb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50LnRvU3RyaW5nKCkgfSBmdWxsc2NyZWVuPSR7IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW4udG9TdHJpbmcoKSB9IGZ1bGxzY3JlZW5fdGFyZ2V0PSR7IHByb3BzLmF0dHJpYnV0ZXMub3BlbkZ1bGxzY3JlZW4udG9TdHJpbmcoKSB9IGZ1bGxzY3JlZW5fdGV4dD1cIiR7IGVuY29kZVVSSUNvbXBvbmVudCggcHJvcHMuYXR0cmlidXRlcy5mdWxsc2NyZWVuVGV4dCApIH1cIiB6b29tPSR7IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyU2NhbGUudG9TdHJpbmcoKX0gIF1gfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbn0gKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWRpdG9yLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9ibG9jay9ibG9jayc7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBkZmpzLXdyYXBwZXIgLmRhc2hpY29ucyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLnBkZmpzLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbi5wZGZqcy13cmFwcGVyLmNvbXBvbmVudHMtcGxhY2Vob2xkZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDsgfVxcblxcbi5wZGZqcy11cGxvYWQtYnV0dG9uLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjBweCAwOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyJdLCJzb3VyY2VSb290IjoiIn0=
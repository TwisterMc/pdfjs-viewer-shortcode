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
    var onScaleChange = function onScaleChange(value) {
      value = value.replace(/(<([^>]+)>)/gi, "");
      props.setAttributes({
        viewerScale: value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzPzBlNGQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9zdHlsZS5zY3NzPzRiMTQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiX3dwJGJsb2NrRWRpdG9yIiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiX3dwJGNvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwiUGFuZWxSb3ciLCJQYW5lbEJvZHkiLCJUb2dnbGVDb250cm9sIiwiUmFuZ2VDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlRleHRDb250cm9sIiwiZGVmYXVsdEhlaWdodCIsImRlZmF1bHRXaWR0aCIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJpbWFnZVVSTCIsInR5cGUiLCJpbWdJRCIsImltZ1RpdGxlIiwic2hvd0Rvd25sb2FkIiwid2luZG93IiwicGRmanNfb3B0aW9ucyIsInBkZmpzX2Rvd25sb2FkX2J1dHRvbiIsInNob3dQcmludCIsInBkZmpzX3ByaW50X2J1dHRvbiIsInNob3dGdWxsc2NyZWVuIiwicGRmanNfZnVsbHNjcmVlbl9saW5rIiwib3BlbkZ1bGxzY3JlZW4iLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfdGFyZ2V0IiwiZnVsbHNjcmVlblRleHQiLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfdGV4dCIsInZpZXdlckhlaWdodCIsInBkZmpzX2VtYmVkX2hlaWdodCIsIk51bWJlciIsInZpZXdlcldpZHRoIiwicGRmanNfZW1iZWRfd2lkdGgiLCJ2aWV3ZXJTY2FsZSIsInBkZmpzX3ZpZXdlcl9zY2FsZSIsImtleXdvcmRzIiwiZWRpdCIsInByb3BzIiwib25GaWxlU2VsZWN0IiwiaW1nIiwic2V0QXR0cmlidXRlcyIsInVybCIsImlkIiwib25SZW1vdmVJbWciLCJvblRvZ2dsZURvd25sb2FkIiwidmFsdWUiLCJvblRvZ2dsZVByaW50Iiwib25Ub2dnbGVGdWxsc2NyZWVuIiwib25Ub2dnbGVPcGVuRnVsbHNjcmVlbiIsIm9uSGVpZ2h0Q2hhbmdlIiwidW5kZWZpbmVkIiwib25XaWR0aENoYW5nZSIsIm9uU2NhbGVDaGFuZ2UiLCJyZXBsYWNlIiwib25GdWxsc2NyZWVuVGV4dENoYW5nZSIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwibGFiZWwiLCJoZWxwIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwibWluIiwibWF4IiwiYWxsb3dSZXNldCIsImluaXRpYWxQb3NpdGlvbiIsIm9wdGlvbnMiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsImlzU2VsZWN0ZWQiLCJvbkNsaWNrIiwib25TZWxlY3QiLCJhbGxvd2VkVHlwZXMiLCJyZW5kZXIiLCJfcmVmIiwib3BlbiIsInNhdmUiLCJjb25jYXQiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FB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QTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRQYW5lbFJvdyxcblx0UGFuZWxCb2R5LFxuXHRUb2dnbGVDb250cm9sLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGRlZmF1bHRIZWlnaHQgPSA4MDA7XG5jb25zdCBkZWZhdWx0V2lkdGggPSAwO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnYXBwbGljYXRpb24vcGRmJyBdO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3BkZmpzYmxvY2svcGRmanMtZW1iZWQnLCB7XG5cdHRpdGxlOiBfXyggJ0VtYmVkIFBERi5qcyBWaWV3ZXInLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSxcblx0aWNvbjogJ21lZGlhLWRvY3VtZW50Jyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1hZ2VVUkw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nVGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ1BERiBGaWxlJyxcblx0XHR9LFxuXHRcdHNob3dEb3dubG9hZDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZG93bmxvYWRfYnV0dG9uLFxuXHRcdH0sXG5cdFx0c2hvd1ByaW50OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiAhISB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19wcmludF9idXR0b24sXG5cdFx0fSxcblx0XHRzaG93RnVsbHNjcmVlbjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZnVsbHNjcmVlbl9saW5rLFxuXHRcdH0sXG5cdFx0b3BlbkZ1bGxzY3JlZW46IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ICEhIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fbGlua190YXJnZXQsXG5cdFx0fSxcblx0XHRmdWxsc2NyZWVuVGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19mdWxsc2NyZWVuX2xpbmtfdGV4dFxuXHRcdFx0XHQ/IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fbGlua190ZXh0XG5cdFx0XHRcdDogJ1ZpZXcgRnVsbHNjcmVlbicsXG5cdFx0fSxcblx0XHR2aWV3ZXJIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZW1iZWRfaGVpZ2h0XG5cdFx0XHRcdD8gTnVtYmVyKCB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19lbWJlZF9oZWlnaHQgKVxuXHRcdFx0XHQ6IDgwMCxcblx0XHR9LFxuXHRcdHZpZXdlcldpZHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2VtYmVkX3dpZHRoXG5cdFx0XHRcdD8gTnVtYmVyKCB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19lbWJlZF93aWR0aCApXG5cdFx0XHRcdDogMCxcblx0XHR9LFxuXHRcdHZpZXdlclNjYWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX3ZpZXdlcl9zY2FsZVxuXHRcdFx0XHQ/IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX3ZpZXdlcl9zY2FsZVxuXHRcdFx0XHQ6ICdhdXRvJyxcblx0XHR9LFxuXHR9LFxuXHRrZXl3b3JkczogWyBfXyggJ1BERiBTZWxlY3RvcicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIF0sXG5cblx0ZWRpdCggcHJvcHMgKSB7XG5cdFx0Y29uc3Qgb25GaWxlU2VsZWN0ID0gKCBpbWcgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGltYWdlVVJMOiBpbWcudXJsLFxuXHRcdFx0XHRpbWdJRDogaW1nLmlkLFxuXHRcdFx0XHRpbWdUaXRsZTogaW1nLnRpdGxlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblJlbW92ZUltZyA9ICgpID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0aW1hZ2VVUkw6IG51bGwsXG5cdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRpbWdUaXRsZTogbnVsbCxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVEb3dubG9hZCA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHNob3dEb3dubG9hZDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlUHJpbnQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93UHJpbnQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZUZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93RnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlT3BlbkZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRvcGVuRnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uSGVpZ2h0Q2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdC8vIGhhbmRsZSB0aGUgcmVzZXQgYnV0dG9uXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gdmFsdWUgKSB7XG5cdFx0XHRcdHZhbHVlID0gZGVmYXVsdEhlaWdodDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VySGVpZ2h0OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25XaWR0aENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHQvLyBoYW5kbGUgdGhlIHJlc2V0IGJ1dHRvblxuXHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdFx0XHR2YWx1ZSA9IGRlZmF1bHRXaWR0aDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VyV2lkdGg6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblNjYWxlQ2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksIFwiXCIpXG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHZpZXdlclNjYWxlOiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uRnVsbHNjcmVlblRleHRDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgXCJcIilcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0ZnVsbHNjcmVlblRleHQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT1cImkxXCI+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1BERi5qcyBPcHRpb25zJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdTaG93IERvd25sb2FkIE9wdGlvbicsXG5cdFx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dEb3dubG9hZCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25Ub2dnbGVEb3dubG9hZCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Nob3cgUHJpbnQgT3B0aW9uJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludFxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25Ub2dnbGVQcmludCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHQnU2hvdyBGdWxsc2NyZWVuIE9wdGlvbicsXG5cdFx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlRnVsbHNjcmVlbiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHQnT3BlbiBGdWxsc2NyZWVuIGluIG5ldyB0YWI/Jyxcblx0XHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMub3BlbkZ1bGxzY3JlZW5cblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5vcGVuRnVsbHNjcmVlbiB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25Ub2dnbGVPcGVuRnVsbHNjcmVlbiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiRnVsbHNjcmVlbiBUZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLmZ1bGxzY3JlZW5UZXh0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkZ1bGxzY3JlZW5UZXh0Q2hhbmdlIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0VtYmVkIEhlaWdodCcsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH0+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0J1ZpZXdlciBIZWlnaHQgKHBpeGVscyknLFxuXHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uSGVpZ2h0Q2hhbmdlIH1cblx0XHRcdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHRcdFx0bWF4PXsgNTAwMCB9XG5cdFx0XHRcdFx0XHRhbGxvd1Jlc2V0PXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRpbml0aWFsUG9zaXRpb249eyBkZWZhdWx0SGVpZ2h0IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnRW1iZWQgV2lkdGgnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdCdWaWV3ZXIgV2lkdGggKHBpeGVscyknLFxuXHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0aGVscD1cIkJ5IGRlZmF1bHQgMCB3aWxsIGJlIDEwMCUuXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uV2lkdGhDaGFuZ2UgfVxuXHRcdFx0XHRcdFx0bWluPXsgMCB9XG5cdFx0XHRcdFx0XHRtYXg9eyA1MDAwIH1cblx0XHRcdFx0XHRcdGFsbG93UmVzZXQ9eyB0cnVlIH1cblx0XHRcdFx0XHRcdGluaXRpYWxQb3NpdGlvbj17IGRlZmF1bHRXaWR0aCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1NjYWxlJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8U2VsZWN0Q29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJWaWV3ZXIgU2NhbGVcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlclNjYWxlIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBbXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICdBdXRvbWF0aWMnLCB2YWx1ZTogJ2F1dG8nIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICdBY3R1YWwgU2l6ZScsIHZhbHVlOiAncGFnZS1hY3R1YWwnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICdQYWdlIEZpdCcsIHZhbHVlOiAncGFnZS1maXQnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICdQYWdlIFdpZHRoJywgdmFsdWU6ICdwYWdlLXdpZHRoJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnNTAlJywgdmFsdWU6ICc1MCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzc1JScsIHZhbHVlOiAnNzUnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICcxMDAlJywgdmFsdWU6ICcxMDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICcxMjUlJywgdmFsdWU6ICcxMjUnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICcxNTAlJywgdmFsdWU6ICcxNTAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICcyMDAlJywgdmFsdWU6ICcyMDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICczMDAlJywgdmFsdWU6ICczMDAnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICc0MDAlJywgdmFsdWU6ICc0MDAnIH0sXG5cdFx0XHRcdFx0XHRdIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25TY2FsZUNoYW5nZSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtd3JhcHBlciBjb21wb25lbnRzLXBsYWNlaG9sZGVyXCIga2V5PVwiaTJcIiBzdHlsZT17e2hlaWdodDogcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHR9fT5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8c3Ryb25nPnsgX18oICdQREYuanMgRW1iZWQnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PC9zdHJvbmc+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgPyAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy11cGxvYWQtd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy11cGxvYWQtYnV0dG9uLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZGFzaGljb25zIGRhc2hpY29ucy1tZWRpYS1kb2N1bWVudFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwicGRmanMtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHR7IHByb3BzLmF0dHJpYnV0ZXMuaW1nVGl0bGVcblx0XHRcdFx0XHRcdFx0XHRcdD8gcHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMIH1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7IHByb3BzLmlzU2VsZWN0ZWQgPyAoXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17IG9uUmVtb3ZlSW1nIH0+XG5cdFx0XHRcdFx0XHRcdFx0eyBfXyggJ1JlbW92ZSBQREYnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9XG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0KSA6IG51bGwgfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyBvbkZpbGVTZWxlY3QgfVxuXHRcdFx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLmltZ0lEIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyBvcGVuIH0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnQ2hvb3NlIFBERicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpIH1cblx0XHRcdDwvZGl2Pixcblx0XHRdO1xuXHR9LFxuXG5cdHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy13cmFwcGVyXCI+XG5cdFx0XHRcdHtgW3BkZmpzLXZpZXdlciBhdHRhY2htZW50X2lkPSR7IHByb3BzLmF0dHJpYnV0ZXMuaW1nSUQgfSB1cmw9JHsgcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCB9IHZpZXdlcl93aWR0aD0keyAoIHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggIT09IHVuZGVmaW5lZCApID8gcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCA6IGRlZmF1bHRXaWR0aCB9IHZpZXdlcl9oZWlnaHQ9JHsgKCBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodCAhPT0gdW5kZWZpbmVkICkgPyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodCA6IGRlZmF1bHRIZWlnaHQgfSB1cmw9JHsgcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCB9IGRvd25sb2FkPSR7IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkLnRvU3RyaW5nKCkgfSBwcmludD0keyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludC50b1N0cmluZygpIH0gZnVsbHNjcmVlbj0keyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuLnRvU3RyaW5nKCkgfSBmdWxsc2NyZWVuX3RhcmdldD0keyBwcm9wcy5hdHRyaWJ1dGVzLm9wZW5GdWxsc2NyZWVuLnRvU3RyaW5nKCkgfSBmdWxsc2NyZWVuX3RleHQ9XCIkeyBwcm9wcy5hdHRyaWJ1dGVzLmZ1bGxzY3JlZW5UZXh0IH1cIiB6b29tPSR7IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyU2NhbGUudG9TdHJpbmcoKX0gIF1gfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcbn0gKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZWRpdG9yLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9ibG9jay9ibG9jayc7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBkZmpzLXdyYXBwZXIgLmRhc2hpY29ucyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLnBkZmpzLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbi5wZGZqcy13cmFwcGVyLmNvbXBvbmVudHMtcGxhY2Vob2xkZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDsgfVxcblxcbi5wZGZqcy11cGxvYWQtYnV0dG9uLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMjBweCAwOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
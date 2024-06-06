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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzPzBlNGQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9zdHlsZS5zY3NzPzRiMTQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiX3dwJGJsb2NrRWRpdG9yIiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiX3dwJGNvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiQnV0dG9uIiwiUGFuZWxSb3ciLCJQYW5lbEJvZHkiLCJUb2dnbGVDb250cm9sIiwiUmFuZ2VDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlRleHRDb250cm9sIiwiZGVmYXVsdEhlaWdodCIsImRlZmF1bHRXaWR0aCIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJpbWFnZVVSTCIsInR5cGUiLCJpbWdJRCIsImltZ1RpdGxlIiwic2hvd0Rvd25sb2FkIiwid2luZG93IiwicGRmanNfb3B0aW9ucyIsInBkZmpzX2Rvd25sb2FkX2J1dHRvbiIsInNob3dQcmludCIsInBkZmpzX3ByaW50X2J1dHRvbiIsInNob3dGdWxsc2NyZWVuIiwicGRmanNfZnVsbHNjcmVlbl9saW5rIiwib3BlbkZ1bGxzY3JlZW4iLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfdGFyZ2V0IiwiZnVsbHNjcmVlblRleHQiLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfdGV4dCIsInZpZXdlckhlaWdodCIsInBkZmpzX2VtYmVkX2hlaWdodCIsIk51bWJlciIsInZpZXdlcldpZHRoIiwicGRmanNfZW1iZWRfd2lkdGgiLCJ2aWV3ZXJTY2FsZSIsInBkZmpzX3ZpZXdlcl9zY2FsZSIsImtleXdvcmRzIiwiZWRpdCIsInByb3BzIiwib25GaWxlU2VsZWN0IiwiaW1nIiwic2V0QXR0cmlidXRlcyIsInVybCIsImlkIiwib25SZW1vdmVJbWciLCJvblRvZ2dsZURvd25sb2FkIiwidmFsdWUiLCJvblRvZ2dsZVByaW50Iiwib25Ub2dnbGVGdWxsc2NyZWVuIiwib25Ub2dnbGVPcGVuRnVsbHNjcmVlbiIsIm9uSGVpZ2h0Q2hhbmdlIiwidW5kZWZpbmVkIiwib25XaWR0aENoYW5nZSIsIm9uU2NhbGVDaGFuZ2UiLCJyZXBsYWNlIiwib25GdWxsc2NyZWVuVGV4dENoYW5nZSIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwibGFiZWwiLCJoZWxwIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwibWluIiwibWF4IiwiYWxsb3dSZXNldCIsImluaXRpYWxQb3NpdGlvbiIsIm9wdGlvbnMiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsImlzU2VsZWN0ZWQiLCJvbkNsaWNrIiwib25TZWxlY3QiLCJhbGxvd2VkVHlwZXMiLCJyZW5kZXIiLCJfcmVmIiwib3BlbiIsInNhdmUiLCJjb25jYXQiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FB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QTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRQYW5lbFJvdyxcblx0UGFuZWxCb2R5LFxuXHRUb2dnbGVDb250cm9sLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGRlZmF1bHRIZWlnaHQgPSA4MDA7XG5jb25zdCBkZWZhdWx0V2lkdGggPSAwO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnYXBwbGljYXRpb24vcGRmJyBdO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3BkZmpzYmxvY2svcGRmanMtZW1iZWQnLCB7XG5cdHRpdGxlOiBfXyggJ0VtYmVkIFBERi5qcyBWaWV3ZXInLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSxcblx0aWNvbjogJ21lZGlhLWRvY3VtZW50Jyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1hZ2VVUkw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nVGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ1BERiBGaWxlJyxcblx0XHR9LFxuXHRcdHNob3dEb3dubG9hZDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZG93bmxvYWRfYnV0dG9uLFxuXHRcdH0sXG5cdFx0c2hvd1ByaW50OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiAhISB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19wcmludF9idXR0b24sXG5cdFx0fSxcblx0XHRzaG93RnVsbHNjcmVlbjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZnVsbHNjcmVlbl9saW5rLFxuXHRcdH0sXG5cdFx0b3BlbkZ1bGxzY3JlZW46IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ICEhIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fbGlua190YXJnZXQsXG5cdFx0fSxcblx0XHRmdWxsc2NyZWVuVGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19mdWxsc2NyZWVuX2xpbmtfdGV4dFxuXHRcdFx0XHQ/IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fbGlua190ZXh0XG5cdFx0XHRcdDogJ1ZpZXcgRnVsbHNjcmVlbicsXG5cdFx0fSxcblx0XHR2aWV3ZXJIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZW1iZWRfaGVpZ2h0XG5cdFx0XHRcdD8gTnVtYmVyKCB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19lbWJlZF9oZWlnaHQgKVxuXHRcdFx0XHQ6IDgwMCxcblx0XHR9LFxuXHRcdHZpZXdlcldpZHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2VtYmVkX3dpZHRoXG5cdFx0XHRcdD8gTnVtYmVyKCB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19lbWJlZF93aWR0aCApXG5cdFx0XHRcdDogMCxcblx0XHR9LFxuXHRcdHZpZXdlclNjYWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX3ZpZXdlcl9zY2FsZVxuXHRcdFx0XHQ/IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX3ZpZXdlcl9zY2FsZVxuXHRcdFx0XHQ6ICdhdXRvJyxcblx0XHR9LFxuXHR9LFxuXHRrZXl3b3JkczogWyBfXyggJ1BERiBTZWxlY3RvcicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIF0sXG5cblx0ZWRpdCggcHJvcHMgKSB7XG5cdFx0Y29uc3Qgb25GaWxlU2VsZWN0ID0gKCBpbWcgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGltYWdlVVJMOiBpbWcudXJsLFxuXHRcdFx0XHRpbWdJRDogaW1nLmlkLFxuXHRcdFx0XHRpbWdUaXRsZTogaW1nLnRpdGxlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblJlbW92ZUltZyA9ICgpID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0aW1hZ2VVUkw6IG51bGwsXG5cdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRpbWdUaXRsZTogbnVsbCxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVEb3dubG9hZCA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHNob3dEb3dubG9hZDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlUHJpbnQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93UHJpbnQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZUZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93RnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlT3BlbkZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRvcGVuRnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uSGVpZ2h0Q2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdC8vIGhhbmRsZSB0aGUgcmVzZXQgYnV0dG9uXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gdmFsdWUgKSB7XG5cdFx0XHRcdHZhbHVlID0gZGVmYXVsdEhlaWdodDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VySGVpZ2h0OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25XaWR0aENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHQvLyBoYW5kbGUgdGhlIHJlc2V0IGJ1dHRvblxuXHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdFx0XHR2YWx1ZSA9IGRlZmF1bHRXaWR0aDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VyV2lkdGg6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblNjYWxlQ2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksIFwiXCIpXG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHZpZXdlclNjYWxlOiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXHRcdGNvbnN0IG9uRnVsbHNjcmVlblRleHRDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgXCJcIilcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0ZnVsbHNjcmVlblRleHQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT1cImkxXCI+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ1BERi5qcyBPcHRpb25zJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdTaG93IFNhdmUgT3B0aW9uJyxcblx0XHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZURvd25sb2FkIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2hvdyBQcmludCBPcHRpb24nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50XG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZVByaW50IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdTaG93IEZ1bGxzY3JlZW4gT3B0aW9uJyxcblx0XHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW5cblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5zaG93RnVsbHNjcmVlbiB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25Ub2dnbGVGdWxsc2NyZWVuIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdPcGVuIEZ1bGxzY3JlZW4gaW4gbmV3IHRhYj8nLFxuXHRcdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5vcGVuRnVsbHNjcmVlblxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLm9wZW5GdWxsc2NyZWVuIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZU9wZW5GdWxsc2NyZWVuIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGdWxsc2NyZWVuIFRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMuZnVsbHNjcmVlblRleHQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uRnVsbHNjcmVlblRleHRDaGFuZ2UgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnRW1iZWQgSGVpZ2h0JywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHQnVmlld2VyIEhlaWdodCAocGl4ZWxzKScsXG5cdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25IZWlnaHRDaGFuZ2UgfVxuXHRcdFx0XHRcdFx0bWluPXsgMCB9XG5cdFx0XHRcdFx0XHRtYXg9eyA1MDAwIH1cblx0XHRcdFx0XHRcdGFsbG93UmVzZXQ9eyB0cnVlIH1cblx0XHRcdFx0XHRcdGluaXRpYWxQb3NpdGlvbj17IGRlZmF1bHRIZWlnaHQgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdFbWJlZCBXaWR0aCcsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH0+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0J1ZpZXdlciBXaWR0aCAocGl4ZWxzKScsXG5cdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRoZWxwPVwiQnkgZGVmYXVsdCAwIHdpbGwgYmUgMTAwJS5cIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25XaWR0aENoYW5nZSB9XG5cdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdG1heD17IDUwMDAgfVxuXHRcdFx0XHRcdFx0YWxsb3dSZXNldD17IHRydWUgfVxuXHRcdFx0XHRcdFx0aW5pdGlhbFBvc2l0aW9uPXsgZGVmYXVsdFdpZHRoIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnU2NhbGUnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlZpZXdlciBTY2FsZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyU2NhbGUgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IFtcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ0F1dG9tYXRpYycsIHZhbHVlOiAnYXV0bycgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ0FjdHVhbCBTaXplJywgdmFsdWU6ICdwYWdlLWFjdHVhbCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ1BhZ2UgRml0JywgdmFsdWU6ICdwYWdlLWZpdCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ1BhZ2UgV2lkdGgnLCB2YWx1ZTogJ3BhZ2Utd2lkdGgnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICc1MCUnLCB2YWx1ZTogJzUwJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnNzUlJywgdmFsdWU6ICc3NScgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzEwMCUnLCB2YWx1ZTogJzEwMCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzEyNSUnLCB2YWx1ZTogJzEyNScgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzE1MCUnLCB2YWx1ZTogJzE1MCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzIwMCUnLCB2YWx1ZTogJzIwMCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzMwMCUnLCB2YWx1ZTogJzMwMCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzQwMCUnLCB2YWx1ZTogJzQwMCcgfSxcblx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblNjYWxlQ2hhbmdlIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy13cmFwcGVyIGNvbXBvbmVudHMtcGxhY2Vob2xkZXJcIiBrZXk9XCJpMlwiIHN0eWxlPXt7aGVpZ2h0OiBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodH19PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxzdHJvbmc+eyBfXyggJ1BERi5qcyBFbWJlZCcsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH08L3N0cm9uZz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsgcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXVwbG9hZC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXVwbG9hZC1idXR0b24td3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLW1lZGlhLWRvY3VtZW50XCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwZGZqcy10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHsgcHJvcHMuaXNTZWxlY3RlZCA/IChcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsgb25SZW1vdmVJbWcgfT5cblx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnUmVtb3ZlIFBERicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQpIDogbnVsbCB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG9uRmlsZVNlbGVjdCB9XG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMuaW1nSUQgfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17IG9wZW4gfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgX18oICdDaG9vc2UgUERGJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9kaXY+LFxuXHRcdF07XG5cdH0sXG5cblx0c2F2ZShwcm9wcykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXJcIj5cblx0XHRcdFx0e2BbcGRmanMtdmlld2VyIGF0dGFjaG1lbnRfaWQ9JHsgcHJvcHMuYXR0cmlidXRlcy5pbWdJRCB9IHVybD0keyBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMIH0gdmlld2VyX3dpZHRoPSR7ICggcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCAhPT0gdW5kZWZpbmVkICkgPyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoIDogZGVmYXVsdFdpZHRoIH0gdmlld2VyX2hlaWdodD0keyAoIHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0ICE9PSB1bmRlZmluZWQgKSA/IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0IDogZGVmYXVsdEhlaWdodCB9IHVybD0keyBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMIH0gZG93bmxvYWQ9JHsgcHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWQudG9TdHJpbmcoKSB9IHByaW50PSR7IHByb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50LnRvU3RyaW5nKCkgfSBmdWxsc2NyZWVuPSR7IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW4udG9TdHJpbmcoKSB9IGZ1bGxzY3JlZW5fdGFyZ2V0PSR7IHByb3BzLmF0dHJpYnV0ZXMub3BlbkZ1bGxzY3JlZW4udG9TdHJpbmcoKSB9IGZ1bGxzY3JlZW5fdGV4dD1cIiR7IHByb3BzLmF0dHJpYnV0ZXMuZnVsbHNjcmVlblRleHQgfVwiIHpvb209JHsgcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJTY2FsZS50b1N0cmluZygpfSAgXWB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxufSApO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9lZGl0b3Iuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2Jsb2NrL2Jsb2NrJztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucGRmanMtd3JhcHBlciAuZGFzaGljb25zIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cXG5cXG4ucGRmanMtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4OyB9XFxuXFxuLnBkZmpzLXdyYXBwZXIuY29tcG9uZW50cy1wbGFjZWhvbGRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0OyB9XFxuXFxuLnBkZmpzLXVwbG9hZC1idXR0b24td3JhcHBlciB7XFxuICBwYWRkaW5nOiAyMHB4IDA7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9
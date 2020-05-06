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
    SelectControl = _wp$components.SelectControl;
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
    },
    viewerScale: {
      type: 'string',
      "default": 'page-actual'
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

    var onScaleChange = function onScaleChange(value) {
      props.setAttributes({
        viewerScale: value
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
    }, "[pdfjs-viewer viewer_width=".concat(props.attributes.viewerWidth !== undefined ? props.attributes.viewerWidth : defaultWidth, " viewer_height=").concat(props.attributes.viewerHeight !== undefined ? props.attributes.viewerHeight : defaultHeight, " url=").concat(props.attributes.imageURL, " download=").concat(props.attributes.showDownload.toString(), " print=").concat(props.attributes.showPrint.toString(), " fullscreen=").concat(props.attributes.showFullscreen.toString(), " zoom=").concat(props.attributes.viewerScale.toString(), " ]"));
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
exports.push([module.i, ".pdfjs-wrapper .dashicons {\n  vertical-align: middle;\n  margin-right: 10px; }\n\n.pdfjs-title {\n  font-size: 16px; }\n\n.pdfjs-wrapper.components-placeholder {\n  justify-content: start; }\n", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzPzBlNGQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9zdHlsZS5zY3NzPzRiMTQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIlBhbmVsUm93IiwiUGFuZWxCb2R5IiwiVG9nZ2xlQ29udHJvbCIsIlJhbmdlQ29udHJvbCIsIlNlbGVjdENvbnRyb2wiLCJkZWZhdWx0SGVpZ2h0IiwiZGVmYXVsdFdpZHRoIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImltYWdlVVJMIiwidHlwZSIsImltZ0lEIiwiaW1nVGl0bGUiLCJzaG93RG93bmxvYWQiLCJzaG93UHJpbnQiLCJzaG93RnVsbHNjcmVlbiIsInZpZXdlckhlaWdodCIsInZpZXdlcldpZHRoIiwidmlld2VyU2NhbGUiLCJrZXl3b3JkcyIsImVkaXQiLCJwcm9wcyIsIm9uRmlsZVNlbGVjdCIsImltZyIsInNldEF0dHJpYnV0ZXMiLCJ1cmwiLCJpZCIsIm9uUmVtb3ZlSW1nIiwib25Ub2dnbGVEb3dubG9hZCIsInZhbHVlIiwib25Ub2dnbGVQcmludCIsIm9uVG9nZ2xlRnVsbHNjcmVlbiIsIm9uSGVpZ2h0Q2hhbmdlIiwidW5kZWZpbmVkIiwib25XaWR0aENoYW5nZSIsIm9uU2NhbGVDaGFuZ2UiLCJsYWJlbCIsImhlaWdodCIsImlzU2VsZWN0ZWQiLCJvcGVuIiwic2F2ZSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRlFBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEU7QUFFUjtBQUNBO0lBRVFHLGlCLEdBQXNCRixFQUFFLENBQUNHLE0sQ0FBekJELGlCO3NCQUNtQ0YsRUFBRSxDQUFDSSxXO0lBQXRDQyxXLG1CQUFBQSxXO0lBQWFDLGlCLG1CQUFBQSxpQjtxQkFTakJOLEVBQUUsQ0FBQ08sVTtJQU5OQyxNLGtCQUFBQSxNO0lBQ0FDLFEsa0JBQUFBLFE7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RUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEUiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgTWVkaWFVcGxvYWQsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdFBhbmVsUm93LFxuXHRQYW5lbEJvZHksXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFJhbmdlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcbn0gPSB3cC5jb21wb25lbnRzO1xuXG5jb25zdCBkZWZhdWx0SGVpZ2h0ID0gMTM2MDtcbmNvbnN0IGRlZmF1bHRXaWR0aCA9IDA7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdhcHBsaWNhdGlvbi9wZGYnIF07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAncGRmanNibG9jay9wZGZqcy1lbWJlZCcsIHtcblx0dGl0bGU6IF9fKCAnRW1iZWQgUERGLmpzIFZpZXdlcicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApLFxuXHRpY29uOiAnbWVkaWEtZG9jdW1lbnQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRpbWFnZVVSTDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWdJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWdUaXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnUERGIEZpbGUnLFxuXHRcdH0sXG5cdFx0c2hvd0Rvd25sb2FkOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0c2hvd1ByaW50OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdH0sXG5cdFx0c2hvd0Z1bGxzY3JlZW46IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0fSxcblx0XHR2aWV3ZXJIZWlnaHQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogZGVmYXVsdEhlaWdodCxcblx0XHR9LFxuXHRcdHZpZXdlcldpZHRoOiB7XG5cdFx0XHR0eXBlOiAnbnVtYmVyJyxcblx0XHRcdGRlZmF1bHQ6IGRlZmF1bHRXaWR0aCxcblx0XHR9LFxuXHRcdHZpZXdlclNjYWxlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6ICdwYWdlLWFjdHVhbCcsXG5cdFx0fSxcblx0fSxcblx0a2V5d29yZHM6IFsgX18oICdQREYgU2VsZWN0b3InLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSBdLFxuXG5cdGVkaXQoIHByb3BzICkge1xuXHRcdGNvbnN0IG9uRmlsZVNlbGVjdCA9ICggaW1nICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRpbWFnZVVSTDogaW1nLnVybCxcblx0XHRcdFx0aW1nSUQ6IGltZy5pZCxcblx0XHRcdFx0aW1nVGl0bGU6IGltZy50aXRsZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25SZW1vdmVJbWcgPSAoKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGltYWdlVVJMOiBudWxsLFxuXHRcdFx0XHRpbWdJRDogbnVsbCxcblx0XHRcdFx0aW1nVGl0bGU6IG51bGwsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlRG93bmxvYWQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93RG93bmxvYWQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZVByaW50ID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0c2hvd1ByaW50OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVGdWxsc2NyZWVuID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0c2hvd0Z1bGxzY3JlZW46IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvbkhlaWdodENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHQvLyBoYW5kbGUgdGhlIHJlc2V0IGJ1dHRvblxuXHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdFx0XHR2YWx1ZSA9IGRlZmF1bHRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHZpZXdlckhlaWdodDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uV2lkdGhDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0Ly8gaGFuZGxlIHRoZSByZXNldCBidXR0b25cblx0XHRcdGlmICggdW5kZWZpbmVkID09PSB2YWx1ZSApIHtcblx0XHRcdFx0dmFsdWUgPSBkZWZhdWx0V2lkdGg7XG5cdFx0XHR9XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHZpZXdlcldpZHRoOiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25TY2FsZUNoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHZpZXdlclNjYWxlOiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFtcblx0XHRcdDxJbnNwZWN0b3JDb250cm9scyBrZXk9XCJpMVwiPlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdQREYuanMgT3B0aW9ucycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH0+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHQnU2hvdyBEb3dubG9hZCBPcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWRcblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlRG93bmxvYWQgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTaG93IFByaW50IE9wdGlvbicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnRcblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5zaG93UHJpbnQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlUHJpbnQgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0J1Nob3cgRnVsbHNjcmVlbiBPcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5zaG93RnVsbHNjcmVlblxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZUZ1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnRW1iZWQgSGVpZ2h0JywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHQnVmlld2VyIEhlaWdodCAocGl4ZWxzKScsXG5cdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25IZWlnaHRDaGFuZ2UgfVxuXHRcdFx0XHRcdFx0bWluPXsgMCB9XG5cdFx0XHRcdFx0XHRtYXg9eyA1MDAwIH1cblx0XHRcdFx0XHRcdGFsbG93UmVzZXQ9eyB0cnVlIH1cblx0XHRcdFx0XHRcdGluaXRpYWxQb3NpdGlvbj17IGRlZmF1bHRIZWlnaHQgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdFbWJlZCBXaWR0aCcsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH0+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0J1ZpZXdlciBXaWR0aCAocGl4ZWxzKScsXG5cdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRoZWxwPVwiQnkgZGVmYXVsdCAwIHdpbGwgYmUgMTAwJS5cIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25XaWR0aENoYW5nZSB9XG5cdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdG1heD17IDUwMDAgfVxuXHRcdFx0XHRcdFx0YWxsb3dSZXNldD17IHRydWUgfVxuXHRcdFx0XHRcdFx0aW5pdGlhbFBvc2l0aW9uPXsgZGVmYXVsdFdpZHRoIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnU2NhbGUnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlZpZXdlciBTY2FsZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyU2NhbGUgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IFtcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ0FjdHVhbCBTaXplJywgdmFsdWU6ICdwYWdlLWFjdHVhbCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ1BhZ2UgRml0JywgdmFsdWU6ICdwYWdlLWZpdCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ1BhZ2UgV2lkdGgnLCB2YWx1ZTogJ3BhZ2Utd2lkdGgnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICc1MCUnLCB2YWx1ZTogJzUwJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnNzUlJywgdmFsdWU6ICc3NScgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzEwMCUnLCB2YWx1ZTogJzEwMCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzEyNSUnLCB2YWx1ZTogJzEyNScgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzE1MCUnLCB2YWx1ZTogJzE1MCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzIwMCUnLCB2YWx1ZTogJzIwMCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzMwMCUnLCB2YWx1ZTogJzMwMCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzQwMCUnLCB2YWx1ZTogJzQwMCcgfSxcblx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblNjYWxlQ2hhbmdlIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+LFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwZGZqcy13cmFwcGVyIGNvbXBvbmVudHMtcGxhY2Vob2xkZXJcIiBrZXk9XCJpMlwiIHN0eWxlPXt7aGVpZ2h0OiBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodH19PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxzdHJvbmc+eyBfXyggJ1BERi5qcyBFbWJlZCcsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH08L3N0cm9uZz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHsgcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCA/IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXVwbG9hZC13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJkYXNoaWNvbnMgZGFzaGljb25zLW1lZGlhLWRvY3VtZW50XCI+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwZGZqcy10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHsgcHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHsgcHJvcHMuaXNTZWxlY3RlZCA/IChcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsgb25SZW1vdmVJbWcgfT5cblx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnUmVtb3ZlIFBERicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH1cblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQpIDogbnVsbCB9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG9uRmlsZVNlbGVjdCB9XG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMuaW1nSUQgfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17IG9wZW4gfT5cblx0XHRcdFx0XHRcdFx0XHRcdHsgX18oICdDaG9vc2UgUERGJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkgfVxuXHRcdFx0PC9kaXY+LFxuXHRcdF07XG5cdH0sXG5cblx0c2F2ZSggcHJvcHMgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtd3JhcHBlclwiPlxuXHRcdFx0XHR7YFtwZGZqcy12aWV3ZXIgdmlld2VyX3dpZHRoPSR7ICggcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCAhPT0gdW5kZWZpbmVkICkgPyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoIDogZGVmYXVsdFdpZHRoIH0gdmlld2VyX2hlaWdodD0keyAoIHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0ICE9PSB1bmRlZmluZWQgKSA/IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0IDogZGVmYXVsdEhlaWdodCB9IHVybD0keyBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMIH0gZG93bmxvYWQ9JHsgcHJvcHMuYXR0cmlidXRlcy5zaG93RG93bmxvYWQudG9TdHJpbmcoKSB9IHByaW50PSR7IHByb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50LnRvU3RyaW5nKCkgfSBmdWxsc2NyZWVuPSR7IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW4udG9TdHJpbmcoKSB9IHpvb209JHsgcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJTY2FsZS50b1N0cmluZygpfSBdYH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG59ICk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXRvci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wZGZqcy13cmFwcGVyIC5kYXNoaWNvbnMge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbi5wZGZqcy10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7IH1cXG5cXG4ucGRmanMtd3JhcHBlci5jb21wb25lbnRzLXBsYWNlaG9sZGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
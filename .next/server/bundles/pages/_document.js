module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/document"
var document_ = __webpack_require__(17);
var document__default = /*#__PURE__*/__webpack_require__.n(document_);

// CONCATENATED MODULE: ./components/Header.js

/* harmony default export */ var Header = (function () {
  return external__react__default.a.createElement("div", {
    role: "navigation"
  }, external__react__default.a.createElement("nav", {
    className: "navbar navbar-inverse bg-inverse navbar-toggleable-sm navbar-expand-lg"
  }, external__react__default.a.createElement("a", {
    href: "/",
    title: "House Vault",
    className: "logo navbar-brand"
  }, external__react__default.a.createElement("img", {
    src: "/static/housevault-logo.svg",
    alt: "Logo",
    width: "200"
  })), external__react__default.a.createElement("button", {
    className: "navbar-toggler navbar-toggler-right",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, external__react__default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), external__react__default.a.createElement("div", {
    className: "collapse navbar-collapse justify-content-md-end",
    id: "navbarSupportedContent"
  }, external__react__default.a.createElement("ul", {
    className: "nav navbar-nav navbar-right"
  }, external__react__default.a.createElement("li", null, external__react__default.a.createElement("input", {
    type: "text",
    id: "autocompletetop",
    className: "searchfieldtop",
    placeholder: "Search the vault",
    "aria-label": "SEARCH..",
    "aria-describedby": "search-vault"
  })), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "/online-property-valuation",
    title: "Online Property Valuation"
  }, "Online Property Valuation")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "/house-prices",
    title: "Sold Prices"
  }, "Sold Prices")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "/energy-efficiency",
    title: "Energy Efficiency"
  }, "Energy Efficiency")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "/compare",
    title: "Compare"
  }, "Compare"))), external__react__default.a.createElement("ul", {
    className: "social"
  }, external__react__default.a.createElement("li", {
    className: "twitter"
  }, external__react__default.a.createElement("a", {
    href: "https://twitter.com/housevaultuk",
    target: "_blank",
    title: "Twitter"
  }, "Twitter")), external__react__default.a.createElement("li", {
    className: "facebook"
  }, external__react__default.a.createElement("a", {
    href: "https://www.facebook.com/housevault/",
    title: "Facebook",
    target: "_blank"
  }, "Facebook")), external__react__default.a.createElement("li", {
    className: "google-plus"
  }, external__react__default.a.createElement("a", {
    href: "https://plus.google.com/u/0/114451867287456275940",
    title: "Google plus",
    target: "_blank"
  }, "Google plus"))))));
});
// CONCATENATED MODULE: ./components/Footer.js

/* harmony default export */ var Footer = (function () {
  return external__react__default.a.createElement("footer", null, external__react__default.a.createElement("div", {
    className: "container"
  }, external__react__default.a.createElement("div", {
    className: "row col-md-12"
  }, external__react__default.a.createElement("div", {
    className: "col-md-6 row"
  }, external__react__default.a.createElement("div", {
    className: "input-group"
  }, external__react__default.a.createElement("input", {
    type: "text",
    id: "autocomplete-footer",
    className: "form-control searchfield",
    placeholder: "SEARCH THE VAULT",
    "aria-label": "SEARCH THE VAULT",
    "aria-describedby": "search-vault"
  }), external__react__default.a.createElement("div", {
    className: "input-group-append"
  }, external__react__default.a.createElement("button", {
    className: "btn btn-danger",
    type: "submit"
  }, "Go"))), external__react__default.a.createElement("div", {
    className: "col-md-4 footer-links padding-left-0"
  }, external__react__default.a.createElement("h4", null, "Features? "), external__react__default.a.createElement("ul", null, external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "#"
  }, "House Valuation")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "#"
  }, "Energy rating prediction")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "#"
  }, "Broadband Quality")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "#"
  }, "Crime statistics")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "#"
  }, "More here?")))), external__react__default.a.createElement("div", {
    className: "col-md-4 footer-links"
  }, external__react__default.a.createElement("h4", null, "Company"), external__react__default.a.createElement("ul", null, external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "/about-us"
  }, "About us")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "#"
  }, "More stuff here")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "#"
  }, "Other info")))), external__react__default.a.createElement("div", {
    className: "col-md-4 footer-links"
  }, external__react__default.a.createElement("h4", null, "Contact us"), external__react__default.a.createElement("ul", null, external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "#"
  }, "Email")), external__react__default.a.createElement("li", null, external__react__default.a.createElement("a", {
    href: "#"
  }, "Phone?"))))), external__react__default.a.createElement("div", {
    className: "col-md-1"
  }), external__react__default.a.createElement("div", {
    className: "col-md-5 subscribe-section"
  }, external__react__default.a.createElement("h4", null, "Get updates from housevault"), external__react__default.a.createElement("input", {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Name:",
    className: "subscribefield"
  }), external__react__default.a.createElement("input", {
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Email:",
    className: "subscribefield"
  }), external__react__default.a.createElement("input", {
    type: "submit",
    value: "Submit",
    className: "subscribe-submit",
    id: "subscribeajaxSubmit"
  }))), external__react__default.a.createElement("div", {
    className: "row col-md-12"
  }, external__react__default.a.createElement("p", {
    className: "copyright"
  }, "\xA9 Housevault Ltd. All rights reserved"))), external__react__default.a.createElement("div", {
    className: "col-md-12 blank-footer"
  }));
});
// EXTERNAL MODULE: ./styles.scss
var styles = __webpack_require__(18);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./pages/_document.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _document_MyDocument; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ./pages/_document.js





var _document_MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("html", null, external__react__default.a.createElement(document_["Head"], null, external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
        crossOrigin: "anonymous"
      }), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }), external__react__default.a.createElement("title", null, "Search the house vault for the latest property information | House Vault"), external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css"
      }), external__react__default.a.createElement("meta", {
        name: "description",
        content: "View Local information about an address including epc, population, house prices, crime and much more."
      }), external__react__default.a.createElement("script", {
        async: true,
        src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      })), external__react__default.a.createElement(Header, null), external__react__default.a.createElement("body", null, external__react__default.a.createElement(document_["Main"], null), external__react__default.a.createElement(Footer, null), external__react__default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
        crossOrigin: "anonymous"
      }), external__react__default.a.createElement(document_["NextScript"], null)));
    }
  }]);

  return MyDocument;
}(document__default.a);



/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {



/***/ })

/******/ });
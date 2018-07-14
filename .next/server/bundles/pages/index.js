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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reactstrap__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
        role: "main"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "banner"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/banner-bg.jpg",
        alt: "Banner"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "note"
      }, "What\u2019s important to you? Your perfect home is only a search away\u2026")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "searchBox"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-3"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        action: "/search",
        method: "POST"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-group"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        id: "autocomplete",
        className: "form-control searchfield",
        placeholder: "SEARCH THE VAULT",
        "aria-label": "SEARCH THE VAULT",
        "aria-describedby": "search-vault"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-group-append"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-danger",
        type: "submit"
      }, "Go"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "street_number",
        type: "hidden",
        className: "field",
        id: "street_number",
        disabled: "true"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "route",
        type: "hidden",
        className: "field",
        id: "route",
        disabled: "true"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "locality",
        type: "hidden",
        className: "field",
        id: "locality",
        disabled: "true"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "postal_code",
        type: "hidden",
        className: "field",
        id: "postal_code",
        disabled: "true"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "administrative_area_level_1",
        type: "hidden",
        className: "field",
        id: "administrative_area_level_1",
        disabled: "true"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "country",
        type: "hidden",
        className: "field",
        id: "country",
        disabled: "true"
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-3"
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "research-area"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-12 top-box"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-12"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "hd"
      }, "Research in detail any area in the UK, using our powerful database.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-12 area-link row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-2"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-12 col-lg-8"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-3 box property"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "inner"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "icon-bar"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "name"
      }, "Property ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), "Valuation Report"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-3 box interactive"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "inner"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "icon-bar"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "name"
      }, "Interactive ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), "Statistics"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-3 box location"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "inner"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "icon-bar"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "name"
      }, "Location ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), "Information"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-3 box energy"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "inner"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "icon-bar"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "name"
      }, "Energy ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null), "Efficiency")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-lg-2"
      }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "what-is-hv"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-12 bottom-box illustration-1 row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "sec-heading"
      }, "WHAT IS THE HOUSEVAULT?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, "HouseVault, as the name suggests, is the largest known database of property and local information."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Accessing the HouseVault, which uses our leading Machine Learning & Artificial Intelligence technology, gives you free unrestricted access to interactive tools, in-depth reports, statistic and data on every home and location within the UK."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "We believe transparent, accurate and free access will help owners, buyers, tenants, investors and professionals make better informed decisions when researching a home or area. "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Just enter an address above for free access to our unbiased tools, reports & stats or learn more about our service and the technology behind it below."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "#",
        title: "Learn More",
        className: "learn-more"
      }, "Learn more")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "our-technology"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-12 row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "illustration-2"
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6 out-tech-inner"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "tech-heading"
      }, "OUR TECHNOLOGY"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h5", null, "Our experienced team of PhD researchers, data scientists, statisticians, economists and software developers dedicate their time to building the most accurate, unbiased & efficient tools on homes and locations throughout the UK."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "At the core of our technology sits our Machine Learning & Artificial Intelligence algorithms built in-house by our team of PhD researchers and graduates. Thanks in a great part to the UK government\u2019s decision to open up millions of data sets and relationships with private property companies, we have been able to use our skill set to build industry leading models to help UK property professionals and residents make informed decisions at little to no cost."))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "the-future"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-12 row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "sec-heading"
      }, "THE FUTURE IS HERE!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-12 row"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "icon-predict"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "name"
      }, "PREDICT"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "info"
      }, "Our Property Valuation Algorithm can accurately predict a property valuation on any UK home. With up to 95% accuracy and covering 25 million homes in the UK.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "icon-interactive"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "name"
      }, "INTERACTIVE"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "info"
      }, "Interactive maps showing detailed information on local areas, properties and people.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "icon-calculate"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "name"
      }, "CALCULATE"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "info"
      }, "Find out the likely energy cost based on a properties characteristics and predict energy costs if certain measures are carried out. Take control of your future finances.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "icon-research"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "name"
      }, "RESEARCH"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: "info"
      }, "Find property specific information such as age, size, type and compare to the local area")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "illustration-3"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-ld-8 col-sm-12 give-it"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Sounds great? Give it a go\u2026"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-group"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        type: "text",
        id: "autocomplete-future",
        className: "form-control searchfield",
        placeholder: "SEARCH THE VAULT",
        "aria-label": "SEARCH THE VAULT",
        "aria-describedby": "search-vault"
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "input-group-append"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "btn btn-danger",
        type: "submit"
      }, "Go")))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "your-neighbours"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "your-neighbours-right"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-12"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        className: "sec-heading"
      }, "GET TO KNOW YOUR NEIGHBOURS"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "With Housevault you can search for the following information"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Current house prices"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Sold house prices"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Types of property in an area"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "EPC energy ratings"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Local schools and hospitals"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Detailed Demographics"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Culture"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Broadband quality"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "Crime statistics"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-6"
      }))))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
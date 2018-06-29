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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GoogleMapsWithMarkers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps__ = __webpack_require__("react-google-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var _jsxFileName = "/Users/leemellon/Code/Morzuo/nextjs/components/GoogleMapsWithMarkers.js";




var GoogleMapsWithMarkers = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlqPHMEeUsDo4e5zSKGYeCtFuz_apFSYw&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }),
  containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      height: "400px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }),
  mapElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      height: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })
}), __WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withScriptjs"], __WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withGoogleMap"])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["GoogleMap"], {
    defaultZoom: props.zoom,
    defaultCenter: props.markerPosition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.isMarkerShown && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["Marker"], {
    position: props.markerPosition,
    onClick: props.onMarkerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), props.markers.map(function (marker) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["Marker"], {
      key: marker.price,
      position: {
        lat: marker.latitude,
        lng: marker.longitude
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    });
  }));
});
/* unused harmony default export */ var _unused_webpack_default_export = (GoogleMapsWithMarkers);

/***/ }),

/***/ "./components/PropertySidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
var _jsxFileName = "/Users/leemellon/Code/Morzuo/nextjs/components/PropertySidebar.js";


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "nav flex-column nav-pills",
    id: "v-pills-tab",
    role: "tablist",
    "aria-orientation": "vertical",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/property' ? 'active' : null) + " nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Property Profile ", props.url, " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/sold-prices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/sold-prices' ? 'active' : null) + " nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Sold Prices")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/epc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/epc' ? 'active' : null) + " nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Energy Rating")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/local-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/local-area' ? 'active' : null) + " nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Local Area")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-settings",
    role: "tab",
    "aria-controls": "v-pills-settings",
    "aria-selected": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "People"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-settings",
    role: "tab",
    "aria-controls": "v-pills-settings",
    "aria-selected": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Property"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-settings",
    role: "tab",
    "aria-controls": "v-pills-settings",
    "aria-selected": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Culture"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    id: "v-pills-settings-tab",
    "data-toggle": "pill",
    href: "#v-pills-settings",
    role: "tab",
    "aria-controls": "v-pills-settings",
    "aria-selected": "false",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Crime")));
});

/***/ }),

/***/ "./pages/sold-prices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PropertySidebar__ = __webpack_require__("./components/PropertySidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_GoogleMapsWithMarkers__ = __webpack_require__("./components/GoogleMapsWithMarkers.js");

var _jsxFileName = "/Users/leemellon/Code/Morzuo/nextjs/pages/sold-prices.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var SoldPrices =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SoldPrices, _React$Component);

  function SoldPrices() {
    _classCallCheck(this, SoldPrices);

    return _possibleConstructorReturn(this, (SoldPrices.__proto__ || Object.getPrototypeOf(SoldPrices)).apply(this, arguments));
  }

  _createClass(SoldPrices, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container list-page-padding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_PropertySidebar__["a" /* default */], {
        url: this.props.url.pathname,
        postcode: this.props.property.postcode,
        number: this.props.property.house_number,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Sold Prices for ", this.props.property.full_address), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "This property has been sold ", __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.size(this.props.prices), " times."), this.props.prices.map(function (price) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: price.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, __WEBPACK_IMPORTED_MODULE_5_moment___default()(price.sold_date, "DD-MM-YYYY").format("MMMM YYYY")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, "\xA3", price.price)));
      }))));
    }
  }]);

  return SoldPrices;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

SoldPrices.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var req, _ref$query, postcode, address, res, json;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req, _ref$query = _ref.query, postcode = _ref$query.postcode, address = _ref$query.address;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()("http://www.housevault.test/api/address/" + postcode + "/" + address);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", {
              property: json.data,
              prices: json.data.prices.data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (SoldPrices);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__("next-routes")();

routes.add('town', '/town/:town').add('property', '/property/:postcode/:address').add('epc', '/property/:postcode/:address/epc').add('sold-prices', '/property/:postcode/:address/sold-prices').add('local-area', '/property/:postcode/:address/local-area').add('town-postcode-list', '/towns').add('street', '/postcode/:postcode');

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/sold-prices.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-maps":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "recompose":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ })

/******/ });
//# sourceMappingURL=sold-prices.js.map
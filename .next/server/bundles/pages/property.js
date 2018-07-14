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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(5)();

routes.add('index', '/').add('town', '/town/:town').add('property', '/property/:postcode/:address').add('epc', '/property/:postcode/:address/epc').add('sold-prices', '/property/:postcode/:address/sold-prices').add('local-area', '/property/:postcode/:address/local-area').add('culture', '/property/:postcode/:address/culture').add('property-stats', '/property/:postcode/:address/property-stats').add('people', '/property/:postcode/:address/people').add('town-postcode-list', '/towns').add('street', '/postcode/:postcode');

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);


/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "col-3"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "nav flex-column nav-pills",
    id: "v-pills-tab",
    role: "tablist",
    "aria-orientation": "vertical"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/property' ? 'active' : null) + " nav-link"
  }, "Property Profile ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/sold-prices"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/sold-prices' ? 'active' : null) + " nav-link"
  }, "Sold Prices")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/epc"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/epc' ? 'active' : null) + " nav-link"
  }, "Energy Rating")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/local-area"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/local-area' ? 'active' : null) + " nav-link"
  }, "Local Area")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/people"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/people' ? 'active' : null) + " nav-link"
  }, "People")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/property-stats"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/property-stats' ? 'active' : null) + " nav-link"
  }, "Property Stats")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/culture"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/culture' ? 'active' : null) + " nav-link"
  }, "Culture")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__routes__["Link"], {
    route: "/property/" + props.postcode + "/" + props.number + "/crime"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: (props.url === '/crime' ? 'active' : null) + " nav-link"
  }, "Crime"))));
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);




var GoogleMaps = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlqPHMEeUsDo4e5zSKGYeCtFuz_apFSYw&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      height: "100%"
    }
  }),
  containerElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      height: "400px"
    }
  }),
  mapElement: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      height: "100%"
    }
  })
}), __WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withScriptjs"], __WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withGoogleMap"])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["GoogleMap"], {
    defaultZoom: props.zoom,
    defaultCenter: props.markerPosition
  }, props.isMarkerShown && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["Marker"], {
    position: props.markerPosition,
    onClick: props.onMarkerClick
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (GoogleMaps);

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(1);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./components/StreetView.js


var _require = __webpack_require__(8),
    compose = _require.compose,
    withProps = _require.withProps;

var _require2 = __webpack_require__(9),
    withScriptjs = _require2.withScriptjs,
    withGoogleMap = _require2.withGoogleMap,
    GoogleMap = _require2.GoogleMap,
    StreetViewPanorama = _require2.StreetViewPanorama;

var StreetView = compose(withProps({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlqPHMEeUsDo4e5zSKGYeCtFuz_apFSYw&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: external__react__default.a.createElement("div", {
    style: {
      height: "100%"
    }
  }),
  containerElement: external__react__default.a.createElement("div", {
    style: {
      height: "400px"
    }
  }),
  mapElement: external__react__default.a.createElement("div", {
    style: {
      height: "100%"
    }
  })
}), withScriptjs, withGoogleMap)(function (props) {
  return external__react__default.a.createElement(GoogleMap, {
    defaultZoom: 8,
    defaultCenter: props.markerPosition
  }, external__react__default.a.createElement(StreetViewPanorama, {
    defaultPosition: props.markerPosition,
    visible: true
  }));
});
/* harmony default export */ var components_StreetView = (StreetView);
// EXTERNAL MODULE: ./components/GoogleMaps.js
var GoogleMaps = __webpack_require__(13);

// EXTERNAL MODULE: ./components/PropertySidebar.js
var PropertySidebar = __webpack_require__(7);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external__isomorphic_fetch_ = __webpack_require__(2);
var external__isomorphic_fetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_fetch_);

// CONCATENATED MODULE: ./pages/property.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var property_Property =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Property, _React$Component);

  function Property(props) {
    var _this;

    _classCallCheck(this, Property);

    _this = _possibleConstructorReturn(this, (Property.__proto__ || Object.getPrototypeOf(Property)).call(this, props));
    _this.state = {
      isMarkerShown: false
    };
    return _this;
  }

  _createClass(Property, [{
    key: "delayedShowMarker",
    value: function delayedShowMarker() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          isMarkerShown: true
        });
      }, 3000);
    }
  }, {
    key: "handleMarkerClick",
    value: function handleMarkerClick() {
      this.setState({
        isMarkerShown: false
      });
      this.delayedShowMarker();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.delayedShowMarker();
    }
  }, {
    key: "render",
    value: function render() {
      var marker = {
        lng: external__lodash__default.a.toNumber(this.props.address.lng),
        lat: external__lodash__default.a.toNumber(this.props.address.lat)
      };
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col-12"
      }, external__react__default.a.createElement(GoogleMaps["a" /* default */], {
        isMarkerShown: this.state.isMarkerShown,
        onMarkerClick: this.handleMarkerClick,
        markerPosition: marker,
        zoom: 11
      })), external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement(PropertySidebar["a" /* default */], {
        url: this.props.url.pathname,
        postcode: this.props.address.postcode,
        number: this.props.address.house_number
      }), external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, this.props.address.full_address, " is in the ", this.props.address.postcode_details.data.parlimentary_constituency_name, " Constituency"), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "card"
      }, external__react__default.a.createElement("div", {
        className: "card-body"
      }, external__react__default.a.createElement("h5", {
        className: "card-title"
      }, "Address"), this.props.address.full_address))), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "card"
      }, external__react__default.a.createElement("div", {
        className: "card-body"
      }, external__react__default.a.createElement("h5", {
        className: "card-title"
      }, "Locality Information"), external__react__default.a.createElement("ul", {
        className: "list-unstyled"
      }, external__react__default.a.createElement("li", null, "Ward: ", this.props.address.postcode_details.data.ward_name), external__react__default.a.createElement("li", null, "Town: ", this.props.address.town), external__react__default.a.createElement("li", null, "Constituency: ", this.props.address.postcode_details.data.parlimentary_constituency_name), external__react__default.a.createElement("li", null, "Region: ", this.props.address.postcode_details.data.region_name), external__react__default.a.createElement("li", null, "Local Authority: ", this.props.address.postcode_details.data.local_authority_name)))))), external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement(components_StreetView, {
        isMarkerShown: this.state.isMarkerShown,
        onMarkerClick: this.handleMarkerClick,
        markerPosition: marker,
        zoom: 11
      }))))))));
    }
  }]);

  return Property;
}(external__react__default.a.Component);

property_Property.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(_ref) {
    var req, _ref$query, postcode, address, res, json;

    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req, _ref$query = _ref.query, postcode = _ref$query.postcode, address = _ref$query.address;
            _context.next = 3;
            return external__isomorphic_fetch__default()("https://dev.housevault.co.uk/api/address/" + postcode + "/" + address);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", {
              address: json.data
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

/* harmony default export */ var property = __webpack_exports__["default"] = (property_Property);

/***/ })
/******/ ]);
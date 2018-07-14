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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var LocalAreaList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LocalAreaList, _React$Component);

  function LocalAreaList() {
    _classCallCheck(this, LocalAreaList);

    return _possibleConstructorReturn(this, (LocalAreaList.__proto__ || Object.getPrototypeOf(LocalAreaList)).apply(this, arguments));
  }

  _createClass(LocalAreaList, [{
    key: "render",
    value: function render() {
      if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(this.props.list)) {
        return 'Loading';
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "table-responsive"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("table", {
        className: "table"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("thead", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", null, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", null, "Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
        className: "text-right"
      }, "Distance"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tbody", null, this.props.list.map(function (hospital) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
          key: hospital.id
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", null, hospital.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
          className: "text-right"
        }, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.round(hospital.distance, 1), " miles"));
      }))));
    }
  }]);

  return LocalAreaList;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LocalAreaList);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("moment/moment");

/***/ }),
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
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
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
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

// EXTERNAL MODULE: external "isomorphic-fetch"
var external__isomorphic_fetch_ = __webpack_require__(2);
var external__isomorphic_fetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_fetch_);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(14);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// EXTERNAL MODULE: ./components/GoogleMaps.js
var GoogleMaps = __webpack_require__(13);

// EXTERNAL MODULE: external "react-chartjs-2"
var external__react_chartjs_2_ = __webpack_require__(6);
var external__react_chartjs_2__default = /*#__PURE__*/__webpack_require__.n(external__react_chartjs_2_);

// CONCATENATED MODULE: ./components/census/CensusHousingType.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CensusHousingType_CensusHousingType =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CensusHousingType, _React$Component);

  function CensusHousingType(props) {
    var _this;

    _classCallCheck(this, CensusHousingType);

    _this = _possibleConstructorReturn(this, (CensusHousingType.__proto__ || Object.getPrototypeOf(CensusHousingType)).call(this, props));
    _this.state = {
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  _createClass(CensusHousingType, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCensusGraphs(this.props.areacode);
    }
  }, {
    key: "getCensusGraphs",
    value: function getCensusGraphs(areacode) {
      this.setState({
        propertyGraphsLoading: true
      });
      var self = this;
      fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_618_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527').then(function (response) {
        return response.json();
      }).then(function (census) {
        var values = census.value;
        var keys = Object.values(census.dimension.cell.category.label);
        var table = [];
        var arr = [];

        external__lodash__default.a.each(keys, function (k, i) {
          table[k] = values[i];
        });

        self.setState(function (prevState) {
          return {
            propertyGraphsLoading: false,
            census: table
          };
        });
      });
    }
  }, {
    key: "formatData",
    value: function formatData() {
      var data = this.state.census;
      var census = {
        'Detached': external__lodash__default.a.get(data, 'Whole house or bungalow: Detached'),
        'Semi Detached': external__lodash__default.a.get(data, 'Whole house or bungalow: Semi-detached'),
        'Terraced': external__lodash__default.a.get(data, 'Whole house or bungalow: Terraced (including end-terrace)'),
        'Flat (Purpose Built)': external__lodash__default.a.get(data, 'Flat, maisonette or apartment: Purpose-built block of flats or tenement'),
        'Flat (Converted)': external__lodash__default.a.get(data, 'Flat, maisonette or apartment: Part of a converted or shared house (including bed-sits)')
      };
      return census;
    }
  }, {
    key: "render",
    value: function render() {
      var census = this.formatData();
      var options = {
        title: {
          display: true,
          text: 'Housing Types'
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      };
      var d = {
        'labels': external__lodash__default.a.keys(census),
        datasets: [{
          label: this.props.label,
          data: external__lodash__default.a.values(census),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }]
      };
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, this.props.type === 'Bar' ? external__react__default.a.createElement(external__react_chartjs_2_["Bar"], {
        data: d,
        options: options
      }) : external__react__default.a.createElement(external__react_chartjs_2_["Doughnut"], {
        data: d,
        options: options
      }))));
    }
  }]);

  return CensusHousingType;
}(external__react__default.a.Component);

/* harmony default export */ var census_CensusHousingType = (CensusHousingType_CensusHousingType);
// CONCATENATED MODULE: ./components/census/CensusHousingTenure.js
function CensusHousingTenure__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CensusHousingTenure__typeof = function _typeof(obj) { return typeof obj; }; } else { CensusHousingTenure__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CensusHousingTenure__typeof(obj); }

function CensusHousingTenure__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CensusHousingTenure__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CensusHousingTenure__createClass(Constructor, protoProps, staticProps) { if (protoProps) CensusHousingTenure__defineProperties(Constructor.prototype, protoProps); if (staticProps) CensusHousingTenure__defineProperties(Constructor, staticProps); return Constructor; }

function CensusHousingTenure__possibleConstructorReturn(self, call) { if (call && (CensusHousingTenure__typeof(call) === "object" || typeof call === "function")) { return call; } return CensusHousingTenure__assertThisInitialized(self); }

function CensusHousingTenure__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CensusHousingTenure__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CensusHousingTenure_CensusHousingType =
/*#__PURE__*/
function (_React$Component) {
  CensusHousingTenure__inherits(CensusHousingType, _React$Component);

  function CensusHousingType(props) {
    var _this;

    CensusHousingTenure__classCallCheck(this, CensusHousingType);

    _this = CensusHousingTenure__possibleConstructorReturn(this, (CensusHousingType.__proto__ || Object.getPrototypeOf(CensusHousingType)).call(this, props));
    _this.state = {
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  CensusHousingTenure__createClass(CensusHousingType, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCensusGraphs(this.props.areacode);
    }
  }, {
    key: "getCensusGraphs",
    value: function getCensusGraphs(areacode) {
      this.setState({
        propertyGraphsLoading: true
      });
      var self = this;
      fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_619_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527').then(function (response) {
        return response.json();
      }).then(function (census) {
        var values = census.value;
        var keys = Object.values(census.dimension.cell.category.label);
        var table = [];

        external__lodash__default.a.each(keys, function (k, i) {
          table[k] = values[i];
        });

        self.setState(function (prevState) {
          return {
            propertyGraphsLoading: false,
            census: table
          };
        });
      });
    }
  }, {
    key: "formatData",
    value: function formatData() {
      var data = this.state.census;
      var census = {
        'Owned Outright': external__lodash__default.a.get(data, 'Owned: Owned outright'),
        'Owned with Mortgage': external__lodash__default.a.get(data, 'Owned: Owned with a mortgage or loan'),
        'Shared Ownership': external__lodash__default.a.get(data, 'Shared ownership (part owned and part rented)'),
        'Rented: From Council': external__lodash__default.a.get(data, 'Social rented: Rented from council (Local Authority)'),
        'Rented: Private': external__lodash__default.a.get(data, 'Social rented: Other'),
        'Rent Free': external__lodash__default.a.get(data, 'Living rent free')
      };
      return census;
    }
  }, {
    key: "render",
    value: function render() {
      var census = this.formatData();
      var options = {
        title: {
          display: true,
          text: 'Housing Tenure'
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      };
      var d = {
        'labels': external__lodash__default.a.keys(census),
        datasets: [{
          label: this.props.label,
          data: external__lodash__default.a.values(census),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }]
      };
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, this.props.type === 'Bar' ? external__react__default.a.createElement(external__react_chartjs_2_["Bar"], {
        data: d,
        options: options
      }) : external__react__default.a.createElement(external__react_chartjs_2_["Doughnut"], {
        data: d,
        options: options
      }))));
    }
  }]);

  return CensusHousingType;
}(external__react__default.a.Component);

/* harmony default export */ var CensusHousingTenure = (CensusHousingTenure_CensusHousingType);
// CONCATENATED MODULE: ./components/census/CensusEthnicGroup.js
function CensusEthnicGroup__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CensusEthnicGroup__typeof = function _typeof(obj) { return typeof obj; }; } else { CensusEthnicGroup__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CensusEthnicGroup__typeof(obj); }

function CensusEthnicGroup__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CensusEthnicGroup__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CensusEthnicGroup__createClass(Constructor, protoProps, staticProps) { if (protoProps) CensusEthnicGroup__defineProperties(Constructor.prototype, protoProps); if (staticProps) CensusEthnicGroup__defineProperties(Constructor, staticProps); return Constructor; }

function CensusEthnicGroup__possibleConstructorReturn(self, call) { if (call && (CensusEthnicGroup__typeof(call) === "object" || typeof call === "function")) { return call; } return CensusEthnicGroup__assertThisInitialized(self); }

function CensusEthnicGroup__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CensusEthnicGroup__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CensusEthnicGroup_CensusEthnicGroup =
/*#__PURE__*/
function (_React$Component) {
  CensusEthnicGroup__inherits(CensusEthnicGroup, _React$Component);

  function CensusEthnicGroup(props) {
    var _this;

    CensusEthnicGroup__classCallCheck(this, CensusEthnicGroup);

    _this = CensusEthnicGroup__possibleConstructorReturn(this, (CensusEthnicGroup.__proto__ || Object.getPrototypeOf(CensusEthnicGroup)).call(this, props));
    _this.state = {
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  CensusEthnicGroup__createClass(CensusEthnicGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCensusGraphs(this.props.areacode);
    }
  }, {
    key: "getCensusGraphs",
    value: function getCensusGraphs(areacode) {
      this.setState({
        propertyGraphsLoading: true
      });
      var self = this;
      fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_608_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527').then(function (response) {
        return response.json();
      }).then(function (census) {
        var values = census.value;
        var keys = Object.values(census.dimension.cell.category.label);
        var table = [];
        var arr = [];

        external__lodash__default.a.each(keys, function (k, i) {
          table[k] = values[i];
        });

        self.setState(function (prevState) {
          return {
            propertyGraphsLoading: false,
            census: table
          };
        });
      });
    }
  }, {
    key: "formatData",
    value: function formatData() {
      var data = this.state.census;
      var census = {
        'White': external__lodash__default.a.get(data, 'White') + external__lodash__default.a.get(data, 'White: English/Welsh/Scottish/Northern Irish/British') + external__lodash__default.a.get(data, 'White: Gypsy or Irish Traveller') + external__lodash__default.a.get(data, 'White: Irish') + external__lodash__default.a.get(data, 'White: Other White'),
        'Mixed Ethnicity': external__lodash__default.a.get(data, 'Mixed/multiple ethnic groups') + external__lodash__default.a.get(data, 'Mixed/multiple ethnic groups: Other Mixed') + external__lodash__default.a.get(data, 'Mixed/multiple ethnic groups: White and Asian') + external__lodash__default.a.get(data, 'Mixed/multiple ethnic groups: White and Black African') + external__lodash__default.a.get(data, 'Mixed/multiple ethnic groups: White and Black Caribbean'),
        'Asian': external__lodash__default.a.get(data, 'Asian/Asian British') + external__lodash__default.a.get(data, 'Asian/Asian British: Bangladeshi') + external__lodash__default.a.get(data, 'Asian/Asian British: Chinese') + external__lodash__default.a.get(data, 'Asian/Asian British: Indian') + external__lodash__default.a.get(data, 'Asian/Asian British: Other Asian') + external__lodash__default.a.get(data, 'Asian/Asian British: Pakistani'),
        'Black': external__lodash__default.a.get(data, 'Black/African/Caribbean/Black British') + external__lodash__default.a.get(data, 'Black/African/Caribbean/Black British: African') + external__lodash__default.a.get(data, 'Black/African/Caribbean/Black British: Caribbean') + external__lodash__default.a.get(data, 'Black/African/Caribbean/Black British: Other Black'),
        'Other': external__lodash__default.a.get(data, 'Other ethnic group') + external__lodash__default.a.get(data, 'Other ethnic group: Any other ethnic group') + external__lodash__default.a.get(data, 'Other ethnic group: Arab')
      };
      return census;
    }
  }, {
    key: "render",
    value: function render() {
      var census = this.formatData();
      var options = {
        title: {
          display: true,
          text: 'Ethnic Group'
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      };
      var d = {
        'labels': external__lodash__default.a.keys(census),
        datasets: [{
          label: this.props.label,
          data: external__lodash__default.a.values(census),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }]
      };
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, this.props.type === 'Bar' ? external__react__default.a.createElement(external__react_chartjs_2_["Bar"], {
        data: d,
        options: options
      }) : external__react__default.a.createElement(external__react_chartjs_2_["Doughnut"], {
        data: d,
        options: options
      }))));
    }
  }]);

  return CensusEthnicGroup;
}(external__react__default.a.Component);

/* harmony default export */ var census_CensusEthnicGroup = (CensusEthnicGroup_CensusEthnicGroup);
// EXTERNAL MODULE: ./components/LocalAreaList.js
var LocalAreaList = __webpack_require__(10);

// CONCATENATED MODULE: ./components/census/CensusReligion.js
function CensusReligion__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CensusReligion__typeof = function _typeof(obj) { return typeof obj; }; } else { CensusReligion__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CensusReligion__typeof(obj); }

function CensusReligion__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CensusReligion__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CensusReligion__createClass(Constructor, protoProps, staticProps) { if (protoProps) CensusReligion__defineProperties(Constructor.prototype, protoProps); if (staticProps) CensusReligion__defineProperties(Constructor, staticProps); return Constructor; }

function CensusReligion__possibleConstructorReturn(self, call) { if (call && (CensusReligion__typeof(call) === "object" || typeof call === "function")) { return call; } return CensusReligion__assertThisInitialized(self); }

function CensusReligion__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CensusReligion__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CensusReligion_CensusReligion =
/*#__PURE__*/
function (_React$Component) {
  CensusReligion__inherits(CensusReligion, _React$Component);

  function CensusReligion(props) {
    var _this;

    CensusReligion__classCallCheck(this, CensusReligion);

    _this = CensusReligion__possibleConstructorReturn(this, (CensusReligion.__proto__ || Object.getPrototypeOf(CensusReligion)).call(this, props));
    _this.state = {
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  CensusReligion__createClass(CensusReligion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCensusGraphs(this.props.areacode);
    }
  }, {
    key: "getCensusGraphs",
    value: function getCensusGraphs(areacode) {
      this.setState({
        propertyGraphsLoading: true
      });
      var self = this;
      fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_616_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527').then(function (response) {
        return response.json();
      }).then(function (census) {
        var values = census.value;
        var keys = Object.values(census.dimension.cell.category.label);
        var table = [];
        var arr = [];

        external__lodash__default.a.each(keys, function (k, i) {
          table[k] = values[i];
        });

        self.setState(function (prevState) {
          return {
            propertyGraphsLoading: false,
            census: table
          };
        });
      });
    }
  }, {
    key: "formatData",
    value: function formatData() {
      var data = this.state.census;
      var census = {
        'Buddhist': external__lodash__default.a.get(data, 'Buddhist'),
        'Christian': external__lodash__default.a.get(data, 'Christian'),
        'Has religion': external__lodash__default.a.get(data, 'Has religion'),
        'Hindu': external__lodash__default.a.get(data, 'Hindu'),
        'Jewish': external__lodash__default.a.get(data, 'Jewish'),
        'Muslim': external__lodash__default.a.get(data, 'Muslim'),
        'Sikh': external__lodash__default.a.get(data, 'Sikh'),
        'No religion': external__lodash__default.a.get(data, 'No religion'),
        'Other religion': external__lodash__default.a.get(data, 'Other religion'),
        'Religion not stated': external__lodash__default.a.get(data, 'Religion not stated')
      };
      return census;
    }
  }, {
    key: "render",
    value: function render() {
      var census = this.formatData();
      var options = {
        title: {
          display: true,
          text: 'Religion'
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      };
      var d = {
        'labels': external__lodash__default.a.keys(census),
        datasets: [{
          label: this.props.label,
          data: external__lodash__default.a.values(census),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }]
      };
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, this.props.type === 'Bar' ? external__react__default.a.createElement(external__react_chartjs_2_["Bar"], {
        data: d,
        options: options
      }) : external__react__default.a.createElement(external__react_chartjs_2_["Doughnut"], {
        data: d,
        options: options
      }))));
    }
  }]);

  return CensusReligion;
}(external__react__default.a.Component);

/* harmony default export */ var census_CensusReligion = (CensusReligion_CensusReligion);
// CONCATENATED MODULE: ./components/census/CensusAge.js
function CensusAge__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CensusAge__typeof = function _typeof(obj) { return typeof obj; }; } else { CensusAge__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CensusAge__typeof(obj); }

function CensusAge__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CensusAge__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CensusAge__createClass(Constructor, protoProps, staticProps) { if (protoProps) CensusAge__defineProperties(Constructor.prototype, protoProps); if (staticProps) CensusAge__defineProperties(Constructor, staticProps); return Constructor; }

function CensusAge__possibleConstructorReturn(self, call) { if (call && (CensusAge__typeof(call) === "object" || typeof call === "function")) { return call; } return CensusAge__assertThisInitialized(self); }

function CensusAge__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CensusAge__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CensusAge_CensusAge =
/*#__PURE__*/
function (_React$Component) {
  CensusAge__inherits(CensusAge, _React$Component);

  function CensusAge(props) {
    var _this;

    CensusAge__classCallCheck(this, CensusAge);

    _this = CensusAge__possibleConstructorReturn(this, (CensusAge.__proto__ || Object.getPrototypeOf(CensusAge)).call(this, props));
    _this.state = {
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  CensusAge__createClass(CensusAge, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCensusGraphs(this.props.areacode);
    }
  }, {
    key: "getCensusGraphs",
    value: function getCensusGraphs(areacode) {
      this.setState({
        propertyGraphsLoading: true
      });
      var self = this;
      fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_145_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527').then(function (response) {
        return response.json();
      }).then(function (census) {
        var values = census.value;
        var keys = Object.values(census.dimension.cell.category.label);
        var table = [];
        var arr = [];

        external__lodash__default.a.each(keys, function (k, i) {
          table[k] = values[i];
        });

        self.setState(function (prevState) {
          return {
            propertyGraphsLoading: false,
            census: table
          };
        });
      });
    }
  }, {
    key: "formatData",
    value: function formatData() {
      var data = this.state.census;
      var census = {
        '0 - 14': external__lodash__default.a.get(data, 'Age 0 to 4') + external__lodash__default.a.get(data, 'Age 5 to 7') + external__lodash__default.a.get(data, 'Age 8 to 9') + external__lodash__default.a.get(data, 'Age 10 to 14') + external__lodash__default.a.get(data, 'Age 15'),
        '15 - 24': external__lodash__default.a.get(data, 'Age 16 to 17') + external__lodash__default.a.get(data, 'Age 18 to 19') + external__lodash__default.a.get(data, 'Age 20 to 24'),
        '25 - 44': external__lodash__default.a.get(data, 'Age 25 to 29') + external__lodash__default.a.get(data, 'Age 30 to 44'),
        '45 - 64': external__lodash__default.a.get(data, 'Age 45 to 59') + external__lodash__default.a.get(data, 'Age 60 to 64'),
        '65 +': external__lodash__default.a.get(data, 'Age 65 to 74') + external__lodash__default.a.get(data, 'Age 75 to 84') + external__lodash__default.a.get(data, 'Age 85 to 89') + external__lodash__default.a.get(data, 'Age 90 and over')
      };
      return census;
    }
  }, {
    key: "render",
    value: function render() {
      var census = this.formatData();
      var options = {
        title: {
          display: true,
          text: 'Age'
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      };
      var d = {
        'labels': external__lodash__default.a.keys(census),
        datasets: [{
          label: 'Age',
          data: external__lodash__default.a.values(census),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }]
      };
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, this.props.type === 'Bar' ? external__react__default.a.createElement(external__react_chartjs_2_["Bar"], {
        data: d,
        options: options
      }) : external__react__default.a.createElement(external__react_chartjs_2_["Doughnut"], {
        data: d,
        options: options
      }))));
    }
  }]);

  return CensusAge;
}(external__react__default.a.Component);

/* harmony default export */ var census_CensusAge = (CensusAge_CensusAge);
// CONCATENATED MODULE: ./components/census/CensusGender.js
function CensusGender__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CensusGender__typeof = function _typeof(obj) { return typeof obj; }; } else { CensusGender__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CensusGender__typeof(obj); }

function CensusGender__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CensusGender__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CensusGender__createClass(Constructor, protoProps, staticProps) { if (protoProps) CensusGender__defineProperties(Constructor.prototype, protoProps); if (staticProps) CensusGender__defineProperties(Constructor, staticProps); return Constructor; }

function CensusGender__possibleConstructorReturn(self, call) { if (call && (CensusGender__typeof(call) === "object" || typeof call === "function")) { return call; } return CensusGender__assertThisInitialized(self); }

function CensusGender__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CensusGender__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CensusGender_CensusHousingType =
/*#__PURE__*/
function (_React$Component) {
  CensusGender__inherits(CensusHousingType, _React$Component);

  function CensusHousingType(props) {
    var _this;

    CensusGender__classCallCheck(this, CensusHousingType);

    _this = CensusGender__possibleConstructorReturn(this, (CensusHousingType.__proto__ || Object.getPrototypeOf(CensusHousingType)).call(this, props));
    _this.state = {
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  CensusGender__createClass(CensusHousingType, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCensusGraphs(this.props.areacode);
    }
  }, {
    key: "getCensusGraphs",
    value: function getCensusGraphs(areacode) {
      this.setState({
        propertyGraphsLoading: true
      });
      var self = this;
      fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_144_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527').then(function (response) {
        return response.json();
      }).then(function (census) {
        var values = census.value;
        var keys = Object.values(census.dimension.cell.category.label);
        var table = [];

        external__lodash__default.a.each(keys, function (k, i) {
          table[k] = values[i];
        });

        self.setState(function (prevState) {
          return {
            propertyGraphsLoading: false,
            census: table
          };
        });
      });
    }
  }, {
    key: "formatData",
    value: function formatData() {
      var data = this.state.census;
      var census = {
        'Male': external__lodash__default.a.get(data, 'Males'),
        'Female': external__lodash__default.a.get(data, 'Females')
      };
      return census;
    }
  }, {
    key: "render",
    value: function render() {
      var census = this.formatData();
      var options = {
        title: {
          display: true,
          text: 'Gender'
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      };
      var d = {
        'labels': external__lodash__default.a.keys(census),
        datasets: [{
          label: this.props.label,
          data: external__lodash__default.a.values(census),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }]
      };
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, this.props.type === 'Bar' ? external__react__default.a.createElement(external__react_chartjs_2_["Bar"], {
        data: d,
        options: options
      }) : external__react__default.a.createElement(external__react_chartjs_2_["Doughnut"], {
        data: d,
        options: options
      }))));
    }
  }]);

  return CensusHousingType;
}(external__react__default.a.Component);

/* harmony default export */ var CensusGender = (CensusGender_CensusHousingType);
// CONCATENATED MODULE: ./components/census/CensusHealth.js
function CensusHealth__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CensusHealth__typeof = function _typeof(obj) { return typeof obj; }; } else { CensusHealth__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CensusHealth__typeof(obj); }

function CensusHealth__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CensusHealth__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CensusHealth__createClass(Constructor, protoProps, staticProps) { if (protoProps) CensusHealth__defineProperties(Constructor.prototype, protoProps); if (staticProps) CensusHealth__defineProperties(Constructor, staticProps); return Constructor; }

function CensusHealth__possibleConstructorReturn(self, call) { if (call && (CensusHealth__typeof(call) === "object" || typeof call === "function")) { return call; } return CensusHealth__assertThisInitialized(self); }

function CensusHealth__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CensusHealth__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CensusHealth_CensusHealth =
/*#__PURE__*/
function (_React$Component) {
  CensusHealth__inherits(CensusHealth, _React$Component);

  function CensusHealth(props) {
    var _this;

    CensusHealth__classCallCheck(this, CensusHealth);

    _this = CensusHealth__possibleConstructorReturn(this, (CensusHealth.__proto__ || Object.getPrototypeOf(CensusHealth)).call(this, props));
    _this.state = {
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  CensusHealth__createClass(CensusHealth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCensusGraphs(this.props.areacode);
    }
  }, {
    key: "getCensusGraphs",
    value: function getCensusGraphs(areacode) {
      this.setState({
        propertyGraphsLoading: true
      });
      var self = this;
      fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_617_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527').then(function (response) {
        return response.json();
      }).then(function (census) {
        var values = census.value;
        var keys = Object.values(census.dimension.cell.category.label);
        var table = [];

        external__lodash__default.a.each(keys, function (k, i) {
          table[k] = values[i];
        });

        self.setState(function (prevState) {
          return {
            propertyGraphsLoading: false,
            census: table
          };
        });
      });
    }
  }, {
    key: "formatData",
    value: function formatData() {
      var data = this.state.census;
      var census = {
        'Very good health': external__lodash__default.a.get(data, 'Very good health'),
        'Good health': external__lodash__default.a.get(data, 'Good health'),
        'Fair health': external__lodash__default.a.get(data, 'Fair health'),
        'Bad health': external__lodash__default.a.get(data, 'Bad health'),
        'Very Bad health': external__lodash__default.a.get(data, 'Very bad health')
      };
      return census;
    }
  }, {
    key: "render",
    value: function render() {
      var census = this.formatData();
      var options = {
        title: {
          display: true,
          text: 'Health'
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      };
      var d = {
        'labels': external__lodash__default.a.keys(census),
        datasets: [{
          data: external__lodash__default.a.values(census),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }]
      };
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, this.props.type === 'Bar' ? external__react__default.a.createElement(external__react_chartjs_2_["Bar"], {
        data: d,
        options: options
      }) : external__react__default.a.createElement(external__react_chartjs_2_["Doughnut"], {
        data: d,
        options: options
      }))));
    }
  }]);

  return CensusHealth;
}(external__react__default.a.Component);

/* harmony default export */ var census_CensusHealth = (CensusHealth_CensusHealth);
// CONCATENATED MODULE: ./components/census/CensusEducation.js
function CensusEducation__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CensusEducation__typeof = function _typeof(obj) { return typeof obj; }; } else { CensusEducation__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CensusEducation__typeof(obj); }

function CensusEducation__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CensusEducation__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CensusEducation__createClass(Constructor, protoProps, staticProps) { if (protoProps) CensusEducation__defineProperties(Constructor.prototype, protoProps); if (staticProps) CensusEducation__defineProperties(Constructor, staticProps); return Constructor; }

function CensusEducation__possibleConstructorReturn(self, call) { if (call && (CensusEducation__typeof(call) === "object" || typeof call === "function")) { return call; } return CensusEducation__assertThisInitialized(self); }

function CensusEducation__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CensusEducation__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CensusEducation_CensusEducation =
/*#__PURE__*/
function (_React$Component) {
  CensusEducation__inherits(CensusEducation, _React$Component);

  function CensusEducation(props) {
    var _this;

    CensusEducation__classCallCheck(this, CensusEducation);

    _this = CensusEducation__possibleConstructorReturn(this, (CensusEducation.__proto__ || Object.getPrototypeOf(CensusEducation)).call(this, props));
    _this.state = {
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  CensusEducation__createClass(CensusEducation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCensusGraphs(this.props.areacode);
    }
  }, {
    key: "getCensusGraphs",
    value: function getCensusGraphs(areacode) {
      this.setState({
        propertyGraphsLoading: true
      });
      var self = this;
      fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_623_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527').then(function (response) {
        return response.json();
      }).then(function (census) {
        var values = census.value;
        var keys = Object.values(census.dimension.cell.category.label);
        var table = [];

        external__lodash__default.a.each(keys, function (k, i) {
          table[k] = values[i];
        });

        self.setState(function (prevState) {
          return {
            propertyGraphsLoading: false,
            census: table
          };
        });
      });
    }
  }, {
    key: "formatData",
    value: function formatData() {
      var data = this.state.census;
      var census = {
        'Degree or similar': external__lodash__default.a.get(data, 'Highest level of qualification: Level 4 qualifications and above'),
        'Apprenticeship': external__lodash__default.a.get(data, 'Highest level of qualification: Apprenticeship'),
        '2+ A Levels': external__lodash__default.a.get(data, 'Highest level of qualification: Level 3 qualifications'),
        '1-4 GCSEs': external__lodash__default.a.get(data, 'Highest level of qualification: Level 1 qualifications'),
        'No GCSEs': external__lodash__default.a.get(data, 'No qualifications'),
        'Other': external__lodash__default.a.get(data, 'Highest level of qualification: Other qualifications')
      };
      return census;
    }
  }, {
    key: "render",
    value: function render() {
      var census = this.formatData();
      var options = {
        title: {
          display: true,
          text: 'Education'
        },
        legend: {
          display: true,
          position: 'bottom'
        }
      };
      var d = {
        'labels': external__lodash__default.a.keys(census),
        datasets: [{
          label: this.props.label,
          data: external__lodash__default.a.values(census),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }]
      };
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, this.props.type === 'Bar' ? external__react__default.a.createElement(external__react_chartjs_2_["Bar"], {
        data: d,
        options: options
      }) : external__react__default.a.createElement(external__react_chartjs_2_["Doughnut"], {
        data: d,
        options: options
      }))));
    }
  }]);

  return CensusEducation;
}(external__react__default.a.Component);

/* harmony default export */ var census_CensusEducation = (CensusEducation_CensusEducation);
// CONCATENATED MODULE: ./pages/street.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function street__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { street__typeof = function _typeof(obj) { return typeof obj; }; } else { street__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return street__typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function street__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function street__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function street__createClass(Constructor, protoProps, staticProps) { if (protoProps) street__defineProperties(Constructor.prototype, protoProps); if (staticProps) street__defineProperties(Constructor, staticProps); return Constructor; }

function street__possibleConstructorReturn(self, call) { if (call && (street__typeof(call) === "object" || typeof call === "function")) { return call; } return street__assertThisInitialized(self); }

function street__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function street__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var street_Street =
/*#__PURE__*/
function (_React$Component) {
  street__inherits(Street, _React$Component);

  function Street(props) {
    var _this;

    street__classCallCheck(this, Street);

    _this = street__possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, props));
    _this.state = {
      isMarkerShown: false,
      localAreaLoading: false,
      localArea: [],
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  street__createClass(Street, [{
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
      this.getLocalArea(this.props.postcode);
    }
  }, {
    key: "pricesList",
    value: function pricesList(prices) {
      var price = null;

      if (!external__lodash__default.a.isEmpty(prices)) {
        price = prices.map(function (p) {
          return external__react__default.a.createElement("div", {
            key: p.id
          }, p.sold_date, " - \xA3", p.price);
        });
      }

      return price;
    }
  }, {
    key: "getLocalArea",
    value: function getLocalArea(postcode) {
      this.setState({
        localAreaLoading: true
      });
      var self = this;
      external__isomorphic_fetch__default()("https://dev.housevault.co.uk/api/postcode/" + postcode + '/localarea').then(function (response) {
        return response.json();
      }).then(function (localArea) {
        self.setState(function (prevState) {
          return {
            localAreaLoading: false,
            localArea: _toConsumableArray(prevState.localArea).concat([localArea])
          };
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (external__lodash__default.a.isEmpty(this.props.addresses) && external__lodash__default.a.isEmpty(this.props.sold_prices)) {
        return null;
      }

      var housePriceIndex = external__lodash__default.a.orderBy(this.props.addresses.hpi, ["date"], ["desc"])[0][0];

      var addresses = this.props.addresses.addresses;
      var marker = {
        lng: external__lodash__default.a.toNumber(this.props.addresses.lng),
        lat: external__lodash__default.a.toNumber(this.props.addresses.lat)
      };

      var localArea = external__lodash__default.a.head(this.state.localArea);

      return external__react__default.a.createElement("div", null, external__react__default.a.createElement("div", {
        className: "container postcode-page"
      }, external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement("h1", null, external__lodash__default.a.toUpper(this.props.postcode), " Area Report"), external__react__default.a.createElement("p", null, external__react__default.a.createElement("span", null, "Below you will find key statistics including sold prices, property valuations, energy performance, crime and local services for the ", external__lodash__default.a.first(this.props.addresses.addresses.data).street, ", ", external__lodash__default.a.first(this.props.addresses.addresses.data).town, ", ", external__lodash__default.a.first(this.props.addresses.addresses.data).postcode, " area. If you want specific property information select the address under \u2018Properties Section\u2019. You can freely use our AVM to generate property valuations and our EnergyVault app to predict a properties efficiency and running costs. ")), external__react__default.a.createElement(GoogleMaps["a" /* default */], {
        isMarkerShown: this.state.isMarkerShown,
        onMarkerClick: this.handleMarkerClick,
        markerPosition: marker,
        zoom: 11
      }), external__react__default.a.createElement("br", null), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement(census_CensusHousingType, {
        areacode: this.props.addresses.census_code
      })), external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement(CensusHousingTenure, {
        areacode: this.props.addresses.census_code
      }))), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement(census_CensusEthnicGroup, {
        areacode: this.props.addresses.census_code
      })), external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement(census_CensusReligion, {
        areacode: this.props.addresses.census_code
      }))), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement(census_CensusAge, {
        areacode: this.props.addresses.census_code
      })), external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement(census_CensusEducation, {
        areacode: this.props.addresses.census_code
      }))), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement(CensusGender, {
        areacode: this.props.addresses.census_code
      })), external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement(census_CensusHealth, {
        areacode: this.props.addresses.census_code
      }))), external__react__default.a.createElement("h2", null, "Sold Prices"), this.props.sold_prices.map(function (price) {
        return external__react__default.a.createElement("div", {
          key: price.id
        }, external__react__default.a.createElement("div", {
          className: "row"
        }, external__react__default.a.createElement("div", {
          className: "col"
        }, external__react__default.a.createElement("div", {
          className: "table-responsive"
        }, external__react__default.a.createElement("table", {
          className: "table"
        }, external__react__default.a.createElement("tbody", null, external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", {
          scope: "row"
        }, external__react__default.a.createElement("b", null, price.poan, " ", price.street), " - Sold on ", external__react__default.a.createElement("i", null, external__moment__default()(price.sold_date, "YYYY-MM-DD HH:mm:ss").format('Do MMMM YYYY'))), external__react__default.a.createElement("td", {
          className: "text-right "
        }, "\xA3", price.price))))))));
      }), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col text-center"
      }, external__react__default.a.createElement("button", {
        className: "btn btn-link "
      }, "Load More"))), external__react__default.a.createElement("h2", null, "Local Area"), !external__lodash__default.a.isEmpty(localArea) ? external__react__default.a.createElement("div", null, external__react__default.a.createElement("h3", null, "Closest Primary Schools to this address "), external__react__default.a.createElement(LocalAreaList["a" /* default */], {
        list: localArea.primary_schools
      })) : '', !external__lodash__default.a.isEmpty(localArea) ? external__react__default.a.createElement("div", null, external__react__default.a.createElement("h3", null, "Closest Secondary Schools to this address "), external__react__default.a.createElement(LocalAreaList["a" /* default */], {
        list: localArea.secondary_schools
      })) : '', external__react__default.a.createElement("h2", null, "Properties"), addresses.data.map(function (address) {
        return external__react__default.a.createElement("div", {
          key: address.id
        }, external__react__default.a.createElement("div", {
          className: "row"
        }, external__react__default.a.createElement("div", {
          className: "col"
        }, external__react__default.a.createElement("div", {
          className: "property-header"
        }, external__react__default.a.createElement("h6", null, address.full_address, " ", external__react__default.a.createElement("i", {
          className: "fas fa-caret-right"
        }))))), external__react__default.a.createElement("div", {
          className: "row"
        }, external__react__default.a.createElement("hr", null), external__react__default.a.createElement("div", {
          className: "col"
        }, external__react__default.a.createElement("img", {
          src: encodeURI("https://maps.googleapis.com/maps/api/streetview?size=100x100&location=" + address.house_number + "," + address.street + "," + address.postcode + "&fov=60&pitch=5&key=AIzaSyAcODcVyIBZJhmueCEdpCU7MNlMISDGSkQ"),
          className: "property-image"
        })), external__react__default.a.createElement("div", {
          className: "col"
        }, "Last Sold Price", external__react__default.a.createElement("br", null), !external__lodash__default.a.isNaN(external__lodash__default.a.meanBy(address.prices.data, "price")) ? "£" + external__lodash__default.a.meanBy(address.prices.data, "price") : 'No sales history for this property'), external__react__default.a.createElement("div", {
          className: "col"
        }, "EPC Rating", external__react__default.a.createElement("br", null), external__lodash__default.a.first(external__lodash__default.a.orderBy(address.epc.data, ['id'], ['desc'])) ? external__lodash__default.a.first(external__lodash__default.a.orderBy(address.epc.data, ['id'], ['desc'])).current_energy_rating : 'None'), external__react__default.a.createElement("div", {
          className: "col text-right"
        }, external__react__default.a.createElement("h5", null, address.valuation && housePriceIndex.index ? 'Estimated Value £' + external__lodash__default.a.round(external__lodash__default.a.multiply(external__lodash__default.a.divide(parseInt(address.valuation.data.predicted_valuation), 100), parseInt(housePriceIndex.index))).toLocaleString() : external__react__default.a.createElement("button", {
          className: "btn btn-primary"
        }, "Request Valuation")))));
      })))));
    }
  }]);

  return Street;
}(external__react__default.a.Component);

street_Street.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(_ref) {
    var req, postcode, res, json;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req, postcode = _ref.query.postcode;
            _context.next = 3;
            return external__isomorphic_fetch__default()("https://dev.housevault.co.uk/api/postcode/" + postcode);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", {
              addresses: json.postcode_details.data,
              sold_prices: json.sold_prices,
              postcode: postcode
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

/* harmony default export */ var street = __webpack_exports__["default"] = (street_Street);

/***/ })
/******/ ]);
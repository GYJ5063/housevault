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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external__isomorphic_fetch_ = __webpack_require__(2);
var external__isomorphic_fetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_fetch_);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(1);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./components/EpcEnergyEfficiencyGraph.js

/* harmony default export */ var EpcEnergyEfficiencyGraph = (function (props) {
  return external__react__default.a.createElement("div", {
    className: "panel panel-default"
  }, external__react__default.a.createElement("div", {
    className: "panel-heading"
  }, "Energy Efficiency Rating"), external__react__default.a.createElement("div", {
    className: "panel-body"
  }, external__react__default.a.createElement("table", {
    className: "data-list efficiency",
    cellPadding: "0",
    cellSpacing: "0"
  }, external__react__default.a.createElement("thead", null, external__react__default.a.createElement("tr", null, external__react__default.a.createElement("th", null, "\xA0"), external__react__default.a.createElement("th", null, "Current"), external__react__default.a.createElement("th", null, "Potential"))), external__react__default.a.createElement("tbody", null, external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", {
    className: "info"
  }, "Very energy efficient. Lower running costs."), external__react__default.a.createElement("td", null, "\xA0"), external__react__default.a.createElement("td", null, "\xA0")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar a"
  }, external__react__default.a.createElement("span", {
    className: "en-num plus"
  }, "(92 plus)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "A"))), external__react__default.a.createElement("td", null, props.epc.current_energy_efficiency > 91 ? external__react__default.a.createElement("span", {
    className: "leaf a"
  }, props.epc.current_energy_efficiency) : ''), external__react__default.a.createElement("td", null, props.epc.potential_energy_efficiency > 91 ? external__react__default.a.createElement("span", {
    className: "leaf a"
  }, props.epc.potential_energy_efficiency) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar b"
  }, external__react__default.a.createElement("span", {
    className: "en-num plus"
  }, "(81-91)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "B"))), external__react__default.a.createElement("td", null, props.epc.current_energy_efficiency >= 81 && props.epc.current_energy_efficiency <= 91 ? external__react__default.a.createElement("span", {
    className: "leaf b"
  }, props.epc.current_energy_efficiency) : ''), external__react__default.a.createElement("td", null, props.epc.potential_energy_efficiency >= 81 && props.epc.potential_energy_efficiency <= 91 ? external__react__default.a.createElement("span", {
    className: "leaf b"
  }, props.epc.potential_energy_efficiency) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar c"
  }, external__react__default.a.createElement("span", {
    className: "en-num plus"
  }, "(69-80)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "C"))), external__react__default.a.createElement("td", null, props.epc.current_energy_efficiency >= 69 && props.epc.current_energy_efficiency <= 80 ? external__react__default.a.createElement("span", {
    className: "leaf c"
  }, props.epc.current_energy_efficiency) : ''), external__react__default.a.createElement("td", null, props.epc.potential_energy_efficiency >= 69 && props.epc.potential_energy_efficiency <= 80 ? external__react__default.a.createElement("span", {
    className: "leaf c"
  }, props.epc.potential_energy_efficiency) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar d"
  }, external__react__default.a.createElement("span", {
    className: "en-num plus"
  }, "(55-68)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "D"))), external__react__default.a.createElement("td", null, props.epc.current_energy_efficiency >= 55 && props.epc.current_energy_efficiency <= 68 ? external__react__default.a.createElement("span", {
    className: "leaf d"
  }, props.epc.current_energy_efficiency) : ''), external__react__default.a.createElement("td", null, props.epc.potential_energy_efficiency >= 55 && props.epc.potential_energy_efficiency <= 68 ? external__react__default.a.createElement("span", {
    className: "leaf d"
  }, props.epc.potential_energy_efficiency) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar e"
  }, external__react__default.a.createElement("span", {
    className: "en-num plus"
  }, "(39-54)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "E"))), external__react__default.a.createElement("td", null, props.epc.current_energy_efficiency >= 39 && props.epc.current_energy_efficiency <= 54 ? external__react__default.a.createElement("span", {
    className: "leaf e"
  }, props.epc.current_energy_efficiency) : ''), external__react__default.a.createElement("td", null, props.epc.potential_energy_efficiency >= 39 && props.epc.potential_energy_efficiency <= 54 ? external__react__default.a.createElement("span", {
    className: "leaf e"
  }, props.epc.potential_energy_efficiency) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar f"
  }, external__react__default.a.createElement("span", {
    className: "en-num plus"
  }, "(21-38)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "F"))), external__react__default.a.createElement("td", null, props.epc.current_energy_efficiency >= 21 && props.epc.current_energy_efficiency <= 38 ? external__react__default.a.createElement("span", {
    className: "leaf f"
  }, props.epc.current_energy_efficiency) : ''), external__react__default.a.createElement("td", null, props.epc.potential_energy_efficiency >= 21 && props.epc.potential_energy_efficiency <= 38 ? external__react__default.a.createElement("span", {
    className: "leaf f"
  }, props.epc.potential_energy_efficiency) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar g"
  }, external__react__default.a.createElement("span", {
    className: "en-num plus"
  }, "(1-20)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "G"))), external__react__default.a.createElement("td", null, props.epc.current_energy_efficiency <= 20 ? external__react__default.a.createElement("span", {
    className: "leaf g"
  }, props.epc.current_energy_efficiency) : ''), external__react__default.a.createElement("td", null, props.epc.potential_energy_efficiency <= 20 ? external__react__default.a.createElement("span", {
    className: "leaf g"
  }, props.epc.potential_energy_efficiency) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", {
    className: "info"
  }, "Not energy efficient. High running cost"), external__react__default.a.createElement("td", null, "\xA0"), external__react__default.a.createElement("td", null, "\xA0"))))));
});
// CONCATENATED MODULE: ./components/EpcEnvironmentalImpactGraph.js

/* harmony default export */ var EpcEnvironmentalImpactGraph = (function (props) {
  return external__react__default.a.createElement("div", {
    className: "panel panel-default"
  }, external__react__default.a.createElement("div", {
    className: "panel-heading"
  }, "Environmental Impact Rating"), external__react__default.a.createElement("div", {
    className: "panel-body"
  }, external__react__default.a.createElement("table", {
    className: "data-list impact",
    cellPadding: "0",
    cellSpacing: "0"
  }, external__react__default.a.createElement("thead", null, external__react__default.a.createElement("tr", null, external__react__default.a.createElement("th", null, "\xA0"), external__react__default.a.createElement("th", null, "Current"), external__react__default.a.createElement("th", null, "Potential"))), external__react__default.a.createElement("tbody", null, external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", {
    className: "info"
  }, "Very environmentally friendly. Lower CO2 emission"), external__react__default.a.createElement("td", null, "\xA0"), external__react__default.a.createElement("td", null, "\xA0")), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar a"
  }, external__react__default.a.createElement("span", {
    className: "en-num"
  }, "(92 to 100)"), external__react__default.a.createElement("span", {
    className: "grade"
  }, "A"))), external__react__default.a.createElement("td", null, props.epc.environment_impact_current > 91 ? external__react__default.a.createElement("span", {
    className: "leaf a"
  }, props.epc.environment_impact_current) : ''), external__react__default.a.createElement("td", null, props.epc.environment_impact_potential > 91 ? external__react__default.a.createElement("span", {
    className: "leaf a"
  }, props.epc.environment_impact_potential) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar b"
  }, external__react__default.a.createElement("span", {
    className: "en-num"
  }, "(81 to 91)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "B"))), external__react__default.a.createElement("td", null, props.epc.environment_impact_current >= 81 && props.epc.environment_impact_current <= 91 ? external__react__default.a.createElement("span", {
    className: "leaf b"
  }, props.epc.environment_impact_current) : ''), external__react__default.a.createElement("td", null, props.epc.environment_impact_potential >= 81 && props.epc.environment_impact_potential <= 91 ? external__react__default.a.createElement("span", {
    className: "leaf b"
  }, props.epc.environment_impact_potential) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar c"
  }, external__react__default.a.createElement("span", {
    className: "en-num"
  }, "(69 to 80)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "C"))), external__react__default.a.createElement("td", null, props.epc.environment_impact_current >= 69 && props.epc.environment_impact_current <= 80 ? external__react__default.a.createElement("span", {
    className: "leaf c"
  }, props.epc.environment_impact_current) : ''), external__react__default.a.createElement("td", null, props.epc.environment_impact_potential >= 69 && props.epc.environment_impact_potential <= 80 ? external__react__default.a.createElement("span", {
    className: "leaf c"
  }, props.epc.environment_impact_potential) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar d"
  }, external__react__default.a.createElement("span", {
    className: "en-num"
  }, "(55 to 68)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "D"))), external__react__default.a.createElement("td", null, props.epc.environment_impact_current >= 55 && props.epc.environment_impact_current <= 68 ? external__react__default.a.createElement("span", {
    className: "leaf d"
  }, props.epc.environment_impact_current) : ''), external__react__default.a.createElement("td", null, props.epc.environment_impact_potential >= 55 && props.epc.environment_impact_potential <= 68 ? external__react__default.a.createElement("span", {
    className: "leaf d"
  }, props.epc.environment_impact_potential) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar e"
  }, external__react__default.a.createElement("span", {
    className: "en-num"
  }, "(39 to 54)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "E"))), external__react__default.a.createElement("td", null, props.epc.environment_impact_current >= 39 && props.epc.environment_impact_current <= 54 ? external__react__default.a.createElement("span", {
    className: "leaf e"
  }, props.epc.environment_impact_current) : ''), external__react__default.a.createElement("td", null, props.epc.environment_impact_potential >= 39 && props.epc.environment_impact_potential <= 54 ? external__react__default.a.createElement("span", {
    className: "leaf e"
  }, props.epc.environment_impact_potential) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar f"
  }, external__react__default.a.createElement("span", {
    className: "en-num"
  }, "(21 to 38)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "F"))), external__react__default.a.createElement("td", null, props.epc.environment_impact_current >= 21 && props.epc.environment_impact_current <= 38 ? external__react__default.a.createElement("span", {
    className: "leaf f"
  }, props.epc.environment_impact_current) : ''), external__react__default.a.createElement("td", null, props.epc.environment_impact_potential >= 21 && props.epc.environment_impact_potential <= 38 ? external__react__default.a.createElement("span", {
    className: "leaf f"
  }, props.epc.environment_impact_potential) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", null, external__react__default.a.createElement("span", {
    className: "energy-bar g"
  }, external__react__default.a.createElement("span", {
    className: "en-num"
  }, "(1 to 20)"), " ", external__react__default.a.createElement("span", {
    className: "grade"
  }, "G"))), external__react__default.a.createElement("td", null, props.epc.environment_impact_current <= 20 ? external__react__default.a.createElement("span", {
    className: "leaf g"
  }, props.epc.environment_impact_current) : ''), external__react__default.a.createElement("td", null, props.epc.environment_impact_potential <= 20 ? external__react__default.a.createElement("span", {
    className: "leaf g"
  }, props.epc.environment_impact_potential) : '')), external__react__default.a.createElement("tr", null, external__react__default.a.createElement("td", {
    className: "info"
  }, "Not environmentally friendly. Higher CO2 emission"), external__react__default.a.createElement("td", null, "\xA0"), external__react__default.a.createElement("td", null, "\xA0"))))));
});
// EXTERNAL MODULE: ./components/PropertySidebar.js
var PropertySidebar = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/epc.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var epc_Epc =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Epc, _React$Component);

  function Epc() {
    _classCallCheck(this, Epc);

    return _possibleConstructorReturn(this, (Epc.__proto__ || Object.getPrototypeOf(Epc)).apply(this, arguments));
  }

  _createClass(Epc, [{
    key: "render",
    value: function render() {
      if (external__lodash__default.a.isEmpty(this.props.epc)) {
        return external__react__default.a.createElement("div", {
          className: "container list-page-padding"
        }, external__react__default.a.createElement("div", {
          className: "row"
        }, external__react__default.a.createElement(PropertySidebar["a" /* default */], {
          url: this.props.url.pathname,
          postcode: this.props.property.postcode,
          number: this.props.property.house_number
        }), external__react__default.a.createElement("div", {
          className: "col"
        }, external__react__default.a.createElement("div", {
          className: "text-center"
        }, "No EPC data for this address, this might be because this property hasn't been sold since the EPC was brought in."))));
      } else {
        return external__react__default.a.createElement("div", {
          className: "container list-page-padding"
        }, external__react__default.a.createElement("div", {
          className: "row"
        }, external__react__default.a.createElement(PropertySidebar["a" /* default */], {
          url: this.props.url.pathname,
          postcode: this.props.property.postcode,
          number: this.props.property.house_number
        }), external__react__default.a.createElement("div", {
          className: "col"
        }, external__react__default.a.createElement("h1", null, "EPC details for ", this.props.property.full_address), external__react__default.a.createElement("p", null, "An Energy Performance Certificate shows the energy efficiency of a domestic or commercial properties in the UK. This will show you ways that you can save money on your bills and make your property more energy efficient.  "), external__react__default.a.createElement("div", {
          className: "row"
        }, external__react__default.a.createElement("div", {
          className: "col"
        }, external__react__default.a.createElement(EpcEnergyEfficiencyGraph, {
          epc: this.props.epc
        })), external__react__default.a.createElement("div", {
          className: "col"
        }, external__react__default.a.createElement(EpcEnvironmentalImpactGraph, {
          epc: this.props.epc
        }))), external__react__default.a.createElement("div", {
          className: "row"
        }, external__react__default.a.createElement("div", {
          className: "col"
        }, external__react__default.a.createElement("div", {
          className: "panel panel-default"
        }, external__react__default.a.createElement("div", {
          className: "panel-heading"
        }, "EPC"), external__react__default.a.createElement("div", {
          className: "panel-body"
        }, external__react__default.a.createElement("ul", {
          className: "list-unstyled"
        }, external__react__default.a.createElement("li", null, "Date: ", this.props.epc.inspection_date, " "), external__react__default.a.createElement("li", null, "Floor area: ", this.props.epc.total_floor_area, " sqm"), external__react__default.a.createElement("li", null, "Current Energy Rating: ", this.props.epc.current_energy_rating), external__react__default.a.createElement("li", null, "Potential Rating: ", this.props.epc.potential_energy_rating), external__react__default.a.createElement("li", null, "Current Carbon Footprint: ", this.props.epc.co2_emmissions_current), external__react__default.a.createElement("li", null, "Potential Carbon Footprint: ", this.props.epc.co2_emissions_potential), external__react__default.a.createElement("li", null, "Annual Saving ", external__lodash__default.a.round(this.props.epc.co2_emmissions_current - this.props.epc.co2_emissions_potential, 2)), external__react__default.a.createElement("li", null, "Equal to planting ", external__lodash__default.a.round(this.props.epc.co2_emmissions_current - this.props.epc.co2_emissions_potential) * 5, " trees per year"))))), external__react__default.a.createElement("div", {
          className: "col"
        }, external__react__default.a.createElement("div", {
          className: "panel panel-default"
        }, external__react__default.a.createElement("div", {
          className: "panel-heading"
        }, "Running Costs"), external__react__default.a.createElement("div", {
          className: "panel-body"
        }, external__react__default.a.createElement("ul", {
          className: "list-unstyled"
        }, external__react__default.a.createElement("li", null, "Annual Fuel Bill: \xA3", this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current), external__react__default.a.createElement("li", null, "UK Average: \xA3 1350"), external__react__default.a.createElement("li", null, "Difference: \xA3 ", 1350 - (this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current)), external__react__default.a.createElement("li", null, "Potential Bill: \xA3 ", this.props.epc.hot_water_cost_potential + this.props.epc.heating_cost_potential + this.props.epc.lighting_cost_potential), external__react__default.a.createElement("li", null, "Potential Saving: \xA3", this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current - (this.props.epc.hot_water_cost_potential + this.props.epc.heating_cost_potential + this.props.epc.lighting_cost_potential)), external__react__default.a.createElement("li", null, "Saving: ", external__lodash__default.a.round((this.props.epc.hot_water_cost_potential + this.props.epc.heating_cost_potential + this.props.epc.lighting_cost_potential) / (this.props.epc.hot_water_cost_current + this.props.epc.heating_cost_current + this.props.epc.lighting_cost_current) * 100), " %")))))))));
      }
    }
  }]);

  return Epc;
}(external__react__default.a.Component);

epc_Epc.getInitialProps =
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
              property: json.data,
              epc: external__lodash__default.a.first(external__lodash__default.a.orderBy(json.data.epc.data, ['id'], ['desc']))
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

/* harmony default export */ var epc = __webpack_exports__["default"] = (epc_Epc);

/***/ })
/******/ ]);
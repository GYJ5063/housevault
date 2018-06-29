webpackHotUpdate(5,{

/***/ "./components/Hospitals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var _jsxFileName = "/Users/leemellon/Code/Morzuo/nextjs/components/Hospitals.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Hospitals =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hospitals, _React$Component);

  function Hospitals() {
    _classCallCheck(this, Hospitals);

    return _possibleConstructorReturn(this, (Hospitals.__proto__ || Object.getPrototypeOf(Hospitals)).apply(this, arguments));
  }

  _createClass(Hospitals, [{
    key: "render",
    value: function render() {
      if (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.isEmpty(this.props.hospitallist)) {
        return 'Loading';
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "table-responsive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("table", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Name"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "Distance"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, this.props.hospitallist.map(function (hospital) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
          key: hospital.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, hospital.organisation_name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }, __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.round(hospital.distance, 2)));
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Hospitals;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = Hospitals;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Hospitals, "Hospitals", "/Users/leemellon/Code/Morzuo/nextjs/components/Hospitals.js");
  reactHotLoader.register(_default, "default", "/Users/leemellon/Code/Morzuo/nextjs/components/Hospitals.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.c814573ec67d64b1180a.hot-update.js.map
webpackHotUpdate(5,{

/***/ "./components/census/CensusAge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_chartjs_2__ = __webpack_require__("./node_modules/react-chartjs-2/es/index.js");
var _jsxFileName = "/Users/leemellon/Code/Morzuo/nextjs/components/census/CensusAge.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var CensusAge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CensusAge, _React$Component);

  function CensusAge(props) {
    var _this;

    _classCallCheck(this, CensusAge);

    _this = _possibleConstructorReturn(this, (CensusAge.__proto__ || Object.getPrototypeOf(CensusAge)).call(this, props));
    _this.state = {
      propertyDataLoading: false,
      census: []
    };
    return _this;
  }

  _createClass(CensusAge, [{
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

        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(keys, function (k, i) {
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
        '0 - 14': __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 0 to 4') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 5 to 7') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 8 to 9') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 10 to 14') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 15'),
        '15 - 24': __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 16 to 17') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 18 to 19') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 20 to 24'),
        '25 - 44': __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 25 to 29') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 30 to 44'),
        '45 - 64': __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 45 to 59') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 60 to 64'),
        '65 +': __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 65 to 74') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 75 to 84') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 85 to 89') + __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.get(data, 'Age 90 and over')
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
        'labels': __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.keys(census),
        datasets: [{
          label: 'Age',
          data: __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.values(census),
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)']
        }]
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, this.props.type === 'Bar' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_chartjs_2__["a" /* Bar */], {
        data: d,
        options: options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_chartjs_2__["b" /* Doughnut */], {
        data: d,
        options: options,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }))));
    }
  }]);

  return CensusAge;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CensusAge);

/***/ })

})
//# sourceMappingURL=5.a0b418cb9b4c263e2be3.hot-update.js.map
webpackHotUpdate(5,{

/***/ "./pages/street.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_GoogleMaps__ = __webpack_require__("./components/GoogleMaps.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_census_CensusHousingType__ = __webpack_require__("./components/census/CensusHousingType.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_census_CensusHousingTenure__ = __webpack_require__("./components/census/CensusHousingTenure.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_census_CensusEthnicGroup__ = __webpack_require__("./components/census/CensusEthnicGroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_LocalAreaList__ = __webpack_require__("./components/LocalAreaList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_census_CensusReligion__ = __webpack_require__("./components/census/CensusReligion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_census_CensusAge__ = __webpack_require__("./components/census/CensusAge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_census_CensusGender__ = __webpack_require__("./components/census/CensusGender.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_census_CensusHealth__ = __webpack_require__("./components/census/CensusHealth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_census_CensusEducation__ = __webpack_require__("./components/census/CensusEducation.js");

var _jsxFileName = "/Users/leemellon/Code/Morzuo/nextjs/pages/street.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
















var Street =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Street, _React$Component);

  function Street(props) {
    var _this;

    _classCallCheck(this, Street);

    _this = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, props));
    _this.state = {
      isMarkerShown: false,
      localAreaLoading: false,
      localArea: [],
      propertyDataLoading: false,
      census: [],
      censusCode: null
    };
    return _this;
  }

  _createClass(Street, [{
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

      if (!__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(prices)) {
        price = prices.map(function (p) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            key: p.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
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
      __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default()("http://housevault.test/api/postcode/" + postcode + '/localarea').then(function (response) {
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
      if (__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(this.props.addresses) && __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(this.props.sold_prices)) {
        return null;
      }

      var housePriceIndex = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.orderBy(this.props.addresses.hpi, ["date"], ["desc"])[0][0];

      var addresses = this.props.addresses.addresses;
      var marker = {
        lng: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.toNumber(this.props.addresses.lng),
        lat: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.toNumber(this.props.addresses.lat)
      };

      var localArea = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.head(this.state.localArea);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container postcode-page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.toUpper(this.props.postcode), " Area Report"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Below you will find key statistics including sold prices, property valuations, energy performance, crime and local services for the ", __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.first(this.props.addresses.addresses.data).street, ", ", __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.first(this.props.addresses.addresses.data).town, ", ", __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.first(this.props.addresses.addresses.data).postcode, " area. If you want specific property information select the address under \u2018Properties Section\u2019. You can freely use our AVM to generate property valuations and our EnergyVault app to predict a properties efficiency and running costs. ")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_GoogleMaps__["a" /* default */], {
        isMarkerShown: this.state.isMarkerShown,
        onMarkerClick: this.handleMarkerClick,
        markerPosition: marker,
        zoom: 11,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_census_CensusHousingType__["a" /* default */], {
        areacode: this.props.addresses.census_code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_census_CensusHousingTenure__["a" /* default */], {
        areacode: this.props.addresses.census_code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_census_CensusEthnicGroup__["a" /* default */], {
        areacode: this.props.addresses.census_code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_census_CensusReligion__["a" /* default */], {
        areacode: this.props.addresses.census_code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_census_CensusAge__["a" /* default */], {
        areacode: this.props.addresses.census_code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_census_CensusEducation__["a" /* default */], {
        areacode: this.props.addresses.census_code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_census_CensusGender__["a" /* default */], {
        areacode: this.props.addresses.census_code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_census_CensusHealth__["a" /* default */], {
        areacode: this.props.addresses.census_code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "Sold Prices"), this.props.sold_prices.map(function (price) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: price.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "table-responsive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("table", {
          className: "table",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
          scope: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, price.poan, " ", price.street), " - Sold on ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, __WEBPACK_IMPORTED_MODULE_4_moment___default()(price.sold_date, "YYYY-MM-DD HH:mm:ss").format('Do MMMM YYYY')), " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("td", {
          className: "text-right ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, "\xA3", price.price))))))));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: "btn btn-link ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, "Load More"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }, "Local Area"), !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(localArea) ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, "Closest Primary Schools to this address "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_LocalAreaList__["a" /* default */], {
        list: localArea.primary_schools,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      })) : '', !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(localArea) ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, "Closest Secondary Schools to this address "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_LocalAreaList__["a" /* default */], {
        list: localArea.secondary_schools,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      })) : '', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, "Properties"), addresses.data.map(function (address) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: address.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "property-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }, address.full_address, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "fas fa-caret-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: encodeURI("https://maps.googleapis.com/maps/api/streetview?size=100x100&location=" + address.house_number + "," + address.street + "," + address.postcode + "&fov=60&pitch=5&key=AIzaSyAcODcVyIBZJhmueCEdpCU7MNlMISDGSkQ"),
          className: "property-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          }
        }, "Last Sold Price", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }), !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isNaN(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.meanBy(address.prices.data, "price")) ? "£" + __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.meanBy(address.prices.data, "price") : 'No sales history for this property'), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }, "EPC Rating", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }), __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.first(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.orderBy(address.epc.data, ['id'], ['desc'])) ? __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.first(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.orderBy(address.epc.data, ['id'], ['desc'])).current_energy_rating : 'None'), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "col text-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        }, address.valuation && housePriceIndex.index ? 'Estimated Value £' + __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.round(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.multiply(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.divide(parseInt(address.valuation.data.predicted_valuation), 100), parseInt(housePriceIndex.index))).toLocaleString() : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          className: "btn btn-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        }, "Request Valuation")))));
      })))));
    }
  }]);

  return Street;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Street.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var req, postcode, res, json;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req, postcode = _ref.query.postcode;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default()("http://housevault.test/api/postcode/" + postcode);

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

/* harmony default export */ __webpack_exports__["default"] = (Street);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/street")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.fa39979631cd0d54914e.hot-update.js.map
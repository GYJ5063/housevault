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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "axios"
var external__axios_ = __webpack_require__(23);
var external__axios__default = /*#__PURE__*/__webpack_require__.n(external__axios_);

// EXTERNAL MODULE: external "validator"
var external__validator_ = __webpack_require__(24);
var external__validator__default = /*#__PURE__*/__webpack_require__.n(external__validator_);

// CONCATENATED MODULE: ./components/FormValidator.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FormValidator_FormValidator =
/*#__PURE__*/
function () {
  function FormValidator(validations) {
    _classCallCheck(this, FormValidator);

    this.validations = validations;
  }

  _createClass(FormValidator, [{
    key: "validate",
    value: function validate(state) {
      var validation = this.valid();
      this.validations.forEach(function (rule) {
        if (!validation[rule.field].isInvalid) {
          var field_value = state[rule.field].toString();
          var args = rule.args || [];
          var validation_method = typeof rule.method === 'string' ? external__validator__default.a[rule.method] : rule.method;

          if (validation_method.apply(void 0, [field_value].concat(_toConsumableArray(args), [state])) !== rule.validWhen) {
            validation[rule.field] = {
              isInvalid: true,
              message: rule.message
            };
            validation.isValid = false;
          }
        }
      });
      return validation;
    }
  }, {
    key: "valid",
    value: function valid() {
      var validation = {};
      this.validations.map(function (rule) {
        return validation[rule.field] = {
          isInvalid: false,
          message: ''
        };
      });
      return _objectSpread({
        isValid: true
      }, validation);
    }
  }]);

  return FormValidator;
}();

/* harmony default export */ var components_FormValidator = (FormValidator_FormValidator);
// CONCATENATED MODULE: ./pages/contact-us.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function contact_us__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function contact_us__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function contact_us__createClass(Constructor, protoProps, staticProps) { if (protoProps) contact_us__defineProperties(Constructor.prototype, protoProps); if (staticProps) contact_us__defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var contact_us_ContactUs =
/*#__PURE__*/
function (_Component) {
  _inherits(ContactUs, _Component);

  function ContactUs(props) {
    var _this;

    contact_us__classCallCheck(this, ContactUs);

    _this = _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).call(this, props));
    _this.validator = new components_FormValidator([{
      field: 'name',
      method: 'isEmpty',
      validWhen: false,
      message: 'Name is required.'
    }, {
      field: 'email',
      method: 'isEmpty',
      validWhen: false,
      message: 'Email is required.'
    }, {
      field: 'email',
      method: 'isEmail',
      validWhen: true,
      message: 'That is not a valid email.'
    }, {
      field: 'subject',
      method: 'isEmpty',
      validWhen: false,
      message: 'Subject is required.'
    }, {
      field: 'message',
      method: 'isEmpty',
      validWhen: false,
      message: 'Message is required.'
    }]);
    _this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      validation: _this.validator.valid(),
      hideLoadingSpinner: true
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.submitted = false;
    return _this;
  }

  contact_us__createClass(ContactUs, [{
    key: "handleChange",
    value: function handleChange(e) {
      var newState = {};
      newState[e.target.name] = e.target.value;
      this.setState(newState);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e, message) {
      var _this2 = this;

      e.preventDefault();
      var validation = this.validator.validate(this.state);
      this.setState({
        validation: validation
      });
      this.submitted = true;
      var formData = {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      };

      if (validation.isValid) {
        this.setState({
          hideLoadingSpinner: false
        });
        external__axios__default.a.get("https://dev.housevault.co.uk/api//contact-us/send/" + formData.name + '/' + formData.email + '/' + formData.subject + '/' + formData.message).then(function (response) {
          _this2.setState({
            hideLoadingSpinner: true
          });

          alert("Thank you for contacting us, we will get back to you shortly.");
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var validation = this.submitted ? this.validator.validate(this.state) : this.state.validation;

      if (!this.state.hideLoadingSpinner) {
        return external__react__default.a.createElement("div", {
          className: "container"
        }, external__react__default.a.createElement("div", {
          className: "loading"
        }, external__react__default.a.createElement("i", {
          className: "fa fa-spinner fa-spin fa-10x"
        })));
      }

      return external__react__default.a.createElement("div", {
        className: "container list-page-padding"
      }, external__react__default.a.createElement("h1", null, "Contact Us"), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col"
      }, external__react__default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, external__react__default.a.createElement("div", {
        className: "alert alert-danger d-none"
      }, external__react__default.a.createElement("strong", null, "Whoops!"), " There were some problems with your input.", external__react__default.a.createElement("br", null), external__react__default.a.createElement("ul", {
        id: "errMsg"
      })), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("span", {
        className: "col-sm-2"
      }, "\xA0"), external__react__default.a.createElement("span", {
        id: "err_name",
        className: "col-sm-8 errText"
      }, validation.name.message)), external__react__default.a.createElement("div", {
        className: "row margin-bottom-1"
      }, external__react__default.a.createElement("span", {
        className: "col-sm-2"
      }, external__react__default.a.createElement("label", {
        htmlFor: "name"
      }, "Name")), external__react__default.a.createElement("input", {
        type: "text",
        name: "name",
        id: "name",
        value: this.state.name,
        className: "field col-sm-8",
        placeholder: "Name",
        onChange: this.handleChange
      }), external__react__default.a.createElement("br", null)), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col-sm-2"
      }, "\xA0"), external__react__default.a.createElement("span", {
        id: "err_email",
        className: "col-sm-8 errText"
      }, validation.email.message)), external__react__default.a.createElement("div", {
        className: "row margin-bottom-1"
      }, external__react__default.a.createElement("span", {
        className: "col-sm-2"
      }, external__react__default.a.createElement("label", {
        htmlFor: "email"
      }, "Email")), external__react__default.a.createElement("input", {
        type: "text",
        name: "email",
        id: "email",
        value: this.state.email,
        className: "field col-sm-8",
        placeholder: "Email Address",
        onChange: this.handleChange
      }), external__react__default.a.createElement("br", null)), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col-sm-2"
      }, "\xA0"), external__react__default.a.createElement("span", {
        id: "err_subject",
        className: "col-sm-8 errText"
      }, validation.subject.message)), external__react__default.a.createElement("div", {
        className: "row margin-bottom-1"
      }, external__react__default.a.createElement("span", {
        className: "col-sm-2"
      }, external__react__default.a.createElement("label", {
        htmlFor: "subject"
      }, "Subject")), external__react__default.a.createElement("input", {
        type: "text",
        name: "subject",
        id: "subject",
        value: this.state.subject,
        className: "field col-sm-8",
        placeholder: "Subject",
        onChange: this.handleChange
      }), external__react__default.a.createElement("br", null)), external__react__default.a.createElement("div", {
        className: "row"
      }, external__react__default.a.createElement("div", {
        className: "col-sm-2"
      }, "\xA0"), external__react__default.a.createElement("span", {
        id: "err_message",
        className: "col-sm-8 errText"
      }, validation.message.message)), external__react__default.a.createElement("div", {
        className: "row margin-bottom-1"
      }, external__react__default.a.createElement("span", {
        className: "col-sm-2"
      }, external__react__default.a.createElement("label", {
        htmlFor: "message"
      }, "Message")), external__react__default.a.createElement("textarea", {
        className: "field col-sm-8 withTinyBorder",
        name: "message",
        rows: "4",
        cols: "50",
        value: this.state.message,
        onChange: this.handleChange
      }), external__react__default.a.createElement("br", null), external__react__default.a.createElement("br", null)), external__react__default.a.createElement("div", {
        className: "g-recaptcha",
        "data-sitekey": "6LfWmFIUAAAAAGCKHh1P4bQRiZqoVMaoil_fI1N-"
      }), external__react__default.a.createElement("button", {
        onClick: this.handleFormSubmit,
        className: "btn btn-primary"
      }, "Submit")))));
    }
  }]);

  return ContactUs;
}(external__react_["Component"]);

/* harmony default export */ var contact_us = __webpack_exports__["default"] = (contact_us_ContactUs);

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
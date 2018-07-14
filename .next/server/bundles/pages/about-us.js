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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container list-page-padding"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, "About Us"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Our experienced team of PHD researchers, data scientists, statistician\u2019s, economists and software developers dedicate their time to building the most accurate, unbiased & efficient tools on homes and locations throughout the UK."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "At the core of our technology sits our Machine Learning & Artificial Intelligence algorithms built in-house by our team of PHD researchers and graduates. Thanks in a great part to the UK government\u2019s decision to open up millions of data sets and relationships with private property companies, we have been able to use our skill set to build industry leading models to help UK property professionals and residents make informed decisions at little to no cost. You can learn more about our specific technology in our whitepaper here."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, "Machine Learning & Artificial Intelligence"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Most people do not care about how our technology works, and we think that\u2019s also a great thing. But being a team of researchers and tech professionals, we thought some might want a look \u2018under the hood\u2019 and learn more about us and the technology we use."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Before explaining our technology it\u2019s important to first understand what machine learning, AI and general modelling is, and isn\u2019t. There seems to be a lot of buzz around the terms recently from doomsday predictions to business using even basic 20-year-old statistical regression models calling it \u2018AI\u2019 to add some interest."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "There is a really good resource about what ML and AI is about here for people new to the concept."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "In summary over the last 20+ years there has been an incredible increase in processing power and decrease in costs, thanks to Moors\u2019e Law, allowing complex algorithms once reserved for large conglomerates such as Google, Apple & Amazon to be accessed by a broader market. Whilst most companies have kept their technology secret some such as Google have opened up large parts of their models to 3rd parties. This has also lead to the popularity of AI courses in universities which in turn provides additional funds to researchers to develop new concepts."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Our ML & AI journey began in mid 2017 after a group of like-minded people wanted to fix a problem with the UK property industry. There are dozens of companies offering AVM\u2019s to consumers and businesses however we were concerned that many use fairly old regression methods to calculate house prices. Our research also found that most were of a purely commercial nature such as offering estate agency services or selling reports to consumers. Whilst we respect all these companies we thought that in the current world of open-source there should be more transparency on house prices and local information. We were really pleasantly surprised with how open the UK government has been to release statistical data. So that\u2019s where we began, and we aim to continue developing technology to help people all over the world access transparent information about their home and neighbourhood."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, "Under Our Hood"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "We use several optimized models, including some older regression-based principles, to learn from hundreds of different features such core deciders like location. However, unlike many AVM\u2019s we also consider external factors such as economic headwinds, forecast indexes & predicted developmental growth."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Our three-core machine learning backed models are:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "list-unstyled"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "AVM \u2013 Automated Valuation Model to predict a property value anywhere in the UK with an accuracy of 97%."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "AECM \u2013 Predicts and forecasts residential and commercial energy bills for every UK property using public and anonymous data to deliver accurate results."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "APEM \u2013 Automated Efficiency Model learnt on millions of data points to predict the energy efficiency & condition of any UK home. The model also offers comparisons to local and national averages."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", null, "MLN - Currently going through beta testing is our neural network model, which can handle millions of features and data sets, self-learns on a constant cycle. Current tests show the predictions offer incredibly accurate insights into property and location information. The looping function of this model means it will continuously improve over time with new data.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", null, "Lead Team"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "Daniel Morgan \u2013 CEO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Nobody is entirely sure what Daniel does. But he says he does a lot. Daniel spent the last 15 years in start-ups and SME\u2019s. He bring experience in building, growing and exiting several sectors. Based in Asia and with a love of technology he spends his spare time with friends and family whilst constantly trying to build AI robots (that will one day work)."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "Lee Mellon \u2013 CTO / Lead Developer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Having over 15 years\u2019 experience as a software developer Lee has held roles in mainly tech sectors. Specialising in the latest Agile frameworks his role within HouseVault has been pivotal in leading a team of miss-fits to technological greatness."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "Joy Ying \u2013 CFO"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "UK Accounting graduate Joy spent 10 years accounting in-house for property, renewable energy and technology companies before joining us as CFO. Responsible for ensuring our team doesn\u2019t spend all its money on gadgets and RAM, Qiu tirelessly keeps our ship afloat through rain or shine."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", null, "Jie Gong - Head of Research"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Fellow of the Hunan Nominal University in China. Jie works with our team of researchers in China to develop the most sophisticated AI and ML algorithms. China has become a leading player in educating the brightest minds in complex mathematics and computer science. Based in our Hunan office Jie works with our UK team to implement the latest upgrades. Apart from being an amazing mathematician Jie also likes to play practical jokes, mainly at the expense of his co-workers.")));
});

/***/ })

/******/ });
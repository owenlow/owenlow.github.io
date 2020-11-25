webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "/home/owen/github.com/owenlow/owenlow.github.io/components/Footer.js";
function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: "my-5 pt-5 text-muted text-center text-small",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "mb-1",
      children: "Created by owenlow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}
_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.css */ "./components/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/paths */ "./constants/paths.js");

var _jsxFileName = "/home/owen/github.com/owenlow/owenlow.github.io/components/Header.js";




function Header(_ref) {
  var _this = this;

  var currentPage = _ref.currentPage;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      className: _Header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar,
      expand: "lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Brand, {
        href: _constants_paths__WEBPACK_IMPORTED_MODULE_4__["default"].landing.url,
        children: "owenlow.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
        "aria-controls": "basic-navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          className: "navbar-nav ml-auto",
          children: Object.values(_constants_paths__WEBPACK_IMPORTED_MODULE_4__["default"]).map(function (pathData) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: pathData.url,
              passHref: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
                active: pathData.id === currentPage,
                children: pathData.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 33
              }, _this)
            }, pathData.id, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 29
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Header.module.css":
/*!**************************************!*\
  !*** ./components/Header.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Header.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Header.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Header.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Header.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Header.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Header.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.module.css */ "./components/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");

var _jsxFileName = "/home/owen/github.com/owenlow/owenlow.github.io/components/Layout.js";





function Layout(_ref) {
  var children = _ref.children,
      currentPage = _ref.currentPage;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(_Layout_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.appContainer, 'd-flex', 'flex-column', 'h-100', 'mx-auto'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "owen's site"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/simplex/bootstrap.min.css'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      currentPage: currentPage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Layout.module.css":
/*!**************************************!*\
  !*** ./components/Layout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Layout.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Layout.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./Layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Layout.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./constants/paths.js":
/*!****************************!*\
  !*** ./constants/paths.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  landing: {
    id: 'landing',
    name: 'Home',
    url: '/'
  },
  projects: {
    id: 'projects',
    name: 'Projects',
    url: '/projects'
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/bail/index.js":
/*!************************************!*\
  !*** ./node_modules/bail/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bail

function bail(err) {
  if (err) {
    throw err
  }
}


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Header.module.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Header.module.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Header_navbar__2vWRp {\r\n    border: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://components/Header.module.css"],"names":[],"mappings":"AAAA;IACI,YAAY;AAChB","sourcesContent":[".navbar {\r\n    border: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navbar": "Header_navbar__2vWRp"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Layout.module.css":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Layout.module.css ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Layout_appContainer__3my3j {\r\n    max-width: 42em;\r\n}\r\n", "",{"version":3,"sources":["webpack://components/Layout.module.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB","sourcesContent":[".appContainer {\r\n    max-width: 42em;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"appContainer": "Layout_appContainer__3my3j"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.module.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./pages/index.module.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".index_contentContainer__1bxNp {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://pages/index.module.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":[".contentContainer {\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contentContainer": "index_contentContainer__1bxNp"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
};


/***/ }),

/***/ "./node_modules/mdast-add-list-metadata/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-add-list-metadata/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var visitWithParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js");

function addListMetadata() {
  return function (ast) {
    visitWithParents(ast, 'list', function (listNode, parents) {
      var depth = 0, i, n;
      for (i = 0, n = parents.length; i < n; i++) {
        if (parents[i].type === 'list') depth += 1;
      }
      for (i = 0, n = listNode.children.length; i < n; i++) {
        var child = listNode.children[i];
        child.index = i;
        child.ordered = listNode.ordered;
      }
      listNode.depth = depth;
    });
    return ast;
  };
}

module.exports = addListMetadata;


/***/ }),

/***/ "./node_modules/mdast-util-from-markdown/dist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/mdast-util-from-markdown/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fromMarkdown

// These three are compiled away in the `dist/`

var decode = __webpack_require__(/*! parse-entities/decode-entity */ "./node_modules/parse-entities/decode-entity.browser.js")
var toString = __webpack_require__(/*! mdast-util-to-string */ "./node_modules/mdast-util-to-string/index.js")
var own = __webpack_require__(/*! micromark/dist/constant/has-own-property */ "./node_modules/micromark/dist/constant/has-own-property.js")
var normalizeIdentifier = __webpack_require__(/*! micromark/dist/util/normalize-identifier */ "./node_modules/micromark/dist/util/normalize-identifier.js")
var safeFromInt = __webpack_require__(/*! micromark/dist/util/safe-from-int */ "./node_modules/micromark/dist/util/safe-from-int.js")
var parser = __webpack_require__(/*! micromark/dist/parse */ "./node_modules/micromark/dist/parse.js")
var preprocessor = __webpack_require__(/*! micromark/dist/preprocess */ "./node_modules/micromark/dist/preprocess.js")
var postprocess = __webpack_require__(/*! micromark/dist/postprocess */ "./node_modules/micromark/dist/postprocess.js")

function fromMarkdown(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding
    encoding = undefined
  }

  return compiler(options)(
    postprocess(
      parser(options).document().write(preprocessor()(value, encoding, true))
    )
  )
}

// Note this compiler only understand complete buffering, not streaming.
function compiler(options) {
  var settings = options || {}
  var config = configure(
    {
      canContainEols: [
        'emphasis',
        'fragment',
        'heading',
        'paragraph',
        'strong'
      ],

      enter: {
        autolink: opener(link),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading),
        blockQuote: opener(blockQuote),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer,
        codeFencedFenceMeta: buffer,
        codeIndented: opener(codeFlow, buffer),
        codeText: opener(codeText, buffer),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition),
        definitionDestinationString: buffer,
        definitionLabelString: buffer,
        definitionTitleString: buffer,
        emphasis: opener(emphasis),
        hardBreakEscape: opener(hardBreak),
        hardBreakTrailing: opener(hardBreak),
        htmlFlow: opener(html, buffer),
        htmlFlowData: onenterdata,
        htmlText: opener(html, buffer),
        htmlTextData: onenterdata,
        image: opener(image),
        label: buffer,
        link: opener(link),
        listItem: opener(listItem),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list, onenterlistordered),
        listUnordered: opener(list),
        paragraph: opener(paragraph),
        reference: onenterreference,
        referenceString: buffer,
        resourceDestinationString: buffer,
        resourceTitleString: buffer,
        setextHeading: opener(heading),
        strong: opener(strong),
        thematicBreak: opener(thematicBreak)
      },

      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: closer(onexitcharacterreferencevalue),
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    },

    settings.mdastExtensions || []
  )

  var data = {}

  return compile

  function compile(events) {
    var stack = [{type: 'root', children: []}]
    var index = -1
    var listStack = []
    var length
    var handler
    var listStart
    var event

    while (++index < events.length) {
      event = events[index]

      // We preprocess lists to add `listItem` tokens, and to infer whether
      // items the list itself are spread out.
      if (
        event[1].type === 'listOrdered' ||
        event[1].type === 'listUnordered'
      ) {
        if (event[0] === 'enter') {
          listStack.push(index)
        } else {
          listStart = listStack.pop(index)
          index = prepareList(events, listStart, index)
        }
      }
    }

    index = -1
    length = events.length

    while (++index < length) {
      handler = config[events[index][0]]

      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          {
            stack: stack,
            config: config,
            enter: enter,
            exit: exit,
            buffer: buffer,
            resume: resume,
            sliceSerialize: events[index][2].sliceSerialize,
            setData: setData,
            getData: getData
          },

          events[index][1]
        )
      }
    }

    // Figure out `root` position.
    stack[0].position = {
      start: point(
        length ? events[0][1].start : {line: 1, column: 1, offset: 0}
      ),

      end: point(
        length
          ? events[events.length - 2][1].end
          : {line: 1, column: 1, offset: 0}
      )
    }

    return stack[0]
  }

  function prepareList(events, start, length) {
    var index = start - 1
    var containerBalance = -1
    var listSpread = false
    var listItem
    var tailIndex
    var lineIndex
    var tailEvent
    var event
    var firstBlankLineIndex
    var atMarker

    while (++index <= length) {
      event = events[index]

      if (
        event[1].type === 'listUnordered' ||
        event[1].type === 'listOrdered' ||
        event[1].type === 'blockQuote'
      ) {
        if (event[0] === 'enter') {
          containerBalance++
        } else {
          containerBalance--
        }

        atMarker = undefined
      } else if (event[1].type === 'lineEndingBlank') {
        if (event[0] === 'enter') {
          if (
            listItem &&
            !atMarker &&
            !containerBalance &&
            !firstBlankLineIndex
          ) {
            firstBlankLineIndex = index
          }

          atMarker = undefined
        }
      } else if (
        event[1].type === 'linePrefix' ||
        event[1].type === 'listItemValue' ||
        event[1].type === 'listItemMarker' ||
        event[1].type === 'listItemPrefix' ||
        event[1].type === 'listItemPrefixWhitespace'
      ) {
        // Empty.
      } else {
        atMarker = undefined
      }

      if (
        (!containerBalance &&
          event[0] === 'enter' &&
          event[1].type === 'listItemPrefix') ||
        (containerBalance === -1 &&
          event[0] === 'exit' &&
          (event[1].type === 'listUnordered' ||
            event[1].type === 'listOrdered'))
      ) {
        if (listItem) {
          tailIndex = index
          lineIndex = undefined

          while (tailIndex--) {
            tailEvent = events[tailIndex]

            if (
              tailEvent[1].type === 'lineEnding' ||
              tailEvent[1].type === 'lineEndingBlank'
            ) {
              if (tailEvent[0] === 'exit') continue

              if (lineIndex) {
                events[lineIndex][1].type = 'lineEndingBlank'
                listSpread = true
              }

              tailEvent[1].type = 'lineEnding'
              lineIndex = tailIndex
            } else if (
              tailEvent[1].type === 'linePrefix' ||
              tailEvent[1].type === 'blockQuotePrefix' ||
              tailEvent[1].type === 'blockQuotePrefixWhitespace' ||
              tailEvent[1].type === 'blockQuoteMarker' ||
              tailEvent[1].type === 'listItemIndent'
            ) {
              // Empty
            } else {
              break
            }
          }

          if (
            firstBlankLineIndex &&
            (!lineIndex || firstBlankLineIndex < lineIndex)
          ) {
            listItem._spread = true
          }

          // Fix position.
          listItem.end = point(
            lineIndex ? events[lineIndex][1].start : event[1].end
          )

          events.splice(lineIndex || index, 0, ['exit', listItem, event[2]])
          index++
          length++
        }

        // Create a new list item.
        if (event[1].type === 'listItemPrefix') {
          listItem = {
            type: 'listItem',
            _spread: false,
            start: point(event[1].start)
          }

          events.splice(index, 0, ['enter', listItem, event[2]])
          index++
          length++
          firstBlankLineIndex = undefined
          atMarker = true
        }
      }
    }

    events[start][1]._spread = listSpread
    return length
  }

  function setData(key, value) {
    data[key] = value
  }

  function getData(key) {
    return data[key]
  }

  function point(d) {
    return {line: d.line, column: d.column, offset: d.offset}
  }

  function opener(create, and) {
    return open

    function open(token) {
      enter.call(this, create(token), token)
      if (and) and.call(this, token)
    }
  }

  function buffer() {
    this.stack.push({type: 'fragment', children: []})
  }

  function enter(node, token) {
    this.stack[this.stack.length - 1].children.push(node)
    this.stack.push(node)
    node.position = {start: point(token.start)}
    return node
  }

  function closer(and) {
    return close

    function close(token) {
      if (and) and.call(this, token)
      exit.call(this, token)
    }
  }

  function exit(token) {
    var node = this.stack.pop()
    node.position.end = point(token.end)
    return node
  }

  function resume() {
    var value = toString(this.stack.pop())
    return value
  }

  //
  // Handlers.
  //

  function onenterlistordered() {
    setData('expectingFirstListItemValue', true)
  }

  function onenterlistitemvalue(token) {
    if (getData('expectingFirstListItemValue')) {
      this.stack[this.stack.length - 2].start = parseInt(
        this.sliceSerialize(token),
        10
      )

      setData('expectingFirstListItemValue')
    }
  }

  function onexitcodefencedfenceinfo() {
    var data = this.resume()
    this.stack[this.stack.length - 1].lang = data
  }

  function onexitcodefencedfencemeta() {
    var data = this.resume()
    this.stack[this.stack.length - 1].meta = data
  }

  function onexitcodefencedfence() {
    // Exit if this is the closing fence.
    if (getData('flowCodeInside')) return
    this.buffer()
    setData('flowCodeInside', true)
  }

  function onexitcodefenced() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data.replace(
      /^(\r?\n|\r)|(\r?\n|\r)$/g,
      ''
    )

    setData('flowCodeInside')
  }

  function onexitcodeindented() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    var label = this.resume()
    this.stack[this.stack.length - 1].label = label
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
  }

  function onexitdefinitiontitlestring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].title = data
  }

  function onexitdefinitiondestinationstring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].url = data
  }

  function onexitatxheadingsequence(token) {
    if (!this.stack[this.stack.length - 1].depth) {
      this.stack[this.stack.length - 1].depth = this.sliceSerialize(
        token
      ).length
    }
  }

  function onexitsetextheadingtext() {
    setData('setextHeadingSlurpLineEnding', true)
  }

  function onexitsetextheadinglinesequence(token) {
    this.stack[this.stack.length - 1].depth =
      this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2
  }

  function onexitsetextheading() {
    setData('setextHeadingSlurpLineEnding')
  }

  function onenterdata(token) {
    var siblings = this.stack[this.stack.length - 1].children
    var tail = siblings[siblings.length - 1]

    if (!tail || tail.type !== 'text') {
      // Add a new text node.
      tail = text()
      tail.position = {start: point(token.start)}
      this.stack[this.stack.length - 1].children.push(tail)
    }

    this.stack.push(tail)
  }

  function onexitdata(token) {
    var tail = this.stack.pop()
    tail.value += this.sliceSerialize(token)
    tail.position.end = point(token.end)
  }

  function onexitlineending(token) {
    var context = this.stack[this.stack.length - 1]

    // If we’re at a hard break, include the line ending in there.
    if (getData('atHardBreak')) {
      context.children[context.children.length - 1].position.end = point(
        token.end
      )

      setData('atHardBreak')
      return
    }

    if (getData('setextHeadingSlurpLineEnding')) {
      return
    }

    if (config.canContainEols.indexOf(context.type) !== -1) {
      onenterdata.call(this, token)
      onexitdata.call(this, token)
    }
  }

  function onexithardbreak() {
    setData('atHardBreak', true)
  }

  function onexithtmlflow() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexithtmltext() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitcodetext() {
    var data = this.resume()
    this.stack[this.stack.length - 1].value = data
  }

  function onexitlink() {
    var context = this.stack[this.stack.length - 1]

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference'
      context.referenceType = getData('referenceType') || 'shortcut'
      delete context.url
      delete context.title
    } else {
      delete context.identifier
      delete context.label
      delete context.referenceType
    }

    setData('referenceType')
  }

  function onexitimage() {
    var context = this.stack[this.stack.length - 1]

    // To do: clean.
    if (getData('inReference')) {
      context.type += 'Reference'
      context.referenceType = getData('referenceType') || 'shortcut'
      delete context.url
      delete context.title
    } else {
      delete context.identifier
      delete context.label
      delete context.referenceType
    }

    setData('referenceType')
  }

  function onexitlabeltext(token) {
    this.stack[this.stack.length - 2].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
  }

  function onexitlabel() {
    var fragment = this.stack[this.stack.length - 1]
    var value = this.resume()

    this.stack[this.stack.length - 1].label = value

    // Assume a reference.
    setData('inReference', true)

    if (this.stack[this.stack.length - 1].type === 'link') {
      this.stack[this.stack.length - 1].children = fragment.children
    } else {
      this.stack[this.stack.length - 1].alt = value
    }
  }

  function onexitresourcedestinationstring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].url = data
  }

  function onexitresourcetitlestring() {
    var data = this.resume()
    this.stack[this.stack.length - 1].title = data
  }

  function onexitresource() {
    setData('inReference')
  }

  function onenterreference() {
    setData('referenceType', 'collapsed')
  }

  function onexitreferencestring(token) {
    var label = this.resume()
    this.stack[this.stack.length - 1].label = label
    this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase()
    setData('referenceType', 'full')
  }

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type)
  }

  function onexitcharacterreferencevalue(token) {
    var data = this.sliceSerialize(token)
    var type = getData('characterReferenceType')
    var value

    if (type) {
      value = safeFromInt(
        data,
        type === 'characterReferenceMarkerNumeric' ? 10 : 16
      )

      setData('characterReferenceType')
    } else {
      value = decode(data)
    }

    this.stack[this.stack.length - 1].value += value
  }

  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token)
    this.stack[this.stack.length - 1].url = this.sliceSerialize(token)
  }

  function onexitautolinkemail(token) {
    onexitdata.call(this, token)
    this.stack[this.stack.length - 1].url =
      'mailto:' + this.sliceSerialize(token)
  }

  //
  // Creaters.
  //

  function blockQuote() {
    return {type: 'blockquote', children: []}
  }

  function codeFlow() {
    return {type: 'code', lang: null, meta: null, value: ''}
  }

  function codeText() {
    return {type: 'inlineCode', value: ''}
  }

  function definition() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: ''
    }
  }

  function emphasis() {
    return {type: 'emphasis', children: []}
  }

  function heading() {
    return {type: 'heading', depth: undefined, children: []}
  }

  function hardBreak() {
    return {type: 'break'}
  }

  function html() {
    return {type: 'html', value: ''}
  }

  function image() {
    return {type: 'image', title: null, url: '', alt: null}
  }

  function link() {
    return {type: 'link', title: null, url: '', children: []}
  }

  function list(token) {
    return {
      type: 'list',
      ordered: token.type === 'listOrdered',
      start: null,
      spread: token._spread,
      children: []
    }
  }

  function listItem(token) {
    return {
      type: 'listItem',
      spread: token._spread,
      checked: null,
      children: []
    }
  }

  function paragraph() {
    return {type: 'paragraph', children: []}
  }

  function strong() {
    return {type: 'strong', children: []}
  }

  function text() {
    return {type: 'text', value: ''}
  }

  function thematicBreak() {
    return {type: 'thematicBreak'}
  }
}

function configure(config, extensions) {
  var length = extensions.length
  var index = -1

  while (++index < length) {
    extension(config, extensions[index])
  }

  return config
}

function extension(config, extension) {
  var key
  var left
  var right

  for (key in extension) {
    left = own.call(config, key) ? config[key] : (config[key] = {})
    right = extension[key]

    if (key === 'canContainEols') {
      config[key] = [].concat(left, right)
    } else {
      Object.assign(left, right)
    }
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-from-markdown/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mdast-util-from-markdown/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./dist */ "./node_modules/mdast-util-from-markdown/dist/index.js")


/***/ }),

/***/ "./node_modules/mdast-util-to-string/index.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-string/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toString

// Get the text content of a node.
// Prefer the node’s plain-text fields, otherwise serialize its children,
// and if the given value is an array, serialize the nodes in it.
function toString(node) {
  return (
    (node &&
      (node.value ||
        node.alt ||
        node.title ||
        ('children' in node && all(node.children)) ||
        ('length' in node && all(node)))) ||
    ''
  )
}

function all(values) {
  var result = []
  var length = values.length
  var index = -1

  while (++index < length) {
    result[index] = toString(values[index])
  }

  return result.join('')
}


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-alpha.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-alpha.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "./node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[A-Za-z]/)


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-alphanumeric.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-alphanumeric.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "./node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[\dA-Za-z]/)


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-atext.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-atext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "./node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[#-'*+\--9=?A-Z^-~]/)


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-control.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-control.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = asciiControl

// Note: EOF is seen as ASCII control here, because `null < 32 == true`.
function asciiControl(code) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code < 32 || code === 127
  )
}


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-digit.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-digit.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "./node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/\d/)


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-hex-digit.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-hex-digit.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "./node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[\dA-Fa-f]/)


/***/ }),

/***/ "./node_modules/micromark/dist/character/ascii-punctuation.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/ascii-punctuation.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "./node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/[!-/:-@[-`{-~]/)


/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js":
/*!********************************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-line-ending-or-space.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = markdownLineEndingOrSpace

function markdownLineEndingOrSpace(code) {
  return code < 0 || code === 32
}


/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-line-ending.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-line-ending.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = markdownLineEnding

function markdownLineEnding(code) {
  return code < -2
}


/***/ }),

/***/ "./node_modules/micromark/dist/character/markdown-space.js":
/*!*****************************************************************!*\
  !*** ./node_modules/micromark/dist/character/markdown-space.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = markdownSpace

function markdownSpace(code) {
  return code === -2 || code === -1 || code === 32
}


/***/ }),

/***/ "./node_modules/micromark/dist/character/unicode-punctuation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/unicode-punctuation.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var unicodePunctuation = __webpack_require__(/*! ../constant/unicode-punctuation-regex */ "./node_modules/micromark/dist/constant/unicode-punctuation-regex.js")
var check = __webpack_require__(/*! ../util/regex-check */ "./node_modules/micromark/dist/util/regex-check.js")

// Size note: removing ASCII from the regex and using `ascii-punctuation` here
// In fact adds to the bundle size.
module.exports = check(unicodePunctuation)


/***/ }),

/***/ "./node_modules/micromark/dist/character/unicode-whitespace.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/character/unicode-whitespace.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var check = __webpack_require__(/*! ../util/regex-check */ "./node_modules/micromark/dist/util/regex-check.js")

module.exports = check(/\s/)


/***/ }),

/***/ "./node_modules/micromark/dist/constant/assign.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/constant/assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Object.assign


/***/ }),

/***/ "./node_modules/micromark/dist/constant/from-char-code.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/from-char-code.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = String.fromCharCode


/***/ }),

/***/ "./node_modules/micromark/dist/constant/has-own-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/has-own-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}.hasOwnProperty


/***/ }),

/***/ "./node_modules/micromark/dist/constant/html-block-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/html-block-names.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
module.exports = [
  'address',
  'article',
  'aside',
  'base',
  'basefont',
  'blockquote',
  'body',
  'caption',
  'center',
  'col',
  'colgroup',
  'dd',
  'details',
  'dialog',
  'dir',
  'div',
  'dl',
  'dt',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'frame',
  'frameset',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'iframe',
  'legend',
  'li',
  'link',
  'main',
  'menu',
  'menuitem',
  'nav',
  'noframes',
  'ol',
  'optgroup',
  'option',
  'p',
  'param',
  'section',
  'source',
  'summary',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'title',
  'tr',
  'track',
  'ul'
]


/***/ }),

/***/ "./node_modules/micromark/dist/constant/html-raw-names.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/html-raw-names.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This module is copied from <https://spec.commonmark.org/0.29/#html-blocks>.
module.exports = ['pre', 'script', 'style']


/***/ }),

/***/ "./node_modules/micromark/dist/constant/unicode-punctuation-regex.js":
/*!***************************************************************************!*\
  !*** ./node_modules/micromark/dist/constant/unicode-punctuation-regex.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This module is generated by `script/`.
//
// CommonMark handles attention (emphasis, strong) markers based on what comes
// before or after them.
// One such difference is if those characters are Unicode punctuation.
// This script is generated from the Unicode data.
module.exports = /[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/


/***/ }),

/***/ "./node_modules/micromark/dist/constructs.js":
/*!***************************************************!*\
  !*** ./node_modules/micromark/dist/constructs.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var attention = __webpack_require__(/*! ./tokenize/attention */ "./node_modules/micromark/dist/tokenize/attention.js")
var headingAtx = __webpack_require__(/*! ./tokenize/heading-atx */ "./node_modules/micromark/dist/tokenize/heading-atx.js")
var autolink = __webpack_require__(/*! ./tokenize/autolink */ "./node_modules/micromark/dist/tokenize/autolink.js")
var list = __webpack_require__(/*! ./tokenize/list */ "./node_modules/micromark/dist/tokenize/list.js")
var blockQuote = __webpack_require__(/*! ./tokenize/block-quote */ "./node_modules/micromark/dist/tokenize/block-quote.js")
var characterEscape = __webpack_require__(/*! ./tokenize/character-escape */ "./node_modules/micromark/dist/tokenize/character-escape.js")
var characterReference = __webpack_require__(/*! ./tokenize/character-reference */ "./node_modules/micromark/dist/tokenize/character-reference.js")
var codeFenced = __webpack_require__(/*! ./tokenize/code-fenced */ "./node_modules/micromark/dist/tokenize/code-fenced.js")
var codeIndented = __webpack_require__(/*! ./tokenize/code-indented */ "./node_modules/micromark/dist/tokenize/code-indented.js")
var codeText = __webpack_require__(/*! ./tokenize/code-text */ "./node_modules/micromark/dist/tokenize/code-text.js")
var definition = __webpack_require__(/*! ./tokenize/definition */ "./node_modules/micromark/dist/tokenize/definition.js")
var hardBreakEscape = __webpack_require__(/*! ./tokenize/hard-break-escape */ "./node_modules/micromark/dist/tokenize/hard-break-escape.js")
var htmlFlow = __webpack_require__(/*! ./tokenize/html-flow */ "./node_modules/micromark/dist/tokenize/html-flow.js")
var htmlText = __webpack_require__(/*! ./tokenize/html-text */ "./node_modules/micromark/dist/tokenize/html-text.js")
var labelEnd = __webpack_require__(/*! ./tokenize/label-end */ "./node_modules/micromark/dist/tokenize/label-end.js")
var labelImage = __webpack_require__(/*! ./tokenize/label-start-image */ "./node_modules/micromark/dist/tokenize/label-start-image.js")
var labelLink = __webpack_require__(/*! ./tokenize/label-start-link */ "./node_modules/micromark/dist/tokenize/label-start-link.js")
var setextUnderline = __webpack_require__(/*! ./tokenize/setext-underline */ "./node_modules/micromark/dist/tokenize/setext-underline.js")
var thematicBreak = __webpack_require__(/*! ./tokenize/thematic-break */ "./node_modules/micromark/dist/tokenize/thematic-break.js")
var lineEnding = __webpack_require__(/*! ./tokenize/line-ending */ "./node_modules/micromark/dist/tokenize/line-ending.js")
var resolveText = __webpack_require__(/*! ./initialize/text */ "./node_modules/micromark/dist/initialize/text.js").resolver

exports.document = {
  42: list, // Asterisk
  43: list, // Plus sign
  45: list, // Dash
  48: list, // 0
  49: list, // 1
  50: list, // 2
  51: list, // 3
  52: list, // 4
  53: list, // 5
  54: list, // 6
  55: list, // 7
  56: list, // 8
  57: list, // 9
  62: blockQuote // Greater than
}

exports.contentInitial = {
  91: definition // Left square bracket
}

exports.flowInitial = {
  '-2': codeIndented, // Horizontal tab
  '-1': codeIndented, // Virtual space
  32: codeIndented // Space
}

exports.flow = {
  35: headingAtx, // Number sign
  42: thematicBreak, // Asterisk
  45: [setextUnderline, thematicBreak], // Dash
  60: htmlFlow, // Less than
  61: setextUnderline, // Equals to
  95: thematicBreak, // Underscore
  96: codeFenced, // Grave accent
  126: codeFenced // Tilde
}

exports.string = {
  38: characterReference, // Ampersand
  92: characterEscape // Backslash
}

exports.text = {
  '-5': lineEnding, // Carriage return
  '-4': lineEnding, // Line feed
  '-3': lineEnding, // Carriage return + line feed
  33: labelImage, // Exclamation mark
  38: characterReference, // Ampersand
  42: attention, // Asterisk
  60: [autolink, htmlText], // Less than
  91: labelLink, // Left square bracket
  92: [hardBreakEscape, characterEscape], // Backslash
  93: labelEnd, // Right square bracket
  95: attention, // Underscore
  96: codeText // Grave accent
}

exports.insideSpan = {
  null: [attention, resolveText]
}


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/content.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/content.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = initializeContent

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ../tokenize/factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function initializeContent(effects) {
  var contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  )

  var previous

  return contentStart

  function afterContentStartConstruct(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return createSpace(effects, contentStart, 'linePrefix')
  }

  function paragraphInitial(code) {
    effects.enter('paragraph')
    return lineStart(code)
  }

  function lineStart(code) {
    var token = effects.enter('chunkText', {
      contentType: 'text',
      previous: previous
    })

    if (previous) {
      previous.next = token
    }

    previous = token

    return data(code)
  }

  function data(code) {
    if (code === null) {
      effects.exit('chunkText')
      effects.exit('paragraph')
      effects.consume(code)
      return
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      effects.exit('chunkText')
      return lineStart
    }

    // Data.
    effects.consume(code)
    return data
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/document.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/document.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = initializeDocument

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ../tokenize/factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var blank = __webpack_require__(/*! ../tokenize/partial-blank-line */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")

var container = {tokenize: tokenizeContainer}
var lazyFlow = {tokenize: tokenizeLazyFlow}

function initializeDocument(effects) {
  var self = this
  var stack = []
  var continued = 0
  var inspectResult
  var childFlow
  var childToken

  return start

  function start(code) {
    if (continued < stack.length) {
      self.containerState = stack[continued][1]
      return effects.attempt(
        stack[continued][0].continuation,
        documentContinue,
        documentContinued
      )(code)
    }

    return documentContinued(code)
  }

  function documentContinue(code) {
    continued++
    return start(code)
  }

  function documentContinued(code) {
    // If we’re in a concrete construct (such as when expecting another line of
    // HTML, or we resulted in lazy content), we can immediately start flow.
    if (inspectResult && inspectResult.flowContinue) {
      return flowStart(code)
    }

    self.interrupt =
      childFlow &&
      childFlow.currentConstruct &&
      childFlow.currentConstruct.interruptible
    self.containerState = {}
    return effects.attempt(container, containerContinue, flowStart)(code)
  }

  function containerContinue(code) {
    stack.push([self.currentConstruct, self.containerState])
    self.containerState = undefined
    return documentContinued(code)
  }

  function flowStart(code) {
    if (code === null) {
      exitContainers(0, true)
      effects.consume(code)
      return
    }

    childFlow = childFlow || self.parser.flow(self.now())

    effects.enter('chunkFlow', {
      contentType: 'flow',
      previous: childToken,
      _tokenizer: childFlow
    })

    return flowContinue(code)
  }

  function flowContinue(code) {
    if (code === null) {
      continueFlow(effects.exit('chunkFlow'))
      return flowStart(code)
    }

    if (markdownLineEnding(code)) {
      effects.consume(code)
      continueFlow(effects.exit('chunkFlow'))
      return effects.check(
        {tokenize: tokenizeInspect, partial: true},
        documentAfterPeek
      )
    }

    effects.consume(code)
    return flowContinue
  }

  function documentAfterPeek(code) {
    exitContainers(
      inspectResult.continued,
      inspectResult && inspectResult.flowEnd
    )

    continued = 0
    return start(code)
  }

  function continueFlow(token) {
    if (childToken) childToken.next = token
    childToken = token
    childFlow.lazy = inspectResult && inspectResult.lazy
    childFlow.defineSkip(token.start)
    childFlow.write(self.sliceStream(token))
  }

  function exitContainers(size, end) {
    var index = stack.length

    // Close the flow.
    if (childFlow && end) {
      childFlow.write([null])
      childToken = childFlow = undefined
    }

    // Exit open containers.
    while (index-- > size) {
      self.containerState = stack[index][1]
      stack[index][0].exit.call(self, effects)
    }

    stack.length = size
  }

  function tokenizeInspect(effects, ok) {
    var subcontinued = 0

    inspectResult = {}

    return inspectStart

    function inspectStart(code) {
      if (subcontinued < stack.length) {
        self.containerState = stack[subcontinued][1]
        return effects.attempt(
          stack[subcontinued][0].continuation,
          inspectContinue,
          inspectLess
        )(code)
      }

      // If we’re continued but in a concrete flow, we can’t have more
      // containers.
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) {
        inspectResult.flowContinue = true
        return inspectDone(code)
      }

      self.interrupt =
        childFlow.currentConstruct && childFlow.currentConstruct.interruptible
      self.containerState = {}
      return effects.attempt(container, inspectFlowEnd, inspectDone)(code)
    }

    function inspectContinue(code) {
      subcontinued++
      return self.containerState._closeFlow
        ? inspectFlowEnd(code)
        : inspectStart(code)
    }

    function inspectLess(code) {
      if (childFlow.currentConstruct && childFlow.currentConstruct.lazy) {
        // Maybe another container?
        self.containerState = {}
        return effects.attempt(
          container,
          inspectFlowEnd,
          // Maybe flow, or a blank line?
          effects.attempt(
            lazyFlow,
            inspectFlowEnd,
            effects.check(blank, inspectFlowEnd, inspectLazy)
          )
        )(code)
      }

      // Otherwise we’re interrupting.
      return inspectFlowEnd(code)
    }

    function inspectLazy(code) {
      // Act as if all containers are continued.
      subcontinued = stack.length
      inspectResult.lazy = true
      inspectResult.flowContinue = true
      return inspectDone(code)
    }

    // We’re done with flow if we have more containers, or an interruption.
    function inspectFlowEnd(code) {
      inspectResult.flowEnd = true
      return inspectDone(code)
    }

    function inspectDone(code) {
      inspectResult.continued = subcontinued
      self.interrupt = self.containerState = undefined
      return ok(code)
    }
  }
}

function tokenizeContainer(effects, ok, nok) {
  return createSpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok, nok),
    'linePrefix',
    4
  )
}

function tokenizeLazyFlow(effects, ok, nok) {
  return createSpace(
    effects,
    effects.lazy(this.parser.constructs.flow, ok, nok),
    'linePrefix',
    4
  )
}


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/flow.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/flow.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = initializeFlow

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ../tokenize/factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var blank = __webpack_require__(/*! ../tokenize/partial-blank-line */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")
var content = __webpack_require__(/*! ../tokenize/content */ "./node_modules/micromark/dist/tokenize/content.js")

function initializeFlow(effects) {
  var self = this
  var initial = effects.attempt(
    // Try to parse a blank line.
    blank,
    atBlankEnding,
    // Try to parse initial flow (essentially, only code).
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      createSpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content, afterConstruct)
        ),
        'linePrefix'
      )
    )
  )

  return initial

  function atBlankEnding(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEndingBlank')
    effects.consume(code)
    effects.exit('lineEndingBlank')
    self.currentConstruct = undefined
    return initial
  }

  function afterConstruct(code) {
    if (code === null) {
      effects.consume(code)
      return
    }

    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    self.currentConstruct = undefined
    return initial
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/initialize/text.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/initialize/text.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.text = initializeFactory('text')
exports.string = initializeFactory('string')
exports.resolver = {resolveAll: resolver()}

var assign = __webpack_require__(/*! ../constant/assign */ "./node_modules/micromark/dist/constant/assign.js")

var shallow = __webpack_require__(/*! ../util/shallow */ "./node_modules/micromark/dist/util/shallow.js")

function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: resolver(field === 'text' ? resolveAllLineSuffixes : undefined)
  }

  function initializeText(effects) {
    var self = this
    var constructs = this.parser.constructs[field]
    var text = effects.attempt(constructs, start, notText)

    return start

    function start(code) {
      return atBreak(code) ? text(code) : notText(code)
    }

    function notText(code) {
      if (code === null) {
        effects.consume(code)
        return
      }

      effects.enter('data')
      effects.consume(code)
      return data
    }

    function data(code) {
      if (atBreak(code)) {
        effects.exit('data')
        return text(code)
      }

      // Data.
      effects.consume(code)
      return data
    }

    function atBreak(code) {
      var list = constructs[code]
      var index = -1

      if (code === null) {
        return true
      }

      if (list) {
        while (++index < list.length) {
          if (
            !list[index].previous ||
            list[index].previous.call(self, self.previous)
          ) {
            return true
          }
        }
      }
    }
  }
}

function resolver(extraResolver) {
  return resolveAllText

  function resolveAllText(events, context) {
    var index = -1
    var enter

    // A rather boring computation (to merge adjacent `data` events) which
    // improves mm performance by 29%.
    while (++index <= events.length) {
      if (enter === undefined) {
        if (events[index] && events[index][1].type === 'data') {
          enter = index
          index++
        }
      } else if (!events[index] || events[index][1].type !== 'data') {
        // Don’t do anything if there is one data token.
        if (index !== enter + 2) {
          events[enter][1].end = events[index - 1][1].end
          events.splice(enter + 2, index - enter - 2)
          index = enter + 2
        }

        enter = undefined
      }
    }

    return extraResolver ? extraResolver(events, context) : events
  }
}

// A rather ugly set of instructions which again looks at chunks in the input
// stream.
// The reason to do this here is that it is *much* faster to parse in reverse.
// And that we can’t hook into `null` to split the line suffix before an EOF.
// To do: figure out if we can make this into a clean utility, or even in core.
// As it will be useful for GFMs literal autolink extension (and maybe even
// tables?)
function resolveAllLineSuffixes(events, context) {
  var eventIndex = -1
  var chunks
  var data
  var chunk
  var index
  var bufferIndex
  var size
  var tabs
  var token

  while (++eventIndex <= events.length) {
    if (
      (eventIndex === events.length ||
        events[eventIndex][1].type === 'lineEnding') &&
      events[eventIndex - 1][1].type === 'data'
    ) {
      data = events[eventIndex - 1][1]
      chunks = context.sliceStream(data)
      index = chunks.length
      bufferIndex = -1
      size = 0
      tabs = undefined

      while (index--) {
        chunk = chunks[index]

        if (typeof chunk === 'string') {
          bufferIndex = chunk.length

          while (chunk.charCodeAt(bufferIndex - 1) === 32) {
            size++
            bufferIndex--
          }

          if (bufferIndex) break
          bufferIndex = -1
        }
        // Number
        else if (chunk === -2) {
          tabs = true
          size++
        } else if (chunk === -1) {
          // Empty
        } else {
          // Replacement character, exit.
          index++
          break
        }
      }

      if (size) {
        token = {
          type:
            eventIndex === events.length || tabs || size < 2
              ? 'lineSuffix'
              : 'hardBreakTrailing',

          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index,
            _bufferIndex: index
              ? bufferIndex
              : data.start._bufferIndex + bufferIndex
          },

          end: shallow(data.end)
        }

        data.end = shallow(token.start)

        if (data.start.offset === data.end.offset) {
          assign(data, token)
        } else {
          events.splice(
            eventIndex,
            0,
            ['enter', token, context],
            ['exit', token, context]
          )

          eventIndex += 2
        }
      }

      eventIndex++
    }
  }

  return events
}


/***/ }),

/***/ "./node_modules/micromark/dist/parse.js":
/*!**********************************************!*\
  !*** ./node_modules/micromark/dist/parse.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createParser

var initializeContent = __webpack_require__(/*! ./initialize/content */ "./node_modules/micromark/dist/initialize/content.js")
var initializeDocument = __webpack_require__(/*! ./initialize/document */ "./node_modules/micromark/dist/initialize/document.js")
var initializeFlow = __webpack_require__(/*! ./initialize/flow */ "./node_modules/micromark/dist/initialize/flow.js")
var initializeText = __webpack_require__(/*! ./initialize/text */ "./node_modules/micromark/dist/initialize/text.js")
var constructs = __webpack_require__(/*! ./constructs */ "./node_modules/micromark/dist/constructs.js")
var createTokenizer = __webpack_require__(/*! ./util/create-tokenizer */ "./node_modules/micromark/dist/util/create-tokenizer.js")
var combineExtensions = __webpack_require__(/*! ./util/combine-extensions */ "./node_modules/micromark/dist/util/combine-extensions.js")
var miniflat = __webpack_require__(/*! ./util/miniflat */ "./node_modules/micromark/dist/util/miniflat.js")

function createParser(options) {
  var settings = options || {}
  var parser = {
    defined: [],
    constructs: combineExtensions(
      [constructs].concat(miniflat(settings.extensions))
    ),

    content: create(initializeContent),
    document: create(initializeDocument),
    flow: create(initializeFlow),
    string: create(initializeText.string),
    text: create(initializeText.text)
  }

  return parser

  function create(initializer) {
    return creator
    function creator(from) {
      return createTokenizer(parser, initializer, from)
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/postprocess.js":
/*!****************************************************!*\
  !*** ./node_modules/micromark/dist/postprocess.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = postprocess

var subtokenize = __webpack_require__(/*! ./util/subtokenize */ "./node_modules/micromark/dist/util/subtokenize.js")

function postprocess(events) {
  while (!subtokenize(events)) {
    // Empty
  }

  return events
}


/***/ }),

/***/ "./node_modules/micromark/dist/preprocess.js":
/*!***************************************************!*\
  !*** ./node_modules/micromark/dist/preprocess.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = preprocessor

var search = /[\0\t\n\r]/g

function preprocessor() {
  var start = true
  var column = 1
  var buffer = ''
  var atCarriageReturn

  return preprocess

  function preprocess(value, encoding, end) {
    var chunks = []
    var match
    var next
    var startPosition
    var endPosition
    var code

    value = buffer + value.toString(encoding)
    startPosition = 0
    buffer = ''

    if (start) {
      if (value.charCodeAt(0) === 65279) {
        startPosition++
      }

      start = undefined
    }

    while (startPosition < value.length) {
      search.lastIndex = startPosition
      match = search.exec(value)
      endPosition = match ? match.index : value.length
      code = value.charCodeAt(endPosition)

      if (!match) {
        buffer = value.slice(startPosition)
        break
      }

      if (code === 10 && startPosition === endPosition && atCarriageReturn) {
        chunks.push(-3)
        atCarriageReturn = undefined
      } else {
        if (atCarriageReturn) {
          chunks.push(-5)
          atCarriageReturn = undefined
        }

        if (startPosition < endPosition) {
          chunks.push(value.slice(startPosition, endPosition))
          column += endPosition - startPosition
        }

        if (code === 0) {
          chunks.push(65533)
          column++
        } else if (code === 9) {
          next = Math.ceil(column / 4) * 4
          chunks.push(-2)
          while (column++ < next) chunks.push(-1)
        } else if (code === 10) {
          chunks.push(-4)
          column = 1
        }
        // Must be carriage return.
        else {
          atCarriageReturn = true
          column = 1
        }
      }

      startPosition = endPosition + 1
    }

    if (end) {
      if (atCarriageReturn) chunks.push(-5)
      if (buffer) chunks.push(buffer)
      chunks.push(null)
    }

    return chunks
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/attention.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/attention.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeAttention
exports.resolveAll = resolveAllAttention

var shallow = __webpack_require__(/*! ../util/shallow */ "./node_modules/micromark/dist/util/shallow.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")
var classifyCharacter = __webpack_require__(/*! ../util/classify-character */ "./node_modules/micromark/dist/util/classify-character.js")
var movePoint = __webpack_require__(/*! ../util/move-point */ "./node_modules/micromark/dist/util/move-point.js")
var resolveAll = __webpack_require__(/*! ../util/resolve-all */ "./node_modules/micromark/dist/util/resolve-all.js")

// Take all events and resolve attention to emphasis or strong.
function resolveAllAttention(events, context) {
  var index = -1
  var open
  var group
  var text
  var openingSequence
  var closingSequence
  var use
  var nextEvents
  var offset

  // Walk through all events.
  //
  // Note: performance of this is fine on an mb of normal markdown, but it’s
  // a bottleneck for malicious stuff.
  while (++index < events.length) {
    // Find a token that can close.
    if (
      events[index][0] === 'enter' &&
      events[index][1].type === 'attentionSequence' &&
      events[index][1]._close
    ) {
      open = index

      // Now walk back to find an opener.
      while (open--) {
        // Find a token that can open the closer.
        if (
          events[open][0] === 'exit' &&
          events[open][1].type === 'attentionSequence' &&
          events[open][1]._open &&
          // If the markers are the same:
          context.sliceSerialize(events[open][1]).charCodeAt(0) ===
            context.sliceSerialize(events[index][1]).charCodeAt(0)
        ) {
          // If the opening can close or the closing can open,
          // and the close size *is not* a multiple of three,
          // but the sum of the opening and closing size *is* multiple of three,
          // then don’t match.
          if (
            (events[open][1]._close || events[index][1]._open) &&
            (events[index][1].end.offset - events[index][1].start.offset) % 3 &&
            !(
              (events[open][1].end.offset -
                events[open][1].start.offset +
                events[index][1].end.offset -
                events[index][1].start.offset) %
              3
            )
          ) {
            continue
          }

          // Number of markers to use from the sequence.
          use =
            events[open][1].end.offset - events[open][1].start.offset > 1 &&
            events[index][1].end.offset - events[index][1].start.offset > 1
              ? 2
              : 1

          openingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: movePoint(shallow(events[open][1].end), -use),
            end: shallow(events[open][1].end)
          }

          closingSequence = {
            type: use > 1 ? 'strongSequence' : 'emphasisSequence',
            start: shallow(events[index][1].start),
            end: movePoint(shallow(events[index][1].start), use)
          }

          text = {
            type: use > 1 ? 'strongText' : 'emphasisText',
            start: shallow(events[open][1].end),
            end: shallow(events[index][1].start)
          }

          group = {
            type: use > 1 ? 'strong' : 'emphasis',
            start: shallow(openingSequence.start),
            end: shallow(closingSequence.end)
          }

          events[open][1].end = shallow(openingSequence.start)
          events[index][1].start = shallow(closingSequence.end)

          nextEvents = []

          // If there are more markers in the opening, add them before.
          if (events[open][1].end.offset - events[open][1].start.offset) {
            chunkedSplice(nextEvents, nextEvents.length, 0, [
              ['enter', events[open][1], context],
              ['exit', events[open][1], context]
            ])
          }

          // Opening.
          chunkedSplice(nextEvents, nextEvents.length, 0, [
            ['enter', group, context],
            ['enter', openingSequence, context],
            ['exit', openingSequence, context],
            ['enter', text, context]
          ])

          // Between.
          chunkedSplice(
            nextEvents,
            nextEvents.length,
            0,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index),
              context
            )
          )

          // Closing.
          chunkedSplice(nextEvents, nextEvents.length, 0, [
            ['exit', text, context],
            ['enter', closingSequence, context],
            ['exit', closingSequence, context],
            ['exit', group, context]
          ])

          // If there are more markers in the closing, add them after.
          if (events[index][1].end.offset - events[index][1].start.offset) {
            offset = 2
            chunkedSplice(nextEvents, nextEvents.length, 0, [
              ['enter', events[index][1], context],
              ['exit', events[index][1], context]
            ])
          } else {
            offset = 0
          }

          chunkedSplice(events, open - 1, index - open + 3, nextEvents)

          index = open + nextEvents.length - offset - 2
          break
        }
      }
    }
  }

  // Remove remaining sequences.
  index = -1

  while (++index < events.length) {
    if (events[index][1].type === 'attentionSequence') {
      events[index][1].type = 'data'
    }
  }

  return events
}

function tokenizeAttention(effects, ok) {
  var before = classifyCharacter(this.previous)
  var marker

  return start

  function start(code) {
    effects.enter('attentionSequence')
    marker = code
    return sequence(code)
  }

  function sequence(code) {
    var token
    var after
    var open
    var close

    if (code === marker) {
      effects.consume(code)
      return sequence
    }

    token = effects.exit('attentionSequence')
    after = classifyCharacter(code)
    open = !after || (after === 2 && before)
    close = !before || (before === 2 && after)
    token._open = marker === 42 ? open : open && (before || !close)
    token._close = marker === 42 ? close : close && (after || !open)
    return ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/autolink.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/autolink.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeAutolink

var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiAtext = __webpack_require__(/*! ../character/ascii-atext */ "./node_modules/micromark/dist/character/ascii-atext.js")
var asciiControl = __webpack_require__(/*! ../character/ascii-control */ "./node_modules/micromark/dist/character/ascii-control.js")

function tokenizeAutolink(effects, ok, nok) {
  var size

  return start

  function start(code) {
    effects.enter('autolink')
    effects.enter('autolinkMarker')
    effects.consume(code)
    effects.exit('autolinkMarker')
    effects.enter('autolinkProtocol')
    return open
  }

  function open(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      size = 1
      return schemeOrEmailAtext
    }

    return asciiAtext(code) ? emailAtext(code) : nok(code)
  }

  function schemeOrEmailAtext(code) {
    return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)
      ? schemeInsideOrEmailAtext(code)
      : emailAtext(code)
  }

  function schemeInsideOrEmailAtext(code) {
    if (code === 58) {
      effects.consume(code)
      return urlInside
    }

    if (
      (code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) &&
      size++ < 32
    ) {
      effects.consume(code)
      return schemeInsideOrEmailAtext
    }

    return emailAtext(code)
  }

  function urlInside(code) {
    if (code === 62) {
      effects.exit('autolinkProtocol')
      return end(code)
    }

    if (code === 32 || code === 60 || asciiControl(code)) {
      return nok(code)
    }

    effects.consume(code)
    return urlInside
  }

  function emailAtext(code) {
    if (code === 64) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (asciiAtext(code)) {
      effects.consume(code)
      return emailAtext
    }

    return nok(code)
  }

  function emailAtSignOrDot(code) {
    return asciiAlphanumeric(code) ? emailLabel(code) : nok(code)
  }

  function emailLabel(code) {
    if (code === 46) {
      effects.consume(code)
      size = 0
      return emailAtSignOrDot
    }

    if (code === 62) {
      // Exit, then change the type.
      effects.exit('autolinkProtocol').type = 'autolinkEmail'
      return end(code)
    }

    return emailValue(code)
  }

  function emailValue(code) {
    if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
      effects.consume(code)
      return code === 45 ? emailValue : emailLabel
    }

    return nok(code)
  }

  function end(code) {
    effects.enter('autolinkMarker')
    effects.consume(code)
    effects.exit('autolinkMarker')
    effects.exit('autolink')
    return ok
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/block-quote.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/block-quote.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeBlockQuoteStart
exports.continuation = {tokenize: tokenizeBlockQuoteContinuation}
exports.exit = exit

var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "./node_modules/micromark/dist/character/markdown-space.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeBlockQuoteStart(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    if (code === 62) {
      if (!self.containerState.open) {
        effects.enter('blockQuote', {_container: true})
        self.containerState.open = true
      }

      effects.enter('blockQuotePrefix')
      effects.enter('blockQuoteMarker')
      effects.consume(code)
      effects.exit('blockQuoteMarker')
      return after
    }

    return nok(code)
  }

  function after(code) {
    if (markdownSpace(code)) {
      effects.enter('blockQuotePrefixWhitespace')
      effects.consume(code)
      effects.exit('blockQuotePrefixWhitespace')
      effects.exit('blockQuotePrefix')
      return ok
    }

    effects.exit('blockQuotePrefix')
    return ok(code)
  }
}

function tokenizeBlockQuoteContinuation(effects, ok, nok) {
  return createSpace(
    effects,
    effects.attempt(exports, ok, nok),
    'linePrefix',
    4
  )
}

function exit(effects) {
  effects.exit('blockQuote')
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/character-escape.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/character-escape.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCharacterEscape

var asciiPunctuation = __webpack_require__(/*! ../character/ascii-punctuation */ "./node_modules/micromark/dist/character/ascii-punctuation.js")

function tokenizeCharacterEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('characterEscape')
    effects.enter('escapeMarker')
    effects.consume(code)
    effects.exit('escapeMarker')
    return open
  }

  function open(code) {
    if (asciiPunctuation(code)) {
      effects.enter('characterEscapeValue')
      effects.consume(code)
      effects.exit('characterEscapeValue')
      effects.exit('characterEscape')
      return ok
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/character-reference.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/character-reference.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCharacterReference

var decode = __webpack_require__(/*! parse-entities/decode-entity */ "./node_modules/parse-entities/decode-entity.browser.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiDigit = __webpack_require__(/*! ../character/ascii-digit */ "./node_modules/micromark/dist/character/ascii-digit.js")
var asciiHexDigit = __webpack_require__(/*! ../character/ascii-hex-digit */ "./node_modules/micromark/dist/character/ascii-hex-digit.js")

function tokenizeCharacterReference(effects, ok, nok) {
  var self = this
  var size = 0
  var max
  var test

  return start

  function start(code) {
    effects.enter('characterReference')
    effects.enter('characterReferenceMarker')
    effects.consume(code)
    effects.exit('characterReferenceMarker')
    return open
  }

  function open(code) {
    if (code === 35) {
      effects.enter('characterReferenceMarkerNumeric')
      effects.consume(code)
      effects.exit('characterReferenceMarkerNumeric')
      return numeric
    }

    effects.enter('characterReferenceValue')
    max = 31
    test = asciiAlphanumeric
    return value(code)
  }

  function numeric(code) {
    if (code === 88 || code === 120) {
      effects.enter('characterReferenceMarkerHexadecimal')
      effects.consume(code)
      effects.exit('characterReferenceMarkerHexadecimal')
      effects.enter('characterReferenceValue')
      max = 6
      test = asciiHexDigit
      return value
    }

    effects.enter('characterReferenceValue')
    max = 7
    test = asciiDigit
    return value(code)
  }

  function value(code) {
    var token

    if (code === 59 && size) {
      token = effects.exit('characterReferenceValue')

      if (test === asciiAlphanumeric && !decode(self.sliceSerialize(token))) {
        return nok(code)
      }

      effects.enter('characterReferenceMarker')
      effects.consume(code)
      effects.exit('characterReferenceMarker')
      effects.exit('characterReference')
      return ok
    }

    if (test(code) && size++ < max) {
      effects.consume(code)
      return value
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-fenced.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-fenced.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCodeFenced
exports.concrete = true

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")

var prefixSize = __webpack_require__(/*! ../util/prefix-size */ "./node_modules/micromark/dist/util/prefix-size.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeCodeFenced(effects, ok, nok) {
  var self = this
  var initialPrefix = prefixSize(this.events, 'linePrefix')
  var sizeOpen = 0
  var marker

  return start

  function start(code) {
    effects.enter('codeFenced')
    effects.enter('codeFencedFence')
    effects.enter('codeFencedFenceSequence')
    marker = code
    return sequenceOpen(code)
  }

  function sequenceOpen(code) {
    if (code === marker) {
      effects.consume(code)
      sizeOpen++
      return sequenceOpen
    }

    effects.exit('codeFencedFenceSequence')
    return sizeOpen < 3
      ? nok(code)
      : createSpace(effects, infoOpen, 'whitespace')(code)
  }

  function infoOpen(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceInfo')
    effects.enter('chunkString', {contentType: 'string'})
    return info(code)
  }

  function info(code) {
    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('chunkString')
      effects.exit('codeFencedFenceInfo')
      return createSpace(effects, infoAfter, 'whitespace')(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code)
    return info
  }

  function infoAfter(code) {
    if (code === null || markdownLineEnding(code)) {
      return openAfter(code)
    }

    effects.enter('codeFencedFenceMeta')
    effects.enter('chunkString', {contentType: 'string'})
    return meta(code)
  }

  function meta(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('chunkString')
      effects.exit('codeFencedFenceMeta')
      return openAfter(code)
    }

    if (code === 96 && code === marker) return nok(code)
    effects.consume(code)
    return meta
  }

  function openAfter(code) {
    effects.exit('codeFencedFence')
    return self.interrupt ? ok(code) : content(code)
  }

  function content(code) {
    if (code === null) {
      return after(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return effects.attempt(
        {tokenize: tokenizeClosingFence, partial: true},
        after,
        initialPrefix
          ? createSpace(effects, content, 'linePrefix', initialPrefix + 1)
          : content
      )
    }

    effects.enter('codeFlowValue')
    return contentContinue(code)
  }

  function contentContinue(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue')
      return content(code)
    }

    effects.consume(code)
    return contentContinue
  }

  function after(code) {
    effects.exit('codeFenced')
    return ok(code)
  }

  function tokenizeClosingFence(effects, ok, nok) {
    var size = 0

    return createSpace(effects, closingPrefixAfter, 'linePrefix', 4)

    function closingPrefixAfter(code) {
      effects.enter('codeFencedFence')
      effects.enter('codeFencedFenceSequence')
      return closingSequence(code)
    }

    function closingSequence(code) {
      if (code === marker) {
        effects.consume(code)
        size++
        return closingSequence
      }

      if (size < sizeOpen) return nok(code)
      effects.exit('codeFencedFenceSequence')
      return createSpace(effects, closingSequenceEnd, 'whitespace')(code)
    }

    function closingSequenceEnd(code) {
      if (code === null || markdownLineEnding(code)) {
        effects.exit('codeFencedFence')
        return ok(code)
      }

      return nok(code)
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-indented.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-indented.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCodeIndented
exports.resolve = resolveCodeIndented

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size */ "./node_modules/micromark/dist/util/prefix-size.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var continuedIndent = {tokenize: tokenizeContinuedIndent, partial: true}

function resolveCodeIndented(events, context) {
  var code = {
    type: 'codeIndented',
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  }

  chunkedSplice(events, 0, 0, [['enter', code, context]])
  chunkedSplice(events, events.length, 0, [['exit', code, context]])

  return events
}

function tokenizeCodeIndented(effects, ok, nok) {
  var self = this

  return createSpace(
    effects,
    afterInitial,
    'linePrefix',

    4 + 1
  )

  function afterInitial(code) {
    // Flow checks blank lines first, so we don’t have EOL/EOF.

    if (prefixSize(self.events, 'linePrefix') < 4) {
      return nok(code)
    }

    effects.enter('codeFlowValue')
    return content(code)
  }

  function afterPrefix(code) {
    if (code === null) {
      return ok(code)
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(continuedIndent, afterPrefix, ok)(code)
    }

    effects.enter('codeFlowValue')
    return content(code)
  }

  function content(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue')
      return afterPrefix(code)
    }

    effects.consume(code)
    return content
  }
}

function tokenizeContinuedIndent(effects, ok, nok) {
  var self = this

  return createSpace(
    effects,
    afterPrefix,
    'linePrefix',

    4 + 1
  )

  function afterPrefix(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')

      return createSpace(
        effects,
        afterPrefix,
        'linePrefix',

        4 + 1
      )
    }

    return prefixSize(self.events, 'linePrefix') < 4 ? nok(code) : ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/code-text.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/code-text.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeCodeText
exports.resolve = resolveCodeText
exports.previous = previous

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

function resolveCodeText(events) {
  var tailExitIndex = events.length - 4
  var headEnterIndex = 3
  var index
  var enter

  // If we start and end with an EOL or a space.
  if (
    (events[headEnterIndex][1].type === 'lineEnding' ||
      events[headEnterIndex][1].type === 'space') &&
    (events[tailExitIndex][1].type === 'lineEnding' ||
      events[tailExitIndex][1].type === 'space')
  ) {
    index = headEnterIndex

    // And we have data.
    while (++index < tailExitIndex) {
      if (events[index][1].type === 'codeTextData') {
        // Then we have padding.
        events[tailExitIndex][1].type = events[headEnterIndex][1].type =
          'codeTextPadding'

        headEnterIndex += 2
        tailExitIndex -= 2
        break
      }
    }
  }

  // Merge adjacent spaces and data.
  index = headEnterIndex - 1
  tailExitIndex++

  while (++index <= tailExitIndex) {
    if (enter === undefined) {
      if (index !== tailExitIndex && events[index][1].type !== 'lineEnding') {
        enter = index
      }
    } else if (
      index === tailExitIndex ||
      events[index][1].type === 'lineEnding'
    ) {
      events[enter][1].type = 'codeTextData'

      if (index !== enter + 2) {
        events[enter][1].end = events[index - 1][1].end
        events.splice(enter + 2, index - enter - 2)
        tailExitIndex -= index - enter - 2
        index = enter + 2
      }

      enter = undefined
    }
  }

  return events
}

function previous(code) {
  // If there is a previous code, there will always be a tail.
  return (
    code !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}

function tokenizeCodeText(effects, ok, nok) {
  var self = this
  var sizeOpen = 0
  var size
  var token

  return start

  function start(code) {
    effects.enter('codeText')
    effects.enter('codeTextSequence')
    return openingSequence(code)
  }

  function openingSequence(code) {
    if (code === 96) {
      effects.consume(code)
      sizeOpen++
      return openingSequence
    }

    effects.exit('codeTextSequence')
    return gap(code)
  }

  function gap(code) {
    // EOF.
    if (code === null) {
      return nok(code)
    }

    // Closing fence?
    // Could also be data.
    if (code === 96) {
      token = effects.enter('codeTextSequence')
      size = 0
      return closingSequence(code)
    }

    // Tabs don’t work, and virtual spaces don’t make sense.
    if (code === 32) {
      effects.enter('space')
      effects.consume(code)
      effects.exit('space')
      return gap
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return gap
    }

    // Data.
    effects.enter('codeTextData')
    return data(code)
  }

  // In code.
  function data(code) {
    if (
      code === null ||
      code === 32 ||
      code === 96 ||
      markdownLineEnding(code)
    ) {
      effects.exit('codeTextData')
      return gap(code)
    }

    effects.consume(code)
    return data
  }

  // Closing fence.
  function closingSequence(code) {
    // More.
    if (code === 96) {
      effects.consume(code)
      size++
      return closingSequence
    }

    // Done!
    if (size === sizeOpen) {
      effects.exit('codeTextSequence')
      effects.exit('codeText')
      return ok(code)
    }

    // More or less accents: mark as data.
    token.type = 'codeTextData'
    return data(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/content.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/content.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeContent
exports.resolve = resolveContent
exports.interruptible = true
exports.lazy = true

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var subtokenize = __webpack_require__(/*! ../util/subtokenize */ "./node_modules/micromark/dist/util/subtokenize.js")
var prefixSize = __webpack_require__(/*! ../util/prefix-size */ "./node_modules/micromark/dist/util/prefix-size.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var lookaheadConstruct = {tokenize: tokenizeLookaheadConstruct, partial: true}

// Content is transparent: it’s parsed right now. That way, definitions are also
// parsed right now: before text in paragraphs (specifically, media) are parsed.
function resolveContent(events) {
  subtokenize(events)
  return events
}

function tokenizeContent(effects, ok) {
  var previous

  return start

  function start(code) {
    effects.enter('content')
    previous = effects.enter('chunkContent', {
      contentType: 'content'
    })

    return data(code)
  }

  function data(code) {
    if (code === null) {
      return contentEnd(code)
    }

    if (markdownLineEnding(code)) {
      return effects.check(
        lookaheadConstruct,
        contentContinue,
        contentEnd
      )(code)
    }

    // Data.
    effects.consume(code)
    return data
  }

  function contentEnd(code) {
    effects.exit('chunkContent')
    effects.exit('content')
    return ok(code)
  }

  function contentContinue(code) {
    effects.consume(code)
    effects.exit('chunkContent')
    previous = previous.next = effects.enter('chunkContent', {
      contentType: 'content',
      previous: previous
    })

    return data
  }
}

function tokenizeLookaheadConstruct(effects, ok, nok) {
  var self = this

  return startLookahead

  function startLookahead(code) {
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return createSpace(effects, prefixed, 'linePrefix')
  }

  function prefixed(code) {
    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    if (prefixSize(self.events, 'linePrefix') < 4) {
      return effects.interrupt(self.parser.constructs.flow, nok, ok)(code)
    }

    return ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/definition.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/definition.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeDefinition

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier */ "./node_modules/micromark/dist/util/normalize-identifier.js")

var createDestination = __webpack_require__(/*! ./factory-destination */ "./node_modules/micromark/dist/tokenize/factory-destination.js")
var createLabel = __webpack_require__(/*! ./factory-label */ "./node_modules/micromark/dist/tokenize/factory-label.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var createWhitespace = __webpack_require__(/*! ./factory-whitespace */ "./node_modules/micromark/dist/tokenize/factory-whitespace.js")
var createTitle = __webpack_require__(/*! ./factory-title */ "./node_modules/micromark/dist/tokenize/factory-title.js")

function tokenizeDefinition(effects, ok, nok) {
  var self = this
  var destinationAfter = effects.attempt(
    {tokenize: tokenizeTitle, partial: true},
    createSpace(effects, after, 'whitespace'),
    createSpace(effects, after, 'whitespace')
  )

  var identifier

  return start

  function start(code) {
    effects.enter('definition')
    return createLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(code)
  }

  function labelAfter(code) {
    identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    )

    if (code === 58) {
      effects.enter('definitionMarker')
      effects.consume(code)
      effects.exit('definitionMarker')

      // Note: blank lines can’t exist in content.
      return createWhitespace(
        effects,
        createDestination(
          effects,
          destinationAfter,
          nok,
          'definitionDestination',
          'definitionDestinationLiteral',
          'definitionDestinationLiteralMarker',
          'definitionDestinationRaw',
          'definitionDestinationString'
        )
      )
    }

    return nok(code)
  }

  function after(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('definition')

      if (self.parser.defined.indexOf(identifier) < 0) {
        self.parser.defined.push(identifier)
      }

      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeTitle(effects, ok, nok) {
  return start

  function start(code) {
    return markdownLineEndingOrSpace(code)
      ? createWhitespace(effects, before)(code)
      : nok(code)
  }

  function before(code) {
    if (code === 34 || code === 39 || code === 40) {
      return createTitle(
        effects,
        createSpace(effects, after, 'whitespace'),
        nok,
        'definitionTitle',
        'definitionTitleMarker',
        'definitionTitleString'
      )(code)
    }

    return nok(code)
  }

  function after(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-destination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-destination.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createDestination

var asciiControl = __webpack_require__(/*! ../character/ascii-control */ "./node_modules/micromark/dist/character/ascii-control.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

// eslint-disable-next-line max-params
function createDestination(
  effects,
  ok,
  nok,
  type,
  literalType,
  literalMarkerType,
  rawType,
  stringType,
  max
) {
  var limit = max || Infinity
  var balance = 0

  return start

  function start(code) {
    if (code === 60) {
      effects.enter(type)
      effects.enter(literalType)
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      return destinationEnclosedBefore
    }

    if (asciiControl(code)) {
      return nok(code)
    }

    effects.enter(type)
    effects.enter(rawType)
    effects.enter(stringType)
    effects.enter('chunkString', {contentType: 'string'})
    return destinationRaw(code)
  }

  function destinationEnclosedBefore(code) {
    if (code === 62) {
      effects.enter(literalMarkerType)
      effects.consume(code)
      effects.exit(literalMarkerType)
      effects.exit(literalType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    effects.enter('chunkString', {contentType: 'string'})
    return destinationEnclosed(code)
  }

  function destinationEnclosed(code) {
    if (code === 62) {
      effects.exit('chunkString')
      effects.exit(stringType)
      return destinationEnclosedBefore(code)
    }

    if (code === null || code === 60 || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code)
    return code === 92 ? destinationEnclosedEscape : destinationEnclosed
  }

  function destinationEnclosedEscape(code) {
    if (code === 60 || code === 62 || code === 92) {
      effects.consume(code)
      return destinationEnclosed
    }

    return destinationEnclosed(code)
  }

  function destinationRaw(code) {
    if (code === 40) {
      if (++balance > limit) return nok(code)
      effects.consume(code)
      return destinationRaw
    }

    if (code === 41) {
      if (!balance--) {
        effects.exit('chunkString')
        effects.exit(stringType)
        effects.exit(rawType)
        effects.exit(type)
        return ok(code)
      }

      effects.consume(code)
      return destinationRaw
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      if (balance) return nok(code)
      effects.exit('chunkString')
      effects.exit(stringType)
      effects.exit(rawType)
      effects.exit(type)
      return ok(code)
    }

    if (asciiControl(code)) return nok(code)
    effects.consume(code)
    return code === 92 ? destinationRawEscape : destinationRaw
  }

  function destinationRawEscape(code) {
    if (code === 40 || code === 41 || code === 92) {
      effects.consume(code)
      return destinationRaw
    }

    return destinationRaw(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-label.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-label.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createLabel

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "./node_modules/micromark/dist/character/markdown-space.js")

// eslint-disable-next-line max-params
function createLabel(effects, ok, nok, type, markerType, stringType) {
  var self = this
  var size = 0
  var data

  return start

  function start(code) {
    effects.enter(type)
    effects.enter(markerType)
    effects.consume(code)
    effects.exit(markerType)
    effects.enter(stringType)
    return atBreak
  }

  function atBreak(code) {
    if (
      code === null ||
      code === 91 ||
      (code === 93 && !data) ||
      /* istanbul ignore next - footnotes. */
      (code === 94 &&
        !size &&
        '_hiddenFootnoteSupport' in self.parser.constructs) ||
      size > 999
    ) {
      return nok(code)
    }

    if (code === 93) {
      effects.exit(stringType)
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return atBreak
    }

    effects.enter('chunkString', {contentType: 'string'})
    return label(code)
  }

  function label(code) {
    if (
      code === null ||
      code === 91 ||
      code === 93 ||
      markdownLineEnding(code) ||
      size++ > 999
    ) {
      effects.exit('chunkString')
      return atBreak(code)
    }

    effects.consume(code)
    data = data || !markdownSpace(code)
    return code === 92 ? labelEscape : label
  }

  function labelEscape(code) {
    if (code === 91 || code === 92 || code === 93) {
      effects.consume(code)
      size++
      return label
    }

    return label(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-space.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-space.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createSpace

var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "./node_modules/micromark/dist/character/markdown-space.js")

function createSpace(effects, ok, type, max) {
  var limit = max ? max - 1 : Infinity
  var size

  return start

  function start(code) {
    if (markdownSpace(code)) {
      effects.enter(type)
      size = 0
      return prefix(code)
    }

    return ok(code)
  }

  function prefix(code) {
    if (markdownSpace(code) && size++ < limit) {
      effects.consume(code)
      return prefix
    }

    effects.exit(type)
    return ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-title.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-title.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createTitle

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

// eslint-disable-next-line max-params
function createTitle(effects, ok, nok, type, markerType, stringType) {
  var marker

  return start

  function start(code) {
    effects.enter(type)
    effects.enter(markerType)
    effects.consume(code)
    effects.exit(markerType)
    marker = code === 40 ? 41 : code
    return atFirstTitleBreak
  }

  function atFirstTitleBreak(code) {
    if (code === marker) {
      effects.enter(markerType)
      effects.consume(code)
      effects.exit(markerType)
      effects.exit(type)
      return ok
    }

    effects.enter(stringType)
    return atTitleBreak(code)
  }

  function atTitleBreak(code) {
    if (code === marker) {
      effects.exit(stringType)
      return atFirstTitleBreak(marker)
    }

    if (code === null) {
      return nok(code)
    }

    // Note: blank lines can’t exist in content.
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return createSpace(effects, atTitleBreak, 'linePrefix')
    }

    effects.enter('chunkString', {contentType: 'string'})
    return title(code)
  }

  function title(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit('chunkString')
      return atTitleBreak(code)
    }

    effects.consume(code)
    return code === 92 ? titleEscape : title
  }

  function titleEscape(code) {
    if (code === marker || code === 92) {
      effects.consume(code)
      return title
    }

    return title(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/factory-whitespace.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/factory-whitespace.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createWhitespace

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "./node_modules/micromark/dist/character/markdown-space.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function createWhitespace(effects, ok) {
  var seen
  return start

  function start(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      seen = true
      return start
    }

    if (markdownSpace(code)) {
      return createSpace(
        effects,
        start,
        seen ? 'linePrefix' : 'lineSuffix'
      )(code)
    }

    return ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/hard-break-escape.js":
/*!*******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/hard-break-escape.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeHardBreakEscape

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

function tokenizeHardBreakEscape(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('hardBreakEscape')
    effects.enter('escapeMarker')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (markdownLineEnding(code)) {
      effects.exit('escapeMarker')
      effects.exit('hardBreakEscape')
      return ok(code)
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/heading-atx.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/heading-atx.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeAtxHeading
exports.resolve = resolveAtxHeading

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "./node_modules/micromark/dist/character/markdown-space.js")

var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function resolveAtxHeading(events, context) {
  var contentEnd = events.length - 2
  var contentStart = 3
  var content
  var text

  // Prefix whitespace, part of the opening.
  if (events[contentStart][1].type === 'whitespace') {
    contentStart += 2
  }

  // Suffix whitespace, part of the closing.
  if (
    contentEnd - 2 > contentStart &&
    events[contentEnd][1].type === 'whitespace'
  ) {
    contentEnd -= 2
  }

  if (
    events[contentEnd][1].type === 'atxHeadingSequence' &&
    (contentStart === contentEnd - 1 ||
      (contentEnd - 4 > contentStart &&
        events[contentEnd - 2][1].type === 'whitespace'))
  ) {
    contentEnd -= contentStart + 1 === contentEnd ? 2 : 4
  }

  if (contentEnd > contentStart) {
    content = {
      type: 'atxHeadingText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end
    }

    text = {
      type: 'chunkText',
      start: events[contentStart][1].start,
      end: events[contentEnd][1].end,
      contentType: 'text'
    }

    chunkedSplice(events, contentStart, contentEnd - contentStart + 1, [
      ['enter', content, context],
      ['enter', text, context],
      ['exit', text, context],
      ['exit', content, context]
    ])
  }

  return events
}

function tokenizeAtxHeading(effects, ok, nok) {
  var self = this
  var size = 0

  return start

  function start(code) {
    effects.enter('atxHeading')
    effects.enter('atxHeadingSequence')
    return fenceOpenInside(code)
  }

  function fenceOpenInside(code) {
    if (code === 35 && size++ < 6) {
      effects.consume(code)
      return fenceOpenInside
    }

    if (code === null || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingSequence')
      return self.interrupt ? ok(code) : headingBreak(code)
    }

    return nok(code)
  }

  function headingBreak(code) {
    if (code === 35) {
      effects.enter('atxHeadingSequence')
      return sequence(code)
    }

    if (code === null || markdownLineEnding(code)) {
      effects.exit('atxHeading')
      return ok(code)
    }

    if (markdownSpace(code)) {
      return createSpace(effects, headingBreak, 'whitespace')(code)
    }

    effects.enter('atxHeadingText')
    return data(code)
  }

  function sequence(code) {
    if (code === 35) {
      effects.consume(code)
      return sequence
    }

    effects.exit('atxHeadingSequence')
    return headingBreak(code)
  }

  function data(code) {
    if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
      effects.exit('atxHeadingText')
      return headingBreak(code)
    }

    effects.consume(code)
    return data
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/html-flow.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/html-flow.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeHtml
exports.resolveTo = resolveToHtml
exports.concrete = true

var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "./node_modules/micromark/dist/character/markdown-space.js")

var fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ "./node_modules/micromark/dist/constant/from-char-code.js")
var basics = __webpack_require__(/*! ../constant/html-block-names */ "./node_modules/micromark/dist/constant/html-block-names.js")
var raws = __webpack_require__(/*! ../constant/html-raw-names */ "./node_modules/micromark/dist/constant/html-raw-names.js")

var blank = __webpack_require__(/*! ./partial-blank-line */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")

var nextBlank = {tokenize: tokenizeNextBlank, partial: true}

function resolveToHtml(events) {
  var index = events.length

  while (index--) {
    if (events[index][0] === 'enter' && events[index][1].type === 'htmlFlow') {
      break
    }
  }

  if (index > 1 && events[index - 2][1].type === 'linePrefix') {
    // Add the prefix start to the HTML token.
    events[index][1].start = events[index - 2][1].start
    // Add the prefix start to the HTML line token.
    events[index + 1][1].start = events[index - 2][1].start
    // Remove the line prefix.
    events.splice(index - 2, 2)
  }

  return events
}

function tokenizeHtml(effects, ok, nok) {
  var self = this
  var kind
  var startTag
  var buffer
  var index
  var marker

  return start

  function start(code) {
    effects.enter('htmlFlow')
    effects.enter('htmlFlowData')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code)
      return declarationStart
    }

    if (code === 47) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code)
      kind = 3
      // While we’re in an instruction instead of a declaration, we’re on a `?`
      // right now, so we do need to search for `>`, similar to declarations.
      return self.interrupt ? ok : continuationDeclarationInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      startTag = true
      return tagName
    }

    return nok(code)
  }

  function declarationStart(code) {
    if (code === 45) {
      effects.consume(code)
      kind = 2
      return commentOpenInside
    }

    if (code === 91) {
      effects.consume(code)
      kind = 5
      buffer = 'CDATA['
      index = 0
      return cdataOpenInside
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      kind = 4
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function commentOpenInside(code) {
    if (code === 45) {
      effects.consume(code)
      return self.interrupt ? ok : continuationDeclarationInside
    }

    return nok(code)
  }

  function cdataOpenInside(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length
        ? self.interrupt
          ? ok
          : continuation
        : cdataOpenInside
    }

    return nok(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      buffer = fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function tagName(code) {
    if (
      code === null ||
      code === 47 ||
      code === 62 ||
      markdownLineEndingOrSpace(code)
    ) {
      if (code !== 47 && startTag && raws.indexOf(buffer.toLowerCase()) > -1) {
        kind = 1
        return self.interrupt ? ok(code) : continuation(code)
      }

      if (basics.indexOf(buffer.toLowerCase()) > -1) {
        kind = 6

        if (code === 47) {
          effects.consume(code)
          return basicSelfClosing
        }

        return self.interrupt ? ok(code) : continuation(code)
      }

      kind = 7
      // Do not support complete HTML when interrupting.
      return self.interrupt
        ? nok(code)
        : startTag
        ? completeAttributeNameBefore(code)
        : completeClosingTagAfter(code)
    }

    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return tagName
    }

    return nok(code)
  }

  function basicSelfClosing(code) {
    if (code === 62) {
      effects.consume(code)
      return self.interrupt ? ok : continuation
    }

    return nok(code)
  }

  function completeClosingTagAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeClosingTagAfter
    }

    return completeEnd(code)
  }

  function completeAttributeNameBefore(code) {
    if (code === 47) {
      effects.consume(code)
      return completeEnd
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code)
      return completeAttributeName
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameBefore
    }

    return completeEnd(code)
  }

  function completeAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return completeAttributeName
    }

    return completeAttributeNameAfter(code)
  }

  function completeAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeNameAfter
    }

    return completeAttributeNameBefore(code)
  }

  function completeAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code)
      marker = code
      return completeAttributeValueQuoted
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAttributeValueBefore
    }

    marker = undefined
    return completeAttributeValueUnquoted(code)
  }

  function completeAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return completeAttributeValueQuotedAfter
    }

    if (code === null || markdownLineEnding(code)) {
      return nok(code)
    }

    effects.consume(code)
    return completeAttributeValueQuoted
  }

  function completeAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96 ||
      markdownLineEndingOrSpace(code)
    ) {
      return completeAttributeNameAfter(code)
    }

    effects.consume(code)
    return completeAttributeValueUnquoted
  }

  function completeAttributeValueQuotedAfter(code) {
    if (code === 47 || code === 62 || markdownSpace(code)) {
      return completeAttributeNameBefore(code)
    }

    return nok(code)
  }

  function completeEnd(code) {
    if (code === 62) {
      effects.consume(code)
      return completeAfter
    }

    return nok(code)
  }

  function completeAfter(code) {
    if (markdownSpace(code)) {
      effects.consume(code)
      return completeAfter
    }

    return code === null || markdownLineEnding(code)
      ? continuation(code)
      : nok(code)
  }

  function continuation(code) {
    if (code === 45 && kind === 2) {
      effects.consume(code)
      return continuationCommentInside
    }

    if (code === 60 && kind === 1) {
      effects.consume(code)
      return continuationRawTagOpen
    }

    if (code === 62 && kind === 4) {
      effects.consume(code)
      return continuationClose
    }

    if (code === 63 && kind === 3) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    if (code === 93 && kind === 5) {
      effects.consume(code)
      return continuationCharacterDataInside
    }

    if (markdownLineEnding(code) && (kind === 6 || kind === 7)) {
      return effects.check(
        nextBlank,
        continuationClose,
        continuationAtLineEnding
      )(code)
    }

    if (code === null || markdownLineEnding(code)) {
      return continuationAtLineEnding(code)
    }

    effects.consume(code)
    return continuation
  }

  function continuationAtLineEnding(code) {
    effects.exit('htmlFlowData')
    return htmlContinueStart(code)
  }

  function htmlContinueStart(code) {
    if (code === null) {
      return done(code)
    }

    if (markdownLineEnding(code)) {
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return htmlContinueStart
    }

    effects.enter('htmlFlowData')
    return continuation(code)
  }

  function continuationCommentInside(code) {
    if (code === 45) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationRawTagOpen(code) {
    if (code === 47) {
      effects.consume(code)
      buffer = ''
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationRawEndTag(code) {
    if (code === 62 && raws.indexOf(buffer.toLowerCase()) > -1) {
      effects.consume(code)
      return continuationClose
    }

    if (asciiAlpha(code) && buffer.length < 6) {
      effects.consume(code)
      buffer += fromCharCode(code)
      return continuationRawEndTag
    }

    return continuation(code)
  }

  function continuationCharacterDataInside(code) {
    if (code === 93) {
      effects.consume(code)
      return continuationDeclarationInside
    }

    return continuation(code)
  }

  function continuationDeclarationInside(code) {
    if (code === 62) {
      effects.consume(code)
      return continuationClose
    }

    return continuation(code)
  }

  function continuationClose(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('htmlFlowData')
      return done(code)
    }

    effects.consume(code)
    return continuationClose
  }

  function done(code) {
    effects.exit('htmlFlow')
    return ok(code)
  }
}

function tokenizeNextBlank(effects, ok, nok) {
  return start

  function start(code) {
    effects.exit('htmlFlowData')
    effects.enter('lineEndingBlank')
    effects.consume(code)
    effects.exit('lineEndingBlank')
    return effects.attempt(blank, ok, nok)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/html-text.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/html-text.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeHtml

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "./node_modules/micromark/dist/character/markdown-space.js")
var asciiAlpha = __webpack_require__(/*! ../character/ascii-alpha */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! ../character/ascii-alphanumeric */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeHtml(effects, ok, nok) {
  var marker
  var buffer
  var index
  var returnState

  return start

  function start(code) {
    effects.enter('htmlText')
    effects.enter('htmlTextData')
    effects.consume(code)
    return open
  }

  function open(code) {
    if (code === 33) {
      effects.consume(code)
      return declarationOpen
    }

    if (code === 47) {
      effects.consume(code)
      return tagCloseStart
    }

    if (code === 63) {
      effects.consume(code)
      return instruction
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagOpen
    }

    return nok(code)
  }

  function declarationOpen(code) {
    if (code === 45) {
      effects.consume(code)
      return commentOpen
    }

    if (code === 91) {
      effects.consume(code)
      buffer = 'CDATA['
      index = 0
      return cdataOpen
    }

    if (asciiAlpha(code)) {
      effects.consume(code)
      return declaration
    }

    return nok(code)
  }

  function commentOpen(code) {
    if (code === 45) {
      effects.consume(code)
      return commentStart
    }

    return nok(code)
  }

  function commentStart(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code)
      return commentStartDash
    }

    return comment(code)
  }

  function commentStartDash(code) {
    if (code === null || code === 62) {
      return nok(code)
    }

    return comment(code)
  }

  function comment(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 45) {
      effects.consume(code)
      return commentClose
    }

    if (markdownLineEnding(code)) {
      returnState = comment
      return atLineEnding(code)
    }

    effects.consume(code)
    return comment
  }

  function commentClose(code) {
    if (code === 45) {
      effects.consume(code)
      return end
    }

    return comment(code)
  }

  function cdataOpen(code) {
    if (code === buffer.charCodeAt(index++)) {
      effects.consume(code)
      return index === buffer.length ? cdata : cdataOpen
    }

    return nok(code)
  }

  function cdata(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 93) {
      effects.consume(code)
      return cdataClose
    }

    effects.consume(code)
    return cdata
  }

  function cdataClose(code) {
    if (code === 93) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  function cdataEnd(code) {
    if (code === 62) {
      return end(code)
    }

    if (code === 93) {
      effects.consume(code)
      return cdataEnd
    }

    return cdata(code)
  }

  function declaration(code) {
    if (code === null || code === 62) {
      return end(code)
    }

    if (markdownLineEnding(code)) {
      returnState = declaration
      return atLineEnding(code)
    }

    effects.consume(code)
    return declaration
  }

  function instruction(code) {
    if (code === null) {
      return nok(code)
    }

    if (code === 63) {
      effects.consume(code)
      return instructionClose
    }

    if (markdownLineEnding(code)) {
      returnState = instruction
      return atLineEnding(code)
    }

    effects.consume(code)
    return instruction
  }

  function instructionClose(code) {
    return code === 62 ? end(code) : instruction(code)
  }

  function tagCloseStart(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return tagClose
    }

    return nok(code)
  }

  function tagClose(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagClose
    }

    return tagCloseBetween(code)
  }

  function tagCloseBetween(code) {
    if (markdownLineEnding(code)) {
      returnState = tagCloseBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagCloseBetween
    }

    return end(code)
  }

  function tagOpen(code) {
    if (code === 45 || asciiAlphanumeric(code)) {
      effects.consume(code)
      return tagOpen
    }

    if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenBetween(code) {
    if (code === 47) {
      effects.consume(code)
      return end
    }

    if (code === 58 || code === 95 || asciiAlpha(code)) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenBetween
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenBetween
    }

    return end(code)
  }

  function tagOpenAttributeName(code) {
    if (
      code === 45 ||
      code === 46 ||
      code === 58 ||
      code === 95 ||
      asciiAlphanumeric(code)
    ) {
      effects.consume(code)
      return tagOpenAttributeName
    }

    return tagOpenAttributeNameAfter(code)
  }

  function tagOpenAttributeNameAfter(code) {
    if (code === 61) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeNameAfter
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeNameAfter
    }

    return tagOpenBetween(code)
  }

  function tagOpenAttributeValueBefore(code) {
    if (
      code === null ||
      code === 60 ||
      code === 61 ||
      code === 62 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 34 || code === 39) {
      effects.consume(code)
      marker = code
      return tagOpenAttributeValueQuoted
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueBefore
      return atLineEnding(code)
    }

    if (markdownSpace(code)) {
      effects.consume(code)
      return tagOpenAttributeValueBefore
    }

    effects.consume(code)
    marker = undefined
    return tagOpenAttributeValueUnquoted
  }

  function tagOpenAttributeValueQuoted(code) {
    if (code === marker) {
      effects.consume(code)
      return tagOpenAttributeValueQuotedAfter
    }

    if (code === null) {
      return nok(code)
    }

    if (markdownLineEnding(code)) {
      returnState = tagOpenAttributeValueQuoted
      return atLineEnding(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueQuoted
  }

  function tagOpenAttributeValueQuotedAfter(code) {
    if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    return nok(code)
  }

  function tagOpenAttributeValueUnquoted(code) {
    if (
      code === null ||
      code === 34 ||
      code === 39 ||
      code === 60 ||
      code === 61 ||
      code === 96
    ) {
      return nok(code)
    }

    if (code === 62 || markdownLineEndingOrSpace(code)) {
      return tagOpenBetween(code)
    }

    effects.consume(code)
    return tagOpenAttributeValueUnquoted
  }

  // We can’t have blank lines in content, so no need to worry about empty
  // tokens.
  function atLineEnding(code) {
    effects.exit('htmlTextData')
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return createSpace(effects, afterPrefix, 'linePrefix', 4)
  }

  function afterPrefix(code) {
    effects.enter('htmlTextData')
    return returnState(code)
  }

  function end(code) {
    if (code === 62) {
      effects.consume(code)
      effects.exit('htmlTextData')
      effects.exit('htmlText')
      return ok
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-end.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-end.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeLabelEnd
exports.resolveTo = resolveToLabelEnd
exports.resolveAll = resolveAllLabelEnd

var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")

var normalizeIdentifier = __webpack_require__(/*! ../util/normalize-identifier */ "./node_modules/micromark/dist/util/normalize-identifier.js")
var chunkedSplice = __webpack_require__(/*! ../util/chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")
var resolveAll = __webpack_require__(/*! ../util/resolve-all */ "./node_modules/micromark/dist/util/resolve-all.js")
var shallow = __webpack_require__(/*! ../util/shallow */ "./node_modules/micromark/dist/util/shallow.js")
var createDestination = __webpack_require__(/*! ./factory-destination */ "./node_modules/micromark/dist/tokenize/factory-destination.js")
var createLabel = __webpack_require__(/*! ./factory-label */ "./node_modules/micromark/dist/tokenize/factory-label.js")
var createWhitespace = __webpack_require__(/*! ./factory-whitespace */ "./node_modules/micromark/dist/tokenize/factory-whitespace.js")
var createTitle = __webpack_require__(/*! ./factory-title */ "./node_modules/micromark/dist/tokenize/factory-title.js")

var resource = {tokenize: tokenizeResource}
var fullReference = {tokenize: tokenizeFullReference}
var collapsedReference = {tokenize: tokenizeCollapsedReference}

function resolveAllLabelEnd(events) {
  var index = -1
  var token

  while (++index < events.length) {
    token = events[index][1]

    if (
      !token._used &&
      (token.type === 'labelImage' ||
        token.type === 'labelLink' ||
        token.type === 'labelEnd')
    ) {
      // Remove the marker.
      events.splice(index + 1, token.type === 'labelImage' ? 4 : 2)
      token.type = 'data'
      index++
    }
  }

  return events
}

function resolveToLabelEnd(events, context) {
  var index = events.length
  var offset = 0
  var group
  var label
  var text
  var token
  var open
  var close
  var media

  // Find an opening.
  while (index--) {
    token = events[index][1]

    if (open) {
      // If we see another link, or inactive link label, we’ve been here before.
      if (
        token.type === 'link' ||
        (token.type === 'labelLink' && token._inactive)
      ) {
        break
      }

      // Mark other link openings as inactive, as we can’t have links in
      // links.
      if (events[index][0] === 'enter' && token.type === 'labelLink') {
        token._inactive = true
      }
    } else if (close) {
      if (
        events[index][0] === 'enter' &&
        (token.type === 'labelImage' || token.type === 'labelLink') &&
        !token._balanced
      ) {
        open = index

        if (token.type !== 'labelLink') {
          offset = 2
          break
        }
      }
    } else if (token.type === 'labelEnd') {
      close = index
    }
  }

  group = {
    type: events[open][1].type === 'labelLink' ? 'link' : 'image',
    start: shallow(events[open][1].start),
    end: shallow(events[events.length - 1][1].end)
  }

  label = {
    type: 'label',
    start: shallow(events[open][1].start),
    end: shallow(events[close][1].end)
  }

  text = {
    type: 'labelText',
    start: shallow(events[open + offset + 2][1].end),
    end: shallow(events[close - 2][1].start)
  }

  media = [
    ['enter', group, context],
    ['enter', label, context]
  ]

  // Opening marker.
  chunkedSplice(
    media,
    media.length,
    0,
    events.slice(open + 1, open + offset + 3)
  )

  // Text open.
  chunkedSplice(media, media.length, 0, [['enter', text, context]])

  // Between.
  chunkedSplice(
    media,
    media.length,
    0,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  )

  // Text close, marker close, label close.
  chunkedSplice(media, media.length, 0, [
    ['exit', text, context],
    events[close - 2],
    events[close - 1],
    ['exit', label, context]
  ])

  // Reference, resource, or so.
  chunkedSplice(media, media.length, 0, events.slice(close + 1))

  // Media close.
  chunkedSplice(media, media.length, 0, [['exit', group, context]])

  chunkedSplice(events, open, events.length, media)

  return events
}

function tokenizeLabelEnd(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var labelStart
  var defined

  // Find an opening.
  while (index--) {
    if (
      (self.events[index][1].type === 'labelImage' ||
        self.events[index][1].type === 'labelLink') &&
      !self.events[index][1]._balanced
    ) {
      labelStart = self.events[index][1]
      break
    }
  }

  return start

  function start(code) {
    if (!labelStart) {
      return nok(code)
    }

    // It’s a balanced bracket, but contains a link.
    if (labelStart._inactive) return balanced(code)
    defined =
      self.parser.defined.indexOf(
        normalizeIdentifier(
          self.sliceSerialize({start: labelStart.end, end: self.now()})
        )
      ) > -1
    effects.enter('labelEnd')
    effects.enter('labelMarker')
    effects.consume(code)
    effects.exit('labelMarker')
    effects.exit('labelEnd')
    return afterLabelEnd
  }

  function afterLabelEnd(code) {
    // Resource: `[asd](fgh)`.
    if (code === 40) {
      return effects.attempt(resource, ok, defined ? ok : balanced)(code)
    }

    // Collapsed (`[asd][]`) or full (`[asd][fgh]`) reference?
    if (code === 91) {
      return effects.attempt(
        fullReference,
        ok,
        defined ? effects.attempt(collapsedReference, ok, balanced) : balanced
      )(code)
    }

    // Shortcut reference: `[asd]`?
    return defined ? ok(code) : balanced(code)
  }

  function balanced(code) {
    labelStart._balanced = true
    return nok(code)
  }
}

function tokenizeResource(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('resource')
    effects.enter('resourceMarker')
    effects.consume(code)
    effects.exit('resourceMarker')
    return createWhitespace(effects, open)
  }

  function open(code) {
    if (code === 41) {
      return end(code)
    }

    return createDestination(
      effects,
      destinationAfter,
      nok,
      'resourceDestination',
      'resourceDestinationLiteral',
      'resourceDestinationLiteralMarker',
      'resourceDestinationRaw',
      'resourceDestinationString',
      3
    )(code)
  }

  function destinationAfter(code) {
    return markdownLineEndingOrSpace(code)
      ? createWhitespace(effects, between)(code)
      : end(code)
  }

  function between(code) {
    if (code === 34 || code === 39 || code === 40) {
      return createTitle(
        effects,
        createWhitespace(effects, end),
        nok,
        'resourceTitle',
        'resourceTitleMarker',
        'resourceTitleString'
      )(code)
    }

    return end(code)
  }

  function end(code) {
    if (code === 41) {
      effects.enter('resourceMarker')
      effects.consume(code)
      effects.exit('resourceMarker')
      effects.exit('resource')
      return ok
    }

    return nok(code)
  }
}

function tokenizeFullReference(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    return createLabel.call(
      self,
      effects,
      afterLabel,
      nok,
      'reference',
      'referenceMarker',
      'referenceString'
    )(code)
  }

  function afterLabel(code) {
    return self.parser.defined.indexOf(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    ) < 0
      ? nok(code)
      : ok(code)
  }
}

function tokenizeCollapsedReference(effects, ok, nok) {
  return start

  function start(code) {
    effects.enter('reference')
    effects.enter('referenceMarker')
    effects.consume(code)
    effects.exit('referenceMarker')
    return open
  }

  function open(code) {
    if (code === 93) {
      effects.enter('referenceMarker')
      effects.consume(code)
      effects.exit('referenceMarker')
      effects.exit('reference')
      return ok
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-start-image.js":
/*!*******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-start-image.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizelabelImage
exports.resolveAll = __webpack_require__(/*! ./label-end */ "./node_modules/micromark/dist/tokenize/label-end.js").resolveAll

function tokenizelabelImage(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    effects.enter('labelImage')
    effects.enter('labelImageMarker')
    effects.consume(code)
    effects.exit('labelImageMarker')
    return open
  }

  function open(code) {
    if (code === 91) {
      effects.enter('labelMarker')
      effects.consume(code)
      effects.exit('labelMarker')
      effects.exit('labelImage')
      return after
    }

    return nok(code)
  }

  function after(code) {
    /* istanbul ignore next - footnotes. */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/label-start-link.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/label-start-link.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizelabelLink
exports.resolveAll = __webpack_require__(/*! ./label-end */ "./node_modules/micromark/dist/tokenize/label-end.js").resolveAll

function tokenizelabelLink(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    effects.enter('labelLink')
    effects.enter('labelMarker')
    effects.consume(code)
    effects.exit('labelMarker')
    effects.exit('labelLink')
    return after
  }

  function after(code) {
    /* istanbul ignore next - footnotes. */
    return code === 94 && '_hiddenFootnoteSupport' in self.parser.constructs
      ? nok(code)
      : ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/line-ending.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/line-ending.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeWhitespace

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeWhitespace(effects, ok) {
  return start

  function start(code) {
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    return createSpace(effects, ok, 'linePrefix')
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/list.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/list.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeListStart
exports.continuation = {tokenize: tokenizeListContinuation}
exports.exit = tokenizeListEnd

var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "./node_modules/micromark/dist/character/markdown-space.js")
var asciiDigit = __webpack_require__(/*! ../character/ascii-digit */ "./node_modules/micromark/dist/character/ascii-digit.js")

var prefixSize = __webpack_require__(/*! ../util/prefix-size */ "./node_modules/micromark/dist/util/prefix-size.js")
var sizeChunks = __webpack_require__(/*! ../util/size-chunks */ "./node_modules/micromark/dist/util/size-chunks.js")
var thematicBreak = __webpack_require__(/*! ./thematic-break */ "./node_modules/micromark/dist/tokenize/thematic-break.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var blank = __webpack_require__(/*! ./partial-blank-line */ "./node_modules/micromark/dist/tokenize/partial-blank-line.js")

function tokenizeListStart(effects, ok, nok) {
  var self = this
  var initialSize = prefixSize(self.events, 'linePrefix')
  var valueSize

  return start

  function start(code) {
    if (
      (code === 42 || code === 43 || code === 45) &&
      (!self.containerState.marker || code === self.containerState.marker)
    ) {
      return code === 42 || code === 45
        ? effects.check(thematicBreak, nok, unordered)(code)
        : unordered(code)
    }

    if (
      asciiDigit(code) &&
      (!self.containerState.type || self.containerState.type === 'listOrdered')
    ) {
      return ordered(code)
    }

    return nok(code)
  }

  function unordered(code) {
    if (!self.containerState.type) {
      self.containerState.type = 'listUnordered'
      effects.enter(self.containerState.type, {_container: true})
    }

    effects.enter('listItemPrefix')
    return atMarker(code)
  }

  function ordered(code) {
    if (self.containerState.type || !self.interrupt || code === 49) {
      if (!self.containerState.type) {
        self.containerState.type = 'listOrdered'
        effects.enter(self.containerState.type, {_container: true})
      }

      effects.enter('listItemPrefix')
      effects.enter('listItemValue')
      effects.consume(code)
      valueSize = 1
      return self.interrupt ? afterValue : inside
    }

    return nok(code)
  }

  function inside(code) {
    if (asciiDigit(code) && ++valueSize < 10) {
      effects.consume(code)
      return inside
    }

    return afterValue(code)
  }

  function afterValue(code) {
    effects.exit('listItemValue')

    return code === 41 || code === 46 ? atMarker(code) : nok(code)
  }

  function atMarker(code) {
    self.containerState.marker = self.containerState.marker || code

    if (code === self.containerState.marker) {
      effects.enter('listItemMarker')
      effects.consume(code)
      effects.exit('listItemMarker')
      return effects.check(
        blank,
        // Can’t be empty when interrupting.
        self.interrupt ? nok : onBlank,
        effects.attempt(
          {tokenize: tokenizeListItemPrefixWhitespace, partial: true},
          endOfPrefix,
          otherPrefix
        )
      )
    }

    return nok(code)
  }

  function onBlank(code) {
    self.containerState.initialBlankLine = true
    initialSize++
    return endOfPrefix(code)
  }

  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter('listItemPrefixWhitespace')
      effects.consume(code)
      effects.exit('listItemPrefixWhitespace')
      return endOfPrefix
    }

    return nok(code)
  }

  function endOfPrefix(code) {
    self.containerState.size =
      initialSize + sizeChunks(self.sliceStream(effects.exit('listItemPrefix')))
    return ok(code)
  }
}

function tokenizeListContinuation(effects, ok, nok) {
  var self = this

  self.containerState._closeFlow = undefined

  return effects.check(blank, onBlank, notBlank)

  function onBlank(code) {
    self.containerState.furtherBlankLines =
      self.containerState.furtherBlankLines ||
      self.containerState.initialBlankLine
    return ok(code)
  }

  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
      return notInCurrentItem(code)
    }

    self.containerState.furtherBlankLines = self.containerState.initialBlankLine = undefined
    return effects.attempt(
      {tokenize: tokenizeIndent, partial: true},
      ok,
      notInCurrentItem
    )(code)
  }

  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true
    // As we’re closing flow, we’re no longer interrupting
    self.interrupt = undefined
    return createSpace(
      effects,
      effects.attempt(exports, ok, nok),
      'linePrefix',
      4
    )(code)
  }
}

function tokenizeIndent(effects, ok, nok) {
  var self = this

  return createSpace(
    effects,
    afterPrefix,
    'listItemIndent',

    self.containerState.size + 1
  )

  function afterPrefix(code) {
    return prefixSize(self.events, 'listItemIndent') ===
      self.containerState.size
      ? ok(code)
      : nok(code)
  }
}

function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type)
}

function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  var self = this

  return createSpace(
    effects,
    afterPrefix,
    'listItemPrefixWhitespace',

    4 + 1
  )

  function afterPrefix(code) {
    return markdownSpace(code) ||
      !prefixSize(self.events, 'listItemPrefixWhitespace')
      ? nok(code)
      : ok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/partial-blank-line.js":
/*!********************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/partial-blank-line.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeBlankLine
exports.partial = true

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeBlankLine(effects, ok, nok) {
  return createSpace(effects, afterWhitespace, 'linePrefix')

  function afterWhitespace(code) {
    return code === null || markdownLineEnding(code) ? ok(code) : nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/setext-underline.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/setext-underline.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeSetextUnderline
exports.resolveTo = resolveToSetextUnderline

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")

var shallow = __webpack_require__(/*! ../util/shallow */ "./node_modules/micromark/dist/util/shallow.js")
var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function resolveToSetextUnderline(events, context) {
  var index = events.length
  var content
  var text
  var definition
  var heading

  // Find the opening of the content.
  // It’ll always exist: we don’t tokenize if it isn’t there.
  while (index--) {
    if (events[index][0] === 'enter') {
      if (events[index][1].type === 'content') {
        content = index
        break
      }

      if (events[index][1].type === 'paragraph') {
        text = index
      }
    }
    // Exit
    else {
      if (events[index][1].type === 'content') {
        // Remove the content end (if needed we’ll add it later)
        events.splice(index, 1)
      }

      if (!definition && events[index][1].type === 'definition') {
        definition = index
      }
    }
  }

  heading = {
    type: 'setextHeading',
    start: shallow(events[text][1].start),
    end: shallow(events[events.length - 1][1].end)
  }

  // Change the paragraph to setext heading text.
  events[text][1].type = 'setextHeadingText'

  // If we have definitions in the content, we’ll keep on having content,
  // but we need move it.
  if (definition) {
    events.splice(text, 0, ['enter', heading, context])
    events.splice(definition + 1, 0, ['exit', events[content][1], context])
    events[content][1].end = shallow(events[definition][1].end)
  } else {
    events[content][1] = heading
  }

  // Add the heading exit at the end.
  events.push(['exit', heading, context])

  return events
}

function tokenizeSetextUnderline(effects, ok, nok) {
  var self = this
  var index = self.events.length
  var marker
  var paragraph

  // Find an opening.
  while (index--) {
    // Skip enter/exit of line ending, line prefix, and content.
    // We can now either have a definition or a paragraph.
    if (
      self.events[index][1].type !== 'lineEnding' &&
      self.events[index][1].type !== 'linePrefix' &&
      self.events[index][1].type !== 'content'
    ) {
      paragraph = self.events[index][1].type === 'paragraph'
      break
    }
  }

  return start

  function start(code) {
    if (!self.lazy && (self.interrupt || paragraph)) {
      effects.enter('setextHeadingLine')
      effects.enter('setextHeadingLineSequence')
      marker = code
      return closingSequence(code)
    }

    return nok(code)
  }

  function closingSequence(code) {
    if (code === marker) {
      effects.consume(code)
      return closingSequence
    }

    effects.exit('setextHeadingLineSequence')
    return createSpace(effects, closingSequenceEnd, 'lineSuffix')(code)
  }

  function closingSequenceEnd(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('setextHeadingLine')
      return ok(code)
    }

    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/tokenize/thematic-break.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/tokenize/thematic-break.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.tokenize = tokenizeThematicBreak

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var markdownSpace = __webpack_require__(/*! ../character/markdown-space */ "./node_modules/micromark/dist/character/markdown-space.js")

var createSpace = __webpack_require__(/*! ./factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

function tokenizeThematicBreak(effects, ok, nok) {
  var size = 0
  var marker

  return start

  function start(code) {
    effects.enter('thematicBreak')
    marker = code
    return atBreak(code)
  }

  function atBreak(code) {
    if (code === marker) {
      effects.enter('thematicBreakSequence')
      return sequence(code)
    }

    if (markdownSpace(code)) {
      return createSpace(effects, atBreak, 'whitespace')(code)
    }

    if (size < 3 || (code !== null && !markdownLineEnding(code))) {
      return nok(code)
    }

    effects.exit('thematicBreak')
    return ok(code)
  }

  function sequence(code) {
    if (code === marker) {
      effects.consume(code)
      size++
      return sequence
    }

    effects.exit('thematicBreakSequence')
    return atBreak(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/chunked-splice.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark/dist/util/chunked-splice.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = chunkedSplice

var v8MaxSafeChunkSize = 10000

// `Array#splice` takes all items to be inserted as individual argument which
// causes a stack overflow in V8 when trying to insert 100k items for instance.
function chunkedSplice(list, start, remove, items) {
  var end = list.length
  var chunkStart = 0
  var result
  var parameters

  // Make start between zero and `end` (included).
  if (start < 0) {
    start = -start > end ? 0 : end + start
  } else {
    start = start > end ? end : start
  }

  remove = remove > 0 ? remove : 0

  // No need to chunk the items if there’s only a couple (10k) items.
  if (items.length < v8MaxSafeChunkSize) {
    parameters = Array.from(items)
    parameters.unshift(start, remove)
    return [].splice.apply(list, parameters)
  }

  // Delete `remove` items starting from `start`
  result = [].splice.apply(list, [start, remove])

  // Insert the items in chunks to not cause stack overflows.
  while (chunkStart < items.length) {
    parameters = items.slice(chunkStart, chunkStart + v8MaxSafeChunkSize)
    parameters.unshift(start, 0)
    ;[].splice.apply(list, parameters)

    chunkStart += v8MaxSafeChunkSize
    start += v8MaxSafeChunkSize
  }

  return result
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/classify-character.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/util/classify-character.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = classifyCharacter

var markdownLineEndingOrSpace = __webpack_require__(/*! ../character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var unicodePunctuation = __webpack_require__(/*! ../character/unicode-punctuation */ "./node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! ../character/unicode-whitespace */ "./node_modules/micromark/dist/character/unicode-whitespace.js")

// Classify whether a character is unicode whitespace, unicode punctuation, or
// anything else.
// Used for attention (emphasis, strong), whose sequences can open or close
// based on the class of surrounding characters.
function classifyCharacter(code) {
  if (
    code === null ||
    markdownLineEndingOrSpace(code) ||
    unicodeWhitespace(code)
  ) {
    return 1
  }

  if (unicodePunctuation(code)) {
    return 2
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/combine-extensions.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark/dist/util/combine-extensions.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = combineExtensions

var own = __webpack_require__(/*! ../constant/has-own-property */ "./node_modules/micromark/dist/constant/has-own-property.js")
var miniflat = __webpack_require__(/*! ./miniflat */ "./node_modules/micromark/dist/util/miniflat.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")

// Combine several syntax extensions into one.
function combineExtensions(extensions) {
  var all = {}
  var index = -1

  while (++index < extensions.length) {
    extension(all, extensions[index])
  }

  return all
}

function extension(all, extension) {
  var hook
  var left
  var right
  var code

  for (hook in extension) {
    left = own.call(all, hook) ? all[hook] : (all[hook] = {})
    right = extension[hook]

    for (code in right) {
      left[code] = constructs(
        miniflat(right[code]),
        own.call(left, code) ? left[code] : []
      )
    }
  }
}

function constructs(list, existing) {
  var index = -1
  var before = []

  while (++index < list.length) {
    ;(list[index].add === 'after' ? existing : before).push(list[index])
  }

  chunkedSplice(existing, 0, 0, before)
  return existing
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/create-tokenizer.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/util/create-tokenizer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = createTokenizer

var assign = __webpack_require__(/*! ../constant/assign */ "./node_modules/micromark/dist/constant/assign.js")

var markdownLineEnding = __webpack_require__(/*! ../character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var chunkedSplice = __webpack_require__(/*! ./chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")
var shallow = __webpack_require__(/*! ./shallow */ "./node_modules/micromark/dist/util/shallow.js")
var serializeChunks = __webpack_require__(/*! ./serialize-chunks */ "./node_modules/micromark/dist/util/serialize-chunks.js")
var sliceChunks = __webpack_require__(/*! ./slice-chunks */ "./node_modules/micromark/dist/util/slice-chunks.js")
var resolveAll = __webpack_require__(/*! ./resolve-all */ "./node_modules/micromark/dist/util/resolve-all.js")
var miniflat = __webpack_require__(/*! ./miniflat */ "./node_modules/micromark/dist/util/miniflat.js")

// Create a tokenizer.
// Tokenizers deal with one type of data (e.g., containers, flow, text).
// The parser is the object dealing with it all.
// `initialize` works like other constructs, except that only its `tokenize`
// function is used, in which case it doesn’t receive an `ok` or `nok`.
// `from` can be given to set the point before the first character, although
// when further lines are indented, they must be set with `defineSkip`.
function createTokenizer(parser, initialize, from) {
  var point = from ? shallow(from) : {line: 1, column: 1, offset: 0}
  var columnStart = {}
  var resolveAllConstructs = []
  var chunks = []
  var stack = []
  var consumed = true

  // Tools used for tokenizing.
  var effects = {
    consume: consume,
    enter: enter,
    exit: exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {interrupt: true}),
    lazy: constructFactory(onsuccessfulcheck, {lazy: true})
  }

  // State and tools for resolving and serializing.
  var context = {
    previous: null,
    events: [],
    parser: parser,
    sliceStream: sliceStream,
    sliceSerialize: sliceSerialize,
    now: now,
    defineSkip: skip,
    write: write
  }

  // The state function.
  var state = initialize.tokenize.call(context, effects)

  // Track which character we expect to be consumed, to catch bugs.
  var expectedCode

  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize)
  }

  // Store where we are in the input stream.
  point._index = 0
  point._bufferIndex = -1

  return context

  function write(slice) {
    chunkedSplice(chunks, chunks.length, 0, slice)

    main()

    // Exit if we’re not done, resolve might change stuff.
    if (chunks[chunks.length - 1] !== null) {
      return []
    }

    addResult(initialize, 0)

    // Otherwise, resolve, and exit.
    context.events = resolveAll(resolveAllConstructs, context.events, context)

    return context.events
  }

  //
  // Tools.
  //

  function sliceSerialize(token) {
    return serializeChunks(sliceStream(token))
  }

  function sliceStream(token) {
    return sliceChunks(chunks, token)
  }

  function now() {
    return shallow(point)
  }

  function skip(value) {
    columnStart[value.line] = value.column
    accountForPotentialSkip()
  }

  //
  // State management.
  //

  // Main loop (note that `_index` and `_bufferIndex` in `point` are modified by
  // `consume`).
  // Here is where we walk through the chunks, which either include strings of
  // several characters, or numerical character codes.
  // The reason to do this in a loop instead of a call is so the stack can
  // drain.
  function main() {
    var chunkIndex
    var chunk

    while (point._index < chunks.length) {
      chunk = chunks[point._index]

      // If we’re in a buffer chunk, loop through it.
      if (typeof chunk === 'string') {
        chunkIndex = point._index

        if (point._bufferIndex < 0) {
          point._bufferIndex = 0
        }

        while (
          point._index === chunkIndex &&
          point._bufferIndex < chunk.length
        ) {
          go(chunk.charCodeAt(point._bufferIndex))
        }
      } else {
        go(chunk)
      }
    }
  }

  // Deal with one code.
  function go(code) {
    consumed = undefined

    expectedCode = code
    state = state(code)
  }

  // Move a character forward.
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++
      point.column = 1
      point.offset += code === -3 ? 2 : 1
      accountForPotentialSkip()
    } else if (code !== -1) {
      point.column++
      point.offset++
    }

    // Not in a string chunk.
    if (point._bufferIndex < 0) {
      point._index++
    } else {
      point._bufferIndex++

      // At end of string chunk.
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1
        point._index++
      }
    }

    // Expose the previous character.
    context.previous = code

    // Mark as consumed.
    consumed = true
  }

  // Start a token.
  function enter(type, fields) {
    var token = fields || {}
    token.type = type
    token.start = now()

    context.events.push(['enter', token, context])

    stack.push(token)

    return token
  }

  // Stop a token.
  function exit(type) {
    var token = stack.pop()
    token.end = now()

    context.events.push(['exit', token, context])

    return token
  }

  // Use results.
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from)
  }

  // Discard results.
  function onsuccessfulcheck(construct, info) {
    info.restore()
  }

  // Factory to attempt/check/interrupt.
  function constructFactory(onreturn, fields) {
    return hook

    // Handle either an object mapping codes to constructs, a list of
    // constructs, or a single construct.
    function hook(constructs, returnState, bogusState) {
      var listOfConstructs
      var constructIndex
      var currentConstruct
      var info

      return constructs.tokenize || 'length' in constructs
        ? handleListOfConstructs(miniflat(constructs))
        : handleMapOfConstructs

      function handleMapOfConstructs(code) {
        if (code in constructs || null in constructs) {
          return handleListOfConstructs(
            /* istanbul ignore next - `null` is used by some extensions */
            constructs.null
              ? miniflat(constructs[code]).concat(miniflat(constructs.null))
              : constructs[code]
          )(code)
        }

        return bogusState(code)
      }

      function handleListOfConstructs(list) {
        listOfConstructs = list
        constructIndex = 0
        return handleConstruct(list[constructIndex])
      }

      function handleConstruct(construct) {
        return start

        function start(code) {
          // To do: not nede to store if there is no bogus state, probably?
          // Currently doesn’t work because `inspect` in document does a check
          // w/o a bogus, which doesn’t make sense. But it does seem to help perf
          // by not storing.
          info = store()
          currentConstruct = construct

          if (!construct.partial) {
            context.currentConstruct = construct
          }

          return construct.tokenize.call(
            fields ? assign({}, context, fields) : context,
            effects,
            ok,
            nok
          )(code)
        }
      }

      function ok(code) {
        consumed = true
        onreturn(currentConstruct, info)
        return returnState
      }

      function nok(code) {
        consumed = true
        info.restore()

        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex])
        }

        return bogusState
      }
    }
  }

  function addResult(construct, from) {
    if (construct.resolveAll && resolveAllConstructs.indexOf(construct) < 0) {
      resolveAllConstructs.push(construct)
    }

    if (construct.resolve) {
      chunkedSplice(
        context.events,
        from,
        context.events.length - from,
        construct.resolve(context.events.slice(from), context)
      )
    }

    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context)
    }
  }

  function store() {
    var startPoint = now()
    var startPrevious = context.previous
    var startCurrentConstruct = context.currentConstruct
    var startEventsIndex = context.events.length
    var startStack = Array.from(stack)

    return {restore: restore, from: startEventsIndex}

    function restore() {
      point = startPoint
      context.previous = startPrevious
      context.currentConstruct = startCurrentConstruct
      context.events.length = startEventsIndex
      stack = startStack
      accountForPotentialSkip()
    }
  }

  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line]
      point.offset += columnStart[point.line] - 1
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/miniflat.js":
/*!******************************************************!*\
  !*** ./node_modules/micromark/dist/util/miniflat.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = miniflat

function miniflat(value) {
  return value === null || value === undefined
    ? []
    : 'length' in value
    ? value
    : [value]
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/move-point.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark/dist/util/move-point.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = movePoint

// Note! `move` only works inside lines! It’s not possible to move past other
// chunks (replacement characters, tabs, or line endings).
function movePoint(point, offset) {
  point.column += offset
  point.offset += offset
  point._bufferIndex += offset
  return point
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/normalize-identifier.js":
/*!******************************************************************!*\
  !*** ./node_modules/micromark/dist/util/normalize-identifier.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = normalizeIdentifier

function normalizeIdentifier(value) {
  return (
    value
      // Collapse Markdown whitespace.
      .replace(/[\t\n\r ]+/g, ' ')
      // Trim.
      .replace(/^ | $/g, '')
      // Some characters are considered “uppercase”, but if their lowercase
      // counterpart is uppercased will result in a different uppercase
      // character.
      // Hence, to get that form, we perform both lower- and uppercase.
      // Upper case makes sure keys will not interact with default prototypal
      // methods: no object method is uppercase.
      .toLowerCase()
      .toUpperCase()
  )
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/prefix-size.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/prefix-size.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = prefixSize

var sizeChunks = __webpack_require__(/*! ./size-chunks */ "./node_modules/micromark/dist/util/size-chunks.js")

function prefixSize(events, type) {
  var tail = events[events.length - 1]
  if (!tail || tail[1].type !== type) return 0
  return sizeChunks(tail[2].sliceStream(tail[1]))
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/regex-check.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/regex-check.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = regexCheck

var fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ "./node_modules/micromark/dist/constant/from-char-code.js")

function regexCheck(regex) {
  return check
  function check(code) {
    return regex.test(fromCharCode(code))
  }
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/resolve-all.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/resolve-all.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = resolveAll

function resolveAll(constructs, events, context) {
  var called = []
  var index = -1
  var resolve

  while (++index < constructs.length) {
    resolve = constructs[index].resolveAll

    if (resolve && called.indexOf(resolve) < 0) {
      events = resolve(events, context)
      called.push(resolve)
    }
  }

  return events
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/safe-from-int.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark/dist/util/safe-from-int.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = safeFromInt

var fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ "./node_modules/micromark/dist/constant/from-char-code.js")

function safeFromInt(value, base) {
  var code = parseInt(value, base)

  if (
    // C0 except for HT, LF, FF, CR, space
    code < 9 ||
    code === 11 ||
    (code > 13 && code < 32) ||
    // Control character (DEL) of the basic block and C1 controls.
    (code > 126 && code < 160) ||
    // Lone high surrogates and low surrogates.
    (code > 55295 && code < 57344) ||
    // Noncharacters.
    (code > 64975 && code < 65008) ||
    (code & 65535) === 65535 ||
    (code & 65535) === 65534 ||
    // Out of range
    code > 1114111
  ) {
    return '\uFFFD'
  }

  return fromCharCode(code)
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/serialize-chunks.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark/dist/util/serialize-chunks.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = serializeChunks

var fromCharCode = __webpack_require__(/*! ../constant/from-char-code */ "./node_modules/micromark/dist/constant/from-char-code.js")

function serializeChunks(chunks) {
  var index = -1
  var result = []
  var chunk
  var value
  var atTab

  while (++index < chunks.length) {
    chunk = chunks[index]

    if (typeof chunk === 'string') {
      value = chunk
    } else if (chunk === -5) {
      value = '\r'
    } else if (chunk === -4) {
      value = '\n'
    } else if (chunk === -3) {
      value = '\r' + '\n'
    } else if (chunk === -2) {
      value = '\t'
    } else if (chunk === -1) {
      if (atTab) continue
      value = ' '
    } else {
      // Currently only replacement character.
      value = fromCharCode(chunk)
    }

    atTab = chunk === -2
    result.push(value)
  }

  return result.join('')
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/shallow.js":
/*!*****************************************************!*\
  !*** ./node_modules/micromark/dist/util/shallow.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = shallow

var assign = __webpack_require__(/*! ../constant/assign */ "./node_modules/micromark/dist/constant/assign.js")

function shallow(object) {
  return assign({}, object)
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/size-chunks.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/size-chunks.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = sizeChunks

// Measure the number of character codes in chunks.
// Counts tabs based on their expanded size, and CR+LF as one character.
function sizeChunks(chunks) {
  var index = -1
  var size = 0

  while (++index < chunks.length) {
    size += typeof chunks[index] === 'string' ? chunks[index].length : 1
  }

  return size
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/slice-chunks.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark/dist/util/slice-chunks.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = sliceChunks

function sliceChunks(chunks, token) {
  var startIndex = token.start._index
  var startBufferIndex = token.start._bufferIndex
  var endIndex = token.end._index
  var endBufferIndex = token.end._bufferIndex
  var view

  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)]
  } else {
    view = chunks.slice(startIndex, endIndex)

    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex)
    }

    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex))
    }
  }

  return view
}


/***/ }),

/***/ "./node_modules/micromark/dist/util/subtokenize.js":
/*!*********************************************************!*\
  !*** ./node_modules/micromark/dist/util/subtokenize.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = subtokenize

var assign = __webpack_require__(/*! ../constant/assign */ "./node_modules/micromark/dist/constant/assign.js")

var chunkedSplice = __webpack_require__(/*! ./chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")
var shallow = __webpack_require__(/*! ./shallow */ "./node_modules/micromark/dist/util/shallow.js")

function subtokenize(events) {
  var jumps = {}
  var index = -1
  var event
  var lineIndex
  var otherIndex
  var otherEvent
  var parameters
  var subevents
  var more

  while (++index < events.length) {
    while (index in jumps) {
      index = jumps[index]
    }

    event = events[index]

    // Add a hook for the GFM tasklist extension, which needs to know if text
    // is in the first content of a list item.
    if (
      index &&
      event[1].type === 'chunkFlow' &&
      events[index - 1][1].type === 'listItemPrefix'
    ) {
      subevents = event[1]._tokenizer.events
      otherIndex = 0

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'lineEndingBlank'
      ) {
        otherIndex += 2
      }

      if (
        otherIndex < subevents.length &&
        subevents[otherIndex][1].type === 'content'
      ) {
        while (++otherIndex < subevents.length) {
          if (subevents[otherIndex][1].type === 'content') {
            break
          }

          if (subevents[otherIndex][1].type === 'chunkText') {
            subevents[otherIndex][1].isInFirstContentOfListItem = true
            otherIndex++
          }
        }
      }
    }

    // Enter.
    if (event[0] === 'enter') {
      if (event[1].contentType) {
        assign(jumps, subcontent(events, index))
        index = jumps[index]
        more = true
      }
    }
    // Exit.
    else if (event[1]._container || event[1]._movePreviousLineEndings) {
      otherIndex = index
      lineIndex = undefined

      while (otherIndex--) {
        otherEvent = events[otherIndex]

        if (
          otherEvent[1].type === 'lineEnding' ||
          otherEvent[1].type === 'lineEndingBlank'
        ) {
          if (otherEvent[0] === 'enter') {
            if (lineIndex) {
              events[lineIndex][1].type = 'lineEndingBlank'
            }

            otherEvent[1].type = 'lineEnding'
            lineIndex = otherIndex
          }
        } else {
          break
        }
      }

      if (lineIndex) {
        // Fix position.
        event[1].end = shallow(events[lineIndex][1].start)

        // Switch container exit w/ line endings.
        parameters = events.slice(lineIndex, index)
        parameters.unshift(event)
        chunkedSplice(events, lineIndex, index - lineIndex + 1, parameters)
      }
    }
  }

  return !more
}

function subcontent(events, eventIndex) {
  var token = events[eventIndex][1]
  var context = events[eventIndex][2]
  var startPosition = eventIndex - 1
  var startPositions = []
  var tokenizer =
    token._tokenizer || context.parser[token.contentType](token.start)
  var childEvents = tokenizer.events
  var jumps = []
  var gaps = {}
  var stream
  var previous
  var index
  var entered
  var end
  var adjust

  // Loop forward through the linked tokens to pass them in order to the
  // subtokenizer.
  while (token) {
    // Find the position of the event for this token.
    while (events[++startPosition][1] !== token) {
      // Empty.
    }

    startPositions.push(startPosition)

    if (!token._tokenizer) {
      stream = context.sliceStream(token)

      if (!token.next) {
        stream.push(null)
      }

      if (previous) {
        tokenizer.defineSkip(token.start)
      }

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = true
      }

      tokenizer.write(stream)

      if (token.isInFirstContentOfListItem) {
        tokenizer._gfmTasklistFirstContentOfListItem = undefined
      }
    }

    // Unravel the next token.
    previous = token
    token = token.next
  }

  // Now, loop back through all events (and linked tokens), to figure out which
  // parts belong where.
  token = previous
  index = childEvents.length

  while (index--) {
    // Make sure we’ve at least seen something (final eol is part of the last
    // token).
    if (childEvents[index][0] === 'enter') {
      entered = true
    } else if (
      // Find a void token that includes a break.
      entered &&
      childEvents[index][1].type === childEvents[index - 1][1].type &&
      childEvents[index][1].start.line !== childEvents[index][1].end.line
    ) {
      add(childEvents.slice(index + 1, end))

      // Help GC.
      token._tokenizer = token.next = undefined
      token = token.previous
      end = index + 1
    }
  }

  // Help GC.
  tokenizer.events = token._tokenizer = token.next = undefined

  // Do head:
  add(childEvents.slice(0, end))

  index = -1
  adjust = 0

  while (++index < jumps.length) {
    gaps[adjust + jumps[index][0]] = adjust + jumps[index][1]
    adjust += jumps[index][1] - jumps[index][0] - 1
  }

  return gaps

  function add(slice) {
    var start = startPositions.pop()
    jumps.unshift([start, start + slice.length - 1])
    chunkedSplice(events, start, 2, slice)
  }
}


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var cachedObserver;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

function prefetch(router, href, as, options) {
  if (false) {}
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale
  }).then(function (success) {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + (true ? "\nOpen your browser's console to view the Component stack trace." : undefined));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();
  var pathname = router && router.pathname || '/';

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(pathname, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child = _react.Children.only(children);

  var childRef = child && typeof child === 'object' && child.ref;

  var cleanup = _react["default"].useRef();

  var setRef = _react["default"].useCallback(function (el) {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }

    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      var isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, function () {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);

  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = function (e) {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "KTrcstNG+xXPZMSCSWIouwhlVnY=");

_c = Link;
var _default = Link;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Link");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/path-browserify/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-markdown/lib/ast-to-react.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-markdown/lib/ast-to-react.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

function astToReact(node, options) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var renderer = options.renderers[node.type]; // Nodes created by plugins do not have positional info, in which case we set
  // an object that matches the positon interface.

  if (!node.position) {
    node.position = {
      start: {
        line: null,
        column: null,
        offset: null
      },
      end: {
        line: null,
        column: null,
        offset: null
      }
    };
  }

  var pos = node.position.start;
  var key = [node.type, pos.line, pos.column, index].join('-');

  if (!ReactIs.isValidElementType(renderer)) {
    throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
  }

  var nodeProps = getNodeProps(node, key, options, renderer, parent, index);
  return React.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || undefined);

  function resolveChildren() {
    return node.children && node.children.map(function (childNode, i) {
      return astToReact(childNode, options, {
        node: node,
        props: nodeProps
      }, i);
    });
  }
} // eslint-disable-next-line max-params, complexity


function getNodeProps(node, key, opts, renderer, parent, index) {
  var props = {
    key: key
  };
  var isSimpleRenderer = typeof renderer === 'string' || renderer === React.Fragment; // `sourcePos` is true if the user wants source information (line/column info from markdown source)

  if (opts.sourcePos && node.position) {
    props['data-sourcepos'] = flattenPosition(node.position);
  }

  if (opts.rawSourcePos && !isSimpleRenderer) {
    props.sourcePosition = node.position;
  } // If `includeNodeIndex` is true, pass node index info to all non-tag renderers


  if (opts.includeNodeIndex && parent.node && parent.node.children && !isSimpleRenderer) {
    props.index = parent.node.children.indexOf(node);
    props.parentChildCount = parent.node.children.length;
  }

  var ref = node.identifier !== null && node.identifier !== undefined ?
  /* istanbul ignore next - plugins could inject an undefined reference. */
  opts.definitions[node.identifier.toUpperCase()] || {} : null;

  switch (node.type) {
    case 'root':
      assignDefined(props, {
        className: opts.className
      });
      break;

    case 'text':
      props.nodeKey = key;
      props.children = node.value;
      break;

    case 'heading':
      props.level = node.depth;
      break;

    case 'list':
      props.start = node.start;
      props.ordered = node.ordered;
      props.spread = node.spread;
      props.depth = node.depth;
      break;

    case 'listItem':
      props.checked = node.checked;
      props.spread = node.spread;
      props.ordered = node.ordered;
      props.index = node.index;
      props.children = getListItemChildren(node, parent).map(function (childNode, i) {
        return astToReact(childNode, opts, {
          node: node,
          props: props
        }, i);
      });
      break;

    case 'definition':
      assignDefined(props, {
        identifier: node.identifier,
        title: node.title,
        url: node.url
      });
      break;

    case 'code':
      assignDefined(props, {
        language: node.lang && node.lang.split(/\s/, 1)[0]
      });
      break;

    case 'inlineCode':
      props.children = node.value;
      props.inline = true;
      break;

    case 'link':
      assignDefined(props, {
        title: node.title || undefined,
        target: typeof opts.linkTarget === 'function' ? opts.linkTarget(node.url, node.children, node.title) : opts.linkTarget,
        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
      });
      break;

    case 'image':
      assignDefined(props, {
        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url,
        alt: node.alt || '',
        title: node.title || undefined
      });
      break;

    case 'linkReference':
      assignDefined(props, xtend(ref, {
        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
      }));
      break;

    case 'imageReference':
      assignDefined(props, {
        src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
        alt: node.alt || '',
        title: ref.title || undefined
      });
      break;

    case 'table':
    case 'tableHead':
    case 'tableBody':
      props.columnAlignment = node.align;
      break;

    case 'tableRow':
      props.isHeader = parent.node.type === 'tableHead';
      props.columnAlignment = parent.props.columnAlignment;
      break;

    case 'tableCell':
      assignDefined(props, {
        isHeader: parent.props.isHeader,
        align: parent.props.columnAlignment[index]
      });
      break;

    case 'virtualHtml':
      props.tag = node.tag;
      break;

    case 'html':
      // @todo find a better way than this
      props.isBlock = node.position.start.line !== node.position.end.line;
      props.allowDangerousHtml = opts.allowDangerousHtml;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;

    case 'parsedHtml':
      {
        var parsedChildren;

        if (node.children) {
          parsedChildren = node.children.map(function (child, i) {
            return astToReact(child, opts, {
              node: node,
              props: props
            }, i);
          });
        }

        props.allowDangerousHtml = opts.allowDangerousHtml;
        props.escapeHtml = opts.escapeHtml;
        props.skipHtml = opts.skipHtml;
        props.element = node.element ? mergeNodeChildren(node, parsedChildren) : null;
        break;
      }

    default:
      assignDefined(props, xtend(node, {
        type: undefined,
        position: undefined,
        children: undefined
      }));
  }

  if (!isSimpleRenderer && node.value) {
    props.value = node.value;
  }

  if (!isSimpleRenderer) {
    props.node = node;
  }

  return props;
}

function assignDefined(target, attrs) {
  for (var key in attrs) {
    if (typeof attrs[key] !== 'undefined') {
      target[key] = attrs[key];
    }
  }
}

function mergeNodeChildren(node, parsedChildren) {
  var el = node.element;

  if (Array.isArray(el)) {
    /* istanbul ignore next - `div` fallback for old React. */
    var Fragment = React.Fragment || 'div';
    return React.createElement(Fragment, null, el);
  }

  if (el.props.children || parsedChildren) {
    var children = React.Children.toArray(el.props.children).concat(parsedChildren);
    return React.cloneElement(el, null, children);
  }

  return React.cloneElement(el, null);
}

function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
}

function getListItemChildren(node, parent) {
  /* istanbul ignore next - list items are always in a list, but best to be sure. */
  var loose = parent && parent.node ? listLoose(parent.node) : listItemLoose(node);
  return loose ? node.children : unwrapParagraphs(node);
}

function unwrapParagraphs(node) {
  return node.children.reduce(function (array, child) {
    return array.concat(child.type === 'paragraph' ? child.children : [child]);
  }, []);
}

function listLoose(node) {
  var children = node.children;
  var loose = node.spread;
  var index = -1;

  while (!loose && ++index < children.length) {
    loose = listItemLoose(children[index]);
  }

  return loose;
}

function listItemLoose(node) {
  var spread = node.spread;
  /* istanbul ignore next - spread is present from remark-parse, but maybe plugins don’t set it. */

  return spread === undefined || spread === null ? node.children.length > 1 : spread;
}

module.exports = astToReact;

/***/ }),

/***/ "./node_modules/react-markdown/lib/get-definitions.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/get-definitions.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

module.exports = function getDefinitions(tree) {
  var definitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  visit(tree, 'definition', function (node) {
    var identifier = node.identifier.toUpperCase();
    if (identifier in definitions) return;
    definitions[identifier] = {
      href: node.url,
      title: node.title
    };
  });
  return definitions;
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/disallow-node.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/disallow-node.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

var splice = [].splice;

exports.ofType = function (types, mode) {
  return ifNotMatch(allow, mode);

  function allow(node, index, parent) {
    return !types.includes(node.type);
  }
};

exports.ifNotMatch = ifNotMatch;

function ifNotMatch(allow, mode) {
  return transform;

  function transform(tree) {
    visit(tree, filter);
    return tree;
  } // eslint-disable-next-line consistent-return


  function filter(node, index, parent) {
    if (parent && !allow(node, index, parent)) {
      var parameters = [index, 1];

      if (mode === 'unwrap' && node.children) {
        parameters = parameters.concat(node.children);
      }

      splice.apply(parent.children, parameters);
      return index;
    }
  }
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/naive-html.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/naive-html.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Naive, simple plugin to match inline nodes without attributes
 * This allows say <strong>foo</strong>, but not <strong class="very">foo</strong>
 * For proper HTML support, you'll want a different plugin
 **/
var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

var type = 'virtualHtml';
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;

module.exports = function (tree) {
  var open;
  var currentParent;
  visit(tree, 'html', function (node, index, parent) {
    if (currentParent !== parent) {
      open = [];
      currentParent = parent;
    }

    var selfClosing = getSelfClosing(node);

    if (selfClosing) {
      parent.children.splice(index, 1, {
        type: type,
        tag: selfClosing,
        position: node.position
      });
      return true;
    }

    var current = getSimpleTag(node, parent);

    if (!current) {
      return true;
    }

    var matching = findAndPull(open, current.tag);

    if (matching) {
      parent.children.splice(index, 0, virtual(current, matching, parent));
    } else if (!current.opening) {
      open.push(current);
    }

    return true;
  }, true // Iterate in reverse
  );
  return tree;
};

function findAndPull(open, matchingTag) {
  var i = open.length;

  while (i--) {
    if (open[i].tag === matchingTag) {
      return open.splice(i, 1)[0];
    }
  }

  return false;
}

function getSimpleTag(node, parent) {
  var match = node.value.match(simpleTagRe);
  return match ? {
    tag: match[2],
    opening: !match[1],
    node: node
  } : false;
}

function getSelfClosing(node) {
  var match = node.value.match(selfClosingRe);
  return match ? match[1] : false;
}

function virtual(fromNode, toNode, parent) {
  var fromIndex = parent.children.indexOf(fromNode.node);
  var toIndex = parent.children.indexOf(toNode.node);
  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
  var children = extracted.slice(1, -1);
  return {
    type: type,
    children: children,
    tag: fromNode.tag,
    position: {
      start: fromNode.node.position.start,
      end: toNode.node.position.end,
      indent: []
    }
  };
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-markdown/lib/react-markdown.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var unified = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");

var parse = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");

var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var addListMetadata = __webpack_require__(/*! mdast-add-list-metadata */ "./node_modules/mdast-add-list-metadata/index.js");

var naiveHtml = __webpack_require__(/*! ./plugins/naive-html */ "./node_modules/react-markdown/lib/plugins/naive-html.js");

var disallowNode = __webpack_require__(/*! ./plugins/disallow-node */ "./node_modules/react-markdown/lib/plugins/disallow-node.js");

var astToReact = __webpack_require__(/*! ./ast-to-react */ "./node_modules/react-markdown/lib/ast-to-react.js");

var wrapTableRows = __webpack_require__(/*! ./wrap-table-rows */ "./node_modules/react-markdown/lib/wrap-table-rows.js");

var getDefinitions = __webpack_require__(/*! ./get-definitions */ "./node_modules/react-markdown/lib/get-definitions.js");

var uriTransformer = __webpack_require__(/*! ./uri-transformer */ "./node_modules/react-markdown/lib/uri-transformer.js");

var defaultRenderers = __webpack_require__(/*! ./renderers */ "./node_modules/react-markdown/lib/renderers.js");

var symbols = __webpack_require__(/*! ./symbols */ "./node_modules/react-markdown/lib/symbols.js");

var allTypes = Object.keys(defaultRenderers);

var ReactMarkdown = function ReactMarkdown(props) {
  // To do in next major: remove `source`.
  var src = props.source || props.children || '';

  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  var renderers = xtend(defaultRenderers, props.renderers);
  var processor = unified().use(parse).use(props.plugins || []); // eslint-disable-next-line no-sync

  var tree = processor.runSync(processor.parse(src));
  var renderProps = xtend(props, {
    renderers: renderers,
    definitions: getDefinitions(tree)
  });
  determineAstToReactTransforms(props).forEach(function (transform) {
    tree = transform(tree, renderProps);
  });
  return tree;
};

function determineAstToReactTransforms(props) {
  var transforms = [wrapTableRows, addListMetadata()];
  var disallowedTypes = props.disallowedTypes;

  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function (type) {
      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
    });
  }

  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';

  if (disallowedTypes && disallowedTypes.length > 0) {
    transforms.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }

  if (props.allowNode) {
    transforms.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  } // To do in next major: remove `escapeHtml`.


  var renderHtml = (props.allowDangerousHtml || props.escapeHtml === false) && !props.skipHtml;
  var hasHtmlParser = (props.astPlugins || []).some(function (transform) {
    return transform.identity === symbols.HtmlParser;
  });

  if (renderHtml && !hasHtmlParser) {
    transforms.push(naiveHtml);
  }

  if (props.astPlugins) {
    transforms = transforms.concat(props.astPlugins);
  } // Add the final transform to turn everything into React.


  transforms.push(astToReact);
  return transforms;
}

ReactMarkdown.defaultProps = {
  transformLinkUri: uriTransformer
};
ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  allowDangerousHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  plugins: PropTypes.array
};
ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer;
module.exports = ReactMarkdown;

/***/ }),

/***/ "./node_modules/react-markdown/lib/renderers.js":
/*!******************************************************!*\
  !*** ./node_modules/react-markdown/lib/renderers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types, react/no-multi-comp */


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* istanbul ignore next - Don’t crash on old React. */


var supportsStringRender = parseInt((React.version || '16').slice(0, 2), 10) >= 16;
var createElement = React.createElement;
module.exports = {
  break: 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  delete: 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,
  root: Root,
  text: TextRenderer,
  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml,
  parsedHtml: ParsedHtml
};

function TextRenderer(props) {
  /* istanbul ignore next - a text node w/o a value could be injected by plugins */
  var children = props.children || '';
  /* istanbul ignore next - `span` is a fallback for old React. */

  return supportsStringRender ? children : createElement('span', null, children);
}

function Root(props) {
  var className = props.className;
  var root = !className && React.Fragment || 'div';
  return createElement(root, className ? {
    className: className
  } : null, props.children);
}

function SimpleRenderer(tag, props) {
  return createElement(tag, getCoreProps(props), props.children);
}

function TableCell(props) {
  var style = props.align ? {
    textAlign: props.align
  } : undefined;
  var coreProps = getCoreProps(props);
  return createElement(props.isHeader ? 'th' : 'td', style ? xtend({
    style: style
  }, coreProps) : coreProps, props.children);
}

function Heading(props) {
  return createElement("h".concat(props.level), getCoreProps(props), props.children);
}

function List(props) {
  var attrs = getCoreProps(props);

  if (props.start !== null && props.start !== 1 && props.start !== undefined) {
    attrs.start = props.start.toString();
  }

  return createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
}

function ListItem(props) {
  var checkbox = null;

  if (props.checked !== null && props.checked !== undefined) {
    var checked = props.checked;
    checkbox = createElement('input', {
      type: 'checkbox',
      checked: checked,
      readOnly: true
    });
  }

  return createElement('li', getCoreProps(props), checkbox, props.children);
}

function CodeBlock(props) {
  var className = props.language && "language-".concat(props.language);
  var code = createElement('code', className ? {
    className: className
  } : null, props.value);
  return createElement('pre', getCoreProps(props), code);
}

function InlineCode(props) {
  return createElement('code', getCoreProps(props), props.children);
}

function Html(props) {
  if (props.skipHtml) {
    return null;
  }

  var dangerous = props.allowDangerousHtml || props.escapeHtml === false;
  var tag = props.isBlock ? 'div' : 'span';

  if (!dangerous) {
    /* istanbul ignore next - `tag` is a fallback for old React. */
    return createElement(React.Fragment || tag, null, props.value);
  }

  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement(tag, nodeProps);
}

function ParsedHtml(props) {
  /* To do: `React.cloneElement` is slow, is it really needed? */
  return props['data-sourcepos'] ? React.cloneElement(props.element, {
    'data-sourcepos': props['data-sourcepos']
  }) : props.element;
}

function VirtualHtml(props) {
  return createElement(props.tag, getCoreProps(props), props.children);
}

function NullRenderer() {
  return null;
}

function getCoreProps(props) {
  var source = props['data-sourcepos'];
  /* istanbul ignore next - nodes from plugins w/o position */

  return source ? {
    'data-sourcepos': source
  } : {};
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/symbols.js":
/*!****************************************************!*\
  !*** ./node_modules/react-markdown/lib/symbols.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var HtmlParser = '__RMD_HTML_PARSER__';
/* istanbul ignore next - Fallback for `Symbol`. */

exports.HtmlParser = typeof Symbol === 'undefined' ? HtmlParser : Symbol(HtmlParser);

/***/ }),

/***/ "./node_modules/react-markdown/lib/uri-transformer.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/uri-transformer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocols = ['http', 'https', 'mailto', 'tel'];

module.exports = function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url;
  }

  var colon = url.indexOf(':');

  if (colon === -1) {
    return url;
  }

  var length = protocols.length;
  var index = -1;

  while (++index < length) {
    var protocol = protocols[index];

    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }

  index = url.indexOf('?');

  if (index !== -1 && colon > index) {
    return url;
  }

  index = url.indexOf('#');

  if (index !== -1 && colon > index) {
    return url;
  } // eslint-disable-next-line no-script-url


  return 'javascript:void(0)';
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/wrap-table-rows.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/wrap-table-rows.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

module.exports = function (node) {
  visit(node, 'table', wrap);
  return node;
};

function wrap(table) {
  var children = table.children;
  table.children = [{
    type: 'tableHead',
    align: table.align,
    children: [children[0]],
    position: children[0].position
  }];

  if (children.length > 1) {
    table.children.push({
      type: 'tableBody',
      align: table.align,
      children: children.slice(1),
      position: {
        start: children[1].position.start,
        end: children[children.length - 1].position.end
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-parse/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = parse

var fromMarkdown = __webpack_require__(/*! mdast-util-from-markdown */ "./node_modules/mdast-util-from-markdown/index.js")

function parse(options) {
  var self = this

  this.Parser = parse

  function parse(doc) {
    return fromMarkdown(
      doc,
      Object.assign({}, self.data('settings'), options, {
        // Note: these options are not in the readme.
        // The goal is for them to be set by plugins on `data` instead of being
        // passed by users.
        extensions: self.data('micromarkExtensions') || [],
        mdastExtensions: self.data('fromMarkdownExtensions') || []
      })
    )
  }
}


/***/ }),

/***/ "./node_modules/replace-ext/index.js":
/*!*******************************************!*\
  !*** ./node_modules/replace-ext/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js");

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;


/***/ }),

/***/ "./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrap = __webpack_require__(/*! ./wrap.js */ "./node_modules/trough/wrap.js")

module.exports = trough

trough.wrap = wrap

var slice = [].slice

// Create new middleware.
function trough() {
  var fns = []
  var middleware = {}

  middleware.run = run
  middleware.use = use

  return middleware

  // Run `fns`.  Last argument must be a completion handler.
  function run() {
    var index = -1
    var input = slice.call(arguments, 0, -1)
    var done = arguments[arguments.length - 1]

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input))

    // Run the next `fn`, if any.
    function next(err) {
      var fn = fns[++index]
      var params = slice.call(arguments, 0)
      var values = params.slice(1)
      var length = input.length
      var pos = -1

      if (err) {
        done(err)
        return
      }

      // Copy non-nully input into values.
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos]
        }
      }

      input = values

      // Next or done.
      if (fn) {
        wrap(fn, next).apply(null, input)
      } else {
        done.apply(null, [null].concat(input))
      }
    }
  }

  // Add `fn` to the list.
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn)

    return middleware
  }
}


/***/ }),

/***/ "./node_modules/trough/wrap.js":
/*!*************************************!*\
  !*** ./node_modules/trough/wrap.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = [].slice

module.exports = wrap

// Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.
function wrap(fn, callback) {
  var invoked

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0)
    var callback = fn.length > params.length
    var result

    if (callback) {
      params.push(done)
    }

    try {
      result = fn.apply(null, params)
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error
      }

      return done(error)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  // Invoke `next`, only once.
  function done() {
    if (!invoked) {
      invoked = true

      callback.apply(null, arguments)
    }
  }

  // Invoke `done` with one value.
  // Tracks if an error is passed, too.
  function then(value) {
    done(null, value)
  }
}


/***/ }),

/***/ "./node_modules/unified/index.js":
/*!***************************************!*\
  !*** ./node_modules/unified/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bail = __webpack_require__(/*! bail */ "./node_modules/bail/index.js")
var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/unified/node_modules/is-buffer/index.js")
var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js")
var plain = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js")
var trough = __webpack_require__(/*! trough */ "./node_modules/trough/index.js")
var vfile = __webpack_require__(/*! vfile */ "./node_modules/vfile/index.js")

// Expose a frozen processor.
module.exports = unified().freeze()

var slice = [].slice
var own = {}.hasOwnProperty

// Process pipeline.
var pipeline = trough()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify)

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file)
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done)

  function done(err, tree, file) {
    if (err) {
      next(err)
    } else {
      ctx.tree = tree
      ctx.file = file
      next()
    }
  }
}

function pipelineStringify(p, ctx) {
  var result = p.stringify(ctx.tree, ctx.file)
  var file = ctx.file

  if (result === undefined || result === null) {
    // Empty.
  } else if (typeof result === 'string' || buffer(result)) {
    file.contents = result
  } else {
    file.result = result
  }
}

// Function to create the first processor.
function unified() {
  var attachers = []
  var transformers = trough()
  var namespace = {}
  var frozen = false
  var freezeIndex = -1

  // Data management.
  processor.data = data

  // Lock.
  processor.freeze = freeze

  // Plugins.
  processor.attachers = attachers
  processor.use = use

  // API.
  processor.parse = parse
  processor.stringify = stringify
  processor.run = run
  processor.runSync = runSync
  processor.process = process
  processor.processSync = processSync

  // Expose.
  return processor

  // Create a new processor based on the processor in the current scope.
  function processor() {
    var destination = unified()
    var length = attachers.length
    var index = -1

    while (++index < length) {
      destination.use.apply(null, attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  // Freeze: used to signal a processor that has finished configuration.
  //
  // For example, take unified itself: it’s frozen.
  // Plugins should not be added to it.
  // Rather, it should be extended, by invoking it, before modifying it.
  //
  // In essence, always invoke this when exporting a processor.
  function freeze() {
    var values
    var plugin
    var options
    var transformer

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex]
      plugin = values[0]
      options = values[1]
      transformer = null

      if (options === false) {
        continue
      }

      if (options === true) {
        values[1] = undefined
      }

      transformer = plugin.apply(processor, values.slice(1))

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Infinity

    return processor
  }

  // Data management.
  // Getter / setter for processor-specific informtion.
  function data(key, value) {
    if (typeof key === 'string') {
      // Set `key`.
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)

        namespace[key] = value

        return processor
      }

      // Get `key`.
      return (own.call(namespace, key) && namespace[key]) || null
    }

    // Set space.
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    // Get space.
    return namespace
  }

  // Plugin management.
  //
  // Pass it:
  // *   an attacher and options,
  // *   a preset,
  // *   a list of presets, attachers, and arguments (list of attachers and
  //     options).
  function use(value) {
    var settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      // Empty.
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments)
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings)
    }

    return processor

    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = extend(settings || {}, result.settings)
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value)
        } else {
          addPreset(value)
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var length
      var index

      if (plugins === null || plugins === undefined) {
        // Empty.
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length
        index = -1

        while (++index < length) {
          add(plugins[index])
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin)

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value)
        }

        entry[1] = value
      } else {
        attachers.push(slice.call(arguments))
      }
    }
  }

  function find(plugin) {
    var length = attachers.length
    var index = -1
    var entry

    while (++index < length) {
      entry = attachers[index]

      if (entry[0] === plugin) {
        return entry
      }
    }
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor.
  function parse(doc) {
    var file = vfile(doc)
    var Parser

    freeze()
    Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser, 'parse')) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), async.
  function run(node, file, cb) {
    assertNode(node)
    freeze()

    if (!cb && typeof file === 'function') {
      cb = file
      file = null
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done)

      function done(err, tree, file) {
        tree = tree || node
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(tree)
        } else {
          cb(null, tree, file)
        }
      }
    }
  }

  // Run transforms on a unist node representation of a file (in string or
  // vfile representation), sync.
  function runSync(node, file) {
    var complete = false
    var result

    run(node, file, done)

    assertDone('runSync', 'run', complete)

    return result

    function done(err, tree) {
      complete = true
      bail(err)
      result = tree
    }
  }

  // Stringify a unist node representation of a file (in string or vfile
  // representation) into a string using the `Compiler` on the processor.
  function stringify(node, doc) {
    var file = vfile(doc)
    var Compiler

    freeze()
    Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler, 'compile')) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  // Parse a file (in string or vfile representation) into a unist node using
  // the `Parser` on the processor, then run transforms on that node, and
  // compile the resulting node using the `Compiler` on the processor, and
  // store that result on the vfile.
  function process(doc, cb) {
    freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      var file = vfile(doc)

      pipeline.run(processor, {file: file}, done)

      function done(err) {
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(file)
        } else {
          cb(null, file)
        }
      }
    }
  }

  // Process the given document (in string or vfile representation), sync.
  function processSync(doc) {
    var complete = false
    var file

    freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)
    file = vfile(doc)

    process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    function done(err) {
      complete = true
      bail(err)
    }
  }
}

// Check if `value` is a constructor.
function newable(value, name) {
  return (
    typeof value === 'function' &&
    value.prototype &&
    // A function with keys in its prototype is probably a constructor.
    // Classes’ prototype methods are not enumerable, so we check if some value
    // exists in the prototype.
    (keys(value.prototype) || name in value.prototype)
  )
}

// Check if `value` is an object with keys.
function keys(value) {
  var key
  for (key in value) {
    return true
  }

  return false
}

// Assert a parser is available.
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

// Assert a compiler is available.
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

// Assert the processor is not frozen.
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot invoke `' +
        name +
        '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
    )
  }
}

// Assert `node` is a unist node.
function assertNode(node) {
  if (!node || typeof node.type !== 'string') {
    throw new Error('Expected node, got `' + node + '`')
  }
}

// Assert that `complete` is `true`.
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}


/***/ }),

/***/ "./node_modules/unified/node_modules/is-buffer/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/unified/node_modules/is-buffer/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (test == null) {
    return ok
  }

  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (typeof test === 'object') {
    return 'length' in test ? anyFactory(test) : allFactory(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function allFactory(test) {
  return all

  function all(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) return
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = []
  var index = -1

  while (++index < tests.length) {
    checks[index] = convert(tests[index])
  }

  return any

  function any() {
    var index = -1

    while (++index < checks.length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return node && node.type === test
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "./node_modules/unist-util-stringify-position/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = stringify

function stringify(value) {
  // Nothing.
  if (!value || typeof value !== 'object') {
    return ''
  }

  // Node.
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  // Position.
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  // Point.
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  // ?
  return ''
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {}
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {}
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */
module.exports = visitParents

/* Visit. */
function visitParents(tree, type, visitor) {
  var stack = []

  if (typeof type === 'function') {
    visitor = type
    type = null
  }

  one(tree)

  /* Visit a single node. */
  function one(node) {
    var result

    if (!type || node.type === type) {
      result = visitor(node, stack.concat())
    }

    if (node.children && result !== false) {
      return all(node.children, node)
    }

    return result
  }

  /* Visit children in `parent`. */
  function all(children, parent) {
    var length = children.length
    var index = -1
    var child

    stack.push(parent)

    while (++index < length) {
      child = children[index]

      if (child && one(child) === false) {
        return false
      }
    }

    stack.pop()

    return true
  }
}


/***/ }),

/***/ "./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/color.browser.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/color.browser.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = identity
function identity(d) {
  return d
}


/***/ }),

/***/ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")
var color = __webpack_require__(/*! ./color */ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/color.browser.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var step
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)
  step = reverse ? -1 : 1

  factory(tree, null, [])()

  function factory(node, index, parents) {
    var value = typeof node === 'object' && node !== null ? node : {}
    var name

    if (typeof value.type === 'string') {
      name =
        typeof value.tagName === 'string'
          ? value.tagName
          : typeof value.name === 'string'
          ? value.name
          : undefined

      visit.displayName =
        'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'
    }

    return visit

    function visit() {
      var grandparents = parents.concat(node)
      var result = []
      var subresult
      var offset

      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents))

        if (result[0] === EXIT) {
          return result
        }
      }

      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step

        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)()

          if (subresult[0] === EXIT) {
            return subresult
          }

          offset =
            typeof subresult[1] === 'number' ? subresult[1] : offset + step
        }
      }

      return result
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "./node_modules/vfile-message/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vfile-message/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/index.js")

module.exports = VMessage

// Inherit from `Error#`.
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype
VMessage.prototype = new VMessagePrototype()

// Message properties.
var proto = VMessage.prototype

proto.file = ''
proto.name = ''
proto.reason = ''
proto.message = ''
proto.stack = ''
proto.fatal = null
proto.column = null
proto.line = null

// Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.
function VMessage(reason, position, origin) {
  var parts
  var range
  var location

  if (typeof position === 'string') {
    origin = position
    position = null
  }

  parts = parseOrigin(origin)
  range = stringify(position) || '1:1'

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  }

  // Node.
  if (position && position.position) {
    position = position.position
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position
      position = position.start
    } else {
      // Point.
      location.start = position
    }
  }

  if (reason.stack) {
    this.stack = reason.stack
    reason = reason.message
  }

  this.message = reason
  this.name = range
  this.reason = reason
  this.line = position ? position.line : null
  this.column = position ? position.column : null
  this.location = location
  this.source = parts[0]
  this.ruleId = parts[1]
}

function parseOrigin(origin) {
  var result = [null, null]
  var index

  if (typeof origin === 'string') {
    index = origin.indexOf(':')

    if (index === -1) {
      result[1] = origin
    } else {
      result[0] = origin.slice(0, index)
      result[1] = origin.slice(index + 1)
    }
  }

  return result
}


/***/ }),

/***/ "./node_modules/vfile/core.js":
/*!************************************!*\
  !*** ./node_modules/vfile/core.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(/*! path */ "./node_modules/node-libs-browser/node_modules/path-browserify/index.js")
var replace = __webpack_require__(/*! replace-ext */ "./node_modules/replace-ext/index.js")
var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/vfile/node_modules/is-buffer/index.js")

module.exports = VFile

var own = {}.hasOwnProperty
var proto = VFile.prototype

// Order of setting (least specific to most), we need this because otherwise
// `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
// stem can be set.
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']

proto.toString = toString

// Access full path (`~/index.min.js`).
Object.defineProperty(proto, 'path', {get: getPath, set: setPath})

// Access parent path (`~`).
Object.defineProperty(proto, 'dirname', {get: getDirname, set: setDirname})

// Access basename (`index.min.js`).
Object.defineProperty(proto, 'basename', {get: getBasename, set: setBasename})

// Access extname (`.js`).
Object.defineProperty(proto, 'extname', {get: getExtname, set: setExtname})

// Access stem (`index.min`).
Object.defineProperty(proto, 'stem', {get: getStem, set: setStem})

// Construct a new file.
function VFile(options) {
  var prop
  var index
  var length

  if (!options) {
    options = {}
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options}
  } else if ('message' in options && 'messages' in options) {
    return options
  }

  if (!(this instanceof VFile)) {
    return new VFile(options)
  }

  this.data = {}
  this.messages = []
  this.history = []
  this.cwd = process.cwd()

  // Set path related properties in the correct order.
  index = -1
  length = order.length

  while (++index < length) {
    prop = order[index]

    if (own.call(options, prop)) {
      this[prop] = options[prop]
    }
  }

  // Set non-path related properties.
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop]
    }
  }
}

function getPath() {
  return this.history[this.history.length - 1]
}

function setPath(path) {
  assertNonEmpty(path, 'path')

  if (path !== this.path) {
    this.history.push(path)
  }
}

function getDirname() {
  return typeof this.path === 'string' ? path.dirname(this.path) : undefined
}

function setDirname(dirname) {
  assertPath(this.path, 'dirname')
  this.path = path.join(dirname || '', this.basename)
}

function getBasename() {
  return typeof this.path === 'string' ? path.basename(this.path) : undefined
}

function setBasename(basename) {
  assertNonEmpty(basename, 'basename')
  assertPart(basename, 'basename')
  this.path = path.join(this.dirname || '', basename)
}

function getExtname() {
  return typeof this.path === 'string' ? path.extname(this.path) : undefined
}

function setExtname(extname) {
  var ext = extname || ''

  assertPart(ext, 'extname')
  assertPath(this.path, 'extname')

  if (ext) {
    if (ext.charAt(0) !== '.') {
      throw new Error('`extname` must start with `.`')
    }

    if (ext.indexOf('.', 1) !== -1) {
      throw new Error('`extname` cannot contain multiple dots')
    }
  }

  this.path = replace(this.path, ext)
}

function getStem() {
  return typeof this.path === 'string'
    ? path.basename(this.path, this.extname)
    : undefined
}

function setStem(stem) {
  assertNonEmpty(stem, 'stem')
  assertPart(stem, 'stem')
  this.path = path.join(this.dirname || '', stem + (this.extname || ''))
}

// Get the value of the file.
function toString(encoding) {
  var value = this.contents || ''
  return buffer(value) ? value.toString(encoding) : String(value)
}

// Assert that `part` is not a path (i.e., does not contain `path.sep`).
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error(
      '`' + name + '` cannot be a path: did not expect `' + path.sep + '`'
    )
  }
}

// Assert that `part` is not empty.
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty')
  }
}

// Assert `path` exists.
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too')
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vfile/index.js":
/*!*************************************!*\
  !*** ./node_modules/vfile/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(/*! vfile-message */ "./node_modules/vfile-message/index.js")
var VFile = __webpack_require__(/*! ./core.js */ "./node_modules/vfile/core.js")

module.exports = VFile

var proto = VFile.prototype

proto.message = message
proto.info = info
proto.fail = fail

// Create a message with `reason` at `position`.
// When an error is passed in as `reason`, copies the stack.
function message(reason, position, origin) {
  var filePath = this.path
  var message = new VMessage(reason, position, origin)

  if (filePath) {
    message.name = filePath + ':' + message.name
    message.file = filePath
  }

  message.fatal = false

  this.messages.push(message)

  return message
}

// Fail: creates a vmessage, associates it with the file, and throws it.
function fail() {
  var message = this.message.apply(this, arguments)

  message.fatal = true

  throw message
}

// Info: creates a vmessage, associates it with the file, and marks the fatality
// as null.
function info() {
  var message = this.message.apply(this, arguments)

  message.fatal = null

  return message
}


/***/ }),

/***/ "./node_modules/vfile/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vfile/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/paths */ "./constants/paths.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");



var _jsxFileName = "/home/owen/github.com/owenlow/owenlow.github.io/pages/index.js";





function Home(_ref) {
  var landingContent = _ref.landingContent;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentPage: _constants_paths__WEBPACK_IMPORTED_MODULE_5__["default"].landing.id,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contentContainer,
      source: landingContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

_c = Home;
Home.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var fileContents;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../content/landing.md */ "./content/landing.md"));

        case 2:
          fileContents = _context.sent;
          return _context.abrupt("return", {
            landingContent: fileContents["default"]
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.module.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./pages/index.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuY3NzP2FmYmMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5tb2R1bGUuY3NzPzRiZmQiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9wYXRocy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9iYWlsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaXMtcGxhaW4tb2JqL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtYWRkLWxpc3QtbWV0YWRhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWZyb20tbWFya2Rvd24vZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWFscGhhLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWFscGhhbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9hc2NpaS1hdGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9hc2NpaS1jb250cm9sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWRpZ2l0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL2FzY2lpLWhleC1kaWdpdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9hc2NpaS1wdW5jdHVhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci91bmljb2RlLXB1bmN0dWF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL3VuaWNvZGUtd2hpdGVzcGFjZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0YW50L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0YW50L2Zyb20tY2hhci1jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvY29uc3RhbnQvaGFzLW93bi1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0YW50L2h0bWwtYmxvY2stbmFtZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdGFudC9odG1sLXJhdy1uYW1lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2NvbnN0YW50L3VuaWNvZGUtcHVuY3R1YXRpb24tcmVnZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9jb25zdHJ1Y3RzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvaW5pdGlhbGl6ZS9jb250ZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvaW5pdGlhbGl6ZS9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2luaXRpYWxpemUvZmxvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L2luaXRpYWxpemUvdGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3BhcnNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvcG9zdHByb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC9wcmVwcm9jZXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvYXR0ZW50aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvYXV0b2xpbmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9ibG9jay1xdW90ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2NoYXJhY3Rlci1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jaGFyYWN0ZXItcmVmZXJlbmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvY29kZS1mZW5jZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9jb2RlLWluZGVudGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvY29kZS10ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvY29udGVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2RlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LWRlc3RpbmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvZmFjdG9yeS1sYWJlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2ZhY3Rvcnktc3BhY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LXRpdGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvZmFjdG9yeS13aGl0ZXNwYWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvaGFyZC1icmVhay1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS9oZWFkaW5nLWF0eC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2h0bWwtZmxvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2h0bWwtdGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2xhYmVsLWVuZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2xhYmVsLXN0YXJ0LWltYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvbGFiZWwtc3RhcnQtbGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2xpbmUtZW5kaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdG9rZW5pemUvbGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL3BhcnRpYWwtYmxhbmstbGluZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3Rva2VuaXplL3NldGV4dC11bmRlcmxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC90b2tlbml6ZS90aGVtYXRpYy1icmVhay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvY2h1bmtlZC1zcGxpY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL2NsYXNzaWZ5LWNoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvY29tYmluZS1leHRlbnNpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9jcmVhdGUtdG9rZW5pemVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9taW5pZmxhdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvbW92ZS1wb2ludC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvbm9ybWFsaXplLWlkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3ByZWZpeC1zaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9yZWdleC1jaGVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay9kaXN0L3V0aWwvcmVzb2x2ZS1hbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NhZmUtZnJvbS1pbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NlcmlhbGl6ZS1jaHVua3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NoYWxsb3cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3NpemUtY2h1bmtzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrL2Rpc3QvdXRpbC9zbGljZS1jaHVua3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmsvZGlzdC91dGlsL3N1YnRva2VuaXplLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3BhcnNlLWVudGl0aWVzL2RlY29kZS1lbnRpdHkuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9hc3QtdG8tcmVhY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvZ2V0LWRlZmluaXRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3BsdWdpbnMvZGlzYWxsb3ctbm9kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9wbHVnaW5zL25haXZlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvcmVhY3QtbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvcmVuZGVyZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3N5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvdXJpLXRyYW5zZm9ybWVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3dyYXAtdGFibGUtcm93cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlcGxhY2UtZXh0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHJvdWdoL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHJvdWdoL3dyYXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91bmlmaWVkL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pZmllZC9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2NvbG9yLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy92ZmlsZS1tZXNzYWdlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdmZpbGUvY29yZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ZmaWxlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdmZpbGUvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3M/NGNmNiJdLCJuYW1lcyI6WyJGb290ZXIiLCJIZWFkZXIiLCJjdXJyZW50UGFnZSIsInN0eWxlcyIsIm5hdmJhciIsInBhdGhzIiwibGFuZGluZyIsInVybCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInBhdGhEYXRhIiwiaWQiLCJuYW1lIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJjbGFzc25hbWVzIiwiYXBwQ29udGFpbmVyIiwicHJvamVjdHMiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic2hhbGxvdyIsImxvY2FsZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFjdHVhbCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJjbGVhbnVwIiwic2V0UmVmIiwiZWwiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwiSG9tZSIsImxhbmRpbmdDb250ZW50IiwiY29udGVudENvbnRhaW5lciIsImdldEluaXRpYWxQcm9wcyIsImZpbGVDb250ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLE1BQVQsR0FBa0I7QUFDN0Isc0JBQ0k7QUFBUSxhQUFTLEVBQUUsNkNBQW5CO0FBQUEsMkJBQ0k7QUFBRyxlQUFTLEVBQUUsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwrQkFBK0I7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRTtBQUNsRTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNXdCWTs7QUFFWixpQkFBaUIsbUJBQU8sQ0FBQyxxRUFBUTs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3QkEsWUFBWSxtQkFBTyxDQUFDLDhFQUFxQjs7QUFFekM7Ozs7Ozs7Ozs7OztBQ0ZBLFlBQVksbUJBQU8sQ0FBQyw4RUFBcUI7O0FBRXpDOzs7Ozs7Ozs7Ozs7QUNGQSxZQUFZLG1CQUFPLENBQUMsOEVBQXFCOztBQUV6Qzs7Ozs7Ozs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEEsWUFBWSxtQkFBTyxDQUFDLDhFQUFxQjs7QUFFekM7Ozs7Ozs7Ozs7OztBQ0ZBLFlBQVksbUJBQU8sQ0FBQyw4RUFBcUI7O0FBRXpDOzs7Ozs7Ozs7Ozs7QUNGQSxZQUFZLG1CQUFPLENBQUMsOEVBQXFCOztBQUV6QyxtQ0FBbUM7Ozs7Ozs7Ozs7OztBQ0ZuQzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSx5QkFBeUIsbUJBQU8sQ0FBQyxrSEFBdUM7QUFDeEUsWUFBWSxtQkFBTyxDQUFDLDhFQUFxQjs7QUFFekM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSxZQUFZLG1CQUFPLENBQUMsOEVBQXFCOztBQUV6Qzs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSxtQkFBbUI7Ozs7Ozs7Ozs7OztBQ0FuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDOzs7Ozs7Ozs7Ozs7QUNOaEMsZ0JBQWdCLG1CQUFPLENBQUMsaUZBQXNCO0FBQzlDLGlCQUFpQixtQkFBTyxDQUFDLHFGQUF3QjtBQUNqRCxlQUFlLG1CQUFPLENBQUMsK0VBQXFCO0FBQzVDLFdBQVcsbUJBQU8sQ0FBQyx1RUFBaUI7QUFDcEMsaUJBQWlCLG1CQUFPLENBQUMscUZBQXdCO0FBQ2pELHNCQUFzQixtQkFBTyxDQUFDLCtGQUE2QjtBQUMzRCx5QkFBeUIsbUJBQU8sQ0FBQyxxR0FBZ0M7QUFDakUsaUJBQWlCLG1CQUFPLENBQUMscUZBQXdCO0FBQ2pELG1CQUFtQixtQkFBTyxDQUFDLHlGQUEwQjtBQUNyRCxlQUFlLG1CQUFPLENBQUMsaUZBQXNCO0FBQzdDLGlCQUFpQixtQkFBTyxDQUFDLG1GQUF1QjtBQUNoRCxzQkFBc0IsbUJBQU8sQ0FBQyxpR0FBOEI7QUFDNUQsZUFBZSxtQkFBTyxDQUFDLGlGQUFzQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsaUZBQXNCO0FBQzdDLGVBQWUsbUJBQU8sQ0FBQyxpRkFBc0I7QUFDN0MsaUJBQWlCLG1CQUFPLENBQUMsaUdBQThCO0FBQ3ZELGdCQUFnQixtQkFBTyxDQUFDLCtGQUE2QjtBQUNyRCxzQkFBc0IsbUJBQU8sQ0FBQywrRkFBNkI7QUFDM0Qsb0JBQW9CLG1CQUFPLENBQUMsMkZBQTJCO0FBQ3ZELGlCQUFpQixtQkFBTyxDQUFDLHFGQUF3QjtBQUNqRCxrQkFBa0IsbUJBQU8sQ0FBQywyRUFBbUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUEseUJBQXlCLG1CQUFPLENBQUMsMEdBQW1DOztBQUVwRSxrQkFBa0IsbUJBQU8sQ0FBQywwRkFBMkI7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkVBOztBQUVBLHlCQUF5QixtQkFBTyxDQUFDLDBHQUFtQzs7QUFFcEUsa0JBQWtCLG1CQUFPLENBQUMsMEZBQTJCO0FBQ3JELFlBQVksbUJBQU8sQ0FBQyxvR0FBZ0M7O0FBRXBELGlCQUFpQjtBQUNqQixnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5Q0FBeUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuT0E7O0FBRUEseUJBQXlCLG1CQUFPLENBQUMsMEdBQW1DOztBQUVwRSxrQkFBa0IsbUJBQU8sQ0FBQywwRkFBMkI7QUFDckQsWUFBWSxtQkFBTyxDQUFDLG9HQUFnQztBQUNwRCxjQUFjLG1CQUFPLENBQUMsOEVBQXFCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCLGFBQWEsbUJBQU8sQ0FBQyw0RUFBb0I7O0FBRXpDLGNBQWMsbUJBQU8sQ0FBQyxzRUFBaUI7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2TUE7O0FBRUEsd0JBQXdCLG1CQUFPLENBQUMsaUZBQXNCO0FBQ3RELHlCQUF5QixtQkFBTyxDQUFDLG1GQUF1QjtBQUN4RCxxQkFBcUIsbUJBQU8sQ0FBQywyRUFBbUI7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMsMkVBQW1CO0FBQ2hELGlCQUFpQixtQkFBTyxDQUFDLGlFQUFjO0FBQ3ZDLHNCQUFzQixtQkFBTyxDQUFDLHVGQUF5QjtBQUN2RCx3QkFBd0IsbUJBQU8sQ0FBQywyRkFBMkI7QUFDM0QsZUFBZSxtQkFBTyxDQUFDLHVFQUFpQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQ0E7O0FBRUEsa0JBQWtCLG1CQUFPLENBQUMsNkVBQW9COztBQUU5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxzRUFBaUI7QUFDdkMsb0JBQW9CLG1CQUFPLENBQUMsb0ZBQXdCO0FBQ3BELHdCQUF3QixtQkFBTyxDQUFDLDRGQUE0QjtBQUM1RCxnQkFBZ0IsbUJBQU8sQ0FBQyw0RUFBb0I7QUFDNUMsaUJBQWlCLG1CQUFPLENBQUMsOEVBQXFCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RNQTs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyx3RkFBMEI7QUFDbkQsd0JBQXdCLG1CQUFPLENBQUMsc0dBQWlDO0FBQ2pFLGlCQUFpQixtQkFBTyxDQUFDLHdGQUEwQjtBQUNuRCxtQkFBbUIsbUJBQU8sQ0FBQyw0RkFBNEI7O0FBRXZEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQSxvQkFBb0IsbUJBQU8sQ0FBQyw4RkFBNkI7O0FBRXpELGtCQUFrQixtQkFBTyxDQUFDLGdGQUFpQjs7QUFFM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsaUJBQWlCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkRBOztBQUVBLHVCQUF1QixtQkFBTyxDQUFDLG9HQUFnQzs7QUFFL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDMUJBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw0RkFBOEI7QUFDbkQsd0JBQXdCLG1CQUFPLENBQUMsc0dBQWlDO0FBQ2pFLGlCQUFpQixtQkFBTyxDQUFDLHdGQUEwQjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQyxnR0FBOEI7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7O0FBRUEseUJBQXlCLG1CQUFPLENBQUMsMEdBQW1DO0FBQ3BFLGdDQUFnQyxtQkFBTyxDQUFDLDRIQUE0Qzs7QUFFcEYsaUJBQWlCLG1CQUFPLENBQUMsOEVBQXFCO0FBQzlDLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFpQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxzQkFBc0I7QUFDeEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0Msc0JBQXNCO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhDQUE4QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDNUpBO0FBQ0E7O0FBRUEseUJBQXlCLG1CQUFPLENBQUMsMEdBQW1DOztBQUVwRSxvQkFBb0IsbUJBQU8sQ0FBQyxvRkFBd0I7QUFDcEQsaUJBQWlCLG1CQUFPLENBQUMsOEVBQXFCO0FBQzlDLGtCQUFrQixtQkFBTyxDQUFDLGdGQUFpQjs7QUFFM0MsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLG1CQUFPLENBQUMsMEdBQW1DOztBQUVwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVkQTs7QUFFQSx5QkFBeUIsbUJBQU8sQ0FBQywwR0FBbUM7QUFDcEUsZ0NBQWdDLG1CQUFPLENBQUMsNEhBQTRDO0FBQ3BGLG9CQUFvQixtQkFBTyxDQUFDLDhGQUE2QjtBQUN6RCxpQkFBaUIsbUJBQU8sQ0FBQyx3RkFBMEI7QUFDbkQsd0JBQXdCLG1CQUFPLENBQUMsc0dBQWlDOztBQUVqRSxrQkFBa0IsbUJBQU8sQ0FBQyxnRkFBaUI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDamFBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsbUJBQU8sQ0FBQyw0SEFBNEM7O0FBRXBGLDBCQUEwQixtQkFBTyxDQUFDLGdHQUE4QjtBQUNoRSxvQkFBb0IsbUJBQU8sQ0FBQyxvRkFBd0I7QUFDcEQsaUJBQWlCLG1CQUFPLENBQUMsOEVBQXFCO0FBQzlDLGNBQWMsbUJBQU8sQ0FBQyxzRUFBaUI7QUFDdkMsd0JBQXdCLG1CQUFPLENBQUMsNEZBQXVCO0FBQ3ZELGtCQUFrQixtQkFBTyxDQUFDLGdGQUFpQjtBQUMzQyx1QkFBdUIsbUJBQU8sQ0FBQywwRkFBc0I7QUFDckQsa0JBQWtCLG1CQUFPLENBQUMsZ0ZBQWlCOztBQUUzQyxnQkFBZ0I7QUFDaEIscUJBQXFCO0FBQ3JCLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVDQUF1QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxnQkFBZ0I7QUFDcEUsK0NBQStDLFdBQVc7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL01BOztBQUVBOztBQVFBOztBQXVCQTtBQUNBLElBQU1ZLFNBQVMsR0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjs7QUFFckY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0IsV0FBVzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFFWTs7QUFFWixZQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRFk7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRZOztBQUVaOztBQUVBLG1CQUFtQixtQkFBTyxDQUFDLGdIQUEwQjs7QUFFckQ7QUFDQTtBQUNB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QUE7QUFBQSxpQkFDUSxrSUFEUjs7QUFBQTtBQUNiQyxzQkFEYTtBQUFBLDJDQUVaO0FBQUVILDBCQUFjLEVBQUVHLFlBQVk7QUFBOUIsV0FGWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQUtlSixtRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMseVJBQTBKOztBQUU1TDs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSx5UkFBMEo7QUFDaEs7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx5UkFBMEo7O0FBRXBMOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg3ZjBlZWJjYjU1NzQ5YzlkNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e1wibXktNSBwdC01IHRleHQtbXV0ZWQgdGV4dC1jZW50ZXIgdGV4dC1zbWFsbFwifT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtcIm1iLTFcIn0+XHJcbiAgICAgICAgICAgICAgICBDcmVhdGVkIGJ5IG93ZW5sb3dcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7TmF2LCBOYXZiYXJ9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHBhdGhzIGZyb20gJy4uL2NvbnN0YW50cy9wYXRocyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe2N1cnJlbnRQYWdlfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0gZXhwYW5kPVwibGdcIj5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj17cGF0aHMubGFuZGluZy51cmx9Pm93ZW5sb3cuY29tPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiLz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhwYXRocykubWFwKHBhdGhEYXRhID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYXRoRGF0YS51cmx9IGtleT17cGF0aERhdGEuaWR9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBhY3RpdmU9e3BhdGhEYXRhLmlkID09PSBjdXJyZW50UGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXRoRGF0YS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vSGVhZGVyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vSGVhZGVyLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vSGVhZGVyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xheW91dC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHtjaGlsZHJlbiwgY3VycmVudFBhZ2V9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5hcHBDb250YWluZXIsICdkLWZsZXgnLCAnZmxleC1jb2x1bW4nLCAnaC0xMDAnLCAnbXgtYXV0bycpfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+b3dlbidzIHNpdGU8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e1wiL2Zhdmljb24uaWNvXCJ9Lz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj17J2h0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN3YXRjaC80LjUuMi9zaW1wbGV4L2Jvb3RzdHJhcC5taW4uY3NzJ30vPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfS8+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9MYXlvdXQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9MYXlvdXQubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9MYXlvdXQubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBsYW5kaW5nOiB7XHJcbiAgICAgICAgaWQ6ICdsYW5kaW5nJyxcclxuICAgICAgICBuYW1lOiAnSG9tZScsXHJcbiAgICAgICAgdXJsOiAnLydcclxuICAgIH0sXHJcbiAgICBwcm9qZWN0czoge1xyXG4gICAgICAgIGlkOiAncHJvamVjdHMnLFxyXG4gICAgICAgIG5hbWU6ICdQcm9qZWN0cycsXHJcbiAgICAgICAgdXJsOiAnL3Byb2plY3RzJ1xyXG4gICAgfVxyXG59O1xyXG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBiYWlsXG5cbmZ1bmN0aW9uIGJhaWwoZXJyKSB7XG4gIGlmIChlcnIpIHtcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhlYWRlcl9uYXZiYXJfXzJ2V1JwIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9IZWFkZXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdmJhciB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibmF2YmFyXCI6IFwiSGVhZGVyX25hdmJhcl9fMnZXUnBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTGF5b3V0X2FwcENvbnRhaW5lcl9fM215M2oge1xcclxcbiAgICBtYXgtd2lkdGg6IDQyZW07XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL0xheW91dC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXBwQ29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MmVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJhcHBDb250YWluZXJcIjogXCJMYXlvdXRfYXBwQ29udGFpbmVyX18zbXkzalwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbmRleF9jb250ZW50Q29udGFpbmVyX18xYnhOcCB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcGFnZXMvaW5kZXgubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnRDb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGVudENvbnRhaW5lclwiOiBcImluZGV4X2NvbnRlbnRDb250YWluZXJfXzFieE5wXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcblx0aWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0fVxuXG5cdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdGlmICghb2JqIHx8IHRvU3RyLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd24uY2FsbChvYmosICdjb25zdHJ1Y3RvcicpO1xuXHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3Rcblx0aWYgKG9iai5jb25zdHJ1Y3RvciAmJiAhaGFzT3duQ29uc3RydWN0b3IgJiYgIWhhc0lzUHJvdG90eXBlT2YpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0Ly8gaWYgbGFzdCBvbmUgaXMgb3duLCB0aGVuIGFsbCBwcm9wZXJ0aWVzIGFyZSBvd24uXG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIG9iaikgeyAvKiovIH1cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxuLy8gSWYgbmFtZSBpcyAnX19wcm90b19fJywgYW5kIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBpcyBhdmFpbGFibGUsIGRlZmluZSBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5IG9uIHRhcmdldFxudmFyIHNldFByb3BlcnR5ID0gZnVuY3Rpb24gc2V0UHJvcGVydHkodGFyZ2V0LCBvcHRpb25zKSB7XG5cdGlmIChkZWZpbmVQcm9wZXJ0eSAmJiBvcHRpb25zLm5hbWUgPT09ICdfX3Byb3RvX18nKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBvcHRpb25zLm5hbWUsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogb3B0aW9ucy5uZXdWYWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dGFyZ2V0W29wdGlvbnMubmFtZV0gPSBvcHRpb25zLm5ld1ZhbHVlO1xuXHR9XG59O1xuXG4vLyBSZXR1cm4gdW5kZWZpbmVkIGluc3RlYWQgb2YgX19wcm90b19fIGlmICdfX3Byb3RvX18nIGlzIG5vdCBhbiBvd24gcHJvcGVydHlcbnZhciBnZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgbmFtZSkge1xuXHRpZiAobmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRpZiAoIWhhc093bi5jYWxsKG9iaiwgbmFtZSkpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fSBlbHNlIGlmIChnT1BEKSB7XG5cdFx0XHQvLyBJbiBlYXJseSB2ZXJzaW9ucyBvZiBub2RlLCBvYmpbJ19fcHJvdG9fXyddIGlzIGJ1Z2d5IHdoZW4gb2JqIGhhc1xuXHRcdFx0Ly8gX19wcm90b19fIGFzIGFuIG93biBwcm9wZXJ0eS4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigpIHdvcmtzLlxuXHRcdFx0cmV0dXJuIGdPUEQob2JqLCBuYW1lKS52YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2JqW25hbWVdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZTtcblx0dmFyIHRhcmdldCA9IGFyZ3VtZW50c1swXTtcblx0dmFyIGkgPSAxO1xuXHR2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0dmFyIGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH1cblx0aWYgKHRhcmdldCA9PSBudWxsIHx8ICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IGdldFByb3BlcnR5KHRhcmdldCwgbmFtZSk7XG5cdFx0XHRcdGNvcHkgPSBnZXRQcm9wZXJ0eShvcHRpb25zLCBuYW1lKTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0c2V0UHJvcGVydHkodGFyZ2V0LCB7IG5hbWU6IG5hbWUsIG5ld1ZhbHVlOiBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpIH0pO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGNvcHkgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWUgPT4ge1xuXHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuXHRyZXR1cm4gcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LnByb3RvdHlwZTtcbn07XG4iLCJ2YXIgdmlzaXRXaXRoUGFyZW50cyA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpO1xuXG5mdW5jdGlvbiBhZGRMaXN0TWV0YWRhdGEoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYXN0KSB7XG4gICAgdmlzaXRXaXRoUGFyZW50cyhhc3QsICdsaXN0JywgZnVuY3Rpb24gKGxpc3ROb2RlLCBwYXJlbnRzKSB7XG4gICAgICB2YXIgZGVwdGggPSAwLCBpLCBuO1xuICAgICAgZm9yIChpID0gMCwgbiA9IHBhcmVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGlmIChwYXJlbnRzW2ldLnR5cGUgPT09ICdsaXN0JykgZGVwdGggKz0gMTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDAsIG4gPSBsaXN0Tm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbGlzdE5vZGUuY2hpbGRyZW5baV07XG4gICAgICAgIGNoaWxkLmluZGV4ID0gaTtcbiAgICAgICAgY2hpbGQub3JkZXJlZCA9IGxpc3ROb2RlLm9yZGVyZWQ7XG4gICAgICB9XG4gICAgICBsaXN0Tm9kZS5kZXB0aCA9IGRlcHRoO1xuICAgIH0pO1xuICAgIHJldHVybiBhc3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTGlzdE1ldGFkYXRhO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbU1hcmtkb3duXG5cbi8vIFRoZXNlIHRocmVlIGFyZSBjb21waWxlZCBhd2F5IGluIHRoZSBgZGlzdC9gXG5cbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcy9kZWNvZGUtZW50aXR5JylcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tc3RyaW5nJylcbnZhciBvd24gPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jb25zdGFudC9oYXMtb3duLXByb3BlcnR5JylcbnZhciBub3JtYWxpemVJZGVudGlmaWVyID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9ub3JtYWxpemUtaWRlbnRpZmllcicpXG52YXIgc2FmZUZyb21JbnQgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC91dGlsL3NhZmUtZnJvbS1pbnQnKVxudmFyIHBhcnNlciA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3BhcnNlJylcbnZhciBwcmVwcm9jZXNzb3IgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9wcmVwcm9jZXNzJylcbnZhciBwb3N0cHJvY2VzcyA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3Bvc3Rwcm9jZXNzJylcblxuZnVuY3Rpb24gZnJvbU1hcmtkb3duKHZhbHVlLCBlbmNvZGluZywgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgIG9wdGlvbnMgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gY29tcGlsZXIob3B0aW9ucykoXG4gICAgcG9zdHByb2Nlc3MoXG4gICAgICBwYXJzZXIob3B0aW9ucykuZG9jdW1lbnQoKS53cml0ZShwcmVwcm9jZXNzb3IoKSh2YWx1ZSwgZW5jb2RpbmcsIHRydWUpKVxuICAgIClcbiAgKVxufVxuXG4vLyBOb3RlIHRoaXMgY29tcGlsZXIgb25seSB1bmRlcnN0YW5kIGNvbXBsZXRlIGJ1ZmZlcmluZywgbm90IHN0cmVhbWluZy5cbmZ1bmN0aW9uIGNvbXBpbGVyKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgY29uZmlnID0gY29uZmlndXJlKFxuICAgIHtcbiAgICAgIGNhbkNvbnRhaW5Fb2xzOiBbXG4gICAgICAgICdlbXBoYXNpcycsXG4gICAgICAgICdmcmFnbWVudCcsXG4gICAgICAgICdoZWFkaW5nJyxcbiAgICAgICAgJ3BhcmFncmFwaCcsXG4gICAgICAgICdzdHJvbmcnXG4gICAgICBdLFxuXG4gICAgICBlbnRlcjoge1xuICAgICAgICBhdXRvbGluazogb3BlbmVyKGxpbmspLFxuICAgICAgICBhdXRvbGlua1Byb3RvY29sOiBvbmVudGVyZGF0YSxcbiAgICAgICAgYXV0b2xpbmtFbWFpbDogb25lbnRlcmRhdGEsXG4gICAgICAgIGF0eEhlYWRpbmc6IG9wZW5lcihoZWFkaW5nKSxcbiAgICAgICAgYmxvY2tRdW90ZTogb3BlbmVyKGJsb2NrUXVvdGUpLFxuICAgICAgICBjaGFyYWN0ZXJFc2NhcGU6IG9uZW50ZXJkYXRhLFxuICAgICAgICBjaGFyYWN0ZXJSZWZlcmVuY2U6IG9uZW50ZXJkYXRhLFxuICAgICAgICBjb2RlRmVuY2VkOiBvcGVuZXIoY29kZUZsb3cpLFxuICAgICAgICBjb2RlRmVuY2VkRmVuY2VJbmZvOiBidWZmZXIsXG4gICAgICAgIGNvZGVGZW5jZWRGZW5jZU1ldGE6IGJ1ZmZlcixcbiAgICAgICAgY29kZUluZGVudGVkOiBvcGVuZXIoY29kZUZsb3csIGJ1ZmZlciksXG4gICAgICAgIGNvZGVUZXh0OiBvcGVuZXIoY29kZVRleHQsIGJ1ZmZlciksXG4gICAgICAgIGNvZGVUZXh0RGF0YTogb25lbnRlcmRhdGEsXG4gICAgICAgIGRhdGE6IG9uZW50ZXJkYXRhLFxuICAgICAgICBjb2RlRmxvd1ZhbHVlOiBvbmVudGVyZGF0YSxcbiAgICAgICAgZGVmaW5pdGlvbjogb3BlbmVyKGRlZmluaXRpb24pLFxuICAgICAgICBkZWZpbml0aW9uRGVzdGluYXRpb25TdHJpbmc6IGJ1ZmZlcixcbiAgICAgICAgZGVmaW5pdGlvbkxhYmVsU3RyaW5nOiBidWZmZXIsXG4gICAgICAgIGRlZmluaXRpb25UaXRsZVN0cmluZzogYnVmZmVyLFxuICAgICAgICBlbXBoYXNpczogb3BlbmVyKGVtcGhhc2lzKSxcbiAgICAgICAgaGFyZEJyZWFrRXNjYXBlOiBvcGVuZXIoaGFyZEJyZWFrKSxcbiAgICAgICAgaGFyZEJyZWFrVHJhaWxpbmc6IG9wZW5lcihoYXJkQnJlYWspLFxuICAgICAgICBodG1sRmxvdzogb3BlbmVyKGh0bWwsIGJ1ZmZlciksXG4gICAgICAgIGh0bWxGbG93RGF0YTogb25lbnRlcmRhdGEsXG4gICAgICAgIGh0bWxUZXh0OiBvcGVuZXIoaHRtbCwgYnVmZmVyKSxcbiAgICAgICAgaHRtbFRleHREYXRhOiBvbmVudGVyZGF0YSxcbiAgICAgICAgaW1hZ2U6IG9wZW5lcihpbWFnZSksXG4gICAgICAgIGxhYmVsOiBidWZmZXIsXG4gICAgICAgIGxpbms6IG9wZW5lcihsaW5rKSxcbiAgICAgICAgbGlzdEl0ZW06IG9wZW5lcihsaXN0SXRlbSksXG4gICAgICAgIGxpc3RJdGVtVmFsdWU6IG9uZW50ZXJsaXN0aXRlbXZhbHVlLFxuICAgICAgICBsaXN0T3JkZXJlZDogb3BlbmVyKGxpc3QsIG9uZW50ZXJsaXN0b3JkZXJlZCksXG4gICAgICAgIGxpc3RVbm9yZGVyZWQ6IG9wZW5lcihsaXN0KSxcbiAgICAgICAgcGFyYWdyYXBoOiBvcGVuZXIocGFyYWdyYXBoKSxcbiAgICAgICAgcmVmZXJlbmNlOiBvbmVudGVycmVmZXJlbmNlLFxuICAgICAgICByZWZlcmVuY2VTdHJpbmc6IGJ1ZmZlcixcbiAgICAgICAgcmVzb3VyY2VEZXN0aW5hdGlvblN0cmluZzogYnVmZmVyLFxuICAgICAgICByZXNvdXJjZVRpdGxlU3RyaW5nOiBidWZmZXIsXG4gICAgICAgIHNldGV4dEhlYWRpbmc6IG9wZW5lcihoZWFkaW5nKSxcbiAgICAgICAgc3Ryb25nOiBvcGVuZXIoc3Ryb25nKSxcbiAgICAgICAgdGhlbWF0aWNCcmVhazogb3BlbmVyKHRoZW1hdGljQnJlYWspXG4gICAgICB9LFxuXG4gICAgICBleGl0OiB7XG4gICAgICAgIGF0eEhlYWRpbmc6IGNsb3NlcigpLFxuICAgICAgICBhdHhIZWFkaW5nU2VxdWVuY2U6IG9uZXhpdGF0eGhlYWRpbmdzZXF1ZW5jZSxcbiAgICAgICAgYXV0b2xpbms6IGNsb3NlcigpLFxuICAgICAgICBhdXRvbGlua0VtYWlsOiBvbmV4aXRhdXRvbGlua2VtYWlsLFxuICAgICAgICBhdXRvbGlua1Byb3RvY29sOiBvbmV4aXRhdXRvbGlua3Byb3RvY29sLFxuICAgICAgICBibG9ja1F1b3RlOiBjbG9zZXIoKSxcbiAgICAgICAgY2hhcmFjdGVyRXNjYXBlVmFsdWU6IG9uZXhpdGRhdGEsXG4gICAgICAgIGNoYXJhY3RlclJlZmVyZW5jZU1hcmtlckhleGFkZWNpbWFsOiBvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2VtYXJrZXIsXG4gICAgICAgIGNoYXJhY3RlclJlZmVyZW5jZU1hcmtlck51bWVyaWM6IG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZW1hcmtlcixcbiAgICAgICAgY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWU6IGNsb3NlcihvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2V2YWx1ZSksXG4gICAgICAgIGNvZGVGZW5jZWQ6IGNsb3NlcihvbmV4aXRjb2RlZmVuY2VkKSxcbiAgICAgICAgY29kZUZlbmNlZEZlbmNlOiBvbmV4aXRjb2RlZmVuY2VkZmVuY2UsXG4gICAgICAgIGNvZGVGZW5jZWRGZW5jZUluZm86IG9uZXhpdGNvZGVmZW5jZWRmZW5jZWluZm8sXG4gICAgICAgIGNvZGVGZW5jZWRGZW5jZU1ldGE6IG9uZXhpdGNvZGVmZW5jZWRmZW5jZW1ldGEsXG4gICAgICAgIGNvZGVGbG93VmFsdWU6IG9uZXhpdGRhdGEsXG4gICAgICAgIGNvZGVJbmRlbnRlZDogY2xvc2VyKG9uZXhpdGNvZGVpbmRlbnRlZCksXG4gICAgICAgIGNvZGVUZXh0OiBjbG9zZXIob25leGl0Y29kZXRleHQpLFxuICAgICAgICBjb2RlVGV4dERhdGE6IG9uZXhpdGRhdGEsXG4gICAgICAgIGRhdGE6IG9uZXhpdGRhdGEsXG4gICAgICAgIGRlZmluaXRpb246IGNsb3NlcigpLFxuICAgICAgICBkZWZpbml0aW9uRGVzdGluYXRpb25TdHJpbmc6IG9uZXhpdGRlZmluaXRpb25kZXN0aW5hdGlvbnN0cmluZyxcbiAgICAgICAgZGVmaW5pdGlvbkxhYmVsU3RyaW5nOiBvbmV4aXRkZWZpbml0aW9ubGFiZWxzdHJpbmcsXG4gICAgICAgIGRlZmluaXRpb25UaXRsZVN0cmluZzogb25leGl0ZGVmaW5pdGlvbnRpdGxlc3RyaW5nLFxuICAgICAgICBlbXBoYXNpczogY2xvc2VyKCksXG4gICAgICAgIGhhcmRCcmVha0VzY2FwZTogY2xvc2VyKG9uZXhpdGhhcmRicmVhayksXG4gICAgICAgIGhhcmRCcmVha1RyYWlsaW5nOiBjbG9zZXIob25leGl0aGFyZGJyZWFrKSxcbiAgICAgICAgaHRtbEZsb3c6IGNsb3NlcihvbmV4aXRodG1sZmxvdyksXG4gICAgICAgIGh0bWxGbG93RGF0YTogb25leGl0ZGF0YSxcbiAgICAgICAgaHRtbFRleHQ6IGNsb3NlcihvbmV4aXRodG1sdGV4dCksXG4gICAgICAgIGh0bWxUZXh0RGF0YTogb25leGl0ZGF0YSxcbiAgICAgICAgaW1hZ2U6IGNsb3NlcihvbmV4aXRpbWFnZSksXG4gICAgICAgIGxhYmVsOiBvbmV4aXRsYWJlbCxcbiAgICAgICAgbGFiZWxUZXh0OiBvbmV4aXRsYWJlbHRleHQsXG4gICAgICAgIGxpbmVFbmRpbmc6IG9uZXhpdGxpbmVlbmRpbmcsXG4gICAgICAgIGxpbms6IGNsb3NlcihvbmV4aXRsaW5rKSxcbiAgICAgICAgbGlzdEl0ZW06IGNsb3NlcigpLFxuICAgICAgICBsaXN0T3JkZXJlZDogY2xvc2VyKCksXG4gICAgICAgIGxpc3RVbm9yZGVyZWQ6IGNsb3NlcigpLFxuICAgICAgICBwYXJhZ3JhcGg6IGNsb3NlcigpLFxuICAgICAgICByZWZlcmVuY2VTdHJpbmc6IG9uZXhpdHJlZmVyZW5jZXN0cmluZyxcbiAgICAgICAgcmVzb3VyY2VEZXN0aW5hdGlvblN0cmluZzogb25leGl0cmVzb3VyY2VkZXN0aW5hdGlvbnN0cmluZyxcbiAgICAgICAgcmVzb3VyY2VUaXRsZVN0cmluZzogb25leGl0cmVzb3VyY2V0aXRsZXN0cmluZyxcbiAgICAgICAgcmVzb3VyY2U6IG9uZXhpdHJlc291cmNlLFxuICAgICAgICBzZXRleHRIZWFkaW5nOiBjbG9zZXIob25leGl0c2V0ZXh0aGVhZGluZyksXG4gICAgICAgIHNldGV4dEhlYWRpbmdMaW5lU2VxdWVuY2U6IG9uZXhpdHNldGV4dGhlYWRpbmdsaW5lc2VxdWVuY2UsXG4gICAgICAgIHNldGV4dEhlYWRpbmdUZXh0OiBvbmV4aXRzZXRleHRoZWFkaW5ndGV4dCxcbiAgICAgICAgc3Ryb25nOiBjbG9zZXIoKSxcbiAgICAgICAgdGhlbWF0aWNCcmVhazogY2xvc2VyKClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0dGluZ3MubWRhc3RFeHRlbnNpb25zIHx8IFtdXG4gIClcblxuICB2YXIgZGF0YSA9IHt9XG5cbiAgcmV0dXJuIGNvbXBpbGVcblxuICBmdW5jdGlvbiBjb21waWxlKGV2ZW50cykge1xuICAgIHZhciBzdGFjayA9IFt7dHlwZTogJ3Jvb3QnLCBjaGlsZHJlbjogW119XVxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGxpc3RTdGFjayA9IFtdXG4gICAgdmFyIGxlbmd0aFxuICAgIHZhciBoYW5kbGVyXG4gICAgdmFyIGxpc3RTdGFydFxuICAgIHZhciBldmVudFxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgICBldmVudCA9IGV2ZW50c1tpbmRleF1cblxuICAgICAgLy8gV2UgcHJlcHJvY2VzcyBsaXN0cyB0byBhZGQgYGxpc3RJdGVtYCB0b2tlbnMsIGFuZCB0byBpbmZlciB3aGV0aGVyXG4gICAgICAvLyBpdGVtcyB0aGUgbGlzdCBpdHNlbGYgYXJlIHNwcmVhZCBvdXQuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0T3JkZXJlZCcgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RVbm9yZGVyZWQnXG4gICAgICApIHtcbiAgICAgICAgaWYgKGV2ZW50WzBdID09PSAnZW50ZXInKSB7XG4gICAgICAgICAgbGlzdFN0YWNrLnB1c2goaW5kZXgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdFN0YXJ0ID0gbGlzdFN0YWNrLnBvcChpbmRleClcbiAgICAgICAgICBpbmRleCA9IHByZXBhcmVMaXN0KGV2ZW50cywgbGlzdFN0YXJ0LCBpbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4ID0gLTFcbiAgICBsZW5ndGggPSBldmVudHMubGVuZ3RoXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaGFuZGxlciA9IGNvbmZpZ1tldmVudHNbaW5kZXhdWzBdXVxuXG4gICAgICBpZiAob3duLmNhbGwoaGFuZGxlciwgZXZlbnRzW2luZGV4XVsxXS50eXBlKSkge1xuICAgICAgICBoYW5kbGVyW2V2ZW50c1tpbmRleF1bMV0udHlwZV0uY2FsbChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGFjazogc3RhY2ssXG4gICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgIGVudGVyOiBlbnRlcixcbiAgICAgICAgICAgIGV4aXQ6IGV4aXQsXG4gICAgICAgICAgICBidWZmZXI6IGJ1ZmZlcixcbiAgICAgICAgICAgIHJlc3VtZTogcmVzdW1lLFxuICAgICAgICAgICAgc2xpY2VTZXJpYWxpemU6IGV2ZW50c1tpbmRleF1bMl0uc2xpY2VTZXJpYWxpemUsXG4gICAgICAgICAgICBzZXREYXRhOiBzZXREYXRhLFxuICAgICAgICAgICAgZ2V0RGF0YTogZ2V0RGF0YVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBldmVudHNbaW5kZXhdWzFdXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGaWd1cmUgb3V0IGByb290YCBwb3NpdGlvbi5cbiAgICBzdGFja1swXS5wb3NpdGlvbiA9IHtcbiAgICAgIHN0YXJ0OiBwb2ludChcbiAgICAgICAgbGVuZ3RoID8gZXZlbnRzWzBdWzFdLnN0YXJ0IDoge2xpbmU6IDEsIGNvbHVtbjogMSwgb2Zmc2V0OiAwfVxuICAgICAgKSxcblxuICAgICAgZW5kOiBwb2ludChcbiAgICAgICAgbGVuZ3RoXG4gICAgICAgICAgPyBldmVudHNbZXZlbnRzLmxlbmd0aCAtIDJdWzFdLmVuZFxuICAgICAgICAgIDoge2xpbmU6IDEsIGNvbHVtbjogMSwgb2Zmc2V0OiAwfVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBzdGFja1swXVxuICB9XG5cbiAgZnVuY3Rpb24gcHJlcGFyZUxpc3QoZXZlbnRzLCBzdGFydCwgbGVuZ3RoKSB7XG4gICAgdmFyIGluZGV4ID0gc3RhcnQgLSAxXG4gICAgdmFyIGNvbnRhaW5lckJhbGFuY2UgPSAtMVxuICAgIHZhciBsaXN0U3ByZWFkID0gZmFsc2VcbiAgICB2YXIgbGlzdEl0ZW1cbiAgICB2YXIgdGFpbEluZGV4XG4gICAgdmFyIGxpbmVJbmRleFxuICAgIHZhciB0YWlsRXZlbnRcbiAgICB2YXIgZXZlbnRcbiAgICB2YXIgZmlyc3RCbGFua0xpbmVJbmRleFxuICAgIHZhciBhdE1hcmtlclxuXG4gICAgd2hpbGUgKCsraW5kZXggPD0gbGVuZ3RoKSB7XG4gICAgICBldmVudCA9IGV2ZW50c1tpbmRleF1cblxuICAgICAgaWYgKFxuICAgICAgICBldmVudFsxXS50eXBlID09PSAnbGlzdFVub3JkZXJlZCcgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RPcmRlcmVkJyB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSAnYmxvY2tRdW90ZSdcbiAgICAgICkge1xuICAgICAgICBpZiAoZXZlbnRbMF0gPT09ICdlbnRlcicpIHtcbiAgICAgICAgICBjb250YWluZXJCYWxhbmNlKytcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXJCYWxhbmNlLS1cbiAgICAgICAgfVxuXG4gICAgICAgIGF0TWFya2VyID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50WzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nQmxhbmsnKSB7XG4gICAgICAgIGlmIChldmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGxpc3RJdGVtICYmXG4gICAgICAgICAgICAhYXRNYXJrZXIgJiZcbiAgICAgICAgICAgICFjb250YWluZXJCYWxhbmNlICYmXG4gICAgICAgICAgICAhZmlyc3RCbGFua0xpbmVJbmRleFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZmlyc3RCbGFua0xpbmVJbmRleCA9IGluZGV4XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXRNYXJrZXIgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVQcmVmaXgnIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbVZhbHVlJyB8fFxuICAgICAgICBldmVudFsxXS50eXBlID09PSAnbGlzdEl0ZW1NYXJrZXInIHx8XG4gICAgICAgIGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbVByZWZpeCcgfHxcbiAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZSdcbiAgICAgICkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0TWFya2VyID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFjb250YWluZXJCYWxhbmNlICYmXG4gICAgICAgICAgZXZlbnRbMF0gPT09ICdlbnRlcicgJiZcbiAgICAgICAgICBldmVudFsxXS50eXBlID09PSAnbGlzdEl0ZW1QcmVmaXgnKSB8fFxuICAgICAgICAoY29udGFpbmVyQmFsYW5jZSA9PT0gLTEgJiZcbiAgICAgICAgICBldmVudFswXSA9PT0gJ2V4aXQnICYmXG4gICAgICAgICAgKGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0VW5vcmRlcmVkJyB8fFxuICAgICAgICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2xpc3RPcmRlcmVkJykpXG4gICAgICApIHtcbiAgICAgICAgaWYgKGxpc3RJdGVtKSB7XG4gICAgICAgICAgdGFpbEluZGV4ID0gaW5kZXhcbiAgICAgICAgICBsaW5lSW5kZXggPSB1bmRlZmluZWRcblxuICAgICAgICAgIHdoaWxlICh0YWlsSW5kZXgtLSkge1xuICAgICAgICAgICAgdGFpbEV2ZW50ID0gZXZlbnRzW3RhaWxJbmRleF1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmcnIHx8XG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSAnbGluZUVuZGluZ0JsYW5rJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGlmICh0YWlsRXZlbnRbMF0gPT09ICdleGl0JykgY29udGludWVcblxuICAgICAgICAgICAgICBpZiAobGluZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgZXZlbnRzW2xpbmVJbmRleF1bMV0udHlwZSA9ICdsaW5lRW5kaW5nQmxhbmsnXG4gICAgICAgICAgICAgICAgbGlzdFNwcmVhZCA9IHRydWVcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID0gJ2xpbmVFbmRpbmcnXG4gICAgICAgICAgICAgIGxpbmVJbmRleCA9IHRhaWxJbmRleFxuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09ICdsaW5lUHJlZml4JyB8fFxuICAgICAgICAgICAgICB0YWlsRXZlbnRbMV0udHlwZSA9PT0gJ2Jsb2NrUXVvdGVQcmVmaXgnIHx8XG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSAnYmxvY2tRdW90ZVByZWZpeFdoaXRlc3BhY2UnIHx8XG4gICAgICAgICAgICAgIHRhaWxFdmVudFsxXS50eXBlID09PSAnYmxvY2tRdW90ZU1hcmtlcicgfHxcbiAgICAgICAgICAgICAgdGFpbEV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbUluZGVudCdcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyBFbXB0eVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBmaXJzdEJsYW5rTGluZUluZGV4ICYmXG4gICAgICAgICAgICAoIWxpbmVJbmRleCB8fCBmaXJzdEJsYW5rTGluZUluZGV4IDwgbGluZUluZGV4KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbGlzdEl0ZW0uX3NwcmVhZCA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBGaXggcG9zaXRpb24uXG4gICAgICAgICAgbGlzdEl0ZW0uZW5kID0gcG9pbnQoXG4gICAgICAgICAgICBsaW5lSW5kZXggPyBldmVudHNbbGluZUluZGV4XVsxXS5zdGFydCA6IGV2ZW50WzFdLmVuZFxuICAgICAgICAgIClcblxuICAgICAgICAgIGV2ZW50cy5zcGxpY2UobGluZUluZGV4IHx8IGluZGV4LCAwLCBbJ2V4aXQnLCBsaXN0SXRlbSwgZXZlbnRbMl1dKVxuICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICBsZW5ndGgrK1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGxpc3QgaXRlbS5cbiAgICAgICAgaWYgKGV2ZW50WzFdLnR5cGUgPT09ICdsaXN0SXRlbVByZWZpeCcpIHtcbiAgICAgICAgICBsaXN0SXRlbSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdsaXN0SXRlbScsXG4gICAgICAgICAgICBfc3ByZWFkOiBmYWxzZSxcbiAgICAgICAgICAgIHN0YXJ0OiBwb2ludChldmVudFsxXS5zdGFydClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBldmVudHMuc3BsaWNlKGluZGV4LCAwLCBbJ2VudGVyJywgbGlzdEl0ZW0sIGV2ZW50WzJdXSlcbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgbGVuZ3RoKytcbiAgICAgICAgICBmaXJzdEJsYW5rTGluZUluZGV4ID0gdW5kZWZpbmVkXG4gICAgICAgICAgYXRNYXJrZXIgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHNbc3RhcnRdWzFdLl9zcHJlYWQgPSBsaXN0U3ByZWFkXG4gICAgcmV0dXJuIGxlbmd0aFxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RGF0YShrZXksIHZhbHVlKSB7XG4gICAgZGF0YVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEoa2V5KSB7XG4gICAgcmV0dXJuIGRhdGFba2V5XVxuICB9XG5cbiAgZnVuY3Rpb24gcG9pbnQoZCkge1xuICAgIHJldHVybiB7bGluZTogZC5saW5lLCBjb2x1bW46IGQuY29sdW1uLCBvZmZzZXQ6IGQub2Zmc2V0fVxuICB9XG5cbiAgZnVuY3Rpb24gb3BlbmVyKGNyZWF0ZSwgYW5kKSB7XG4gICAgcmV0dXJuIG9wZW5cblxuICAgIGZ1bmN0aW9uIG9wZW4odG9rZW4pIHtcbiAgICAgIGVudGVyLmNhbGwodGhpcywgY3JlYXRlKHRva2VuKSwgdG9rZW4pXG4gICAgICBpZiAoYW5kKSBhbmQuY2FsbCh0aGlzLCB0b2tlbilcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXIoKSB7XG4gICAgdGhpcy5zdGFjay5wdXNoKHt0eXBlOiAnZnJhZ21lbnQnLCBjaGlsZHJlbjogW119KVxuICB9XG5cbiAgZnVuY3Rpb24gZW50ZXIobm9kZSwgdG9rZW4pIHtcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaChub2RlKVxuICAgIHRoaXMuc3RhY2sucHVzaChub2RlKVxuICAgIG5vZGUucG9zaXRpb24gPSB7c3RhcnQ6IHBvaW50KHRva2VuLnN0YXJ0KX1cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VyKGFuZCkge1xuICAgIHJldHVybiBjbG9zZVxuXG4gICAgZnVuY3Rpb24gY2xvc2UodG9rZW4pIHtcbiAgICAgIGlmIChhbmQpIGFuZC5jYWxsKHRoaXMsIHRva2VuKVxuICAgICAgZXhpdC5jYWxsKHRoaXMsIHRva2VuKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXQodG9rZW4pIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMuc3RhY2sucG9wKClcbiAgICBub2RlLnBvc2l0aW9uLmVuZCA9IHBvaW50KHRva2VuLmVuZClcbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIHZhciB2YWx1ZSA9IHRvU3RyaW5nKHRoaXMuc3RhY2sucG9wKCkpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvL1xuICAvLyBIYW5kbGVycy5cbiAgLy9cblxuICBmdW5jdGlvbiBvbmVudGVybGlzdG9yZGVyZWQoKSB7XG4gICAgc2V0RGF0YSgnZXhwZWN0aW5nRmlyc3RMaXN0SXRlbVZhbHVlJywgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZW50ZXJsaXN0aXRlbXZhbHVlKHRva2VuKSB7XG4gICAgaWYgKGdldERhdGEoJ2V4cGVjdGluZ0ZpcnN0TGlzdEl0ZW1WYWx1ZScpKSB7XG4gICAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMl0uc3RhcnQgPSBwYXJzZUludChcbiAgICAgICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbiksXG4gICAgICAgIDEwXG4gICAgICApXG5cbiAgICAgIHNldERhdGEoJ2V4cGVjdGluZ0ZpcnN0TGlzdEl0ZW1WYWx1ZScpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWZlbmNlZGZlbmNlaW5mbygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0ubGFuZyA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGVmZW5jZWRmZW5jZW1ldGEoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLm1ldGEgPSBkYXRhXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRjb2RlZmVuY2VkZmVuY2UoKSB7XG4gICAgLy8gRXhpdCBpZiB0aGlzIGlzIHRoZSBjbG9zaW5nIGZlbmNlLlxuICAgIGlmIChnZXREYXRhKCdmbG93Q29kZUluc2lkZScpKSByZXR1cm5cbiAgICB0aGlzLmJ1ZmZlcigpXG4gICAgc2V0RGF0YSgnZmxvd0NvZGVJbnNpZGUnLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWZlbmNlZCgpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udmFsdWUgPSBkYXRhLnJlcGxhY2UoXG4gICAgICAvXihcXHI/XFxufFxccil8KFxccj9cXG58XFxyKSQvZyxcbiAgICAgICcnXG4gICAgKVxuXG4gICAgc2V0RGF0YSgnZmxvd0NvZGVJbnNpZGUnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0Y29kZWluZGVudGVkKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGRlZmluaXRpb25sYWJlbHN0cmluZyh0b2tlbikge1xuICAgIC8vIERpc2NhcmQgbGFiZWwsIHVzZSB0aGUgc291cmNlIGNvbnRlbnQgaW5zdGVhZC5cbiAgICB2YXIgbGFiZWwgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmxhYmVsID0gbGFiZWxcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICAgICkudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0ZGVmaW5pdGlvbnRpdGxlc3RyaW5nKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS50aXRsZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGRlZmluaXRpb25kZXN0aW5hdGlvbnN0cmluZygpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMucmVzdW1lKClcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udXJsID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0YXR4aGVhZGluZ3NlcXVlbmNlKHRva2VuKSB7XG4gICAgaWYgKCF0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uZGVwdGgpIHtcbiAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5kZXB0aCA9IHRoaXMuc2xpY2VTZXJpYWxpemUoXG4gICAgICAgIHRva2VuXG4gICAgICApLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHNldGV4dGhlYWRpbmd0ZXh0KCkge1xuICAgIHNldERhdGEoJ3NldGV4dEhlYWRpbmdTbHVycExpbmVFbmRpbmcnLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0c2V0ZXh0aGVhZGluZ2xpbmVzZXF1ZW5jZSh0b2tlbikge1xuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5kZXB0aCA9XG4gICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKS5jaGFyQ29kZUF0KDApID09PSA2MSA/IDEgOiAyXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRzZXRleHRoZWFkaW5nKCkge1xuICAgIHNldERhdGEoJ3NldGV4dEhlYWRpbmdTbHVycExpbmVFbmRpbmcnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbnRlcmRhdGEodG9rZW4pIHtcbiAgICB2YXIgc2libGluZ3MgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uY2hpbGRyZW5cbiAgICB2YXIgdGFpbCA9IHNpYmxpbmdzW3NpYmxpbmdzLmxlbmd0aCAtIDFdXG5cbiAgICBpZiAoIXRhaWwgfHwgdGFpbC50eXBlICE9PSAndGV4dCcpIHtcbiAgICAgIC8vIEFkZCBhIG5ldyB0ZXh0IG5vZGUuXG4gICAgICB0YWlsID0gdGV4dCgpXG4gICAgICB0YWlsLnBvc2l0aW9uID0ge3N0YXJ0OiBwb2ludCh0b2tlbi5zdGFydCl9XG4gICAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uY2hpbGRyZW4ucHVzaCh0YWlsKVxuICAgIH1cblxuICAgIHRoaXMuc3RhY2sucHVzaCh0YWlsKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0ZGF0YSh0b2tlbikge1xuICAgIHZhciB0YWlsID0gdGhpcy5zdGFjay5wb3AoKVxuICAgIHRhaWwudmFsdWUgKz0gdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgICB0YWlsLnBvc2l0aW9uLmVuZCA9IHBvaW50KHRva2VuLmVuZClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGxpbmVlbmRpbmcodG9rZW4pIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuXG4gICAgLy8gSWYgd2XigJlyZSBhdCBhIGhhcmQgYnJlYWssIGluY2x1ZGUgdGhlIGxpbmUgZW5kaW5nIGluIHRoZXJlLlxuICAgIGlmIChnZXREYXRhKCdhdEhhcmRCcmVhaycpKSB7XG4gICAgICBjb250ZXh0LmNoaWxkcmVuW2NvbnRleHQuY2hpbGRyZW4ubGVuZ3RoIC0gMV0ucG9zaXRpb24uZW5kID0gcG9pbnQoXG4gICAgICAgIHRva2VuLmVuZFxuICAgICAgKVxuXG4gICAgICBzZXREYXRhKCdhdEhhcmRCcmVhaycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZ2V0RGF0YSgnc2V0ZXh0SGVhZGluZ1NsdXJwTGluZUVuZGluZycpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbkNvbnRhaW5Fb2xzLmluZGV4T2YoY29udGV4dC50eXBlKSAhPT0gLTEpIHtcbiAgICAgIG9uZW50ZXJkYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gICAgICBvbmV4aXRkYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0aGFyZGJyZWFrKCkge1xuICAgIHNldERhdGEoJ2F0SGFyZEJyZWFrJywgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGh0bWxmbG93KCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGh0bWx0ZXh0KCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNvZGV0ZXh0KCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5yZXN1bWUoKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS52YWx1ZSA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGxpbmsoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cblxuICAgIC8vIFRvIGRvOiBjbGVhbi5cbiAgICBpZiAoZ2V0RGF0YSgnaW5SZWZlcmVuY2UnKSkge1xuICAgICAgY29udGV4dC50eXBlICs9ICdSZWZlcmVuY2UnXG4gICAgICBjb250ZXh0LnJlZmVyZW5jZVR5cGUgPSBnZXREYXRhKCdyZWZlcmVuY2VUeXBlJykgfHwgJ3Nob3J0Y3V0J1xuICAgICAgZGVsZXRlIGNvbnRleHQudXJsXG4gICAgICBkZWxldGUgY29udGV4dC50aXRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgY29udGV4dC5pZGVudGlmaWVyXG4gICAgICBkZWxldGUgY29udGV4dC5sYWJlbFxuICAgICAgZGVsZXRlIGNvbnRleHQucmVmZXJlbmNlVHlwZVxuICAgIH1cblxuICAgIHNldERhdGEoJ3JlZmVyZW5jZVR5cGUnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0aW1hZ2UoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cblxuICAgIC8vIFRvIGRvOiBjbGVhbi5cbiAgICBpZiAoZ2V0RGF0YSgnaW5SZWZlcmVuY2UnKSkge1xuICAgICAgY29udGV4dC50eXBlICs9ICdSZWZlcmVuY2UnXG4gICAgICBjb250ZXh0LnJlZmVyZW5jZVR5cGUgPSBnZXREYXRhKCdyZWZlcmVuY2VUeXBlJykgfHwgJ3Nob3J0Y3V0J1xuICAgICAgZGVsZXRlIGNvbnRleHQudXJsXG4gICAgICBkZWxldGUgY29udGV4dC50aXRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgY29udGV4dC5pZGVudGlmaWVyXG4gICAgICBkZWxldGUgY29udGV4dC5sYWJlbFxuICAgICAgZGVsZXRlIGNvbnRleHQucmVmZXJlbmNlVHlwZVxuICAgIH1cblxuICAgIHNldERhdGEoJ3JlZmVyZW5jZVR5cGUnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0bGFiZWx0ZXh0KHRva2VuKSB7XG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDJdLmlkZW50aWZpZXIgPSBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgICAgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgICApLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGxhYmVsKCkge1xuICAgIHZhciBmcmFnbWVudCA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXVxuICAgIHZhciB2YWx1ZSA9IHRoaXMucmVzdW1lKClcblxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5sYWJlbCA9IHZhbHVlXG5cbiAgICAvLyBBc3N1bWUgYSByZWZlcmVuY2UuXG4gICAgc2V0RGF0YSgnaW5SZWZlcmVuY2UnLCB0cnVlKVxuXG4gICAgaWYgKHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS50eXBlID09PSAnbGluaycpIHtcbiAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5jaGlsZHJlbiA9IGZyYWdtZW50LmNoaWxkcmVuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS5hbHQgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHJlc291cmNlZGVzdGluYXRpb25zdHJpbmcoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnVybCA9IGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdHJlc291cmNldGl0bGVzdHJpbmcoKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnRpdGxlID0gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gb25leGl0cmVzb3VyY2UoKSB7XG4gICAgc2V0RGF0YSgnaW5SZWZlcmVuY2UnKVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbnRlcnJlZmVyZW5jZSgpIHtcbiAgICBzZXREYXRhKCdyZWZlcmVuY2VUeXBlJywgJ2NvbGxhcHNlZCcpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRyZWZlcmVuY2VzdHJpbmcodG9rZW4pIHtcbiAgICB2YXIgbGFiZWwgPSB0aGlzLnJlc3VtZSgpXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLmxhYmVsID0gbGFiZWxcbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0uaWRlbnRpZmllciA9IG5vcm1hbGl6ZUlkZW50aWZpZXIoXG4gICAgICB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICAgICkudG9Mb3dlckNhc2UoKVxuICAgIHNldERhdGEoJ3JlZmVyZW5jZVR5cGUnLCAnZnVsbCcpXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRjaGFyYWN0ZXJyZWZlcmVuY2VtYXJrZXIodG9rZW4pIHtcbiAgICBzZXREYXRhKCdjaGFyYWN0ZXJSZWZlcmVuY2VUeXBlJywgdG9rZW4udHlwZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGNoYXJhY3RlcnJlZmVyZW5jZXZhbHVlKHRva2VuKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLnNsaWNlU2VyaWFsaXplKHRva2VuKVxuICAgIHZhciB0eXBlID0gZ2V0RGF0YSgnY2hhcmFjdGVyUmVmZXJlbmNlVHlwZScpXG4gICAgdmFyIHZhbHVlXG5cbiAgICBpZiAodHlwZSkge1xuICAgICAgdmFsdWUgPSBzYWZlRnJvbUludChcbiAgICAgICAgZGF0YSxcbiAgICAgICAgdHlwZSA9PT0gJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlck51bWVyaWMnID8gMTAgOiAxNlxuICAgICAgKVxuXG4gICAgICBzZXREYXRhKCdjaGFyYWN0ZXJSZWZlcmVuY2VUeXBlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBkZWNvZGUoZGF0YSlcbiAgICB9XG5cbiAgICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udmFsdWUgKz0gdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZXhpdGF1dG9saW5rcHJvdG9jb2wodG9rZW4pIHtcbiAgICBvbmV4aXRkYXRhLmNhbGwodGhpcywgdG9rZW4pXG4gICAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnVybCA9IHRoaXMuc2xpY2VTZXJpYWxpemUodG9rZW4pXG4gIH1cblxuICBmdW5jdGlvbiBvbmV4aXRhdXRvbGlua2VtYWlsKHRva2VuKSB7XG4gICAgb25leGl0ZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICAgIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXS51cmwgPVxuICAgICAgJ21haWx0bzonICsgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbiAgfVxuXG4gIC8vXG4gIC8vIENyZWF0ZXJzLlxuICAvL1xuXG4gIGZ1bmN0aW9uIGJsb2NrUXVvdGUoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnYmxvY2txdW90ZScsIGNoaWxkcmVuOiBbXX1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZGVGbG93KCkge1xuICAgIHJldHVybiB7dHlwZTogJ2NvZGUnLCBsYW5nOiBudWxsLCBtZXRhOiBudWxsLCB2YWx1ZTogJyd9XG4gIH1cblxuICBmdW5jdGlvbiBjb2RlVGV4dCgpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdpbmxpbmVDb2RlJywgdmFsdWU6ICcnfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ2RlZmluaXRpb24nLFxuICAgICAgaWRlbnRpZmllcjogJycsXG4gICAgICBsYWJlbDogbnVsbCxcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgdXJsOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtcGhhc2lzKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2VtcGhhc2lzJywgY2hpbGRyZW46IFtdfVxuICB9XG5cbiAgZnVuY3Rpb24gaGVhZGluZygpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdoZWFkaW5nJywgZGVwdGg6IHVuZGVmaW5lZCwgY2hpbGRyZW46IFtdfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFyZEJyZWFrKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2JyZWFrJ31cbiAgfVxuXG4gIGZ1bmN0aW9uIGh0bWwoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnaHRtbCcsIHZhbHVlOiAnJ31cbiAgfVxuXG4gIGZ1bmN0aW9uIGltYWdlKCkge1xuICAgIHJldHVybiB7dHlwZTogJ2ltYWdlJywgdGl0bGU6IG51bGwsIHVybDogJycsIGFsdDogbnVsbH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmsoKSB7XG4gICAgcmV0dXJuIHt0eXBlOiAnbGluaycsIHRpdGxlOiBudWxsLCB1cmw6ICcnLCBjaGlsZHJlbjogW119XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0KHRva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdsaXN0JyxcbiAgICAgIG9yZGVyZWQ6IHRva2VuLnR5cGUgPT09ICdsaXN0T3JkZXJlZCcsXG4gICAgICBzdGFydDogbnVsbCxcbiAgICAgIHNwcmVhZDogdG9rZW4uX3NwcmVhZCxcbiAgICAgIGNoaWxkcmVuOiBbXVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RJdGVtKHRva2VuKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdsaXN0SXRlbScsXG4gICAgICBzcHJlYWQ6IHRva2VuLl9zcHJlYWQsXG4gICAgICBjaGVja2VkOiBudWxsLFxuICAgICAgY2hpbGRyZW46IFtdXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyYWdyYXBoKCkge1xuICAgIHJldHVybiB7dHlwZTogJ3BhcmFncmFwaCcsIGNoaWxkcmVuOiBbXX1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cm9uZygpIHtcbiAgICByZXR1cm4ge3R5cGU6ICdzdHJvbmcnLCBjaGlsZHJlbjogW119XG4gIH1cblxuICBmdW5jdGlvbiB0ZXh0KCkge1xuICAgIHJldHVybiB7dHlwZTogJ3RleHQnLCB2YWx1ZTogJyd9XG4gIH1cblxuICBmdW5jdGlvbiB0aGVtYXRpY0JyZWFrKCkge1xuICAgIHJldHVybiB7dHlwZTogJ3RoZW1hdGljQnJlYWsnfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWcsIGV4dGVuc2lvbnMpIHtcbiAgdmFyIGxlbmd0aCA9IGV4dGVuc2lvbnMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBleHRlbnNpb24oY29uZmlnLCBleHRlbnNpb25zW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBjb25maWdcbn1cblxuZnVuY3Rpb24gZXh0ZW5zaW9uKGNvbmZpZywgZXh0ZW5zaW9uKSB7XG4gIHZhciBrZXlcbiAgdmFyIGxlZnRcbiAgdmFyIHJpZ2h0XG5cbiAgZm9yIChrZXkgaW4gZXh0ZW5zaW9uKSB7XG4gICAgbGVmdCA9IG93bi5jYWxsKGNvbmZpZywga2V5KSA/IGNvbmZpZ1trZXldIDogKGNvbmZpZ1trZXldID0ge30pXG4gICAgcmlnaHQgPSBleHRlbnNpb25ba2V5XVxuXG4gICAgaWYgKGtleSA9PT0gJ2NhbkNvbnRhaW5Fb2xzJykge1xuICAgICAgY29uZmlnW2tleV0gPSBbXS5jb25jYXQobGVmdCwgcmlnaHQpXG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5hc3NpZ24obGVmdCwgcmlnaHQpXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QnKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmdcblxuLy8gR2V0IHRoZSB0ZXh0IGNvbnRlbnQgb2YgYSBub2RlLlxuLy8gUHJlZmVyIHRoZSBub2Rl4oCZcyBwbGFpbi10ZXh0IGZpZWxkcywgb3RoZXJ3aXNlIHNlcmlhbGl6ZSBpdHMgY2hpbGRyZW4sXG4vLyBhbmQgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGFycmF5LCBzZXJpYWxpemUgdGhlIG5vZGVzIGluIGl0LlxuZnVuY3Rpb24gdG9TdHJpbmcobm9kZSkge1xuICByZXR1cm4gKFxuICAgIChub2RlICYmXG4gICAgICAobm9kZS52YWx1ZSB8fFxuICAgICAgICBub2RlLmFsdCB8fFxuICAgICAgICBub2RlLnRpdGxlIHx8XG4gICAgICAgICgnY2hpbGRyZW4nIGluIG5vZGUgJiYgYWxsKG5vZGUuY2hpbGRyZW4pKSB8fFxuICAgICAgICAoJ2xlbmd0aCcgaW4gbm9kZSAmJiBhbGwobm9kZSkpKSkgfHxcbiAgICAnJ1xuICApXG59XG5cbmZ1bmN0aW9uIGFsbCh2YWx1ZXMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gdG9TdHJpbmcodmFsdWVzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cbiIsInZhciBjaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2snKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrKC9bQS1aYS16XS8pXG4iLCJ2YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxubW9kdWxlLmV4cG9ydHMgPSBjaGVjaygvW1xcZEEtWmEtel0vKVxuIiwidmFyIGNoZWNrID0gcmVxdWlyZSgnLi4vdXRpbC9yZWdleC1jaGVjaycpXG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2soL1sjLScqK1xcLS05PT9BLVpeLX5dLylcbiIsIm1vZHVsZS5leHBvcnRzID0gYXNjaWlDb250cm9sXG5cbi8vIE5vdGU6IEVPRiBpcyBzZWVuIGFzIEFTQ0lJIGNvbnRyb2wgaGVyZSwgYmVjYXVzZSBgbnVsbCA8IDMyID09IHRydWVgLlxuZnVuY3Rpb24gYXNjaWlDb250cm9sKGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBTcGVjaWFsIHdoaXRlc3BhY2UgY29kZXMgKHdoaWNoIGhhdmUgbmVnYXRpdmUgdmFsdWVzKSwgQzAgYW5kIENvbnRyb2xcbiAgICAvLyBjaGFyYWN0ZXIgREVMXG4gICAgY29kZSA8IDMyIHx8IGNvZGUgPT09IDEyN1xuICApXG59XG4iLCJ2YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxubW9kdWxlLmV4cG9ydHMgPSBjaGVjaygvXFxkLylcbiIsInZhciBjaGVjayA9IHJlcXVpcmUoJy4uL3V0aWwvcmVnZXgtY2hlY2snKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrKC9bXFxkQS1GYS1mXS8pXG4iLCJ2YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxubW9kdWxlLmV4cG9ydHMgPSBjaGVjaygvWyEtLzotQFstYHstfl0vKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlXG5cbmZ1bmN0aW9uIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkge1xuICByZXR1cm4gY29kZSA8IDAgfHwgY29kZSA9PT0gMzJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25MaW5lRW5kaW5nXG5cbmZ1bmN0aW9uIG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSB7XG4gIHJldHVybiBjb2RlIDwgLTJcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbWFya2Rvd25TcGFjZVxuXG5mdW5jdGlvbiBtYXJrZG93blNwYWNlKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgPT09IC0yIHx8IGNvZGUgPT09IC0xIHx8IGNvZGUgPT09IDMyXG59XG4iLCJ2YXIgdW5pY29kZVB1bmN0dWF0aW9uID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvdW5pY29kZS1wdW5jdHVhdGlvbi1yZWdleCcpXG52YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxuLy8gU2l6ZSBub3RlOiByZW1vdmluZyBBU0NJSSBmcm9tIHRoZSByZWdleCBhbmQgdXNpbmcgYGFzY2lpLXB1bmN0dWF0aW9uYCBoZXJlXG4vLyBJbiBmYWN0IGFkZHMgdG8gdGhlIGJ1bmRsZSBzaXplLlxubW9kdWxlLmV4cG9ydHMgPSBjaGVjayh1bmljb2RlUHVuY3R1YXRpb24pXG4iLCJ2YXIgY2hlY2sgPSByZXF1aXJlKCcuLi91dGlsL3JlZ2V4LWNoZWNrJylcblxubW9kdWxlLmV4cG9ydHMgPSBjaGVjaygvXFxzLylcbiIsIm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmFzc2lnblxuIiwibW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9Lmhhc093blByb3BlcnR5XG4iLCIvLyBUaGlzIG1vZHVsZSBpcyBjb3BpZWQgZnJvbSA8aHR0cHM6Ly9zcGVjLmNvbW1vbm1hcmsub3JnLzAuMjkvI2h0bWwtYmxvY2tzPi5cbm1vZHVsZS5leHBvcnRzID0gW1xuICAnYWRkcmVzcycsXG4gICdhcnRpY2xlJyxcbiAgJ2FzaWRlJyxcbiAgJ2Jhc2UnLFxuICAnYmFzZWZvbnQnLFxuICAnYmxvY2txdW90ZScsXG4gICdib2R5JyxcbiAgJ2NhcHRpb24nLFxuICAnY2VudGVyJyxcbiAgJ2NvbCcsXG4gICdjb2xncm91cCcsXG4gICdkZCcsXG4gICdkZXRhaWxzJyxcbiAgJ2RpYWxvZycsXG4gICdkaXInLFxuICAnZGl2JyxcbiAgJ2RsJyxcbiAgJ2R0JyxcbiAgJ2ZpZWxkc2V0JyxcbiAgJ2ZpZ2NhcHRpb24nLFxuICAnZmlndXJlJyxcbiAgJ2Zvb3RlcicsXG4gICdmb3JtJyxcbiAgJ2ZyYW1lJyxcbiAgJ2ZyYW1lc2V0JyxcbiAgJ2gxJyxcbiAgJ2gyJyxcbiAgJ2gzJyxcbiAgJ2g0JyxcbiAgJ2g1JyxcbiAgJ2g2JyxcbiAgJ2hlYWQnLFxuICAnaGVhZGVyJyxcbiAgJ2hyJyxcbiAgJ2h0bWwnLFxuICAnaWZyYW1lJyxcbiAgJ2xlZ2VuZCcsXG4gICdsaScsXG4gICdsaW5rJyxcbiAgJ21haW4nLFxuICAnbWVudScsXG4gICdtZW51aXRlbScsXG4gICduYXYnLFxuICAnbm9mcmFtZXMnLFxuICAnb2wnLFxuICAnb3B0Z3JvdXAnLFxuICAnb3B0aW9uJyxcbiAgJ3AnLFxuICAncGFyYW0nLFxuICAnc2VjdGlvbicsXG4gICdzb3VyY2UnLFxuICAnc3VtbWFyeScsXG4gICd0YWJsZScsXG4gICd0Ym9keScsXG4gICd0ZCcsXG4gICd0Zm9vdCcsXG4gICd0aCcsXG4gICd0aGVhZCcsXG4gICd0aXRsZScsXG4gICd0cicsXG4gICd0cmFjaycsXG4gICd1bCdcbl1cbiIsIi8vIFRoaXMgbW9kdWxlIGlzIGNvcGllZCBmcm9tIDxodHRwczovL3NwZWMuY29tbW9ubWFyay5vcmcvMC4yOS8jaHRtbC1ibG9ja3M+LlxubW9kdWxlLmV4cG9ydHMgPSBbJ3ByZScsICdzY3JpcHQnLCAnc3R5bGUnXVxuIiwiLy8gVGhpcyBtb2R1bGUgaXMgZ2VuZXJhdGVkIGJ5IGBzY3JpcHQvYC5cbi8vXG4vLyBDb21tb25NYXJrIGhhbmRsZXMgYXR0ZW50aW9uIChlbXBoYXNpcywgc3Ryb25nKSBtYXJrZXJzIGJhc2VkIG9uIHdoYXQgY29tZXNcbi8vIGJlZm9yZSBvciBhZnRlciB0aGVtLlxuLy8gT25lIHN1Y2ggZGlmZmVyZW5jZSBpcyBpZiB0aG9zZSBjaGFyYWN0ZXJzIGFyZSBVbmljb2RlIHB1bmN0dWF0aW9uLlxuLy8gVGhpcyBzY3JpcHQgaXMgZ2VuZXJhdGVkIGZyb20gdGhlIFVuaWNvZGUgZGF0YS5cbm1vZHVsZS5leHBvcnRzID0gL1shLVxcLzotQFxcWy1gXFx7LX5cXHhBMVxceEE3XFx4QUJcXHhCNlxceEI3XFx4QkJcXHhCRlxcdTAzN0VcXHUwMzg3XFx1MDU1QS1cXHUwNTVGXFx1MDU4OVxcdTA1OEFcXHUwNUJFXFx1MDVDMFxcdTA1QzNcXHUwNUM2XFx1MDVGM1xcdTA1RjRcXHUwNjA5XFx1MDYwQVxcdTA2MENcXHUwNjBEXFx1MDYxQlxcdTA2MUVcXHUwNjFGXFx1MDY2QS1cXHUwNjZEXFx1MDZENFxcdTA3MDAtXFx1MDcwRFxcdTA3RjctXFx1MDdGOVxcdTA4MzAtXFx1MDgzRVxcdTA4NUVcXHUwOTY0XFx1MDk2NVxcdTA5NzBcXHUwOUZEXFx1MEE3NlxcdTBBRjBcXHUwQzc3XFx1MEM4NFxcdTBERjRcXHUwRTRGXFx1MEU1QVxcdTBFNUJcXHUwRjA0LVxcdTBGMTJcXHUwRjE0XFx1MEYzQS1cXHUwRjNEXFx1MEY4NVxcdTBGRDAtXFx1MEZENFxcdTBGRDlcXHUwRkRBXFx1MTA0QS1cXHUxMDRGXFx1MTBGQlxcdTEzNjAtXFx1MTM2OFxcdTE0MDBcXHUxNjZFXFx1MTY5QlxcdTE2OUNcXHUxNkVCLVxcdTE2RURcXHUxNzM1XFx1MTczNlxcdTE3RDQtXFx1MTdENlxcdTE3RDgtXFx1MTdEQVxcdTE4MDAtXFx1MTgwQVxcdTE5NDRcXHUxOTQ1XFx1MUExRVxcdTFBMUZcXHUxQUEwLVxcdTFBQTZcXHUxQUE4LVxcdTFBQURcXHUxQjVBLVxcdTFCNjBcXHUxQkZDLVxcdTFCRkZcXHUxQzNCLVxcdTFDM0ZcXHUxQzdFXFx1MUM3RlxcdTFDQzAtXFx1MUNDN1xcdTFDRDNcXHUyMDEwLVxcdTIwMjdcXHUyMDMwLVxcdTIwNDNcXHUyMDQ1LVxcdTIwNTFcXHUyMDUzLVxcdTIwNUVcXHUyMDdEXFx1MjA3RVxcdTIwOERcXHUyMDhFXFx1MjMwOC1cXHUyMzBCXFx1MjMyOVxcdTIzMkFcXHUyNzY4LVxcdTI3NzVcXHUyN0M1XFx1MjdDNlxcdTI3RTYtXFx1MjdFRlxcdTI5ODMtXFx1Mjk5OFxcdTI5RDgtXFx1MjlEQlxcdTI5RkNcXHUyOUZEXFx1MkNGOS1cXHUyQ0ZDXFx1MkNGRVxcdTJDRkZcXHUyRDcwXFx1MkUwMC1cXHUyRTJFXFx1MkUzMC1cXHUyRTRGXFx1MkU1MlxcdTMwMDEtXFx1MzAwM1xcdTMwMDgtXFx1MzAxMVxcdTMwMTQtXFx1MzAxRlxcdTMwMzBcXHUzMDNEXFx1MzBBMFxcdTMwRkJcXHVBNEZFXFx1QTRGRlxcdUE2MEQtXFx1QTYwRlxcdUE2NzNcXHVBNjdFXFx1QTZGMi1cXHVBNkY3XFx1QTg3NC1cXHVBODc3XFx1QThDRVxcdUE4Q0ZcXHVBOEY4LVxcdUE4RkFcXHVBOEZDXFx1QTkyRVxcdUE5MkZcXHVBOTVGXFx1QTlDMS1cXHVBOUNEXFx1QTlERVxcdUE5REZcXHVBQTVDLVxcdUFBNUZcXHVBQURFXFx1QUFERlxcdUFBRjBcXHVBQUYxXFx1QUJFQlxcdUZEM0VcXHVGRDNGXFx1RkUxMC1cXHVGRTE5XFx1RkUzMC1cXHVGRTUyXFx1RkU1NC1cXHVGRTYxXFx1RkU2M1xcdUZFNjhcXHVGRTZBXFx1RkU2QlxcdUZGMDEtXFx1RkYwM1xcdUZGMDUtXFx1RkYwQVxcdUZGMEMtXFx1RkYwRlxcdUZGMUFcXHVGRjFCXFx1RkYxRlxcdUZGMjBcXHVGRjNCLVxcdUZGM0RcXHVGRjNGXFx1RkY1QlxcdUZGNURcXHVGRjVGLVxcdUZGNjVdL1xuIiwidmFyIGF0dGVudGlvbiA9IHJlcXVpcmUoJy4vdG9rZW5pemUvYXR0ZW50aW9uJylcbnZhciBoZWFkaW5nQXR4ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9oZWFkaW5nLWF0eCcpXG52YXIgYXV0b2xpbmsgPSByZXF1aXJlKCcuL3Rva2VuaXplL2F1dG9saW5rJylcbnZhciBsaXN0ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9saXN0JylcbnZhciBibG9ja1F1b3RlID0gcmVxdWlyZSgnLi90b2tlbml6ZS9ibG9jay1xdW90ZScpXG52YXIgY2hhcmFjdGVyRXNjYXBlID0gcmVxdWlyZSgnLi90b2tlbml6ZS9jaGFyYWN0ZXItZXNjYXBlJylcbnZhciBjaGFyYWN0ZXJSZWZlcmVuY2UgPSByZXF1aXJlKCcuL3Rva2VuaXplL2NoYXJhY3Rlci1yZWZlcmVuY2UnKVxudmFyIGNvZGVGZW5jZWQgPSByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtZmVuY2VkJylcbnZhciBjb2RlSW5kZW50ZWQgPSByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtaW5kZW50ZWQnKVxudmFyIGNvZGVUZXh0ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9jb2RlLXRleHQnKVxudmFyIGRlZmluaXRpb24gPSByZXF1aXJlKCcuL3Rva2VuaXplL2RlZmluaXRpb24nKVxudmFyIGhhcmRCcmVha0VzY2FwZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUvaGFyZC1icmVhay1lc2NhcGUnKVxudmFyIGh0bWxGbG93ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLWZsb3cnKVxudmFyIGh0bWxUZXh0ID0gcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLXRleHQnKVxudmFyIGxhYmVsRW5kID0gcmVxdWlyZSgnLi90b2tlbml6ZS9sYWJlbC1lbmQnKVxudmFyIGxhYmVsSW1hZ2UgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xhYmVsLXN0YXJ0LWltYWdlJylcbnZhciBsYWJlbExpbmsgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xhYmVsLXN0YXJ0LWxpbmsnKVxudmFyIHNldGV4dFVuZGVybGluZSA9IHJlcXVpcmUoJy4vdG9rZW5pemUvc2V0ZXh0LXVuZGVybGluZScpXG52YXIgdGhlbWF0aWNCcmVhayA9IHJlcXVpcmUoJy4vdG9rZW5pemUvdGhlbWF0aWMtYnJlYWsnKVxudmFyIGxpbmVFbmRpbmcgPSByZXF1aXJlKCcuL3Rva2VuaXplL2xpbmUtZW5kaW5nJylcbnZhciByZXNvbHZlVGV4dCA9IHJlcXVpcmUoJy4vaW5pdGlhbGl6ZS90ZXh0JykucmVzb2x2ZXJcblxuZXhwb3J0cy5kb2N1bWVudCA9IHtcbiAgNDI6IGxpc3QsIC8vIEFzdGVyaXNrXG4gIDQzOiBsaXN0LCAvLyBQbHVzIHNpZ25cbiAgNDU6IGxpc3QsIC8vIERhc2hcbiAgNDg6IGxpc3QsIC8vIDBcbiAgNDk6IGxpc3QsIC8vIDFcbiAgNTA6IGxpc3QsIC8vIDJcbiAgNTE6IGxpc3QsIC8vIDNcbiAgNTI6IGxpc3QsIC8vIDRcbiAgNTM6IGxpc3QsIC8vIDVcbiAgNTQ6IGxpc3QsIC8vIDZcbiAgNTU6IGxpc3QsIC8vIDdcbiAgNTY6IGxpc3QsIC8vIDhcbiAgNTc6IGxpc3QsIC8vIDlcbiAgNjI6IGJsb2NrUXVvdGUgLy8gR3JlYXRlciB0aGFuXG59XG5cbmV4cG9ydHMuY29udGVudEluaXRpYWwgPSB7XG4gIDkxOiBkZWZpbml0aW9uIC8vIExlZnQgc3F1YXJlIGJyYWNrZXRcbn1cblxuZXhwb3J0cy5mbG93SW5pdGlhbCA9IHtcbiAgJy0yJzogY29kZUluZGVudGVkLCAvLyBIb3Jpem9udGFsIHRhYlxuICAnLTEnOiBjb2RlSW5kZW50ZWQsIC8vIFZpcnR1YWwgc3BhY2VcbiAgMzI6IGNvZGVJbmRlbnRlZCAvLyBTcGFjZVxufVxuXG5leHBvcnRzLmZsb3cgPSB7XG4gIDM1OiBoZWFkaW5nQXR4LCAvLyBOdW1iZXIgc2lnblxuICA0MjogdGhlbWF0aWNCcmVhaywgLy8gQXN0ZXJpc2tcbiAgNDU6IFtzZXRleHRVbmRlcmxpbmUsIHRoZW1hdGljQnJlYWtdLCAvLyBEYXNoXG4gIDYwOiBodG1sRmxvdywgLy8gTGVzcyB0aGFuXG4gIDYxOiBzZXRleHRVbmRlcmxpbmUsIC8vIEVxdWFscyB0b1xuICA5NTogdGhlbWF0aWNCcmVhaywgLy8gVW5kZXJzY29yZVxuICA5NjogY29kZUZlbmNlZCwgLy8gR3JhdmUgYWNjZW50XG4gIDEyNjogY29kZUZlbmNlZCAvLyBUaWxkZVxufVxuXG5leHBvcnRzLnN0cmluZyA9IHtcbiAgMzg6IGNoYXJhY3RlclJlZmVyZW5jZSwgLy8gQW1wZXJzYW5kXG4gIDkyOiBjaGFyYWN0ZXJFc2NhcGUgLy8gQmFja3NsYXNoXG59XG5cbmV4cG9ydHMudGV4dCA9IHtcbiAgJy01JzogbGluZUVuZGluZywgLy8gQ2FycmlhZ2UgcmV0dXJuXG4gICctNCc6IGxpbmVFbmRpbmcsIC8vIExpbmUgZmVlZFxuICAnLTMnOiBsaW5lRW5kaW5nLCAvLyBDYXJyaWFnZSByZXR1cm4gKyBsaW5lIGZlZWRcbiAgMzM6IGxhYmVsSW1hZ2UsIC8vIEV4Y2xhbWF0aW9uIG1hcmtcbiAgMzg6IGNoYXJhY3RlclJlZmVyZW5jZSwgLy8gQW1wZXJzYW5kXG4gIDQyOiBhdHRlbnRpb24sIC8vIEFzdGVyaXNrXG4gIDYwOiBbYXV0b2xpbmssIGh0bWxUZXh0XSwgLy8gTGVzcyB0aGFuXG4gIDkxOiBsYWJlbExpbmssIC8vIExlZnQgc3F1YXJlIGJyYWNrZXRcbiAgOTI6IFtoYXJkQnJlYWtFc2NhcGUsIGNoYXJhY3RlckVzY2FwZV0sIC8vIEJhY2tzbGFzaFxuICA5MzogbGFiZWxFbmQsIC8vIFJpZ2h0IHNxdWFyZSBicmFja2V0XG4gIDk1OiBhdHRlbnRpb24sIC8vIFVuZGVyc2NvcmVcbiAgOTY6IGNvZGVUZXh0IC8vIEdyYXZlIGFjY2VudFxufVxuXG5leHBvcnRzLmluc2lkZVNwYW4gPSB7XG4gIG51bGw6IFthdHRlbnRpb24sIHJlc29sdmVUZXh0XVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IGluaXRpYWxpemVDb250ZW50XG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxuXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuLi90b2tlbml6ZS9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUNvbnRlbnQoZWZmZWN0cykge1xuICB2YXIgY29udGVudFN0YXJ0ID0gZWZmZWN0cy5hdHRlbXB0KFxuICAgIHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuY29udGVudEluaXRpYWwsXG4gICAgYWZ0ZXJDb250ZW50U3RhcnRDb25zdHJ1Y3QsXG4gICAgcGFyYWdyYXBoSW5pdGlhbFxuICApXG5cbiAgdmFyIHByZXZpb3VzXG5cbiAgcmV0dXJuIGNvbnRlbnRTdGFydFxuXG4gIGZ1bmN0aW9uIGFmdGVyQ29udGVudFN0YXJ0Q29uc3RydWN0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBjb250ZW50U3RhcnQsICdsaW5lUHJlZml4JylcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcmFncmFwaEluaXRpYWwoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ3BhcmFncmFwaCcpXG4gICAgcmV0dXJuIGxpbmVTdGFydChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gbGluZVN0YXJ0KGNvZGUpIHtcbiAgICB2YXIgdG9rZW4gPSBlZmZlY3RzLmVudGVyKCdjaHVua1RleHQnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ3RleHQnLFxuICAgICAgcHJldmlvdXM6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIGlmIChwcmV2aW91cykge1xuICAgICAgcHJldmlvdXMubmV4dCA9IHRva2VuXG4gICAgfVxuXG4gICAgcHJldmlvdXMgPSB0b2tlblxuXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rVGV4dCcpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3BhcmFncmFwaCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1RleHQnKVxuICAgICAgcmV0dXJuIGxpbmVTdGFydFxuICAgIH1cblxuICAgIC8vIERhdGEuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IGluaXRpYWxpemVEb2N1bWVudFxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvZmFjdG9yeS1zcGFjZScpXG52YXIgYmxhbmsgPSByZXF1aXJlKCcuLi90b2tlbml6ZS9wYXJ0aWFsLWJsYW5rLWxpbmUnKVxuXG52YXIgY29udGFpbmVyID0ge3Rva2VuaXplOiB0b2tlbml6ZUNvbnRhaW5lcn1cbnZhciBsYXp5RmxvdyA9IHt0b2tlbml6ZTogdG9rZW5pemVMYXp5Rmxvd31cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZURvY3VtZW50KGVmZmVjdHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBjb250aW51ZWQgPSAwXG4gIHZhciBpbnNwZWN0UmVzdWx0XG4gIHZhciBjaGlsZEZsb3dcbiAgdmFyIGNoaWxkVG9rZW5cblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKGNvbnRpbnVlZCA8IHN0YWNrLmxlbmd0aCkge1xuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHN0YWNrW2NvbnRpbnVlZF1bMV1cbiAgICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICAgIHN0YWNrW2NvbnRpbnVlZF1bMF0uY29udGludWF0aW9uLFxuICAgICAgICBkb2N1bWVudENvbnRpbnVlLFxuICAgICAgICBkb2N1bWVudENvbnRpbnVlZFxuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudENvbnRpbnVlZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZG9jdW1lbnRDb250aW51ZShjb2RlKSB7XG4gICAgY29udGludWVkKytcbiAgICByZXR1cm4gc3RhcnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvY3VtZW50Q29udGludWVkKGNvZGUpIHtcbiAgICAvLyBJZiB3ZeKAmXJlIGluIGEgY29uY3JldGUgY29uc3RydWN0IChzdWNoIGFzIHdoZW4gZXhwZWN0aW5nIGFub3RoZXIgbGluZSBvZlxuICAgIC8vIEhUTUwsIG9yIHdlIHJlc3VsdGVkIGluIGxhenkgY29udGVudCksIHdlIGNhbiBpbW1lZGlhdGVseSBzdGFydCBmbG93LlxuICAgIGlmIChpbnNwZWN0UmVzdWx0ICYmIGluc3BlY3RSZXN1bHQuZmxvd0NvbnRpbnVlKSB7XG4gICAgICByZXR1cm4gZmxvd1N0YXJ0KGNvZGUpXG4gICAgfVxuXG4gICAgc2VsZi5pbnRlcnJ1cHQgPVxuICAgICAgY2hpbGRGbG93ICYmXG4gICAgICBjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdCAmJlxuICAgICAgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QuaW50ZXJydXB0aWJsZVxuICAgIHNlbGYuY29udGFpbmVyU3RhdGUgPSB7fVxuICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoY29udGFpbmVyLCBjb250YWluZXJDb250aW51ZSwgZmxvd1N0YXJ0KShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGFpbmVyQ29udGludWUoY29kZSkge1xuICAgIHN0YWNrLnB1c2goW3NlbGYuY3VycmVudENvbnN0cnVjdCwgc2VsZi5jb250YWluZXJTdGF0ZV0pXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBkb2N1bWVudENvbnRpbnVlZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZmxvd1N0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgZXhpdENvbnRhaW5lcnMoMCwgdHJ1ZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2hpbGRGbG93ID0gY2hpbGRGbG93IHx8IHNlbGYucGFyc2VyLmZsb3coc2VsZi5ub3coKSlcblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rRmxvdycsIHtcbiAgICAgIGNvbnRlbnRUeXBlOiAnZmxvdycsXG4gICAgICBwcmV2aW91czogY2hpbGRUb2tlbixcbiAgICAgIF90b2tlbml6ZXI6IGNoaWxkRmxvd1xuICAgIH0pXG5cbiAgICByZXR1cm4gZmxvd0NvbnRpbnVlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBmbG93Q29udGludWUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICBjb250aW51ZUZsb3coZWZmZWN0cy5leGl0KCdjaHVua0Zsb3cnKSlcbiAgICAgIHJldHVybiBmbG93U3RhcnQoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGNvbnRpbnVlRmxvdyhlZmZlY3RzLmV4aXQoJ2NodW5rRmxvdycpKVxuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIHt0b2tlbml6ZTogdG9rZW5pemVJbnNwZWN0LCBwYXJ0aWFsOiB0cnVlfSxcbiAgICAgICAgZG9jdW1lbnRBZnRlclBlZWtcbiAgICAgIClcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZmxvd0NvbnRpbnVlXG4gIH1cblxuICBmdW5jdGlvbiBkb2N1bWVudEFmdGVyUGVlayhjb2RlKSB7XG4gICAgZXhpdENvbnRhaW5lcnMoXG4gICAgICBpbnNwZWN0UmVzdWx0LmNvbnRpbnVlZCxcbiAgICAgIGluc3BlY3RSZXN1bHQgJiYgaW5zcGVjdFJlc3VsdC5mbG93RW5kXG4gICAgKVxuXG4gICAgY29udGludWVkID0gMFxuICAgIHJldHVybiBzdGFydChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWVGbG93KHRva2VuKSB7XG4gICAgaWYgKGNoaWxkVG9rZW4pIGNoaWxkVG9rZW4ubmV4dCA9IHRva2VuXG4gICAgY2hpbGRUb2tlbiA9IHRva2VuXG4gICAgY2hpbGRGbG93LmxhenkgPSBpbnNwZWN0UmVzdWx0ICYmIGluc3BlY3RSZXN1bHQubGF6eVxuICAgIGNoaWxkRmxvdy5kZWZpbmVTa2lwKHRva2VuLnN0YXJ0KVxuICAgIGNoaWxkRmxvdy53cml0ZShzZWxmLnNsaWNlU3RyZWFtKHRva2VuKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRDb250YWluZXJzKHNpemUsIGVuZCkge1xuICAgIHZhciBpbmRleCA9IHN0YWNrLmxlbmd0aFxuXG4gICAgLy8gQ2xvc2UgdGhlIGZsb3cuXG4gICAgaWYgKGNoaWxkRmxvdyAmJiBlbmQpIHtcbiAgICAgIGNoaWxkRmxvdy53cml0ZShbbnVsbF0pXG4gICAgICBjaGlsZFRva2VuID0gY2hpbGRGbG93ID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgLy8gRXhpdCBvcGVuIGNvbnRhaW5lcnMuXG4gICAgd2hpbGUgKGluZGV4LS0gPiBzaXplKSB7XG4gICAgICBzZWxmLmNvbnRhaW5lclN0YXRlID0gc3RhY2tbaW5kZXhdWzFdXG4gICAgICBzdGFja1tpbmRleF1bMF0uZXhpdC5jYWxsKHNlbGYsIGVmZmVjdHMpXG4gICAgfVxuXG4gICAgc3RhY2subGVuZ3RoID0gc2l6ZVxuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5pemVJbnNwZWN0KGVmZmVjdHMsIG9rKSB7XG4gICAgdmFyIHN1YmNvbnRpbnVlZCA9IDBcblxuICAgIGluc3BlY3RSZXN1bHQgPSB7fVxuXG4gICAgcmV0dXJuIGluc3BlY3RTdGFydFxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdFN0YXJ0KGNvZGUpIHtcbiAgICAgIGlmIChzdWJjb250aW51ZWQgPCBzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHN0YWNrW3N1YmNvbnRpbnVlZF1bMV1cbiAgICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgICBzdGFja1tzdWJjb250aW51ZWRdWzBdLmNvbnRpbnVhdGlvbixcbiAgICAgICAgICBpbnNwZWN0Q29udGludWUsXG4gICAgICAgICAgaW5zcGVjdExlc3NcbiAgICAgICAgKShjb2RlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB3ZeKAmXJlIGNvbnRpbnVlZCBidXQgaW4gYSBjb25jcmV0ZSBmbG93LCB3ZSBjYW7igJl0IGhhdmUgbW9yZVxuICAgICAgLy8gY29udGFpbmVycy5cbiAgICAgIGlmIChjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdCAmJiBjaGlsZEZsb3cuY3VycmVudENvbnN0cnVjdC5jb25jcmV0ZSkge1xuICAgICAgICBpbnNwZWN0UmVzdWx0LmZsb3dDb250aW51ZSA9IHRydWVcbiAgICAgICAgcmV0dXJuIGluc3BlY3REb25lKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIHNlbGYuaW50ZXJydXB0ID1cbiAgICAgICAgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QgJiYgY2hpbGRGbG93LmN1cnJlbnRDb25zdHJ1Y3QuaW50ZXJydXB0aWJsZVxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZSA9IHt9XG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KGNvbnRhaW5lciwgaW5zcGVjdEZsb3dFbmQsIGluc3BlY3REb25lKShjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3BlY3RDb250aW51ZShjb2RlKSB7XG4gICAgICBzdWJjb250aW51ZWQrK1xuICAgICAgcmV0dXJuIHNlbGYuY29udGFpbmVyU3RhdGUuX2Nsb3NlRmxvd1xuICAgICAgICA/IGluc3BlY3RGbG93RW5kKGNvZGUpXG4gICAgICAgIDogaW5zcGVjdFN0YXJ0KGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdExlc3MoY29kZSkge1xuICAgICAgaWYgKGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0ICYmIGNoaWxkRmxvdy5jdXJyZW50Q29uc3RydWN0LmxhenkpIHtcbiAgICAgICAgLy8gTWF5YmUgYW5vdGhlciBjb250YWluZXI/XG4gICAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUgPSB7fVxuICAgICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgICBpbnNwZWN0Rmxvd0VuZCxcbiAgICAgICAgICAvLyBNYXliZSBmbG93LCBvciBhIGJsYW5rIGxpbmU/XG4gICAgICAgICAgZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgICAgbGF6eUZsb3csXG4gICAgICAgICAgICBpbnNwZWN0Rmxvd0VuZCxcbiAgICAgICAgICAgIGVmZmVjdHMuY2hlY2soYmxhbmssIGluc3BlY3RGbG93RW5kLCBpbnNwZWN0TGF6eSlcbiAgICAgICAgICApXG4gICAgICAgICkoY29kZSlcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlIHdl4oCZcmUgaW50ZXJydXB0aW5nLlxuICAgICAgcmV0dXJuIGluc3BlY3RGbG93RW5kKGNvZGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zcGVjdExhenkoY29kZSkge1xuICAgICAgLy8gQWN0IGFzIGlmIGFsbCBjb250YWluZXJzIGFyZSBjb250aW51ZWQuXG4gICAgICBzdWJjb250aW51ZWQgPSBzdGFjay5sZW5ndGhcbiAgICAgIGluc3BlY3RSZXN1bHQubGF6eSA9IHRydWVcbiAgICAgIGluc3BlY3RSZXN1bHQuZmxvd0NvbnRpbnVlID0gdHJ1ZVxuICAgICAgcmV0dXJuIGluc3BlY3REb25lKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gV2XigJlyZSBkb25lIHdpdGggZmxvdyBpZiB3ZSBoYXZlIG1vcmUgY29udGFpbmVycywgb3IgYW4gaW50ZXJydXB0aW9uLlxuICAgIGZ1bmN0aW9uIGluc3BlY3RGbG93RW5kKGNvZGUpIHtcbiAgICAgIGluc3BlY3RSZXN1bHQuZmxvd0VuZCA9IHRydWVcbiAgICAgIHJldHVybiBpbnNwZWN0RG9uZShjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3BlY3REb25lKGNvZGUpIHtcbiAgICAgIGluc3BlY3RSZXN1bHQuY29udGludWVkID0gc3ViY29udGludWVkXG4gICAgICBzZWxmLmludGVycnVwdCA9IHNlbGYuY29udGFpbmVyU3RhdGUgPSB1bmRlZmluZWRcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvbnRhaW5lcihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGVmZmVjdHMuYXR0ZW1wdCh0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmRvY3VtZW50LCBvaywgbm9rKSxcbiAgICAnbGluZVByZWZpeCcsXG4gICAgNFxuICApXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplTGF6eUZsb3coZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gY3JlYXRlU3BhY2UoXG4gICAgZWZmZWN0cyxcbiAgICBlZmZlY3RzLmxhenkodGhpcy5wYXJzZXIuY29uc3RydWN0cy5mbG93LCBvaywgbm9rKSxcbiAgICAnbGluZVByZWZpeCcsXG4gICAgNFxuICApXG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gaW5pdGlhbGl6ZUZsb3dcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4uL3Rva2VuaXplL2ZhY3Rvcnktc3BhY2UnKVxudmFyIGJsYW5rID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvcGFydGlhbC1ibGFuay1saW5lJylcbnZhciBjb250ZW50ID0gcmVxdWlyZSgnLi4vdG9rZW5pemUvY29udGVudCcpXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVGbG93KGVmZmVjdHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbml0aWFsID0gZWZmZWN0cy5hdHRlbXB0KFxuICAgIC8vIFRyeSB0byBwYXJzZSBhIGJsYW5rIGxpbmUuXG4gICAgYmxhbmssXG4gICAgYXRCbGFua0VuZGluZyxcbiAgICAvLyBUcnkgdG8gcGFyc2UgaW5pdGlhbCBmbG93IChlc3NlbnRpYWxseSwgb25seSBjb2RlKS5cbiAgICBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICB0aGlzLnBhcnNlci5jb25zdHJ1Y3RzLmZsb3dJbml0aWFsLFxuICAgICAgYWZ0ZXJDb25zdHJ1Y3QsXG4gICAgICBjcmVhdGVTcGFjZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgIHRoaXMucGFyc2VyLmNvbnN0cnVjdHMuZmxvdyxcbiAgICAgICAgICBhZnRlckNvbnN0cnVjdCxcbiAgICAgICAgICBlZmZlY3RzLmF0dGVtcHQoY29udGVudCwgYWZ0ZXJDb25zdHJ1Y3QpXG4gICAgICAgICksXG4gICAgICAgICdsaW5lUHJlZml4J1xuICAgICAgKVxuICAgIClcbiAgKVxuXG4gIHJldHVybiBpbml0aWFsXG5cbiAgZnVuY3Rpb24gYXRCbGFua0VuZGluZyhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZ0JsYW5rJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmdCbGFuaycpXG4gICAgc2VsZi5jdXJyZW50Q29uc3RydWN0ID0gdW5kZWZpbmVkXG4gICAgcmV0dXJuIGluaXRpYWxcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyQ29uc3RydWN0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHNlbGYuY3VycmVudENvbnN0cnVjdCA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBpbml0aWFsXG4gIH1cbn1cbiIsImV4cG9ydHMudGV4dCA9IGluaXRpYWxpemVGYWN0b3J5KCd0ZXh0JylcbmV4cG9ydHMuc3RyaW5nID0gaW5pdGlhbGl6ZUZhY3RvcnkoJ3N0cmluZycpXG5leHBvcnRzLnJlc29sdmVyID0ge3Jlc29sdmVBbGw6IHJlc29sdmVyKCl9XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9jb25zdGFudC9hc3NpZ24nKVxuXG52YXIgc2hhbGxvdyA9IHJlcXVpcmUoJy4uL3V0aWwvc2hhbGxvdycpXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVGYWN0b3J5KGZpZWxkKSB7XG4gIHJldHVybiB7XG4gICAgdG9rZW5pemU6IGluaXRpYWxpemVUZXh0LFxuICAgIHJlc29sdmVBbGw6IHJlc29sdmVyKGZpZWxkID09PSAndGV4dCcgPyByZXNvbHZlQWxsTGluZVN1ZmZpeGVzIDogdW5kZWZpbmVkKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVRleHQoZWZmZWN0cykge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBjb25zdHJ1Y3RzID0gdGhpcy5wYXJzZXIuY29uc3RydWN0c1tmaWVsZF1cbiAgICB2YXIgdGV4dCA9IGVmZmVjdHMuYXR0ZW1wdChjb25zdHJ1Y3RzLCBzdGFydCwgbm90VGV4dClcblxuICAgIHJldHVybiBzdGFydFxuXG4gICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgcmV0dXJuIGF0QnJlYWsoY29kZSkgPyB0ZXh0KGNvZGUpIDogbm90VGV4dChjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vdFRleHQoY29kZSkge1xuICAgICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdkYXRhJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXRhKGNvZGUpIHtcbiAgICAgIGlmIChhdEJyZWFrKGNvZGUpKSB7XG4gICAgICAgIGVmZmVjdHMuZXhpdCgnZGF0YScpXG4gICAgICAgIHJldHVybiB0ZXh0KGNvZGUpXG4gICAgICB9XG5cbiAgICAgIC8vIERhdGEuXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXRCcmVhayhjb2RlKSB7XG4gICAgICB2YXIgbGlzdCA9IGNvbnN0cnVjdHNbY29kZV1cbiAgICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbGlzdFtpbmRleF0ucHJldmlvdXMgfHxcbiAgICAgICAgICAgIGxpc3RbaW5kZXhdLnByZXZpb3VzLmNhbGwoc2VsZiwgc2VsZi5wcmV2aW91cylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVyKGV4dHJhUmVzb2x2ZXIpIHtcbiAgcmV0dXJuIHJlc29sdmVBbGxUZXh0XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUFsbFRleHQoZXZlbnRzLCBjb250ZXh0KSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgZW50ZXJcblxuICAgIC8vIEEgcmF0aGVyIGJvcmluZyBjb21wdXRhdGlvbiAodG8gbWVyZ2UgYWRqYWNlbnQgYGRhdGFgIGV2ZW50cykgd2hpY2hcbiAgICAvLyBpbXByb3ZlcyBtbSBwZXJmb3JtYW5jZSBieSAyOSUuXG4gICAgd2hpbGUgKCsraW5kZXggPD0gZXZlbnRzLmxlbmd0aCkge1xuICAgICAgaWYgKGVudGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGV2ZW50c1tpbmRleF0gJiYgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnZGF0YScpIHtcbiAgICAgICAgICBlbnRlciA9IGluZGV4XG4gICAgICAgICAgaW5kZXgrK1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFldmVudHNbaW5kZXhdIHx8IGV2ZW50c1tpbmRleF1bMV0udHlwZSAhPT0gJ2RhdGEnKSB7XG4gICAgICAgIC8vIERvbuKAmXQgZG8gYW55dGhpbmcgaWYgdGhlcmUgaXMgb25lIGRhdGEgdG9rZW4uXG4gICAgICAgIGlmIChpbmRleCAhPT0gZW50ZXIgKyAyKSB7XG4gICAgICAgICAgZXZlbnRzW2VudGVyXVsxXS5lbmQgPSBldmVudHNbaW5kZXggLSAxXVsxXS5lbmRcbiAgICAgICAgICBldmVudHMuc3BsaWNlKGVudGVyICsgMiwgaW5kZXggLSBlbnRlciAtIDIpXG4gICAgICAgICAgaW5kZXggPSBlbnRlciArIDJcbiAgICAgICAgfVxuXG4gICAgICAgIGVudGVyID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4dHJhUmVzb2x2ZXIgPyBleHRyYVJlc29sdmVyKGV2ZW50cywgY29udGV4dCkgOiBldmVudHNcbiAgfVxufVxuXG4vLyBBIHJhdGhlciB1Z2x5IHNldCBvZiBpbnN0cnVjdGlvbnMgd2hpY2ggYWdhaW4gbG9va3MgYXQgY2h1bmtzIGluIHRoZSBpbnB1dFxuLy8gc3RyZWFtLlxuLy8gVGhlIHJlYXNvbiB0byBkbyB0aGlzIGhlcmUgaXMgdGhhdCBpdCBpcyAqbXVjaCogZmFzdGVyIHRvIHBhcnNlIGluIHJldmVyc2UuXG4vLyBBbmQgdGhhdCB3ZSBjYW7igJl0IGhvb2sgaW50byBgbnVsbGAgdG8gc3BsaXQgdGhlIGxpbmUgc3VmZml4IGJlZm9yZSBhbiBFT0YuXG4vLyBUbyBkbzogZmlndXJlIG91dCBpZiB3ZSBjYW4gbWFrZSB0aGlzIGludG8gYSBjbGVhbiB1dGlsaXR5LCBvciBldmVuIGluIGNvcmUuXG4vLyBBcyBpdCB3aWxsIGJlIHVzZWZ1bCBmb3IgR0ZNcyBsaXRlcmFsIGF1dG9saW5rIGV4dGVuc2lvbiAoYW5kIG1heWJlIGV2ZW5cbi8vIHRhYmxlcz8pXG5mdW5jdGlvbiByZXNvbHZlQWxsTGluZVN1ZmZpeGVzKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgZXZlbnRJbmRleCA9IC0xXG4gIHZhciBjaHVua3NcbiAgdmFyIGRhdGFcbiAgdmFyIGNodW5rXG4gIHZhciBpbmRleFxuICB2YXIgYnVmZmVySW5kZXhcbiAgdmFyIHNpemVcbiAgdmFyIHRhYnNcbiAgdmFyIHRva2VuXG5cbiAgd2hpbGUgKCsrZXZlbnRJbmRleCA8PSBldmVudHMubGVuZ3RoKSB7XG4gICAgaWYgKFxuICAgICAgKGV2ZW50SW5kZXggPT09IGV2ZW50cy5sZW5ndGggfHxcbiAgICAgICAgZXZlbnRzW2V2ZW50SW5kZXhdWzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nJykgJiZcbiAgICAgIGV2ZW50c1tldmVudEluZGV4IC0gMV1bMV0udHlwZSA9PT0gJ2RhdGEnXG4gICAgKSB7XG4gICAgICBkYXRhID0gZXZlbnRzW2V2ZW50SW5kZXggLSAxXVsxXVxuICAgICAgY2h1bmtzID0gY29udGV4dC5zbGljZVN0cmVhbShkYXRhKVxuICAgICAgaW5kZXggPSBjaHVua3MubGVuZ3RoXG4gICAgICBidWZmZXJJbmRleCA9IC0xXG4gICAgICBzaXplID0gMFxuICAgICAgdGFicyA9IHVuZGVmaW5lZFxuXG4gICAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgICBjaHVuayA9IGNodW5rc1tpbmRleF1cblxuICAgICAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGJ1ZmZlckluZGV4ID0gY2h1bmsubGVuZ3RoXG5cbiAgICAgICAgICB3aGlsZSAoY2h1bmsuY2hhckNvZGVBdChidWZmZXJJbmRleCAtIDEpID09PSAzMikge1xuICAgICAgICAgICAgc2l6ZSsrXG4gICAgICAgICAgICBidWZmZXJJbmRleC0tXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ1ZmZlckluZGV4KSBicmVha1xuICAgICAgICAgIGJ1ZmZlckluZGV4ID0gLTFcbiAgICAgICAgfVxuICAgICAgICAvLyBOdW1iZXJcbiAgICAgICAgZWxzZSBpZiAoY2h1bmsgPT09IC0yKSB7XG4gICAgICAgICAgdGFicyA9IHRydWVcbiAgICAgICAgICBzaXplKytcbiAgICAgICAgfSBlbHNlIGlmIChjaHVuayA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBFbXB0eVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlcGxhY2VtZW50IGNoYXJhY3RlciwgZXhpdC5cbiAgICAgICAgICBpbmRleCsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSkge1xuICAgICAgICB0b2tlbiA9IHtcbiAgICAgICAgICB0eXBlOlxuICAgICAgICAgICAgZXZlbnRJbmRleCA9PT0gZXZlbnRzLmxlbmd0aCB8fCB0YWJzIHx8IHNpemUgPCAyXG4gICAgICAgICAgICAgID8gJ2xpbmVTdWZmaXgnXG4gICAgICAgICAgICAgIDogJ2hhcmRCcmVha1RyYWlsaW5nJyxcblxuICAgICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICBsaW5lOiBkYXRhLmVuZC5saW5lLFxuICAgICAgICAgICAgY29sdW1uOiBkYXRhLmVuZC5jb2x1bW4gLSBzaXplLFxuICAgICAgICAgICAgb2Zmc2V0OiBkYXRhLmVuZC5vZmZzZXQgLSBzaXplLFxuICAgICAgICAgICAgX2luZGV4OiBkYXRhLnN0YXJ0Ll9pbmRleCArIGluZGV4LFxuICAgICAgICAgICAgX2J1ZmZlckluZGV4OiBpbmRleFxuICAgICAgICAgICAgICA/IGJ1ZmZlckluZGV4XG4gICAgICAgICAgICAgIDogZGF0YS5zdGFydC5fYnVmZmVySW5kZXggKyBidWZmZXJJbmRleFxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQ6IHNoYWxsb3coZGF0YS5lbmQpXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhLmVuZCA9IHNoYWxsb3codG9rZW4uc3RhcnQpXG5cbiAgICAgICAgaWYgKGRhdGEuc3RhcnQub2Zmc2V0ID09PSBkYXRhLmVuZC5vZmZzZXQpIHtcbiAgICAgICAgICBhc3NpZ24oZGF0YSwgdG9rZW4pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXZlbnRzLnNwbGljZShcbiAgICAgICAgICAgIGV2ZW50SW5kZXgsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgWydlbnRlcicsIHRva2VuLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZXhpdCcsIHRva2VuLCBjb250ZXh0XVxuICAgICAgICAgIClcblxuICAgICAgICAgIGV2ZW50SW5kZXggKz0gMlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGV2ZW50SW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGFyc2VyXG5cbnZhciBpbml0aWFsaXplQ29udGVudCA9IHJlcXVpcmUoJy4vaW5pdGlhbGl6ZS9jb250ZW50JylcbnZhciBpbml0aWFsaXplRG9jdW1lbnQgPSByZXF1aXJlKCcuL2luaXRpYWxpemUvZG9jdW1lbnQnKVxudmFyIGluaXRpYWxpemVGbG93ID0gcmVxdWlyZSgnLi9pbml0aWFsaXplL2Zsb3cnKVxudmFyIGluaXRpYWxpemVUZXh0ID0gcmVxdWlyZSgnLi9pbml0aWFsaXplL3RleHQnKVxudmFyIGNvbnN0cnVjdHMgPSByZXF1aXJlKCcuL2NvbnN0cnVjdHMnKVxudmFyIGNyZWF0ZVRva2VuaXplciA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUtdG9rZW5pemVyJylcbnZhciBjb21iaW5lRXh0ZW5zaW9ucyA9IHJlcXVpcmUoJy4vdXRpbC9jb21iaW5lLWV4dGVuc2lvbnMnKVxudmFyIG1pbmlmbGF0ID0gcmVxdWlyZSgnLi91dGlsL21pbmlmbGF0JylcblxuZnVuY3Rpb24gY3JlYXRlUGFyc2VyKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgcGFyc2VyID0ge1xuICAgIGRlZmluZWQ6IFtdLFxuICAgIGNvbnN0cnVjdHM6IGNvbWJpbmVFeHRlbnNpb25zKFxuICAgICAgW2NvbnN0cnVjdHNdLmNvbmNhdChtaW5pZmxhdChzZXR0aW5ncy5leHRlbnNpb25zKSlcbiAgICApLFxuXG4gICAgY29udGVudDogY3JlYXRlKGluaXRpYWxpemVDb250ZW50KSxcbiAgICBkb2N1bWVudDogY3JlYXRlKGluaXRpYWxpemVEb2N1bWVudCksXG4gICAgZmxvdzogY3JlYXRlKGluaXRpYWxpemVGbG93KSxcbiAgICBzdHJpbmc6IGNyZWF0ZShpbml0aWFsaXplVGV4dC5zdHJpbmcpLFxuICAgIHRleHQ6IGNyZWF0ZShpbml0aWFsaXplVGV4dC50ZXh0KVxuICB9XG5cbiAgcmV0dXJuIHBhcnNlclxuXG4gIGZ1bmN0aW9uIGNyZWF0ZShpbml0aWFsaXplcikge1xuICAgIHJldHVybiBjcmVhdG9yXG4gICAgZnVuY3Rpb24gY3JlYXRvcihmcm9tKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVG9rZW5pemVyKHBhcnNlciwgaW5pdGlhbGl6ZXIsIGZyb20pXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHBvc3Rwcm9jZXNzXG5cbnZhciBzdWJ0b2tlbml6ZSA9IHJlcXVpcmUoJy4vdXRpbC9zdWJ0b2tlbml6ZScpXG5cbmZ1bmN0aW9uIHBvc3Rwcm9jZXNzKGV2ZW50cykge1xuICB3aGlsZSAoIXN1YnRva2VuaXplKGV2ZW50cykpIHtcbiAgICAvLyBFbXB0eVxuICB9XG5cbiAgcmV0dXJuIGV2ZW50c1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBwcmVwcm9jZXNzb3JcblxudmFyIHNlYXJjaCA9IC9bXFwwXFx0XFxuXFxyXS9nXG5cbmZ1bmN0aW9uIHByZXByb2Nlc3NvcigpIHtcbiAgdmFyIHN0YXJ0ID0gdHJ1ZVxuICB2YXIgY29sdW1uID0gMVxuICB2YXIgYnVmZmVyID0gJydcbiAgdmFyIGF0Q2FycmlhZ2VSZXR1cm5cblxuICByZXR1cm4gcHJlcHJvY2Vzc1xuXG4gIGZ1bmN0aW9uIHByZXByb2Nlc3ModmFsdWUsIGVuY29kaW5nLCBlbmQpIHtcbiAgICB2YXIgY2h1bmtzID0gW11cbiAgICB2YXIgbWF0Y2hcbiAgICB2YXIgbmV4dFxuICAgIHZhciBzdGFydFBvc2l0aW9uXG4gICAgdmFyIGVuZFBvc2l0aW9uXG4gICAgdmFyIGNvZGVcblxuICAgIHZhbHVlID0gYnVmZmVyICsgdmFsdWUudG9TdHJpbmcoZW5jb2RpbmcpXG4gICAgc3RhcnRQb3NpdGlvbiA9IDBcbiAgICBidWZmZXIgPSAnJ1xuXG4gICAgaWYgKHN0YXJ0KSB7XG4gICAgICBpZiAodmFsdWUuY2hhckNvZGVBdCgwKSA9PT0gNjUyNzkpIHtcbiAgICAgICAgc3RhcnRQb3NpdGlvbisrXG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgd2hpbGUgKHN0YXJ0UG9zaXRpb24gPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHNlYXJjaC5sYXN0SW5kZXggPSBzdGFydFBvc2l0aW9uXG4gICAgICBtYXRjaCA9IHNlYXJjaC5leGVjKHZhbHVlKVxuICAgICAgZW5kUG9zaXRpb24gPSBtYXRjaCA/IG1hdGNoLmluZGV4IDogdmFsdWUubGVuZ3RoXG4gICAgICBjb2RlID0gdmFsdWUuY2hhckNvZGVBdChlbmRQb3NpdGlvbilcblxuICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICBidWZmZXIgPSB2YWx1ZS5zbGljZShzdGFydFBvc2l0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoY29kZSA9PT0gMTAgJiYgc3RhcnRQb3NpdGlvbiA9PT0gZW5kUG9zaXRpb24gJiYgYXRDYXJyaWFnZVJldHVybikge1xuICAgICAgICBjaHVua3MucHVzaCgtMylcbiAgICAgICAgYXRDYXJyaWFnZVJldHVybiA9IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGF0Q2FycmlhZ2VSZXR1cm4pIHtcbiAgICAgICAgICBjaHVua3MucHVzaCgtNSlcbiAgICAgICAgICBhdENhcnJpYWdlUmV0dXJuID0gdW5kZWZpbmVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRQb3NpdGlvbiA8IGVuZFBvc2l0aW9uKSB7XG4gICAgICAgICAgY2h1bmtzLnB1c2godmFsdWUuc2xpY2Uoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pKVxuICAgICAgICAgIGNvbHVtbiArPSBlbmRQb3NpdGlvbiAtIHN0YXJ0UG9zaXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSAwKSB7XG4gICAgICAgICAgY2h1bmtzLnB1c2goNjU1MzMpXG4gICAgICAgICAgY29sdW1uKytcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSA5KSB7XG4gICAgICAgICAgbmV4dCA9IE1hdGguY2VpbChjb2x1bW4gLyA0KSAqIDRcbiAgICAgICAgICBjaHVua3MucHVzaCgtMilcbiAgICAgICAgICB3aGlsZSAoY29sdW1uKysgPCBuZXh0KSBjaHVua3MucHVzaCgtMSlcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAxMCkge1xuICAgICAgICAgIGNodW5rcy5wdXNoKC00KVxuICAgICAgICAgIGNvbHVtbiA9IDFcbiAgICAgICAgfVxuICAgICAgICAvLyBNdXN0IGJlIGNhcnJpYWdlIHJldHVybi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYXRDYXJyaWFnZVJldHVybiA9IHRydWVcbiAgICAgICAgICBjb2x1bW4gPSAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RhcnRQb3NpdGlvbiA9IGVuZFBvc2l0aW9uICsgMVxuICAgIH1cblxuICAgIGlmIChlbmQpIHtcbiAgICAgIGlmIChhdENhcnJpYWdlUmV0dXJuKSBjaHVua3MucHVzaCgtNSlcbiAgICAgIGlmIChidWZmZXIpIGNodW5rcy5wdXNoKGJ1ZmZlcilcbiAgICAgIGNodW5rcy5wdXNoKG51bGwpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNodW5rc1xuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVBdHRlbnRpb25cbmV4cG9ydHMucmVzb2x2ZUFsbCA9IHJlc29sdmVBbGxBdHRlbnRpb25cblxudmFyIHNoYWxsb3cgPSByZXF1aXJlKCcuLi91dGlsL3NoYWxsb3cnKVxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCcuLi91dGlsL2NodW5rZWQtc3BsaWNlJylcbnZhciBjbGFzc2lmeUNoYXJhY3RlciA9IHJlcXVpcmUoJy4uL3V0aWwvY2xhc3NpZnktY2hhcmFjdGVyJylcbnZhciBtb3ZlUG9pbnQgPSByZXF1aXJlKCcuLi91dGlsL21vdmUtcG9pbnQnKVxudmFyIHJlc29sdmVBbGwgPSByZXF1aXJlKCcuLi91dGlsL3Jlc29sdmUtYWxsJylcblxuLy8gVGFrZSBhbGwgZXZlbnRzIGFuZCByZXNvbHZlIGF0dGVudGlvbiB0byBlbXBoYXNpcyBvciBzdHJvbmcuXG5mdW5jdGlvbiByZXNvbHZlQWxsQXR0ZW50aW9uKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgb3BlblxuICB2YXIgZ3JvdXBcbiAgdmFyIHRleHRcbiAgdmFyIG9wZW5pbmdTZXF1ZW5jZVxuICB2YXIgY2xvc2luZ1NlcXVlbmNlXG4gIHZhciB1c2VcbiAgdmFyIG5leHRFdmVudHNcbiAgdmFyIG9mZnNldFxuXG4gIC8vIFdhbGsgdGhyb3VnaCBhbGwgZXZlbnRzLlxuICAvL1xuICAvLyBOb3RlOiBwZXJmb3JtYW5jZSBvZiB0aGlzIGlzIGZpbmUgb24gYW4gbWIgb2Ygbm9ybWFsIG1hcmtkb3duLCBidXQgaXTigJlzXG4gIC8vIGEgYm90dGxlbmVjayBmb3IgbWFsaWNpb3VzIHN0dWZmLlxuICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICAvLyBGaW5kIGEgdG9rZW4gdGhhdCBjYW4gY2xvc2UuXG4gICAgaWYgKFxuICAgICAgZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJyAmJlxuICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnYXR0ZW50aW9uU2VxdWVuY2UnICYmXG4gICAgICBldmVudHNbaW5kZXhdWzFdLl9jbG9zZVxuICAgICkge1xuICAgICAgb3BlbiA9IGluZGV4XG5cbiAgICAgIC8vIE5vdyB3YWxrIGJhY2sgdG8gZmluZCBhbiBvcGVuZXIuXG4gICAgICB3aGlsZSAob3Blbi0tKSB7XG4gICAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBvcGVuIHRoZSBjbG9zZXIuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBldmVudHNbb3Blbl1bMF0gPT09ICdleGl0JyAmJlxuICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID09PSAnYXR0ZW50aW9uU2VxdWVuY2UnICYmXG4gICAgICAgICAgZXZlbnRzW29wZW5dWzFdLl9vcGVuICYmXG4gICAgICAgICAgLy8gSWYgdGhlIG1hcmtlcnMgYXJlIHRoZSBzYW1lOlxuICAgICAgICAgIGNvbnRleHQuc2xpY2VTZXJpYWxpemUoZXZlbnRzW29wZW5dWzFdKS5jaGFyQ29kZUF0KDApID09PVxuICAgICAgICAgICAgY29udGV4dC5zbGljZVNlcmlhbGl6ZShldmVudHNbaW5kZXhdWzFdKS5jaGFyQ29kZUF0KDApXG4gICAgICAgICkge1xuICAgICAgICAgIC8vIElmIHRoZSBvcGVuaW5nIGNhbiBjbG9zZSBvciB0aGUgY2xvc2luZyBjYW4gb3BlbixcbiAgICAgICAgICAvLyBhbmQgdGhlIGNsb3NlIHNpemUgKmlzIG5vdCogYSBtdWx0aXBsZSBvZiB0aHJlZSxcbiAgICAgICAgICAvLyBidXQgdGhlIHN1bSBvZiB0aGUgb3BlbmluZyBhbmQgY2xvc2luZyBzaXplICppcyogbXVsdGlwbGUgb2YgdGhyZWUsXG4gICAgICAgICAgLy8gdGhlbiBkb27igJl0IG1hdGNoLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChldmVudHNbb3Blbl1bMV0uX2Nsb3NlIHx8IGV2ZW50c1tpbmRleF1bMV0uX29wZW4pICYmXG4gICAgICAgICAgICAoZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQpICUgMyAmJlxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgKGV2ZW50c1tvcGVuXVsxXS5lbmQub2Zmc2V0IC1cbiAgICAgICAgICAgICAgICBldmVudHNbb3Blbl1bMV0uc3RhcnQub2Zmc2V0ICtcbiAgICAgICAgICAgICAgICBldmVudHNbaW5kZXhdWzFdLmVuZC5vZmZzZXQgLVxuICAgICAgICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQub2Zmc2V0KSAlXG4gICAgICAgICAgICAgIDNcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTnVtYmVyIG9mIG1hcmtlcnMgdG8gdXNlIGZyb20gdGhlIHNlcXVlbmNlLlxuICAgICAgICAgIHVzZSA9XG4gICAgICAgICAgICBldmVudHNbb3Blbl1bMV0uZW5kLm9mZnNldCAtIGV2ZW50c1tvcGVuXVsxXS5zdGFydC5vZmZzZXQgPiAxICYmXG4gICAgICAgICAgICBldmVudHNbaW5kZXhdWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbaW5kZXhdWzFdLnN0YXJ0Lm9mZnNldCA+IDFcbiAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgIDogMVxuXG4gICAgICAgICAgb3BlbmluZ1NlcXVlbmNlID0ge1xuICAgICAgICAgICAgdHlwZTogdXNlID4gMSA/ICdzdHJvbmdTZXF1ZW5jZScgOiAnZW1waGFzaXNTZXF1ZW5jZScsXG4gICAgICAgICAgICBzdGFydDogbW92ZVBvaW50KHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLmVuZCksIC11c2UpLFxuICAgICAgICAgICAgZW5kOiBzaGFsbG93KGV2ZW50c1tvcGVuXVsxXS5lbmQpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2xvc2luZ1NlcXVlbmNlID0ge1xuICAgICAgICAgICAgdHlwZTogdXNlID4gMSA/ICdzdHJvbmdTZXF1ZW5jZScgOiAnZW1waGFzaXNTZXF1ZW5jZScsXG4gICAgICAgICAgICBzdGFydDogc2hhbGxvdyhldmVudHNbaW5kZXhdWzFdLnN0YXJ0KSxcbiAgICAgICAgICAgIGVuZDogbW92ZVBvaW50KHNoYWxsb3coZXZlbnRzW2luZGV4XVsxXS5zdGFydCksIHVzZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ZXh0ID0ge1xuICAgICAgICAgICAgdHlwZTogdXNlID4gMSA/ICdzdHJvbmdUZXh0JyA6ICdlbXBoYXNpc1RleHQnLFxuICAgICAgICAgICAgc3RhcnQ6IHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLmVuZCksXG4gICAgICAgICAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2luZGV4XVsxXS5zdGFydClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBncm91cCA9IHtcbiAgICAgICAgICAgIHR5cGU6IHVzZSA+IDEgPyAnc3Ryb25nJyA6ICdlbXBoYXNpcycsXG4gICAgICAgICAgICBzdGFydDogc2hhbGxvdyhvcGVuaW5nU2VxdWVuY2Uuc3RhcnQpLFxuICAgICAgICAgICAgZW5kOiBzaGFsbG93KGNsb3NpbmdTZXF1ZW5jZS5lbmQpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXZlbnRzW29wZW5dWzFdLmVuZCA9IHNoYWxsb3cob3BlbmluZ1NlcXVlbmNlLnN0YXJ0KVxuICAgICAgICAgIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQgPSBzaGFsbG93KGNsb3NpbmdTZXF1ZW5jZS5lbmQpXG5cbiAgICAgICAgICBuZXh0RXZlbnRzID0gW11cblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIG1hcmtlcnMgaW4gdGhlIG9wZW5pbmcsIGFkZCB0aGVtIGJlZm9yZS5cbiAgICAgICAgICBpZiAoZXZlbnRzW29wZW5dWzFdLmVuZC5vZmZzZXQgLSBldmVudHNbb3Blbl1bMV0uc3RhcnQub2Zmc2V0KSB7XG4gICAgICAgICAgICBjaHVua2VkU3BsaWNlKG5leHRFdmVudHMsIG5leHRFdmVudHMubGVuZ3RoLCAwLCBbXG4gICAgICAgICAgICAgIFsnZW50ZXInLCBldmVudHNbb3Blbl1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbb3Blbl1bMV0sIGNvbnRleHRdXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE9wZW5pbmcuXG4gICAgICAgICAgY2h1bmtlZFNwbGljZShuZXh0RXZlbnRzLCBuZXh0RXZlbnRzLmxlbmd0aCwgMCwgW1xuICAgICAgICAgICAgWydlbnRlcicsIGdyb3VwLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZW50ZXInLCBvcGVuaW5nU2VxdWVuY2UsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydleGl0Jywgb3BlbmluZ1NlcXVlbmNlLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZW50ZXInLCB0ZXh0LCBjb250ZXh0XVxuICAgICAgICAgIF0pXG5cbiAgICAgICAgICAvLyBCZXR3ZWVuLlxuICAgICAgICAgIGNodW5rZWRTcGxpY2UoXG4gICAgICAgICAgICBuZXh0RXZlbnRzLFxuICAgICAgICAgICAgbmV4dEV2ZW50cy5sZW5ndGgsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgcmVzb2x2ZUFsbChcbiAgICAgICAgICAgICAgY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5pbnNpZGVTcGFuLm51bGwsXG4gICAgICAgICAgICAgIGV2ZW50cy5zbGljZShvcGVuICsgMSwgaW5kZXgpLFxuICAgICAgICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gQ2xvc2luZy5cbiAgICAgICAgICBjaHVua2VkU3BsaWNlKG5leHRFdmVudHMsIG5leHRFdmVudHMubGVuZ3RoLCAwLCBbXG4gICAgICAgICAgICBbJ2V4aXQnLCB0ZXh0LCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZW50ZXInLCBjbG9zaW5nU2VxdWVuY2UsIGNvbnRleHRdLFxuICAgICAgICAgICAgWydleGl0JywgY2xvc2luZ1NlcXVlbmNlLCBjb250ZXh0XSxcbiAgICAgICAgICAgIFsnZXhpdCcsIGdyb3VwLCBjb250ZXh0XVxuICAgICAgICAgIF0pXG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbW9yZSBtYXJrZXJzIGluIHRoZSBjbG9zaW5nLCBhZGQgdGhlbSBhZnRlci5cbiAgICAgICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IDJcbiAgICAgICAgICAgIGNodW5rZWRTcGxpY2UobmV4dEV2ZW50cywgbmV4dEV2ZW50cy5sZW5ndGgsIDAsIFtcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBldmVudHNbaW5kZXhdWzFdLCBjb250ZXh0XVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Zmc2V0ID0gMFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBvcGVuIC0gMSwgaW5kZXggLSBvcGVuICsgMywgbmV4dEV2ZW50cylcblxuICAgICAgICAgIGluZGV4ID0gb3BlbiArIG5leHRFdmVudHMubGVuZ3RoIC0gb2Zmc2V0IC0gMlxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgcmVtYWluaW5nIHNlcXVlbmNlcy5cbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdhdHRlbnRpb25TZXF1ZW5jZScpIHtcbiAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9ICdkYXRhJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVBdHRlbnRpb24oZWZmZWN0cywgb2spIHtcbiAgdmFyIGJlZm9yZSA9IGNsYXNzaWZ5Q2hhcmFjdGVyKHRoaXMucHJldmlvdXMpXG4gIHZhciBtYXJrZXJcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignYXR0ZW50aW9uU2VxdWVuY2UnKVxuICAgIG1hcmtlciA9IGNvZGVcbiAgICByZXR1cm4gc2VxdWVuY2UoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcXVlbmNlKGNvZGUpIHtcbiAgICB2YXIgdG9rZW5cbiAgICB2YXIgYWZ0ZXJcbiAgICB2YXIgb3BlblxuICAgIHZhciBjbG9zZVxuXG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VxdWVuY2VcbiAgICB9XG5cbiAgICB0b2tlbiA9IGVmZmVjdHMuZXhpdCgnYXR0ZW50aW9uU2VxdWVuY2UnKVxuICAgIGFmdGVyID0gY2xhc3NpZnlDaGFyYWN0ZXIoY29kZSlcbiAgICBvcGVuID0gIWFmdGVyIHx8IChhZnRlciA9PT0gMiAmJiBiZWZvcmUpXG4gICAgY2xvc2UgPSAhYmVmb3JlIHx8IChiZWZvcmUgPT09IDIgJiYgYWZ0ZXIpXG4gICAgdG9rZW4uX29wZW4gPSBtYXJrZXIgPT09IDQyID8gb3BlbiA6IG9wZW4gJiYgKGJlZm9yZSB8fCAhY2xvc2UpXG4gICAgdG9rZW4uX2Nsb3NlID0gbWFya2VyID09PSA0MiA/IGNsb3NlIDogY2xvc2UgJiYgKGFmdGVyIHx8ICFvcGVuKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVBdXRvbGlua1xuXG52YXIgYXNjaWlBbHBoYSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYScpXG52YXIgYXNjaWlBbHBoYW51bWVyaWMgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktYWxwaGFudW1lcmljJylcbnZhciBhc2NpaUF0ZXh0ID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWF0ZXh0JylcbnZhciBhc2NpaUNvbnRyb2wgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktY29udHJvbCcpXG5cbmZ1bmN0aW9uIHRva2VuaXplQXV0b2xpbmsoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2l6ZVxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdhdXRvbGluaycpXG4gICAgZWZmZWN0cy5lbnRlcignYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtNYXJrZXInKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2F1dG9saW5rUHJvdG9jb2wnKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplID0gMVxuICAgICAgcmV0dXJuIHNjaGVtZU9yRW1haWxBdGV4dFxuICAgIH1cblxuICAgIHJldHVybiBhc2NpaUF0ZXh0KGNvZGUpID8gZW1haWxBdGV4dChjb2RlKSA6IG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2NoZW1lT3JFbWFpbEF0ZXh0KGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gNDMgfHwgY29kZSA9PT0gNDUgfHwgY29kZSA9PT0gNDYgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSlcbiAgICAgID8gc2NoZW1lSW5zaWRlT3JFbWFpbEF0ZXh0KGNvZGUpXG4gICAgICA6IGVtYWlsQXRleHQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVtZUluc2lkZU9yRW1haWxBdGV4dChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDU4KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB1cmxJbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoY29kZSA9PT0gNDMgfHwgY29kZSA9PT0gNDUgfHwgY29kZSA9PT0gNDYgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpICYmXG4gICAgICBzaXplKysgPCAzMlxuICAgICkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2NoZW1lSW5zaWRlT3JFbWFpbEF0ZXh0XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtYWlsQXRleHQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHVybEluc2lkZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F1dG9saW5rUHJvdG9jb2wnKVxuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSAzMiB8fCBjb2RlID09PSA2MCB8fCBhc2NpaUNvbnRyb2woY29kZSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gdXJsSW5zaWRlXG4gIH1cblxuICBmdW5jdGlvbiBlbWFpbEF0ZXh0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSA9IDBcbiAgICAgIHJldHVybiBlbWFpbEF0U2lnbk9yRG90XG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQXRleHQoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVtYWlsQXRleHRcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbWFpbEF0U2lnbk9yRG90KGNvZGUpIHtcbiAgICByZXR1cm4gYXNjaWlBbHBoYW51bWVyaWMoY29kZSkgPyBlbWFpbExhYmVsKGNvZGUpIDogbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbWFpbExhYmVsKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSA9IDBcbiAgICAgIHJldHVybiBlbWFpbEF0U2lnbk9yRG90XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYyKSB7XG4gICAgICAvLyBFeGl0LCB0aGVuIGNoYW5nZSB0aGUgdHlwZS5cbiAgICAgIGVmZmVjdHMuZXhpdCgnYXV0b2xpbmtQcm90b2NvbCcpLnR5cGUgPSAnYXV0b2xpbmtFbWFpbCdcbiAgICAgIHJldHVybiBlbmQoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZW1haWxWYWx1ZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZW1haWxWYWx1ZShjb2RlKSB7XG4gICAgaWYgKChjb2RlID09PSA0NSB8fCBhc2NpaUFscGhhbnVtZXJpYyhjb2RlKSkgJiYgc2l6ZSsrIDwgNjMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvZGUgPT09IDQ1ID8gZW1haWxWYWx1ZSA6IGVtYWlsTGFiZWxcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbmQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2F1dG9saW5rTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2F1dG9saW5rTWFya2VyJylcbiAgICBlZmZlY3RzLmV4aXQoJ2F1dG9saW5rJylcbiAgICByZXR1cm4gb2tcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQmxvY2tRdW90ZVN0YXJ0XG5leHBvcnRzLmNvbnRpbnVhdGlvbiA9IHt0b2tlbml6ZTogdG9rZW5pemVCbG9ja1F1b3RlQ29udGludWF0aW9ufVxuZXhwb3J0cy5leGl0ID0gZXhpdFxuXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZScpXG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplQmxvY2tRdW90ZVN0YXJ0KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgaWYgKCFzZWxmLmNvbnRhaW5lclN0YXRlLm9wZW4pIHtcbiAgICAgICAgZWZmZWN0cy5lbnRlcignYmxvY2tRdW90ZScsIHtfY29udGFpbmVyOiB0cnVlfSlcbiAgICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5vcGVuID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdibG9ja1F1b3RlUHJlZml4JylcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2Jsb2NrUXVvdGVNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2Jsb2NrUXVvdGVNYXJrZXInKVxuICAgICAgcmV0dXJuIGFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdibG9ja1F1b3RlUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnYmxvY2tRdW90ZVByZWZpeFdoaXRlc3BhY2UnKVxuICAgICAgZWZmZWN0cy5leGl0KCdibG9ja1F1b3RlUHJlZml4JylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnYmxvY2tRdW90ZVByZWZpeCcpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVCbG9ja1F1b3RlQ29udGludWF0aW9uKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIGNyZWF0ZVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgZWZmZWN0cy5hdHRlbXB0KGV4cG9ydHMsIG9rLCBub2spLFxuICAgICdsaW5lUHJlZml4JyxcbiAgICA0XG4gIClcbn1cblxuZnVuY3Rpb24gZXhpdChlZmZlY3RzKSB7XG4gIGVmZmVjdHMuZXhpdCgnYmxvY2tRdW90ZScpXG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVDaGFyYWN0ZXJFc2NhcGVcblxudmFyIGFzY2lpUHVuY3R1YXRpb24gPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktcHVuY3R1YXRpb24nKVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNoYXJhY3RlckVzY2FwZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJFc2NhcGUnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2VzY2FwZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdlc2NhcGVNYXJrZXInKVxuICAgIHJldHVybiBvcGVuXG4gIH1cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlQdW5jdHVhdGlvbihjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyRXNjYXBlVmFsdWUnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlckVzY2FwZVZhbHVlJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyRXNjYXBlJylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQ2hhcmFjdGVyUmVmZXJlbmNlXG5cbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcy9kZWNvZGUtZW50aXR5JylcbnZhciBhc2NpaUFscGhhbnVtZXJpYyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYW51bWVyaWMnKVxudmFyIGFzY2lpRGlnaXQgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktZGlnaXQnKVxudmFyIGFzY2lpSGV4RGlnaXQgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktaGV4LWRpZ2l0JylcblxuZnVuY3Rpb24gdG9rZW5pemVDaGFyYWN0ZXJSZWZlcmVuY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIHNpemUgPSAwXG4gIHZhciBtYXhcbiAgdmFyIHRlc3RcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlJylcbiAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VyJylcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJOdW1lcmljJylcbiAgICAgIHJldHVybiBudW1lcmljXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWUnKVxuICAgIG1heCA9IDMxXG4gICAgdGVzdCA9IGFzY2lpQWxwaGFudW1lcmljXG4gICAgcmV0dXJuIHZhbHVlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBudW1lcmljKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gODggfHwgY29kZSA9PT0gMTIwKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXJIZXhhZGVjaW1hbCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlTWFya2VySGV4YWRlY2ltYWwnKVxuICAgICAgZWZmZWN0cy5lbnRlcignY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWUnKVxuICAgICAgbWF4ID0gNlxuICAgICAgdGVzdCA9IGFzY2lpSGV4RGlnaXRcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NoYXJhY3RlclJlZmVyZW5jZVZhbHVlJylcbiAgICBtYXggPSA3XG4gICAgdGVzdCA9IGFzY2lpRGlnaXRcbiAgICByZXR1cm4gdmFsdWUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbHVlKGNvZGUpIHtcbiAgICB2YXIgdG9rZW5cblxuICAgIGlmIChjb2RlID09PSA1OSAmJiBzaXplKSB7XG4gICAgICB0b2tlbiA9IGVmZmVjdHMuZXhpdCgnY2hhcmFjdGVyUmVmZXJlbmNlVmFsdWUnKVxuXG4gICAgICBpZiAodGVzdCA9PT0gYXNjaWlBbHBoYW51bWVyaWMgJiYgIWRlY29kZShzZWxmLnNsaWNlU2VyaWFsaXplKHRva2VuKSkpIHtcbiAgICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdjaGFyYWN0ZXJSZWZlcmVuY2VNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NoYXJhY3RlclJlZmVyZW5jZScpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICBpZiAodGVzdChjb2RlKSAmJiBzaXplKysgPCBtYXgpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVDb2RlRmVuY2VkXG5leHBvcnRzLmNvbmNyZXRlID0gdHJ1ZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlJylcblxudmFyIHByZWZpeFNpemUgPSByZXF1aXJlKCcuLi91dGlsL3ByZWZpeC1zaXplJylcbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplQ29kZUZlbmNlZChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5pdGlhbFByZWZpeCA9IHByZWZpeFNpemUodGhpcy5ldmVudHMsICdsaW5lUHJlZml4JylcbiAgdmFyIHNpemVPcGVuID0gMFxuICB2YXIgbWFya2VyXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGZW5jZWQnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGZW5jZWRGZW5jZScpXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlU2VxdWVuY2UnKVxuICAgIG1hcmtlciA9IGNvZGVcbiAgICByZXR1cm4gc2VxdWVuY2VPcGVuKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzZXF1ZW5jZU9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZU9wZW4rK1xuICAgICAgcmV0dXJuIHNlcXVlbmNlT3BlblxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlU2VxdWVuY2UnKVxuICAgIHJldHVybiBzaXplT3BlbiA8IDNcbiAgICAgID8gbm9rKGNvZGUpXG4gICAgICA6IGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGluZm9PcGVuLCAnd2hpdGVzcGFjZScpKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbmZvT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gb3BlbkFmdGVyKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlSW5mbycpXG4gICAgZWZmZWN0cy5lbnRlcignY2h1bmtTdHJpbmcnLCB7Y29udGVudFR5cGU6ICdzdHJpbmcnfSlcbiAgICByZXR1cm4gaW5mbyhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5mbyhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWRGZW5jZUluZm8nKVxuICAgICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGluZm9BZnRlciwgJ3doaXRlc3BhY2UnKShjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5NiAmJiBjb2RlID09PSBtYXJrZXIpIHJldHVybiBub2soY29kZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gaW5mb1xuICB9XG5cbiAgZnVuY3Rpb24gaW5mb0FmdGVyKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBvcGVuQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2VNZXRhJylcbiAgICBlZmZlY3RzLmVudGVyKCdjaHVua1N0cmluZycsIHtjb250ZW50VHlwZTogJ3N0cmluZyd9KVxuICAgIHJldHVybiBtZXRhKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBtZXRhKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtTdHJpbmcnKVxuICAgICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2VNZXRhJylcbiAgICAgIHJldHVybiBvcGVuQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gOTYgJiYgY29kZSA9PT0gbWFya2VyKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIG1ldGFcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5BZnRlcihjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkRmVuY2UnKVxuICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rKGNvZGUpIDogY29udGVudChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGVudChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBhZnRlcihjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAge3Rva2VuaXplOiB0b2tlbml6ZUNsb3NpbmdGZW5jZSwgcGFydGlhbDogdHJ1ZX0sXG4gICAgICAgIGFmdGVyLFxuICAgICAgICBpbml0aWFsUHJlZml4XG4gICAgICAgICAgPyBjcmVhdGVTcGFjZShlZmZlY3RzLCBjb250ZW50LCAnbGluZVByZWZpeCcsIGluaXRpYWxQcmVmaXggKyAxKVxuICAgICAgICAgIDogY29udGVudFxuICAgICAgKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVGbG93VmFsdWUnKVxuICAgIHJldHVybiBjb250ZW50Q29udGludWUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRlbnRDb250aW51ZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGbG93VmFsdWUnKVxuICAgICAgcmV0dXJuIGNvbnRlbnQoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29udGVudENvbnRpbnVlXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdjb2RlRmVuY2VkJylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRva2VuaXplQ2xvc2luZ0ZlbmNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgICB2YXIgc2l6ZSA9IDBcblxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBjbG9zaW5nUHJlZml4QWZ0ZXIsICdsaW5lUHJlZml4JywgNClcblxuICAgIGZ1bmN0aW9uIGNsb3NpbmdQcmVmaXhBZnRlcihjb2RlKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmVuY2VkRmVuY2UnKVxuICAgICAgZWZmZWN0cy5lbnRlcignY29kZUZlbmNlZEZlbmNlU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIGNsb3NpbmdTZXF1ZW5jZShjb2RlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZShjb2RlKSB7XG4gICAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgICBzaXplKytcbiAgICAgICAgcmV0dXJuIGNsb3NpbmdTZXF1ZW5jZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA8IHNpemVPcGVuKSByZXR1cm4gbm9rKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGZW5jZWRGZW5jZVNlcXVlbmNlJylcbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBjbG9zaW5nU2VxdWVuY2VFbmQsICd3aGl0ZXNwYWNlJykoY29kZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zaW5nU2VxdWVuY2VFbmQoY29kZSkge1xuICAgICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICAgIGVmZmVjdHMuZXhpdCgnY29kZUZlbmNlZEZlbmNlJylcbiAgICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUNvZGVJbmRlbnRlZFxuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZUNvZGVJbmRlbnRlZFxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCcuLi91dGlsL2NodW5rZWQtc3BsaWNlJylcbnZhciBwcmVmaXhTaXplID0gcmVxdWlyZSgnLi4vdXRpbC9wcmVmaXgtc2l6ZScpXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxuXG52YXIgY29udGludWVkSW5kZW50ID0ge3Rva2VuaXplOiB0b2tlbml6ZUNvbnRpbnVlZEluZGVudCwgcGFydGlhbDogdHJ1ZX1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvZGVJbmRlbnRlZChldmVudHMsIGNvbnRleHQpIHtcbiAgdmFyIGNvZGUgPSB7XG4gICAgdHlwZTogJ2NvZGVJbmRlbnRlZCcsXG4gICAgc3RhcnQ6IGV2ZW50c1swXVsxXS5zdGFydCxcbiAgICBlbmQ6IGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0uZW5kXG4gIH1cblxuICBjaHVua2VkU3BsaWNlKGV2ZW50cywgMCwgMCwgW1snZW50ZXInLCBjb2RlLCBjb250ZXh0XV0pXG4gIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBldmVudHMubGVuZ3RoLCAwLCBbWydleGl0JywgY29kZSwgY29udGV4dF1dKVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDb2RlSW5kZW50ZWQoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gY3JlYXRlU3BhY2UoXG4gICAgZWZmZWN0cyxcbiAgICBhZnRlckluaXRpYWwsXG4gICAgJ2xpbmVQcmVmaXgnLFxuXG4gICAgNCArIDFcbiAgKVxuXG4gIGZ1bmN0aW9uIGFmdGVySW5pdGlhbChjb2RlKSB7XG4gICAgLy8gRmxvdyBjaGVja3MgYmxhbmsgbGluZXMgZmlyc3QsIHNvIHdlIGRvbuKAmXQgaGF2ZSBFT0wvRU9GLlxuXG4gICAgaWYgKHByZWZpeFNpemUoc2VsZi5ldmVudHMsICdsaW5lUHJlZml4JykgPCA0KSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignY29kZUZsb3dWYWx1ZScpXG4gICAgcmV0dXJuIGNvbnRlbnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyUHJlZml4KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChjb250aW51ZWRJbmRlbnQsIGFmdGVyUHJlZml4LCBvaykoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlRmxvd1ZhbHVlJylcbiAgICByZXR1cm4gY29udGVudChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGVudChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVGbG93VmFsdWUnKVxuICAgICAgcmV0dXJuIGFmdGVyUHJlZml4KGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvbnRlbnRcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvbnRpbnVlZEluZGVudChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGFmdGVyUHJlZml4LFxuICAgICdsaW5lUHJlZml4JyxcblxuICAgIDQgKyAxXG4gIClcblxuICBmdW5jdGlvbiBhZnRlclByZWZpeChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG5cbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgYWZ0ZXJQcmVmaXgsXG4gICAgICAgICdsaW5lUHJlZml4JyxcblxuICAgICAgICA0ICsgMVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhTaXplKHNlbGYuZXZlbnRzLCAnbGluZVByZWZpeCcpIDwgNCA/IG5vayhjb2RlKSA6IG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUNvZGVUZXh0XG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlQ29kZVRleHRcbmV4cG9ydHMucHJldmlvdXMgPSBwcmV2aW91c1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxuZnVuY3Rpb24gcmVzb2x2ZUNvZGVUZXh0KGV2ZW50cykge1xuICB2YXIgdGFpbEV4aXRJbmRleCA9IGV2ZW50cy5sZW5ndGggLSA0XG4gIHZhciBoZWFkRW50ZXJJbmRleCA9IDNcbiAgdmFyIGluZGV4XG4gIHZhciBlbnRlclxuXG4gIC8vIElmIHdlIHN0YXJ0IGFuZCBlbmQgd2l0aCBhbiBFT0wgb3IgYSBzcGFjZS5cbiAgaWYgKFxuICAgIChldmVudHNbaGVhZEVudGVySW5kZXhdWzFdLnR5cGUgPT09ICdsaW5lRW5kaW5nJyB8fFxuICAgICAgZXZlbnRzW2hlYWRFbnRlckluZGV4XVsxXS50eXBlID09PSAnc3BhY2UnKSAmJlxuICAgIChldmVudHNbdGFpbEV4aXRJbmRleF1bMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmcnIHx8XG4gICAgICBldmVudHNbdGFpbEV4aXRJbmRleF1bMV0udHlwZSA9PT0gJ3NwYWNlJylcbiAgKSB7XG4gICAgaW5kZXggPSBoZWFkRW50ZXJJbmRleFxuXG4gICAgLy8gQW5kIHdlIGhhdmUgZGF0YS5cbiAgICB3aGlsZSAoKytpbmRleCA8IHRhaWxFeGl0SW5kZXgpIHtcbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdjb2RlVGV4dERhdGEnKSB7XG4gICAgICAgIC8vIFRoZW4gd2UgaGF2ZSBwYWRkaW5nLlxuICAgICAgICBldmVudHNbdGFpbEV4aXRJbmRleF1bMV0udHlwZSA9IGV2ZW50c1toZWFkRW50ZXJJbmRleF1bMV0udHlwZSA9XG4gICAgICAgICAgJ2NvZGVUZXh0UGFkZGluZydcblxuICAgICAgICBoZWFkRW50ZXJJbmRleCArPSAyXG4gICAgICAgIHRhaWxFeGl0SW5kZXggLT0gMlxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE1lcmdlIGFkamFjZW50IHNwYWNlcyBhbmQgZGF0YS5cbiAgaW5kZXggPSBoZWFkRW50ZXJJbmRleCAtIDFcbiAgdGFpbEV4aXRJbmRleCsrXG5cbiAgd2hpbGUgKCsraW5kZXggPD0gdGFpbEV4aXRJbmRleCkge1xuICAgIGlmIChlbnRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoaW5kZXggIT09IHRhaWxFeGl0SW5kZXggJiYgZXZlbnRzW2luZGV4XVsxXS50eXBlICE9PSAnbGluZUVuZGluZycpIHtcbiAgICAgICAgZW50ZXIgPSBpbmRleFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBpbmRleCA9PT0gdGFpbEV4aXRJbmRleCB8fFxuICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZydcbiAgICApIHtcbiAgICAgIGV2ZW50c1tlbnRlcl1bMV0udHlwZSA9ICdjb2RlVGV4dERhdGEnXG5cbiAgICAgIGlmIChpbmRleCAhPT0gZW50ZXIgKyAyKSB7XG4gICAgICAgIGV2ZW50c1tlbnRlcl1bMV0uZW5kID0gZXZlbnRzW2luZGV4IC0gMV1bMV0uZW5kXG4gICAgICAgIGV2ZW50cy5zcGxpY2UoZW50ZXIgKyAyLCBpbmRleCAtIGVudGVyIC0gMilcbiAgICAgICAgdGFpbEV4aXRJbmRleCAtPSBpbmRleCAtIGVudGVyIC0gMlxuICAgICAgICBpbmRleCA9IGVudGVyICsgMlxuICAgICAgfVxuXG4gICAgICBlbnRlciA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gcHJldmlvdXMoY29kZSkge1xuICAvLyBJZiB0aGVyZSBpcyBhIHByZXZpb3VzIGNvZGUsIHRoZXJlIHdpbGwgYWx3YXlzIGJlIGEgdGFpbC5cbiAgcmV0dXJuIChcbiAgICBjb2RlICE9PSA5NiB8fFxuICAgIHRoaXMuZXZlbnRzW3RoaXMuZXZlbnRzLmxlbmd0aCAtIDFdWzFdLnR5cGUgPT09ICdjaGFyYWN0ZXJFc2NhcGUnXG4gIClcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDb2RlVGV4dChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2l6ZU9wZW4gPSAwXG4gIHZhciBzaXplXG4gIHZhciB0b2tlblxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdjb2RlVGV4dCcpXG4gICAgZWZmZWN0cy5lbnRlcignY29kZVRleHRTZXF1ZW5jZScpXG4gICAgcmV0dXJuIG9wZW5pbmdTZXF1ZW5jZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gb3BlbmluZ1NlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZU9wZW4rK1xuICAgICAgcmV0dXJuIG9wZW5pbmdTZXF1ZW5jZVxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnY29kZVRleHRTZXF1ZW5jZScpXG4gICAgcmV0dXJuIGdhcChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2FwKGNvZGUpIHtcbiAgICAvLyBFT0YuXG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICAvLyBDbG9zaW5nIGZlbmNlP1xuICAgIC8vIENvdWxkIGFsc28gYmUgZGF0YS5cbiAgICBpZiAoY29kZSA9PT0gOTYpIHtcbiAgICAgIHRva2VuID0gZWZmZWN0cy5lbnRlcignY29kZVRleHRTZXF1ZW5jZScpXG4gICAgICBzaXplID0gMFxuICAgICAgcmV0dXJuIGNsb3NpbmdTZXF1ZW5jZShjb2RlKVxuICAgIH1cblxuICAgIC8vIFRhYnMgZG9u4oCZdCB3b3JrLCBhbmQgdmlydHVhbCBzcGFjZXMgZG9u4oCZdCBtYWtlIHNlbnNlLlxuICAgIGlmIChjb2RlID09PSAzMikge1xuICAgICAgZWZmZWN0cy5lbnRlcignc3BhY2UnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3NwYWNlJylcbiAgICAgIHJldHVybiBnYXBcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICAgIHJldHVybiBnYXBcbiAgICB9XG5cbiAgICAvLyBEYXRhLlxuICAgIGVmZmVjdHMuZW50ZXIoJ2NvZGVUZXh0RGF0YScpXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfVxuXG4gIC8vIEluIGNvZGUuXG4gIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDMyIHx8XG4gICAgICBjb2RlID09PSA5NiB8fFxuICAgICAgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVUZXh0RGF0YScpXG4gICAgICByZXR1cm4gZ2FwKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8vIENsb3NpbmcgZmVuY2UuXG4gIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZShjb2RlKSB7XG4gICAgLy8gTW9yZS5cbiAgICBpZiAoY29kZSA9PT0gOTYpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSsrXG4gICAgICByZXR1cm4gY2xvc2luZ1NlcXVlbmNlXG4gICAgfVxuXG4gICAgLy8gRG9uZSFcbiAgICBpZiAoc2l6ZSA9PT0gc2l6ZU9wZW4pIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnY29kZVRleHRTZXF1ZW5jZScpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2NvZGVUZXh0JylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIC8vIE1vcmUgb3IgbGVzcyBhY2NlbnRzOiBtYXJrIGFzIGRhdGEuXG4gICAgdG9rZW4udHlwZSA9ICdjb2RlVGV4dERhdGEnXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQ29udGVudFxuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZUNvbnRlbnRcbmV4cG9ydHMuaW50ZXJydXB0aWJsZSA9IHRydWVcbmV4cG9ydHMubGF6eSA9IHRydWVcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbnZhciBzdWJ0b2tlbml6ZSA9IHJlcXVpcmUoJy4uL3V0aWwvc3VidG9rZW5pemUnKVxudmFyIHByZWZpeFNpemUgPSByZXF1aXJlKCcuLi91dGlsL3ByZWZpeC1zaXplJylcbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbnZhciBsb29rYWhlYWRDb25zdHJ1Y3QgPSB7dG9rZW5pemU6IHRva2VuaXplTG9va2FoZWFkQ29uc3RydWN0LCBwYXJ0aWFsOiB0cnVlfVxuXG4vLyBDb250ZW50IGlzIHRyYW5zcGFyZW50OiBpdOKAmXMgcGFyc2VkIHJpZ2h0IG5vdy4gVGhhdCB3YXksIGRlZmluaXRpb25zIGFyZSBhbHNvXG4vLyBwYXJzZWQgcmlnaHQgbm93OiBiZWZvcmUgdGV4dCBpbiBwYXJhZ3JhcGhzIChzcGVjaWZpY2FsbHksIG1lZGlhKSBhcmUgcGFyc2VkLlxuZnVuY3Rpb24gcmVzb2x2ZUNvbnRlbnQoZXZlbnRzKSB7XG4gIHN1YnRva2VuaXplKGV2ZW50cylcbiAgcmV0dXJuIGV2ZW50c1xufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUNvbnRlbnQoZWZmZWN0cywgb2spIHtcbiAgdmFyIHByZXZpb3VzXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2NvbnRlbnQnKVxuICAgIHByZXZpb3VzID0gZWZmZWN0cy5lbnRlcignY2h1bmtDb250ZW50Jywge1xuICAgICAgY29udGVudFR5cGU6ICdjb250ZW50J1xuICAgIH0pXG5cbiAgICByZXR1cm4gZGF0YShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGF0YShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb250ZW50RW5kKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIGxvb2thaGVhZENvbnN0cnVjdCxcbiAgICAgICAgY29udGVudENvbnRpbnVlLFxuICAgICAgICBjb250ZW50RW5kXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gRGF0YS5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGVudEVuZChjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdjaHVua0NvbnRlbnQnKVxuICAgIGVmZmVjdHMuZXhpdCgnY29udGVudCcpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250ZW50Q29udGludWUoY29kZSkge1xuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtDb250ZW50JylcbiAgICBwcmV2aW91cyA9IHByZXZpb3VzLm5leHQgPSBlZmZlY3RzLmVudGVyKCdjaHVua0NvbnRlbnQnLCB7XG4gICAgICBjb250ZW50VHlwZTogJ2NvbnRlbnQnLFxuICAgICAgcHJldmlvdXM6IHByZXZpb3VzXG4gICAgfSlcblxuICAgIHJldHVybiBkYXRhXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMb29rYWhlYWRDb25zdHJ1Y3QoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRMb29rYWhlYWRcblxuICBmdW5jdGlvbiBzdGFydExvb2thaGVhZChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICByZXR1cm4gY3JlYXRlU3BhY2UoZWZmZWN0cywgcHJlZml4ZWQsICdsaW5lUHJlZml4JylcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZWZpeGVkKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAocHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpbmVQcmVmaXgnKSA8IDQpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmludGVycnVwdChzZWxmLnBhcnNlci5jb25zdHJ1Y3RzLmZsb3csIG5vaywgb2spKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZURlZmluaXRpb25cblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgbm9ybWFsaXplSWRlbnRpZmllciA9IHJlcXVpcmUoJy4uL3V0aWwvbm9ybWFsaXplLWlkZW50aWZpZXInKVxuXG52YXIgY3JlYXRlRGVzdGluYXRpb24gPSByZXF1aXJlKCcuL2ZhY3RvcnktZGVzdGluYXRpb24nKVxudmFyIGNyZWF0ZUxhYmVsID0gcmVxdWlyZSgnLi9mYWN0b3J5LWxhYmVsJylcbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG52YXIgY3JlYXRlV2hpdGVzcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS13aGl0ZXNwYWNlJylcbnZhciBjcmVhdGVUaXRsZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS10aXRsZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplRGVmaW5pdGlvbihlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgZGVzdGluYXRpb25BZnRlciA9IGVmZmVjdHMuYXR0ZW1wdChcbiAgICB7dG9rZW5pemU6IHRva2VuaXplVGl0bGUsIHBhcnRpYWw6IHRydWV9LFxuICAgIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGFmdGVyLCAnd2hpdGVzcGFjZScpLFxuICAgIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGFmdGVyLCAnd2hpdGVzcGFjZScpXG4gIClcblxuICB2YXIgaWRlbnRpZmllclxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdkZWZpbml0aW9uJylcbiAgICByZXR1cm4gY3JlYXRlTGFiZWwuY2FsbChcbiAgICAgIHNlbGYsXG4gICAgICBlZmZlY3RzLFxuICAgICAgbGFiZWxBZnRlcixcbiAgICAgIG5vayxcbiAgICAgICdkZWZpbml0aW9uTGFiZWwnLFxuICAgICAgJ2RlZmluaXRpb25MYWJlbE1hcmtlcicsXG4gICAgICAnZGVmaW5pdGlvbkxhYmVsU3RyaW5nJ1xuICAgICkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxhYmVsQWZ0ZXIoY29kZSkge1xuICAgIGlkZW50aWZpZXIgPSBub3JtYWxpemVJZGVudGlmaWVyKFxuICAgICAgc2VsZi5zbGljZVNlcmlhbGl6ZShzZWxmLmV2ZW50c1tzZWxmLmV2ZW50cy5sZW5ndGggLSAxXVsxXSkuc2xpY2UoMSwgLTEpXG4gICAgKVxuXG4gICAgaWYgKGNvZGUgPT09IDU4KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdkZWZpbml0aW9uTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdkZWZpbml0aW9uTWFya2VyJylcblxuICAgICAgLy8gTm90ZTogYmxhbmsgbGluZXMgY2Fu4oCZdCBleGlzdCBpbiBjb250ZW50LlxuICAgICAgcmV0dXJuIGNyZWF0ZVdoaXRlc3BhY2UoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIGNyZWF0ZURlc3RpbmF0aW9uKFxuICAgICAgICAgIGVmZmVjdHMsXG4gICAgICAgICAgZGVzdGluYXRpb25BZnRlcixcbiAgICAgICAgICBub2ssXG4gICAgICAgICAgJ2RlZmluaXRpb25EZXN0aW5hdGlvbicsXG4gICAgICAgICAgJ2RlZmluaXRpb25EZXN0aW5hdGlvbkxpdGVyYWwnLFxuICAgICAgICAgICdkZWZpbml0aW9uRGVzdGluYXRpb25MaXRlcmFsTWFya2VyJyxcbiAgICAgICAgICAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uUmF3JyxcbiAgICAgICAgICAnZGVmaW5pdGlvbkRlc3RpbmF0aW9uU3RyaW5nJ1xuICAgICAgICApXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdkZWZpbml0aW9uJylcblxuICAgICAgaWYgKHNlbGYucGFyc2VyLmRlZmluZWQuaW5kZXhPZihpZGVudGlmaWVyKSA8IDApIHtcbiAgICAgICAgc2VsZi5wYXJzZXIuZGVmaW5lZC5wdXNoKGlkZW50aWZpZXIpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVRpdGxlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIHJldHVybiBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgICA/IGNyZWF0ZVdoaXRlc3BhY2UoZWZmZWN0cywgYmVmb3JlKShjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZm9yZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5IHx8IGNvZGUgPT09IDQwKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGl0bGUoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGFmdGVyLCAnd2hpdGVzcGFjZScpLFxuICAgICAgICBub2ssXG4gICAgICAgICdkZWZpbml0aW9uVGl0bGUnLFxuICAgICAgICAnZGVmaW5pdGlvblRpdGxlTWFya2VyJyxcbiAgICAgICAgJ2RlZmluaXRpb25UaXRsZVN0cmluZydcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpID8gb2soY29kZSkgOiBub2soY29kZSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZXN0aW5hdGlvblxuXG52YXIgYXNjaWlDb250cm9sID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWNvbnRyb2wnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmctb3Itc3BhY2UnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5mdW5jdGlvbiBjcmVhdGVEZXN0aW5hdGlvbihcbiAgZWZmZWN0cyxcbiAgb2ssXG4gIG5vayxcbiAgdHlwZSxcbiAgbGl0ZXJhbFR5cGUsXG4gIGxpdGVyYWxNYXJrZXJUeXBlLFxuICByYXdUeXBlLFxuICBzdHJpbmdUeXBlLFxuICBtYXhcbikge1xuICB2YXIgbGltaXQgPSBtYXggfHwgSW5maW5pdHlcbiAgdmFyIGJhbGFuY2UgPSAwXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MCkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihsaXRlcmFsVHlwZSlcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvbkVuY2xvc2VkQmVmb3JlXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQ29udHJvbChjb2RlKSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHJhd1R5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge2NvbnRlbnRUeXBlOiAnc3RyaW5nJ30pXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZXN0aW5hdGlvbkVuY2xvc2VkQmVmb3JlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIobGl0ZXJhbE1hcmtlclR5cGUpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsTWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdChsaXRlcmFsVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge2NvbnRlbnRUeXBlOiAnc3RyaW5nJ30pXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uRW5jbG9zZWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uRW5jbG9zZWQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICBlZmZlY3RzLmV4aXQoc3RyaW5nVHlwZSlcbiAgICAgIHJldHVybiBkZXN0aW5hdGlvbkVuY2xvc2VkQmVmb3JlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gNjAgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gZGVzdGluYXRpb25FbmNsb3NlZEVzY2FwZSA6IGRlc3RpbmF0aW9uRW5jbG9zZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uRW5jbG9zZWRFc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MCB8fCBjb2RlID09PSA2MiB8fCBjb2RlID09PSA5Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVzdGluYXRpb25FbmNsb3NlZFxuICAgIH1cblxuICAgIHJldHVybiBkZXN0aW5hdGlvbkVuY2xvc2VkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZXN0aW5hdGlvblJhdyhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICBpZiAoKytiYWxhbmNlID4gbGltaXQpIHJldHVybiBub2soY29kZSlcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQxKSB7XG4gICAgICBpZiAoIWJhbGFuY2UtLSkge1xuICAgICAgICBlZmZlY3RzLmV4aXQoJ2NodW5rU3RyaW5nJylcbiAgICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICAgIGVmZmVjdHMuZXhpdChyYXdUeXBlKVxuICAgICAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSkge1xuICAgICAgaWYgKGJhbGFuY2UpIHJldHVybiBub2soY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnY2h1bmtTdHJpbmcnKVxuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICBlZmZlY3RzLmV4aXQocmF3VHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGFzY2lpQ29udHJvbChjb2RlKSkgcmV0dXJuIG5vayhjb2RlKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb2RlID09PSA5MiA/IGRlc3RpbmF0aW9uUmF3RXNjYXBlIDogZGVzdGluYXRpb25SYXdcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3RpbmF0aW9uUmF3RXNjYXBlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDAgfHwgY29kZSA9PT0gNDEgfHwgY29kZSA9PT0gOTIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uUmF3KGNvZGUpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlTGFiZWxcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZScpXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChlZmZlY3RzLCBvaywgbm9rLCB0eXBlLCBtYXJrZXJUeXBlLCBzdHJpbmdUeXBlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2l6ZSA9IDBcbiAgdmFyIGRhdGFcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcih0eXBlKVxuICAgIGVmZmVjdHMuZW50ZXIobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKHN0cmluZ1R5cGUpXG4gICAgcmV0dXJuIGF0QnJlYWtcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0QnJlYWsoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDkxIHx8XG4gICAgICAoY29kZSA9PT0gOTMgJiYgIWRhdGEpIHx8XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGZvb3Rub3Rlcy4gKi9cbiAgICAgIChjb2RlID09PSA5NCAmJlxuICAgICAgICAhc2l6ZSAmJlxuICAgICAgICAnX2hpZGRlbkZvb3Rub3RlU3VwcG9ydCcgaW4gc2VsZi5wYXJzZXIuY29uc3RydWN0cykgfHxcbiAgICAgIHNpemUgPiA5OTlcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gOTMpIHtcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICByZXR1cm4gYXRCcmVha1xuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge2NvbnRlbnRUeXBlOiAnc3RyaW5nJ30pXG4gICAgcmV0dXJuIGxhYmVsKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBsYWJlbChjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gOTEgfHxcbiAgICAgIGNvZGUgPT09IDkzIHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkgfHxcbiAgICAgIHNpemUrKyA+IDk5OVxuICAgICkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICByZXR1cm4gYXRCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGRhdGEgPSBkYXRhIHx8ICFtYXJrZG93blNwYWNlKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gbGFiZWxFc2NhcGUgOiBsYWJlbFxuICB9XG5cbiAgZnVuY3Rpb24gbGFiZWxFc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA5MSB8fCBjb2RlID09PSA5MiB8fCBjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBzaXplKytcbiAgICAgIHJldHVybiBsYWJlbFxuICAgIH1cblxuICAgIHJldHVybiBsYWJlbChjb2RlKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNwYWNlXG5cbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcblxuZnVuY3Rpb24gY3JlYXRlU3BhY2UoZWZmZWN0cywgb2ssIHR5cGUsIG1heCkge1xuICB2YXIgbGltaXQgPSBtYXggPyBtYXggLSAxIDogSW5maW5pdHlcbiAgdmFyIHNpemVcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICAgIHNpemUgPSAwXG4gICAgICByZXR1cm4gcHJlZml4KGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBwcmVmaXgoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpICYmIHNpemUrKyA8IGxpbWl0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBwcmVmaXhcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQodHlwZSlcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVUaXRsZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXNcbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKGVmZmVjdHMsIG9rLCBub2ssIHR5cGUsIG1hcmtlclR5cGUsIHN0cmluZ1R5cGUpIHtcbiAgdmFyIG1hcmtlclxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKHR5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdChtYXJrZXJUeXBlKVxuICAgIG1hcmtlciA9IGNvZGUgPT09IDQwID8gNDEgOiBjb2RlXG4gICAgcmV0dXJuIGF0Rmlyc3RUaXRsZUJyZWFrXG4gIH1cblxuICBmdW5jdGlvbiBhdEZpcnN0VGl0bGVCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIHJldHVybiBhdFRpdGxlQnJlYWsoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0VGl0bGVCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5leGl0KHN0cmluZ1R5cGUpXG4gICAgICByZXR1cm4gYXRGaXJzdFRpdGxlQnJlYWsobWFya2VyKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gTm90ZTogYmxhbmsgbGluZXMgY2Fu4oCZdCBleGlzdCBpbiBjb250ZW50LlxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGF0VGl0bGVCcmVhaywgJ2xpbmVQcmVmaXgnKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2NodW5rU3RyaW5nJywge2NvbnRlbnRUeXBlOiAnc3RyaW5nJ30pXG4gICAgcmV0dXJuIHRpdGxlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0aXRsZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlciB8fCBjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5leGl0KCdjaHVua1N0cmluZycpXG4gICAgICByZXR1cm4gYXRUaXRsZUJyZWFrKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGNvZGUgPT09IDkyID8gdGl0bGVFc2NhcGUgOiB0aXRsZVxuICB9XG5cbiAgZnVuY3Rpb24gdGl0bGVFc2NhcGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBtYXJrZXIgfHwgY29kZSA9PT0gOTIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRpdGxlXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpdGxlKGNvZGUpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY3JlYXRlV2hpdGVzcGFjZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gY3JlYXRlV2hpdGVzcGFjZShlZmZlY3RzLCBvaykge1xuICB2YXIgc2VlblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGluZUVuZGluZycpXG4gICAgICBzZWVuID0gdHJ1ZVxuICAgICAgcmV0dXJuIHN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHNlZW4gPyAnbGluZVByZWZpeCcgOiAnbGluZVN1ZmZpeCdcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplSGFyZEJyZWFrRXNjYXBlXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxuXG5mdW5jdGlvbiB0b2tlbml6ZUhhcmRCcmVha0VzY2FwZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdoYXJkQnJlYWtFc2NhcGUnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2VzY2FwZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnZXNjYXBlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuZXhpdCgnaGFyZEJyZWFrRXNjYXBlJylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplQXR4SGVhZGluZ1xuZXhwb3J0cy5yZXNvbHZlID0gcmVzb2x2ZUF0eEhlYWRpbmdcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZScpXG5cbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi4vdXRpbC9jaHVua2VkLXNwbGljZScpXG52YXIgY3JlYXRlU3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktc3BhY2UnKVxuXG5mdW5jdGlvbiByZXNvbHZlQXR4SGVhZGluZyhldmVudHMsIGNvbnRleHQpIHtcbiAgdmFyIGNvbnRlbnRFbmQgPSBldmVudHMubGVuZ3RoIC0gMlxuICB2YXIgY29udGVudFN0YXJ0ID0gM1xuICB2YXIgY29udGVudFxuICB2YXIgdGV4dFxuXG4gIC8vIFByZWZpeCB3aGl0ZXNwYWNlLCBwYXJ0IG9mIHRoZSBvcGVuaW5nLlxuICBpZiAoZXZlbnRzW2NvbnRlbnRTdGFydF1bMV0udHlwZSA9PT0gJ3doaXRlc3BhY2UnKSB7XG4gICAgY29udGVudFN0YXJ0ICs9IDJcbiAgfVxuXG4gIC8vIFN1ZmZpeCB3aGl0ZXNwYWNlLCBwYXJ0IG9mIHRoZSBjbG9zaW5nLlxuICBpZiAoXG4gICAgY29udGVudEVuZCAtIDIgPiBjb250ZW50U3RhcnQgJiZcbiAgICBldmVudHNbY29udGVudEVuZF1bMV0udHlwZSA9PT0gJ3doaXRlc3BhY2UnXG4gICkge1xuICAgIGNvbnRlbnRFbmQgLT0gMlxuICB9XG5cbiAgaWYgKFxuICAgIGV2ZW50c1tjb250ZW50RW5kXVsxXS50eXBlID09PSAnYXR4SGVhZGluZ1NlcXVlbmNlJyAmJlxuICAgIChjb250ZW50U3RhcnQgPT09IGNvbnRlbnRFbmQgLSAxIHx8XG4gICAgICAoY29udGVudEVuZCAtIDQgPiBjb250ZW50U3RhcnQgJiZcbiAgICAgICAgZXZlbnRzW2NvbnRlbnRFbmQgLSAyXVsxXS50eXBlID09PSAnd2hpdGVzcGFjZScpKVxuICApIHtcbiAgICBjb250ZW50RW5kIC09IGNvbnRlbnRTdGFydCArIDEgPT09IGNvbnRlbnRFbmQgPyAyIDogNFxuICB9XG5cbiAgaWYgKGNvbnRlbnRFbmQgPiBjb250ZW50U3RhcnQpIHtcbiAgICBjb250ZW50ID0ge1xuICAgICAgdHlwZTogJ2F0eEhlYWRpbmdUZXh0JyxcbiAgICAgIHN0YXJ0OiBldmVudHNbY29udGVudFN0YXJ0XVsxXS5zdGFydCxcbiAgICAgIGVuZDogZXZlbnRzW2NvbnRlbnRFbmRdWzFdLmVuZFxuICAgIH1cblxuICAgIHRleHQgPSB7XG4gICAgICB0eXBlOiAnY2h1bmtUZXh0JyxcbiAgICAgIHN0YXJ0OiBldmVudHNbY29udGVudFN0YXJ0XVsxXS5zdGFydCxcbiAgICAgIGVuZDogZXZlbnRzW2NvbnRlbnRFbmRdWzFdLmVuZCxcbiAgICAgIGNvbnRlbnRUeXBlOiAndGV4dCdcbiAgICB9XG5cbiAgICBjaHVua2VkU3BsaWNlKGV2ZW50cywgY29udGVudFN0YXJ0LCBjb250ZW50RW5kIC0gY29udGVudFN0YXJ0ICsgMSwgW1xuICAgICAgWydlbnRlcicsIGNvbnRlbnQsIGNvbnRleHRdLFxuICAgICAgWydlbnRlcicsIHRleHQsIGNvbnRleHRdLFxuICAgICAgWydleGl0JywgdGV4dCwgY29udGV4dF0sXG4gICAgICBbJ2V4aXQnLCBjb250ZW50LCBjb250ZXh0XVxuICAgIF0pXG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplQXR4SGVhZGluZyhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgc2l6ZSA9IDBcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignYXR4SGVhZGluZycpXG4gICAgZWZmZWN0cy5lbnRlcignYXR4SGVhZGluZ1NlcXVlbmNlJylcbiAgICByZXR1cm4gZmVuY2VPcGVuSW5zaWRlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBmZW5jZU9wZW5JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzNSAmJiBzaXplKysgPCA2KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBmZW5jZU9wZW5JbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F0eEhlYWRpbmdTZXF1ZW5jZScpXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayhjb2RlKSA6IGhlYWRpbmdCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhlYWRpbmdCcmVhayhjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM1KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdhdHhIZWFkaW5nU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2F0eEhlYWRpbmcnKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBoZWFkaW5nQnJlYWssICd3aGl0ZXNwYWNlJykoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdhdHhIZWFkaW5nVGV4dCcpXG4gICAgcmV0dXJuIGRhdGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gMzUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCdhdHhIZWFkaW5nU2VxdWVuY2UnKVxuICAgIHJldHVybiBoZWFkaW5nQnJlYWsoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRhdGEoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDM1IHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnYXR4SGVhZGluZ1RleHQnKVxuICAgICAgcmV0dXJuIGhlYWRpbmdCcmVhayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBkYXRhXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUh0bWxcbmV4cG9ydHMucmVzb2x2ZVRvID0gcmVzb2x2ZVRvSHRtbFxuZXhwb3J0cy5jb25jcmV0ZSA9IHRydWVcblxudmFyIGFzY2lpQWxwaGEgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktYWxwaGEnKVxudmFyIGFzY2lpQWxwaGFudW1lcmljID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWFscGhhbnVtZXJpYycpXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxudmFyIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmctb3Itc3BhY2UnKVxudmFyIG1hcmtkb3duU3BhY2UgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tc3BhY2UnKVxuXG52YXIgZnJvbUNoYXJDb2RlID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvZnJvbS1jaGFyLWNvZGUnKVxudmFyIGJhc2ljcyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2h0bWwtYmxvY2stbmFtZXMnKVxudmFyIHJhd3MgPSByZXF1aXJlKCcuLi9jb25zdGFudC9odG1sLXJhdy1uYW1lcycpXG5cbnZhciBibGFuayA9IHJlcXVpcmUoJy4vcGFydGlhbC1ibGFuay1saW5lJylcblxudmFyIG5leHRCbGFuayA9IHt0b2tlbml6ZTogdG9rZW5pemVOZXh0QmxhbmssIHBhcnRpYWw6IHRydWV9XG5cbmZ1bmN0aW9uIHJlc29sdmVUb0h0bWwoZXZlbnRzKSB7XG4gIHZhciBpbmRleCA9IGV2ZW50cy5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIGlmIChldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2h0bWxGbG93Jykge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoaW5kZXggPiAxICYmIGV2ZW50c1tpbmRleCAtIDJdWzFdLnR5cGUgPT09ICdsaW5lUHJlZml4Jykge1xuICAgIC8vIEFkZCB0aGUgcHJlZml4IHN0YXJ0IHRvIHRoZSBIVE1MIHRva2VuLlxuICAgIGV2ZW50c1tpbmRleF1bMV0uc3RhcnQgPSBldmVudHNbaW5kZXggLSAyXVsxXS5zdGFydFxuICAgIC8vIEFkZCB0aGUgcHJlZml4IHN0YXJ0IHRvIHRoZSBIVE1MIGxpbmUgdG9rZW4uXG4gICAgZXZlbnRzW2luZGV4ICsgMV1bMV0uc3RhcnQgPSBldmVudHNbaW5kZXggLSAyXVsxXS5zdGFydFxuICAgIC8vIFJlbW92ZSB0aGUgbGluZSBwcmVmaXguXG4gICAgZXZlbnRzLnNwbGljZShpbmRleCAtIDIsIDIpXG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplSHRtbChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIga2luZFxuICB2YXIgc3RhcnRUYWdcbiAgdmFyIGJ1ZmZlclxuICB2YXIgaW5kZXhcbiAgdmFyIG1hcmtlclxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCdodG1sRmxvdycpXG4gICAgZWZmZWN0cy5lbnRlcignaHRtbEZsb3dEYXRhJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDMzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBkZWNsYXJhdGlvblN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGtpbmQgPSAzXG4gICAgICAvLyBXaGlsZSB3ZeKAmXJlIGluIGFuIGluc3RydWN0aW9uIGluc3RlYWQgb2YgYSBkZWNsYXJhdGlvbiwgd2XigJlyZSBvbiBhIGA/YFxuICAgICAgLy8gcmlnaHQgbm93LCBzbyB3ZSBkbyBuZWVkIHRvIHNlYXJjaCBmb3IgYD5gLCBzaW1pbGFyIHRvIGRlY2xhcmF0aW9ucy5cbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rIDogY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBidWZmZXIgPSBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHN0YXJ0VGFnID0gdHJ1ZVxuICAgICAgcmV0dXJuIHRhZ05hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZWNsYXJhdGlvblN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAga2luZCA9IDJcbiAgICAgIHJldHVybiBjb21tZW50T3Blbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5MSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBraW5kID0gNVxuICAgICAgYnVmZmVyID0gJ0NEQVRBWydcbiAgICAgIGluZGV4ID0gMFxuICAgICAgcmV0dXJuIGNkYXRhT3Blbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGtpbmQgPSA0XG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWVudE9wZW5JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayA6IGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGFPcGVuSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gYnVmZmVyLmNoYXJDb2RlQXQoaW5kZXgrKykpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluZGV4ID09PSBidWZmZXIubGVuZ3RoXG4gICAgICAgID8gc2VsZi5pbnRlcnJ1cHRcbiAgICAgICAgICA/IG9rXG4gICAgICAgICAgOiBjb250aW51YXRpb25cbiAgICAgICAgOiBjZGF0YU9wZW5JbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdDbG9zZVN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBidWZmZXIgPSBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHJldHVybiB0YWdOYW1lXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFnTmFtZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gNDcgfHxcbiAgICAgIGNvZGUgPT09IDYyIHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgKSB7XG4gICAgICBpZiAoY29kZSAhPT0gNDcgJiYgc3RhcnRUYWcgJiYgcmF3cy5pbmRleE9mKGJ1ZmZlci50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICAgIGtpbmQgPSAxXG4gICAgICAgIHJldHVybiBzZWxmLmludGVycnVwdCA/IG9rKGNvZGUpIDogY29udGludWF0aW9uKGNvZGUpXG4gICAgICB9XG5cbiAgICAgIGlmIChiYXNpY3MuaW5kZXhPZihidWZmZXIudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xuICAgICAgICBraW5kID0gNlxuXG4gICAgICAgIGlmIChjb2RlID09PSA0Nykge1xuICAgICAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgICAgIHJldHVybiBiYXNpY1NlbGZDbG9zaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBvayhjb2RlKSA6IGNvbnRpbnVhdGlvbihjb2RlKVxuICAgICAgfVxuXG4gICAgICBraW5kID0gN1xuICAgICAgLy8gRG8gbm90IHN1cHBvcnQgY29tcGxldGUgSFRNTCB3aGVuIGludGVycnVwdGluZy5cbiAgICAgIHJldHVybiBzZWxmLmludGVycnVwdFxuICAgICAgICA/IG5vayhjb2RlKVxuICAgICAgICA6IHN0YXJ0VGFnXG4gICAgICAgID8gY29tcGxldGVBdHRyaWJ1dGVOYW1lQmVmb3JlKGNvZGUpXG4gICAgICAgIDogY29tcGxldGVDbG9zaW5nVGFnQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDUgfHwgYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgYnVmZmVyICs9IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ05hbWVcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBiYXNpY1NlbGZDbG9zaW5nKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHNlbGYuaW50ZXJydXB0ID8gb2sgOiBjb250aW51YXRpb25cbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUNsb3NpbmdUYWdBZnRlcihjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQ2xvc2luZ1RhZ0FmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBsZXRlRW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0Nykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVFbmRcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNTggfHwgY29kZSA9PT0gOTUgfHwgYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZUJlZm9yZVxuICAgIH1cblxuICAgIHJldHVybiBjb21wbGV0ZUVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVOYW1lKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSA0NSB8fFxuICAgICAgY29kZSA9PT0gNDYgfHxcbiAgICAgIGNvZGUgPT09IDU4IHx8XG4gICAgICBjb2RlID09PSA5NSB8fFxuICAgICAgYXNjaWlBbHBoYW51bWVyaWMoY29kZSlcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlTmFtZVxuICAgIH1cblxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlcihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVOYW1lQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVBZnRlclxuICAgIH1cblxuICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZU5hbWVCZWZvcmUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIG1hcmtlciA9IGNvZGVcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbXBsZXRlQXR0cmlidXRlVmFsdWVCZWZvcmVcbiAgICB9XG5cbiAgICBtYXJrZXIgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVVucXVvdGVkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXJcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVF1b3RlZFxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVVucXVvdGVkKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBudWxsIHx8XG4gICAgICBjb2RlID09PSAzNCB8fFxuICAgICAgY29kZSA9PT0gMzkgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIGNvZGUgPT09IDk2IHx8XG4gICAgICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lQWZ0ZXIoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVWYWx1ZVVucXVvdGVkXG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA0NyB8fCBjb2RlID09PSA2MiB8fCBtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gY29tcGxldGVBdHRyaWJ1dGVOYW1lQmVmb3JlKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVFbmQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29tcGxldGVBZnRlclxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQWZ0ZXIoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21wbGV0ZUFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpXG4gICAgICA/IGNvbnRpbnVhdGlvbihjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1ICYmIGtpbmQgPT09IDIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkNvbW1lbnRJbnNpZGVcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNjAgJiYga2luZCA9PT0gMSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uUmF3VGFnT3BlblxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2MiAmJiBraW5kID09PSA0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25DbG9zZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2MyAmJiBraW5kID09PSAzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25EZWNsYXJhdGlvbkluc2lkZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5MyAmJiBraW5kID09PSA1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25DaGFyYWN0ZXJEYXRhSW5zaWRlXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSAmJiAoa2luZCA9PT0gNiB8fCBraW5kID09PSA3KSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2soXG4gICAgICAgIG5leHRCbGFuayxcbiAgICAgICAgY29udGludWF0aW9uQ2xvc2UsXG4gICAgICAgIGNvbnRpbnVhdGlvbkF0TGluZUVuZGluZ1xuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb250aW51YXRpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRpbnVhdGlvbkF0TGluZUVuZGluZyhjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdodG1sRmxvd0RhdGEnKVxuICAgIHJldHVybiBodG1sQ29udGludWVTdGFydChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gaHRtbENvbnRpbnVlU3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZG9uZShjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmcnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgICAgcmV0dXJuIGh0bWxDb250aW51ZVN0YXJ0XG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignaHRtbEZsb3dEYXRhJylcbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25Db21tZW50SW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uUmF3VGFnT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJ1ZmZlciA9ICcnXG4gICAgICByZXR1cm4gY29udGludWF0aW9uUmF3RW5kVGFnXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uUmF3RW5kVGFnKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjIgJiYgcmF3cy5pbmRleE9mKGJ1ZmZlci50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25DbG9zZVxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpICYmIGJ1ZmZlci5sZW5ndGggPCA2KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJ1ZmZlciArPSBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIHJldHVybiBjb250aW51YXRpb25SYXdFbmRUYWdcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25DaGFyYWN0ZXJEYXRhSW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gOTMpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbnRpbnVhdGlvbkRlY2xhcmF0aW9uSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRpbnVhdGlvbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udGludWF0aW9uRGVjbGFyYXRpb25JbnNpZGUoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY29udGludWF0aW9uQ2xvc2VcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGludWF0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51YXRpb25DbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ2h0bWxGbG93RGF0YScpXG4gICAgICByZXR1cm4gZG9uZShjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjb250aW51YXRpb25DbG9zZVxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZShjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdodG1sRmxvdycpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVOZXh0QmxhbmsoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdodG1sRmxvd0RhdGEnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpbmVFbmRpbmdCbGFuaycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nQmxhbmsnKVxuICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoYmxhbmssIG9rLCBub2spXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZUh0bWxcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgbWFya2Rvd25TcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1zcGFjZScpXG52YXIgYXNjaWlBbHBoYSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9hc2NpaS1hbHBoYScpXG52YXIgYXNjaWlBbHBoYW51bWVyaWMgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvYXNjaWktYWxwaGFudW1lcmljJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gdG9rZW5pemVIdG1sKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIG1hcmtlclxuICB2YXIgYnVmZmVyXG4gIHZhciBpbmRleFxuICB2YXIgcmV0dXJuU3RhdGVcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignaHRtbFRleHQnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2h0bWxUZXh0RGF0YScpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIG9wZW5cbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzMykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25PcGVuXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVN0YXJ0XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbnN0cnVjdGlvblxuICAgIH1cblxuICAgIGlmIChhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjbGFyYXRpb25PcGVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGNvbW1lbnRPcGVuXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDkxKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGJ1ZmZlciA9ICdDREFUQVsnXG4gICAgICBpbmRleCA9IDBcbiAgICAgIHJldHVybiBjZGF0YU9wZW5cbiAgICB9XG5cbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gZGVjbGFyYXRpb25cbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21tZW50T3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21tZW50U3RhcnRcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjb21tZW50U3RhcnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDYyKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21tZW50U3RhcnREYXNoXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbW1lbnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1lbnRTdGFydERhc2goY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPT09IDYyKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbW1lbnQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbW1lbnQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb21tZW50Q2xvc2VcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm5TdGF0ZSA9IGNvbW1lbnRcbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gY29tbWVudFxuICB9XG5cbiAgZnVuY3Rpb24gY29tbWVudENsb3NlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVuZFxuICAgIH1cblxuICAgIHJldHVybiBjb21tZW50KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBjZGF0YU9wZW4oY29kZSkge1xuICAgIGlmIChjb2RlID09PSBidWZmZXIuY2hhckNvZGVBdChpbmRleCsrKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5kZXggPT09IGJ1ZmZlci5sZW5ndGggPyBjZGF0YSA6IGNkYXRhT3BlblxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNkYXRhKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY2RhdGFDbG9zZVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBjZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGFDbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjZGF0YUVuZFxuICAgIH1cblxuICAgIHJldHVybiBjZGF0YShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2RhdGFFbmQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA5Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gY2RhdGFFbmRcbiAgICB9XG5cbiAgICByZXR1cm4gY2RhdGEoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSA2Mikge1xuICAgICAgcmV0dXJuIGVuZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gZGVjbGFyYXRpb25cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZGVjbGFyYXRpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3RydWN0aW9uKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA2Mykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5zdHJ1Y3Rpb25DbG9zZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gaW5zdHJ1Y3Rpb25cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gaW5zdHJ1Y3Rpb25cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc3RydWN0aW9uQ2xvc2UoY29kZSkge1xuICAgIHJldHVybiBjb2RlID09PSA2MiA/IGVuZChjb2RlKSA6IGluc3RydWN0aW9uKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdDbG9zZVN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnQ2xvc2VcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdDbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdDbG9zZVxuICAgIH1cblxuICAgIHJldHVybiB0YWdDbG9zZUJldHdlZW4oY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ0Nsb3NlQmV0d2Vlbihjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuU3RhdGUgPSB0YWdDbG9zZUJldHdlZW5cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnQ2xvc2VCZXR3ZWVuXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFnT3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1IHx8IGFzY2lpQWxwaGFudW1lcmljKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDQ3IHx8IGNvZGUgPT09IDYyIHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiB0YWdPcGVuQmV0d2Vlbihjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5CZXR3ZWVuKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGVuZFxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSA1OCB8fCBjb2RlID09PSA5NSB8fCBhc2NpaUFscGhhKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkJldHdlZW5cbiAgICAgIHJldHVybiBhdExpbmVFbmRpbmcoY29kZSlcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkJldHdlZW5cbiAgICB9XG5cbiAgICByZXR1cm4gZW5kKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlTmFtZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gNDUgfHxcbiAgICAgIGNvZGUgPT09IDQ2IHx8XG4gICAgICBjb2RlID09PSA1OCB8fFxuICAgICAgY29kZSA9PT0gOTUgfHxcbiAgICAgIGFzY2lpQWxwaGFudW1lcmljKGNvZGUpXG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZVxuICAgIH1cblxuICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNjEpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkF0dHJpYnV0ZU5hbWVBZnRlclxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlTmFtZUFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhZ09wZW5CZXR3ZWVuKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlVmFsdWVCZWZvcmUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAgIGNvZGUgPT09IDYwIHx8XG4gICAgICBjb2RlID09PSA2MSB8fFxuICAgICAgY29kZSA9PT0gNjIgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIG1hcmtlciA9IGNvZGVcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVRdW90ZWRcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICByZXR1cm5TdGF0ZSA9IHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZUJlZm9yZVxuICAgICAgcmV0dXJuIGF0TGluZUVuZGluZyhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVCZWZvcmVcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBtYXJrZXIgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlVW5xdW90ZWRcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVF1b3RlZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG1hcmtlcikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXJcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHJldHVyblN0YXRlID0gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkXG4gICAgICByZXR1cm4gYXRMaW5lRW5kaW5nKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIHRhZ09wZW5BdHRyaWJ1dGVWYWx1ZVF1b3RlZFxuICB9XG5cbiAgZnVuY3Rpb24gdGFnT3BlbkF0dHJpYnV0ZVZhbHVlUXVvdGVkQWZ0ZXIoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2MiB8fCBjb2RlID09PSA0NyB8fCBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpKSB7XG4gICAgICByZXR1cm4gdGFnT3BlbkJldHdlZW4oY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWdPcGVuQXR0cmlidXRlVmFsdWVVbnF1b3RlZChjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gbnVsbCB8fFxuICAgICAgY29kZSA9PT0gMzQgfHxcbiAgICAgIGNvZGUgPT09IDM5IHx8XG4gICAgICBjb2RlID09PSA2MCB8fFxuICAgICAgY29kZSA9PT0gNjEgfHxcbiAgICAgIGNvZGUgPT09IDk2XG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IDYyIHx8IG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiB0YWdPcGVuQmV0d2Vlbihjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiB0YWdPcGVuQXR0cmlidXRlVmFsdWVVbnF1b3RlZFxuICB9XG5cbiAgLy8gV2UgY2Fu4oCZdCBoYXZlIGJsYW5rIGxpbmVzIGluIGNvbnRlbnQsIHNvIG5vIG5lZWQgdG8gd29ycnkgYWJvdXQgZW1wdHlcbiAgLy8gdG9rZW5zLlxuICBmdW5jdGlvbiBhdExpbmVFbmRpbmcoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgnaHRtbFRleHREYXRhJylcbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBhZnRlclByZWZpeCwgJ2xpbmVQcmVmaXgnLCA0KVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2h0bWxUZXh0RGF0YScpXG4gICAgcmV0dXJuIHJldHVyblN0YXRlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbmQoY29kZSkge1xuICAgIGlmIChjb2RlID09PSA2Mikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2h0bWxUZXh0RGF0YScpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2h0bWxUZXh0JylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplTGFiZWxFbmRcbmV4cG9ydHMucmVzb2x2ZVRvID0gcmVzb2x2ZVRvTGFiZWxFbmRcbmV4cG9ydHMucmVzb2x2ZUFsbCA9IHJlc29sdmVBbGxMYWJlbEVuZFxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG5cbnZhciBub3JtYWxpemVJZGVudGlmaWVyID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUtaWRlbnRpZmllcicpXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJy4uL3V0aWwvY2h1bmtlZC1zcGxpY2UnKVxudmFyIHJlc29sdmVBbGwgPSByZXF1aXJlKCcuLi91dGlsL3Jlc29sdmUtYWxsJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnLi4vdXRpbC9zaGFsbG93JylcbnZhciBjcmVhdGVEZXN0aW5hdGlvbiA9IHJlcXVpcmUoJy4vZmFjdG9yeS1kZXN0aW5hdGlvbicpXG52YXIgY3JlYXRlTGFiZWwgPSByZXF1aXJlKCcuL2ZhY3RvcnktbGFiZWwnKVxudmFyIGNyZWF0ZVdoaXRlc3BhY2UgPSByZXF1aXJlKCcuL2ZhY3Rvcnktd2hpdGVzcGFjZScpXG52YXIgY3JlYXRlVGl0bGUgPSByZXF1aXJlKCcuL2ZhY3RvcnktdGl0bGUnKVxuXG52YXIgcmVzb3VyY2UgPSB7dG9rZW5pemU6IHRva2VuaXplUmVzb3VyY2V9XG52YXIgZnVsbFJlZmVyZW5jZSA9IHt0b2tlbml6ZTogdG9rZW5pemVGdWxsUmVmZXJlbmNlfVxudmFyIGNvbGxhcHNlZFJlZmVyZW5jZSA9IHt0b2tlbml6ZTogdG9rZW5pemVDb2xsYXBzZWRSZWZlcmVuY2V9XG5cbmZ1bmN0aW9uIHJlc29sdmVBbGxMYWJlbEVuZChldmVudHMpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHRva2VuXG5cbiAgd2hpbGUgKCsraW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgdG9rZW4gPSBldmVudHNbaW5kZXhdWzFdXG5cbiAgICBpZiAoXG4gICAgICAhdG9rZW4uX3VzZWQgJiZcbiAgICAgICh0b2tlbi50eXBlID09PSAnbGFiZWxJbWFnZScgfHxcbiAgICAgICAgdG9rZW4udHlwZSA9PT0gJ2xhYmVsTGluaycgfHxcbiAgICAgICAgdG9rZW4udHlwZSA9PT0gJ2xhYmVsRW5kJylcbiAgICApIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgbWFya2VyLlxuICAgICAgZXZlbnRzLnNwbGljZShpbmRleCArIDEsIHRva2VuLnR5cGUgPT09ICdsYWJlbEltYWdlJyA/IDQgOiAyKVxuICAgICAgdG9rZW4udHlwZSA9ICdkYXRhJ1xuICAgICAgaW5kZXgrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVRvTGFiZWxFbmQoZXZlbnRzLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IGV2ZW50cy5sZW5ndGhcbiAgdmFyIG9mZnNldCA9IDBcbiAgdmFyIGdyb3VwXG4gIHZhciBsYWJlbFxuICB2YXIgdGV4dFxuICB2YXIgdG9rZW5cbiAgdmFyIG9wZW5cbiAgdmFyIGNsb3NlXG4gIHZhciBtZWRpYVxuXG4gIC8vIEZpbmQgYW4gb3BlbmluZy5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB0b2tlbiA9IGV2ZW50c1tpbmRleF1bMV1cblxuICAgIGlmIChvcGVuKSB7XG4gICAgICAvLyBJZiB3ZSBzZWUgYW5vdGhlciBsaW5rLCBvciBpbmFjdGl2ZSBsaW5rIGxhYmVsLCB3ZeKAmXZlIGJlZW4gaGVyZSBiZWZvcmUuXG4gICAgICBpZiAoXG4gICAgICAgIHRva2VuLnR5cGUgPT09ICdsaW5rJyB8fFxuICAgICAgICAodG9rZW4udHlwZSA9PT0gJ2xhYmVsTGluaycgJiYgdG9rZW4uX2luYWN0aXZlKVxuICAgICAgKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIC8vIE1hcmsgb3RoZXIgbGluayBvcGVuaW5ncyBhcyBpbmFjdGl2ZSwgYXMgd2UgY2Fu4oCZdCBoYXZlIGxpbmtzIGluXG4gICAgICAvLyBsaW5rcy5cbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInICYmIHRva2VuLnR5cGUgPT09ICdsYWJlbExpbmsnKSB7XG4gICAgICAgIHRva2VuLl9pbmFjdGl2ZSA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNsb3NlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcicgJiZcbiAgICAgICAgKHRva2VuLnR5cGUgPT09ICdsYWJlbEltYWdlJyB8fCB0b2tlbi50eXBlID09PSAnbGFiZWxMaW5rJykgJiZcbiAgICAgICAgIXRva2VuLl9iYWxhbmNlZFxuICAgICAgKSB7XG4gICAgICAgIG9wZW4gPSBpbmRleFxuXG4gICAgICAgIGlmICh0b2tlbi50eXBlICE9PSAnbGFiZWxMaW5rJykge1xuICAgICAgICAgIG9mZnNldCA9IDJcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSAnbGFiZWxFbmQnKSB7XG4gICAgICBjbG9zZSA9IGluZGV4XG4gICAgfVxuICB9XG5cbiAgZ3JvdXAgPSB7XG4gICAgdHlwZTogZXZlbnRzW29wZW5dWzFdLnR5cGUgPT09ICdsYWJlbExpbmsnID8gJ2xpbmsnIDogJ2ltYWdlJyxcbiAgICBzdGFydDogc2hhbGxvdyhldmVudHNbb3Blbl1bMV0uc3RhcnQpLFxuICAgIGVuZDogc2hhbGxvdyhldmVudHNbZXZlbnRzLmxlbmd0aCAtIDFdWzFdLmVuZClcbiAgfVxuXG4gIGxhYmVsID0ge1xuICAgIHR5cGU6ICdsYWJlbCcsXG4gICAgc3RhcnQ6IHNoYWxsb3coZXZlbnRzW29wZW5dWzFdLnN0YXJ0KSxcbiAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2Nsb3NlXVsxXS5lbmQpXG4gIH1cblxuICB0ZXh0ID0ge1xuICAgIHR5cGU6ICdsYWJlbFRleHQnLFxuICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1tvcGVuICsgb2Zmc2V0ICsgMl1bMV0uZW5kKSxcbiAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2Nsb3NlIC0gMl1bMV0uc3RhcnQpXG4gIH1cblxuICBtZWRpYSA9IFtcbiAgICBbJ2VudGVyJywgZ3JvdXAsIGNvbnRleHRdLFxuICAgIFsnZW50ZXInLCBsYWJlbCwgY29udGV4dF1cbiAgXVxuXG4gIC8vIE9wZW5pbmcgbWFya2VyLlxuICBjaHVua2VkU3BsaWNlKFxuICAgIG1lZGlhLFxuICAgIG1lZGlhLmxlbmd0aCxcbiAgICAwLFxuICAgIGV2ZW50cy5zbGljZShvcGVuICsgMSwgb3BlbiArIG9mZnNldCArIDMpXG4gIClcblxuICAvLyBUZXh0IG9wZW4uXG4gIGNodW5rZWRTcGxpY2UobWVkaWEsIG1lZGlhLmxlbmd0aCwgMCwgW1snZW50ZXInLCB0ZXh0LCBjb250ZXh0XV0pXG5cbiAgLy8gQmV0d2Vlbi5cbiAgY2h1bmtlZFNwbGljZShcbiAgICBtZWRpYSxcbiAgICBtZWRpYS5sZW5ndGgsXG4gICAgMCxcbiAgICByZXNvbHZlQWxsKFxuICAgICAgY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5pbnNpZGVTcGFuLm51bGwsXG4gICAgICBldmVudHMuc2xpY2Uob3BlbiArIG9mZnNldCArIDQsIGNsb3NlIC0gMyksXG4gICAgICBjb250ZXh0XG4gICAgKVxuICApXG5cbiAgLy8gVGV4dCBjbG9zZSwgbWFya2VyIGNsb3NlLCBsYWJlbCBjbG9zZS5cbiAgY2h1bmtlZFNwbGljZShtZWRpYSwgbWVkaWEubGVuZ3RoLCAwLCBbXG4gICAgWydleGl0JywgdGV4dCwgY29udGV4dF0sXG4gICAgZXZlbnRzW2Nsb3NlIC0gMl0sXG4gICAgZXZlbnRzW2Nsb3NlIC0gMV0sXG4gICAgWydleGl0JywgbGFiZWwsIGNvbnRleHRdXG4gIF0pXG5cbiAgLy8gUmVmZXJlbmNlLCByZXNvdXJjZSwgb3Igc28uXG4gIGNodW5rZWRTcGxpY2UobWVkaWEsIG1lZGlhLmxlbmd0aCwgMCwgZXZlbnRzLnNsaWNlKGNsb3NlICsgMSkpXG5cbiAgLy8gTWVkaWEgY2xvc2UuXG4gIGNodW5rZWRTcGxpY2UobWVkaWEsIG1lZGlhLmxlbmd0aCwgMCwgW1snZXhpdCcsIGdyb3VwLCBjb250ZXh0XV0pXG5cbiAgY2h1bmtlZFNwbGljZShldmVudHMsIG9wZW4sIGV2ZW50cy5sZW5ndGgsIG1lZGlhKVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMYWJlbEVuZChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgaW5kZXggPSBzZWxmLmV2ZW50cy5sZW5ndGhcbiAgdmFyIGxhYmVsU3RhcnRcbiAgdmFyIGRlZmluZWRcblxuICAvLyBGaW5kIGFuIG9wZW5pbmcuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgaWYgKFxuICAgICAgKHNlbGYuZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnbGFiZWxJbWFnZScgfHxcbiAgICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdsYWJlbExpbmsnKSAmJlxuICAgICAgIXNlbGYuZXZlbnRzW2luZGV4XVsxXS5fYmFsYW5jZWRcbiAgICApIHtcbiAgICAgIGxhYmVsU3RhcnQgPSBzZWxmLmV2ZW50c1tpbmRleF1bMV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmICghbGFiZWxTdGFydCkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIC8vIEl04oCZcyBhIGJhbGFuY2VkIGJyYWNrZXQsIGJ1dCBjb250YWlucyBhIGxpbmsuXG4gICAgaWYgKGxhYmVsU3RhcnQuX2luYWN0aXZlKSByZXR1cm4gYmFsYW5jZWQoY29kZSlcbiAgICBkZWZpbmVkID1cbiAgICAgIHNlbGYucGFyc2VyLmRlZmluZWQuaW5kZXhPZihcbiAgICAgICAgbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgICAgICBzZWxmLnNsaWNlU2VyaWFsaXplKHtzdGFydDogbGFiZWxTdGFydC5lbmQsIGVuZDogc2VsZi5ub3coKX0pXG4gICAgICAgIClcbiAgICAgICkgPiAtMVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsRW5kJylcbiAgICBlZmZlY3RzLmVudGVyKCdsYWJlbE1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbE1hcmtlcicpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbEVuZCcpXG4gICAgcmV0dXJuIGFmdGVyTGFiZWxFbmRcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyTGFiZWxFbmQoY29kZSkge1xuICAgIC8vIFJlc291cmNlOiBgW2FzZF0oZmdoKWAuXG4gICAgaWYgKGNvZGUgPT09IDQwKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5hdHRlbXB0KHJlc291cmNlLCBvaywgZGVmaW5lZCA/IG9rIDogYmFsYW5jZWQpKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gQ29sbGFwc2VkIChgW2FzZF1bXWApIG9yIGZ1bGwgKGBbYXNkXVtmZ2hdYCkgcmVmZXJlbmNlP1xuICAgIGlmIChjb2RlID09PSA5MSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuYXR0ZW1wdChcbiAgICAgICAgZnVsbFJlZmVyZW5jZSxcbiAgICAgICAgb2ssXG4gICAgICAgIGRlZmluZWQgPyBlZmZlY3RzLmF0dGVtcHQoY29sbGFwc2VkUmVmZXJlbmNlLCBvaywgYmFsYW5jZWQpIDogYmFsYW5jZWRcbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICAvLyBTaG9ydGN1dCByZWZlcmVuY2U6IGBbYXNkXWA/XG4gICAgcmV0dXJuIGRlZmluZWQgPyBvayhjb2RlKSA6IGJhbGFuY2VkKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBiYWxhbmNlZChjb2RlKSB7XG4gICAgbGFiZWxTdGFydC5fYmFsYW5jZWQgPSB0cnVlXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplUmVzb3VyY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigncmVzb3VyY2UnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ3Jlc291cmNlTWFya2VyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ3Jlc291cmNlTWFya2VyJylcbiAgICByZXR1cm4gY3JlYXRlV2hpdGVzcGFjZShlZmZlY3RzLCBvcGVuKVxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQxKSB7XG4gICAgICByZXR1cm4gZW5kKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZURlc3RpbmF0aW9uKFxuICAgICAgZWZmZWN0cyxcbiAgICAgIGRlc3RpbmF0aW9uQWZ0ZXIsXG4gICAgICBub2ssXG4gICAgICAncmVzb3VyY2VEZXN0aW5hdGlvbicsXG4gICAgICAncmVzb3VyY2VEZXN0aW5hdGlvbkxpdGVyYWwnLFxuICAgICAgJ3Jlc291cmNlRGVzdGluYXRpb25MaXRlcmFsTWFya2VyJyxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uUmF3JyxcbiAgICAgICdyZXNvdXJjZURlc3RpbmF0aW9uU3RyaW5nJyxcbiAgICAgIDNcbiAgICApKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBkZXN0aW5hdGlvbkFmdGVyKGNvZGUpIHtcbiAgICByZXR1cm4gbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKVxuICAgICAgPyBjcmVhdGVXaGl0ZXNwYWNlKGVmZmVjdHMsIGJldHdlZW4pKGNvZGUpXG4gICAgICA6IGVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYmV0d2Vlbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDM0IHx8IGNvZGUgPT09IDM5IHx8IGNvZGUgPT09IDQwKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGl0bGUoXG4gICAgICAgIGVmZmVjdHMsXG4gICAgICAgIGNyZWF0ZVdoaXRlc3BhY2UoZWZmZWN0cywgZW5kKSxcbiAgICAgICAgbm9rLFxuICAgICAgICAncmVzb3VyY2VUaXRsZScsXG4gICAgICAgICdyZXNvdXJjZVRpdGxlTWFya2VyJyxcbiAgICAgICAgJ3Jlc291cmNlVGl0bGVTdHJpbmcnXG4gICAgICApKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZW5kKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gNDEpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Jlc291cmNlTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdyZXNvdXJjZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Jlc291cmNlJylcbiAgICAgIHJldHVybiBva1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUZ1bGxSZWZlcmVuY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUxhYmVsLmNhbGwoXG4gICAgICBzZWxmLFxuICAgICAgZWZmZWN0cyxcbiAgICAgIGFmdGVyTGFiZWwsXG4gICAgICBub2ssXG4gICAgICAncmVmZXJlbmNlJyxcbiAgICAgICdyZWZlcmVuY2VNYXJrZXInLFxuICAgICAgJ3JlZmVyZW5jZVN0cmluZydcbiAgICApKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlckxhYmVsKGNvZGUpIHtcbiAgICByZXR1cm4gc2VsZi5wYXJzZXIuZGVmaW5lZC5pbmRleE9mKFxuICAgICAgbm9ybWFsaXplSWRlbnRpZmllcihcbiAgICAgICAgc2VsZi5zbGljZVNlcmlhbGl6ZShzZWxmLmV2ZW50c1tzZWxmLmV2ZW50cy5sZW5ndGggLSAxXVsxXSkuc2xpY2UoMSwgLTEpXG4gICAgICApXG4gICAgKSA8IDBcbiAgICAgID8gbm9rKGNvZGUpXG4gICAgICA6IG9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVDb2xsYXBzZWRSZWZlcmVuY2UoZWZmZWN0cywgb2ssIG5vaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigncmVmZXJlbmNlJylcbiAgICBlZmZlY3RzLmVudGVyKCdyZWZlcmVuY2VNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgncmVmZXJlbmNlTWFya2VyJylcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkzKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdyZWZlcmVuY2VNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3JlZmVyZW5jZU1hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3JlZmVyZW5jZScpXG4gICAgICByZXR1cm4gb2tcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZWxhYmVsSW1hZ2VcbmV4cG9ydHMucmVzb2x2ZUFsbCA9IHJlcXVpcmUoJy4vbGFiZWwtZW5kJykucmVzb2x2ZUFsbFxuXG5mdW5jdGlvbiB0b2tlbml6ZWxhYmVsSW1hZ2UoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxJbWFnZScpXG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxJbWFnZU1hcmtlcicpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsYWJlbEltYWdlTWFya2VyJylcbiAgICByZXR1cm4gb3BlblxuICB9XG5cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDkxKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsYWJlbE1hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxNYXJrZXInKVxuICAgICAgZWZmZWN0cy5leGl0KCdsYWJlbEltYWdlJylcbiAgICAgIHJldHVybiBhZnRlclxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGZvb3Rub3Rlcy4gKi9cbiAgICByZXR1cm4gY29kZSA9PT0gOTQgJiYgJ19oaWRkZW5Gb290bm90ZVN1cHBvcnQnIGluIHNlbGYucGFyc2VyLmNvbnN0cnVjdHNcbiAgICAgID8gbm9rKGNvZGUpXG4gICAgICA6IG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZWxhYmVsTGlua1xuZXhwb3J0cy5yZXNvbHZlQWxsID0gcmVxdWlyZSgnLi9sYWJlbC1lbmQnKS5yZXNvbHZlQWxsXG5cbmZ1bmN0aW9uIHRva2VuaXplbGFiZWxMaW5rKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ2xhYmVsTGluaycpXG4gICAgZWZmZWN0cy5lbnRlcignbGFiZWxNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxNYXJrZXInKVxuICAgIGVmZmVjdHMuZXhpdCgnbGFiZWxMaW5rJylcbiAgICByZXR1cm4gYWZ0ZXJcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGZvb3Rub3Rlcy4gKi9cbiAgICByZXR1cm4gY29kZSA9PT0gOTQgJiYgJ19oaWRkZW5Gb290bm90ZVN1cHBvcnQnIGluIHNlbGYucGFyc2VyLmNvbnN0cnVjdHNcbiAgICAgID8gbm9rKGNvZGUpXG4gICAgICA6IG9rKGNvZGUpXG4gIH1cbn1cbiIsImV4cG9ydHMudG9rZW5pemUgPSB0b2tlbml6ZVdoaXRlc3BhY2VcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplV2hpdGVzcGFjZShlZmZlY3RzLCBvaykge1xuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICByZXR1cm4gY3JlYXRlU3BhY2UoZWZmZWN0cywgb2ssICdsaW5lUHJlZml4JylcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplTGlzdFN0YXJ0XG5leHBvcnRzLmNvbnRpbnVhdGlvbiA9IHt0b2tlbml6ZTogdG9rZW5pemVMaXN0Q29udGludWF0aW9ufVxuZXhwb3J0cy5leGl0ID0gdG9rZW5pemVMaXN0RW5kXG5cbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcbnZhciBhc2NpaURpZ2l0ID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL2FzY2lpLWRpZ2l0JylcblxudmFyIHByZWZpeFNpemUgPSByZXF1aXJlKCcuLi91dGlsL3ByZWZpeC1zaXplJylcbnZhciBzaXplQ2h1bmtzID0gcmVxdWlyZSgnLi4vdXRpbC9zaXplLWNodW5rcycpXG52YXIgdGhlbWF0aWNCcmVhayA9IHJlcXVpcmUoJy4vdGhlbWF0aWMtYnJlYWsnKVxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcbnZhciBibGFuayA9IHJlcXVpcmUoJy4vcGFydGlhbC1ibGFuay1saW5lJylcblxuZnVuY3Rpb24gdG9rZW5pemVMaXN0U3RhcnQoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGluaXRpYWxTaXplID0gcHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpbmVQcmVmaXgnKVxuICB2YXIgdmFsdWVTaXplXG5cbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIGlmIChcbiAgICAgIChjb2RlID09PSA0MiB8fCBjb2RlID09PSA0MyB8fCBjb2RlID09PSA0NSkgJiZcbiAgICAgICghc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIgfHwgY29kZSA9PT0gc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gY29kZSA9PT0gNDIgfHwgY29kZSA9PT0gNDVcbiAgICAgICAgPyBlZmZlY3RzLmNoZWNrKHRoZW1hdGljQnJlYWssIG5vaywgdW5vcmRlcmVkKShjb2RlKVxuICAgICAgICA6IHVub3JkZXJlZChjb2RlKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGFzY2lpRGlnaXQoY29kZSkgJiZcbiAgICAgICghc2VsZi5jb250YWluZXJTdGF0ZS50eXBlIHx8IHNlbGYuY29udGFpbmVyU3RhdGUudHlwZSA9PT0gJ2xpc3RPcmRlcmVkJylcbiAgICApIHtcbiAgICAgIHJldHVybiBvcmRlcmVkKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdW5vcmRlcmVkKGNvZGUpIHtcbiAgICBpZiAoIXNlbGYuY29udGFpbmVyU3RhdGUudHlwZSkge1xuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS50eXBlID0gJ2xpc3RVbm9yZGVyZWQnXG4gICAgICBlZmZlY3RzLmVudGVyKHNlbGYuY29udGFpbmVyU3RhdGUudHlwZSwge19jb250YWluZXI6IHRydWV9KVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtUHJlZml4JylcbiAgICByZXR1cm4gYXRNYXJrZXIoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yZGVyZWQoY29kZSkge1xuICAgIGlmIChzZWxmLmNvbnRhaW5lclN0YXRlLnR5cGUgfHwgIXNlbGYuaW50ZXJydXB0IHx8IGNvZGUgPT09IDQ5KSB7XG4gICAgICBpZiAoIXNlbGYuY29udGFpbmVyU3RhdGUudHlwZSkge1xuICAgICAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnR5cGUgPSAnbGlzdE9yZGVyZWQnXG4gICAgICAgIGVmZmVjdHMuZW50ZXIoc2VsZi5jb250YWluZXJTdGF0ZS50eXBlLCB7X2NvbnRhaW5lcjogdHJ1ZX0pXG4gICAgICB9XG5cbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtUHJlZml4JylcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtVmFsdWUnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICB2YWx1ZVNpemUgPSAxXG4gICAgICByZXR1cm4gc2VsZi5pbnRlcnJ1cHQgPyBhZnRlclZhbHVlIDogaW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlEaWdpdChjb2RlKSAmJiArK3ZhbHVlU2l6ZSA8IDEwKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbnNpZGVcbiAgICB9XG5cbiAgICByZXR1cm4gYWZ0ZXJWYWx1ZShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJWYWx1ZShjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdsaXN0SXRlbVZhbHVlJylcblxuICAgIHJldHVybiBjb2RlID09PSA0MSB8fCBjb2RlID09PSA0NiA/IGF0TWFya2VyKGNvZGUpIDogbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhdE1hcmtlcihjb2RlKSB7XG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIgPSBzZWxmLmNvbnRhaW5lclN0YXRlLm1hcmtlciB8fCBjb2RlXG5cbiAgICBpZiAoY29kZSA9PT0gc2VsZi5jb250YWluZXJTdGF0ZS5tYXJrZXIpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ2xpc3RJdGVtTWFya2VyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaXN0SXRlbU1hcmtlcicpXG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgICAgYmxhbmssXG4gICAgICAgIC8vIENhbuKAmXQgYmUgZW1wdHkgd2hlbiBpbnRlcnJ1cHRpbmcuXG4gICAgICAgIHNlbGYuaW50ZXJydXB0ID8gbm9rIDogb25CbGFuayxcbiAgICAgICAgZWZmZWN0cy5hdHRlbXB0KFxuICAgICAgICAgIHt0b2tlbml6ZTogdG9rZW5pemVMaXN0SXRlbVByZWZpeFdoaXRlc3BhY2UsIHBhcnRpYWw6IHRydWV9LFxuICAgICAgICAgIGVuZE9mUHJlZml4LFxuICAgICAgICAgIG90aGVyUHJlZml4XG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBvbkJsYW5rKGNvZGUpIHtcbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLmluaXRpYWxCbGFua0xpbmUgPSB0cnVlXG4gICAgaW5pdGlhbFNpemUrK1xuICAgIHJldHVybiBlbmRPZlByZWZpeChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gb3RoZXJQcmVmaXgoY29kZSkge1xuICAgIGlmIChtYXJrZG93blNwYWNlKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCdsaXN0SXRlbVByZWZpeFdoaXRlc3BhY2UnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICByZXR1cm4gZW5kT2ZQcmVmaXhcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBlbmRPZlByZWZpeChjb2RlKSB7XG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5zaXplID1cbiAgICAgIGluaXRpYWxTaXplICsgc2l6ZUNodW5rcyhzZWxmLnNsaWNlU3RyZWFtKGVmZmVjdHMuZXhpdCgnbGlzdEl0ZW1QcmVmaXgnKSkpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9rZW5pemVMaXN0Q29udGludWF0aW9uKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgc2VsZi5jb250YWluZXJTdGF0ZS5fY2xvc2VGbG93ID0gdW5kZWZpbmVkXG5cbiAgcmV0dXJuIGVmZmVjdHMuY2hlY2soYmxhbmssIG9uQmxhbmssIG5vdEJsYW5rKVxuXG4gIGZ1bmN0aW9uIG9uQmxhbmsoY29kZSkge1xuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgPVxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5mdXJ0aGVyQmxhbmtMaW5lcyB8fFxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5pbml0aWFsQmxhbmtMaW5lXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBub3RCbGFuayhjb2RlKSB7XG4gICAgaWYgKHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgfHwgIW1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHNlbGYuY29udGFpbmVyU3RhdGUuZnVydGhlckJsYW5rTGluZXMgPSBzZWxmLmNvbnRhaW5lclN0YXRlLmluaXRpYWxCbGFua0xpbmUgPSB1bmRlZmluZWRcbiAgICAgIHJldHVybiBub3RJbkN1cnJlbnRJdGVtKGNvZGUpXG4gICAgfVxuXG4gICAgc2VsZi5jb250YWluZXJTdGF0ZS5mdXJ0aGVyQmxhbmtMaW5lcyA9IHNlbGYuY29udGFpbmVyU3RhdGUuaW5pdGlhbEJsYW5rTGluZSA9IHVuZGVmaW5lZFxuICAgIHJldHVybiBlZmZlY3RzLmF0dGVtcHQoXG4gICAgICB7dG9rZW5pemU6IHRva2VuaXplSW5kZW50LCBwYXJ0aWFsOiB0cnVlfSxcbiAgICAgIG9rLFxuICAgICAgbm90SW5DdXJyZW50SXRlbVxuICAgICkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdEluQ3VycmVudEl0ZW0oY29kZSkge1xuICAgIC8vIFdoaWxlIHdlIGRvIGNvbnRpbnVlLCB3ZSBzaWduYWwgdGhhdCB0aGUgZmxvdyBzaG91bGQgYmUgY2xvc2VkLlxuICAgIHNlbGYuY29udGFpbmVyU3RhdGUuX2Nsb3NlRmxvdyA9IHRydWVcbiAgICAvLyBBcyB3ZeKAmXJlIGNsb3NpbmcgZmxvdywgd2XigJlyZSBubyBsb25nZXIgaW50ZXJydXB0aW5nXG4gICAgc2VsZi5pbnRlcnJ1cHQgPSB1bmRlZmluZWRcbiAgICByZXR1cm4gY3JlYXRlU3BhY2UoXG4gICAgICBlZmZlY3RzLFxuICAgICAgZWZmZWN0cy5hdHRlbXB0KGV4cG9ydHMsIG9rLCBub2spLFxuICAgICAgJ2xpbmVQcmVmaXgnLFxuICAgICAgNFxuICAgICkoY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUluZGVudChlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBjcmVhdGVTcGFjZShcbiAgICBlZmZlY3RzLFxuICAgIGFmdGVyUHJlZml4LFxuICAgICdsaXN0SXRlbUluZGVudCcsXG5cbiAgICBzZWxmLmNvbnRhaW5lclN0YXRlLnNpemUgKyAxXG4gIClcblxuICBmdW5jdGlvbiBhZnRlclByZWZpeChjb2RlKSB7XG4gICAgcmV0dXJuIHByZWZpeFNpemUoc2VsZi5ldmVudHMsICdsaXN0SXRlbUluZGVudCcpID09PVxuICAgICAgc2VsZi5jb250YWluZXJTdGF0ZS5zaXplXG4gICAgICA/IG9rKGNvZGUpXG4gICAgICA6IG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplTGlzdEVuZChlZmZlY3RzKSB7XG4gIGVmZmVjdHMuZXhpdCh0aGlzLmNvbnRhaW5lclN0YXRlLnR5cGUpXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplTGlzdEl0ZW1QcmVmaXhXaGl0ZXNwYWNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIGNyZWF0ZVNwYWNlKFxuICAgIGVmZmVjdHMsXG4gICAgYWZ0ZXJQcmVmaXgsXG4gICAgJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScsXG5cbiAgICA0ICsgMVxuICApXG5cbiAgZnVuY3Rpb24gYWZ0ZXJQcmVmaXgoY29kZSkge1xuICAgIHJldHVybiBtYXJrZG93blNwYWNlKGNvZGUpIHx8XG4gICAgICAhcHJlZml4U2l6ZShzZWxmLmV2ZW50cywgJ2xpc3RJdGVtUHJlZml4V2hpdGVzcGFjZScpXG4gICAgICA/IG5vayhjb2RlKVxuICAgICAgOiBvayhjb2RlKVxuICB9XG59XG4iLCJleHBvcnRzLnRva2VuaXplID0gdG9rZW5pemVCbGFua0xpbmVcbmV4cG9ydHMucGFydGlhbCA9IHRydWVcblxudmFyIG1hcmtkb3duTGluZUVuZGluZyA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZycpXG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJy4vZmFjdG9yeS1zcGFjZScpXG5cbmZ1bmN0aW9uIHRva2VuaXplQmxhbmtMaW5lKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIGNyZWF0ZVNwYWNlKGVmZmVjdHMsIGFmdGVyV2hpdGVzcGFjZSwgJ2xpbmVQcmVmaXgnKVxuXG4gIGZ1bmN0aW9uIGFmdGVyV2hpdGVzcGFjZShjb2RlKSB7XG4gICAgcmV0dXJuIGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpID8gb2soY29kZSkgOiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplU2V0ZXh0VW5kZXJsaW5lXG5leHBvcnRzLnJlc29sdmVUbyA9IHJlc29sdmVUb1NldGV4dFVuZGVybGluZVxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcblxudmFyIHNoYWxsb3cgPSByZXF1aXJlKCcuLi91dGlsL3NoYWxsb3cnKVxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gcmVzb2x2ZVRvU2V0ZXh0VW5kZXJsaW5lKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSBldmVudHMubGVuZ3RoXG4gIHZhciBjb250ZW50XG4gIHZhciB0ZXh0XG4gIHZhciBkZWZpbml0aW9uXG4gIHZhciBoZWFkaW5nXG5cbiAgLy8gRmluZCB0aGUgb3BlbmluZyBvZiB0aGUgY29udGVudC5cbiAgLy8gSXTigJlsbCBhbHdheXMgZXhpc3Q6IHdlIGRvbuKAmXQgdG9rZW5pemUgaWYgaXQgaXNu4oCZdCB0aGVyZS5cbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICBpZiAoZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJykge1xuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGNvbnRlbnQgPSBpbmRleFxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgICAgICB0ZXh0ID0gaW5kZXhcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRXhpdFxuICAgIGVsc2Uge1xuICAgICAgaWYgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgY29udGVudCBlbmQgKGlmIG5lZWRlZCB3ZeKAmWxsIGFkZCBpdCBsYXRlcilcbiAgICAgICAgZXZlbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIH1cblxuICAgICAgaWYgKCFkZWZpbml0aW9uICYmIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2RlZmluaXRpb24nKSB7XG4gICAgICAgIGRlZmluaXRpb24gPSBpbmRleFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhlYWRpbmcgPSB7XG4gICAgdHlwZTogJ3NldGV4dEhlYWRpbmcnLFxuICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1t0ZXh0XVsxXS5zdGFydCksXG4gICAgZW5kOiBzaGFsbG93KGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0uZW5kKVxuICB9XG5cbiAgLy8gQ2hhbmdlIHRoZSBwYXJhZ3JhcGggdG8gc2V0ZXh0IGhlYWRpbmcgdGV4dC5cbiAgZXZlbnRzW3RleHRdWzFdLnR5cGUgPSAnc2V0ZXh0SGVhZGluZ1RleHQnXG5cbiAgLy8gSWYgd2UgaGF2ZSBkZWZpbml0aW9ucyBpbiB0aGUgY29udGVudCwgd2XigJlsbCBrZWVwIG9uIGhhdmluZyBjb250ZW50LFxuICAvLyBidXQgd2UgbmVlZCBtb3ZlIGl0LlxuICBpZiAoZGVmaW5pdGlvbikge1xuICAgIGV2ZW50cy5zcGxpY2UodGV4dCwgMCwgWydlbnRlcicsIGhlYWRpbmcsIGNvbnRleHRdKVxuICAgIGV2ZW50cy5zcGxpY2UoZGVmaW5pdGlvbiArIDEsIDAsIFsnZXhpdCcsIGV2ZW50c1tjb250ZW50XVsxXSwgY29udGV4dF0pXG4gICAgZXZlbnRzW2NvbnRlbnRdWzFdLmVuZCA9IHNoYWxsb3coZXZlbnRzW2RlZmluaXRpb25dWzFdLmVuZClcbiAgfSBlbHNlIHtcbiAgICBldmVudHNbY29udGVudF1bMV0gPSBoZWFkaW5nXG4gIH1cblxuICAvLyBBZGQgdGhlIGhlYWRpbmcgZXhpdCBhdCB0aGUgZW5kLlxuICBldmVudHMucHVzaChbJ2V4aXQnLCBoZWFkaW5nLCBjb250ZXh0XSlcblxuICByZXR1cm4gZXZlbnRzXG59XG5cbmZ1bmN0aW9uIHRva2VuaXplU2V0ZXh0VW5kZXJsaW5lKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBpbmRleCA9IHNlbGYuZXZlbnRzLmxlbmd0aFxuICB2YXIgbWFya2VyXG4gIHZhciBwYXJhZ3JhcGhcblxuICAvLyBGaW5kIGFuIG9wZW5pbmcuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgLy8gU2tpcCBlbnRlci9leGl0IG9mIGxpbmUgZW5kaW5nLCBsaW5lIHByZWZpeCwgYW5kIGNvbnRlbnQuXG4gICAgLy8gV2UgY2FuIG5vdyBlaXRoZXIgaGF2ZSBhIGRlZmluaXRpb24gb3IgYSBwYXJhZ3JhcGguXG4gICAgaWYgKFxuICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgIT09ICdsaW5lRW5kaW5nJyAmJlxuICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgIT09ICdsaW5lUHJlZml4JyAmJlxuICAgICAgc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgIT09ICdjb250ZW50J1xuICAgICkge1xuICAgICAgcGFyYWdyYXBoID0gc2VsZi5ldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdwYXJhZ3JhcGgnXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBpZiAoIXNlbGYubGF6eSAmJiAoc2VsZi5pbnRlcnJ1cHQgfHwgcGFyYWdyYXBoKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcignc2V0ZXh0SGVhZGluZ0xpbmUnKVxuICAgICAgZWZmZWN0cy5lbnRlcignc2V0ZXh0SGVhZGluZ0xpbmVTZXF1ZW5jZScpXG4gICAgICBtYXJrZXIgPSBjb2RlXG4gICAgICByZXR1cm4gY2xvc2luZ1NlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2luZ1NlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjbG9zaW5nU2VxdWVuY2VcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQoJ3NldGV4dEhlYWRpbmdMaW5lU2VxdWVuY2UnKVxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBjbG9zaW5nU2VxdWVuY2VFbmQsICdsaW5lU3VmZml4JykoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NpbmdTZXF1ZW5jZUVuZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpKSB7XG4gICAgICBlZmZlY3RzLmV4aXQoJ3NldGV4dEhlYWRpbmdMaW5lJylcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuIiwiZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplVGhlbWF0aWNCcmVha1xuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciBtYXJrZG93blNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL21hcmtkb3duLXNwYWNlJylcblxudmFyIGNyZWF0ZVNwYWNlID0gcmVxdWlyZSgnLi9mYWN0b3J5LXNwYWNlJylcblxuZnVuY3Rpb24gdG9rZW5pemVUaGVtYXRpY0JyZWFrKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNpemUgPSAwXG4gIHZhciBtYXJrZXJcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgZWZmZWN0cy5lbnRlcigndGhlbWF0aWNCcmVhaycpXG4gICAgbWFya2VyID0gY29kZVxuICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhdEJyZWFrKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0aGVtYXRpY0JyZWFrU2VxdWVuY2UnKVxuICAgICAgcmV0dXJuIHNlcXVlbmNlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCBhdEJyZWFrLCAnd2hpdGVzcGFjZScpKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKHNpemUgPCAzIHx8IChjb2RlICE9PSBudWxsICYmICFtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCd0aGVtYXRpY0JyZWFrJylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcXVlbmNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gbWFya2VyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUrK1xuICAgICAgcmV0dXJuIHNlcXVlbmNlXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCd0aGVtYXRpY0JyZWFrU2VxdWVuY2UnKVxuICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gY2h1bmtlZFNwbGljZVxuXG52YXIgdjhNYXhTYWZlQ2h1bmtTaXplID0gMTAwMDBcblxuLy8gYEFycmF5I3NwbGljZWAgdGFrZXMgYWxsIGl0ZW1zIHRvIGJlIGluc2VydGVkIGFzIGluZGl2aWR1YWwgYXJndW1lbnQgd2hpY2hcbi8vIGNhdXNlcyBhIHN0YWNrIG92ZXJmbG93IGluIFY4IHdoZW4gdHJ5aW5nIHRvIGluc2VydCAxMDBrIGl0ZW1zIGZvciBpbnN0YW5jZS5cbmZ1bmN0aW9uIGNodW5rZWRTcGxpY2UobGlzdCwgc3RhcnQsIHJlbW92ZSwgaXRlbXMpIHtcbiAgdmFyIGVuZCA9IGxpc3QubGVuZ3RoXG4gIHZhciBjaHVua1N0YXJ0ID0gMFxuICB2YXIgcmVzdWx0XG4gIHZhciBwYXJhbWV0ZXJzXG5cbiAgLy8gTWFrZSBzdGFydCBiZXR3ZWVuIHplcm8gYW5kIGBlbmRgIChpbmNsdWRlZCkuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGVuZCA/IDAgOiBlbmQgKyBzdGFydFxuICB9IGVsc2Uge1xuICAgIHN0YXJ0ID0gc3RhcnQgPiBlbmQgPyBlbmQgOiBzdGFydFxuICB9XG5cbiAgcmVtb3ZlID0gcmVtb3ZlID4gMCA/IHJlbW92ZSA6IDBcblxuICAvLyBObyBuZWVkIHRvIGNodW5rIHRoZSBpdGVtcyBpZiB0aGVyZeKAmXMgb25seSBhIGNvdXBsZSAoMTBrKSBpdGVtcy5cbiAgaWYgKGl0ZW1zLmxlbmd0aCA8IHY4TWF4U2FmZUNodW5rU2l6ZSkge1xuICAgIHBhcmFtZXRlcnMgPSBBcnJheS5mcm9tKGl0ZW1zKVxuICAgIHBhcmFtZXRlcnMudW5zaGlmdChzdGFydCwgcmVtb3ZlKVxuICAgIHJldHVybiBbXS5zcGxpY2UuYXBwbHkobGlzdCwgcGFyYW1ldGVycylcbiAgfVxuXG4gIC8vIERlbGV0ZSBgcmVtb3ZlYCBpdGVtcyBzdGFydGluZyBmcm9tIGBzdGFydGBcbiAgcmVzdWx0ID0gW10uc3BsaWNlLmFwcGx5KGxpc3QsIFtzdGFydCwgcmVtb3ZlXSlcblxuICAvLyBJbnNlcnQgdGhlIGl0ZW1zIGluIGNodW5rcyB0byBub3QgY2F1c2Ugc3RhY2sgb3ZlcmZsb3dzLlxuICB3aGlsZSAoY2h1bmtTdGFydCA8IGl0ZW1zLmxlbmd0aCkge1xuICAgIHBhcmFtZXRlcnMgPSBpdGVtcy5zbGljZShjaHVua1N0YXJ0LCBjaHVua1N0YXJ0ICsgdjhNYXhTYWZlQ2h1bmtTaXplKVxuICAgIHBhcmFtZXRlcnMudW5zaGlmdChzdGFydCwgMClcbiAgICA7W10uc3BsaWNlLmFwcGx5KGxpc3QsIHBhcmFtZXRlcnMpXG5cbiAgICBjaHVua1N0YXJ0ICs9IHY4TWF4U2FmZUNodW5rU2l6ZVxuICAgIHN0YXJ0ICs9IHY4TWF4U2FmZUNodW5rU2l6ZVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzc2lmeUNoYXJhY3RlclxuXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZSA9IHJlcXVpcmUoJy4uL2NoYXJhY3Rlci9tYXJrZG93bi1saW5lLWVuZGluZy1vci1zcGFjZScpXG52YXIgdW5pY29kZVB1bmN0dWF0aW9uID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL3VuaWNvZGUtcHVuY3R1YXRpb24nKVxudmFyIHVuaWNvZGVXaGl0ZXNwYWNlID0gcmVxdWlyZSgnLi4vY2hhcmFjdGVyL3VuaWNvZGUtd2hpdGVzcGFjZScpXG5cbi8vIENsYXNzaWZ5IHdoZXRoZXIgYSBjaGFyYWN0ZXIgaXMgdW5pY29kZSB3aGl0ZXNwYWNlLCB1bmljb2RlIHB1bmN0dWF0aW9uLCBvclxuLy8gYW55dGhpbmcgZWxzZS5cbi8vIFVzZWQgZm9yIGF0dGVudGlvbiAoZW1waGFzaXMsIHN0cm9uZyksIHdob3NlIHNlcXVlbmNlcyBjYW4gb3BlbiBvciBjbG9zZVxuLy8gYmFzZWQgb24gdGhlIGNsYXNzIG9mIHN1cnJvdW5kaW5nIGNoYXJhY3RlcnMuXG5mdW5jdGlvbiBjbGFzc2lmeUNoYXJhY3Rlcihjb2RlKSB7XG4gIGlmIChcbiAgICBjb2RlID09PSBudWxsIHx8XG4gICAgbWFya2Rvd25MaW5lRW5kaW5nT3JTcGFjZShjb2RlKSB8fFxuICAgIHVuaWNvZGVXaGl0ZXNwYWNlKGNvZGUpXG4gICkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBpZiAodW5pY29kZVB1bmN0dWF0aW9uKGNvZGUpKSB7XG4gICAgcmV0dXJuIDJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjb21iaW5lRXh0ZW5zaW9uc1xuXG52YXIgb3duID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvaGFzLW93bi1wcm9wZXJ0eScpXG52YXIgbWluaWZsYXQgPSByZXF1aXJlKCcuL21pbmlmbGF0JylcbnZhciBjaHVua2VkU3BsaWNlID0gcmVxdWlyZSgnLi9jaHVua2VkLXNwbGljZScpXG5cbi8vIENvbWJpbmUgc2V2ZXJhbCBzeW50YXggZXh0ZW5zaW9ucyBpbnRvIG9uZS5cbmZ1bmN0aW9uIGNvbWJpbmVFeHRlbnNpb25zKGV4dGVuc2lvbnMpIHtcbiAgdmFyIGFsbCA9IHt9XG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCBleHRlbnNpb25zLmxlbmd0aCkge1xuICAgIGV4dGVuc2lvbihhbGwsIGV4dGVuc2lvbnNbaW5kZXhdKVxuICB9XG5cbiAgcmV0dXJuIGFsbFxufVxuXG5mdW5jdGlvbiBleHRlbnNpb24oYWxsLCBleHRlbnNpb24pIHtcbiAgdmFyIGhvb2tcbiAgdmFyIGxlZnRcbiAgdmFyIHJpZ2h0XG4gIHZhciBjb2RlXG5cbiAgZm9yIChob29rIGluIGV4dGVuc2lvbikge1xuICAgIGxlZnQgPSBvd24uY2FsbChhbGwsIGhvb2spID8gYWxsW2hvb2tdIDogKGFsbFtob29rXSA9IHt9KVxuICAgIHJpZ2h0ID0gZXh0ZW5zaW9uW2hvb2tdXG5cbiAgICBmb3IgKGNvZGUgaW4gcmlnaHQpIHtcbiAgICAgIGxlZnRbY29kZV0gPSBjb25zdHJ1Y3RzKFxuICAgICAgICBtaW5pZmxhdChyaWdodFtjb2RlXSksXG4gICAgICAgIG93bi5jYWxsKGxlZnQsIGNvZGUpID8gbGVmdFtjb2RlXSA6IFtdXG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdHMobGlzdCwgZXhpc3RpbmcpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGJlZm9yZSA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsaXN0Lmxlbmd0aCkge1xuICAgIDsobGlzdFtpbmRleF0uYWRkID09PSAnYWZ0ZXInID8gZXhpc3RpbmcgOiBiZWZvcmUpLnB1c2gobGlzdFtpbmRleF0pXG4gIH1cblxuICBjaHVua2VkU3BsaWNlKGV4aXN0aW5nLCAwLCAwLCBiZWZvcmUpXG4gIHJldHVybiBleGlzdGluZ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVUb2tlbml6ZXJcblxudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Fzc2lnbicpXG5cbnZhciBtYXJrZG93bkxpbmVFbmRpbmcgPSByZXF1aXJlKCcuLi9jaGFyYWN0ZXIvbWFya2Rvd24tbGluZS1lbmRpbmcnKVxudmFyIGNodW5rZWRTcGxpY2UgPSByZXF1aXJlKCcuL2NodW5rZWQtc3BsaWNlJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnLi9zaGFsbG93JylcbnZhciBzZXJpYWxpemVDaHVua3MgPSByZXF1aXJlKCcuL3NlcmlhbGl6ZS1jaHVua3MnKVxudmFyIHNsaWNlQ2h1bmtzID0gcmVxdWlyZSgnLi9zbGljZS1jaHVua3MnKVxudmFyIHJlc29sdmVBbGwgPSByZXF1aXJlKCcuL3Jlc29sdmUtYWxsJylcbnZhciBtaW5pZmxhdCA9IHJlcXVpcmUoJy4vbWluaWZsYXQnKVxuXG4vLyBDcmVhdGUgYSB0b2tlbml6ZXIuXG4vLyBUb2tlbml6ZXJzIGRlYWwgd2l0aCBvbmUgdHlwZSBvZiBkYXRhIChlLmcuLCBjb250YWluZXJzLCBmbG93LCB0ZXh0KS5cbi8vIFRoZSBwYXJzZXIgaXMgdGhlIG9iamVjdCBkZWFsaW5nIHdpdGggaXQgYWxsLlxuLy8gYGluaXRpYWxpemVgIHdvcmtzIGxpa2Ugb3RoZXIgY29uc3RydWN0cywgZXhjZXB0IHRoYXQgb25seSBpdHMgYHRva2VuaXplYFxuLy8gZnVuY3Rpb24gaXMgdXNlZCwgaW4gd2hpY2ggY2FzZSBpdCBkb2VzbuKAmXQgcmVjZWl2ZSBhbiBgb2tgIG9yIGBub2tgLlxuLy8gYGZyb21gIGNhbiBiZSBnaXZlbiB0byBzZXQgdGhlIHBvaW50IGJlZm9yZSB0aGUgZmlyc3QgY2hhcmFjdGVyLCBhbHRob3VnaFxuLy8gd2hlbiBmdXJ0aGVyIGxpbmVzIGFyZSBpbmRlbnRlZCwgdGhleSBtdXN0IGJlIHNldCB3aXRoIGBkZWZpbmVTa2lwYC5cbmZ1bmN0aW9uIGNyZWF0ZVRva2VuaXplcihwYXJzZXIsIGluaXRpYWxpemUsIGZyb20pIHtcbiAgdmFyIHBvaW50ID0gZnJvbSA/IHNoYWxsb3coZnJvbSkgOiB7bGluZTogMSwgY29sdW1uOiAxLCBvZmZzZXQ6IDB9XG4gIHZhciBjb2x1bW5TdGFydCA9IHt9XG4gIHZhciByZXNvbHZlQWxsQ29uc3RydWN0cyA9IFtdXG4gIHZhciBjaHVua3MgPSBbXVxuICB2YXIgc3RhY2sgPSBbXVxuICB2YXIgY29uc3VtZWQgPSB0cnVlXG5cbiAgLy8gVG9vbHMgdXNlZCBmb3IgdG9rZW5pemluZy5cbiAgdmFyIGVmZmVjdHMgPSB7XG4gICAgY29uc3VtZTogY29uc3VtZSxcbiAgICBlbnRlcjogZW50ZXIsXG4gICAgZXhpdDogZXhpdCxcbiAgICBhdHRlbXB0OiBjb25zdHJ1Y3RGYWN0b3J5KG9uc3VjY2Vzc2Z1bGNvbnN0cnVjdCksXG4gICAgY2hlY2s6IGNvbnN0cnVjdEZhY3Rvcnkob25zdWNjZXNzZnVsY2hlY2spLFxuICAgIGludGVycnVwdDogY29uc3RydWN0RmFjdG9yeShvbnN1Y2Nlc3NmdWxjaGVjaywge2ludGVycnVwdDogdHJ1ZX0pLFxuICAgIGxhenk6IGNvbnN0cnVjdEZhY3Rvcnkob25zdWNjZXNzZnVsY2hlY2ssIHtsYXp5OiB0cnVlfSlcbiAgfVxuXG4gIC8vIFN0YXRlIGFuZCB0b29scyBmb3IgcmVzb2x2aW5nIGFuZCBzZXJpYWxpemluZy5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgcHJldmlvdXM6IG51bGwsXG4gICAgZXZlbnRzOiBbXSxcbiAgICBwYXJzZXI6IHBhcnNlcixcbiAgICBzbGljZVN0cmVhbTogc2xpY2VTdHJlYW0sXG4gICAgc2xpY2VTZXJpYWxpemU6IHNsaWNlU2VyaWFsaXplLFxuICAgIG5vdzogbm93LFxuICAgIGRlZmluZVNraXA6IHNraXAsXG4gICAgd3JpdGU6IHdyaXRlXG4gIH1cblxuICAvLyBUaGUgc3RhdGUgZnVuY3Rpb24uXG4gIHZhciBzdGF0ZSA9IGluaXRpYWxpemUudG9rZW5pemUuY2FsbChjb250ZXh0LCBlZmZlY3RzKVxuXG4gIC8vIFRyYWNrIHdoaWNoIGNoYXJhY3RlciB3ZSBleHBlY3QgdG8gYmUgY29uc3VtZWQsIHRvIGNhdGNoIGJ1Z3MuXG4gIHZhciBleHBlY3RlZENvZGVcblxuICBpZiAoaW5pdGlhbGl6ZS5yZXNvbHZlQWxsKSB7XG4gICAgcmVzb2x2ZUFsbENvbnN0cnVjdHMucHVzaChpbml0aWFsaXplKVxuICB9XG5cbiAgLy8gU3RvcmUgd2hlcmUgd2UgYXJlIGluIHRoZSBpbnB1dCBzdHJlYW0uXG4gIHBvaW50Ll9pbmRleCA9IDBcbiAgcG9pbnQuX2J1ZmZlckluZGV4ID0gLTFcblxuICByZXR1cm4gY29udGV4dFxuXG4gIGZ1bmN0aW9uIHdyaXRlKHNsaWNlKSB7XG4gICAgY2h1bmtlZFNwbGljZShjaHVua3MsIGNodW5rcy5sZW5ndGgsIDAsIHNsaWNlKVxuXG4gICAgbWFpbigpXG5cbiAgICAvLyBFeGl0IGlmIHdl4oCZcmUgbm90IGRvbmUsIHJlc29sdmUgbWlnaHQgY2hhbmdlIHN0dWZmLlxuICAgIGlmIChjaHVua3NbY2h1bmtzLmxlbmd0aCAtIDFdICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBhZGRSZXN1bHQoaW5pdGlhbGl6ZSwgMClcblxuICAgIC8vIE90aGVyd2lzZSwgcmVzb2x2ZSwgYW5kIGV4aXQuXG4gICAgY29udGV4dC5ldmVudHMgPSByZXNvbHZlQWxsKHJlc29sdmVBbGxDb25zdHJ1Y3RzLCBjb250ZXh0LmV2ZW50cywgY29udGV4dClcblxuICAgIHJldHVybiBjb250ZXh0LmV2ZW50c1xuICB9XG5cbiAgLy9cbiAgLy8gVG9vbHMuXG4gIC8vXG5cbiAgZnVuY3Rpb24gc2xpY2VTZXJpYWxpemUodG9rZW4pIHtcbiAgICByZXR1cm4gc2VyaWFsaXplQ2h1bmtzKHNsaWNlU3RyZWFtKHRva2VuKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWNlU3RyZWFtKHRva2VuKSB7XG4gICAgcmV0dXJuIHNsaWNlQ2h1bmtzKGNodW5rcywgdG9rZW4pXG4gIH1cblxuICBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIHNoYWxsb3cocG9pbnQpXG4gIH1cblxuICBmdW5jdGlvbiBza2lwKHZhbHVlKSB7XG4gICAgY29sdW1uU3RhcnRbdmFsdWUubGluZV0gPSB2YWx1ZS5jb2x1bW5cbiAgICBhY2NvdW50Rm9yUG90ZW50aWFsU2tpcCgpXG4gIH1cblxuICAvL1xuICAvLyBTdGF0ZSBtYW5hZ2VtZW50LlxuICAvL1xuXG4gIC8vIE1haW4gbG9vcCAobm90ZSB0aGF0IGBfaW5kZXhgIGFuZCBgX2J1ZmZlckluZGV4YCBpbiBgcG9pbnRgIGFyZSBtb2RpZmllZCBieVxuICAvLyBgY29uc3VtZWApLlxuICAvLyBIZXJlIGlzIHdoZXJlIHdlIHdhbGsgdGhyb3VnaCB0aGUgY2h1bmtzLCB3aGljaCBlaXRoZXIgaW5jbHVkZSBzdHJpbmdzIG9mXG4gIC8vIHNldmVyYWwgY2hhcmFjdGVycywgb3IgbnVtZXJpY2FsIGNoYXJhY3RlciBjb2Rlcy5cbiAgLy8gVGhlIHJlYXNvbiB0byBkbyB0aGlzIGluIGEgbG9vcCBpbnN0ZWFkIG9mIGEgY2FsbCBpcyBzbyB0aGUgc3RhY2sgY2FuXG4gIC8vIGRyYWluLlxuICBmdW5jdGlvbiBtYWluKCkge1xuICAgIHZhciBjaHVua0luZGV4XG4gICAgdmFyIGNodW5rXG5cbiAgICB3aGlsZSAocG9pbnQuX2luZGV4IDwgY2h1bmtzLmxlbmd0aCkge1xuICAgICAgY2h1bmsgPSBjaHVua3NbcG9pbnQuX2luZGV4XVxuXG4gICAgICAvLyBJZiB3ZeKAmXJlIGluIGEgYnVmZmVyIGNodW5rLCBsb29wIHRocm91Z2ggaXQuXG4gICAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaHVua0luZGV4ID0gcG9pbnQuX2luZGV4XG5cbiAgICAgICAgaWYgKHBvaW50Ll9idWZmZXJJbmRleCA8IDApIHtcbiAgICAgICAgICBwb2ludC5fYnVmZmVySW5kZXggPSAwXG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgcG9pbnQuX2luZGV4ID09PSBjaHVua0luZGV4ICYmXG4gICAgICAgICAgcG9pbnQuX2J1ZmZlckluZGV4IDwgY2h1bmsubGVuZ3RoXG4gICAgICAgICkge1xuICAgICAgICAgIGdvKGNodW5rLmNoYXJDb2RlQXQocG9pbnQuX2J1ZmZlckluZGV4KSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ28oY2h1bmspXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGVhbCB3aXRoIG9uZSBjb2RlLlxuICBmdW5jdGlvbiBnbyhjb2RlKSB7XG4gICAgY29uc3VtZWQgPSB1bmRlZmluZWRcblxuICAgIGV4cGVjdGVkQ29kZSA9IGNvZGVcbiAgICBzdGF0ZSA9IHN0YXRlKGNvZGUpXG4gIH1cblxuICAvLyBNb3ZlIGEgY2hhcmFjdGVyIGZvcndhcmQuXG4gIGZ1bmN0aW9uIGNvbnN1bWUoY29kZSkge1xuICAgIGlmIChtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkpIHtcbiAgICAgIHBvaW50LmxpbmUrK1xuICAgICAgcG9pbnQuY29sdW1uID0gMVxuICAgICAgcG9pbnQub2Zmc2V0ICs9IGNvZGUgPT09IC0zID8gMiA6IDFcbiAgICAgIGFjY291bnRGb3JQb3RlbnRpYWxTa2lwKClcbiAgICB9IGVsc2UgaWYgKGNvZGUgIT09IC0xKSB7XG4gICAgICBwb2ludC5jb2x1bW4rK1xuICAgICAgcG9pbnQub2Zmc2V0KytcbiAgICB9XG5cbiAgICAvLyBOb3QgaW4gYSBzdHJpbmcgY2h1bmsuXG4gICAgaWYgKHBvaW50Ll9idWZmZXJJbmRleCA8IDApIHtcbiAgICAgIHBvaW50Ll9pbmRleCsrXG4gICAgfSBlbHNlIHtcbiAgICAgIHBvaW50Ll9idWZmZXJJbmRleCsrXG5cbiAgICAgIC8vIEF0IGVuZCBvZiBzdHJpbmcgY2h1bmsuXG4gICAgICBpZiAocG9pbnQuX2J1ZmZlckluZGV4ID09PSBjaHVua3NbcG9pbnQuX2luZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgcG9pbnQuX2J1ZmZlckluZGV4ID0gLTFcbiAgICAgICAgcG9pbnQuX2luZGV4KytcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHBvc2UgdGhlIHByZXZpb3VzIGNoYXJhY3Rlci5cbiAgICBjb250ZXh0LnByZXZpb3VzID0gY29kZVxuXG4gICAgLy8gTWFyayBhcyBjb25zdW1lZC5cbiAgICBjb25zdW1lZCA9IHRydWVcbiAgfVxuXG4gIC8vIFN0YXJ0IGEgdG9rZW4uXG4gIGZ1bmN0aW9uIGVudGVyKHR5cGUsIGZpZWxkcykge1xuICAgIHZhciB0b2tlbiA9IGZpZWxkcyB8fCB7fVxuICAgIHRva2VuLnR5cGUgPSB0eXBlXG4gICAgdG9rZW4uc3RhcnQgPSBub3coKVxuXG4gICAgY29udGV4dC5ldmVudHMucHVzaChbJ2VudGVyJywgdG9rZW4sIGNvbnRleHRdKVxuXG4gICAgc3RhY2sucHVzaCh0b2tlbilcblxuICAgIHJldHVybiB0b2tlblxuICB9XG5cbiAgLy8gU3RvcCBhIHRva2VuLlxuICBmdW5jdGlvbiBleGl0KHR5cGUpIHtcbiAgICB2YXIgdG9rZW4gPSBzdGFjay5wb3AoKVxuICAgIHRva2VuLmVuZCA9IG5vdygpXG5cbiAgICBjb250ZXh0LmV2ZW50cy5wdXNoKFsnZXhpdCcsIHRva2VuLCBjb250ZXh0XSlcblxuICAgIHJldHVybiB0b2tlblxuICB9XG5cbiAgLy8gVXNlIHJlc3VsdHMuXG4gIGZ1bmN0aW9uIG9uc3VjY2Vzc2Z1bGNvbnN0cnVjdChjb25zdHJ1Y3QsIGluZm8pIHtcbiAgICBhZGRSZXN1bHQoY29uc3RydWN0LCBpbmZvLmZyb20pXG4gIH1cblxuICAvLyBEaXNjYXJkIHJlc3VsdHMuXG4gIGZ1bmN0aW9uIG9uc3VjY2Vzc2Z1bGNoZWNrKGNvbnN0cnVjdCwgaW5mbykge1xuICAgIGluZm8ucmVzdG9yZSgpXG4gIH1cblxuICAvLyBGYWN0b3J5IHRvIGF0dGVtcHQvY2hlY2svaW50ZXJydXB0LlxuICBmdW5jdGlvbiBjb25zdHJ1Y3RGYWN0b3J5KG9ucmV0dXJuLCBmaWVsZHMpIHtcbiAgICByZXR1cm4gaG9va1xuXG4gICAgLy8gSGFuZGxlIGVpdGhlciBhbiBvYmplY3QgbWFwcGluZyBjb2RlcyB0byBjb25zdHJ1Y3RzLCBhIGxpc3Qgb2ZcbiAgICAvLyBjb25zdHJ1Y3RzLCBvciBhIHNpbmdsZSBjb25zdHJ1Y3QuXG4gICAgZnVuY3Rpb24gaG9vayhjb25zdHJ1Y3RzLCByZXR1cm5TdGF0ZSwgYm9ndXNTdGF0ZSkge1xuICAgICAgdmFyIGxpc3RPZkNvbnN0cnVjdHNcbiAgICAgIHZhciBjb25zdHJ1Y3RJbmRleFxuICAgICAgdmFyIGN1cnJlbnRDb25zdHJ1Y3RcbiAgICAgIHZhciBpbmZvXG5cbiAgICAgIHJldHVybiBjb25zdHJ1Y3RzLnRva2VuaXplIHx8ICdsZW5ndGgnIGluIGNvbnN0cnVjdHNcbiAgICAgICAgPyBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKG1pbmlmbGF0KGNvbnN0cnVjdHMpKVxuICAgICAgICA6IGhhbmRsZU1hcE9mQ29uc3RydWN0c1xuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVNYXBPZkNvbnN0cnVjdHMoY29kZSkge1xuICAgICAgICBpZiAoY29kZSBpbiBjb25zdHJ1Y3RzIHx8IG51bGwgaW4gY29uc3RydWN0cykge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKFxuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBgbnVsbGAgaXMgdXNlZCBieSBzb21lIGV4dGVuc2lvbnMgKi9cbiAgICAgICAgICAgIGNvbnN0cnVjdHMubnVsbFxuICAgICAgICAgICAgICA/IG1pbmlmbGF0KGNvbnN0cnVjdHNbY29kZV0pLmNvbmNhdChtaW5pZmxhdChjb25zdHJ1Y3RzLm51bGwpKVxuICAgICAgICAgICAgICA6IGNvbnN0cnVjdHNbY29kZV1cbiAgICAgICAgICApKGNvZGUpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9ndXNTdGF0ZShjb2RlKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoYW5kbGVMaXN0T2ZDb25zdHJ1Y3RzKGxpc3QpIHtcbiAgICAgICAgbGlzdE9mQ29uc3RydWN0cyA9IGxpc3RcbiAgICAgICAgY29uc3RydWN0SW5kZXggPSAwXG4gICAgICAgIHJldHVybiBoYW5kbGVDb25zdHJ1Y3QobGlzdFtjb25zdHJ1Y3RJbmRleF0pXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNvbnN0cnVjdChjb25zdHJ1Y3QpIHtcbiAgICAgICAgcmV0dXJuIHN0YXJ0XG5cbiAgICAgICAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgICAgICAgIC8vIFRvIGRvOiBub3QgbmVkZSB0byBzdG9yZSBpZiB0aGVyZSBpcyBubyBib2d1cyBzdGF0ZSwgcHJvYmFibHk/XG4gICAgICAgICAgLy8gQ3VycmVudGx5IGRvZXNu4oCZdCB3b3JrIGJlY2F1c2UgYGluc3BlY3RgIGluIGRvY3VtZW50IGRvZXMgYSBjaGVja1xuICAgICAgICAgIC8vIHcvbyBhIGJvZ3VzLCB3aGljaCBkb2VzbuKAmXQgbWFrZSBzZW5zZS4gQnV0IGl0IGRvZXMgc2VlbSB0byBoZWxwIHBlcmZcbiAgICAgICAgICAvLyBieSBub3Qgc3RvcmluZy5cbiAgICAgICAgICBpbmZvID0gc3RvcmUoKVxuICAgICAgICAgIGN1cnJlbnRDb25zdHJ1Y3QgPSBjb25zdHJ1Y3RcblxuICAgICAgICAgIGlmICghY29uc3RydWN0LnBhcnRpYWwpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY3VycmVudENvbnN0cnVjdCA9IGNvbnN0cnVjdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3QudG9rZW5pemUuY2FsbChcbiAgICAgICAgICAgIGZpZWxkcyA/IGFzc2lnbih7fSwgY29udGV4dCwgZmllbGRzKSA6IGNvbnRleHQsXG4gICAgICAgICAgICBlZmZlY3RzLFxuICAgICAgICAgICAgb2ssXG4gICAgICAgICAgICBub2tcbiAgICAgICAgICApKGNvZGUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb2soY29kZSkge1xuICAgICAgICBjb25zdW1lZCA9IHRydWVcbiAgICAgICAgb25yZXR1cm4oY3VycmVudENvbnN0cnVjdCwgaW5mbylcbiAgICAgICAgcmV0dXJuIHJldHVyblN0YXRlXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG5vayhjb2RlKSB7XG4gICAgICAgIGNvbnN1bWVkID0gdHJ1ZVxuICAgICAgICBpbmZvLnJlc3RvcmUoKVxuXG4gICAgICAgIGlmICgrK2NvbnN0cnVjdEluZGV4IDwgbGlzdE9mQ29uc3RydWN0cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlQ29uc3RydWN0KGxpc3RPZkNvbnN0cnVjdHNbY29uc3RydWN0SW5kZXhdKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZ3VzU3RhdGVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRSZXN1bHQoY29uc3RydWN0LCBmcm9tKSB7XG4gICAgaWYgKGNvbnN0cnVjdC5yZXNvbHZlQWxsICYmIHJlc29sdmVBbGxDb25zdHJ1Y3RzLmluZGV4T2YoY29uc3RydWN0KSA8IDApIHtcbiAgICAgIHJlc29sdmVBbGxDb25zdHJ1Y3RzLnB1c2goY29uc3RydWN0KVxuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3QucmVzb2x2ZSkge1xuICAgICAgY2h1bmtlZFNwbGljZShcbiAgICAgICAgY29udGV4dC5ldmVudHMsXG4gICAgICAgIGZyb20sXG4gICAgICAgIGNvbnRleHQuZXZlbnRzLmxlbmd0aCAtIGZyb20sXG4gICAgICAgIGNvbnN0cnVjdC5yZXNvbHZlKGNvbnRleHQuZXZlbnRzLnNsaWNlKGZyb20pLCBjb250ZXh0KVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3QucmVzb2x2ZVRvKSB7XG4gICAgICBjb250ZXh0LmV2ZW50cyA9IGNvbnN0cnVjdC5yZXNvbHZlVG8oY29udGV4dC5ldmVudHMsIGNvbnRleHQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcmUoKSB7XG4gICAgdmFyIHN0YXJ0UG9pbnQgPSBub3coKVxuICAgIHZhciBzdGFydFByZXZpb3VzID0gY29udGV4dC5wcmV2aW91c1xuICAgIHZhciBzdGFydEN1cnJlbnRDb25zdHJ1Y3QgPSBjb250ZXh0LmN1cnJlbnRDb25zdHJ1Y3RcbiAgICB2YXIgc3RhcnRFdmVudHNJbmRleCA9IGNvbnRleHQuZXZlbnRzLmxlbmd0aFxuICAgIHZhciBzdGFydFN0YWNrID0gQXJyYXkuZnJvbShzdGFjaylcblxuICAgIHJldHVybiB7cmVzdG9yZTogcmVzdG9yZSwgZnJvbTogc3RhcnRFdmVudHNJbmRleH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmUoKSB7XG4gICAgICBwb2ludCA9IHN0YXJ0UG9pbnRcbiAgICAgIGNvbnRleHQucHJldmlvdXMgPSBzdGFydFByZXZpb3VzXG4gICAgICBjb250ZXh0LmN1cnJlbnRDb25zdHJ1Y3QgPSBzdGFydEN1cnJlbnRDb25zdHJ1Y3RcbiAgICAgIGNvbnRleHQuZXZlbnRzLmxlbmd0aCA9IHN0YXJ0RXZlbnRzSW5kZXhcbiAgICAgIHN0YWNrID0gc3RhcnRTdGFja1xuICAgICAgYWNjb3VudEZvclBvdGVudGlhbFNraXAoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFjY291bnRGb3JQb3RlbnRpYWxTa2lwKCkge1xuICAgIGlmIChwb2ludC5saW5lIGluIGNvbHVtblN0YXJ0ICYmIHBvaW50LmNvbHVtbiA8IDIpIHtcbiAgICAgIHBvaW50LmNvbHVtbiA9IGNvbHVtblN0YXJ0W3BvaW50LmxpbmVdXG4gICAgICBwb2ludC5vZmZzZXQgKz0gY29sdW1uU3RhcnRbcG9pbnQubGluZV0gLSAxXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1pbmlmbGF0XG5cbmZ1bmN0aW9uIG1pbmlmbGF0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBbXVxuICAgIDogJ2xlbmd0aCcgaW4gdmFsdWVcbiAgICA/IHZhbHVlXG4gICAgOiBbdmFsdWVdXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IG1vdmVQb2ludFxuXG4vLyBOb3RlISBgbW92ZWAgb25seSB3b3JrcyBpbnNpZGUgbGluZXMhIEl04oCZcyBub3QgcG9zc2libGUgdG8gbW92ZSBwYXN0IG90aGVyXG4vLyBjaHVua3MgKHJlcGxhY2VtZW50IGNoYXJhY3RlcnMsIHRhYnMsIG9yIGxpbmUgZW5kaW5ncykuXG5mdW5jdGlvbiBtb3ZlUG9pbnQocG9pbnQsIG9mZnNldCkge1xuICBwb2ludC5jb2x1bW4gKz0gb2Zmc2V0XG4gIHBvaW50Lm9mZnNldCArPSBvZmZzZXRcbiAgcG9pbnQuX2J1ZmZlckluZGV4ICs9IG9mZnNldFxuICByZXR1cm4gcG9pbnRcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplSWRlbnRpZmllclxuXG5mdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdmFsdWVcbiAgICAgIC8vIENvbGxhcHNlIE1hcmtkb3duIHdoaXRlc3BhY2UuXG4gICAgICAucmVwbGFjZSgvW1xcdFxcblxcciBdKy9nLCAnICcpXG4gICAgICAvLyBUcmltLlxuICAgICAgLnJlcGxhY2UoL14gfCAkL2csICcnKVxuICAgICAgLy8gU29tZSBjaGFyYWN0ZXJzIGFyZSBjb25zaWRlcmVkIOKAnHVwcGVyY2FzZeKAnSwgYnV0IGlmIHRoZWlyIGxvd2VyY2FzZVxuICAgICAgLy8gY291bnRlcnBhcnQgaXMgdXBwZXJjYXNlZCB3aWxsIHJlc3VsdCBpbiBhIGRpZmZlcmVudCB1cHBlcmNhc2VcbiAgICAgIC8vIGNoYXJhY3Rlci5cbiAgICAgIC8vIEhlbmNlLCB0byBnZXQgdGhhdCBmb3JtLCB3ZSBwZXJmb3JtIGJvdGggbG93ZXItIGFuZCB1cHBlcmNhc2UuXG4gICAgICAvLyBVcHBlciBjYXNlIG1ha2VzIHN1cmUga2V5cyB3aWxsIG5vdCBpbnRlcmFjdCB3aXRoIGRlZmF1bHQgcHJvdG90eXBhbFxuICAgICAgLy8gbWV0aG9kczogbm8gb2JqZWN0IG1ldGhvZCBpcyB1cHBlcmNhc2UuXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnRvVXBwZXJDYXNlKClcbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBwcmVmaXhTaXplXG5cbnZhciBzaXplQ2h1bmtzID0gcmVxdWlyZSgnLi9zaXplLWNodW5rcycpXG5cbmZ1bmN0aW9uIHByZWZpeFNpemUoZXZlbnRzLCB0eXBlKSB7XG4gIHZhciB0YWlsID0gZXZlbnRzW2V2ZW50cy5sZW5ndGggLSAxXVxuICBpZiAoIXRhaWwgfHwgdGFpbFsxXS50eXBlICE9PSB0eXBlKSByZXR1cm4gMFxuICByZXR1cm4gc2l6ZUNodW5rcyh0YWlsWzJdLnNsaWNlU3RyZWFtKHRhaWxbMV0pKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZWdleENoZWNrXG5cbnZhciBmcm9tQ2hhckNvZGUgPSByZXF1aXJlKCcuLi9jb25zdGFudC9mcm9tLWNoYXItY29kZScpXG5cbmZ1bmN0aW9uIHJlZ2V4Q2hlY2socmVnZXgpIHtcbiAgcmV0dXJuIGNoZWNrXG4gIGZ1bmN0aW9uIGNoZWNrKGNvZGUpIHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChmcm9tQ2hhckNvZGUoY29kZSkpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVzb2x2ZUFsbFxuXG5mdW5jdGlvbiByZXNvbHZlQWxsKGNvbnN0cnVjdHMsIGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgY2FsbGVkID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc29sdmVcblxuICB3aGlsZSAoKytpbmRleCA8IGNvbnN0cnVjdHMubGVuZ3RoKSB7XG4gICAgcmVzb2x2ZSA9IGNvbnN0cnVjdHNbaW5kZXhdLnJlc29sdmVBbGxcblxuICAgIGlmIChyZXNvbHZlICYmIGNhbGxlZC5pbmRleE9mKHJlc29sdmUpIDwgMCkge1xuICAgICAgZXZlbnRzID0gcmVzb2x2ZShldmVudHMsIGNvbnRleHQpXG4gICAgICBjYWxsZWQucHVzaChyZXNvbHZlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2FmZUZyb21JbnRcblxudmFyIGZyb21DaGFyQ29kZSA9IHJlcXVpcmUoJy4uL2NvbnN0YW50L2Zyb20tY2hhci1jb2RlJylcblxuZnVuY3Rpb24gc2FmZUZyb21JbnQodmFsdWUsIGJhc2UpIHtcbiAgdmFyIGNvZGUgPSBwYXJzZUludCh2YWx1ZSwgYmFzZSlcblxuICBpZiAoXG4gICAgLy8gQzAgZXhjZXB0IGZvciBIVCwgTEYsIEZGLCBDUiwgc3BhY2VcbiAgICBjb2RlIDwgOSB8fFxuICAgIGNvZGUgPT09IDExIHx8XG4gICAgKGNvZGUgPiAxMyAmJiBjb2RlIDwgMzIpIHx8XG4gICAgLy8gQ29udHJvbCBjaGFyYWN0ZXIgKERFTCkgb2YgdGhlIGJhc2ljIGJsb2NrIGFuZCBDMSBjb250cm9scy5cbiAgICAoY29kZSA+IDEyNiAmJiBjb2RlIDwgMTYwKSB8fFxuICAgIC8vIExvbmUgaGlnaCBzdXJyb2dhdGVzIGFuZCBsb3cgc3Vycm9nYXRlcy5cbiAgICAoY29kZSA+IDU1Mjk1ICYmIGNvZGUgPCA1NzM0NCkgfHxcbiAgICAvLyBOb25jaGFyYWN0ZXJzLlxuICAgIChjb2RlID4gNjQ5NzUgJiYgY29kZSA8IDY1MDA4KSB8fFxuICAgIChjb2RlICYgNjU1MzUpID09PSA2NTUzNSB8fFxuICAgIChjb2RlICYgNjU1MzUpID09PSA2NTUzNCB8fFxuICAgIC8vIE91dCBvZiByYW5nZVxuICAgIGNvZGUgPiAxMTE0MTExXG4gICkge1xuICAgIHJldHVybiAnXFx1RkZGRCdcbiAgfVxuXG4gIHJldHVybiBmcm9tQ2hhckNvZGUoY29kZSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2VyaWFsaXplQ2h1bmtzXG5cbnZhciBmcm9tQ2hhckNvZGUgPSByZXF1aXJlKCcuLi9jb25zdGFudC9mcm9tLWNoYXItY29kZScpXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUNodW5rcyhjaHVua3MpIHtcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBjaHVua1xuICB2YXIgdmFsdWVcbiAgdmFyIGF0VGFiXG5cbiAgd2hpbGUgKCsraW5kZXggPCBjaHVua3MubGVuZ3RoKSB7XG4gICAgY2h1bmsgPSBjaHVua3NbaW5kZXhdXG5cbiAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBjaHVua1xuICAgIH0gZWxzZSBpZiAoY2h1bmsgPT09IC01KSB7XG4gICAgICB2YWx1ZSA9ICdcXHInXG4gICAgfSBlbHNlIGlmIChjaHVuayA9PT0gLTQpIHtcbiAgICAgIHZhbHVlID0gJ1xcbidcbiAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtMykge1xuICAgICAgdmFsdWUgPSAnXFxyJyArICdcXG4nXG4gICAgfSBlbHNlIGlmIChjaHVuayA9PT0gLTIpIHtcbiAgICAgIHZhbHVlID0gJ1xcdCdcbiAgICB9IGVsc2UgaWYgKGNodW5rID09PSAtMSkge1xuICAgICAgaWYgKGF0VGFiKSBjb250aW51ZVxuICAgICAgdmFsdWUgPSAnICdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3VycmVudGx5IG9ubHkgcmVwbGFjZW1lbnQgY2hhcmFjdGVyLlxuICAgICAgdmFsdWUgPSBmcm9tQ2hhckNvZGUoY2h1bmspXG4gICAgfVxuXG4gICAgYXRUYWIgPSBjaHVuayA9PT0gLTJcbiAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2hhbGxvd1xuXG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vY29uc3RhbnQvYXNzaWduJylcblxuZnVuY3Rpb24gc2hhbGxvdyhvYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgb2JqZWN0KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzaXplQ2h1bmtzXG5cbi8vIE1lYXN1cmUgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXIgY29kZXMgaW4gY2h1bmtzLlxuLy8gQ291bnRzIHRhYnMgYmFzZWQgb24gdGhlaXIgZXhwYW5kZWQgc2l6ZSwgYW5kIENSK0xGIGFzIG9uZSBjaGFyYWN0ZXIuXG5mdW5jdGlvbiBzaXplQ2h1bmtzKGNodW5rcykge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgc2l6ZSA9IDBcblxuICB3aGlsZSAoKytpbmRleCA8IGNodW5rcy5sZW5ndGgpIHtcbiAgICBzaXplICs9IHR5cGVvZiBjaHVua3NbaW5kZXhdID09PSAnc3RyaW5nJyA/IGNodW5rc1tpbmRleF0ubGVuZ3RoIDogMVxuICB9XG5cbiAgcmV0dXJuIHNpemVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2xpY2VDaHVua3NcblxuZnVuY3Rpb24gc2xpY2VDaHVua3MoY2h1bmtzLCB0b2tlbikge1xuICB2YXIgc3RhcnRJbmRleCA9IHRva2VuLnN0YXJ0Ll9pbmRleFxuICB2YXIgc3RhcnRCdWZmZXJJbmRleCA9IHRva2VuLnN0YXJ0Ll9idWZmZXJJbmRleFxuICB2YXIgZW5kSW5kZXggPSB0b2tlbi5lbmQuX2luZGV4XG4gIHZhciBlbmRCdWZmZXJJbmRleCA9IHRva2VuLmVuZC5fYnVmZmVySW5kZXhcbiAgdmFyIHZpZXdcblxuICBpZiAoc3RhcnRJbmRleCA9PT0gZW5kSW5kZXgpIHtcbiAgICB2aWV3ID0gW2NodW5rc1tzdGFydEluZGV4XS5zbGljZShzdGFydEJ1ZmZlckluZGV4LCBlbmRCdWZmZXJJbmRleCldXG4gIH0gZWxzZSB7XG4gICAgdmlldyA9IGNodW5rcy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleClcblxuICAgIGlmIChzdGFydEJ1ZmZlckluZGV4ID4gLTEpIHtcbiAgICAgIHZpZXdbMF0gPSB2aWV3WzBdLnNsaWNlKHN0YXJ0QnVmZmVySW5kZXgpXG4gICAgfVxuXG4gICAgaWYgKGVuZEJ1ZmZlckluZGV4ID4gMCkge1xuICAgICAgdmlldy5wdXNoKGNodW5rc1tlbmRJbmRleF0uc2xpY2UoMCwgZW5kQnVmZmVySW5kZXgpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2aWV3XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHN1YnRva2VuaXplXG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9jb25zdGFudC9hc3NpZ24nKVxuXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJy4vY2h1bmtlZC1zcGxpY2UnKVxudmFyIHNoYWxsb3cgPSByZXF1aXJlKCcuL3NoYWxsb3cnKVxuXG5mdW5jdGlvbiBzdWJ0b2tlbml6ZShldmVudHMpIHtcbiAgdmFyIGp1bXBzID0ge31cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGV2ZW50XG4gIHZhciBsaW5lSW5kZXhcbiAgdmFyIG90aGVySW5kZXhcbiAgdmFyIG90aGVyRXZlbnRcbiAgdmFyIHBhcmFtZXRlcnNcbiAgdmFyIHN1YmV2ZW50c1xuICB2YXIgbW9yZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgZXZlbnRzLmxlbmd0aCkge1xuICAgIHdoaWxlIChpbmRleCBpbiBqdW1wcykge1xuICAgICAgaW5kZXggPSBqdW1wc1tpbmRleF1cbiAgICB9XG5cbiAgICBldmVudCA9IGV2ZW50c1tpbmRleF1cblxuICAgIC8vIEFkZCBhIGhvb2sgZm9yIHRoZSBHRk0gdGFza2xpc3QgZXh0ZW5zaW9uLCB3aGljaCBuZWVkcyB0byBrbm93IGlmIHRleHRcbiAgICAvLyBpcyBpbiB0aGUgZmlyc3QgY29udGVudCBvZiBhIGxpc3QgaXRlbS5cbiAgICBpZiAoXG4gICAgICBpbmRleCAmJlxuICAgICAgZXZlbnRbMV0udHlwZSA9PT0gJ2NodW5rRmxvdycgJiZcbiAgICAgIGV2ZW50c1tpbmRleCAtIDFdWzFdLnR5cGUgPT09ICdsaXN0SXRlbVByZWZpeCdcbiAgICApIHtcbiAgICAgIHN1YmV2ZW50cyA9IGV2ZW50WzFdLl90b2tlbml6ZXIuZXZlbnRzXG4gICAgICBvdGhlckluZGV4ID0gMFxuXG4gICAgICBpZiAoXG4gICAgICAgIG90aGVySW5kZXggPCBzdWJldmVudHMubGVuZ3RoICYmXG4gICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSAnbGluZUVuZGluZ0JsYW5rJ1xuICAgICAgKSB7XG4gICAgICAgIG90aGVySW5kZXggKz0gMlxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG90aGVySW5kZXggPCBzdWJldmVudHMubGVuZ3RoICYmXG4gICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS50eXBlID09PSAnY29udGVudCdcbiAgICAgICkge1xuICAgICAgICB3aGlsZSAoKytvdGhlckluZGV4IDwgc3ViZXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdWJldmVudHNbb3RoZXJJbmRleF1bMV0udHlwZSA9PT0gJ2NodW5rVGV4dCcpIHtcbiAgICAgICAgICAgIHN1YmV2ZW50c1tvdGhlckluZGV4XVsxXS5pc0luRmlyc3RDb250ZW50T2ZMaXN0SXRlbSA9IHRydWVcbiAgICAgICAgICAgIG90aGVySW5kZXgrK1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEVudGVyLlxuICAgIGlmIChldmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgaWYgKGV2ZW50WzFdLmNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGFzc2lnbihqdW1wcywgc3ViY29udGVudChldmVudHMsIGluZGV4KSlcbiAgICAgICAgaW5kZXggPSBqdW1wc1tpbmRleF1cbiAgICAgICAgbW9yZSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRXhpdC5cbiAgICBlbHNlIGlmIChldmVudFsxXS5fY29udGFpbmVyIHx8IGV2ZW50WzFdLl9tb3ZlUHJldmlvdXNMaW5lRW5kaW5ncykge1xuICAgICAgb3RoZXJJbmRleCA9IGluZGV4XG4gICAgICBsaW5lSW5kZXggPSB1bmRlZmluZWRcblxuICAgICAgd2hpbGUgKG90aGVySW5kZXgtLSkge1xuICAgICAgICBvdGhlckV2ZW50ID0gZXZlbnRzW290aGVySW5kZXhdXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIG90aGVyRXZlbnRbMV0udHlwZSA9PT0gJ2xpbmVFbmRpbmcnIHx8XG4gICAgICAgICAgb3RoZXJFdmVudFsxXS50eXBlID09PSAnbGluZUVuZGluZ0JsYW5rJ1xuICAgICAgICApIHtcbiAgICAgICAgICBpZiAob3RoZXJFdmVudFswXSA9PT0gJ2VudGVyJykge1xuICAgICAgICAgICAgaWYgKGxpbmVJbmRleCkge1xuICAgICAgICAgICAgICBldmVudHNbbGluZUluZGV4XVsxXS50eXBlID0gJ2xpbmVFbmRpbmdCbGFuaydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3RoZXJFdmVudFsxXS50eXBlID0gJ2xpbmVFbmRpbmcnXG4gICAgICAgICAgICBsaW5lSW5kZXggPSBvdGhlckluZGV4XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxpbmVJbmRleCkge1xuICAgICAgICAvLyBGaXggcG9zaXRpb24uXG4gICAgICAgIGV2ZW50WzFdLmVuZCA9IHNoYWxsb3coZXZlbnRzW2xpbmVJbmRleF1bMV0uc3RhcnQpXG5cbiAgICAgICAgLy8gU3dpdGNoIGNvbnRhaW5lciBleGl0IHcvIGxpbmUgZW5kaW5ncy5cbiAgICAgICAgcGFyYW1ldGVycyA9IGV2ZW50cy5zbGljZShsaW5lSW5kZXgsIGluZGV4KVxuICAgICAgICBwYXJhbWV0ZXJzLnVuc2hpZnQoZXZlbnQpXG4gICAgICAgIGNodW5rZWRTcGxpY2UoZXZlbnRzLCBsaW5lSW5kZXgsIGluZGV4IC0gbGluZUluZGV4ICsgMSwgcGFyYW1ldGVycylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gIW1vcmVcbn1cblxuZnVuY3Rpb24gc3ViY29udGVudChldmVudHMsIGV2ZW50SW5kZXgpIHtcbiAgdmFyIHRva2VuID0gZXZlbnRzW2V2ZW50SW5kZXhdWzFdXG4gIHZhciBjb250ZXh0ID0gZXZlbnRzW2V2ZW50SW5kZXhdWzJdXG4gIHZhciBzdGFydFBvc2l0aW9uID0gZXZlbnRJbmRleCAtIDFcbiAgdmFyIHN0YXJ0UG9zaXRpb25zID0gW11cbiAgdmFyIHRva2VuaXplciA9XG4gICAgdG9rZW4uX3Rva2VuaXplciB8fCBjb250ZXh0LnBhcnNlclt0b2tlbi5jb250ZW50VHlwZV0odG9rZW4uc3RhcnQpXG4gIHZhciBjaGlsZEV2ZW50cyA9IHRva2VuaXplci5ldmVudHNcbiAgdmFyIGp1bXBzID0gW11cbiAgdmFyIGdhcHMgPSB7fVxuICB2YXIgc3RyZWFtXG4gIHZhciBwcmV2aW91c1xuICB2YXIgaW5kZXhcbiAgdmFyIGVudGVyZWRcbiAgdmFyIGVuZFxuICB2YXIgYWRqdXN0XG5cbiAgLy8gTG9vcCBmb3J3YXJkIHRocm91Z2ggdGhlIGxpbmtlZCB0b2tlbnMgdG8gcGFzcyB0aGVtIGluIG9yZGVyIHRvIHRoZVxuICAvLyBzdWJ0b2tlbml6ZXIuXG4gIHdoaWxlICh0b2tlbikge1xuICAgIC8vIEZpbmQgdGhlIHBvc2l0aW9uIG9mIHRoZSBldmVudCBmb3IgdGhpcyB0b2tlbi5cbiAgICB3aGlsZSAoZXZlbnRzWysrc3RhcnRQb3NpdGlvbl1bMV0gIT09IHRva2VuKSB7XG4gICAgICAvLyBFbXB0eS5cbiAgICB9XG5cbiAgICBzdGFydFBvc2l0aW9ucy5wdXNoKHN0YXJ0UG9zaXRpb24pXG5cbiAgICBpZiAoIXRva2VuLl90b2tlbml6ZXIpIHtcbiAgICAgIHN0cmVhbSA9IGNvbnRleHQuc2xpY2VTdHJlYW0odG9rZW4pXG5cbiAgICAgIGlmICghdG9rZW4ubmV4dCkge1xuICAgICAgICBzdHJlYW0ucHVzaChudWxsKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJldmlvdXMpIHtcbiAgICAgICAgdG9rZW5pemVyLmRlZmluZVNraXAodG9rZW4uc3RhcnQpXG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5pc0luRmlyc3RDb250ZW50T2ZMaXN0SXRlbSkge1xuICAgICAgICB0b2tlbml6ZXIuX2dmbVRhc2tsaXN0Rmlyc3RDb250ZW50T2ZMaXN0SXRlbSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgdG9rZW5pemVyLndyaXRlKHN0cmVhbSlcblxuICAgICAgaWYgKHRva2VuLmlzSW5GaXJzdENvbnRlbnRPZkxpc3RJdGVtKSB7XG4gICAgICAgIHRva2VuaXplci5fZ2ZtVGFza2xpc3RGaXJzdENvbnRlbnRPZkxpc3RJdGVtID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVW5yYXZlbCB0aGUgbmV4dCB0b2tlbi5cbiAgICBwcmV2aW91cyA9IHRva2VuXG4gICAgdG9rZW4gPSB0b2tlbi5uZXh0XG4gIH1cblxuICAvLyBOb3csIGxvb3AgYmFjayB0aHJvdWdoIGFsbCBldmVudHMgKGFuZCBsaW5rZWQgdG9rZW5zKSwgdG8gZmlndXJlIG91dCB3aGljaFxuICAvLyBwYXJ0cyBiZWxvbmcgd2hlcmUuXG4gIHRva2VuID0gcHJldmlvdXNcbiAgaW5kZXggPSBjaGlsZEV2ZW50cy5sZW5ndGhcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZeKAmXZlIGF0IGxlYXN0IHNlZW4gc29tZXRoaW5nIChmaW5hbCBlb2wgaXMgcGFydCBvZiB0aGUgbGFzdFxuICAgIC8vIHRva2VuKS5cbiAgICBpZiAoY2hpbGRFdmVudHNbaW5kZXhdWzBdID09PSAnZW50ZXInKSB7XG4gICAgICBlbnRlcmVkID0gdHJ1ZVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAvLyBGaW5kIGEgdm9pZCB0b2tlbiB0aGF0IGluY2x1ZGVzIGEgYnJlYWsuXG4gICAgICBlbnRlcmVkICYmXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gY2hpbGRFdmVudHNbaW5kZXggLSAxXVsxXS50eXBlICYmXG4gICAgICBjaGlsZEV2ZW50c1tpbmRleF1bMV0uc3RhcnQubGluZSAhPT0gY2hpbGRFdmVudHNbaW5kZXhdWzFdLmVuZC5saW5lXG4gICAgKSB7XG4gICAgICBhZGQoY2hpbGRFdmVudHMuc2xpY2UoaW5kZXggKyAxLCBlbmQpKVxuXG4gICAgICAvLyBIZWxwIEdDLlxuICAgICAgdG9rZW4uX3Rva2VuaXplciA9IHRva2VuLm5leHQgPSB1bmRlZmluZWRcbiAgICAgIHRva2VuID0gdG9rZW4ucHJldmlvdXNcbiAgICAgIGVuZCA9IGluZGV4ICsgMVxuICAgIH1cbiAgfVxuXG4gIC8vIEhlbHAgR0MuXG4gIHRva2VuaXplci5ldmVudHMgPSB0b2tlbi5fdG9rZW5pemVyID0gdG9rZW4ubmV4dCA9IHVuZGVmaW5lZFxuXG4gIC8vIERvIGhlYWQ6XG4gIGFkZChjaGlsZEV2ZW50cy5zbGljZSgwLCBlbmQpKVxuXG4gIGluZGV4ID0gLTFcbiAgYWRqdXN0ID0gMFxuXG4gIHdoaWxlICgrK2luZGV4IDwganVtcHMubGVuZ3RoKSB7XG4gICAgZ2Fwc1thZGp1c3QgKyBqdW1wc1tpbmRleF1bMF1dID0gYWRqdXN0ICsganVtcHNbaW5kZXhdWzFdXG4gICAgYWRqdXN0ICs9IGp1bXBzW2luZGV4XVsxXSAtIGp1bXBzW2luZGV4XVswXSAtIDFcbiAgfVxuXG4gIHJldHVybiBnYXBzXG5cbiAgZnVuY3Rpb24gYWRkKHNsaWNlKSB7XG4gICAgdmFyIHN0YXJ0ID0gc3RhcnRQb3NpdGlvbnMucG9wKClcbiAgICBqdW1wcy51bnNoaWZ0KFtzdGFydCwgc3RhcnQgKyBzbGljZS5sZW5ndGggLSAxXSlcbiAgICBjaHVua2VkU3BsaWNlKGV2ZW50cywgc3RhcnQsIDIsIHNsaWNlKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBjbGVhbnVwID0gUmVhY3QudXNlUmVmPCgpID0+IHZvaWQ+KClcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICAvLyBjbGVhbnVwIHByZXZpb3VzIGV2ZW50IGhhbmRsZXJzXG4gICAgICBpZiAoY2xlYW51cC5jdXJyZW50KSB7XG4gICAgICAgIGNsZWFudXAuY3VycmVudCgpXG4gICAgICAgIGNsZWFudXAuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAocCAmJiBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJiBlbCAmJiBlbC50YWdOYW1lICYmIGlzTG9jYWxVUkwoaHJlZikpIHtcbiAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgIGxvY2FsZTpcbiAgICAgICAgICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBsb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtwLCBjaGlsZFJlZiwgaHJlZiwgYXMsIHJvdXRlciwgbG9jYWxlXVxuICApXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCIvLyAuZGlybmFtZSwgLmJhc2VuYW1lLCBhbmQgLmV4dG5hbWUgbWV0aG9kcyBhcmUgZXh0cmFjdGVkIGZyb20gTm9kZS5qcyB2OC4xMS4xLFxuLy8gYmFja3BvcnRlZCBhbmQgdHJhbnNwbGl0ZWQgd2l0aCBCYWJlbCwgd2l0aCBiYWNrd2FyZHMtY29tcGF0IGZpeGVzXG5cbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4vLyByZXNvbHZlcyAuIGFuZCAuLiBlbGVtZW50cyBpbiBhIHBhdGggYXJyYXkgd2l0aCBkaXJlY3RvcnkgbmFtZXMgdGhlcmVcbi8vIG11c3QgYmUgbm8gc2xhc2hlcywgZW1wdHkgZWxlbWVudHMsIG9yIGRldmljZSBuYW1lcyAoYzpcXCkgaW4gdGhlIGFycmF5XG4vLyAoc28gYWxzbyBubyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaGVzIC0gaXQgZG9lcyBub3QgZGlzdGluZ3Vpc2hcbi8vIHJlbGF0aXZlIGFuZCBhYnNvbHV0ZSBwYXRocylcbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycmF5KHBhcnRzLCBhbGxvd0Fib3ZlUm9vdCkge1xuICAvLyBpZiB0aGUgcGF0aCB0cmllcyB0byBnbyBhYm92ZSB0aGUgcm9vdCwgYHVwYCBlbmRzIHVwID4gMFxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gcGFydHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgbGFzdCA9IHBhcnRzW2ldO1xuICAgIGlmIChsYXN0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICAvLyBpZiB0aGUgcGF0aCBpcyBhbGxvd2VkIHRvIGdvIGFib3ZlIHRoZSByb290LCByZXN0b3JlIGxlYWRpbmcgLi5zXG4gIGlmIChhbGxvd0Fib3ZlUm9vdCkge1xuICAgIGZvciAoOyB1cC0tOyB1cCkge1xuICAgICAgcGFydHMudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydHM7XG59XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcuJztcbiAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBoYXNSb290ID0gY29kZSA9PT0gNDcgLyovKi87XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMTsgLS1pKSB7XG4gICAgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBlbmQgPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3JcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gaGFzUm9vdCA/ICcvJyA6ICcuJztcbiAgaWYgKGhhc1Jvb3QgJiYgZW5kID09PSAxKSB7XG4gICAgLy8gcmV0dXJuICcvLyc7XG4gICAgLy8gQmFja3dhcmRzLWNvbXBhdCBmaXg6XG4gICAgcmV0dXJuICcvJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZSgwLCBlbmQpO1xufTtcblxuZnVuY3Rpb24gYmFzZW5hbWUocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuXG4gIHZhciBzdGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICBpZiAocGF0aC5jaGFyQ29kZUF0KGkpID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIHBhdGggY29tcG9uZW50XG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbmQgPT09IC0xKSByZXR1cm4gJyc7XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0LCBlbmQpO1xufVxuXG4vLyBVc2VzIGEgbWl4ZWQgYXBwcm9hY2ggZm9yIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5LCBhcyBleHQgYmVoYXZpb3IgY2hhbmdlZFxuLy8gaW4gbmV3IE5vZGUuanMgdmVyc2lvbnMsIHNvIG9ubHkgYmFzZW5hbWUoKSBhYm92ZSBpcyBiYWNrcG9ydGVkIGhlcmVcbmV4cG9ydHMuYmFzZW5hbWUgPSBmdW5jdGlvbiAocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gYmFzZW5hbWUocGF0aCk7XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICB2YXIgc3RhcnREb3QgPSAtMTtcbiAgdmFyIHN0YXJ0UGFydCA9IDA7XG4gIHZhciBlbmQgPSAtMTtcbiAgdmFyIG1hdGNoZWRTbGFzaCA9IHRydWU7XG4gIC8vIFRyYWNrIHRoZSBzdGF0ZSBvZiBjaGFyYWN0ZXJzIChpZiBhbnkpIHdlIHNlZSBiZWZvcmUgb3VyIGZpcnN0IGRvdCBhbmRcbiAgLy8gYWZ0ZXIgYW55IHBhdGggc2VwYXJhdG9yIHdlIGZpbmRcbiAgdmFyIHByZURvdFN0YXRlID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY29kZSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnRQYXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgaWYgKGVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yLCBtYXJrIHRoaXMgYXMgdGhlIGVuZCBvZiBvdXJcbiAgICAgIC8vIGV4dGVuc2lvblxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gICAgaWYgKGNvZGUgPT09IDQ2IC8qLiovKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgb3VyIGZpcnN0IGRvdCwgbWFyayBpdCBhcyB0aGUgc3RhcnQgb2Ygb3VyIGV4dGVuc2lvblxuICAgICAgICBpZiAoc3RhcnREb3QgPT09IC0xKVxuICAgICAgICAgIHN0YXJ0RG90ID0gaTtcbiAgICAgICAgZWxzZSBpZiAocHJlRG90U3RhdGUgIT09IDEpXG4gICAgICAgICAgcHJlRG90U3RhdGUgPSAxO1xuICAgIH0gZWxzZSBpZiAoc3RhcnREb3QgIT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGFuZCBub24tcGF0aCBzZXBhcmF0b3IgYmVmb3JlIG91ciBkb3QsIHNvIHdlIHNob3VsZFxuICAgICAgLy8gaGF2ZSBhIGdvb2QgY2hhbmNlIGF0IGhhdmluZyBhIG5vbi1lbXB0eSBleHRlbnNpb25cbiAgICAgIHByZURvdFN0YXRlID0gLTE7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXJ0RG90ID09PSAtMSB8fCBlbmQgPT09IC0xIHx8XG4gICAgICAvLyBXZSBzYXcgYSBub24tZG90IGNoYXJhY3RlciBpbW1lZGlhdGVseSBiZWZvcmUgdGhlIGRvdFxuICAgICAgcHJlRG90U3RhdGUgPT09IDAgfHxcbiAgICAgIC8vIFRoZSAocmlnaHQtbW9zdCkgdHJpbW1lZCBwYXRoIGNvbXBvbmVudCBpcyBleGFjdGx5ICcuLidcbiAgICAgIHByZURvdFN0YXRlID09PSAxICYmIHN0YXJ0RG90ID09PSBlbmQgLSAxICYmIHN0YXJ0RG90ID09PSBzdGFydFBhcnQgKyAxKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKHN0YXJ0RG90LCBlbmQpO1xufTtcblxuZnVuY3Rpb24gZmlsdGVyICh4cywgZikge1xuICAgIGlmICh4cy5maWx0ZXIpIHJldHVybiB4cy5maWx0ZXIoZik7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGYoeHNbaV0sIGksIHhzKSkgcmVzLnB1c2goeHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBTdHJpbmcucHJvdG90eXBlLnN1YnN0ciAtIG5lZ2F0aXZlIGluZGV4IGRvbid0IHdvcmsgaW4gSUU4XG52YXIgc3Vic3RyID0gJ2FiJy5zdWJzdHIoLTEpID09PSAnYidcbiAgICA/IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHsgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbikgfVxuICAgIDogZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikge1xuICAgICAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IHN0ci5sZW5ndGggKyBzdGFydDtcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHIoc3RhcnQsIGxlbik7XG4gICAgfVxuO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG52YXIgZWxcblxudmFyIHNlbWljb2xvbiA9IDU5IC8vICAnOydcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVFbnRpdHlcblxuZnVuY3Rpb24gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIHtcbiAgdmFyIGVudGl0eSA9ICcmJyArIGNoYXJhY3RlcnMgKyAnOydcbiAgdmFyIGNoYXJcblxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBlbC5pbm5lckhUTUwgPSBlbnRpdHlcbiAgY2hhciA9IGVsLnRleHRDb250ZW50XG5cbiAgLy8gU29tZSBlbnRpdGllcyBkbyBub3QgcmVxdWlyZSB0aGUgY2xvc2luZyBzZW1pY29sb24gKGAmbm90YCAtIGZvciBpbnN0YW5jZSksXG4gIC8vIHdoaWNoIGxlYWRzIHRvIHNpdHVhdGlvbnMgd2hlcmUgcGFyc2luZyB0aGUgYXNzdW1lZCBlbnRpdHkgb2YgJm5vdGl0OyB3aWxsXG4gIC8vIHJlc3VsdCBpbiB0aGUgc3RyaW5nIGDCrGl0O2AuICBXaGVuIHdlIGVuY291bnRlciBhIHRyYWlsaW5nIHNlbWljb2xvbiBhZnRlclxuICAvLyBwYXJzaW5nIGFuZCB0aGUgZW50aXR5IHRvIGRlY29kZSB3YXMgbm90IGEgc2VtaWNvbG9uIChgJnNlbWk7YCksIHdlIGNhblxuICAvLyBhc3N1bWUgdGhhdCB0aGUgbWF0Y2hpbmcgd2FzIGluY29tcGxldGVcbiAgaWYgKGNoYXIuY2hhckNvZGVBdChjaGFyLmxlbmd0aCAtIDEpID09PSBzZW1pY29sb24gJiYgY2hhcmFjdGVycyAhPT0gJ3NlbWknKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBJZiB0aGUgZGVjb2RlZCBzdHJpbmcgaXMgZXF1YWwgdG8gdGhlIGlucHV0LCB0aGUgZW50aXR5IHdhcyBub3QgdmFsaWRcbiAgcmV0dXJuIGNoYXIgPT09IGVudGl0eSA/IGZhbHNlIDogY2hhclxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG5mdW5jdGlvbiBhc3RUb1JlYWN0KG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgdmFyIHJlbmRlcmVyID0gb3B0aW9ucy5yZW5kZXJlcnNbbm9kZS50eXBlXTsgLy8gTm9kZXMgY3JlYXRlZCBieSBwbHVnaW5zIGRvIG5vdCBoYXZlIHBvc2l0aW9uYWwgaW5mbywgaW4gd2hpY2ggY2FzZSB3ZSBzZXRcbiAgLy8gYW4gb2JqZWN0IHRoYXQgbWF0Y2hlcyB0aGUgcG9zaXRvbiBpbnRlcmZhY2UuXG5cbiAgaWYgKCFub2RlLnBvc2l0aW9uKSB7XG4gICAgbm9kZS5wb3NpdGlvbiA9IHtcbiAgICAgIHN0YXJ0OiB7XG4gICAgICAgIGxpbmU6IG51bGwsXG4gICAgICAgIGNvbHVtbjogbnVsbCxcbiAgICAgICAgb2Zmc2V0OiBudWxsXG4gICAgICB9LFxuICAgICAgZW5kOiB7XG4gICAgICAgIGxpbmU6IG51bGwsXG4gICAgICAgIGNvbHVtbjogbnVsbCxcbiAgICAgICAgb2Zmc2V0OiBudWxsXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBwb3MgPSBub2RlLnBvc2l0aW9uLnN0YXJ0O1xuICB2YXIga2V5ID0gW25vZGUudHlwZSwgcG9zLmxpbmUsIHBvcy5jb2x1bW4sIGluZGV4XS5qb2luKCctJyk7XG5cbiAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShyZW5kZXJlcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZW5kZXJlciBmb3IgdHlwZSBgXCIuY29uY2F0KG5vZGUudHlwZSwgXCJgIG5vdCBkZWZpbmVkIG9yIGlzIG5vdCByZW5kZXJhYmxlXCIpKTtcbiAgfVxuXG4gIHZhciBub2RlUHJvcHMgPSBnZXROb2RlUHJvcHMobm9kZSwga2V5LCBvcHRpb25zLCByZW5kZXJlciwgcGFyZW50LCBpbmRleCk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHJlbmRlcmVyLCBub2RlUHJvcHMsIG5vZGVQcm9wcy5jaGlsZHJlbiB8fCByZXNvbHZlQ2hpbGRyZW4oKSB8fCB1bmRlZmluZWQpO1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGROb2RlLCBpKSB7XG4gICAgICByZXR1cm4gYXN0VG9SZWFjdChjaGlsZE5vZGUsIG9wdGlvbnMsIHtcbiAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgcHJvcHM6IG5vZGVQcm9wc1xuICAgICAgfSwgaSk7XG4gICAgfSk7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1wYXJhbXMsIGNvbXBsZXhpdHlcblxuXG5mdW5jdGlvbiBnZXROb2RlUHJvcHMobm9kZSwga2V5LCBvcHRzLCByZW5kZXJlciwgcGFyZW50LCBpbmRleCkge1xuICB2YXIgcHJvcHMgPSB7XG4gICAga2V5OiBrZXlcbiAgfTtcbiAgdmFyIGlzU2ltcGxlUmVuZGVyZXIgPSB0eXBlb2YgcmVuZGVyZXIgPT09ICdzdHJpbmcnIHx8IHJlbmRlcmVyID09PSBSZWFjdC5GcmFnbWVudDsgLy8gYHNvdXJjZVBvc2AgaXMgdHJ1ZSBpZiB0aGUgdXNlciB3YW50cyBzb3VyY2UgaW5mb3JtYXRpb24gKGxpbmUvY29sdW1uIGluZm8gZnJvbSBtYXJrZG93biBzb3VyY2UpXG5cbiAgaWYgKG9wdHMuc291cmNlUG9zICYmIG5vZGUucG9zaXRpb24pIHtcbiAgICBwcm9wc1snZGF0YS1zb3VyY2Vwb3MnXSA9IGZsYXR0ZW5Qb3NpdGlvbihub2RlLnBvc2l0aW9uKTtcbiAgfVxuXG4gIGlmIChvcHRzLnJhd1NvdXJjZVBvcyAmJiAhaXNTaW1wbGVSZW5kZXJlcikge1xuICAgIHByb3BzLnNvdXJjZVBvc2l0aW9uID0gbm9kZS5wb3NpdGlvbjtcbiAgfSAvLyBJZiBgaW5jbHVkZU5vZGVJbmRleGAgaXMgdHJ1ZSwgcGFzcyBub2RlIGluZGV4IGluZm8gdG8gYWxsIG5vbi10YWcgcmVuZGVyZXJzXG5cblxuICBpZiAob3B0cy5pbmNsdWRlTm9kZUluZGV4ICYmIHBhcmVudC5ub2RlICYmIHBhcmVudC5ub2RlLmNoaWxkcmVuICYmICFpc1NpbXBsZVJlbmRlcmVyKSB7XG4gICAgcHJvcHMuaW5kZXggPSBwYXJlbnQubm9kZS5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xuICAgIHByb3BzLnBhcmVudENoaWxkQ291bnQgPSBwYXJlbnQubm9kZS5jaGlsZHJlbi5sZW5ndGg7XG4gIH1cblxuICB2YXIgcmVmID0gbm9kZS5pZGVudGlmaWVyICE9PSBudWxsICYmIG5vZGUuaWRlbnRpZmllciAhPT0gdW5kZWZpbmVkID9cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBwbHVnaW5zIGNvdWxkIGluamVjdCBhbiB1bmRlZmluZWQgcmVmZXJlbmNlLiAqL1xuICBvcHRzLmRlZmluaXRpb25zW25vZGUuaWRlbnRpZmllci50b1VwcGVyQ2FzZSgpXSB8fCB7fSA6IG51bGw7XG5cbiAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICBjYXNlICdyb290JzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBvcHRzLmNsYXNzTmFtZVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RleHQnOlxuICAgICAgcHJvcHMubm9kZUtleSA9IGtleTtcbiAgICAgIHByb3BzLmNoaWxkcmVuID0gbm9kZS52YWx1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaGVhZGluZyc6XG4gICAgICBwcm9wcy5sZXZlbCA9IG5vZGUuZGVwdGg7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgcHJvcHMuc3RhcnQgPSBub2RlLnN0YXJ0O1xuICAgICAgcHJvcHMub3JkZXJlZCA9IG5vZGUub3JkZXJlZDtcbiAgICAgIHByb3BzLnNwcmVhZCA9IG5vZGUuc3ByZWFkO1xuICAgICAgcHJvcHMuZGVwdGggPSBub2RlLmRlcHRoO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaXN0SXRlbSc6XG4gICAgICBwcm9wcy5jaGVja2VkID0gbm9kZS5jaGVja2VkO1xuICAgICAgcHJvcHMuc3ByZWFkID0gbm9kZS5zcHJlYWQ7XG4gICAgICBwcm9wcy5vcmRlcmVkID0gbm9kZS5vcmRlcmVkO1xuICAgICAgcHJvcHMuaW5kZXggPSBub2RlLmluZGV4O1xuICAgICAgcHJvcHMuY2hpbGRyZW4gPSBnZXRMaXN0SXRlbUNoaWxkcmVuKG5vZGUsIHBhcmVudCkubWFwKGZ1bmN0aW9uIChjaGlsZE5vZGUsIGkpIHtcbiAgICAgICAgcmV0dXJuIGFzdFRvUmVhY3QoY2hpbGROb2RlLCBvcHRzLCB7XG4gICAgICAgICAgbm9kZTogbm9kZSxcbiAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgfSwgaSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZGVmaW5pdGlvbic6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IG5vZGUuaWRlbnRpZmllcixcbiAgICAgICAgdGl0bGU6IG5vZGUudGl0bGUsXG4gICAgICAgIHVybDogbm9kZS51cmxcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdjb2RlJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgbGFuZ3VhZ2U6IG5vZGUubGFuZyAmJiBub2RlLmxhbmcuc3BsaXQoL1xccy8sIDEpWzBdXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaW5saW5lQ29kZSc6XG4gICAgICBwcm9wcy5jaGlsZHJlbiA9IG5vZGUudmFsdWU7XG4gICAgICBwcm9wcy5pbmxpbmUgPSB0cnVlO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaW5rJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgdGl0bGU6IG5vZGUudGl0bGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICB0YXJnZXQ6IHR5cGVvZiBvcHRzLmxpbmtUYXJnZXQgPT09ICdmdW5jdGlvbicgPyBvcHRzLmxpbmtUYXJnZXQobm9kZS51cmwsIG5vZGUuY2hpbGRyZW4sIG5vZGUudGl0bGUpIDogb3B0cy5saW5rVGFyZ2V0LFxuICAgICAgICBocmVmOiBvcHRzLnRyYW5zZm9ybUxpbmtVcmkgPyBvcHRzLnRyYW5zZm9ybUxpbmtVcmkobm9kZS51cmwsIG5vZGUuY2hpbGRyZW4sIG5vZGUudGl0bGUpIDogbm9kZS51cmxcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdpbWFnZSc6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB7XG4gICAgICAgIHNyYzogb3B0cy50cmFuc2Zvcm1JbWFnZVVyaSA/IG9wdHMudHJhbnNmb3JtSW1hZ2VVcmkobm9kZS51cmwsIG5vZGUuY2hpbGRyZW4sIG5vZGUudGl0bGUsIG5vZGUuYWx0KSA6IG5vZGUudXJsLFxuICAgICAgICBhbHQ6IG5vZGUuYWx0IHx8ICcnLFxuICAgICAgICB0aXRsZTogbm9kZS50aXRsZSB8fCB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaW5rUmVmZXJlbmNlJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHh0ZW5kKHJlZiwge1xuICAgICAgICBocmVmOiBvcHRzLnRyYW5zZm9ybUxpbmtVcmkgPyBvcHRzLnRyYW5zZm9ybUxpbmtVcmkocmVmLmhyZWYpIDogcmVmLmhyZWZcbiAgICAgIH0pKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaW1hZ2VSZWZlcmVuY2UnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICBzcmM6IG9wdHMudHJhbnNmb3JtSW1hZ2VVcmkgJiYgcmVmLmhyZWYgPyBvcHRzLnRyYW5zZm9ybUltYWdlVXJpKHJlZi5ocmVmLCBub2RlLmNoaWxkcmVuLCByZWYudGl0bGUsIG5vZGUuYWx0KSA6IHJlZi5ocmVmLFxuICAgICAgICBhbHQ6IG5vZGUuYWx0IHx8ICcnLFxuICAgICAgICB0aXRsZTogcmVmLnRpdGxlIHx8IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RhYmxlJzpcbiAgICBjYXNlICd0YWJsZUhlYWQnOlxuICAgIGNhc2UgJ3RhYmxlQm9keSc6XG4gICAgICBwcm9wcy5jb2x1bW5BbGlnbm1lbnQgPSBub2RlLmFsaWduO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0YWJsZVJvdyc6XG4gICAgICBwcm9wcy5pc0hlYWRlciA9IHBhcmVudC5ub2RlLnR5cGUgPT09ICd0YWJsZUhlYWQnO1xuICAgICAgcHJvcHMuY29sdW1uQWxpZ25tZW50ID0gcGFyZW50LnByb3BzLmNvbHVtbkFsaWdubWVudDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndGFibGVDZWxsJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgaXNIZWFkZXI6IHBhcmVudC5wcm9wcy5pc0hlYWRlcixcbiAgICAgICAgYWxpZ246IHBhcmVudC5wcm9wcy5jb2x1bW5BbGlnbm1lbnRbaW5kZXhdXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndmlydHVhbEh0bWwnOlxuICAgICAgcHJvcHMudGFnID0gbm9kZS50YWc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgLy8gQHRvZG8gZmluZCBhIGJldHRlciB3YXkgdGhhbiB0aGlzXG4gICAgICBwcm9wcy5pc0Jsb2NrID0gbm9kZS5wb3NpdGlvbi5zdGFydC5saW5lICE9PSBub2RlLnBvc2l0aW9uLmVuZC5saW5lO1xuICAgICAgcHJvcHMuYWxsb3dEYW5nZXJvdXNIdG1sID0gb3B0cy5hbGxvd0Rhbmdlcm91c0h0bWw7XG4gICAgICBwcm9wcy5lc2NhcGVIdG1sID0gb3B0cy5lc2NhcGVIdG1sO1xuICAgICAgcHJvcHMuc2tpcEh0bWwgPSBvcHRzLnNraXBIdG1sO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXJzZWRIdG1sJzpcbiAgICAgIHtcbiAgICAgICAgdmFyIHBhcnNlZENoaWxkcmVuO1xuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgcGFyc2VkQ2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBhc3RUb1JlYWN0KGNoaWxkLCBvcHRzLCB7XG4gICAgICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgICAgIHByb3BzOiBwcm9wc1xuICAgICAgICAgICAgfSwgaSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcy5hbGxvd0Rhbmdlcm91c0h0bWwgPSBvcHRzLmFsbG93RGFuZ2Vyb3VzSHRtbDtcbiAgICAgICAgcHJvcHMuZXNjYXBlSHRtbCA9IG9wdHMuZXNjYXBlSHRtbDtcbiAgICAgICAgcHJvcHMuc2tpcEh0bWwgPSBvcHRzLnNraXBIdG1sO1xuICAgICAgICBwcm9wcy5lbGVtZW50ID0gbm9kZS5lbGVtZW50ID8gbWVyZ2VOb2RlQ2hpbGRyZW4obm9kZSwgcGFyc2VkQ2hpbGRyZW4pIDogbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywgeHRlbmQobm9kZSwge1xuICAgICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAgIHBvc2l0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWRcbiAgICAgIH0pKTtcbiAgfVxuXG4gIGlmICghaXNTaW1wbGVSZW5kZXJlciAmJiBub2RlLnZhbHVlKSB7XG4gICAgcHJvcHMudmFsdWUgPSBub2RlLnZhbHVlO1xuICB9XG5cbiAgaWYgKCFpc1NpbXBsZVJlbmRlcmVyKSB7XG4gICAgcHJvcHMubm9kZSA9IG5vZGU7XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkRlZmluZWQodGFyZ2V0LCBhdHRycykge1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAodHlwZW9mIGF0dHJzW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IGF0dHJzW2tleV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlTm9kZUNoaWxkcmVuKG5vZGUsIHBhcnNlZENoaWxkcmVuKSB7XG4gIHZhciBlbCA9IG5vZGUuZWxlbWVudDtcblxuICBpZiAoQXJyYXkuaXNBcnJheShlbCkpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGBkaXZgIGZhbGxiYWNrIGZvciBvbGQgUmVhY3QuICovXG4gICAgdmFyIEZyYWdtZW50ID0gUmVhY3QuRnJhZ21lbnQgfHwgJ2Rpdic7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsIGVsKTtcbiAgfVxuXG4gIGlmIChlbC5wcm9wcy5jaGlsZHJlbiB8fCBwYXJzZWRDaGlsZHJlbikge1xuICAgIHZhciBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoZWwucHJvcHMuY2hpbGRyZW4pLmNvbmNhdChwYXJzZWRDaGlsZHJlbik7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbCwgbnVsbCwgY2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChlbCwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Qb3NpdGlvbihwb3MpIHtcbiAgcmV0dXJuIFtwb3Muc3RhcnQubGluZSwgJzonLCBwb3Muc3RhcnQuY29sdW1uLCAnLScsIHBvcy5lbmQubGluZSwgJzonLCBwb3MuZW5kLmNvbHVtbl0ubWFwKFN0cmluZykuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGdldExpc3RJdGVtQ2hpbGRyZW4obm9kZSwgcGFyZW50KSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gbGlzdCBpdGVtcyBhcmUgYWx3YXlzIGluIGEgbGlzdCwgYnV0IGJlc3QgdG8gYmUgc3VyZS4gKi9cbiAgdmFyIGxvb3NlID0gcGFyZW50ICYmIHBhcmVudC5ub2RlID8gbGlzdExvb3NlKHBhcmVudC5ub2RlKSA6IGxpc3RJdGVtTG9vc2Uobm9kZSk7XG4gIHJldHVybiBsb29zZSA/IG5vZGUuY2hpbGRyZW4gOiB1bndyYXBQYXJhZ3JhcGhzKG5vZGUpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBQYXJhZ3JhcGhzKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uIChhcnJheSwgY2hpbGQpIHtcbiAgICByZXR1cm4gYXJyYXkuY29uY2F0KGNoaWxkLnR5cGUgPT09ICdwYXJhZ3JhcGgnID8gY2hpbGQuY2hpbGRyZW4gOiBbY2hpbGRdKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBsaXN0TG9vc2Uobm9kZSkge1xuICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICB2YXIgbG9vc2UgPSBub2RlLnNwcmVhZDtcbiAgdmFyIGluZGV4ID0gLTE7XG5cbiAgd2hpbGUgKCFsb29zZSAmJiArK2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgbG9vc2UgPSBsaXN0SXRlbUxvb3NlKGNoaWxkcmVuW2luZGV4XSk7XG4gIH1cblxuICByZXR1cm4gbG9vc2U7XG59XG5cbmZ1bmN0aW9uIGxpc3RJdGVtTG9vc2Uobm9kZSkge1xuICB2YXIgc3ByZWFkID0gbm9kZS5zcHJlYWQ7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gc3ByZWFkIGlzIHByZXNlbnQgZnJvbSByZW1hcmstcGFyc2UsIGJ1dCBtYXliZSBwbHVnaW5zIGRvbuKAmXQgc2V0IGl0LiAqL1xuXG4gIHJldHVybiBzcHJlYWQgPT09IHVuZGVmaW5lZCB8fCBzcHJlYWQgPT09IG51bGwgPyBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDEgOiBzcHJlYWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXN0VG9SZWFjdDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXREZWZpbml0aW9ucyh0cmVlKSB7XG4gIHZhciBkZWZpbml0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZpc2l0KHRyZWUsICdkZWZpbml0aW9uJywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgaWRlbnRpZmllciA9IG5vZGUuaWRlbnRpZmllci50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChpZGVudGlmaWVyIGluIGRlZmluaXRpb25zKSByZXR1cm47XG4gICAgZGVmaW5pdGlvbnNbaWRlbnRpZmllcl0gPSB7XG4gICAgICBocmVmOiBub2RlLnVybCxcbiAgICAgIHRpdGxlOiBub2RlLnRpdGxlXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBkZWZpbml0aW9ucztcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKTtcblxudmFyIHNwbGljZSA9IFtdLnNwbGljZTtcblxuZXhwb3J0cy5vZlR5cGUgPSBmdW5jdGlvbiAodHlwZXMsIG1vZGUpIHtcbiAgcmV0dXJuIGlmTm90TWF0Y2goYWxsb3csIG1vZGUpO1xuXG4gIGZ1bmN0aW9uIGFsbG93KG5vZGUsIGluZGV4LCBwYXJlbnQpIHtcbiAgICByZXR1cm4gIXR5cGVzLmluY2x1ZGVzKG5vZGUudHlwZSk7XG4gIH1cbn07XG5cbmV4cG9ydHMuaWZOb3RNYXRjaCA9IGlmTm90TWF0Y2g7XG5cbmZ1bmN0aW9uIGlmTm90TWF0Y2goYWxsb3csIG1vZGUpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybTtcblxuICBmdW5jdGlvbiB0cmFuc2Zvcm0odHJlZSkge1xuICAgIHZpc2l0KHRyZWUsIGZpbHRlcik7XG4gICAgcmV0dXJuIHRyZWU7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG5cblxuICBmdW5jdGlvbiBmaWx0ZXIobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQgJiYgIWFsbG93KG5vZGUsIGluZGV4LCBwYXJlbnQpKSB7XG4gICAgICB2YXIgcGFyYW1ldGVycyA9IFtpbmRleCwgMV07XG5cbiAgICAgIGlmIChtb2RlID09PSAndW53cmFwJyAmJiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmNvbmNhdChub2RlLmNoaWxkcmVuKTtcbiAgICAgIH1cblxuICAgICAgc3BsaWNlLmFwcGx5KHBhcmVudC5jaGlsZHJlbiwgcGFyYW1ldGVycyk7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogTmFpdmUsIHNpbXBsZSBwbHVnaW4gdG8gbWF0Y2ggaW5saW5lIG5vZGVzIHdpdGhvdXQgYXR0cmlidXRlc1xuICogVGhpcyBhbGxvd3Mgc2F5IDxzdHJvbmc+Zm9vPC9zdHJvbmc+LCBidXQgbm90IDxzdHJvbmcgY2xhc3M9XCJ2ZXJ5XCI+Zm9vPC9zdHJvbmc+XG4gKiBGb3IgcHJvcGVyIEhUTUwgc3VwcG9ydCwgeW91J2xsIHdhbnQgYSBkaWZmZXJlbnQgcGx1Z2luXG4gKiovXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0Jyk7XG5cbnZhciB0eXBlID0gJ3ZpcnR1YWxIdG1sJztcbnZhciBzZWxmQ2xvc2luZ1JlID0gL148KGFyZWF8YmFzZXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGtleWdlbnxsaW5rfG1ldGF8cGFyYW18c291cmNlfHRyYWNrfHdicilcXHMqXFwvPz4kL2k7XG52YXIgc2ltcGxlVGFnUmUgPSAvXjwoXFwvPykoW2Etel0rKVxccyo+JC87XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRyZWUpIHtcbiAgdmFyIG9wZW47XG4gIHZhciBjdXJyZW50UGFyZW50O1xuICB2aXNpdCh0cmVlLCAnaHRtbCcsIGZ1bmN0aW9uIChub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgaWYgKGN1cnJlbnRQYXJlbnQgIT09IHBhcmVudCkge1xuICAgICAgb3BlbiA9IFtdO1xuICAgICAgY3VycmVudFBhcmVudCA9IHBhcmVudDtcbiAgICB9XG5cbiAgICB2YXIgc2VsZkNsb3NpbmcgPSBnZXRTZWxmQ2xvc2luZyhub2RlKTtcblxuICAgIGlmIChzZWxmQ2xvc2luZykge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSwge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICB0YWc6IHNlbGZDbG9zaW5nLFxuICAgICAgICBwb3NpdGlvbjogbm9kZS5wb3NpdGlvblxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudCA9IGdldFNpbXBsZVRhZyhub2RlLCBwYXJlbnQpO1xuXG4gICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hpbmcgPSBmaW5kQW5kUHVsbChvcGVuLCBjdXJyZW50LnRhZyk7XG5cbiAgICBpZiAobWF0Y2hpbmcpIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIHZpcnR1YWwoY3VycmVudCwgbWF0Y2hpbmcsIHBhcmVudCkpO1xuICAgIH0gZWxzZSBpZiAoIWN1cnJlbnQub3BlbmluZykge1xuICAgICAgb3Blbi5wdXNoKGN1cnJlbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LCB0cnVlIC8vIEl0ZXJhdGUgaW4gcmV2ZXJzZVxuICApO1xuICByZXR1cm4gdHJlZTtcbn07XG5cbmZ1bmN0aW9uIGZpbmRBbmRQdWxsKG9wZW4sIG1hdGNoaW5nVGFnKSB7XG4gIHZhciBpID0gb3Blbi5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChvcGVuW2ldLnRhZyA9PT0gbWF0Y2hpbmdUYWcpIHtcbiAgICAgIHJldHVybiBvcGVuLnNwbGljZShpLCAxKVswXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFNpbXBsZVRhZyhub2RlLCBwYXJlbnQpIHtcbiAgdmFyIG1hdGNoID0gbm9kZS52YWx1ZS5tYXRjaChzaW1wbGVUYWdSZSk7XG4gIHJldHVybiBtYXRjaCA/IHtcbiAgICB0YWc6IG1hdGNoWzJdLFxuICAgIG9wZW5pbmc6ICFtYXRjaFsxXSxcbiAgICBub2RlOiBub2RlXG4gIH0gOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VsZkNsb3Npbmcobm9kZSkge1xuICB2YXIgbWF0Y2ggPSBub2RlLnZhbHVlLm1hdGNoKHNlbGZDbG9zaW5nUmUpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2aXJ0dWFsKGZyb21Ob2RlLCB0b05vZGUsIHBhcmVudCkge1xuICB2YXIgZnJvbUluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoZnJvbU5vZGUubm9kZSk7XG4gIHZhciB0b0luZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YodG9Ob2RlLm5vZGUpO1xuICB2YXIgZXh0cmFjdGVkID0gcGFyZW50LmNoaWxkcmVuLnNwbGljZShmcm9tSW5kZXgsIHRvSW5kZXggLSBmcm9tSW5kZXggKyAxKTtcbiAgdmFyIGNoaWxkcmVuID0gZXh0cmFjdGVkLnNsaWNlKDEsIC0xKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICB0YWc6IGZyb21Ob2RlLnRhZyxcbiAgICBwb3NpdGlvbjoge1xuICAgICAgc3RhcnQ6IGZyb21Ob2RlLm5vZGUucG9zaXRpb24uc3RhcnQsXG4gICAgICBlbmQ6IHRvTm9kZS5ub2RlLnBvc2l0aW9uLmVuZCxcbiAgICAgIGluZGVudDogW11cbiAgICB9XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xuXG52YXIgdW5pZmllZCA9IHJlcXVpcmUoJ3VuaWZpZWQnKTtcblxudmFyIHBhcnNlID0gcmVxdWlyZSgncmVtYXJrLXBhcnNlJyk7XG5cbnZhciBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBhZGRMaXN0TWV0YWRhdGEgPSByZXF1aXJlKCdtZGFzdC1hZGQtbGlzdC1tZXRhZGF0YScpO1xuXG52YXIgbmFpdmVIdG1sID0gcmVxdWlyZSgnLi9wbHVnaW5zL25haXZlLWh0bWwnKTtcblxudmFyIGRpc2FsbG93Tm9kZSA9IHJlcXVpcmUoJy4vcGx1Z2lucy9kaXNhbGxvdy1ub2RlJyk7XG5cbnZhciBhc3RUb1JlYWN0ID0gcmVxdWlyZSgnLi9hc3QtdG8tcmVhY3QnKTtcblxudmFyIHdyYXBUYWJsZVJvd3MgPSByZXF1aXJlKCcuL3dyYXAtdGFibGUtcm93cycpO1xuXG52YXIgZ2V0RGVmaW5pdGlvbnMgPSByZXF1aXJlKCcuL2dldC1kZWZpbml0aW9ucycpO1xuXG52YXIgdXJpVHJhbnNmb3JtZXIgPSByZXF1aXJlKCcuL3VyaS10cmFuc2Zvcm1lcicpO1xuXG52YXIgZGVmYXVsdFJlbmRlcmVycyA9IHJlcXVpcmUoJy4vcmVuZGVyZXJzJyk7XG5cbnZhciBzeW1ib2xzID0gcmVxdWlyZSgnLi9zeW1ib2xzJyk7XG5cbnZhciBhbGxUeXBlcyA9IE9iamVjdC5rZXlzKGRlZmF1bHRSZW5kZXJlcnMpO1xuXG52YXIgUmVhY3RNYXJrZG93biA9IGZ1bmN0aW9uIFJlYWN0TWFya2Rvd24ocHJvcHMpIHtcbiAgLy8gVG8gZG8gaW4gbmV4dCBtYWpvcjogcmVtb3ZlIGBzb3VyY2VgLlxuICB2YXIgc3JjID0gcHJvcHMuc291cmNlIHx8IHByb3BzLmNoaWxkcmVuIHx8ICcnO1xuXG4gIGlmIChwcm9wcy5hbGxvd2VkVHlwZXMgJiYgcHJvcHMuZGlzYWxsb3dlZFR5cGVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IG9uZSBvZiBgYWxsb3dlZFR5cGVzYCBhbmQgYGRpc2FsbG93ZWRUeXBlc2Agc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgfVxuXG4gIHZhciByZW5kZXJlcnMgPSB4dGVuZChkZWZhdWx0UmVuZGVyZXJzLCBwcm9wcy5yZW5kZXJlcnMpO1xuICB2YXIgcHJvY2Vzc29yID0gdW5pZmllZCgpLnVzZShwYXJzZSkudXNlKHByb3BzLnBsdWdpbnMgfHwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc3luY1xuXG4gIHZhciB0cmVlID0gcHJvY2Vzc29yLnJ1blN5bmMocHJvY2Vzc29yLnBhcnNlKHNyYykpO1xuICB2YXIgcmVuZGVyUHJvcHMgPSB4dGVuZChwcm9wcywge1xuICAgIHJlbmRlcmVyczogcmVuZGVyZXJzLFxuICAgIGRlZmluaXRpb25zOiBnZXREZWZpbml0aW9ucyh0cmVlKVxuICB9KTtcbiAgZGV0ZXJtaW5lQXN0VG9SZWFjdFRyYW5zZm9ybXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuICAgIHRyZWUgPSB0cmFuc2Zvcm0odHJlZSwgcmVuZGVyUHJvcHMpO1xuICB9KTtcbiAgcmV0dXJuIHRyZWU7XG59O1xuXG5mdW5jdGlvbiBkZXRlcm1pbmVBc3RUb1JlYWN0VHJhbnNmb3Jtcyhwcm9wcykge1xuICB2YXIgdHJhbnNmb3JtcyA9IFt3cmFwVGFibGVSb3dzLCBhZGRMaXN0TWV0YWRhdGEoKV07XG4gIHZhciBkaXNhbGxvd2VkVHlwZXMgPSBwcm9wcy5kaXNhbGxvd2VkVHlwZXM7XG5cbiAgaWYgKHByb3BzLmFsbG93ZWRUeXBlcykge1xuICAgIGRpc2FsbG93ZWRUeXBlcyA9IGFsbFR5cGVzLmZpbHRlcihmdW5jdGlvbiAodHlwZSkge1xuICAgICAgcmV0dXJuIHR5cGUgIT09ICdyb290JyAmJiBwcm9wcy5hbGxvd2VkVHlwZXMuaW5kZXhPZih0eXBlKSA9PT0gLTE7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcmVtb3ZhbE1ldGhvZCA9IHByb3BzLnVud3JhcERpc2FsbG93ZWQgPyAndW53cmFwJyA6ICdyZW1vdmUnO1xuXG4gIGlmIChkaXNhbGxvd2VkVHlwZXMgJiYgZGlzYWxsb3dlZFR5cGVzLmxlbmd0aCA+IDApIHtcbiAgICB0cmFuc2Zvcm1zLnB1c2goZGlzYWxsb3dOb2RlLm9mVHlwZShkaXNhbGxvd2VkVHlwZXMsIHJlbW92YWxNZXRob2QpKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5hbGxvd05vZGUpIHtcbiAgICB0cmFuc2Zvcm1zLnB1c2goZGlzYWxsb3dOb2RlLmlmTm90TWF0Y2gocHJvcHMuYWxsb3dOb2RlLCByZW1vdmFsTWV0aG9kKSk7XG4gIH0gLy8gVG8gZG8gaW4gbmV4dCBtYWpvcjogcmVtb3ZlIGBlc2NhcGVIdG1sYC5cblxuXG4gIHZhciByZW5kZXJIdG1sID0gKHByb3BzLmFsbG93RGFuZ2Vyb3VzSHRtbCB8fCBwcm9wcy5lc2NhcGVIdG1sID09PSBmYWxzZSkgJiYgIXByb3BzLnNraXBIdG1sO1xuICB2YXIgaGFzSHRtbFBhcnNlciA9IChwcm9wcy5hc3RQbHVnaW5zIHx8IFtdKS5zb21lKGZ1bmN0aW9uICh0cmFuc2Zvcm0pIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtLmlkZW50aXR5ID09PSBzeW1ib2xzLkh0bWxQYXJzZXI7XG4gIH0pO1xuXG4gIGlmIChyZW5kZXJIdG1sICYmICFoYXNIdG1sUGFyc2VyKSB7XG4gICAgdHJhbnNmb3Jtcy5wdXNoKG5haXZlSHRtbCk7XG4gIH1cblxuICBpZiAocHJvcHMuYXN0UGx1Z2lucykge1xuICAgIHRyYW5zZm9ybXMgPSB0cmFuc2Zvcm1zLmNvbmNhdChwcm9wcy5hc3RQbHVnaW5zKTtcbiAgfSAvLyBBZGQgdGhlIGZpbmFsIHRyYW5zZm9ybSB0byB0dXJuIGV2ZXJ5dGhpbmcgaW50byBSZWFjdC5cblxuXG4gIHRyYW5zZm9ybXMucHVzaChhc3RUb1JlYWN0KTtcbiAgcmV0dXJuIHRyYW5zZm9ybXM7XG59XG5cblJlYWN0TWFya2Rvd24uZGVmYXVsdFByb3BzID0ge1xuICB0cmFuc2Zvcm1MaW5rVXJpOiB1cmlUcmFuc2Zvcm1lclxufTtcblJlYWN0TWFya2Rvd24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNvdXJjZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNvdXJjZVBvczogUHJvcFR5cGVzLmJvb2wsXG4gIHJhd1NvdXJjZVBvczogUHJvcFR5cGVzLmJvb2wsXG4gIGVzY2FwZUh0bWw6IFByb3BUeXBlcy5ib29sLFxuICBhbGxvd0Rhbmdlcm91c0h0bWw6IFByb3BUeXBlcy5ib29sLFxuICBza2lwSHRtbDogUHJvcFR5cGVzLmJvb2wsXG4gIGFsbG93Tm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFsbG93ZWRUeXBlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKGFsbFR5cGVzKSksXG4gIGRpc2FsbG93ZWRUeXBlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKGFsbFR5cGVzKSksXG4gIHRyYW5zZm9ybUxpbmtVcmk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBsaW5rVGFyZ2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0cmFuc2Zvcm1JbWFnZVVyaTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFzdFBsdWdpbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5mdW5jKSxcbiAgdW53cmFwRGlzYWxsb3dlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHJlbmRlcmVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGx1Z2luczogUHJvcFR5cGVzLmFycmF5XG59O1xuUmVhY3RNYXJrZG93bi50eXBlcyA9IGFsbFR5cGVzO1xuUmVhY3RNYXJrZG93bi5yZW5kZXJlcnMgPSBkZWZhdWx0UmVuZGVyZXJzO1xuUmVhY3RNYXJrZG93bi51cmlUcmFuc2Zvcm1lciA9IHVyaVRyYW5zZm9ybWVyO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdE1hcmtkb3duOyIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMsIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gRG9u4oCZdCBjcmFzaCBvbiBvbGQgUmVhY3QuICovXG5cblxudmFyIHN1cHBvcnRzU3RyaW5nUmVuZGVyID0gcGFyc2VJbnQoKFJlYWN0LnZlcnNpb24gfHwgJzE2Jykuc2xpY2UoMCwgMiksIDEwKSA+PSAxNjtcbnZhciBjcmVhdGVFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBicmVhazogJ2JyJyxcbiAgcGFyYWdyYXBoOiAncCcsXG4gIGVtcGhhc2lzOiAnZW0nLFxuICBzdHJvbmc6ICdzdHJvbmcnLFxuICB0aGVtYXRpY0JyZWFrOiAnaHInLFxuICBibG9ja3F1b3RlOiAnYmxvY2txdW90ZScsXG4gIGRlbGV0ZTogJ2RlbCcsXG4gIGxpbms6ICdhJyxcbiAgaW1hZ2U6ICdpbWcnLFxuICBsaW5rUmVmZXJlbmNlOiAnYScsXG4gIGltYWdlUmVmZXJlbmNlOiAnaW1nJyxcbiAgdGFibGU6IFNpbXBsZVJlbmRlcmVyLmJpbmQobnVsbCwgJ3RhYmxlJyksXG4gIHRhYmxlSGVhZDogU2ltcGxlUmVuZGVyZXIuYmluZChudWxsLCAndGhlYWQnKSxcbiAgdGFibGVCb2R5OiBTaW1wbGVSZW5kZXJlci5iaW5kKG51bGwsICd0Ym9keScpLFxuICB0YWJsZVJvdzogU2ltcGxlUmVuZGVyZXIuYmluZChudWxsLCAndHInKSxcbiAgdGFibGVDZWxsOiBUYWJsZUNlbGwsXG4gIHJvb3Q6IFJvb3QsXG4gIHRleHQ6IFRleHRSZW5kZXJlcixcbiAgbGlzdDogTGlzdCxcbiAgbGlzdEl0ZW06IExpc3RJdGVtLFxuICBkZWZpbml0aW9uOiBOdWxsUmVuZGVyZXIsXG4gIGhlYWRpbmc6IEhlYWRpbmcsXG4gIGlubGluZUNvZGU6IElubGluZUNvZGUsXG4gIGNvZGU6IENvZGVCbG9jayxcbiAgaHRtbDogSHRtbCxcbiAgdmlydHVhbEh0bWw6IFZpcnR1YWxIdG1sLFxuICBwYXJzZWRIdG1sOiBQYXJzZWRIdG1sXG59O1xuXG5mdW5jdGlvbiBUZXh0UmVuZGVyZXIocHJvcHMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBhIHRleHQgbm9kZSB3L28gYSB2YWx1ZSBjb3VsZCBiZSBpbmplY3RlZCBieSBwbHVnaW5zICovXG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuIHx8ICcnO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGBzcGFuYCBpcyBhIGZhbGxiYWNrIGZvciBvbGQgUmVhY3QuICovXG5cbiAgcmV0dXJuIHN1cHBvcnRzU3RyaW5nUmVuZGVyID8gY2hpbGRyZW4gOiBjcmVhdGVFbGVtZW50KCdzcGFuJywgbnVsbCwgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBSb290KHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG4gIHZhciByb290ID0gIWNsYXNzTmFtZSAmJiBSZWFjdC5GcmFnbWVudCB8fCAnZGl2JztcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQocm9vdCwgY2xhc3NOYW1lID8ge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0gOiBudWxsLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIFNpbXBsZVJlbmRlcmVyKHRhZywgcHJvcHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQodGFnLCBnZXRDb3JlUHJvcHMocHJvcHMpLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIFRhYmxlQ2VsbChwcm9wcykge1xuICB2YXIgc3R5bGUgPSBwcm9wcy5hbGlnbiA/IHtcbiAgICB0ZXh0QWxpZ246IHByb3BzLmFsaWduXG4gIH0gOiB1bmRlZmluZWQ7XG4gIHZhciBjb3JlUHJvcHMgPSBnZXRDb3JlUHJvcHMocHJvcHMpO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChwcm9wcy5pc0hlYWRlciA/ICd0aCcgOiAndGQnLCBzdHlsZSA/IHh0ZW5kKHtcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY29yZVByb3BzKSA6IGNvcmVQcm9wcywgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBIZWFkaW5nKHByb3BzKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiaFwiLmNvbmNhdChwcm9wcy5sZXZlbCksIGdldENvcmVQcm9wcyhwcm9wcyksIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gTGlzdChwcm9wcykge1xuICB2YXIgYXR0cnMgPSBnZXRDb3JlUHJvcHMocHJvcHMpO1xuXG4gIGlmIChwcm9wcy5zdGFydCAhPT0gbnVsbCAmJiBwcm9wcy5zdGFydCAhPT0gMSAmJiBwcm9wcy5zdGFydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYXR0cnMuc3RhcnQgPSBwcm9wcy5zdGFydC50b1N0cmluZygpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQocHJvcHMub3JkZXJlZCA/ICdvbCcgOiAndWwnLCBhdHRycywgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBMaXN0SXRlbShwcm9wcykge1xuICB2YXIgY2hlY2tib3ggPSBudWxsO1xuXG4gIGlmIChwcm9wcy5jaGVja2VkICE9PSBudWxsICYmIHByb3BzLmNoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjaGVja2VkID0gcHJvcHMuY2hlY2tlZDtcbiAgICBjaGVja2JveCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICByZWFkT25seTogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2xpJywgZ2V0Q29yZVByb3BzKHByb3BzKSwgY2hlY2tib3gsIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gQ29kZUJsb2NrKHByb3BzKSB7XG4gIHZhciBjbGFzc05hbWUgPSBwcm9wcy5sYW5ndWFnZSAmJiBcImxhbmd1YWdlLVwiLmNvbmNhdChwcm9wcy5sYW5ndWFnZSk7XG4gIHZhciBjb2RlID0gY3JlYXRlRWxlbWVudCgnY29kZScsIGNsYXNzTmFtZSA/IHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICB9IDogbnVsbCwgcHJvcHMudmFsdWUpO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCgncHJlJywgZ2V0Q29yZVByb3BzKHByb3BzKSwgY29kZSk7XG59XG5cbmZ1bmN0aW9uIElubGluZUNvZGUocHJvcHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2NvZGUnLCBnZXRDb3JlUHJvcHMocHJvcHMpLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIEh0bWwocHJvcHMpIHtcbiAgaWYgKHByb3BzLnNraXBIdG1sKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgZGFuZ2Vyb3VzID0gcHJvcHMuYWxsb3dEYW5nZXJvdXNIdG1sIHx8IHByb3BzLmVzY2FwZUh0bWwgPT09IGZhbHNlO1xuICB2YXIgdGFnID0gcHJvcHMuaXNCbG9jayA/ICdkaXYnIDogJ3NwYW4nO1xuXG4gIGlmICghZGFuZ2Vyb3VzKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBgdGFnYCBpcyBhIGZhbGxiYWNrIGZvciBvbGQgUmVhY3QuICovXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQgfHwgdGFnLCBudWxsLCBwcm9wcy52YWx1ZSk7XG4gIH1cblxuICB2YXIgbm9kZVByb3BzID0ge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICBfX2h0bWw6IHByb3BzLnZhbHVlXG4gICAgfVxuICB9O1xuICByZXR1cm4gY3JlYXRlRWxlbWVudCh0YWcsIG5vZGVQcm9wcyk7XG59XG5cbmZ1bmN0aW9uIFBhcnNlZEh0bWwocHJvcHMpIHtcbiAgLyogVG8gZG86IGBSZWFjdC5jbG9uZUVsZW1lbnRgIGlzIHNsb3csIGlzIGl0IHJlYWxseSBuZWVkZWQ/ICovXG4gIHJldHVybiBwcm9wc1snZGF0YS1zb3VyY2Vwb3MnXSA/IFJlYWN0LmNsb25lRWxlbWVudChwcm9wcy5lbGVtZW50LCB7XG4gICAgJ2RhdGEtc291cmNlcG9zJzogcHJvcHNbJ2RhdGEtc291cmNlcG9zJ11cbiAgfSkgOiBwcm9wcy5lbGVtZW50O1xufVxuXG5mdW5jdGlvbiBWaXJ0dWFsSHRtbChwcm9wcykge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChwcm9wcy50YWcsIGdldENvcmVQcm9wcyhwcm9wcyksIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gTnVsbFJlbmRlcmVyKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0Q29yZVByb3BzKHByb3BzKSB7XG4gIHZhciBzb3VyY2UgPSBwcm9wc1snZGF0YS1zb3VyY2Vwb3MnXTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBub2RlcyBmcm9tIHBsdWdpbnMgdy9vIHBvc2l0aW9uICovXG5cbiAgcmV0dXJuIHNvdXJjZSA/IHtcbiAgICAnZGF0YS1zb3VyY2Vwb3MnOiBzb3VyY2VcbiAgfSA6IHt9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgSHRtbFBhcnNlciA9ICdfX1JNRF9IVE1MX1BBUlNFUl9fJztcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gRmFsbGJhY2sgZm9yIGBTeW1ib2xgLiAqL1xuXG5leHBvcnRzLkh0bWxQYXJzZXIgPSB0eXBlb2YgU3ltYm9sID09PSAndW5kZWZpbmVkJyA/IEh0bWxQYXJzZXIgOiBTeW1ib2woSHRtbFBhcnNlcik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwcm90b2NvbHMgPSBbJ2h0dHAnLCAnaHR0cHMnLCAnbWFpbHRvJywgJ3RlbCddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHVyaVRyYW5zZm9ybWVyKHVyaSkge1xuICB2YXIgdXJsID0gKHVyaSB8fCAnJykudHJpbSgpO1xuICB2YXIgZmlyc3QgPSB1cmwuY2hhckF0KDApO1xuXG4gIGlmIChmaXJzdCA9PT0gJyMnIHx8IGZpcnN0ID09PSAnLycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIGNvbG9uID0gdXJsLmluZGV4T2YoJzonKTtcblxuICBpZiAoY29sb24gPT09IC0xKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBwcm90b2NvbHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAtMTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBwcm90b2NvbCA9IHByb3RvY29sc1tpbmRleF07XG5cbiAgICBpZiAoY29sb24gPT09IHByb3RvY29sLmxlbmd0aCAmJiB1cmwuc2xpY2UoMCwgcHJvdG9jb2wubGVuZ3RoKS50b0xvd2VyQ2FzZSgpID09PSBwcm90b2NvbCkge1xuICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG4gIH1cblxuICBpbmRleCA9IHVybC5pbmRleE9mKCc/Jyk7XG5cbiAgaWYgKGluZGV4ICE9PSAtMSAmJiBjb2xvbiA+IGluZGV4KSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGluZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcblxuICBpZiAoaW5kZXggIT09IC0xICYmIGNvbG9uID4gaW5kZXgpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zY3JpcHQtdXJsXG5cblxuICByZXR1cm4gJ2phdmFzY3JpcHQ6dm9pZCgwKSc7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZpc2l0KG5vZGUsICd0YWJsZScsIHdyYXApO1xuICByZXR1cm4gbm9kZTtcbn07XG5cbmZ1bmN0aW9uIHdyYXAodGFibGUpIHtcbiAgdmFyIGNoaWxkcmVuID0gdGFibGUuY2hpbGRyZW47XG4gIHRhYmxlLmNoaWxkcmVuID0gW3tcbiAgICB0eXBlOiAndGFibGVIZWFkJyxcbiAgICBhbGlnbjogdGFibGUuYWxpZ24sXG4gICAgY2hpbGRyZW46IFtjaGlsZHJlblswXV0sXG4gICAgcG9zaXRpb246IGNoaWxkcmVuWzBdLnBvc2l0aW9uXG4gIH1dO1xuXG4gIGlmIChjaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgdGFibGUuY2hpbGRyZW4ucHVzaCh7XG4gICAgICB0eXBlOiAndGFibGVCb2R5JyxcbiAgICAgIGFsaWduOiB0YWJsZS5hbGlnbixcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbi5zbGljZSgxKSxcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHN0YXJ0OiBjaGlsZHJlblsxXS5wb3NpdGlvbi5zdGFydCxcbiAgICAgICAgZW5kOiBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAxXS5wb3NpdGlvbi5lbmRcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5cbnZhciBmcm9tTWFya2Rvd24gPSByZXF1aXJlKCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKVxuXG5mdW5jdGlvbiBwYXJzZShvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHRoaXMuUGFyc2VyID0gcGFyc2VcblxuICBmdW5jdGlvbiBwYXJzZShkb2MpIHtcbiAgICByZXR1cm4gZnJvbU1hcmtkb3duKFxuICAgICAgZG9jLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgc2VsZi5kYXRhKCdzZXR0aW5ncycpLCBvcHRpb25zLCB7XG4gICAgICAgIC8vIE5vdGU6IHRoZXNlIG9wdGlvbnMgYXJlIG5vdCBpbiB0aGUgcmVhZG1lLlxuICAgICAgICAvLyBUaGUgZ29hbCBpcyBmb3IgdGhlbSB0byBiZSBzZXQgYnkgcGx1Z2lucyBvbiBgZGF0YWAgaW5zdGVhZCBvZiBiZWluZ1xuICAgICAgICAvLyBwYXNzZWQgYnkgdXNlcnMuXG4gICAgICAgIGV4dGVuc2lvbnM6IHNlbGYuZGF0YSgnbWljcm9tYXJrRXh0ZW5zaW9ucycpIHx8IFtdLFxuICAgICAgICBtZGFzdEV4dGVuc2lvbnM6IHNlbGYuZGF0YSgnZnJvbU1hcmtkb3duRXh0ZW5zaW9ucycpIHx8IFtdXG4gICAgICB9KVxuICAgIClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuZnVuY3Rpb24gcmVwbGFjZUV4dChucGF0aCwgZXh0KSB7XG4gIGlmICh0eXBlb2YgbnBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5wYXRoO1xuICB9XG5cbiAgaWYgKG5wYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBucGF0aDtcbiAgfVxuXG4gIHZhciBuRmlsZU5hbWUgPSBwYXRoLmJhc2VuYW1lKG5wYXRoLCBwYXRoLmV4dG5hbWUobnBhdGgpKSArIGV4dDtcbiAgcmV0dXJuIHBhdGguam9pbihwYXRoLmRpcm5hbWUobnBhdGgpLCBuRmlsZU5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcGxhY2VFeHQ7XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuL3dyYXAuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyb3VnaFxuXG50cm91Z2gud3JhcCA9IHdyYXBcblxudmFyIHNsaWNlID0gW10uc2xpY2VcblxuLy8gQ3JlYXRlIG5ldyBtaWRkbGV3YXJlLlxuZnVuY3Rpb24gdHJvdWdoKCkge1xuICB2YXIgZm5zID0gW11cbiAgdmFyIG1pZGRsZXdhcmUgPSB7fVxuXG4gIG1pZGRsZXdhcmUucnVuID0gcnVuXG4gIG1pZGRsZXdhcmUudXNlID0gdXNlXG5cbiAgcmV0dXJuIG1pZGRsZXdhcmVcblxuICAvLyBSdW4gYGZuc2AuICBMYXN0IGFyZ3VtZW50IG11c3QgYmUgYSBjb21wbGV0aW9uIGhhbmRsZXIuXG4gIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBpbnB1dCA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCAtMSlcbiAgICB2YXIgZG9uZSA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV1cblxuICAgIGlmICh0eXBlb2YgZG9uZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiBhcyBsYXN0IGFyZ3VtZW50LCBub3QgJyArIGRvbmUpXG4gICAgfVxuXG4gICAgbmV4dC5hcHBseShudWxsLCBbbnVsbF0uY29uY2F0KGlucHV0KSlcblxuICAgIC8vIFJ1biB0aGUgbmV4dCBgZm5gLCBpZiBhbnkuXG4gICAgZnVuY3Rpb24gbmV4dChlcnIpIHtcbiAgICAgIHZhciBmbiA9IGZuc1srK2luZGV4XVxuICAgICAgdmFyIHBhcmFtcyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICAgICAgdmFyIHZhbHVlcyA9IHBhcmFtcy5zbGljZSgxKVxuICAgICAgdmFyIGxlbmd0aCA9IGlucHV0Lmxlbmd0aFxuICAgICAgdmFyIHBvcyA9IC0xXG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgZG9uZShlcnIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBDb3B5IG5vbi1udWxseSBpbnB1dCBpbnRvIHZhbHVlcy5cbiAgICAgIHdoaWxlICgrK3BvcyA8IGxlbmd0aCkge1xuICAgICAgICBpZiAodmFsdWVzW3Bvc10gPT09IG51bGwgfHwgdmFsdWVzW3Bvc10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlc1twb3NdID0gaW5wdXRbcG9zXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0ID0gdmFsdWVzXG5cbiAgICAgIC8vIE5leHQgb3IgZG9uZS5cbiAgICAgIGlmIChmbikge1xuICAgICAgICB3cmFwKGZuLCBuZXh0KS5hcHBseShudWxsLCBpbnB1dClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUuYXBwbHkobnVsbCwgW251bGxdLmNvbmNhdChpbnB1dCkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGBmbmAgdG8gdGhlIGxpc3QuXG4gIGZ1bmN0aW9uIHVzZShmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYGZuYCB0byBiZSBhIGZ1bmN0aW9uLCBub3QgJyArIGZuKVxuICAgIH1cblxuICAgIGZucy5wdXNoKGZuKVxuXG4gICAgcmV0dXJuIG1pZGRsZXdhcmVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlXG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcFxuXG4vLyBXcmFwIGBmbmAuXG4vLyBDYW4gYmUgc3luYyBvciBhc3luYzsgcmV0dXJuIGEgcHJvbWlzZSwgcmVjZWl2ZSBhIGNvbXBsZXRpb24gaGFuZGxlciwgcmV0dXJuXG4vLyBuZXcgdmFsdWVzIGFuZCBlcnJvcnMuXG5mdW5jdGlvbiB3cmFwKGZuLCBjYWxsYmFjaykge1xuICB2YXIgaW52b2tlZFxuXG4gIHJldHVybiB3cmFwcGVkXG5cbiAgZnVuY3Rpb24gd3JhcHBlZCgpIHtcbiAgICB2YXIgcGFyYW1zID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgdmFyIGNhbGxiYWNrID0gZm4ubGVuZ3RoID4gcGFyYW1zLmxlbmd0aFxuICAgIHZhciByZXN1bHRcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgcGFyYW1zLnB1c2goZG9uZSlcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gZm4uYXBwbHkobnVsbCwgcGFyYW1zKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBXZWxsLCB0aGlzIGlzIHF1aXRlIHRoZSBwaWNrbGUuXG4gICAgICAvLyBgZm5gIHJlY2VpdmVkIGEgY2FsbGJhY2sgYW5kIGludm9rZWQgaXQgKHRodXMgY29udGludWluZyB0aGUgcGlwZWxpbmUpLFxuICAgICAgLy8gYnV0IGxhdGVyIGFsc28gdGhyZXcgYW4gZXJyb3IuXG4gICAgICAvLyBXZeKAmXJlIG5vdCBhYm91dCB0byByZXN0YXJ0IHRoZSBwaXBlbGluZSBhZ2Fpbiwgc28gdGhlIG9ubHkgdGhpbmcgbGVmdFxuICAgICAgLy8gdG8gZG8gaXMgdG8gdGhyb3cgdGhlIHRoaW5nIGluc3RlYWQuXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaW52b2tlZCkge1xuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZG9uZShlcnJvcilcbiAgICB9XG5cbiAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHQudGhlbih0aGVuLCBkb25lKVxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBkb25lKHJlc3VsdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoZW4ocmVzdWx0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEludm9rZSBgbmV4dGAsIG9ubHkgb25jZS5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBpZiAoIWludm9rZWQpIHtcbiAgICAgIGludm9rZWQgPSB0cnVlXG5cbiAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cblxuICAvLyBJbnZva2UgYGRvbmVgIHdpdGggb25lIHZhbHVlLlxuICAvLyBUcmFja3MgaWYgYW4gZXJyb3IgaXMgcGFzc2VkLCB0b28uXG4gIGZ1bmN0aW9uIHRoZW4odmFsdWUpIHtcbiAgICBkb25lKG51bGwsIHZhbHVlKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGJhaWwgPSByZXF1aXJlKCdiYWlsJylcbnZhciBidWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ2V4dGVuZCcpXG52YXIgcGxhaW4gPSByZXF1aXJlKCdpcy1wbGFpbi1vYmonKVxudmFyIHRyb3VnaCA9IHJlcXVpcmUoJ3Ryb3VnaCcpXG52YXIgdmZpbGUgPSByZXF1aXJlKCd2ZmlsZScpXG5cbi8vIEV4cG9zZSBhIGZyb3plbiBwcm9jZXNzb3IuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWZpZWQoKS5mcmVlemUoKVxuXG52YXIgc2xpY2UgPSBbXS5zbGljZVxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIFByb2Nlc3MgcGlwZWxpbmUuXG52YXIgcGlwZWxpbmUgPSB0cm91Z2goKVxuICAudXNlKHBpcGVsaW5lUGFyc2UpXG4gIC51c2UocGlwZWxpbmVSdW4pXG4gIC51c2UocGlwZWxpbmVTdHJpbmdpZnkpXG5cbmZ1bmN0aW9uIHBpcGVsaW5lUGFyc2UocCwgY3R4KSB7XG4gIGN0eC50cmVlID0gcC5wYXJzZShjdHguZmlsZSlcbn1cblxuZnVuY3Rpb24gcGlwZWxpbmVSdW4ocCwgY3R4LCBuZXh0KSB7XG4gIHAucnVuKGN0eC50cmVlLCBjdHguZmlsZSwgZG9uZSlcblxuICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSwgZmlsZSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIG5leHQoZXJyKVxuICAgIH0gZWxzZSB7XG4gICAgICBjdHgudHJlZSA9IHRyZWVcbiAgICAgIGN0eC5maWxlID0gZmlsZVxuICAgICAgbmV4dCgpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lU3RyaW5naWZ5KHAsIGN0eCkge1xuICB2YXIgcmVzdWx0ID0gcC5zdHJpbmdpZnkoY3R4LnRyZWUsIGN0eC5maWxlKVxuICB2YXIgZmlsZSA9IGN0eC5maWxlXG5cbiAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkIHx8IHJlc3VsdCA9PT0gbnVsbCkge1xuICAgIC8vIEVtcHR5LlxuICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnIHx8IGJ1ZmZlcihyZXN1bHQpKSB7XG4gICAgZmlsZS5jb250ZW50cyA9IHJlc3VsdFxuICB9IGVsc2Uge1xuICAgIGZpbGUucmVzdWx0ID0gcmVzdWx0XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBmaXJzdCBwcm9jZXNzb3IuXG5mdW5jdGlvbiB1bmlmaWVkKCkge1xuICB2YXIgYXR0YWNoZXJzID0gW11cbiAgdmFyIHRyYW5zZm9ybWVycyA9IHRyb3VnaCgpXG4gIHZhciBuYW1lc3BhY2UgPSB7fVxuICB2YXIgZnJvemVuID0gZmFsc2VcbiAgdmFyIGZyZWV6ZUluZGV4ID0gLTFcblxuICAvLyBEYXRhIG1hbmFnZW1lbnQuXG4gIHByb2Nlc3Nvci5kYXRhID0gZGF0YVxuXG4gIC8vIExvY2suXG4gIHByb2Nlc3Nvci5mcmVlemUgPSBmcmVlemVcblxuICAvLyBQbHVnaW5zLlxuICBwcm9jZXNzb3IuYXR0YWNoZXJzID0gYXR0YWNoZXJzXG4gIHByb2Nlc3Nvci51c2UgPSB1c2VcblxuICAvLyBBUEkuXG4gIHByb2Nlc3Nvci5wYXJzZSA9IHBhcnNlXG4gIHByb2Nlc3Nvci5zdHJpbmdpZnkgPSBzdHJpbmdpZnlcbiAgcHJvY2Vzc29yLnJ1biA9IHJ1blxuICBwcm9jZXNzb3IucnVuU3luYyA9IHJ1blN5bmNcbiAgcHJvY2Vzc29yLnByb2Nlc3MgPSBwcm9jZXNzXG4gIHByb2Nlc3Nvci5wcm9jZXNzU3luYyA9IHByb2Nlc3NTeW5jXG5cbiAgLy8gRXhwb3NlLlxuICByZXR1cm4gcHJvY2Vzc29yXG5cbiAgLy8gQ3JlYXRlIGEgbmV3IHByb2Nlc3NvciBiYXNlZCBvbiB0aGUgcHJvY2Vzc29yIGluIHRoZSBjdXJyZW50IHNjb3BlLlxuICBmdW5jdGlvbiBwcm9jZXNzb3IoKSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gdW5pZmllZCgpXG4gICAgdmFyIGxlbmd0aCA9IGF0dGFjaGVycy5sZW5ndGhcbiAgICB2YXIgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnVzZS5hcHBseShudWxsLCBhdHRhY2hlcnNbaW5kZXhdKVxuICAgIH1cblxuICAgIGRlc3RpbmF0aW9uLmRhdGEoZXh0ZW5kKHRydWUsIHt9LCBuYW1lc3BhY2UpKVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uXG4gIH1cblxuICAvLyBGcmVlemU6IHVzZWQgdG8gc2lnbmFsIGEgcHJvY2Vzc29yIHRoYXQgaGFzIGZpbmlzaGVkIGNvbmZpZ3VyYXRpb24uXG4gIC8vXG4gIC8vIEZvciBleGFtcGxlLCB0YWtlIHVuaWZpZWQgaXRzZWxmOiBpdOKAmXMgZnJvemVuLlxuICAvLyBQbHVnaW5zIHNob3VsZCBub3QgYmUgYWRkZWQgdG8gaXQuXG4gIC8vIFJhdGhlciwgaXQgc2hvdWxkIGJlIGV4dGVuZGVkLCBieSBpbnZva2luZyBpdCwgYmVmb3JlIG1vZGlmeWluZyBpdC5cbiAgLy9cbiAgLy8gSW4gZXNzZW5jZSwgYWx3YXlzIGludm9rZSB0aGlzIHdoZW4gZXhwb3J0aW5nIGEgcHJvY2Vzc29yLlxuICBmdW5jdGlvbiBmcmVlemUoKSB7XG4gICAgdmFyIHZhbHVlc1xuICAgIHZhciBwbHVnaW5cbiAgICB2YXIgb3B0aW9uc1xuICAgIHZhciB0cmFuc2Zvcm1lclxuXG4gICAgaWYgKGZyb3plbikge1xuICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgIH1cblxuICAgIHdoaWxlICgrK2ZyZWV6ZUluZGV4IDwgYXR0YWNoZXJzLmxlbmd0aCkge1xuICAgICAgdmFsdWVzID0gYXR0YWNoZXJzW2ZyZWV6ZUluZGV4XVxuICAgICAgcGx1Z2luID0gdmFsdWVzWzBdXG4gICAgICBvcHRpb25zID0gdmFsdWVzWzFdXG4gICAgICB0cmFuc2Zvcm1lciA9IG51bGxcblxuICAgICAgaWYgKG9wdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zID09PSB0cnVlKSB7XG4gICAgICAgIHZhbHVlc1sxXSA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICB0cmFuc2Zvcm1lciA9IHBsdWdpbi5hcHBseShwcm9jZXNzb3IsIHZhbHVlcy5zbGljZSgxKSlcblxuICAgICAgaWYgKHR5cGVvZiB0cmFuc2Zvcm1lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0cmFuc2Zvcm1lcnMudXNlKHRyYW5zZm9ybWVyKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZyb3plbiA9IHRydWVcbiAgICBmcmVlemVJbmRleCA9IEluZmluaXR5XG5cbiAgICByZXR1cm4gcHJvY2Vzc29yXG4gIH1cblxuICAvLyBEYXRhIG1hbmFnZW1lbnQuXG4gIC8vIEdldHRlciAvIHNldHRlciBmb3IgcHJvY2Vzc29yLXNwZWNpZmljIGluZm9ybXRpb24uXG4gIGZ1bmN0aW9uIGRhdGEoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gU2V0IGBrZXlgLlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgYXNzZXJ0VW5mcm96ZW4oJ2RhdGEnLCBmcm96ZW4pXG5cbiAgICAgICAgbmFtZXNwYWNlW2tleV0gPSB2YWx1ZVxuXG4gICAgICAgIHJldHVybiBwcm9jZXNzb3JcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IGBrZXlgLlxuICAgICAgcmV0dXJuIChvd24uY2FsbChuYW1lc3BhY2UsIGtleSkgJiYgbmFtZXNwYWNlW2tleV0pIHx8IG51bGxcbiAgICB9XG5cbiAgICAvLyBTZXQgc3BhY2UuXG4gICAgaWYgKGtleSkge1xuICAgICAgYXNzZXJ0VW5mcm96ZW4oJ2RhdGEnLCBmcm96ZW4pXG4gICAgICBuYW1lc3BhY2UgPSBrZXlcbiAgICAgIHJldHVybiBwcm9jZXNzb3JcbiAgICB9XG5cbiAgICAvLyBHZXQgc3BhY2UuXG4gICAgcmV0dXJuIG5hbWVzcGFjZVxuICB9XG5cbiAgLy8gUGx1Z2luIG1hbmFnZW1lbnQuXG4gIC8vXG4gIC8vIFBhc3MgaXQ6XG4gIC8vICogICBhbiBhdHRhY2hlciBhbmQgb3B0aW9ucyxcbiAgLy8gKiAgIGEgcHJlc2V0LFxuICAvLyAqICAgYSBsaXN0IG9mIHByZXNldHMsIGF0dGFjaGVycywgYW5kIGFyZ3VtZW50cyAobGlzdCBvZiBhdHRhY2hlcnMgYW5kXG4gIC8vICAgICBvcHRpb25zKS5cbiAgZnVuY3Rpb24gdXNlKHZhbHVlKSB7XG4gICAgdmFyIHNldHRpbmdzXG5cbiAgICBhc3NlcnRVbmZyb3plbigndXNlJywgZnJvemVuKVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEVtcHR5LlxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhZGRQbHVnaW4uYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgIGFkZExpc3QodmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRQcmVzZXQodmFsdWUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdXNhYmxlIHZhbHVlLCBub3QgYCcgKyB2YWx1ZSArICdgJylcbiAgICB9XG5cbiAgICBpZiAoc2V0dGluZ3MpIHtcbiAgICAgIG5hbWVzcGFjZS5zZXR0aW5ncyA9IGV4dGVuZChuYW1lc3BhY2Uuc2V0dGluZ3MgfHwge30sIHNldHRpbmdzKVxuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzb3JcblxuICAgIGZ1bmN0aW9uIGFkZFByZXNldChyZXN1bHQpIHtcbiAgICAgIGFkZExpc3QocmVzdWx0LnBsdWdpbnMpXG5cbiAgICAgIGlmIChyZXN1bHQuc2V0dGluZ3MpIHtcbiAgICAgICAgc2V0dGluZ3MgPSBleHRlbmQoc2V0dGluZ3MgfHwge30sIHJlc3VsdC5zZXR0aW5ncylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYWRkUGx1Z2luKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICgnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIGFkZFBsdWdpbi5hcHBseShudWxsLCB2YWx1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRQcmVzZXQodmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdXNhYmxlIHZhbHVlLCBub3QgYCcgKyB2YWx1ZSArICdgJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0KHBsdWdpbnMpIHtcbiAgICAgIHZhciBsZW5ndGhcbiAgICAgIHZhciBpbmRleFxuXG4gICAgICBpZiAocGx1Z2lucyA9PT0gbnVsbCB8fCBwbHVnaW5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gRW1wdHkuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBwbHVnaW5zKSB7XG4gICAgICAgIGxlbmd0aCA9IHBsdWdpbnMubGVuZ3RoXG4gICAgICAgIGluZGV4ID0gLTFcblxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgIGFkZChwbHVnaW5zW2luZGV4XSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhIGxpc3Qgb2YgcGx1Z2lucywgbm90IGAnICsgcGx1Z2lucyArICdgJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRQbHVnaW4ocGx1Z2luLCB2YWx1ZSkge1xuICAgICAgdmFyIGVudHJ5ID0gZmluZChwbHVnaW4pXG5cbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAocGxhaW4oZW50cnlbMV0pICYmIHBsYWluKHZhbHVlKSkge1xuICAgICAgICAgIHZhbHVlID0gZXh0ZW5kKGVudHJ5WzFdLCB2YWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVudHJ5WzFdID0gdmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF0dGFjaGVycy5wdXNoKHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kKHBsdWdpbikge1xuICAgIHZhciBsZW5ndGggPSBhdHRhY2hlcnMubGVuZ3RoXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgZW50cnlcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBlbnRyeSA9IGF0dGFjaGVyc1tpbmRleF1cblxuICAgICAgaWYgKGVudHJ5WzBdID09PSBwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUGFyc2UgYSBmaWxlIChpbiBzdHJpbmcgb3IgdmZpbGUgcmVwcmVzZW50YXRpb24pIGludG8gYSB1bmlzdCBub2RlIHVzaW5nXG4gIC8vIHRoZSBgUGFyc2VyYCBvbiB0aGUgcHJvY2Vzc29yLlxuICBmdW5jdGlvbiBwYXJzZShkb2MpIHtcbiAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcbiAgICB2YXIgUGFyc2VyXG5cbiAgICBmcmVlemUoKVxuICAgIFBhcnNlciA9IHByb2Nlc3Nvci5QYXJzZXJcbiAgICBhc3NlcnRQYXJzZXIoJ3BhcnNlJywgUGFyc2VyKVxuXG4gICAgaWYgKG5ld2FibGUoUGFyc2VyLCAncGFyc2UnKSkge1xuICAgICAgcmV0dXJuIG5ldyBQYXJzZXIoU3RyaW5nKGZpbGUpLCBmaWxlKS5wYXJzZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIFBhcnNlcihTdHJpbmcoZmlsZSksIGZpbGUpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbmV3LWNhcFxuICB9XG5cbiAgLy8gUnVuIHRyYW5zZm9ybXMgb24gYSB1bmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZSAoaW4gc3RyaW5nIG9yXG4gIC8vIHZmaWxlIHJlcHJlc2VudGF0aW9uKSwgYXN5bmMuXG4gIGZ1bmN0aW9uIHJ1bihub2RlLCBmaWxlLCBjYikge1xuICAgIGFzc2VydE5vZGUobm9kZSlcbiAgICBmcmVlemUoKVxuXG4gICAgaWYgKCFjYiAmJiB0eXBlb2YgZmlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2IgPSBmaWxlXG4gICAgICBmaWxlID0gbnVsbFxuICAgIH1cblxuICAgIGlmICghY2IpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcilcbiAgICB9XG5cbiAgICBleGVjdXRvcihudWxsLCBjYilcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdHJhbnNmb3JtZXJzLnJ1bihub2RlLCB2ZmlsZShmaWxlKSwgZG9uZSlcblxuICAgICAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUsIGZpbGUpIHtcbiAgICAgICAgdHJlZSA9IHRyZWUgfHwgbm9kZVxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cmVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKG51bGwsIHRyZWUsIGZpbGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSdW4gdHJhbnNmb3JtcyBvbiBhIHVuaXN0IG5vZGUgcmVwcmVzZW50YXRpb24gb2YgYSBmaWxlIChpbiBzdHJpbmcgb3JcbiAgLy8gdmZpbGUgcmVwcmVzZW50YXRpb24pLCBzeW5jLlxuICBmdW5jdGlvbiBydW5TeW5jKG5vZGUsIGZpbGUpIHtcbiAgICB2YXIgY29tcGxldGUgPSBmYWxzZVxuICAgIHZhciByZXN1bHRcblxuICAgIHJ1bihub2RlLCBmaWxlLCBkb25lKVxuXG4gICAgYXNzZXJ0RG9uZSgncnVuU3luYycsICdydW4nLCBjb21wbGV0ZSlcblxuICAgIHJldHVybiByZXN1bHRcblxuICAgIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlKSB7XG4gICAgICBjb21wbGV0ZSA9IHRydWVcbiAgICAgIGJhaWwoZXJyKVxuICAgICAgcmVzdWx0ID0gdHJlZVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0cmluZ2lmeSBhIHVuaXN0IG5vZGUgcmVwcmVzZW50YXRpb24gb2YgYSBmaWxlIChpbiBzdHJpbmcgb3IgdmZpbGVcbiAgLy8gcmVwcmVzZW50YXRpb24pIGludG8gYSBzdHJpbmcgdXNpbmcgdGhlIGBDb21waWxlcmAgb24gdGhlIHByb2Nlc3Nvci5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5KG5vZGUsIGRvYykge1xuICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuICAgIHZhciBDb21waWxlclxuXG4gICAgZnJlZXplKClcbiAgICBDb21waWxlciA9IHByb2Nlc3Nvci5Db21waWxlclxuICAgIGFzc2VydENvbXBpbGVyKCdzdHJpbmdpZnknLCBDb21waWxlcilcbiAgICBhc3NlcnROb2RlKG5vZGUpXG5cbiAgICBpZiAobmV3YWJsZShDb21waWxlciwgJ2NvbXBpbGUnKSkge1xuICAgICAgcmV0dXJuIG5ldyBDb21waWxlcihub2RlLCBmaWxlKS5jb21waWxlKClcbiAgICB9XG5cbiAgICByZXR1cm4gQ29tcGlsZXIobm9kZSwgZmlsZSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG4gIH1cblxuICAvLyBQYXJzZSBhIGZpbGUgKGluIHN0cmluZyBvciB2ZmlsZSByZXByZXNlbnRhdGlvbikgaW50byBhIHVuaXN0IG5vZGUgdXNpbmdcbiAgLy8gdGhlIGBQYXJzZXJgIG9uIHRoZSBwcm9jZXNzb3IsIHRoZW4gcnVuIHRyYW5zZm9ybXMgb24gdGhhdCBub2RlLCBhbmRcbiAgLy8gY29tcGlsZSB0aGUgcmVzdWx0aW5nIG5vZGUgdXNpbmcgdGhlIGBDb21waWxlcmAgb24gdGhlIHByb2Nlc3NvciwgYW5kXG4gIC8vIHN0b3JlIHRoYXQgcmVzdWx0IG9uIHRoZSB2ZmlsZS5cbiAgZnVuY3Rpb24gcHJvY2Vzcyhkb2MsIGNiKSB7XG4gICAgZnJlZXplKClcbiAgICBhc3NlcnRQYXJzZXIoJ3Byb2Nlc3MnLCBwcm9jZXNzb3IuUGFyc2VyKVxuICAgIGFzc2VydENvbXBpbGVyKCdwcm9jZXNzJywgcHJvY2Vzc29yLkNvbXBpbGVyKVxuXG4gICAgaWYgKCFjYikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKVxuICAgIH1cblxuICAgIGV4ZWN1dG9yKG51bGwsIGNiKVxuXG4gICAgZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcblxuICAgICAgcGlwZWxpbmUucnVuKHByb2Nlc3Nvciwge2ZpbGU6IGZpbGV9LCBkb25lKVxuXG4gICAgICBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmVzb2x2ZShmaWxlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKG51bGwsIGZpbGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQcm9jZXNzIHRoZSBnaXZlbiBkb2N1bWVudCAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSwgc3luYy5cbiAgZnVuY3Rpb24gcHJvY2Vzc1N5bmMoZG9jKSB7XG4gICAgdmFyIGNvbXBsZXRlID0gZmFsc2VcbiAgICB2YXIgZmlsZVxuXG4gICAgZnJlZXplKClcbiAgICBhc3NlcnRQYXJzZXIoJ3Byb2Nlc3NTeW5jJywgcHJvY2Vzc29yLlBhcnNlcilcbiAgICBhc3NlcnRDb21waWxlcigncHJvY2Vzc1N5bmMnLCBwcm9jZXNzb3IuQ29tcGlsZXIpXG4gICAgZmlsZSA9IHZmaWxlKGRvYylcblxuICAgIHByb2Nlc3MoZmlsZSwgZG9uZSlcblxuICAgIGFzc2VydERvbmUoJ3Byb2Nlc3NTeW5jJywgJ3Byb2Nlc3MnLCBjb21wbGV0ZSlcblxuICAgIHJldHVybiBmaWxlXG5cbiAgICBmdW5jdGlvbiBkb25lKGVycikge1xuICAgICAgY29tcGxldGUgPSB0cnVlXG4gICAgICBiYWlsKGVycilcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgYHZhbHVlYCBpcyBhIGNvbnN0cnVjdG9yLlxuZnVuY3Rpb24gbmV3YWJsZSh2YWx1ZSwgbmFtZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHZhbHVlLnByb3RvdHlwZSAmJlxuICAgIC8vIEEgZnVuY3Rpb24gd2l0aCBrZXlzIGluIGl0cyBwcm90b3R5cGUgaXMgcHJvYmFibHkgYSBjb25zdHJ1Y3Rvci5cbiAgICAvLyBDbGFzc2Vz4oCZIHByb3RvdHlwZSBtZXRob2RzIGFyZSBub3QgZW51bWVyYWJsZSwgc28gd2UgY2hlY2sgaWYgc29tZSB2YWx1ZVxuICAgIC8vIGV4aXN0cyBpbiB0aGUgcHJvdG90eXBlLlxuICAgIChrZXlzKHZhbHVlLnByb3RvdHlwZSkgfHwgbmFtZSBpbiB2YWx1ZS5wcm90b3R5cGUpXG4gIClcbn1cblxuLy8gQ2hlY2sgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3Qgd2l0aCBrZXlzLlxuZnVuY3Rpb24ga2V5cyh2YWx1ZSkge1xuICB2YXIga2V5XG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBBc3NlcnQgYSBwYXJzZXIgaXMgYXZhaWxhYmxlLlxuZnVuY3Rpb24gYXNzZXJ0UGFyc2VyKG5hbWUsIFBhcnNlcikge1xuICBpZiAodHlwZW9mIFBhcnNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGAnICsgbmFtZSArICdgIHdpdGhvdXQgYFBhcnNlcmAnKVxuICB9XG59XG5cbi8vIEFzc2VydCBhIGNvbXBpbGVyIGlzIGF2YWlsYWJsZS5cbmZ1bmN0aW9uIGFzc2VydENvbXBpbGVyKG5hbWUsIENvbXBpbGVyKSB7XG4gIGlmICh0eXBlb2YgQ29tcGlsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBgJyArIG5hbWUgKyAnYCB3aXRob3V0IGBDb21waWxlcmAnKVxuICB9XG59XG5cbi8vIEFzc2VydCB0aGUgcHJvY2Vzc29yIGlzIG5vdCBmcm96ZW4uXG5mdW5jdGlvbiBhc3NlcnRVbmZyb3plbihuYW1lLCBmcm96ZW4pIHtcbiAgaWYgKGZyb3plbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3QgaW52b2tlIGAnICtcbiAgICAgICAgbmFtZSArXG4gICAgICAgICdgIG9uIGEgZnJvemVuIHByb2Nlc3Nvci5cXG5DcmVhdGUgYSBuZXcgcHJvY2Vzc29yIGZpcnN0LCBieSBpbnZva2luZyBpdDogdXNlIGBwcm9jZXNzb3IoKWAgaW5zdGVhZCBvZiBgcHJvY2Vzc29yYC4nXG4gICAgKVxuICB9XG59XG5cbi8vIEFzc2VydCBgbm9kZWAgaXMgYSB1bmlzdCBub2RlLlxuZnVuY3Rpb24gYXNzZXJ0Tm9kZShub2RlKSB7XG4gIGlmICghbm9kZSB8fCB0eXBlb2Ygbm9kZS50eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm9kZSwgZ290IGAnICsgbm9kZSArICdgJylcbiAgfVxufVxuXG4vLyBBc3NlcnQgdGhhdCBgY29tcGxldGVgIGlzIGB0cnVlYC5cbmZ1bmN0aW9uIGFzc2VydERvbmUobmFtZSwgYXN5bmNOYW1lLCBjb21wbGV0ZSkge1xuICBpZiAoIWNvbXBsZXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2AnICsgbmFtZSArICdgIGZpbmlzaGVkIGFzeW5jLiBVc2UgYCcgKyBhc3luY05hbWUgKyAnYCBpbnN0ZWFkJ1xuICAgIClcbiAgfVxufVxuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydFxuXG5mdW5jdGlvbiBjb252ZXJ0KHRlc3QpIHtcbiAgaWYgKHRlc3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBva1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlRmFjdG9yeSh0ZXN0KVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnbGVuZ3RoJyBpbiB0ZXN0ID8gYW55RmFjdG9yeSh0ZXN0KSA6IGFsbEZhY3RvcnkodGVzdClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0ZXN0XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIG9iamVjdCBhcyB0ZXN0Jylcbn1cblxuLy8gVXRpbGl0eSBhc3NlcnQgZWFjaCBwcm9wZXJ0eSBpbiBgdGVzdGAgaXMgcmVwcmVzZW50ZWQgaW4gYG5vZGVgLCBhbmQgZWFjaFxuLy8gdmFsdWVzIGFyZSBzdHJpY3RseSBlcXVhbC5cbmZ1bmN0aW9uIGFsbEZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gYWxsXG5cbiAgZnVuY3Rpb24gYWxsKG5vZGUpIHtcbiAgICB2YXIga2V5XG5cbiAgICBmb3IgKGtleSBpbiB0ZXN0KSB7XG4gICAgICBpZiAobm9kZVtrZXldICE9PSB0ZXN0W2tleV0pIHJldHVyblxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICB2YXIgY2hlY2tzID0gW11cbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IHRlc3RzLmxlbmd0aCkge1xuICAgIGNoZWNrc1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBhbnlcblxuICBmdW5jdGlvbiBhbnkoKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY2hlY2tzLmxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGXigJlzIHR5cGVcbi8vIGZvciBzYWlkIHN0cmluZy5cbmZ1bmN0aW9uIHR5cGVGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVcblxuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLnR5cGUgPT09IHRlc3RcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIHJldHVybiB0cnVlLlxuZnVuY3Rpb24gb2soKSB7XG4gIHJldHVybiB0cnVlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xuICAvLyBOb3RoaW5nLlxuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIE5vZGUuXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ3Bvc2l0aW9uJykgfHwgb3duLmNhbGwodmFsdWUsICd0eXBlJykpIHtcbiAgICByZXR1cm4gcG9zaXRpb24odmFsdWUucG9zaXRpb24pXG4gIH1cblxuICAvLyBQb3NpdGlvbi5cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAnc3RhcnQnKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ2VuZCcpKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlKVxuICB9XG5cbiAgLy8gUG9pbnQuXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ2xpbmUnKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ2NvbHVtbicpKSB7XG4gICAgcmV0dXJuIHBvaW50KHZhbHVlKVxuICB9XG5cbiAgLy8gP1xuICByZXR1cm4gJydcbn1cblxuZnVuY3Rpb24gcG9pbnQocG9pbnQpIHtcbiAgaWYgKCFwb2ludCB8fCB0eXBlb2YgcG9pbnQgIT09ICdvYmplY3QnKSB7XG4gICAgcG9pbnQgPSB7fVxuICB9XG5cbiAgcmV0dXJuIGluZGV4KHBvaW50LmxpbmUpICsgJzonICsgaW5kZXgocG9pbnQuY29sdW1uKVxufVxuXG5mdW5jdGlvbiBwb3NpdGlvbihwb3MpIHtcbiAgaWYgKCFwb3MgfHwgdHlwZW9mIHBvcyAhPT0gJ29iamVjdCcpIHtcbiAgICBwb3MgPSB7fVxuICB9XG5cbiAgcmV0dXJuIHBvaW50KHBvcy5zdGFydCkgKyAnLScgKyBwb2ludChwb3MuZW5kKVxufVxuXG5mdW5jdGlvbiBpbmRleCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogMVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qIEV4cG9zZS4gKi9cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRQYXJlbnRzXG5cbi8qIFZpc2l0LiAqL1xuZnVuY3Rpb24gdmlzaXRQYXJlbnRzKHRyZWUsIHR5cGUsIHZpc2l0b3IpIHtcbiAgdmFyIHN0YWNrID0gW11cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2aXNpdG9yID0gdHlwZVxuICAgIHR5cGUgPSBudWxsXG4gIH1cblxuICBvbmUodHJlZSlcblxuICAvKiBWaXNpdCBhIHNpbmdsZSBub2RlLiAqL1xuICBmdW5jdGlvbiBvbmUobm9kZSkge1xuICAgIHZhciByZXN1bHRcblxuICAgIGlmICghdHlwZSB8fCBub2RlLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHJlc3VsdCA9IHZpc2l0b3Iobm9kZSwgc3RhY2suY29uY2F0KCkpXG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0ICE9PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGFsbChub2RlLmNoaWxkcmVuLCBub2RlKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8qIFZpc2l0IGNoaWxkcmVuIGluIGBwYXJlbnRgLiAqL1xuICBmdW5jdGlvbiBhbGwoY2hpbGRyZW4sIHBhcmVudCkge1xuICAgIHZhciBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGhcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBjaGlsZFxuXG4gICAgc3RhY2sucHVzaChwYXJlbnQpXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cblxuICAgICAgaWYgKGNoaWxkICYmIG9uZShjaGlsZCkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHN0YWNrLnBvcCgpXG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFxuXG52YXIgdmlzaXRQYXJlbnRzID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJylcblxudmFyIENPTlRJTlVFID0gdmlzaXRQYXJlbnRzLkNPTlRJTlVFXG52YXIgU0tJUCA9IHZpc2l0UGFyZW50cy5TS0lQXG52YXIgRVhJVCA9IHZpc2l0UGFyZW50cy5FWElUXG5cbnZpc2l0LkNPTlRJTlVFID0gQ09OVElOVUVcbnZpc2l0LlNLSVAgPSBTS0lQXG52aXNpdC5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdCh0cmVlLCB0ZXN0LCB2aXNpdG9yLCByZXZlcnNlKSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmlzaXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldmVyc2UgPSB2aXNpdG9yXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgICB0ZXN0ID0gbnVsbFxuICB9XG5cbiAgdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIG92ZXJsb2FkLCByZXZlcnNlKVxuXG4gIGZ1bmN0aW9uIG92ZXJsb2FkKG5vZGUsIHBhcmVudHMpIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdXG4gICAgdmFyIGluZGV4ID0gcGFyZW50ID8gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkgOiBudWxsXG4gICAgcmV0dXJuIHZpc2l0b3Iobm9kZSwgaW5kZXgsIHBhcmVudClcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eVxuZnVuY3Rpb24gaWRlbnRpdHkoZCkge1xuICByZXR1cm4gZFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRQYXJlbnRzXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKVxuXG52YXIgQ09OVElOVUUgPSB0cnVlXG52YXIgU0tJUCA9ICdza2lwJ1xudmFyIEVYSVQgPSBmYWxzZVxuXG52aXNpdFBhcmVudHMuQ09OVElOVUUgPSBDT05USU5VRVxudmlzaXRQYXJlbnRzLlNLSVAgPSBTS0lQXG52aXNpdFBhcmVudHMuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgdmFyIHN0ZXBcbiAgdmFyIGlzXG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICB2aXNpdG9yID0gdGVzdFxuICAgIHRlc3QgPSBudWxsXG4gIH1cblxuICBpcyA9IGNvbnZlcnQodGVzdClcbiAgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcblxuICBmYWN0b3J5KHRyZWUsIG51bGwsIFtdKSgpXG5cbiAgZnVuY3Rpb24gZmFjdG9yeShub2RlLCBpbmRleCwgcGFyZW50cykge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiBub2RlICE9PSBudWxsID8gbm9kZSA6IHt9XG4gICAgdmFyIG5hbWVcblxuICAgIGlmICh0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPVxuICAgICAgICB0eXBlb2YgdmFsdWUudGFnTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHZhbHVlLnRhZ05hbWVcbiAgICAgICAgICA6IHR5cGVvZiB2YWx1ZS5uYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gdmFsdWUubmFtZVxuICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgIHZpc2l0LmRpc3BsYXlOYW1lID1cbiAgICAgICAgJ25vZGUgKCcgKyBjb2xvcih2YWx1ZS50eXBlICsgKG5hbWUgPyAnPCcgKyBuYW1lICsgJz4nIDogJycpKSArICcpJ1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdFxuXG4gICAgZnVuY3Rpb24gdmlzaXQoKSB7XG4gICAgICB2YXIgZ3JhbmRwYXJlbnRzID0gcGFyZW50cy5jb25jYXQobm9kZSlcbiAgICAgIHZhciByZXN1bHQgPSBbXVxuICAgICAgdmFyIHN1YnJlc3VsdFxuICAgICAgdmFyIG9mZnNldFxuXG4gICAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgICByZXN1bHQgPSB0b1Jlc3VsdCh2aXNpdG9yKG5vZGUsIHBhcmVudHMpKVxuXG4gICAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICAgIG9mZnNldCA9IChyZXZlcnNlID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggOiAtMSkgKyBzdGVwXG5cbiAgICAgICAgd2hpbGUgKG9mZnNldCA+IC0xICYmIG9mZnNldCA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgc3VicmVzdWx0ID0gZmFjdG9yeShub2RlLmNoaWxkcmVuW29mZnNldF0sIG9mZnNldCwgZ3JhbmRwYXJlbnRzKSgpXG5cbiAgICAgICAgICBpZiAoc3VicmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VicmVzdWx0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2Zmc2V0ID1cbiAgICAgICAgICAgIHR5cGVvZiBzdWJyZXN1bHRbMV0gPT09ICdudW1iZXInID8gc3VicmVzdWx0WzFdIDogb2Zmc2V0ICsgc3RlcFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCd1bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gVk1lc3NhZ2VcblxuLy8gSW5oZXJpdCBmcm9tIGBFcnJvciNgLlxuZnVuY3Rpb24gVk1lc3NhZ2VQcm90b3R5cGUoKSB7fVxuVk1lc3NhZ2VQcm90b3R5cGUucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlXG5WTWVzc2FnZS5wcm90b3R5cGUgPSBuZXcgVk1lc3NhZ2VQcm90b3R5cGUoKVxuXG4vLyBNZXNzYWdlIHByb3BlcnRpZXMuXG52YXIgcHJvdG8gPSBWTWVzc2FnZS5wcm90b3R5cGVcblxucHJvdG8uZmlsZSA9ICcnXG5wcm90by5uYW1lID0gJydcbnByb3RvLnJlYXNvbiA9ICcnXG5wcm90by5tZXNzYWdlID0gJydcbnByb3RvLnN0YWNrID0gJydcbnByb3RvLmZhdGFsID0gbnVsbFxucHJvdG8uY29sdW1uID0gbnVsbFxucHJvdG8ubGluZSA9IG51bGxcblxuLy8gQ29uc3RydWN0IGEgbmV3IFZNZXNzYWdlLlxuLy9cbi8vIE5vdGU6IFdlIGNhbm5vdCBpbnZva2UgYEVycm9yYCBvbiB0aGUgY3JlYXRlZCBjb250ZXh0LCBhcyB0aGF0IGFkZHMgcmVhZG9ubHlcbi8vIGBsaW5lYCBhbmQgYGNvbHVtbmAgYXR0cmlidXRlcyBvbiBTYWZhcmkgOSwgdGh1cyB0aHJvd2luZyBhbmQgZmFpbGluZyB0aGVcbi8vIGRhdGEuXG5mdW5jdGlvbiBWTWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pIHtcbiAgdmFyIHBhcnRzXG4gIHZhciByYW5nZVxuICB2YXIgbG9jYXRpb25cblxuICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnc3RyaW5nJykge1xuICAgIG9yaWdpbiA9IHBvc2l0aW9uXG4gICAgcG9zaXRpb24gPSBudWxsXG4gIH1cblxuICBwYXJ0cyA9IHBhcnNlT3JpZ2luKG9yaWdpbilcbiAgcmFuZ2UgPSBzdHJpbmdpZnkocG9zaXRpb24pIHx8ICcxOjEnXG5cbiAgbG9jYXRpb24gPSB7XG4gICAgc3RhcnQ6IHtsaW5lOiBudWxsLCBjb2x1bW46IG51bGx9LFxuICAgIGVuZDoge2xpbmU6IG51bGwsIGNvbHVtbjogbnVsbH1cbiAgfVxuXG4gIC8vIE5vZGUuXG4gIGlmIChwb3NpdGlvbiAmJiBwb3NpdGlvbi5wb3NpdGlvbikge1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24ucG9zaXRpb25cbiAgfVxuXG4gIGlmIChwb3NpdGlvbikge1xuICAgIC8vIFBvc2l0aW9uLlxuICAgIGlmIChwb3NpdGlvbi5zdGFydCkge1xuICAgICAgbG9jYXRpb24gPSBwb3NpdGlvblxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zdGFydFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQb2ludC5cbiAgICAgIGxvY2F0aW9uLnN0YXJ0ID0gcG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpZiAocmVhc29uLnN0YWNrKSB7XG4gICAgdGhpcy5zdGFjayA9IHJlYXNvbi5zdGFja1xuICAgIHJlYXNvbiA9IHJlYXNvbi5tZXNzYWdlXG4gIH1cblxuICB0aGlzLm1lc3NhZ2UgPSByZWFzb25cbiAgdGhpcy5uYW1lID0gcmFuZ2VcbiAgdGhpcy5yZWFzb24gPSByZWFzb25cbiAgdGhpcy5saW5lID0gcG9zaXRpb24gPyBwb3NpdGlvbi5saW5lIDogbnVsbFxuICB0aGlzLmNvbHVtbiA9IHBvc2l0aW9uID8gcG9zaXRpb24uY29sdW1uIDogbnVsbFxuICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgdGhpcy5zb3VyY2UgPSBwYXJ0c1swXVxuICB0aGlzLnJ1bGVJZCA9IHBhcnRzWzFdXG59XG5cbmZ1bmN0aW9uIHBhcnNlT3JpZ2luKG9yaWdpbikge1xuICB2YXIgcmVzdWx0ID0gW251bGwsIG51bGxdXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2Ygb3JpZ2luID09PSAnc3RyaW5nJykge1xuICAgIGluZGV4ID0gb3JpZ2luLmluZGV4T2YoJzonKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmVzdWx0WzFdID0gb3JpZ2luXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFswXSA9IG9yaWdpbi5zbGljZSgwLCBpbmRleClcbiAgICAgIHJlc3VsdFsxXSA9IG9yaWdpbi5zbGljZShpbmRleCArIDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG52YXIgcmVwbGFjZSA9IHJlcXVpcmUoJ3JlcGxhY2UtZXh0JylcbnZhciBidWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZGaWxlXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxudmFyIHByb3RvID0gVkZpbGUucHJvdG90eXBlXG5cbi8vIE9yZGVyIG9mIHNldHRpbmcgKGxlYXN0IHNwZWNpZmljIHRvIG1vc3QpLCB3ZSBuZWVkIHRoaXMgYmVjYXVzZSBvdGhlcndpc2Vcbi8vIGB7c3RlbTogJ2EnLCBwYXRoOiAnfi9iLmpzJ31gIHdvdWxkIHRocm93LCBhcyBhIHBhdGggaXMgbmVlZGVkIGJlZm9yZSBhXG4vLyBzdGVtIGNhbiBiZSBzZXQuXG52YXIgb3JkZXIgPSBbJ2hpc3RvcnknLCAncGF0aCcsICdiYXNlbmFtZScsICdzdGVtJywgJ2V4dG5hbWUnLCAnZGlybmFtZSddXG5cbnByb3RvLnRvU3RyaW5nID0gdG9TdHJpbmdcblxuLy8gQWNjZXNzIGZ1bGwgcGF0aCAoYH4vaW5kZXgubWluLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdwYXRoJywge2dldDogZ2V0UGF0aCwgc2V0OiBzZXRQYXRofSlcblxuLy8gQWNjZXNzIHBhcmVudCBwYXRoIChgfmApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnZGlybmFtZScsIHtnZXQ6IGdldERpcm5hbWUsIHNldDogc2V0RGlybmFtZX0pXG5cbi8vIEFjY2VzcyBiYXNlbmFtZSAoYGluZGV4Lm1pbi5qc2ApLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnYmFzZW5hbWUnLCB7Z2V0OiBnZXRCYXNlbmFtZSwgc2V0OiBzZXRCYXNlbmFtZX0pXG5cbi8vIEFjY2VzcyBleHRuYW1lIChgLmpzYCkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdleHRuYW1lJywge2dldDogZ2V0RXh0bmFtZSwgc2V0OiBzZXRFeHRuYW1lfSlcblxuLy8gQWNjZXNzIHN0ZW0gKGBpbmRleC5taW5gKS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3N0ZW0nLCB7Z2V0OiBnZXRTdGVtLCBzZXQ6IHNldFN0ZW19KVxuXG4vLyBDb25zdHJ1Y3QgYSBuZXcgZmlsZS5cbmZ1bmN0aW9uIFZGaWxlKG9wdGlvbnMpIHtcbiAgdmFyIHByb3BcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgfHwgYnVmZmVyKG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucyA9IHtjb250ZW50czogb3B0aW9uc31cbiAgfSBlbHNlIGlmICgnbWVzc2FnZScgaW4gb3B0aW9ucyAmJiAnbWVzc2FnZXMnIGluIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZGaWxlKSkge1xuICAgIHJldHVybiBuZXcgVkZpbGUob3B0aW9ucylcbiAgfVxuXG4gIHRoaXMuZGF0YSA9IHt9XG4gIHRoaXMubWVzc2FnZXMgPSBbXVxuICB0aGlzLmhpc3RvcnkgPSBbXVxuICB0aGlzLmN3ZCA9IHByb2Nlc3MuY3dkKClcblxuICAvLyBTZXQgcGF0aCByZWxhdGVkIHByb3BlcnRpZXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuXG4gIGluZGV4ID0gLTFcbiAgbGVuZ3RoID0gb3JkZXIubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwcm9wID0gb3JkZXJbaW5kZXhdXG5cbiAgICBpZiAob3duLmNhbGwob3B0aW9ucywgcHJvcCkpIHtcbiAgICAgIHRoaXNbcHJvcF0gPSBvcHRpb25zW3Byb3BdXG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IG5vbi1wYXRoIHJlbGF0ZWQgcHJvcGVydGllcy5cbiAgZm9yIChwcm9wIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3JkZXIuaW5kZXhPZihwcm9wKSA9PT0gLTEpIHtcbiAgICAgIHRoaXNbcHJvcF0gPSBvcHRpb25zW3Byb3BdXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhdGgoKSB7XG4gIHJldHVybiB0aGlzLmhpc3RvcnlbdGhpcy5oaXN0b3J5Lmxlbmd0aCAtIDFdXG59XG5cbmZ1bmN0aW9uIHNldFBhdGgocGF0aCkge1xuICBhc3NlcnROb25FbXB0eShwYXRoLCAncGF0aCcpXG5cbiAgaWYgKHBhdGggIT09IHRoaXMucGF0aCkge1xuICAgIHRoaXMuaGlzdG9yeS5wdXNoKHBhdGgpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGlybmFtZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5kaXJuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0RGlybmFtZShkaXJuYW1lKSB7XG4gIGFzc2VydFBhdGgodGhpcy5wYXRoLCAnZGlybmFtZScpXG4gIHRoaXMucGF0aCA9IHBhdGguam9pbihkaXJuYW1lIHx8ICcnLCB0aGlzLmJhc2VuYW1lKVxufVxuXG5mdW5jdGlvbiBnZXRCYXNlbmFtZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5iYXNlbmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHNldEJhc2VuYW1lKGJhc2VuYW1lKSB7XG4gIGFzc2VydE5vbkVtcHR5KGJhc2VuYW1lLCAnYmFzZW5hbWUnKVxuICBhc3NlcnRQYXJ0KGJhc2VuYW1lLCAnYmFzZW5hbWUnKVxuICB0aGlzLnBhdGggPSBwYXRoLmpvaW4odGhpcy5kaXJuYW1lIHx8ICcnLCBiYXNlbmFtZSlcbn1cblxuZnVuY3Rpb24gZ2V0RXh0bmFtZSgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzLnBhdGggPT09ICdzdHJpbmcnID8gcGF0aC5leHRuYW1lKHRoaXMucGF0aCkgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0RXh0bmFtZShleHRuYW1lKSB7XG4gIHZhciBleHQgPSBleHRuYW1lIHx8ICcnXG5cbiAgYXNzZXJ0UGFydChleHQsICdleHRuYW1lJylcbiAgYXNzZXJ0UGF0aCh0aGlzLnBhdGgsICdleHRuYW1lJylcblxuICBpZiAoZXh0KSB7XG4gICAgaWYgKGV4dC5jaGFyQXQoMCkgIT09ICcuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZXh0bmFtZWAgbXVzdCBzdGFydCB3aXRoIGAuYCcpXG4gICAgfVxuXG4gICAgaWYgKGV4dC5pbmRleE9mKCcuJywgMSkgIT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BleHRuYW1lYCBjYW5ub3QgY29udGFpbiBtdWx0aXBsZSBkb3RzJylcbiAgICB9XG4gIH1cblxuICB0aGlzLnBhdGggPSByZXBsYWNlKHRoaXMucGF0aCwgZXh0KVxufVxuXG5mdW5jdGlvbiBnZXRTdGVtKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZydcbiAgICA/IHBhdGguYmFzZW5hbWUodGhpcy5wYXRoLCB0aGlzLmV4dG5hbWUpXG4gICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gc2V0U3RlbShzdGVtKSB7XG4gIGFzc2VydE5vbkVtcHR5KHN0ZW0sICdzdGVtJylcbiAgYXNzZXJ0UGFydChzdGVtLCAnc3RlbScpXG4gIHRoaXMucGF0aCA9IHBhdGguam9pbih0aGlzLmRpcm5hbWUgfHwgJycsIHN0ZW0gKyAodGhpcy5leHRuYW1lIHx8ICcnKSlcbn1cblxuLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgZmlsZS5cbmZ1bmN0aW9uIHRvU3RyaW5nKGVuY29kaW5nKSB7XG4gIHZhciB2YWx1ZSA9IHRoaXMuY29udGVudHMgfHwgJydcbiAgcmV0dXJuIGJ1ZmZlcih2YWx1ZSkgPyB2YWx1ZS50b1N0cmluZyhlbmNvZGluZykgOiBTdHJpbmcodmFsdWUpXG59XG5cbi8vIEFzc2VydCB0aGF0IGBwYXJ0YCBpcyBub3QgYSBwYXRoIChpLmUuLCBkb2VzIG5vdCBjb250YWluIGBwYXRoLnNlcGApLlxuZnVuY3Rpb24gYXNzZXJ0UGFydChwYXJ0LCBuYW1lKSB7XG4gIGlmIChwYXJ0LmluZGV4T2YocGF0aC5zZXApICE9PSAtMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdgJyArIG5hbWUgKyAnYCBjYW5ub3QgYmUgYSBwYXRoOiBkaWQgbm90IGV4cGVjdCBgJyArIHBhdGguc2VwICsgJ2AnXG4gICAgKVxuICB9XG59XG5cbi8vIEFzc2VydCB0aGF0IGBwYXJ0YCBpcyBub3QgZW1wdHkuXG5mdW5jdGlvbiBhc3NlcnROb25FbXB0eShwYXJ0LCBuYW1lKSB7XG4gIGlmICghcGFydCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBuYW1lICsgJ2AgY2Fubm90IGJlIGVtcHR5JylcbiAgfVxufVxuXG4vLyBBc3NlcnQgYHBhdGhgIGV4aXN0cy5cbmZ1bmN0aW9uIGFzc2VydFBhdGgocGF0aCwgbmFtZSkge1xuICBpZiAoIXBhdGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NldHRpbmcgYCcgKyBuYW1lICsgJ2AgcmVxdWlyZXMgYHBhdGhgIHRvIGJlIHNldCB0b28nKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIFZNZXNzYWdlID0gcmVxdWlyZSgndmZpbGUtbWVzc2FnZScpXG52YXIgVkZpbGUgPSByZXF1aXJlKCcuL2NvcmUuanMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZGaWxlXG5cbnZhciBwcm90byA9IFZGaWxlLnByb3RvdHlwZVxuXG5wcm90by5tZXNzYWdlID0gbWVzc2FnZVxucHJvdG8uaW5mbyA9IGluZm9cbnByb3RvLmZhaWwgPSBmYWlsXG5cbi8vIENyZWF0ZSBhIG1lc3NhZ2Ugd2l0aCBgcmVhc29uYCBhdCBgcG9zaXRpb25gLlxuLy8gV2hlbiBhbiBlcnJvciBpcyBwYXNzZWQgaW4gYXMgYHJlYXNvbmAsIGNvcGllcyB0aGUgc3RhY2suXG5mdW5jdGlvbiBtZXNzYWdlKHJlYXNvbiwgcG9zaXRpb24sIG9yaWdpbikge1xuICB2YXIgZmlsZVBhdGggPSB0aGlzLnBhdGhcbiAgdmFyIG1lc3NhZ2UgPSBuZXcgVk1lc3NhZ2UocmVhc29uLCBwb3NpdGlvbiwgb3JpZ2luKVxuXG4gIGlmIChmaWxlUGF0aCkge1xuICAgIG1lc3NhZ2UubmFtZSA9IGZpbGVQYXRoICsgJzonICsgbWVzc2FnZS5uYW1lXG4gICAgbWVzc2FnZS5maWxlID0gZmlsZVBhdGhcbiAgfVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSBmYWxzZVxuXG4gIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKVxuXG4gIHJldHVybiBtZXNzYWdlXG59XG5cbi8vIEZhaWw6IGNyZWF0ZXMgYSB2bWVzc2FnZSwgYXNzb2NpYXRlcyBpdCB3aXRoIHRoZSBmaWxlLCBhbmQgdGhyb3dzIGl0LlxuZnVuY3Rpb24gZmFpbCgpIHtcbiAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuXG4gIG1lc3NhZ2UuZmF0YWwgPSB0cnVlXG5cbiAgdGhyb3cgbWVzc2FnZVxufVxuXG4vLyBJbmZvOiBjcmVhdGVzIGEgdm1lc3NhZ2UsIGFzc29jaWF0ZXMgaXQgd2l0aCB0aGUgZmlsZSwgYW5kIG1hcmtzIHRoZSBmYXRhbGl0eVxuLy8gYXMgbnVsbC5cbmZ1bmN0aW9uIGluZm8oKSB7XG4gIHZhciBtZXNzYWdlID0gdGhpcy5tZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcblxuICBtZXNzYWdlLmZhdGFsID0gbnVsbFxuXG4gIHJldHVybiBtZXNzYWdlXG59XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcblxuaW1wb3J0IHBhdGhzIGZyb20gXCIuLi9jb25zdGFudHMvcGF0aHNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmZ1bmN0aW9uIEhvbWUoeyBsYW5kaW5nQ29udGVudCB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCBjdXJyZW50UGFnZT17cGF0aHMubGFuZGluZy5pZH0+XG4gICAgICAgICAgICA8UmVhY3RNYXJrZG93biBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfSBzb3VyY2U9e2xhbmRpbmdDb250ZW50fS8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IGltcG9ydChgLi4vY29udGVudC9sYW5kaW5nLm1kYCk7XG4gICAgcmV0dXJuIHsgbGFuZGluZ0NvbnRlbnQ6IGZpbGVDb250ZW50cy5kZWZhdWx0IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2luZGV4Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vaW5kZXgubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9pbmRleC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=
webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/paths */ "./constants/paths.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");



var _jsxFileName = "/home/owen/github.com/owenlow/owenlow.github.io/pages/index.js";





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
            landingContent: fileContents
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
function Home(_ref2) {
  var landingContent = _ref2.landingContent;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentPage: _constants_paths__WEBPACK_IMPORTED_MODULE_6__["default"].landing.id,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.contentContainer,
      source: landingContent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}
_c = Home;
;

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImdldEluaXRpYWxQcm9wcyIsImZpbGVDb250ZW50cyIsImxhbmRpbmdDb250ZW50IiwicGF0aHMiLCJsYW5kaW5nIiwiaWQiLCJzdHlsZXMiLCJjb250ZW50Q29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQUEsSUFBSSxDQUFDQyxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNRLGtJQURSOztBQUFBO0FBQ2JDLHNCQURhO0FBQUEsMkNBR1o7QUFBRUMsMEJBQWMsRUFBRUQ7QUFBbEIsV0FIWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQU1lLFNBQVNGLElBQVQsUUFBa0M7QUFBQSxNQUFsQkcsY0FBa0IsU0FBbEJBLGNBQWtCO0FBQzdDLHNCQUNJLHFFQUFDLDBEQUFEO0FBQVEsZUFBVyxFQUFFQyx3REFBSyxDQUFDQyxPQUFOLENBQWNDLEVBQW5DO0FBQUEsMkJBQ0kscUVBQUMscURBQUQ7QUFBZSxlQUFTLEVBQUVDLHdEQUFNLENBQUNDLGdCQUFqQztBQUFtRCxZQUFNLEVBQUVMO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDtLQU51QkgsSTtBQU12QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMzllODFhZTQ5NDlmY2RlNmUxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuXG5pbXBvcnQgcGF0aHMgZnJvbSBcIi4uL2NvbnN0YW50cy9wYXRoc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgaW1wb3J0KGAuLi9jb250ZW50L2xhbmRpbmcubWRgKTtcbiAgICAvLyBjb25zdCBkYXRhID0gbWF0dGVyKGZpbGVDb250ZW50cy5kZWZhdWx0KTtcbiAgICByZXR1cm4geyBsYW5kaW5nQ29udGVudDogZmlsZUNvbnRlbnRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgbGFuZGluZ0NvbnRlbnQgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgY3VycmVudFBhZ2U9e3BhdGhzLmxhbmRpbmcuaWR9PlxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0gc291cmNlPXtsYW5kaW5nQ29udGVudH0vPlxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
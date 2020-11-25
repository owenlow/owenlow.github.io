webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncIterator */ "./node_modules/@babel/runtime/helpers/esm/asyncIterator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gray-matter */ "./node_modules/gray-matter/index.js");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_paths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/paths */ "./constants/paths.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");





var _jsxFileName = "/home/owen/github.com/owenlow/owenlow.github.io/pages/projects.js";




var postNames = ['firstPost'];

function Projects(_ref) {
  var _this = this;

  var allPosts = _ref.allPosts;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentPage: _constants_paths__WEBPACK_IMPORTED_MODULE_6__["default"].projects.id,
    children: allPosts.map(function (_ref2) {
      var content = _ref2.content,
          data = _ref2.data;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
          children: data.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
          source: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, _this)]
      }, void 0, true);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_c = Projects;
Projects.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var allPosts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, fileName, fileContents, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          allPosts = [];
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _context.prev = 3;
          _iterator = Object(_babel_runtime_helpers_esm_asyncIterator__WEBPACK_IMPORTED_MODULE_2__["default"])(postNames);

        case 5:
          _context.next = 7;
          return _iterator.next();

        case 7:
          _step = _context.sent;
          _iteratorNormalCompletion = _step.done;
          _context.next = 11;
          return _step.value;

        case 11:
          _value = _context.sent;

          if (_iteratorNormalCompletion) {
            _context.next = 22;
            break;
          }

          fileName = _value;
          _context.next = 16;
          return __webpack_require__("./content lazy recursive ^\\.\\/.*\\.md$")("./".concat(fileName, ".md"));

        case 16:
          fileContents = _context.sent;
          data = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(fileContents["default"]);
          allPosts.push(data);

        case 19:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 22:
          _context.next = 28;
          break;

        case 24:
          _context.prev = 24;
          _context.t0 = _context["catch"](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 28:
          _context.prev = 28;
          _context.prev = 29;

          if (!(!_iteratorNormalCompletion && _iterator["return"] != null)) {
            _context.next = 33;
            break;
          }

          _context.next = 33;
          return _iterator["return"]();

        case 33:
          _context.prev = 33;

          if (!_didIteratorError) {
            _context.next = 36;
            break;
          }

          throw _iteratorError;

        case 36:
          return _context.finish(33);

        case 37:
          return _context.finish(28);

        case 38:
          return _context.abrupt("return", {
            allPosts: allPosts
          });

        case 39:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[3, 24, 28, 38], [29,, 33, 37]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOlsicG9zdE5hbWVzIiwiUHJvamVjdHMiLCJhbGxQb3N0cyIsInBhdGhzIiwicHJvamVjdHMiLCJpZCIsIm1hcCIsImNvbnRlbnQiLCJkYXRhIiwidGl0bGUiLCJnZXRJbml0aWFsUHJvcHMiLCJmaWxlTmFtZSIsImZpbGVDb250ZW50cyIsIm1hdHRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDZCxXQURjLENBQWxCOztBQUlBLFNBQVNDLFFBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDNUIsc0JBQ0kscUVBQUMsMERBQUQ7QUFBUSxlQUFXLEVBQUVDLHdEQUFLLENBQUNDLFFBQU4sQ0FBZUMsRUFBcEM7QUFBQSxjQUNLSCxRQUFRLENBQUNJLEdBQVQsQ0FBYTtBQUFBLFVBQUdDLE9BQUgsU0FBR0EsT0FBSDtBQUFBLFVBQVlDLElBQVosU0FBWUEsSUFBWjtBQUFBLDBCQUNWO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS0EsSUFBSSxDQUFDQztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyxxREFBRDtBQUFlLGdCQUFNLEVBQUVGO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQSxzQkFEVTtBQUFBLEtBQWI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFVSDs7S0FYUU4sUTtBQWFUQSxRQUFRLENBQUNTLGVBQVQsaU1BQTJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJSLGtCQURpQixHQUNOLEVBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSwrR0FFTUYsU0FGTjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVOVyxrQkFGTTtBQUFBO0FBQUEsaUJBR1EsZ0VBQU8sWUFBY0EsUUFBckIsU0FIUjs7QUFBQTtBQUdiQyxzQkFIYTtBQUliSixjQUphLEdBSU5LLGtEQUFNLENBQUNELFlBQVksV0FBYixDQUpBO0FBS25CVixrQkFBUSxDQUFDWSxJQUFULENBQWNOLElBQWQ7O0FBTG1CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsMkNBT2hCO0FBQUVOLG9CQUFRLEVBQVJBO0FBQUYsV0FQZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFVZUQsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuMjMwNTE0YjE3ZmExYjc3YjUwOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcclxuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XHJcbmltcG9ydCBwYXRocyBmcm9tIFwiLi4vY29uc3RhbnRzL3BhdGhzXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5jb25zdCBwb3N0TmFtZXMgPSBbXHJcbiAgICAnZmlyc3RQb3N0J1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gUHJvamVjdHMoeyBhbGxQb3N0cyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQgY3VycmVudFBhZ2U9e3BhdGhzLnByb2plY3RzLmlkfT5cclxuICAgICAgICAgICAge2FsbFBvc3RzLm1hcCgoeyBjb250ZW50LCBkYXRhIH0pID0+XHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17Y29udGVudH0vPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcblByb2plY3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGFsbFBvc3RzID0gW107XHJcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGZpbGVOYW1lIG9mIHBvc3ROYW1lcykge1xyXG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGF3YWl0IGltcG9ydChgLi4vY29udGVudC8ke2ZpbGVOYW1lfS5tZGApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzLmRlZmF1bHQpO1xyXG4gICAgICAgIGFsbFBvc3RzLnB1c2goZGF0YSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBhbGxQb3N0cyB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
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





function Post(_ref) {
  var content = _ref.content,
      data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
      children: data.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
      source: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_c = Post;
var postNames = [// '2020-11-25',
'firstPost'];
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
function Projects(_ref3) {
  var _this = this;

  var allPosts = _ref3.allPosts;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    currentPage: _constants_paths__WEBPACK_IMPORTED_MODULE_6__["default"].projects.id,
    children: allPosts.map(function (_ref4) {
      var content = _ref4.content,
          data = _ref4.data;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Post, {
        content: content,
        data: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}
_c2 = Projects;
;

var _c, _c2;

$RefreshReg$(_c, "Post");
$RefreshReg$(_c2, "Projects");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanMiXSwibmFtZXMiOlsiUG9zdCIsImNvbnRlbnQiLCJkYXRhIiwidGl0bGUiLCJwb3N0TmFtZXMiLCJQcm9qZWN0cyIsImdldEluaXRpYWxQcm9wcyIsImFsbFBvc3RzIiwiZmlsZU5hbWUiLCJmaWxlQ29udGVudHMiLCJtYXR0ZXIiLCJwdXNoIiwicGF0aHMiLCJwcm9qZWN0cyIsImlkIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULE9BQWlDO0FBQUEsTUFBakJDLE9BQWlCLFFBQWpCQSxPQUFpQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUM3QixzQkFDSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxxREFBRDtBQUFlLFlBQU0sRUFBRUY7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUEsa0JBREo7QUFNSDs7S0FQUUQsSTtBQVNULElBQU1JLFNBQVMsR0FBRyxDQUNkO0FBQ0EsV0FGYyxDQUFsQjtBQUtBQyxRQUFRLENBQUNDLGVBQVQsaU1BQTJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLGtCQURpQixHQUNOLEVBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSwrR0FFTUgsU0FGTjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVOSSxrQkFGTTtBQUFBO0FBQUEsaUJBR1EsZ0VBQU8sWUFBY0EsUUFBckIsU0FIUjs7QUFBQTtBQUdiQyxzQkFIYTtBQUliUCxjQUphLEdBSU5RLGtEQUFNLENBQUNELFlBQVksV0FBYixDQUpBO0FBS25CRixrQkFBUSxDQUFDSSxJQUFULENBQWNULElBQWQ7O0FBTG1CO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsMkNBT2hCO0FBQUVLLG9CQUFRLEVBQVJBO0FBQUYsV0FQZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBM0I7QUFVZSxTQUFTRixRQUFULFFBQWdDO0FBQUE7O0FBQUEsTUFBWkUsUUFBWSxTQUFaQSxRQUFZO0FBQzNDLHNCQUNJLHFFQUFDLDBEQUFEO0FBQVEsZUFBVyxFQUFFSyx3REFBSyxDQUFDQyxRQUFOLENBQWVDLEVBQXBDO0FBQUEsY0FDS1AsUUFBUSxDQUFDUSxHQUFULENBQWE7QUFBQSxVQUFHZCxPQUFILFNBQUdBLE9BQUg7QUFBQSxVQUFZQyxJQUFaLFNBQVlBLElBQVo7QUFBQSwwQkFDVixxRUFBQyxJQUFEO0FBQU0sZUFBTyxFQUFFRCxPQUFmO0FBQXdCLFlBQUksRUFBRUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUEsS0FBYjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IO01BUnVCRyxRO0FBUXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzLmUyYmEzZTQyN2I1NjU5NzdjOWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xyXG5pbXBvcnQgcGF0aHMgZnJvbSBcIi4uL2NvbnN0YW50cy9wYXRoc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5cclxuZnVuY3Rpb24gUG9zdCh7IGNvbnRlbnQsIGRhdGEgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+e2RhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtjb250ZW50fS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBwb3N0TmFtZXMgPSBbXHJcbiAgICAvLyAnMjAyMC0xMS0yNScsXHJcbiAgICAnZmlyc3RQb3N0J1xyXG5dO1xyXG5cclxuUHJvamVjdHMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgYWxsUG9zdHMgPSBbXTtcclxuICAgIGZvciBhd2FpdCAoY29uc3QgZmlsZU5hbWUgb2YgcG9zdE5hbWVzKSB7XHJcbiAgICAgICAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgaW1wb3J0KGAuLi9jb250ZW50LyR7ZmlsZU5hbWV9Lm1kYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG1hdHRlcihmaWxlQ29udGVudHMuZGVmYXVsdCk7XHJcbiAgICAgICAgYWxsUG9zdHMucHVzaChkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGFsbFBvc3RzIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKHsgYWxsUG9zdHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IGN1cnJlbnRQYWdlPXtwYXRocy5wcm9qZWN0cy5pZH0+XHJcbiAgICAgICAgICAgIHthbGxQb3N0cy5tYXAoKHsgY29udGVudCwgZGF0YSB9KSA9PlxyXG4gICAgICAgICAgICAgICAgPFBvc3QgY29udGVudD17Y29udGVudH0gZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
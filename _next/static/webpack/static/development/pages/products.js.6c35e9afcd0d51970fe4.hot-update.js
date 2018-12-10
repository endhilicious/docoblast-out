webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/elements/input/index.jsx":
/*!*********************************************!*\
  !*** ./components/elements/input/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Input = function Input(_ref) {
  var style = _ref.style,
      width = _ref.width,
      textAlign = _ref.textAlign,
      fontSize = _ref.fontSize,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["style", "width", "textAlign", "fontSize", "type"]);

  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(width ? "width: ".concat(width, "%;") : "width: 100%;", " text-align:", textAlign, ";padding:10px;font-size:", fontSize, "rem;box-sizing:border-box;", style, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9lbGVtZW50cy9pbnB1dC9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXVCIiwiZmlsZSI6Ii9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9lbGVtZW50cy9pbnB1dC9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJ1xuXG5jb25zdCBJbnB1dCA9ICh7IHN0eWxlLCB3aWR0aCwgdGV4dEFsaWduLCBmb250U2l6ZSwgdHlwZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBiYXNlU3R5bGUgPSBjc3NgXG4gICAgJHt3aWR0aCA/IGB3aWR0aDogJHsgd2lkdGggfSU7YDogYHdpZHRoOiAxMDAlO2B9XG4gICAgdGV4dC1hbGlnbjogJHsgdGV4dEFsaWduIH07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6JHsgZm9udFNpemUgfXJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICR7IHN0eWxlIH1cbiAgYFxuICByZXR1cm4gKFxuICAgIHR5cGUgPT09ICd0ZXh0LWFyZWEnXG4gICAgPyA8dGV4dGFyZWEgY2xhc3NOYW1lPXsgYmFzZVN0eWxlIH0gcm93cz1cIjVcIiB7IC4uLnByb3BzIH0+PC90ZXh0YXJlYT5cbiAgICA6IDxpbnB1dCBjbGFzc05hbWU9eyBiYXNlU3R5bGUgfSB0eXBlPXtwcm9wcy50eXBlfSB7IC4uLnByb3BzIH0vPlxuICApXG59XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dEFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb250U2l6ZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICd0ZXh0JyxcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIGZvbnRTaXplOiAwLjhcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiJdfQ== */");
  return type === 'text-area' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    className: baseStyle,
    rows: "5"
  }, props)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: baseStyle,
    type: props.type
  }, props));
};

Input.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Input.defaultProps = {
  type: 'text',
  textAlign: 'left',
  fontSize: 0.8
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=products.js.6c35e9afcd0d51970fe4.hot-update.js.map
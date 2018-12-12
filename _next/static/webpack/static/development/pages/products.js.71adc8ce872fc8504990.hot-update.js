webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/containers/gridLayouts/mainGrid.jsx":
/*!********************************************************!*\
  !*** ./components/containers/gridLayouts/mainGrid.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var MainFL = function MainFL(_ref) {
  var backgroundColor = _ref.backgroundColor,
      backgroundImage = _ref.backgroundImage,
      width = _ref.width,
      margin = _ref.margin,
      display = _ref.display,
      defaultHeight = _ref.defaultHeight,
      style = _ref.style,
      paddingRoot = _ref.paddingRoot,
      props = _objectWithoutProperties(_ref, ["backgroundColor", "backgroundImage", "width", "margin", "display", "defaultHeight", "style", "paddingRoot"]);

  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(width && "width: ".concat(typeof width === 'string' ? width : width + '%'), ";", backgroundColor && "background-color: ".concat(backgroundColor, ";"), ";margin:", typeof margin === 'string' ? margin : margin + '%', ";display:", display, ";", style, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL21haW5HcmlkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJdUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbWFpbkdyaWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3gsIGNzcyB9IGZyb20gJ2Vtb3Rpb24nXG5cbmNvbnN0IE1haW5GTCA9ICh7IGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZEltYWdlLCB3aWR0aCwgbWFyZ2luLCBkaXNwbGF5LCBkZWZhdWx0SGVpZ2h0LCAgc3R5bGUsIHBhZGRpbmdSb290LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcbiAgICAgICR7IHdpZHRoICYmIGB3aWR0aDogJHt0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnID8gd2lkdGggOiB3aWR0aCsnJScgfWB9O1xuICAgICAgJHsgYmFja2dyb3VuZENvbG9yICYmIGBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBiYWNrZ3JvdW5kQ29sb3IgfTtgIH07XG4gICAgICBtYXJnaW46ICR7IHR5cGVvZiBtYXJnaW4gPT09ICdzdHJpbmcnID8gbWFyZ2luIDogbWFyZ2luKyclJyB9O1xuICAgICAgZGlzcGxheTogJHsgZGlzcGxheSB9O1xuICAgICAgJHsgc3R5bGUgfTtcbiAgICBgXG4gIGNvbnN0IGRlZmF1dGxTdHlsZSA9IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAkeyBiYWNrZ3JvdW5kQ29sb3IgJiYgYGJhY2tncm91bmQtY29sb3I6ICR7IGJhY2tncm91bmRDb2xvciB9YH07XG4gICAgJHsgZGVmYXVsdEhlaWdodCAmJiBgaGVpZ2h0OiAwYCB9O1xuICAgICR7IGJhY2tncm91bmRJbWFnZSAmJiBgXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjcpLHJnYmEoMCwgMCwgMCwgMC43KSksdXJsKFwiJHsgYmFja2dyb3VuZEltYWdlIH1cIik7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBgfTtcbiAgICAkeyBwYWRkaW5nUm9vdCAmJiBgcGFkZGluZzogNTBweCAwcHhgIH07XG4gIGBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGRlZmF1dGxTdHlsZSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjeChiYXNlU3R5bGUsIHN0eWxlKSB9PlxuICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbk1haW5GTC5wcm9wVHlwZXMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2lkdGg6UHJvcFR5cGVzLnN0cmluZyB8fCBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXJnaW46UHJvcFR5cGVzLnN0cmluZyB8fCBQcm9wVHlwZXMubnVtYmVyLFxuICBkaXNwbGF5OlByb3BUeXBlcy5zdHJpbmcsXG59XG5cbk1haW5GTC5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbWFyZ2luOiAnMjBweCBhdXRvJyxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkZMXG4iXX0= */");
  var defautlStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("width:100%;float:left;", backgroundColor && "background-color: ".concat(backgroundColor), ";", defaultHeight && "height: 0", ";", backgroundImage && "\n      background: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(\"".concat(backgroundImage, "\");\n      background-size: cover;\n      background-repeat: no-repeat;\n    "), ";", paddingRoot && "padding: 50px 0px", ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL21haW5HcmlkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXMEIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbWFpbkdyaWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3gsIGNzcyB9IGZyb20gJ2Vtb3Rpb24nXG5cbmNvbnN0IE1haW5GTCA9ICh7IGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZEltYWdlLCB3aWR0aCwgbWFyZ2luLCBkaXNwbGF5LCBkZWZhdWx0SGVpZ2h0LCAgc3R5bGUsIHBhZGRpbmdSb290LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcbiAgICAgICR7IHdpZHRoICYmIGB3aWR0aDogJHt0eXBlb2Ygd2lkdGggPT09ICdzdHJpbmcnID8gd2lkdGggOiB3aWR0aCsnJScgfWB9O1xuICAgICAgJHsgYmFja2dyb3VuZENvbG9yICYmIGBiYWNrZ3JvdW5kLWNvbG9yOiAkeyBiYWNrZ3JvdW5kQ29sb3IgfTtgIH07XG4gICAgICBtYXJnaW46ICR7IHR5cGVvZiBtYXJnaW4gPT09ICdzdHJpbmcnID8gbWFyZ2luIDogbWFyZ2luKyclJyB9O1xuICAgICAgZGlzcGxheTogJHsgZGlzcGxheSB9O1xuICAgICAgJHsgc3R5bGUgfTtcbiAgICBgXG4gIGNvbnN0IGRlZmF1dGxTdHlsZSA9IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAkeyBiYWNrZ3JvdW5kQ29sb3IgJiYgYGJhY2tncm91bmQtY29sb3I6ICR7IGJhY2tncm91bmRDb2xvciB9YH07XG4gICAgJHsgZGVmYXVsdEhlaWdodCAmJiBgaGVpZ2h0OiAwYCB9O1xuICAgICR7IGJhY2tncm91bmRJbWFnZSAmJiBgXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjcpLHJnYmEoMCwgMCwgMCwgMC43KSksdXJsKFwiJHsgYmFja2dyb3VuZEltYWdlIH1cIik7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBgfTtcbiAgICAkeyBwYWRkaW5nUm9vdCAmJiBgcGFkZGluZzogNTBweCAwcHhgIH07XG4gIGBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGRlZmF1dGxTdHlsZSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjeChiYXNlU3R5bGUsIHN0eWxlKSB9PlxuICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbk1haW5GTC5wcm9wVHlwZXMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2lkdGg6UHJvcFR5cGVzLnN0cmluZyB8fCBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXJnaW46UHJvcFR5cGVzLnN0cmluZyB8fCBQcm9wVHlwZXMubnVtYmVyLFxuICBkaXNwbGF5OlByb3BUeXBlcy5zdHJpbmcsXG59XG5cbk1haW5GTC5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgbWFyZ2luOiAnMjBweCBhdXRvJyxcbiAgZGlzcGxheTogJ2Jsb2NrJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbkZMXG4iXX0= */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: defautlStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(baseStyle, style)
  }, props.children));
};

MainFL.propTypes = {
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string || prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string || prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
MainFL.defaultProps = {
  backgroundColor: 'transparent',
  width: '100%',
  margin: '20px auto',
  display: 'block'
};
/* harmony default export */ __webpack_exports__["default"] = (MainFL);

/***/ })

})
//# sourceMappingURL=products.js.71adc8ce872fc8504990.hot-update.js.map
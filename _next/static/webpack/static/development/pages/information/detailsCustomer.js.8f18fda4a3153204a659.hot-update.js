webpackHotUpdate("static/development/pages/information/detailsCustomer.js",{

/***/ "./pages/information/detailsCustomer.jsx":
/*!***********************************************!*\
  !*** ./pages/information/detailsCustomer.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactism_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactism/elements */ "./components/elements/index.jsx");
/* harmony import */ var reactism_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/layout */ "./components/pageLayouts/index.jsx");
/* harmony import */ var reactism_components_containers___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactism/components/containers/ */ "./components/containers/index.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/mainGrid */ "./components/containers/gridLayouts/mainGrid.jsx");








var Index = function Index() {
  var mainStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("@import url('https://fonts.googleapis.com/css?family=Ubuntu:100,100i,300,300i,400,400i,500,500i,700,700i');font-family:'Ubuntu',sans-serif;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvcGFnZXMvaW5mb3JtYXRpb24vZGV0YWlsc0N1c3RvbWVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRdUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9wYWdlcy9pbmZvcm1hdGlvbi9kZXRhaWxzQ3VzdG9tZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0aXNtL2VsZW1lbnRzJ1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSAncmVhY3Rpc20vbGF5b3V0J1xuaW1wb3J0IHsgT3VyRGV0YWlsc0NsaWVudCwgIEJhbm5lciB9IGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy8nXG5pbXBvcnQgTWFpbkdyaWQgIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9tYWluR3JpZCdcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TdHlsZSA9IGNzc2BcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVVidW50dToxMDAsMTAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw3MDAsNzAwaScpO1xuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgYFxuICBjb25zdCBqdW1ib1N0eWxlID0gY3NzYFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNykscmdiYSgwLCAwLCAwLCAwLjcpKSx1cmwoXCIvc3RhdGljL2ltYWdlX3BlbGFuZ2dhbi5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgYFxuICBjb25zdCBzdHlsZUNvbG9yVGV4dEhlYWRlciA9IGNzc2BcbiAgICBmb250LXdlaWdodDoxMDA7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgICBjb2xvcjojMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgIH1cbiAgYFxuICByZXR1cm4gKFxuICAgIDxNYWluTGF5b3V0IGNsYXNzTmFtZT17IG1haW5TdHlsZSB9IHN0eWxlQ29sb3JUZXh0SGVhZGVyPXsgc3R5bGVDb2xvclRleHRIZWFkZXIgfT5cbiAgICAgIDxNYWluR3JpZCBzdHlsZT17IGp1bWJvU3R5bGUgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrLWd1aWRlc1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19iYWNrX3BhZ2Uuc3ZnXCIgYWx0PVwiaWNfYmFja19wYWdlXCIvPlxuICAgICAgICAgIDxzcGFuPlBhbmR1YW48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluR3JpZD5cbiAgICAgIDxPdXJEZXRhaWxzQ2xpZW50IC8+XG4gICAgICA8QmFubmVyIC8+XG4gICAgICA8L01haW5MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */");
  var jumboStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("min-height:100vh;background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(\"/static/image_pelanggan.png\");background-size:cover;background-repeat:no-repeat;background-position:center;margin:0px;color:#fff;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvcGFnZXMvaW5mb3JtYXRpb24vZGV0YWlsc0N1c3RvbWVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZd0IiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9wYWdlcy9pbmZvcm1hdGlvbi9kZXRhaWxzQ3VzdG9tZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0aXNtL2VsZW1lbnRzJ1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSAncmVhY3Rpc20vbGF5b3V0J1xuaW1wb3J0IHsgT3VyRGV0YWlsc0NsaWVudCwgIEJhbm5lciB9IGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy8nXG5pbXBvcnQgTWFpbkdyaWQgIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9tYWluR3JpZCdcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TdHlsZSA9IGNzc2BcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVVidW50dToxMDAsMTAwaSwzMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw3MDAsNzAwaScpO1xuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgYFxuICBjb25zdCBqdW1ib1N0eWxlID0gY3NzYFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNykscmdiYSgwLCAwLCAwLCAwLjcpKSx1cmwoXCIvc3RhdGljL2ltYWdlX3BlbGFuZ2dhbi5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgYFxuICBjb25zdCBzdHlsZUNvbG9yVGV4dEhlYWRlciA9IGNzc2BcbiAgICBmb250LXdlaWdodDoxMDA7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCl7XG4gICAgICBjb2xvcjojMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgIH1cbiAgYFxuICByZXR1cm4gKFxuICAgIDxNYWluTGF5b3V0IGNsYXNzTmFtZT17IG1haW5TdHlsZSB9IHN0eWxlQ29sb3JUZXh0SGVhZGVyPXsgc3R5bGVDb2xvclRleHRIZWFkZXIgfT5cbiAgICAgIDxNYWluR3JpZCBzdHlsZT17IGp1bWJvU3R5bGUgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrLWd1aWRlc1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19iYWNrX3BhZ2Uuc3ZnXCIgYWx0PVwiaWNfYmFja19wYWdlXCIvPlxuICAgICAgICAgIDxzcGFuPlBhbmR1YW48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYWluR3JpZD5cbiAgICAgIDxPdXJEZXRhaWxzQ2xpZW50IC8+XG4gICAgICA8QmFubmVyIC8+XG4gICAgICA8L01haW5MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */");
  var styleColorTextHeader =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("font-weight:100;color:#fff;@media screen and (max-width:600px){color:#000;font-weight:500;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvcGFnZXMvaW5mb3JtYXRpb24vZGV0YWlsc0N1c3RvbWVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmtDIiwiZmlsZSI6Ii9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvcGFnZXMvaW5mb3JtYXRpb24vZGV0YWlsc0N1c3RvbWVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdGlzbS9lbGVtZW50cydcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gJ3JlYWN0aXNtL2xheW91dCdcbmltcG9ydCB7IE91ckRldGFpbHNDbGllbnQsICBCYW5uZXIgfSBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvJ1xuaW1wb3J0IE1haW5HcmlkICBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbWFpbkdyaWQnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBtYWluU3R5bGUgPSBjc3NgXG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHU6MTAwLDEwMGksMzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGknKTtcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gIGBcbiAgY29uc3QganVtYm9TdHlsZSA9IGNzc2BcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjcpLHJnYmEoMCwgMCwgMCwgMC43KSksdXJsKFwiL3N0YXRpYy9pbWFnZV9wZWxhbmdnYW4ucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIGBcbiAgY29uc3Qgc3R5bGVDb2xvclRleHRIZWFkZXIgPSBjc3NgXG4gICAgZm9udC13ZWlnaHQ6MTAwO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xuICAgICAgY29sb3I6IzAwMDtcbiAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgICB9XG4gIGBcbiAgcmV0dXJuIChcbiAgICA8TWFpbkxheW91dCBjbGFzc05hbWU9eyBtYWluU3R5bGUgfSBzdHlsZUNvbG9yVGV4dEhlYWRlcj17IHN0eWxlQ29sb3JUZXh0SGVhZGVyIH0+XG4gICAgICA8TWFpbkdyaWQgc3R5bGU9eyBqdW1ib1N0eWxlIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFjay1ndWlkZXNcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfYmFja19wYWdlLnN2Z1wiIGFsdD1cImljX2JhY2tfcGFnZVwiLz5cbiAgICAgICAgICA8c3Bhbj5QYW5kdWFuPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWFpbkdyaWQ+XG4gICAgICA8T3VyRGV0YWlsc0NsaWVudCAvPlxuICAgICAgPEJhbm5lciAvPlxuICAgICAgPC9NYWluTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: mainStyle,
    styleColorTextHeader: styleColorTextHeader
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: jumboStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "back-guides"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_back_page.svg",
    alt: "ic_back_page"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Panduan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers___WEBPACK_IMPORTED_MODULE_5__["OurDetailsClient"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers___WEBPACK_IMPORTED_MODULE_5__["Banner"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/information/detailsCustomer")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=detailsCustomer.js.8f18fda4a3153204a659.hot-update.js.map
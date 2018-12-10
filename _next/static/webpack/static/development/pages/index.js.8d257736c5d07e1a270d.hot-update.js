webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/containers/docoBlastProducts/partials/items.jsx":
/*!********************************************************************!*\
  !*** ./components/containers/docoBlastProducts/partials/items.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/mainGrid */ "./components/containers/gridLayouts/mainGrid.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");





var Items = function Items(props) {
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("min-height:360px;.spin-container{position:relative;text-align:center;}img.icons{margin:60px 50px;}img.spin{position:absolute;width:300px;animation-name:spin;animation-duration:5000ms;animation-iteration-count:infinite;animation-timing-function:linear;}img.spin1{transform:rotate(-180deg);width:300px;}img.spin2{transform:rotate(180deg);width:300px;}img.spin3{width:300px;}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}.doco-content{.title{font-size:2.5rem;font-weight:500;}.content{font-size:0.9rem;font-weight:100;line-height:24px;opacity:0.7;}}@media screen and (max-width:600px){.spin{left:0px;}img.spin1{transform:rotate(-180deg);width:250px;}img.spin2{transform:rotate(180deg);width:250px;}img.spin3{width:250px;}.doco-content{.title{margin-top:0px;text-align:center;}.content{text-align:justify;}}img.icons{margin:60px auto;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2RvY29CbGFzdFByb2R1Y3RzL3BhcnRpYWxzL2l0ZW1zLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJdUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvZG9jb0JsYXN0UHJvZHVjdHMvcGFydGlhbHMvaXRlbXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbic7XG5pbXBvcnQgTWFpbkdyaWQgIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9tYWluR3JpZCdcbmltcG9ydCBMaXN0R3JpZCAgZnJvbSAncmVhY3Rpc20vY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL2xpc3RHcmlkJ1xuY29uc3QgSXRlbXMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGJhc2VTdHlsZSA9IGNzc2BcbiAgICAvKiBtaW4taGVpZ2h0Ojgwdmg7XG4gICAgcGFkZGluZzogMTB2aCAwcHg7ICovXG4gICAgbWluLWhlaWdodDogMzYwcHg7XG4gICAgLnNwaW4tY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaW1nLmljb25zIHtcbiAgICAgIG1hcmdpbjogNjBweCA1MHB4O1xuICAgIH1cbiAgICBpbWcuc3BpbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwMG1zO1xuICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgfVxuICAgIGltZy5zcGluMSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICB9XG4gICAgaW1nLnNwaW4yIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuICAgIGltZy5zcGluMyB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICBmcm9tIHtcbiAgICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xuICAgICAgfVxuICAgICAgdG8ge1xuICAgICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcbiAgICAgIH1cbiAgfVxuICAuZG9jby1jb250ZW50IHtcbiAgICAudGl0bGV7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5zcGluIHtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICB9XG4gICAgaW1nLnNwaW4xIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgIH1cbiAgICBpbWcuc3BpbjIge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICB9XG4gICAgaW1nLnNwaW4zIHtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICB9XG4gICAgLmRvY28tY29udGVudCB7XG4gICAgICAudGl0bGV7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgfVxuICAgIH1cbiAgICBpbWcuaWNvbnMge1xuICAgICAgbWFyZ2luOiA2MHB4IGF1dG87XG4gICAgfVxuICB9XG4gIGBcbiAgcmV0dXJuIChcbiAgICA8TWFpbkdyaWQgd2lkdGg9ezgwfSBiYWNrZ3JvdW5kQ29sb3I9eyBwcm9wcy5iYWNrZ3JvdW5kIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGJhc2VTdHlsZSB9PlxuICAgICAgICA8TGlzdEdyaWQgY29scz17MTJ9IGZsb2F0PXtwcm9wcy5mbG9hdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGluLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzcGluIHNwaW4zXCIgc3JjPVwiL3N0YXRpYy9wYXRoMy5wbmdcIiBhbHQ9XCJiZ19ic18zXCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3BpbiBzcGluMlwiIHNyYz1cIi9zdGF0aWMvcGF0aDIucG5nXCIgYWx0PVwiYmdfYnNfMlwiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInNwaW4gc3BpbjFcIiBzcmM9XCIvc3RhdGljL3BhdGgxLnBuZ1wiIGFsdD1cImJnX2JzXzFcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpY29uc1wiIHdpZHRoPXsxNTB9IHNyYz17Jy9zdGF0aWMvJytwcm9wcy5pbWFnZX0gYWx0PVwiaW1hZ2UtZG9jb2JsYXN0XCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICA8TGlzdEdyaWQgY29scz17MTJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jby1jb250ZW50XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPntwcm9wcy50aXRsZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50XCI+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFNvbHV0YSBwbGFjZWF0IHF1YW0gb2JjYWVjYXRpPyBTb2x1dGEsIHZpdGFlISBJZCBldCBlcnJvciBmdWdhIGFjY3VzYW50aXVtIGNvcnJ1cHRpIHF1b3MgdmVsLCBjb25zZXF1dW50dXIgbmVxdWUgbWluaW1hIGl1cmUgYWxpcXVhbSwgdmVuaWFtLCBldmVuaWV0IGFuaW1pISBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gUXVpc3F1YW0gYXBlcmlhbSBmdWdpYXQgYW1ldCBleCBwcm92aWRlbnQgYWxpcXVpZCB2b2x1cHRhcywgbm9uIHJhdGlvbmUgaWQsIHRlbXBvcmlidXMgbmVzY2l1bnQgbGFib3Jpb3NhbSBtYWduaSBuYW0gcXVhc2kgZG9sb3JlcyBpc3RlIHVsbGFtIGN1cGlkaXRhdGUgaGFydW0uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgPC9kaXY+XG4gICAgPC9NYWluR3JpZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtc1xuIl19 */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    width: 80,
    backgroundColor: props.background
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cols: 12,
    float: props.float
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spin-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "spin spin3",
    src: "/static/path3.png",
    alt: "bg_bs_3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "spin spin2",
    src: "/static/path2.png",
    alt: "bg_bs_2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "spin spin1",
    src: "/static/path1.png",
    alt: "bg_bs_1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "icons",
    width: 150,
    src: '/static/' + props.image,
    alt: "image-docoblast"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cols: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doco-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content"
  }, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat quam obcaecati? Soluta, vitae! Id et error fuga accusantium corrupti quos vel, consequuntur neque minima iure aliquam, veniam, eveniet animi! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aperiam fugiat amet ex provident aliquid voluptas, non ratione id, temporibus nesciunt laboriosam magni nam quasi dolores iste ullam cupiditate harum.")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ })

})
//# sourceMappingURL=index.js.8d257736c5d07e1a270d.hot-update.js.map
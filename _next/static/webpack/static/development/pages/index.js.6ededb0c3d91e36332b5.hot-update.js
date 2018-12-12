webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/containers/showMore/index.jsx":
/*!**************************************************!*\
  !*** ./components/containers/showMore/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/mainGrid */ "./components/containers/gridLayouts/mainGrid.jsx");





var index = function index() {
  var mainStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("padding:50px 0px;.show-more{padding-top:0px;text-align:center;font-size:2rem;font-weight:500;}.doco-content{padding:0px 24px;.title{font-size:1.2rem;font-weight:500;}.content{font-size:0.85rem;opacity:0.7;line-height:24px;}}@media screen and (max-width:600px){.show-more{font-size:1.8rem;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL3Nob3dNb3JlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPdUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvc2hvd01vcmUvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJ1xuXG5pbXBvcnQgTGlzdEdyaWQgZnJvbSAncmVhY3Rpc20vY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL2xpc3RHcmlkJ1xuaW1wb3J0IE1haW5HcmlkIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9tYWluR3JpZCdcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TdHlsZSA9IGNzc2BcbiAgICAvKiBtaW4taGVpZ2h0OiA4NXZoOyAqL1xuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xuICAgIC5zaG93LW1vcmV7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmRvY28tY29udGVudHtcbiAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuICAgICAgLnRpdGxle1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50e1xuICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgIG9wYWNpdHk6MC43O1xuICAgICAgICBsaW5lLWhlaWdodDoyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgLnNob3ctbW9yZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICB9XG4gICAgfVxuICBgXG4gIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgbWFyZ2luOiAxNXB4IDElO1xuICAgIGJveC1zaGFkb3c6IDBweCA5cHggMzFweCAwcHggI2Q2ZDZkNjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYFxuICBjb25zdCBzdHlsZU1haW5HcmlkID0gY3NzYFxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xuICBgXG4gIHJldHVybiAoXG4gICAgPE1haW5HcmlkIHdpZHRoPXs4MH0gYmFja2dyb3VuZENvbG9yPVwiI0Y1RjdGQVwiIHN0eWxlPXsgc3R5bGVNYWluR3JpZCB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBtYWluU3R5bGUgfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic2hvdy1tb3JlXCI+TGloYXQgSnVnYSBMYWlubnlhPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaXN0R3JpZCAgY29scz17Ny41fSBzdHlsZT17IGJhY2tncm91bmRDb2xvciB9PlxuICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMCVcIiBzcmM9XCIvc3RhdGljL2ltYWdlX3Byb2R1a19kb2NvYi5wbmdcIiBhbHQ9XCJwcm9kdWstZG9jb2JcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY28tY29udGVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvY29CbGFzdDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEaXN0aW5jdGlvIHF1aWJ1c2RhbSBwZXJzcGljaWF0aXMgYWxpcXVhbSBhc3Blcm5hdHVyIHJlcGVsbGF0LCBmYWNpbGlzIHBsYWNlYXQgc29sdXRhIHNpbWlsaXF1ZSBkZWxlY3R1cyBhbmltaSA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgIDxMaXN0R3JpZCAgY29scz17Ny41fSBzdHlsZT17IGJhY2tncm91bmRDb2xvciB9PlxuICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMCVcIiBzcmM9XCIvc3RhdGljL2ltYWdlX3Byb2R1a19tZW5nYXBhLnBuZ1wiIGFsdD1cInByb2R1ay1kb2NvYlwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jby1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+TWVuZ2FwYSBEb2NvQmxhc3Q/PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERpc3RpbmN0aW8gcXVpYnVzZGFtIHBlcnNwaWNpYXRpcyBhbGlxdWFtIGFzcGVybmF0dXIgcmVwZWxsYXQsIGZhY2lsaXMgcGxhY2VhdCBzb2x1dGEgc2ltaWxpcXVlIGRlbGVjdHVzIGFuaW1pIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgICAgPExpc3RHcmlkICBjb2xzPXs3LjV9IHN0eWxlPXsgYmFja2dyb3VuZENvbG9yIH0+XG4gICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTAwJVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VfcHJvZHVrX21hbmZhYXQucG5nXCIgYWx0PVwicHJvZHVrLWRvY29iXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NvLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5NYW5mYWF0IEVtYWlsIE1hcmtldGluZzwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEaXN0aW5jdGlvIHF1aWJ1c2RhbSBwZXJzcGljaWF0aXMgYWxpcXVhbSBhc3Blcm5hdHVyIHJlcGVsbGF0LCBmYWNpbGlzIHBsYWNlYXQgc29sdXRhIHNpbWlsaXF1ZSBkZWxlY3R1cyBhbmltaSA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTWFpbkdyaWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcbiJdfQ== */");
  var backgroundColor =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("background-color:#fff;margin:15px 1%;box-shadow:0px 9px 31px 0px #d6d6d6;border-radius:6px;overflow:hidden;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL3Nob3dNb3JlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzZCIiwiZmlsZSI6Ii9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL3Nob3dNb3JlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcblxuaW1wb3J0IExpc3RHcmlkIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9saXN0R3JpZCdcbmltcG9ydCBNYWluR3JpZCBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbWFpbkdyaWQnXG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBtYWluU3R5bGUgPSBjc3NgXG4gICAgLyogbWluLWhlaWdodDogODV2aDsgKi9cbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgICAuc2hvdy1tb3Jle1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5kb2NvLWNvbnRlbnR7XG4gICAgICBwYWRkaW5nOiAwcHggMjRweDtcbiAgICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgICAuY29udGVudHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICBvcGFjaXR5OjAuNztcbiAgICAgICAgbGluZS1oZWlnaHQ6MjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIC5zaG93LW1vcmV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgfVxuICAgIH1cbiAgYFxuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgIG1hcmdpbjogMTVweCAxJTtcbiAgICBib3gtc2hhZG93OiAwcHggOXB4IDMxcHggMHB4ICNkNmQ2ZDY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIGBcbiAgY29uc3Qgc3R5bGVNYWluR3JpZCA9IGNzc2BcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgYFxuICByZXR1cm4gKFxuICAgIDxNYWluR3JpZCB3aWR0aD17ODB9IGJhY2tncm91bmRDb2xvcj1cIiNGNUY3RkFcIiBzdHlsZT17IHN0eWxlTWFpbkdyaWQgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbWFpblN0eWxlIH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInNob3ctbW9yZVwiPkxpaGF0IEp1Z2EgTGFpbm55YTwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGlzdEdyaWQgIGNvbHM9ezcuNX0gc3R5bGU9eyBiYWNrZ3JvdW5kQ29sb3IgfT5cbiAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZV9wcm9kdWtfZG9jb2IucG5nXCIgYWx0PVwicHJvZHVrLWRvY29iXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NvLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2NvQmxhc3Q8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGlzdGluY3RpbyBxdWlidXNkYW0gcGVyc3BpY2lhdGlzIGFsaXF1YW0gYXNwZXJuYXR1ciByZXBlbGxhdCwgZmFjaWxpcyBwbGFjZWF0IHNvbHV0YSBzaW1pbGlxdWUgZGVsZWN0dXMgYW5pbWkgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICA8TGlzdEdyaWQgIGNvbHM9ezcuNX0gc3R5bGU9eyBiYWNrZ3JvdW5kQ29sb3IgfT5cbiAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZV9wcm9kdWtfbWVuZ2FwYS5wbmdcIiBhbHQ9XCJwcm9kdWstZG9jb2JcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY28tY29udGVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPk1lbmdhcGEgRG9jb0JsYXN0PzwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEaXN0aW5jdGlvIHF1aWJ1c2RhbSBwZXJzcGljaWF0aXMgYWxpcXVhbSBhc3Blcm5hdHVyIHJlcGVsbGF0LCBmYWNpbGlzIHBsYWNlYXQgc29sdXRhIHNpbWlsaXF1ZSBkZWxlY3R1cyBhbmltaSA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgIDxMaXN0R3JpZCAgY29scz17Ny41fSBzdHlsZT17IGJhY2tncm91bmRDb2xvciB9PlxuICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMCVcIiBzcmM9XCIvc3RhdGljL2ltYWdlX3Byb2R1a19tYW5mYWF0LnBuZ1wiIGFsdD1cInByb2R1ay1kb2NvYlwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jby1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+TWFuZmFhdCBFbWFpbCBNYXJrZXRpbmc8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGlzdGluY3RpbyBxdWlidXNkYW0gcGVyc3BpY2lhdGlzIGFsaXF1YW0gYXNwZXJuYXR1ciByZXBlbGxhdCwgZmFjaWxpcyBwbGFjZWF0IHNvbHV0YSBzaW1pbGlxdWUgZGVsZWN0dXMgYW5pbWkgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L01haW5HcmlkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG4iXX0= */");
  var styleMainGrid =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("padding:50px 0px;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL3Nob3dNb3JlL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QzJCIiwiZmlsZSI6Ii9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL3Nob3dNb3JlL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcblxuaW1wb3J0IExpc3RHcmlkIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9saXN0R3JpZCdcbmltcG9ydCBNYWluR3JpZCBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbWFpbkdyaWQnXG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBtYWluU3R5bGUgPSBjc3NgXG4gICAgLyogbWluLWhlaWdodDogODV2aDsgKi9cbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgICAuc2hvdy1tb3Jle1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5kb2NvLWNvbnRlbnR7XG4gICAgICBwYWRkaW5nOiAwcHggMjRweDtcbiAgICAgIC50aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgICAuY29udGVudHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICBvcGFjaXR5OjAuNztcbiAgICAgICAgbGluZS1oZWlnaHQ6MjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIC5zaG93LW1vcmV7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgfVxuICAgIH1cbiAgYFxuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgIG1hcmdpbjogMTVweCAxJTtcbiAgICBib3gtc2hhZG93OiAwcHggOXB4IDMxcHggMHB4ICNkNmQ2ZDY7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIGBcbiAgY29uc3Qgc3R5bGVNYWluR3JpZCA9IGNzc2BcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgYFxuICByZXR1cm4gKFxuICAgIDxNYWluR3JpZCB3aWR0aD17ODB9IGJhY2tncm91bmRDb2xvcj1cIiNGNUY3RkFcIiBzdHlsZT17IHN0eWxlTWFpbkdyaWQgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbWFpblN0eWxlIH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInNob3ctbW9yZVwiPkxpaGF0IEp1Z2EgTGFpbm55YTwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGlzdEdyaWQgIGNvbHM9ezcuNX0gc3R5bGU9eyBiYWNrZ3JvdW5kQ29sb3IgfT5cbiAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZV9wcm9kdWtfZG9jb2IucG5nXCIgYWx0PVwicHJvZHVrLWRvY29iXCIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2NvLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2NvQmxhc3Q8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGlzdGluY3RpbyBxdWlidXNkYW0gcGVyc3BpY2lhdGlzIGFsaXF1YW0gYXNwZXJuYXR1ciByZXBlbGxhdCwgZmFjaWxpcyBwbGFjZWF0IHNvbHV0YSBzaW1pbGlxdWUgZGVsZWN0dXMgYW5pbWkgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICA8TGlzdEdyaWQgIGNvbHM9ezcuNX0gc3R5bGU9eyBiYWNrZ3JvdW5kQ29sb3IgfT5cbiAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZV9wcm9kdWtfbWVuZ2FwYS5wbmdcIiBhbHQ9XCJwcm9kdWstZG9jb2JcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY28tY29udGVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPk1lbmdhcGEgRG9jb0JsYXN0PzwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEaXN0aW5jdGlvIHF1aWJ1c2RhbSBwZXJzcGljaWF0aXMgYWxpcXVhbSBhc3Blcm5hdHVyIHJlcGVsbGF0LCBmYWNpbGlzIHBsYWNlYXQgc29sdXRhIHNpbWlsaXF1ZSBkZWxlY3R1cyBhbmltaSA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgIDxMaXN0R3JpZCAgY29scz17Ny41fSBzdHlsZT17IGJhY2tncm91bmRDb2xvciB9PlxuICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMCVcIiBzcmM9XCIvc3RhdGljL2ltYWdlX3Byb2R1a19tYW5mYWF0LnBuZ1wiIGFsdD1cInByb2R1ay1kb2NvYlwiLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jby1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+TWFuZmFhdCBFbWFpbCBNYXJrZXRpbmc8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnRcIj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGlzdGluY3RpbyBxdWlidXNkYW0gcGVyc3BpY2lhdGlzIGFsaXF1YW0gYXNwZXJuYXR1ciByZXBlbGxhdCwgZmFjaWxpcyBwbGFjZWF0IHNvbHV0YSBzaW1pbGlxdWUgZGVsZWN0dXMgYW5pbWkgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L01haW5HcmlkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG4iXX0= */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: 80,
    backgroundColor: "#F5F7FA",
    style: styleMainGrid
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: mainStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "show-more"
  }, "Lihat Juga Lainnya"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cols: 7.5,
    style: backgroundColor
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "100%",
    src: "/static/image_produk_docob.png",
    alt: "produk-docob"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doco-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "DocoBlast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content"
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quibusdam perspiciatis aliquam aspernatur repellat, facilis placeat soluta similique delectus animi "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cols: 7.5,
    style: backgroundColor
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "100%",
    src: "/static/image_produk_mengapa.png",
    alt: "produk-docob"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doco-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "Mengapa DocoBlast?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content"
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quibusdam perspiciatis aliquam aspernatur repellat, facilis placeat soluta similique delectus animi "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cols: 7.5,
    style: backgroundColor
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "100%",
    src: "/static/image_produk_manfaat.png",
    alt: "produk-docob"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doco-content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "Manfaat Email Marketing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content"
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quibusdam perspiciatis aliquam aspernatur repellat, facilis placeat soluta similique delectus animi "))))));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.6ededb0c3d91e36332b5.hot-update.js.map
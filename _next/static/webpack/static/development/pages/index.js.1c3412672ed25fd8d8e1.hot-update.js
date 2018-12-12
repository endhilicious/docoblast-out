webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/containers/home/pricing/partials/ListPrice.jsx":
/*!*******************************************************************!*\
  !*** ./components/containers/home/pricing/partials/ListPrice.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactism_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/elements */ "./components/elements/index.jsx");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ListPrice = function ListPrice(_ref) {
  var width = _ref.width,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["width", "style"]);

  var mainStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])("@import url('https://fonts.googleapis.com/css?family=Karla:100,100i,400,400i,500,500i,700,700i');font-family:'Karla',sans-serif;font-size:0.71rem;float:left;width:", width || "23%", ";display:block;margin:10px 1%;background-color:#fff;hr{border-width:0.51px;}.price-main{text-align:center;div p,div b{font-size:1.3rem;margin:10px;font-weight:700;}div span{font-size:1rem;}}.center{text-align:center;}.price-list-wrap{padding:10px 0px;}.price-list{padding:10px 0px;.icons{margin-top:-6px;padding:0px 10px;width:25px;float:left;}.details{padding:10px;}}@media screen and (max-width:600px){font-size:0.8rem;width:96%;}", style, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvcHJpY2luZy9wYXJ0aWFscy9MaXN0UHJpY2UuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU11QiIsImZpbGUiOiIvVXNlcnMvZW5kaS9Eb2N1bWVudHMvY29kaW5nL25leHQvcHJvamVjdC90ZXN0L2NvbXBvbmVudHMvY29udGFpbmVycy9ob21lL3ByaWNpbmcvcGFydGlhbHMvTGlzdFByaWNlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0aXNtL2VsZW1lbnRzJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcblxuY29uc3QgTGlzdFByaWNlID0gKHsgd2lkdGggLCBzdHlsZSwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBtYWluU3R5bGUgPSBjc3NgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthcmxhOjEwMCwxMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDcwMCw3MDBpJyk7XG4gICAgICBmb250LWZhbWlseTogJ0thcmxhJywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTowLjcxcmVtO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAvKiBoZWlnaHQ6IDM1MHB4OyAqL1xuICAgICAgd2lkdGg6ICR7IHdpZHRoIHx8IGAyMyVgfTtcblxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAvKiBwYWRkaW5nOiAxMHB4IDIlOyAqL1xuICAgICAgbWFyZ2luOiAxMHB4IDElO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGhyIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwLjUxcHg7XG4gICAgICB9XG4gICAgICAucHJpY2UtbWFpbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGl2IHAgLCBkaXYgYntcbiAgICAgICAgICBmb250LXNpemU6MS4zcmVtO1xuICAgICAgICAgIG1hcmdpbjoxMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLnByaWNlLWxpc3Qtd3JhcCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgfVxuICAgICAgLnByaWNlLWxpc3Qge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgLmljb25zIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBmb250LXNpemU6MC44cmVtO1xuICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgfVxuICAgICAgJHsgc3R5bGUgfTtcbiAgICBgXG4gIGNvbnN0IGJ1dHRvblN0eWxlID0gY3NzYFxuICAgIHdpZHRoOiA5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3OThEMTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IG1haW5TdHlsZSAgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbWFpblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPkdyYXRpczwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN1cD5ScC48L3N1cD48Yj4wPC9iPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ByaWNlLWxpc3Qtd3JhcCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmljZS1saXN0Jz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25zJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19oYXJnYV9lbWFpbC5zdmdcIiBhbHQ9XCJpbWdcIi8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlscyc+XG4gICAgICAgICAgICA8c3Bhbj4xLjAwMDwvc3Bhbj4gRW1haWwgLyBCdWxhblxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmljZS1saXN0Jz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25zJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19oYXJnYV9oYXJnYS5zdmdcIiBhbHQ9XCJpbWdcIi8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlscyc+SGFyZ2EgLyBFbWFpbCA8Yj5ScC4wPC9iPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoci8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGlzdFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbnMnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX2hhcmdhX3NlbGVjdC5zdmdcIiBhbHQ9XCJpbWdcIi8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlscyc+RG9tYWluIEtleXMgSWRlbnRpZmllZCBNYWlsPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1saXN0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29ucyc+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfaGFyZ2Ffc2VsZWN0LnN2Z1wiIGFsdD1cImltZ1wiLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXRhaWxzJz5TZW5kZXIgUG9saWN5IEZyYW1ld29yazwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGlzdFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbnMnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX2hhcmdhX3JlbW92ZS5zdmdcIiBhbHQ9XCJpbWdcIi8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlscyc+U2xpY2luZyBEZXNhaW4gdG8gSHRtbDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGlzdFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbnMnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX2hhcmdhX3JlbW92ZS5zdmdcIiBhbHQ9XCJpbWdcIi8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlscyc+Q3VzdG9tIFRlbXBsYXRlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgPEJ1dHRvbiBzdHlsZT17IGJ1dHRvblN0eWxlIH0+Q29iYSBHcmF0aXM8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgPHA+VWppIGNvYmEgZ3JhdGlzIDYwIGhhcmk8L3A+XG4gICAgICAgIHsvKjxwPmF0YXUgPExpbmsgaHJlZj1cIiNcIj48YT5MaWhhdCBwYWtldCBsYWlubnlhPC9hPjwvTGluaz48L3A+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdFByaWNlO1xuIl19 */");
  var buttonStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])("width:90%;background-color:#1798D1;color:#FFFFFF;font-size:0.8rem;font-weight:100;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvcHJpY2luZy9wYXJ0aWFscy9MaXN0UHJpY2UuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEeUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvaG9tZS9wcmljaW5nL3BhcnRpYWxzL0xpc3RQcmljZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdyZWFjdGlzbS9lbGVtZW50cydcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXG5cbmNvbnN0IExpc3RQcmljZSA9ICh7IHdpZHRoICwgc3R5bGUsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgbWFpblN0eWxlID0gY3NzYFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXJsYToxMDAsMTAwaSw0MDAsNDAwaSw1MDAsNTAwaSw3MDAsNzAwaScpO1xuICAgICAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6MC43MXJlbTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgLyogaGVpZ2h0OiAzNTBweDsgKi9cbiAgICAgIHdpZHRoOiAkeyB3aWR0aCB8fCBgMjMlYH07XG5cbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLyogcGFkZGluZzogMTBweCAyJTsgKi9cbiAgICAgIG1hcmdpbjogMTBweCAxJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBociB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMC41MXB4O1xuICAgICAgfVxuICAgICAgLnByaWNlLW1haW4ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpdiBwICwgZGl2IGJ7XG4gICAgICAgICAgZm9udC1zaXplOjEuM3JlbTtcbiAgICAgICAgICBtYXJnaW46MTBweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgICAgIGRpdiBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNlbnRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5wcmljZS1saXN0LXdyYXAge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5wcmljZS1saXN0IHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTZweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgZm9udC1zaXplOjAuOHJlbTtcbiAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgIH1cbiAgICAgICR7IHN0eWxlIH07XG4gICAgYFxuICBjb25zdCBidXR0b25TdHlsZSA9IGNzc2BcbiAgICB3aWR0aDogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzk4RDE7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBtYWluU3R5bGUgIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLW1haW5cIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5HcmF0aXM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIvPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdXA+UnAuPC9zdXA+PGI+MDwvYj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmljZS1saXN0LXdyYXAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UtbGlzdCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29ucyc+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfaGFyZ2FfZW1haWwuc3ZnXCIgYWx0PVwiaW1nXCIvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMnPlxuICAgICAgICAgICAgPHNwYW4+MS4wMDA8L3NwYW4+IEVtYWlsIC8gQnVsYW5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpY2UtbGlzdCc+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29ucyc+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfaGFyZ2FfaGFyZ2Euc3ZnXCIgYWx0PVwiaW1nXCIvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMnPkhhcmdhIC8gRW1haWwgPGI+UnAuMDwvYj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWxpc3RcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25zJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19oYXJnYV9zZWxlY3Quc3ZnXCIgYWx0PVwiaW1nXCIvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMnPkRvbWFpbiBLZXlzIElkZW50aWZpZWQgTWFpbDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtbGlzdFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naWNvbnMnPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX2hhcmdhX3NlbGVjdC5zdmdcIiBhbHQ9XCJpbWdcIi8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGV0YWlscyc+U2VuZGVyIFBvbGljeSBGcmFtZXdvcms8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWxpc3RcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25zJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19oYXJnYV9yZW1vdmUuc3ZnXCIgYWx0PVwiaW1nXCIvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMnPlNsaWNpbmcgRGVzYWluIHRvIEh0bWw8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWxpc3RcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb25zJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19oYXJnYV9yZW1vdmUuc3ZnXCIgYWx0PVwiaW1nXCIvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2RldGFpbHMnPkN1c3RvbSBUZW1wbGF0ZTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgIDxCdXR0b24gc3R5bGU9eyBidXR0b25TdHlsZSB9PkNvYmEgR3JhdGlzPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgIDxwPlVqaSBjb2JhIGdyYXRpcyA2MCBoYXJpPC9wPlxuICAgICAgICB7Lyo8cD5hdGF1IDxMaW5rIGhyZWY9XCIjXCI+PGE+TGloYXQgcGFrZXQgbGFpbm55YTwvYT48L0xpbms+PC9wPiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RQcmljZTtcbiJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: mainStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Gratis")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", null, "Rp."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-list-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_harga_email.svg",
    alt: "img"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "details"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "1.000"), " Email / Bulan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_harga_harga.svg",
    alt: "img"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "details"
  }, "Harga / Email ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Rp.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_harga_select.svg",
    alt: "img"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "details"
  }, "Domain Keys Identified Mail")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_harga_select.svg",
    alt: "img"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "details"
  }, "Sender Policy Framework")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_harga_remove.svg",
    alt: "img"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "details"
  }, "Slicing Desain to Html")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "icons"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_harga_remove.svg",
    alt: "img"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "details"
  }, "Custom Template"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: buttonStyle
  }, "Coba Gratis")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Uji coba gratis 60 hari")));
};

/* harmony default export */ __webpack_exports__["default"] = (ListPrice);

/***/ })

})
//# sourceMappingURL=index.js.1c3412672ed25fd8d8e1.hot-update.js.map
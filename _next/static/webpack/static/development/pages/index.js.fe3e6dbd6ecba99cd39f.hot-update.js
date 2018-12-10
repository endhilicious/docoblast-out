webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/containers/home/customer/index.jsx":
/*!*******************************************************!*\
  !*** ./components/containers/home/customer/index.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");
/* harmony import */ var reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/mainGrid */ "./components/containers/gridLayouts/mainGrid.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");
/* harmony import */ var _partials_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/items */ "./components/containers/home/customer/partials/items.jsx");








var Index = function Index() {
  var mainStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("width:100%;float:left;margin:50px auto;.main-subscriber{font-size:2rem;font-weight:500;margin:0px;}.sub-subscriber{font-size:0.8rem;}a{color:#0098d3;}img{flex-direction:row;width:70%;}.carousel-more-600{display:block;}.carousel-less-600{display:none;}@media only screen and (max-width:600px){margin:21px auto -22px;.carousel-more-600{display:none;}.carousel-less-600{display:block;}.button-carousel-prev{width:25%;}.button-carousel-next{width:25%;float:right;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvY3VzdG9tZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU91QiIsImZpbGUiOiIvVXNlcnMvZW5kaS9Eb2N1bWVudHMvY29kaW5nL25leHQvcHJvamVjdC90ZXN0L2NvbXBvbmVudHMvY29udGFpbmVycy9ob21lL2N1c3RvbWVyL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCc7XG5pbXBvcnQgTWFpbkdyaWQgIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9tYWluR3JpZCdcbmltcG9ydCBMaXN0R3JpZCAgZnJvbSAncmVhY3Rpc20vY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL2xpc3RHcmlkJ1xuaW1wb3J0IEl0ZW1zIGZyb20gJy4vcGFydGlhbHMvaXRlbXMnXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgbWFpblN0eWxlID0gY3NzYFxuICAgIC8qIG1pbi1oZWlnaHQ6MTAwdmg7ICovXG4gICAgd2lkdGg6MTAwJTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIG1hcmdpbjo1MHB4IGF1dG87XG4gICAgLm1haW4tc3Vic2NyaWJlcntcbiAgICAgIGZvbnQtc2l6ZToycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6NTAwO1xuICAgICAgbWFyZ2luOjBweDtcbiAgICB9XG4gICAgLnN1Yi1zdWJzY3JpYmVye1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuICAgIGF7XG4gICAgICBjb2xvcjojMDA5OGQzO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gICAgLmNhcm91c2VsLW1vcmUtNjAwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY2Fyb3VzZWwtbGVzcy02MDAge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgbWFyZ2luOiAyMXB4IGF1dG8gLTIycHg7XG4gICAgICAuY2Fyb3VzZWwtbW9yZS02MDAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLmNhcm91c2VsLWxlc3MtNjAwIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICAuYnV0dG9uLWNhcm91c2VsLXByZXYge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgfVxuICAgICAgLmJ1dHRvbi1jYXJvdXNlbC1uZXh0IHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgfVxuICBgXG4gIGNvbnN0IHN0eWxlQ2Fyb3VzZWwgPSBjc3NgXG4gICAgaGVpZ2h0OiAzNDBweDtcbiAgYFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBtYWluU3R5bGUgfT5cbiAgICAgIDxjZW50ZXI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW4tc3Vic2NyaWJlclwiPlBlbGFuZ2dhbiBLYW1pPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItc3Vic2NyaWJlclwiPktldGFodWkgYmFueWFrIHRlbnRhbmcgPExpbmsgaHJlZj1cIiNcIj48YT5wZWxhbmdnYW4ga2FtaTwvYT48L0xpbms+PC9wPlxuICAgICAgPC9jZW50ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLW1vcmUtNjAwXCI+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgIHJlbmRlckNlbnRlckxlZnRDb250cm9scz17KHsgcHJldmlvdXNTbGlkZSB9KSA9PiAoXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfYmFjay5zdmdcIiBhbHQ9XCJhbHRcIiB3aWR0aD17IDYwIH0gb25DbGljaz17IHByZXZpb3VzU2xpZGUgfS8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICByZW5kZXJDZW50ZXJSaWdodENvbnRyb2xzPXsoeyBuZXh0U2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX25leHQuc3ZnXCIgYWx0PVwiYWx0XCIgd2lkdGg9eyA2MCB9IG9uQ2xpY2s9eyBuZXh0U2xpZGUgfS8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVDYXJvdXNlbCB9PlxuICAgICAgICAgICAgPE1haW5HcmlkIHdpZHRoPXs4MH0+XG4gICAgICAgICAgICAgIDxMaXN0R3JpZCBjb2xzPXs4fT5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vbWVycGF0aTEucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2NsaWVudC1wcmludGNvbS5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZG9jb3RlbC5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZWxldmVuaWEucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgICAgICAgIDxMaXN0R3JpZCBjb2xzPXs4fT5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMzQwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZG9jb3RlbC5wbmcnIGNvbG9tbj17IDI0IH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICAgICAgPExpc3RHcmlkIGNvbHM9ezh9PlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9jbGllbnQtamhvdXNlLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9kb2NvdGVsLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9jbGllbnQtamhvdXNlLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9lbGV2ZW5pYS5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICAgIDwvTWFpbkdyaWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYWluR3JpZCB3aWR0aD17ODB9PlxuICAgICAgICAgICAgICA8TGlzdEdyaWQgY29scz17OH0+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL21lcnBhdGkxLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9jbGllbnQtcHJpbnRjb20ucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2RvY290ZWwucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2VsZXZlbmlhLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgICAgICA8TGlzdEdyaWQgY29scz17OH0+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjM0MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2RvY290ZWwucG5nJyBjb2xvbW49eyAyNCB9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgICAgICAgIDxMaXN0R3JpZCBjb2xzPXs4fT5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vY2xpZW50LWpob3VzZS5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZG9jb3RlbC5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vY2xpZW50LWpob3VzZS5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZWxldmVuaWEucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgICAgICA8L01haW5HcmlkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWxlc3MtNjAwXCI+XG4gICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgIHJlbmRlckNlbnRlckxlZnRDb250cm9scz17KHsgcHJldmlvdXNTbGlkZSB9KSA9PiAoXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfYmFjay5zdmdcIiBhbHQ9XCJhbHRcIiBjbGFzc05hbWU9J2J1dHRvbi1jYXJvdXNlbC1wcmV2JyBvbkNsaWNrPXsgcHJldmlvdXNTbGlkZSB9Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHJlbmRlckNlbnRlclJpZ2h0Q29udHJvbHM9eyh7IG5leHRTbGlkZSB9KSA9PiAoXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfbmV4dC5zdmdcIiBhbHQ9XCJhbHRcIiBjbGFzc05hbWU9J2J1dHRvbi1jYXJvdXNlbC1uZXh0JyBvbkNsaWNrPXsgbmV4dFNsaWRlIH0vPlxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlQ2Fyb3VzZWwgfT5cbiAgICAgICAgICAgIDxNYWluR3JpZCB3aWR0aD17ODB9PlxuICAgICAgICAgICAgICA8TGlzdEdyaWQgY29scz17MjR9PlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9tZXJwYXRpMS5wbmcnIGNvbG9tbj17IDEyIH0gYmFuUmVzcG9uc2l2ZT17IHRydWUgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9jbGllbnQtcHJpbnRjb20ucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZG9jb3RlbC5wbmcnIGNvbG9tbj17IDEyIH0gYmFuUmVzcG9uc2l2ZT17IHRydWUgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9lbGV2ZW5pYS5wbmcnIGNvbG9tbj17IDEyIH0gYmFuUmVzcG9uc2l2ZT17IHRydWUgfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgICAgPC9NYWluR3JpZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlQ2Fyb3VzZWwgfT5cbiAgICAgICAgICAgIDxNYWluR3JpZCB3aWR0aD17ODB9PlxuICAgICAgICAgICAgICA8TGlzdEdyaWQgY29scz17MjR9PlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9tZXJwYXRpMS5wbmcnIGNvbG9tbj17IDEyIH0gYmFuUmVzcG9uc2l2ZT17IHRydWUgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9jbGllbnQtcHJpbnRjb20ucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZG9jb3RlbC5wbmcnIGNvbG9tbj17IDEyIH0gYmFuUmVzcG9uc2l2ZT17IHRydWUgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9lbGV2ZW5pYS5wbmcnIGNvbG9tbj17IDEyIH0gYmFuUmVzcG9uc2l2ZT17IHRydWUgfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgICAgPC9NYWluR3JpZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlQ2Fyb3VzZWwgfT5cbiAgICAgICAgICAgIDxNYWluR3JpZCB3aWR0aD17ODB9PlxuICAgICAgICAgICAgICA8TGlzdEdyaWQgY29scz17MjR9PlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9tZXJwYXRpMS5wbmcnIGNvbG9tbj17IDEyIH0gYmFuUmVzcG9uc2l2ZT17IHRydWUgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9jbGllbnQtcHJpbnRjb20ucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZG9jb3RlbC5wbmcnIGNvbG9tbj17IDEyIH0gYmFuUmVzcG9uc2l2ZT17IHRydWUgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9lbGV2ZW5pYS5wbmcnIGNvbG9tbj17IDEyIH0gYmFuUmVzcG9uc2l2ZT17IHRydWUgfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgICAgPC9NYWluR3JpZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */");
  var styleCarousel =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("height:340px;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvY3VzdG9tZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EMkIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvaG9tZS9jdXN0b21lci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ251a2EtY2Fyb3VzZWwnO1xuaW1wb3J0IE1haW5HcmlkICBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbWFpbkdyaWQnXG5pbXBvcnQgTGlzdEdyaWQgIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9saXN0R3JpZCdcbmltcG9ydCBJdGVtcyBmcm9tICcuL3BhcnRpYWxzL2l0ZW1zJ1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TdHlsZSA9IGNzc2BcbiAgICAvKiBtaW4taGVpZ2h0OjEwMHZoOyAqL1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBtYXJnaW46NTBweCBhdXRvO1xuICAgIC5tYWluLXN1YnNjcmliZXJ7XG4gICAgICBmb250LXNpemU6MnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgIG1hcmdpbjowcHg7XG4gICAgfVxuICAgIC5zdWItc3Vic2NyaWJlcntcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgICBhe1xuICAgICAgY29sb3I6IzAwOThkMztcbiAgICB9XG4gICAgaW1ne1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIC5jYXJvdXNlbC1tb3JlLTYwMCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmNhcm91c2VsLWxlc3MtNjAwIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIG1hcmdpbjogMjFweCBhdXRvIC0yMnB4O1xuICAgICAgLmNhcm91c2VsLW1vcmUtNjAwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5jYXJvdXNlbC1sZXNzLTYwMCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgLmJ1dHRvbi1jYXJvdXNlbC1wcmV2IHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIH1cbiAgICAgIC5idXR0b24tY2Fyb3VzZWwtbmV4dCB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cblxuICAgIH1cbiAgYFxuICBjb25zdCBzdHlsZUNhcm91c2VsID0gY3NzYFxuICAgIGhlaWdodDogMzQwcHg7XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgbWFpblN0eWxlIH0+XG4gICAgICA8Y2VudGVyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluLXN1YnNjcmliZXJcIj5QZWxhbmdnYW4gS2FtaTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXN1YnNjcmliZXJcIj5LZXRhaHVpIGJhbnlhayB0ZW50YW5nIDxMaW5rIGhyZWY9XCIjXCI+PGE+cGVsYW5nZ2FuIGthbWk8L2E+PC9MaW5rPjwvcD5cbiAgICAgIDwvY2VudGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1tb3JlLTYwMFwiPlxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICByZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHM9eyh7IHByZXZpb3VzU2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX2JhY2suc3ZnXCIgYWx0PVwiYWx0XCIgd2lkdGg9eyA2MCB9IG9uQ2xpY2s9eyBwcmV2aW91c1NsaWRlIH0vPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcmVuZGVyQ2VudGVyUmlnaHRDb250cm9scz17KHsgbmV4dFNsaWRlIH0pID0+IChcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19uZXh0LnN2Z1wiIGFsdD1cImFsdFwiIHdpZHRoPXsgNjAgfSBvbkNsaWNrPXsgbmV4dFNsaWRlIH0vPlxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlQ2Fyb3VzZWwgfT5cbiAgICAgICAgICAgIDxNYWluR3JpZCB3aWR0aD17ODB9PlxuICAgICAgICAgICAgICA8TGlzdEdyaWQgY29scz17OH0+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL21lcnBhdGkxLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9jbGllbnQtcHJpbnRjb20ucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2RvY290ZWwucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2VsZXZlbmlhLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgICAgICA8TGlzdEdyaWQgY29scz17OH0+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjM0MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2RvY290ZWwucG5nJyBjb2xvbW49eyAyNCB9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgICAgICAgIDxMaXN0R3JpZCBjb2xzPXs4fT5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vY2xpZW50LWpob3VzZS5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZG9jb3RlbC5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vY2xpZW50LWpob3VzZS5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZWxldmVuaWEucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgICAgICA8L01haW5HcmlkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWFpbkdyaWQgd2lkdGg9ezgwfT5cbiAgICAgICAgICAgICAgPExpc3RHcmlkIGNvbHM9ezh9PlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9tZXJwYXRpMS5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vY2xpZW50LXByaW50Y29tLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9kb2NvdGVsLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIxNzBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9lbGV2ZW5pYS5wbmcnIGNvbG9tbj17IDEyIH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICAgICAgPExpc3RHcmlkIGNvbHM9ezh9PlxuICAgICAgICAgICAgICAgIDxJdGVtcyBoZWlnaHQ9XCIzNDBweFwiIGltZz0nL3N0YXRpYy9MT0dPX1BFTEFOR0dBTi9kb2NvdGVsLnBuZycgY29sb21uPXsgMjQgfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgICAgICA8TGlzdEdyaWQgY29scz17OH0+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2NsaWVudC1qaG91c2UucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2RvY290ZWwucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2NsaWVudC1qaG91c2UucG5nJyBjb2xvbW49eyAxMiB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2VsZXZlbmlhLnBuZycgY29sb21uPXsgMTIgfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgICAgPC9NYWluR3JpZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1sZXNzLTYwMFwiPlxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICByZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHM9eyh7IHByZXZpb3VzU2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX2JhY2suc3ZnXCIgYWx0PVwiYWx0XCIgY2xhc3NOYW1lPSdidXR0b24tY2Fyb3VzZWwtcHJldicgb25DbGljaz17IHByZXZpb3VzU2xpZGUgfS8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICByZW5kZXJDZW50ZXJSaWdodENvbnRyb2xzPXsoeyBuZXh0U2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX25leHQuc3ZnXCIgYWx0PVwiYWx0XCIgY2xhc3NOYW1lPSdidXR0b24tY2Fyb3VzZWwtbmV4dCcgb25DbGljaz17IG5leHRTbGlkZSB9Lz5cbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZUNhcm91c2VsIH0+XG4gICAgICAgICAgICA8TWFpbkdyaWQgd2lkdGg9ezgwfT5cbiAgICAgICAgICAgICAgPExpc3RHcmlkIGNvbHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vbWVycGF0aTEucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vY2xpZW50LXByaW50Y29tLnBuZycgY29sb21uPXsgMTIgfSBiYW5SZXNwb25zaXZlPXsgdHJ1ZSB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2RvY290ZWwucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZWxldmVuaWEucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICAgIDwvTWFpbkdyaWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZUNhcm91c2VsIH0+XG4gICAgICAgICAgICA8TWFpbkdyaWQgd2lkdGg9ezgwfT5cbiAgICAgICAgICAgICAgPExpc3RHcmlkIGNvbHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vbWVycGF0aTEucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vY2xpZW50LXByaW50Y29tLnBuZycgY29sb21uPXsgMTIgfSBiYW5SZXNwb25zaXZlPXsgdHJ1ZSB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2RvY290ZWwucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZWxldmVuaWEucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICAgIDwvTWFpbkdyaWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZUNhcm91c2VsIH0+XG4gICAgICAgICAgICA8TWFpbkdyaWQgd2lkdGg9ezgwfT5cbiAgICAgICAgICAgICAgPExpc3RHcmlkIGNvbHM9ezI0fT5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vbWVycGF0aTEucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vY2xpZW50LXByaW50Y29tLnBuZycgY29sb21uPXsgMTIgfSBiYW5SZXNwb25zaXZlPXsgdHJ1ZSB9IC8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIGhlaWdodD1cIjE3MHB4XCIgaW1nPScvc3RhdGljL0xPR09fUEVMQU5HR0FOL2RvY290ZWwucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaGVpZ2h0PVwiMTcwcHhcIiBpbWc9Jy9zdGF0aWMvTE9HT19QRUxBTkdHQU4vZWxldmVuaWEucG5nJyBjb2xvbW49eyAxMiB9IGJhblJlc3BvbnNpdmU9eyB0cnVlIH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICAgIDwvTWFpbkdyaWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: mainStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "main-subscriber"
  }, "Pelanggan Kami"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sub-subscriber"
  }, "Ketahui banyak tentang ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "pelanggan kami")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-more-600"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nuka_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    renderCenterLeftControls: function renderCenterLeftControls(_ref) {
      var previousSlide = _ref.previousSlide;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/ic_back.svg",
        alt: "alt",
        width: 60,
        onClick: previousSlide
      });
    },
    renderCenterRightControls: function renderCenterRightControls(_ref2) {
      var nextSlide = _ref2.nextSlide;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/ic_next.svg",
        alt: "alt",
        width: 60,
        onClick: nextSlide
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styleCarousel
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 80
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/merpati1.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/client-printcom.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/docotel.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/elevenia.png",
    colomn: 12
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "340px",
    img: "/static/LOGO_PELANGGAN/docotel.png",
    colomn: 24
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/client-jhouse.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/docotel.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/client-jhouse.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/elevenia.png",
    colomn: 12
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 80
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/merpati1.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/client-printcom.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/docotel.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/elevenia.png",
    colomn: 12
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "340px",
    img: "/static/LOGO_PELANGGAN/docotel.png",
    colomn: 24
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/client-jhouse.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/docotel.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/client-jhouse.png",
    colomn: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/elevenia.png",
    colomn: 12
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "carousel-less-600"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nuka_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    renderCenterLeftControls: function renderCenterLeftControls(_ref3) {
      var previousSlide = _ref3.previousSlide;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/ic_back.svg",
        alt: "alt",
        className: "button-carousel-prev",
        onClick: previousSlide
      });
    },
    renderCenterRightControls: function renderCenterRightControls(_ref4) {
      var nextSlide = _ref4.nextSlide;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/ic_next.svg",
        alt: "alt",
        className: "button-carousel-next",
        onClick: nextSlide
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styleCarousel
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 80
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 24
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/merpati1.png",
    colomn: 12,
    banResponsive: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/client-printcom.png",
    colomn: 12,
    banResponsive: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/docotel.png",
    colomn: 12,
    banResponsive: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/elevenia.png",
    colomn: 12,
    banResponsive: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styleCarousel
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 80
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 24
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/merpati1.png",
    colomn: 12,
    banResponsive: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/client-printcom.png",
    colomn: 12,
    banResponsive: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/docotel.png",
    colomn: 12,
    banResponsive: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/elevenia.png",
    colomn: 12,
    banResponsive: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: styleCarousel
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 80
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 24
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/merpati1.png",
    colomn: 12,
    banResponsive: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/client-printcom.png",
    colomn: 12,
    banResponsive: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/docotel.png",
    colomn: 12,
    banResponsive: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_6__["default"], {
    height: "170px",
    img: "/static/LOGO_PELANGGAN/elevenia.png",
    colomn: 12,
    banResponsive: true
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.fe3e6dbd6ecba99cd39f.hot-update.js.map
webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/containers/home/slider/index.jsx":
/*!*****************************************************!*\
  !*** ./components/containers/home/slider/index.jsx ***!
  \*****************************************************/
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
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");






var Index = function Index() {
  var mainStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("width:100%;float:left;margin:10px auto;.img-doco{padding:60px 0px;width:110%;margin-left:-80px;}.float-right{padding:0px 60px 0px 120px;}.float-left{padding:0px 100px 0px 20px;}.content-list{margin-top:100px;p{color:#fff;font-size:2.5rem;}span{color:#f9f9f9;font-weight:100;line-height:1.6em;}a{color:#fff;}}.content-sliders{background-color:#4073b3;overflow:hidden;height:500px;}.slider-list{height:500px !important;}@media screen and (max-width:600px){.img-doco{padding:20px 0px 0px;width:100%;margin-left:0px;}.content-list{margin:0px;text-align:center;padding:0px 20px;p{font-size:2rem;margin:13px;}span{line-height:1.2em;}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvc2xpZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNdUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvaG9tZS9zbGlkZXIvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcbmltcG9ydCBMaXN0R3JpZCBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbGlzdEdyaWQnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBtYWluU3R5bGUgPSBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgLmltZy1kb2Nve1xuICAgICAgcGFkZGluZzogNjBweCAwcHg7XG4gICAgICB3aWR0aDogMTEwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgICB9XG4gICAgLmZsb2F0LXJpZ2h0IHtcbiAgICAgIHBhZGRpbmc6IDBweCA2MHB4IDBweCAxMjBweDtcbiAgICB9XG4gICAgLmZsb2F0LWxlZnQge1xuICAgICAgcGFkZGluZzogMHB4IDEwMHB4IDBweCAyMHB4O1xuICAgIH1cbiAgICAuY29udGVudC1saXN0e1xuICAgICAgbWFyZ2luLXRvcDoxMDBweDtcbiAgICAgIHB7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgfVxuICAgICAgc3BhbntcbiAgICAgICAgY29sb3I6I2Y5ZjlmOTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgICAgfVxuICAgICAgYXtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRlbnQtc2xpZGVycyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA3M2IzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgfVxuICAgIC5zbGlkZXItbGlzdCB7XG4gICAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAuaW1nLWRvY28ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQtbGlzdCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgbWFyZ2luOiAxM3B4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IG1haW5TdHlsZSB9PlxuICAgICAgPENhcm91c2VsXG4gICAgICAgIHJlbmRlckNlbnRlckxlZnRDb250cm9scz17KHsgcHJldmlvdXNTbGlkZSB9KSA9PiAoXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX2JhY2suc3ZnXCIgYWx0PVwiYWx0XCIgd2lkdGg9ezYwfSBvbkNsaWNrPXsgcHJldmlvdXNTbGlkZSB9Lz5cbiAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyQ2VudGVyUmlnaHRDb250cm9scz17KHsgbmV4dFNsaWRlIH0pID0+IChcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfbmV4dC5zdmdcIiBhbHQ9XCJhbHRcIiB3aWR0aD17NjB9IG9uQ2xpY2s9eyBuZXh0U2xpZGUgfS8+XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1zbGlkZXJzXCI+XG4gICAgICAgICAgPExpc3RHcmlkIGNvbD17MTJ9PlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2JzX21vY2t1cF9jb250ZW50LnBuZ1wiIGNsYXNzTmFtZT1cImltZy1kb2NvXCIgYWx0PVwidGVzdC1hbHRcIi8+XG4gICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICA8TGlzdEdyaWQgY29sPXsxMn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbGlzdCBmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxwPkVtYWlsIEJsYXN0PC9wPlxuICAgICAgICAgICAgICA8c3Bhbj5Mb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMgb2ZmaWNpYSBiZWF0YWUgcmVydW0hIFZlcm8gaWxsbyBzdW50IHBhcmlhdHVyLCBxdW9kIGxhYm9ydW0gZnVnaWF0IGRvbG9ydW0sIGl1c3RvIHNpdCBpbiBhc3Blcm5hdHVyIG1vbGxpdGlhIHJlbSBudWxsYSBvYmNhZWNhdGkgZW9zIG1vbGVzdGlhZS4gPExpbmsgaHJlZj1cInd3dy5nb29nbGUuY29tXCI+PGE+S2V0YWh1aSBsZWJpaCBsYW5qdXQ8L2E+PC9MaW5rPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2xpZGVyc1wiPlxuICAgICAgICAgIDxMaXN0R3JpZCBjb2w9ezEyfSBmbG9hdD1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvYnNfbW9ja3VwX2NvbnRlbnQucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWRvY29cIiBhbHQ9XCJ0ZXN0LWFsdFwiLz5cbiAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgIDxMaXN0R3JpZCBjb2w9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1saXN0IGZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxwPkVtYWlsIEJsYXN0PC9wPlxuICAgICAgICAgICAgICA8c3Bhbj5Mb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMgb2ZmaWNpYSBiZWF0YWUgcmVydW0hIFZlcm8gaWxsbyBzdW50IHBhcmlhdHVyLCBxdW9kIGxhYm9ydW0gZnVnaWF0IGRvbG9ydW0sIGl1c3RvIHNpdCBpbiBhc3Blcm5hdHVyIG1vbGxpdGlhIHJlbSBudWxsYSBvYmNhZWNhdGkgZW9zIG1vbGVzdGlhZS4gPExpbmsgaHJlZj1cInd3dy5nb29nbGUuY29tXCI+PGE+S2V0YWh1aSBsZWJpaCBsYW5qdXQ8L2E+PC9MaW5rPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2xpZGVyc1wiPlxuICAgICAgICAgIDxMaXN0R3JpZCBjb2w9ezEyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9ic19tb2NrdXBfY29udGVudC5wbmdcIiBjbGFzc05hbWU9XCJpbWctZG9jb1wiIGFsdD1cInRlc3QtYWx0XCIvPlxuICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgICAgPExpc3RHcmlkIGNvbD17MTJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxpc3QgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICA8cD5FbWFpbCBCbGFzdDwvcD5cbiAgICAgICAgICAgICAgPHNwYW4+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBlcmZlcmVuZGlzIG9mZmljaWEgYmVhdGFlIHJlcnVtISBWZXJvIGlsbG8gc3VudCBwYXJpYXR1ciwgcXVvZCBsYWJvcnVtIGZ1Z2lhdCBkb2xvcnVtLCBpdXN0byBzaXQgaW4gYXNwZXJuYXR1ciBtb2xsaXRpYSByZW0gbnVsbGEgb2JjYWVjYXRpIGVvcyBtb2xlc3RpYWUuIDxMaW5rIGhyZWY9XCJ3d3cuZ29vZ2xlLmNvbVwiPjxhPktldGFodWkgbGViaWggbGFuanV0PC9hPjwvTGluaz48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: mainStyle
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
    className: "content-sliders"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    col: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/bs_mockup_content.png",
    className: "img-doco",
    alt: "test-alt"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    col: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-list float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Email Blast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia beatae rerum! Vero illo sunt pariatur, quod laborum fugiat dolorum, iusto sit in aspernatur mollitia rem nulla obcaecati eos molestiae. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "www.google.com"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Ketahui lebih lanjut")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-sliders"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    col: 12,
    float: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/bs_mockup_content.png",
    className: "img-doco",
    alt: "test-alt"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    col: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-list float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Email Blast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia beatae rerum! Vero illo sunt pariatur, quod laborum fugiat dolorum, iusto sit in aspernatur mollitia rem nulla obcaecati eos molestiae. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "www.google.com"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Ketahui lebih lanjut")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-sliders"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    col: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/bs_mockup_content.png",
    className: "img-doco",
    alt: "test-alt"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    col: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-list float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Email Blast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia beatae rerum! Vero illo sunt pariatur, quod laborum fugiat dolorum, iusto sit in aspernatur mollitia rem nulla obcaecati eos molestiae. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "www.google.com"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Ketahui lebih lanjut"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9d5e9012644cedb58222.hot-update.js.map
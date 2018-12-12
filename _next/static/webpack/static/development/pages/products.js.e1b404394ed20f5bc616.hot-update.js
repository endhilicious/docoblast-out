webpackHotUpdate("static/development/pages/products.js",{

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
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("width:100%;float:left;margin:10px auto;.img-doco{padding:60px 0px;width:110%;margin-left:-80px;}.float-right{padding:0px 60px 0px 100px;}.content-list{padding:0px 100px 0px 20px;}.content-list{margin-top:100px;p{color:#fff;font-size:2.5rem;}span{color:#f9f9f9;font-weight:100;line-height:1.6em;}a{color:#fff;}}.content-sliders{background-color:#4073b3;overflow:hidden;height:500px;}.slider-list{height:500px !important;}@media screen and (max-width:600px){.img-doco{padding:20px 0px 0px;width:100%;margin-left:0px;}.content-list{margin:0px;text-align:center;padding:0px 20px;p{font-size:2rem;margin:13px;}span{line-height:1.2em;}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvc2xpZGVyL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNdUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvaG9tZS9zbGlkZXIvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcbmltcG9ydCBMaXN0R3JpZCBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbGlzdEdyaWQnXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBtYWluU3R5bGUgPSBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgLmltZy1kb2Nve1xuICAgICAgcGFkZGluZzogNjBweCAwcHg7XG4gICAgICB3aWR0aDogMTEwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgICB9XG4gICAgLmZsb2F0LXJpZ2h0IHtcbiAgICAgIHBhZGRpbmc6IDBweCA2MHB4IDBweCAxMDBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQtbGlzdCB7XG4gICAgICBwYWRkaW5nOiAwcHggMTAwcHggMHB4IDIwcHg7XG4gICAgfVxuICAgIC5jb250ZW50LWxpc3R7XG4gICAgICBtYXJnaW4tdG9wOjEwMHB4O1xuICAgICAgcHtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICB9XG4gICAgICBzcGFue1xuICAgICAgICBjb2xvcjojZjlmOWY5O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gICAgICB9XG4gICAgICBhe1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudC1zbGlkZXJzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDczYjM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG4gICAgLnNsaWRlci1saXN0IHtcbiAgICAgIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIC5pbWctZG9jbyB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgICAuY29udGVudC1saXN0IHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICBtYXJnaW46IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgbWFpblN0eWxlIH0+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgcmVuZGVyQ2VudGVyTGVmdENvbnRyb2xzPXsoeyBwcmV2aW91c1NsaWRlIH0pID0+IChcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfYmFjay5zdmdcIiBhbHQ9XCJhbHRcIiB3aWR0aD17NjB9IG9uQ2xpY2s9eyBwcmV2aW91c1NsaWRlIH0vPlxuICAgICAgICApfVxuICAgICAgICByZW5kZXJDZW50ZXJSaWdodENvbnRyb2xzPXsoeyBuZXh0U2xpZGUgfSkgPT4gKFxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19uZXh0LnN2Z1wiIGFsdD1cImFsdFwiIHdpZHRoPXs2MH0gb25DbGljaz17IG5leHRTbGlkZSB9Lz5cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXNsaWRlcnNcIj5cbiAgICAgICAgICA8TGlzdEdyaWQgY29sPXsxMn0+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvYnNfbW9ja3VwX2NvbnRlbnQucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWRvY29cIiBhbHQ9XCJ0ZXN0LWFsdFwiLz5cbiAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgIDxMaXN0R3JpZCBjb2w9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1saXN0XCI+XG4gICAgICAgICAgICAgIDxwPkVtYWlsIEJsYXN0PC9wPlxuICAgICAgICAgICAgICA8c3Bhbj5Mb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMgb2ZmaWNpYSBiZWF0YWUgcmVydW0hIFZlcm8gaWxsbyBzdW50IHBhcmlhdHVyLCBxdW9kIGxhYm9ydW0gZnVnaWF0IGRvbG9ydW0sIGl1c3RvIHNpdCBpbiBhc3Blcm5hdHVyIG1vbGxpdGlhIHJlbSBudWxsYSBvYmNhZWNhdGkgZW9zIG1vbGVzdGlhZS4gPExpbmsgaHJlZj1cInd3dy5nb29nbGUuY29tXCI+PGE+S2V0YWh1aSBsZWJpaCBsYW5qdXQ8L2E+PC9MaW5rPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2xpZGVyc1wiPlxuICAgICAgICAgIDxMaXN0R3JpZCBjb2w9ezEyfSBmbG9hdD1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvYnNfbW9ja3VwX2NvbnRlbnQucG5nXCIgY2xhc3NOYW1lPVwiaW1nLWRvY29cIiBhbHQ9XCJ0ZXN0LWFsdFwiLz5cbiAgICAgICAgICA8L0xpc3RHcmlkPlxuICAgICAgICAgIDxMaXN0R3JpZCBjb2w9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1saXN0IGZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxwPkVtYWlsIEJsYXN0PC9wPlxuICAgICAgICAgICAgICA8c3Bhbj5Mb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUGVyZmVyZW5kaXMgb2ZmaWNpYSBiZWF0YWUgcmVydW0hIFZlcm8gaWxsbyBzdW50IHBhcmlhdHVyLCBxdW9kIGxhYm9ydW0gZnVnaWF0IGRvbG9ydW0sIGl1c3RvIHNpdCBpbiBhc3Blcm5hdHVyIG1vbGxpdGlhIHJlbSBudWxsYSBvYmNhZWNhdGkgZW9zIG1vbGVzdGlhZS4gPExpbmsgaHJlZj1cInd3dy5nb29nbGUuY29tXCI+PGE+S2V0YWh1aSBsZWJpaCBsYW5qdXQ8L2E+PC9MaW5rPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc2xpZGVyc1wiPlxuICAgICAgICAgIDxMaXN0R3JpZCBjb2w9ezEyfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9ic19tb2NrdXBfY29udGVudC5wbmdcIiBjbGFzc05hbWU9XCJpbWctZG9jb1wiIGFsdD1cInRlc3QtYWx0XCIvPlxuICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgICAgPExpc3RHcmlkIGNvbD17MTJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWxpc3RcIj5cbiAgICAgICAgICAgICAgPHA+RW1haWwgQmxhc3Q8L3A+XG4gICAgICAgICAgICAgIDxzcGFuPkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQZXJmZXJlbmRpcyBvZmZpY2lhIGJlYXRhZSByZXJ1bSEgVmVybyBpbGxvIHN1bnQgcGFyaWF0dXIsIHF1b2QgbGFib3J1bSBmdWdpYXQgZG9sb3J1bSwgaXVzdG8gc2l0IGluIGFzcGVybmF0dXIgbW9sbGl0aWEgcmVtIG51bGxhIG9iY2FlY2F0aSBlb3MgbW9sZXN0aWFlLiA8TGluayBocmVmPVwid3d3Lmdvb2dsZS5jb21cIj48YT5LZXRhaHVpIGxlYmloIGxhbmp1dDwvYT48L0xpbms+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */");
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
    className: "content-list"
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
    className: "content-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Email Blast"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis officia beatae rerum! Vero illo sunt pariatur, quod laborum fugiat dolorum, iusto sit in aspernatur mollitia rem nulla obcaecati eos molestiae. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "www.google.com"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Ketahui lebih lanjut"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=products.js.e1b404394ed20f5bc616.hot-update.js.map
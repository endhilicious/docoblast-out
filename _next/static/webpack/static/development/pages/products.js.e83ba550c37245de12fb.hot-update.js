webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/containers/footer/index.jsx":
/*!************************************************!*\
  !*** ./components/containers/footer/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gridLayouts/mainGrid */ "./components/containers/gridLayouts/mainGrid.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");
/* harmony import */ var reactism_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactism/elements */ "./components/elements/index.jsx");







var Index = function Index() {
  var rootStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i');font-family:'Ubuntu',sans-serif;width:100%;float:left;.docoblast-logo{margin:20px 0px;}ul{margin:0px;padding:0px;li{list-style-type:none;margin:10px 0px;font-size:0.8rem;a{color:#737171;img{width:20px;}span{margin-left:7px;margin-top:2px;position:absolute;}}}}a{text-decoration:none;}.subscribe-text{text-align:center;font-size:1.2rem;}.copyright{font-size:1rem;font-size:0.8rem;opacity:0.3;}.doco-sosmed{margin-left:-70px;}@media screen and (max-width:600px){text-align:center;.copyright{font-size:0.6rem;opacity:0.3;}.docoblast-logo{width:50%;margin:20px 0px;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2Zvb3Rlci9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3VCIiwiZmlsZSI6Ii9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2Zvb3Rlci9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJ1xuaW1wb3J0IE1haW5HcmlkIGZyb20gJy4uL2dyaWRMYXlvdXRzL21haW5HcmlkJ1xuaW1wb3J0IExpc3RHcmlkIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9saXN0R3JpZCdcbmltcG9ydCB7IEJ1dHRvbiAsIElucHV0IH0gZnJvbSAncmVhY3Rpc20vZWxlbWVudHMnXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdFN0eWxlID0gY3NzYFxuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVVidW50dTo0MDAsNDAwaSw3MDAsNzAwaScpO1xuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIC5kb2NvYmxhc3QtbG9nb3tcbiAgICAgIG1hcmdpbjoyMHB4IDBweDtcbiAgICB9XG4gICAgdWx7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIGxpe1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcbiAgICAgICAgbWFyZ2luOjEwcHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgYXtcbiAgICAgICAgICBjb2xvcjojNzM3MTcxO1xuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLnN1YnNjcmliZS10ZXh0IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgICAgZm9udC1zaXplOjAuOHJlbTtcbiAgICAgICAgb3BhY2l0eTowLjM7XG4gICAgfVxuICAgIC5kb2NvLXNvc21lZCB7XG4gICAgICBtYXJnaW4tbGVmdDogLTcwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIC5jb3B5cmlnaHR7XG4gICAgICAgIGZvbnQtc2l6ZTowLjZyZW07XG4gICAgICAgIG9wYWNpdHk6MC4zO1xuICAgICAgfVxuICAgICAgLmRvY29ibGFzdC1sb2dve1xuICAgICAgICB3aWR0aDo1MCU7XG4gICAgICAgIG1hcmdpbjoyMHB4IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIGBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHJvb3RTdHlsZSB9PlxuICAgIDxNYWluR3JpZCB3aWR0aD17ODB9PlxuICAgICAgPExpc3RHcmlkIGNvbHM9ezE2fT5cbiAgICAgICAgPExpc3RHcmlkIGNvbHM9ezI0fT5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nb19kb2NvYl9ncmF5LnN2Z1wiIGFsdD1cImRvY29ibGFzdC1sb2dvXCIgY2xhc3NOYW1lPVwiZG9jb2JsYXN0LWxvZ29cIiB3aWR0aD1cIjE1JVwiLz5cbiAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgPExpc3RHcmlkIGNvbHM9ezh9PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiI1wiPjxhPlBlbGFuZ2dhbiBLYW1pPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIjXCI+PGE+QmxvZzwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiI1wiPjxhPktvbnRhayBLYW1pPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgIDxMaXN0R3JpZCBjb2xzPXs4fT5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIiNcIj48YT5TeWFyYXQgZGFuIEtldGVudHVhbjwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiI1wiPjxhPlByaXZhc2k8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIiNcIj48YT5IYWsgQ2lwdGE8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgPExpc3RHcmlkIGNvbHM9ezh9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkb2NvLXNvc21lZFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX2ZiLnN2Z1wiIGFsdD1cImljb24tZmJcIi8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5Eb2NvQmxhc3Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX2luc3RhLnN2Z1wiIGFsdD1cImljb24taW5zdGFcIi8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5kb2NvX2JsYXN0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY190ZWxlZy5zdmdcIiBhbHQ9XCJpY29uLXRlbGVnXCIvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+QGRvY29ibGFzdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICA8TGlzdEdyaWQgY29scz17OH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaWJlLXRleHRcIj5cbiAgICAgICAgICA8cD5MYW5nZ2FuYW4gQmVyaXRhIERhcmkgS2FtaTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBbmRhXCIgZm9udFNpemU9ezF9IHRleHRBbGlnbj1cImNlbnRlclwiIHdpZHRoPXsgMTAwIH0vPlxuICAgICAgICAgIDxCdXR0b24gd2lkdGg9ezEwMH0gY29sb3I9XCJwcmltYXJ5XCI+TGFuZ2dhbmFuPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaXN0R3JpZD5cbiAgICAgIDxMaXN0R3JpZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj5cbiAgICAgICAgICA8cD4mY29weTsgMjAxNSBEb2NvQmxhc3QgUG93ZXJlZCBieSBQVCBEb2NvdGVsIFRlY2hub2xvZ3k8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24td29ybGRcIj5pY29uPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPkJhaGFzYSBJbmRvbmVzaWE8L3NwYW4+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvTGlzdEdyaWQ+XG4gICAgPC9NYWluR3JpZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: rootStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: 80
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: 16
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: 24
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/logo_docob_gray.svg",
    alt: "docoblast-logo",
    className: "docoblast-logo",
    width: "15%"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Pelanggan Kami"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Kontak Kami"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Syarat dan Ketentuan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Privasi"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Hak Cipta"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "doco-sosmed"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_fb.svg",
    alt: "icon-fb"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "DocoBlast")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_insta.svg",
    alt: "icon-insta"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "doco_blast")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "#"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/ic_teleg.svg",
    alt: "icon-teleg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "@docoblast"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: 8
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "subscribe-text"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Langganan Berita Dari Kami")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    type: "text",
    placeholder: "Email Anda",
    fontSize: 1,
    textAlign: "center",
    width: 100
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    width: 100,
    color: "primary"
  }, "Langganan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "copyright"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA9 2015 DocoBlast Powered by PT Docotel Technology")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=products.js.e83ba550c37245de12fb.hot-update.js.map
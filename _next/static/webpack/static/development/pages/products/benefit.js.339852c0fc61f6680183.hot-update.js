webpackHotUpdate("static/development/pages/products/benefit.js",{

/***/ "./components/containers/home/why/index.jsx":
/*!**************************************************!*\
  !*** ./components/containers/home/why/index.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gridLayouts/mainGrid */ "./components/containers/gridLayouts/mainGrid.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");
/* harmony import */ var _partials_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/item */ "./components/containers/home/why/partials/item.jsx");





 // testing data

var data = [{
  title: 'Pengalaman',
  img: '/static/ic_mengapa_pengalaman.svg'
}, {
  title: 'Up To Date',
  img: '/static/ic_mengapa_uptodate.svg'
}, {
  title: 'Kenyamanan',
  img: '/static/ic_mengapa_terpercaya.svg'
}, {
  title: 'Kecepatan',
  img: '/static/ic_mengapa_kecepatan.svg'
}, {
  title: 'Terpercaya',
  img: '/static/ic_mengapa_terpercaya.svg'
}, {
  title: 'Tanpa Resiko',
  img: '/static/ic_mengapa_tanparesiko.svg'
}];

var Index = function Index(props) {
  var mainStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,500i,700,700i');font-family:'Ubuntu',sans-serif;float:left;width:100%;display:block;background-color:#f7f9fb;padding:50px 0px;p.main-why{text-align:center;font-size:2.5rem;font-weight:500;margin:0px;}p.content-why{color:#4c4c4c;font-size:0.9rem;font-weight:500;line-height:20px;}a{color:#0098d3;}@media screen and (max-width:600px){.content-why{text-align:center;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvd2h5L2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvaG9tZS93aHkvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBNYWluR3JpZCBmcm9tICcuLi8uLi9ncmlkTGF5b3V0cy9tYWluR3JpZCdcbmltcG9ydCBMaXN0R3JpZCBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbGlzdEdyaWQnXG5pbXBvcnQgSXRlbXMgZnJvbSAnLi9wYXJ0aWFscy9pdGVtJ1xuXG4vLyB0ZXN0aW5nIGRhdGFcbmNvbnN0IGRhdGEgPSBbe3RpdGxlOidQZW5nYWxhbWFuJyxpbWc6Jy9zdGF0aWMvaWNfbWVuZ2FwYV9wZW5nYWxhbWFuLnN2Zyd9LHt0aXRsZTonVXAgVG8gRGF0ZScsaW1nOicvc3RhdGljL2ljX21lbmdhcGFfdXB0b2RhdGUuc3ZnJ30se3RpdGxlOidLZW55YW1hbmFuJyxpbWc6Jy9zdGF0aWMvaWNfbWVuZ2FwYV90ZXJwZXJjYXlhLnN2Zyd9LHt0aXRsZTonS2VjZXBhdGFuJyxpbWc6Jy9zdGF0aWMvaWNfbWVuZ2FwYV9rZWNlcGF0YW4uc3ZnJ30se3RpdGxlOidUZXJwZXJjYXlhJyxpbWc6Jy9zdGF0aWMvaWNfbWVuZ2FwYV90ZXJwZXJjYXlhLnN2Zyd9LHt0aXRsZTonVGFucGEgUmVzaWtvJyxpbWc6Jy9zdGF0aWMvaWNfbWVuZ2FwYV90YW5wYXJlc2lrby5zdmcnfV1cblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IG1haW5TdHlsZSA9IGNzc2BcbiAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VWJ1bnR1OjQwMCw0MDBpLDUwMCw1MDBpLDcwMCw3MDBpJyk7XG4gICAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmN2Y5ZmI7XG4gICAgICBwYWRkaW5nOiA1MHB4IDBweDtcbiAgICAgIHAubWFpbi13aHl7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbjowcHg7XG4gICAgICB9XG4gICAgICBwLmNvbnRlbnQtd2h5e1xuICAgICAgICBjb2xvcjogIzRjNGM0YztcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgICAgYXtcbiAgICAgICAgY29sb3I6IzAwOThkMztcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5jb250ZW50LXdoeXtcbiAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IG1haW5TdHlsZSB9PlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi13aHlcIj5NZW5nYXBhIERvY29CbGFzdD88L3A+XG4gICAgICA8TWFpbkdyaWQgd2lkdGg9ezgwfT5cbiAgICAgICAge1xuICAgICAgICAgIGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxMaXN0R3JpZCBjb2xzPXs4fT5cbiAgICAgICAgICAgICAgICA8SXRlbXMgaW1nPXtpdGVtLmltZ30gdGl0bGU9e2l0ZW0udGl0bGV9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudC13aHlcIj5Mb3JlbSBpcHN1bXMsIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEludmVudG9yZSBhY2N1c2FudGl1bSBpdXJlIGluY2lkdW50IDxMaW5rIGhyZWY9XCIjXCI+PGE+c2VsZW5na2FwbnlhPC9hPjwvTGluaz48L3A+XG4gICAgICAgICAgICAgICAgPC9JdGVtcz5cbiAgICAgICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L01haW5HcmlkPlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: mainStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "main-why"
  }, "Mengapa DocoBlast?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: 80
  }, data.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cols: 8
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
      img: item.img,
      title: item.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "content-why"
    }, "Lorem ipsums, dolor sit amet consectetur adipisicing elit. Inventore accusantium iure incidunt ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "selengkapnya")))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=benefit.js.339852c0fc61f6680183.hot-update.js.map
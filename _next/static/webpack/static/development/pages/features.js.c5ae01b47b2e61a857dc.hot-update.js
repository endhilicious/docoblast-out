webpackHotUpdate("static/development/pages/features.js",{

/***/ "./components/containers/features/partials/listDetail.jsx":
/*!****************************************************************!*\
  !*** ./components/containers/features/partials/listDetail.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gridLayouts/mainGrid */ "./components/containers/gridLayouts/mainGrid.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");




var data = [{
  title: 'Registrasi'
}, {
  title: 'Ekspor List'
}, {
  title: 'Impor List'
}, {
  title: 'Berhenti Berlangganan'
}, {
  title: 'Pilihan Konfirmasi'
}, {
  title: 'Kustom Field'
}, {
  title: 'Daftar Supresi'
}];

var ListDetail = function ListDetail() {
  var listStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("padding:50px 0px;.title{font-size:2.5rem;font-weight:500;}.content{font-size:0.9rem;line-height:24px;opacity:0.7;}@media screen and (max-width:600px){padding:0px;.title{font-size:1.5rem;text-align:center;}.content{text-align:justify;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2ZlYXR1cmVzL3BhcnRpYWxzL2xpc3REZXRhaWwuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUt1QiIsImZpbGUiOiIvVXNlcnMvZW5kaS9Eb2N1bWVudHMvY29kaW5nL25leHQvcHJvamVjdC90ZXN0L2NvbXBvbmVudHMvY29udGFpbmVycy9mZWF0dXJlcy9wYXJ0aWFscy9saXN0RGV0YWlsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXG5pbXBvcnQgTWFpbkdyaWQgZnJvbSAnLi4vLi4vZ3JpZExheW91dHMvbWFpbkdyaWQnXG5pbXBvcnQgTGlzdEdyaWQgZnJvbSAncmVhY3Rpc20vY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL2xpc3RHcmlkJ1xuY29uc3QgZGF0YSA9IFt7dGl0bGU6J1JlZ2lzdHJhc2knfSx7dGl0bGU6J0Vrc3BvciBMaXN0J30se3RpdGxlOidJbXBvciBMaXN0J30se3RpdGxlOidCZXJoZW50aSBCZXJsYW5nZ2FuYW4nfSx7dGl0bGU6J1BpbGloYW4gS29uZmlybWFzaSd9LHt0aXRsZTonS3VzdG9tIEZpZWxkJ30se3RpdGxlOidEYWZ0YXIgU3VwcmVzaSd9XTtcbmNvbnN0IExpc3REZXRhaWwgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3RTdHlsZSA9IGNzc2BcbiAgICAgIC8qIG1pbi1oZWlnaHQ6IDcwdmg7ICovXG4gICAgICBwYWRkaW5nOjUwcHggMHB4O1xuICAgICAgLnRpdGxle1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50e1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIG9wYWNpdHk6MC43O1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50e1xuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgZGF0YS5tYXAoKGRhdGEgLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxNYWluR3JpZCB3aWR0aD17ODB9IHN0eWxlPXsgbGlzdFN0eWxlIH0gYmFja2dyb3VuZENvbG9yPXtpbmRleCUyICE9PSAwID9cIiNmZmZcIjpcIiNGNUY3RkFcIn0+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17IGxpc3RTdHlsZSB9PiAqL31cbiAgICAgICAgICAgICAgICA8TGlzdEdyaWQgZmxvYXQ9e2luZGV4JTIgPT09IDAgP1wibGVmdFwiOlwicmlnaHRcIn0gY29scz17MTJ9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2JzX21vY2t1cF9jb250ZW50LnBuZ1wiIHdpZHRoPVwiMTAwJVwiIGFsdD1cIm1vY2t1cC1jb250ZW50XCIvPlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICAgICAgICAgICAgPExpc3RHcmlkIGNvbHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+e2RhdGEudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFVsbGFtIGV4LCBiZWF0YWUgbW9kaSBlbGlnZW5kaSwgbm9uIGZ1Z2EgYWQgdm9sdXB0YXMgbW9sZXN0aWFlIHF1aWJ1c2RhbSBsYWJvcmlvc2FtIGRlc2VydW50IG1pbnVzIG5hbSBuZXNjaXVudCByZXJ1bS4gRXhwZWRpdGEgdm9sdXB0YXRlcyBxdWFzIG5pc2kgcGxhY2VhdCE8L3A+XG4gICAgICAgICAgICAgICAgPC9MaXN0R3JpZD5cbiAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvTWFpbkdyaWQ+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3REZXRhaWxcbiJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, data.map(function (data, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
      width: 80,
      style: listStyle,
      backgroundColor: index % 2 !== 0 ? "#fff" : "#F5F7FA"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      float: index % 2 === 0 ? "left" : "right",
      cols: 12
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/static/bs_mockup_content.png",
      width: "100%",
      alt: "mockup-content"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
      cols: 12
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "title"
    }, data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "content"
    }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex, beatae modi eligendi, non fuga ad voluptas molestiae quibusdam laboriosam deserunt minus nam nesciunt rerum. Expedita voluptates quas nisi placeat!")));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ListDetail);

/***/ })

})
//# sourceMappingURL=features.js.c5ae01b47b2e61a857dc.hot-update.js.map
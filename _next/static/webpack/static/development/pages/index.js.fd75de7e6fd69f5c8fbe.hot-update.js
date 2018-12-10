webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/containers/blogs/partials/listArticles.jsx":
/*!***************************************************************!*\
  !*** ./components/containers/blogs/partials/listArticles.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/mainGrid */ "./components/containers/gridLayouts/mainGrid.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");






var Index = function Index() {
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("min-height:250px;padding:10px 0px;.main-text{font-size:2.5rem;font-weight:500;}.action{width:100%;margin:20px 0px;float:left;.category{float:left;}.comments{float:right;span{font-size:0.9rem;padding:4px;opacity:0.4;position:relative;top:-5px;}.icons-share{padding-left:43px;}}}.div-creator-date{margin:0px 0px 7px;.creator-date{font-size:0.8rem;opacity:0.3;}}.title-article{font-size:1.3rem;line-height:28px;margin:0px;font-weight:500;cursor:pointer;}.content{font-size:0.85rem;opacity:0.7;line-height:24px;margin:9px 0px;}.category{font-size:0.85rem;color:#1798D1;}.img-articles{background-image:url(\"/static/image_produk_mengapa.png\");background-size:cover;height:166px;background-position:center;}@media screen and (max-width:600px){.action .comments{float:left;margin:16px 0px;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2Jsb2dzL3BhcnRpYWxzL2xpc3RBcnRpY2xlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3VCIiwiZmlsZSI6Ii9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2Jsb2dzL3BhcnRpYWxzL2xpc3RBcnRpY2xlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgTWFpbkdyaWQgIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9tYWluR3JpZCdcbmltcG9ydCBMaXN0R3JpZCAgZnJvbSAncmVhY3Rpc20vY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL2xpc3RHcmlkJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIC5tYWluLXRleHQge1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAuYWN0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgLmNhdGVnb3J5IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgICAuY29tbWVudHMge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbnMtc2hhcmUge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNDNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZGl2LWNyZWF0b3ItZGF0ZSB7XG4gICAgICBtYXJnaW46IDBweCAwcHggN3B4O1xuICAgICAgLmNyZWF0b3ItZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICB9XG4gICAgfVxuICAgIC50aXRsZS1hcnRpY2xlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBtYXJnaW46IDlweCAwcHg7XG4gICAgfVxuICAgIC5jYXRlZ29yeSB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBjb2xvcjogIzE3OThEMTtcbiAgICB9XG4gICAgLmltZy1hcnRpY2xlcyB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvc3RhdGljL2ltYWdlX3Byb2R1a19tZW5nYXBhLnBuZ1wiKTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBoZWlnaHQ6IDE2NnB4O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgLyogLmNvbnRlbnQsIC50aXRsZS1hcnRpY2xlIHtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgIH0gKi9cbiAgICAgIC5hY3Rpb24gLmNvbW1lbnRzIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gIGBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGJhc2VTdHlsZSB9PlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWFpbi10ZXh0XCI+QXJ0aWtlbCBUZXJiYXJ1PC9wPlxuICAgICAgPExpc3RHcmlkIGNvbHM9eyA2IH0gZmxvYXQ9XCJyaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1hcnRpY2xlc1wiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaXN0R3JpZD5cbiAgICAgIDxMaXN0R3JpZCBjb2xzPXsgMTcgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtY3JlYXRvci1kYXRlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3JlYXRvci1kYXRlXCI+VGltIERvY29CbGFzdCB8IDE5IFNwZXRlbWJlciAyMDE4PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1hcnRpY2xlXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gU2FlcGUgdmVyaXRhdGlzIGEuLi48L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50cy1hcnRpY2xlXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb250ZW50XCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNwZXJpb3JlcyBtYWlvcmVzIGRvbG9yaWJ1cyBwYXJpYXR1ciBjdWxwYSBwbGFjZWF0IHNvbHV0YSBpbGx1bSBsaWJlcm8gZGVsZW5pdGkgc3VudCBjdWxwYSBwbGFjZWF0IHNvbHV0YSBpbGx1bSBsaWJlcm8gZGVsZW5pdGkgc3VudDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpc3RHcmlkPlxuICAgICAgPExpc3RHcmlkIGNvbHM9eyAyNCB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5Lbm93bGVkZ2UsIENhbXBhaWduPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxuICAgICAgICAgICAgPGltZyB3aWR0aD17MjB9IGNsYXNzTmFtZT1cImljb25zLWNvbW1lbnRzXCIgc3JjPVwiL3N0YXRpYy9pY19rb21lbnRhci5zdmdcIiBhbHQ9XCJpY29ucy1jb21tZW50c1wiLz5cbiAgICAgICAgICAgIDxzcGFuPjEyIEtvbWVudGFyPC9zcGFuPlxuICAgICAgICAgICAgPGltZyB3aWR0aD17MjB9IGNsYXNzTmFtZT1cImljb25zLXNoYXJlXCIgc3JjPVwiL3N0YXRpYy9pY19iYWdpa2FuLnN2Z1wiIGFsdD1cImljb25zLXNoYXJlXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGlzdEdyaWQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "main-text"
  }, "Artikel Terbaru"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: 6,
    float: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img-articles"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: 17
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "div-creator-date"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "creator-date"
  }, "Tim DocoBlast | 19 Spetember 2018")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title-article"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis a..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents-article"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "content"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores maiores doloribus pariatur culpa placeat soluta illum libero deleniti sunt culpa placeat soluta illum libero deleniti sunt")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cols: 24
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "action"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "category"
  }, "Knowledge, Campaign"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comments"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: 20,
    className: "icons-comments",
    src: "/static/ic_komentar.svg",
    alt: "icons-comments"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "12 Komentar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: 20,
    className: "icons-share",
    src: "/static/ic_bagikan.svg",
    alt: "icons-share"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.fd75de7e6fd69f5c8fbe.hot-update.js.map
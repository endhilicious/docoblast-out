webpackHotUpdate("static/development/pages/information/detailsCustomer.js",{

/***/ "./components/containers/ourDetailsClient/index.jsx":
/*!**********************************************************!*\
  !*** ./components/containers/ourDetailsClient/index.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./components/containers/ourDetailsClient/slider.jsx");




var Index = function Index() {
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("background-color:#F5F7FA;float:left;width:100%;min-height:100vh;.article-section{background-color:#fff;width:70%;text-align:center;margin:auto;.article-section-specific{height:100vh;margin-top:-50vh;img{filter:brightness(0);width:100px;}p{padding:0px 100px;text-align:left;font-size:0.8rem;opacity:0.7;line-height:24px;}}}@media screen and (max-width:600px){.article-section{width:90%;.article-section-specific{margin-top:-75vh;p{padding:0px 10px;}}}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL291ckRldGFpbHNDbGllbnQvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl1QiIsImZpbGUiOiIvVXNlcnMvZW5kaS9Eb2N1bWVudHMvY29kaW5nL25leHQvcHJvamVjdC90ZXN0L2NvbXBvbmVudHMvY29udGFpbmVycy9vdXJEZXRhaWxzQ2xpZW50L2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY3RkE7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgLmFydGljbGUtc2VjdGlvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIC5hcnRpY2xlLXNlY3Rpb24tc3BlY2lmaWMge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNTB2aDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgLmFydGljbGUtc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIC5hcnRpY2xlLXNlY3Rpb24tc3BlY2lmaWMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03NXZoO1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGJhc2VTdHlsZSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtc2VjdGlvbi1zcGVjaWZpY1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL0xPR09fUEVMQU5HR0FOL21lcnBhdGkxLnBuZ1wiIGFsdD1cIm1lcnBhdGkxXCIvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29uc2VxdXVudHVyIHBlcmZlcmVuZGlzIHNlZCBhc3BlcmlvcmVzIGVuaW0gdXQgaWxsbyBkaXN0aW5jdGlvIGFsaXF1aWQgZmFjaWxpcyBibGFuZGl0aWlzIG9wdGlvIHBvc3NpbXVzIHN1c2NpcGl0IG5vc3RydW0gc2ludCBpbnZlbnRvcmUsIGluIGFzcGVybmF0dXIgcmVpY2llbmRpcyBlaXVzIGFuaW1pLiBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQWNjdXNhbnRpdW0sIHBvcnJvIGRvbG9yaWJ1cy4gSXBzYW0gcG9zc2ltdXMgZXQgdm9sdXB0YXRlIG1vZGksIG1vbGVzdGlhZSB2b2x1cHRhcyBkZXNlcnVudCBmdWdpYXQgb2RpbyBjb3JydXB0aSByZXBlbGxlbmR1cyBhcmNoaXRlY3RvLCBlYXF1ZSBjdXBpZGl0YXRlIG5vYmlzLCBxdWlzcXVhbSBwZXJzcGljaWF0aXM/IER1Y2ltdXMuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEluY2lkdW50IHVuZGUgZXhwZWRpdGEgZG9sb3JlbSByZXBlbGxhdCBxdW8gcXVpYnVzZGFtIGlwc2FtIGVhIHBvcnJvIGV4LiBSZXB1ZGlhbmRhZSBpbiBhc3N1bWVuZGEgaXRhcXVlIHRlbXBvcmEgc2VxdWkgcmVwZWxsZW5kdXMsIHZvbHVwdGF0ZXMgZXJyb3IgbWFnbmFtIHF1aXNxdWFtLiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQbGFjZWF0LCB0ZW1wb3JlLiBBbWV0IGhpYyBpcHNhIG1heGltZSBkb2xvcmVtcXVlIGV1bSBwcm92aWRlbnQgcXVvZCB2b2x1cHRhcywgb2ZmaWNpaXMgYWxpcXVhbSwgZGVsZWN0dXMgYWRpcGlzY2ksIGZ1Z2EgaW52ZW50b3JlIHBhcmlhdHVyIG5lcXVlIHNhZXBlIHZlbmlhbSBkb2xvci48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNsaWRlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "article-section-specific"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/LOGO_PELANGGAN/merpati1.png",
    alt: "merpati1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis sed asperiores enim ut illo distinctio aliquid facilis blanditiis optio possimus suscipit nostrum sint inventore, in aspernatur reiciendis eius animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, porro doloribus. Ipsam possimus et voluptate modi, molestiae voluptas deserunt fugiat odio corrupti repellendus architecto, eaque cupiditate nobis, quisquam perspiciatis? Ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde expedita dolorem repellat quo quibusdam ipsam ea porro ex. Repudiandae in assumenda itaque tempora sequi repellendus, voluptates error magnam quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, tempore. Amet hic ipsa maxime doloremque eum provident quod voluptas, officiis aliquam, delectus adipisci, fuga inventore pariatur neque saepe veniam dolor.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_slider__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/containers/ourDetailsClient/partials/items.jsx":
/*!*******************************************************************!*\
  !*** ./components/containers/ourDetailsClient/partials/items.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");




var Items = function Items(_ref) {
  var name = _ref.name,
      img = _ref.img,
      colomn = _ref.colomn;
  var baseStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("img{padding:10px;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL291ckRldGFpbHNDbGllbnQvcGFydGlhbHMvaXRlbXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl1QiIsImZpbGUiOiIvVXNlcnMvZW5kaS9Eb2N1bWVudHMvY29kaW5nL25leHQvcHJvamVjdC90ZXN0L2NvbXBvbmVudHMvY29udGFpbmVycy9vdXJEZXRhaWxzQ2xpZW50L3BhcnRpYWxzL2l0ZW1zLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXG5pbXBvcnQgTGlzdEdyaWQgZnJvbSAncmVhY3Rpc20vY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL2xpc3RHcmlkJ1xuXG5jb25zdCBJdGVtcyA9ICh7IG5hbWUsIGltZywgY29sb21uIH0pID0+IHtcbiAgY29uc3QgYmFzZVN0eWxlID0gY3NzYFxuICAgIGltZyB7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgYFxuICByZXR1cm4gKFxuICAgIDxMaXN0R3JpZCBjb2xzPXsgY29sb21uIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGJhc2VTdHlsZSB9PlxuICAgICAgICA8aW1nIHNyYz17IGltZyB9IHdpZHRoPXsgODAgfSBhbHQ9XCJpY29uc1wiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj57IG5hbWUgfTwvZGl2PlxuICAgIDwvTGlzdEdyaWQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbXNcbiJdfQ== */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cols: colomn
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: baseStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    width: 80,
    alt: "icons"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, name));
};

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ }),

/***/ "./components/containers/ourDetailsClient/slider.jsx":
/*!***********************************************************!*\
  !*** ./components/containers/ourDetailsClient/slider.jsx ***!
  \***********************************************************/
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
/* harmony import */ var _partials_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials/items */ "./components/containers/ourDetailsClient/partials/items.jsx");
/* harmony import */ var reactism_static_ic_fitur_listmanagement_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactism/static/ic_fitur_listmanagement.svg */ "./static/ic_fitur_listmanagement.svg");
/* harmony import */ var reactism_static_ic_fitur_listmanagement_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactism_static_ic_fitur_listmanagement_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactism_static_ic_tutor_template_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactism/static/ic_tutor_template.svg */ "./static/ic_tutor_template.svg");
/* harmony import */ var reactism_static_ic_tutor_template_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactism_static_ic_tutor_template_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactism_static_ic_fitur_campaign_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactism/static/ic_fitur_campaign.svg */ "./static/ic_fitur_campaign.svg");
/* harmony import */ var reactism_static_ic_fitur_campaign_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(reactism_static_ic_fitur_campaign_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactism_static_ic_fitur_resulttracking_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactism/static/ic_fitur_resulttracking.svg */ "./static/ic_fitur_resulttracking.svg");
/* harmony import */ var reactism_static_ic_fitur_resulttracking_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reactism_static_ic_fitur_resulttracking_svg__WEBPACK_IMPORTED_MODULE_9__);











var Index = function Index() {
  var mainStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("width:100%;float:left;margin:30px auto;.icons-features{img{padding:10px;}}p.watermark{position:absolute;text-align:center;width:100%;font-size:12rem;margin-top:-10px;font-weight:bold;height:100%;z-index:-11111;color:#eff4f7;}.list-features{height:250px;text-align:center;}.list-features-600{display:block;text-align:center;}.list-features-more-600{display:none;text-align:center;}@media screen and (max-width:600px){p.watermark{font-size:6rem;margin-top:20px;}.list-features-600{display:none;}.list-features-more-600{display:block;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL291ckRldGFpbHNDbGllbnQvc2xpZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvb3VyRGV0YWlsc0NsaWVudC9zbGlkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcbmltcG9ydCBNYWluR3JpZCBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbWFpbkdyaWQnXG5pbXBvcnQgSXRlbXMgZnJvbSAnLi9wYXJ0aWFscy9pdGVtcydcbmltcG9ydCBJY19maXR1cl9saXN0bWFuYWdlbWVudCBmcm9tICdyZWFjdGlzbS9zdGF0aWMvaWNfZml0dXJfbGlzdG1hbmFnZW1lbnQuc3ZnJ1xuaW1wb3J0IEljX3R1dG9yX3RlbXBsYXRlIGZyb20gJ3JlYWN0aXNtL3N0YXRpYy9pY190dXRvcl90ZW1wbGF0ZS5zdmcnXG5pbXBvcnQgSWNfZml0dXJfY2FtcGFpZ24gZnJvbSAncmVhY3Rpc20vc3RhdGljL2ljX2ZpdHVyX2NhbXBhaWduLnN2ZydcbmltcG9ydCBJY19maXR1cl9yZXN1bHR0cmFja2luZyBmcm9tICdyZWFjdGlzbS9zdGF0aWMvaWNfZml0dXJfcmVzdWx0dHJhY2tpbmcuc3ZnJ1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TdHlsZSA9IGNzc2BcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgbWFyZ2luOjMwcHggYXV0bztcbiAgICAuaWNvbnMtZmVhdHVyZXN7XG4gICAgICBpbWd7XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgcC53YXRlcm1hcmt7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgei1pbmRleDogLTExMTExO1xuICAgICAgY29sb3I6ICNlZmY0Zjc7XG4gICAgfVxuICAgIC5saXN0LWZlYXR1cmVzIHtcbiAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5saXN0LWZlYXR1cmVzLTYwMCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmxpc3QtZmVhdHVyZXMtbW9yZS02MDAge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIHAud2F0ZXJtYXJre1xuICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgICAubGlzdC1mZWF0dXJlcy02MDAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLmxpc3QtZmVhdHVyZXMtbW9yZS02MDAge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gICAgYFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgbWFpblN0eWxlIH0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ3YXRlcm1hcmtcIj5GaXR1cjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWZlYXR1cmVzLW1vcmUtNjAwXCI+XG4gICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICByZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHM9eyh7IHByZXZpb3VzU2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfYmFjay5zdmdcIiBhbHQ9XCJhbHRcIiB3aWR0aD17IDYwIH0gb25DbGljaz17IHByZXZpb3VzU2xpZGUgfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgcmVuZGVyQ2VudGVyUmlnaHRDb250cm9scz17KHsgbmV4dFNsaWRlIH0pID0+IChcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX25leHQuc3ZnXCIgYWx0PVwiYWx0XCIgd2lkdGg9eyA2MCB9IG9uQ2xpY2s9eyBuZXh0U2xpZGUgfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1mZWF0dXJlc1wiPlxuICAgICAgICAgICAgICA8SXRlbXMgbmFtZT1cIkxpc3QgTWFuYWdlbWVudFwiIGltZz17IEljX2ZpdHVyX2xpc3RtYW5hZ2VtZW50IH0gY29sb21uPXsgMjQgfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1mZWF0dXJlc1wiPlxuICAgICAgICAgICAgICA8SXRlbXMgbmFtZT1cIlRlbXBsYXRlIE1hbmFnZW1lbnRcIiBpbWc9eyBJY190dXRvcl90ZW1wbGF0ZSB9IGNvbG9tbj17IDI0IH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZmVhdHVyZXNcIj5cbiAgICAgICAgICAgICAgPEl0ZW1zIG5hbWU9XCJDYW1wYWlnbiBNYW5hZ2VtZW50XCIgaW1nPXsgSWNfZml0dXJfY2FtcGFpZ24gfSBjb2xvbW49eyAyNCB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWZlYXR1cmVzXCI+XG4gICAgICAgICAgICAgIDxJdGVtcyBuYW1lPVwiUmVzdWx0IGFuZCBUcmFja2luZ1wiIGltZz17IEljX2ZpdHVyX3Jlc3VsdHRyYWNraW5nIH0gY29sb21uPXsgMjQgfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZmVhdHVyZXMtNjAwXCI+XG4gICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICByZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHM9eyh7IHByZXZpb3VzU2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfYmFjay5zdmdcIiBhbHQ9XCJhbHRcIiB3aWR0aD17IDYwIH0gb25DbGljaz17IHByZXZpb3VzU2xpZGUgfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgcmVuZGVyQ2VudGVyUmlnaHRDb250cm9scz17KHsgbmV4dFNsaWRlIH0pID0+IChcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX25leHQuc3ZnXCIgYWx0PVwiYWx0XCIgd2lkdGg9eyA2MCB9IG9uQ2xpY2s9eyBuZXh0U2xpZGUgfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1mZWF0dXJlcy02MDBcIj5cbiAgICAgICAgICAgICAgPE1haW5HcmlkIHdpZHRoPXs4MH0+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIG5hbWU9XCJMaXN0IE1hbmFnZW1lbnRcIiBpbWc9eyBJY19maXR1cl9saXN0bWFuYWdlbWVudCB9IGNvbG9tbj17IDYgfS8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIG5hbWU9XCJUZW1wbGF0ZSBNYW5hZ2VtZW50XCIgaW1nPXsgSWNfdHV0b3JfdGVtcGxhdGUgfSBjb2xvbW49eyA2IH0vPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBuYW1lPVwiQ2FtcGFpZ24gTWFuYWdlbWVudFwiIGltZz17IEljX2ZpdHVyX2NhbXBhaWduIH0gY29sb21uPXsgNiB9Lz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgbmFtZT1cIlJlc3VsdCBhbmQgVHJhY2tpbmdcIiBpbWc9eyBJY19maXR1cl9yZXN1bHR0cmFja2luZyB9IGNvbG9tbj17IDYgfS8+XG4gICAgICAgICAgICAgIDwvTWFpbkdyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: mainStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "watermark"
  }, "Fitur"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-features-more-600"
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
    className: "list-features"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "List Management",
    img: reactism_static_ic_fitur_listmanagement_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    colomn: 24
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-features"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Template Management",
    img: reactism_static_ic_tutor_template_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    colomn: 24
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-features"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Campaign Management",
    img: reactism_static_ic_fitur_campaign_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    colomn: 24
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-features"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Result and Tracking",
    img: reactism_static_ic_fitur_resulttracking_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    colomn: 24
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-features-600"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(nuka_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    renderCenterLeftControls: function renderCenterLeftControls(_ref3) {
      var previousSlide = _ref3.previousSlide;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/ic_back.svg",
        alt: "alt",
        width: 60,
        onClick: previousSlide
      });
    },
    renderCenterRightControls: function renderCenterRightControls(_ref4) {
      var nextSlide = _ref4.nextSlide;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/ic_next.svg",
        alt: "alt",
        width: 60,
        onClick: nextSlide
      });
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-features-600"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_mainGrid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 80
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "List Management",
    img: reactism_static_ic_fitur_listmanagement_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    colomn: 6
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Template Management",
    img: reactism_static_ic_tutor_template_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    colomn: 6
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Campaign Management",
    img: reactism_static_ic_fitur_campaign_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    colomn: 6
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partials_items__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "Result and Tracking",
    img: reactism_static_ic_fitur_resulttracking_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    colomn: 6
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=detailsCustomer.js.4e70233aaa0a6e501461.hot-update.js.map
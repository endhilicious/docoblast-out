webpackHotUpdate("static/development/pages/information/detailsCustomer.js",{

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
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("width:100%;float:left;margin:30px auto;.icons-features{img{padding:10px;}}.list-features{height:250px;text-align:center;}.list-features-600{display:block;text-align:center;}.list-features-more-600{display:none;text-align:center;}@media screen and (max-width:600px){.list-features-600{display:none;}.list-features-more-600{display:block;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL291ckRldGFpbHNDbGllbnQvc2xpZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIiLCJmaWxlIjoiL1VzZXJzL2VuZGkvRG9jdW1lbnRzL2NvZGluZy9uZXh0L3Byb2plY3QvdGVzdC9jb21wb25lbnRzL2NvbnRhaW5lcnMvb3VyRGV0YWlsc0NsaWVudC9zbGlkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdudWthLWNhcm91c2VsJztcbmltcG9ydCBNYWluR3JpZCBmcm9tICdyZWFjdGlzbS9jb21wb25lbnRzL2NvbnRhaW5lcnMvZ3JpZExheW91dHMvbWFpbkdyaWQnXG5pbXBvcnQgSXRlbXMgZnJvbSAnLi9wYXJ0aWFscy9pdGVtcydcbmltcG9ydCBJY19maXR1cl9saXN0bWFuYWdlbWVudCBmcm9tICdyZWFjdGlzbS9zdGF0aWMvaWNfZml0dXJfbGlzdG1hbmFnZW1lbnQuc3ZnJ1xuaW1wb3J0IEljX3R1dG9yX3RlbXBsYXRlIGZyb20gJ3JlYWN0aXNtL3N0YXRpYy9pY190dXRvcl90ZW1wbGF0ZS5zdmcnXG5pbXBvcnQgSWNfZml0dXJfY2FtcGFpZ24gZnJvbSAncmVhY3Rpc20vc3RhdGljL2ljX2ZpdHVyX2NhbXBhaWduLnN2ZydcbmltcG9ydCBJY19maXR1cl9yZXN1bHR0cmFja2luZyBmcm9tICdyZWFjdGlzbS9zdGF0aWMvaWNfZml0dXJfcmVzdWx0dHJhY2tpbmcuc3ZnJ1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5TdHlsZSA9IGNzc2BcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgbWFyZ2luOjMwcHggYXV0bztcbiAgICAuaWNvbnMtZmVhdHVyZXN7XG4gICAgICBpbWd7XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxpc3QtZmVhdHVyZXMge1xuICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmxpc3QtZmVhdHVyZXMtNjAwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubGlzdC1mZWF0dXJlcy1tb3JlLTYwMCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgLmxpc3QtZmVhdHVyZXMtNjAwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5saXN0LWZlYXR1cmVzLW1vcmUtNjAwIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICAgIGBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IG1haW5TdHlsZSB9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWZlYXR1cmVzLW1vcmUtNjAwXCI+XG4gICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICByZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHM9eyh7IHByZXZpb3VzU2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfYmFjay5zdmdcIiBhbHQ9XCJhbHRcIiB3aWR0aD17IDYwIH0gb25DbGljaz17IHByZXZpb3VzU2xpZGUgfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgcmVuZGVyQ2VudGVyUmlnaHRDb250cm9scz17KHsgbmV4dFNsaWRlIH0pID0+IChcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX25leHQuc3ZnXCIgYWx0PVwiYWx0XCIgd2lkdGg9eyA2MCB9IG9uQ2xpY2s9eyBuZXh0U2xpZGUgfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1mZWF0dXJlc1wiPlxuICAgICAgICAgICAgICA8SXRlbXMgbmFtZT1cIkxpc3QgTWFuYWdlbWVudFwiIGltZz17IEljX2ZpdHVyX2xpc3RtYW5hZ2VtZW50IH0gY29sb21uPXsgMjQgfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1mZWF0dXJlc1wiPlxuICAgICAgICAgICAgICA8SXRlbXMgbmFtZT1cIlRlbXBsYXRlIE1hbmFnZW1lbnRcIiBpbWc9eyBJY190dXRvcl90ZW1wbGF0ZSB9IGNvbG9tbj17IDI0IH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZmVhdHVyZXNcIj5cbiAgICAgICAgICAgICAgPEl0ZW1zIG5hbWU9XCJDYW1wYWlnbiBNYW5hZ2VtZW50XCIgaW1nPXsgSWNfZml0dXJfY2FtcGFpZ24gfSBjb2xvbW49eyAyNCB9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWZlYXR1cmVzXCI+XG4gICAgICAgICAgICAgIDxJdGVtcyBuYW1lPVwiUmVzdWx0IGFuZCBUcmFja2luZ1wiIGltZz17IEljX2ZpdHVyX3Jlc3VsdHRyYWNraW5nIH0gY29sb21uPXsgMjQgfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZmVhdHVyZXMtNjAwXCI+XG4gICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICByZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHM9eyh7IHByZXZpb3VzU2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfYmFjay5zdmdcIiBhbHQ9XCJhbHRcIiB3aWR0aD17IDYwIH0gb25DbGljaz17IHByZXZpb3VzU2xpZGUgfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgcmVuZGVyQ2VudGVyUmlnaHRDb250cm9scz17KHsgbmV4dFNsaWRlIH0pID0+IChcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljX25leHQuc3ZnXCIgYWx0PVwiYWx0XCIgd2lkdGg9eyA2MCB9IG9uQ2xpY2s9eyBuZXh0U2xpZGUgfS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1mZWF0dXJlcy02MDBcIj5cbiAgICAgICAgICAgICAgPE1haW5HcmlkIHdpZHRoPXs4MH0+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIG5hbWU9XCJMaXN0IE1hbmFnZW1lbnRcIiBpbWc9eyBJY19maXR1cl9saXN0bWFuYWdlbWVudCB9IGNvbG9tbj17IDYgfS8+XG4gICAgICAgICAgICAgICAgPEl0ZW1zIG5hbWU9XCJUZW1wbGF0ZSBNYW5hZ2VtZW50XCIgaW1nPXsgSWNfdHV0b3JfdGVtcGxhdGUgfSBjb2xvbW49eyA2IH0vPlxuICAgICAgICAgICAgICAgIDxJdGVtcyBuYW1lPVwiQ2FtcGFpZ24gTWFuYWdlbWVudFwiIGltZz17IEljX2ZpdHVyX2NhbXBhaWduIH0gY29sb21uPXsgNiB9Lz5cbiAgICAgICAgICAgICAgICA8SXRlbXMgbmFtZT1cIlJlc3VsdCBhbmQgVHJhY2tpbmdcIiBpbWc9eyBJY19maXR1cl9yZXN1bHR0cmFja2luZyB9IGNvbG9tbj17IDYgfS8+XG4gICAgICAgICAgICAgIDwvTWFpbkdyaWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: mainStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
//# sourceMappingURL=detailsCustomer.js.69a1824529a647bea10b.hot-update.js.map
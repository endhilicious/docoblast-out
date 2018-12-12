webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/containers/features/partials/listSliders.jsx":
/*!*****************************************************************!*\
  !*** ./components/containers/features/partials/listSliders.jsx ***!
  \*****************************************************************/
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
/* harmony import */ var _items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items */ "./components/containers/features/partials/items.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







var ListSliders = function ListSliders() {
  var data = [{
    title: 'Pengalaman',
    image: 'ic_mengapa_pengalaman.svg'
  }, {
    title: 'Up To Date',
    image: 'ic_mengapa_uptodate.svg'
  }, {
    title: 'Kenyamanan',
    image: 'ic_mengapa_kenyamanan.svg'
  }, {
    title: 'Kecepatan',
    image: 'ic_mengapa_kecepatan.svg'
  }, {
    title: 'Terpercaya',
    image: 'ic_mengapa_terpercaya.svg'
  }, {
    title: 'Tanpa Resiko',
    image: 'ic_mengapa_tanparesiko.svg'
  }];
  var mainStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("width:100%;float:left;margin:auto;.img-doco{padding:60px 0px;width:110%;margin-left:-80px;}.content-list{margin-top:100px;padding:0px 100px 0px 20px;p{color:#fff;font-size:2.5rem;}span{color:#f9f9f9;font-weight:100;line-height:1.6em;}a{color:#fff;}}.slider-list{height:300px !important;}div.slider-control-bottomcenter{display:none !important;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2ZlYXR1cmVzL3BhcnRpYWxzL2xpc3RTbGlkZXJzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQnVCIiwiZmlsZSI6Ii9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2ZlYXR1cmVzL3BhcnRpYWxzL2xpc3RTbGlkZXJzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2Vtb3Rpb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCc7XG5pbXBvcnQgSXRlbXMgIGZyb20gJy4vaXRlbXMnXG5pbXBvcnQgTGlzdEdyaWQgZnJvbSAncmVhY3Rpc20vY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL2xpc3RHcmlkJ1xuXG5jb25zdCBMaXN0U2xpZGVycyA9ICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IFtcbiAgICB7dGl0bGU6J1BlbmdhbGFtYW4nLGltYWdlOidpY19tZW5nYXBhX3BlbmdhbGFtYW4uc3ZnJ30sXG4gICAge3RpdGxlOidVcCBUbyBEYXRlJyxpbWFnZTonaWNfbWVuZ2FwYV91cHRvZGF0ZS5zdmcnfSxcbiAgICB7dGl0bGU6J0tlbnlhbWFuYW4nLGltYWdlOidpY19tZW5nYXBhX2tlbnlhbWFuYW4uc3ZnJ30sXG4gICAge3RpdGxlOidLZWNlcGF0YW4nLGltYWdlOidpY19tZW5nYXBhX2tlY2VwYXRhbi5zdmcnfSxcbiAgICB7dGl0bGU6J1RlcnBlcmNheWEnLGltYWdlOidpY19tZW5nYXBhX3RlcnBlcmNheWEuc3ZnJ30sXG4gICAge3RpdGxlOidUYW5wYSBSZXNpa28nLGltYWdlOidpY19tZW5nYXBhX3RhbnBhcmVzaWtvLnN2Zyd9XG4gIF1cblxuICBjb25zdCBtYWluU3R5bGUgPSBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5pbWctZG9jb3tcbiAgICAgIHBhZGRpbmc6IDYwcHggMHB4O1xuICAgICAgd2lkdGg6IDExMCU7XG4gICAgICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gICAgfVxuICAgIC5jb250ZW50LWxpc3R7XG4gICAgICBtYXJnaW4tdG9wOjEwMHB4O1xuICAgICAgcGFkZGluZzogMHB4IDEwMHB4IDBweCAyMHB4O1xuICAgICAgcHtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICB9XG4gICAgICBzcGFue1xuICAgICAgICBjb2xvcjojZjlmOWY5O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42ZW07XG4gICAgICB9XG4gICAgICBhe1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgfVxuICAgICAgLyogLnNsaWRlci1saXN0IHtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGN0ZBO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgfSAqL1xuICAgIH1cbiAgICAuc2xpZGVyLWxpc3Qge1xuICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBkaXYuc2xpZGVyLWNvbnRyb2wtYm90dG9tY2VudGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgYFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgbWFpblN0eWxlIH0+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgcmVuZGVyQ2VudGVyTGVmdENvbnRyb2xzPXsoeyBwcmV2aW91c1NsaWRlIH0pID0+IChcbiAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNfYmFjay5zdmdcIiBhbHQ9XCJhbHRcIiB3aWR0aD17NjB9IG9uQ2xpY2s9eyBwcmV2aW91c1NsaWRlIH0vPlxuICAgICAgICApfVxuICAgICAgICByZW5kZXJDZW50ZXJSaWdodENvbnRyb2xzPXsoeyBuZXh0U2xpZGUgfSkgPT4gKFxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY19uZXh0LnN2Z1wiIGFsdD1cImFsdFwiIHdpZHRoPXs2MH0gb25DbGljaz17IG5leHRTbGlkZSB9Lz5cbiAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyQ2VudGVyQ2VudGVyQ29udHJvbHM9eygpID0+IChcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEubWFwKChpdGVtICwgaW5kZXggKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItbGlzdFwiIGtleT17IGluZGV4IH0+XG4gICAgICAgICAgICAgICAgICA8SXRlbXMgey4uLml0ZW0gfSBmbG9hdD17aW5kZXglMiAgPT09IDAgPydsZWZ0JyA6J3JpZ2h0JyB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0U2xpZGVyc1xuIl19 */");
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
    },
    renderCenterCenterControls: function renderCenterCenterControls() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
    }
  }, data.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "slider-list",
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_items__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, item, {
      float: index % 2 === 0 ? 'left' : 'right'
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ListSliders);

/***/ })

})
//# sourceMappingURL=products.js.6962737f8826fd4e853b.hot-update.js.map
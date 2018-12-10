webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/containers/home/main/index.jsx":
/*!***************************************************!*\
  !*** ./components/containers/home/main/index.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var reactism_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactism/utils */ "./components/utilities/index.jsx");
/* harmony import */ var reactism_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactism/elements */ "./components/elements/index.jsx");
/* harmony import */ var reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactism/components/containers/gridLayouts/listGrid */ "./components/containers/gridLayouts/listGrid.jsx");
/* harmony import */ var reactism_static_bs_mockup_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactism/static/bs_mockup.png */ "./static/bs_mockup.png");
/* harmony import */ var reactism_static_bs_mockup_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactism_static_bs_mockup_png__WEBPACK_IMPORTED_MODULE_6__);








var Index = function Index(props) {
  var mainStyle =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("@import url('https://fonts.googleapis.com/css?family=Ubuntu:100,100i,200,200i,400,400i,500,500i,700,700i');font-family:'Ubuntu',sans-serif;display:flex;width:100%;padding:15vh 0px 15vh;background-color:#fff;font-weight:200;p.headline{font-size:2.6rem;font-weight:500;margin-bottom:0px;padding-right:40px;line-height:56px;}p.sub-headline{font-size:1.1rem;line-height:32px;opacity:0.7;}.buy-now{a{color:#17c0eb;}}img{right:-120px;width:130%;}@media screen and (max-width:600px){width:100%;min-height:85vh;display:block;padding:15vh 0px 0px;p.headline{font-size:1.7rem;padding-right:0px;width:90%;margin:0px auto;line-height:36px;}.sub-headline{font-size:1.1rem;line-height:32px;opacity:0.7;width:90%;margin:25px auto;}img{right:0px;width:100%;}}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvbWFpbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT3VCIiwiZmlsZSI6Ii9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvbWFpbi9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdlbW90aW9uJ1xuaW1wb3J0IHsgQmFja2dyb3VuZCB9IGZyb20gJ3JlYWN0aXNtL3V0aWxzJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3Rpc20vZWxlbWVudHMnXG5pbXBvcnQgTGlzdEdyaWQgZnJvbSAncmVhY3Rpc20vY29tcG9uZW50cy9jb250YWluZXJzL2dyaWRMYXlvdXRzL2xpc3RHcmlkJ1xuaW1wb3J0IE1vY2tVcCBmcm9tICdyZWFjdGlzbS9zdGF0aWMvYnNfbW9ja3VwLnBuZydcbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4ge1xuICBjb25zdCBtYWluU3R5bGUgPSBjc3NgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVVidW50dToxMDAsMTAwaSwyMDAsMjAwaSw0MDAsNDAwaSw1MDAsNTAwaSw3MDAsNzAwaScpO1xuICAgICAgZm9udC1mYW1pbHk6ICdVYnVudHUnLCBzYW5zLXNlcmlmO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxNXZoIDBweCAxNXZoO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICBwLmhlYWRsaW5le1xuICAgICAgICBmb250LXNpemU6IDIuNnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICAgIH1cbiAgICAgIHAuc3ViLWhlYWRsaW5le1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIG9wYWNpdHk6MC43O1xuICAgICAgfVxuICAgICAgLmJ1eS1ub3d7XG4gICAgICAgIGF7XG4gICAgICAgICAgY29sb3I6ICMxN2MwZWI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGltZ3tcbiAgICAgICAgcmlnaHQ6IC0xMjBweDtcbiAgICAgICAgd2lkdGg6IDEzMCU7XG4gICAgICB9XG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogODV2aDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDE1dmggMHB4IDBweDtcbiAgICAgICAgcC5oZWFkbGluZXtcbiAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5zdWItaGVhZGxpbmUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGltZ3tcbiAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuICBjb25zdCBzdHlsZUdyaWRIZWFkbGluZSA9IGNzc2BcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA4JTtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIGBcbiAgY29uc3Qgc3R5bGVHcmlkSW1hZ2UgPSBjc3NgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIGBcbiAgY29uc3QgY29sb3JCdXR0b24gPSBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTc5OEQxO1xuICAgIGNvbG9yOiNmZmY7XG4gIGBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgbWFpblN0eWxlIH0+XG4gICAgICA8TGlzdEdyaWQgY29scz17MTB9IHN0eWxlPXsgc3R5bGVHcmlkSGVhZGxpbmUgfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGxpbmVcIj5LYW1wYW55ZSBEaWdpdGFsIEFuZGEgVGlkYWsgUGVybmFoIFNlbWVueWVuYW5na2FuIEluaTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWhlYWRsaW5lXCI+RG9jb0JsYXN0IGFkYWxhaCBzb2x1c2kgdGVyYmFpayBFbWFpbCAmIFNNUyBNYXJrZXRpbmcsIGRlbmdhbiBmaXR1ci1maXR1ciB5YW5nIGxlbmdrYXAgZGFuIGlzdGltZXdhIHVudHVrIEFuZGE8L3A+XG4gICAgICAgIDxCdXR0b24gc3R5bGU9eyBjb2xvckJ1dHRvbiB9IHdpZHRoPXs1MH0+Q29iYSBHcmF0aXM8L0J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYnV5LW5vd1wiPmF0YXUgPGEgaHJlZj1cIiNcIj5iZWxpIHNla2FyYW5nIGp1Z2E8L2E+PC9wPlxuICAgICAgPC9MaXN0R3JpZD5cbiAgICAgIDxMaXN0R3JpZCBjb2xzPXsxMn0gc3R5bGU9eyBzdHlsZUdyaWRJbWFnZSB9PlxuICAgICAgICA8aW1nIHNyYz17IE1vY2tVcCB9IGFsdD1cImltYWdlIGRvY29ibGFzdFwiIC8+XG4gICAgICA8L0xpc3RHcmlkPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */");
  var styleGridHeadline =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("@media screen and (min-width:600px){margin:0px 0px 0px 8%;}@media screen and (max-width:600px){text-align:center;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvbWFpbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEQrQiIsImZpbGUiOiIvVXNlcnMvZW5kaS9Eb2N1bWVudHMvY29kaW5nL25leHQvcHJvamVjdC90ZXN0L2NvbXBvbmVudHMvY29udGFpbmVycy9ob21lL21haW4vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICdyZWFjdGlzbS91dGlscydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0aXNtL2VsZW1lbnRzJ1xuaW1wb3J0IExpc3RHcmlkIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9saXN0R3JpZCdcbmltcG9ydCBNb2NrVXAgZnJvbSAncmVhY3Rpc20vc3RhdGljL2JzX21vY2t1cC5wbmcnXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgY29uc3QgbWFpblN0eWxlID0gY3NzYFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHU6MTAwLDEwMGksMjAwLDIwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGknKTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTV2aCAwcHggMTV2aDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgcC5oZWFkbGluZXtcbiAgICAgICAgZm9udC1zaXplOiAyLjZyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICB9XG4gICAgICBwLnN1Yi1oZWFkbGluZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBvcGFjaXR5OjAuNztcbiAgICAgIH1cbiAgICAgIC5idXktbm93e1xuICAgICAgICBhe1xuICAgICAgICAgIGNvbG9yOiAjMTdjMGViO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWd7XG4gICAgICAgIHJpZ2h0OiAtMTIwcHg7XG4gICAgICAgIHdpZHRoOiAxMzAlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDg1dmg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxNXZoIDBweCAwcHg7XG4gICAgICAgIHAuaGVhZGxpbmV7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViLWhlYWRsaW5lIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgY29uc3Qgc3R5bGVHcmlkSGVhZGxpbmUgPSBjc3NgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggOCU7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBgXG4gIGNvbnN0IHN0eWxlR3JpZEltYWdlID0gY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICBgXG4gIGNvbnN0IGNvbG9yQnV0dG9uID0gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6IzE3OThEMTtcbiAgICBjb2xvcjojZmZmO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IG1haW5TdHlsZSB9PlxuICAgICAgPExpc3RHcmlkIGNvbHM9ezEwfSBzdHlsZT17IHN0eWxlR3JpZEhlYWRsaW5lIH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+S2FtcGFueWUgRGlnaXRhbCBBbmRhIFRpZGFrIFBlcm5haCBTZW1lbnllbmFuZ2thbiBJbmk8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1oZWFkbGluZVwiPkRvY29CbGFzdCBhZGFsYWggc29sdXNpIHRlcmJhaWsgRW1haWwgJiBTTVMgTWFya2V0aW5nLCBkZW5nYW4gZml0dXItZml0dXIgeWFuZyBsZW5na2FwIGRhbiBpc3RpbWV3YSB1bnR1ayBBbmRhPC9wPlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXsgY29sb3JCdXR0b24gfSB3aWR0aD17NTB9PkNvYmEgR3JhdGlzPC9CdXR0b24+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1eS1ub3dcIj5hdGF1IDxhIGhyZWY9XCIjXCI+YmVsaSBzZWthcmFuZyBqdWdhPC9hPjwvcD5cbiAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICA8TGlzdEdyaWQgY29scz17MTJ9IHN0eWxlPXsgc3R5bGVHcmlkSW1hZ2UgfT5cbiAgICAgICAgPGltZyBzcmM9eyBNb2NrVXAgfSBhbHQ9XCJpbWFnZSBkb2NvYmxhc3RcIiAvPlxuICAgICAgPC9MaXN0R3JpZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */");
  var styleGridImage =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("position:relative;overflow:hidden;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvbWFpbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0U0QiIsImZpbGUiOiIvVXNlcnMvZW5kaS9Eb2N1bWVudHMvY29kaW5nL25leHQvcHJvamVjdC90ZXN0L2NvbXBvbmVudHMvY29udGFpbmVycy9ob21lL21haW4vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICdyZWFjdGlzbS91dGlscydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0aXNtL2VsZW1lbnRzJ1xuaW1wb3J0IExpc3RHcmlkIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9saXN0R3JpZCdcbmltcG9ydCBNb2NrVXAgZnJvbSAncmVhY3Rpc20vc3RhdGljL2JzX21vY2t1cC5wbmcnXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgY29uc3QgbWFpblN0eWxlID0gY3NzYFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHU6MTAwLDEwMGksMjAwLDIwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGknKTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTV2aCAwcHggMTV2aDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgcC5oZWFkbGluZXtcbiAgICAgICAgZm9udC1zaXplOiAyLjZyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICB9XG4gICAgICBwLnN1Yi1oZWFkbGluZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBvcGFjaXR5OjAuNztcbiAgICAgIH1cbiAgICAgIC5idXktbm93e1xuICAgICAgICBhe1xuICAgICAgICAgIGNvbG9yOiAjMTdjMGViO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWd7XG4gICAgICAgIHJpZ2h0OiAtMTIwcHg7XG4gICAgICAgIHdpZHRoOiAxMzAlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDg1dmg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxNXZoIDBweCAwcHg7XG4gICAgICAgIHAuaGVhZGxpbmV7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViLWhlYWRsaW5lIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgY29uc3Qgc3R5bGVHcmlkSGVhZGxpbmUgPSBjc3NgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggOCU7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBgXG4gIGNvbnN0IHN0eWxlR3JpZEltYWdlID0gY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICBgXG4gIGNvbnN0IGNvbG9yQnV0dG9uID0gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6IzE3OThEMTtcbiAgICBjb2xvcjojZmZmO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IG1haW5TdHlsZSB9PlxuICAgICAgPExpc3RHcmlkIGNvbHM9ezEwfSBzdHlsZT17IHN0eWxlR3JpZEhlYWRsaW5lIH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+S2FtcGFueWUgRGlnaXRhbCBBbmRhIFRpZGFrIFBlcm5haCBTZW1lbnllbmFuZ2thbiBJbmk8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1oZWFkbGluZVwiPkRvY29CbGFzdCBhZGFsYWggc29sdXNpIHRlcmJhaWsgRW1haWwgJiBTTVMgTWFya2V0aW5nLCBkZW5nYW4gZml0dXItZml0dXIgeWFuZyBsZW5na2FwIGRhbiBpc3RpbWV3YSB1bnR1ayBBbmRhPC9wPlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXsgY29sb3JCdXR0b24gfSB3aWR0aD17NTB9PkNvYmEgR3JhdGlzPC9CdXR0b24+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1eS1ub3dcIj5hdGF1IDxhIGhyZWY9XCIjXCI+YmVsaSBzZWthcmFuZyBqdWdhPC9hPjwvcD5cbiAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICA8TGlzdEdyaWQgY29scz17MTJ9IHN0eWxlPXsgc3R5bGVHcmlkSW1hZ2UgfT5cbiAgICAgICAgPGltZyBzcmM9eyBNb2NrVXAgfSBhbHQ9XCJpbWFnZSBkb2NvYmxhc3RcIiAvPlxuICAgICAgPC9MaXN0R3JpZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */");
  var colorButton =
  /*#__PURE__*/
  Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("background-color:#1798D1;color:#fff;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbmRpL0RvY3VtZW50cy9jb2RpbmcvbmV4dC9wcm9qZWN0L3Rlc3QvY29tcG9uZW50cy9jb250YWluZXJzL2hvbWUvbWFpbi9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEV5QiIsImZpbGUiOiIvVXNlcnMvZW5kaS9Eb2N1bWVudHMvY29kaW5nL25leHQvcHJvamVjdC90ZXN0L2NvbXBvbmVudHMvY29udGFpbmVycy9ob21lL21haW4vaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZW1vdGlvbidcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tICdyZWFjdGlzbS91dGlscydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0aXNtL2VsZW1lbnRzJ1xuaW1wb3J0IExpc3RHcmlkIGZyb20gJ3JlYWN0aXNtL2NvbXBvbmVudHMvY29udGFpbmVycy9ncmlkTGF5b3V0cy9saXN0R3JpZCdcbmltcG9ydCBNb2NrVXAgZnJvbSAncmVhY3Rpc20vc3RhdGljL2JzX21vY2t1cC5wbmcnXG5jb25zdCBJbmRleCA9IHByb3BzID0+IHtcbiAgY29uc3QgbWFpblN0eWxlID0gY3NzYFxuICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHU6MTAwLDEwMGksMjAwLDIwMGksNDAwLDQwMGksNTAwLDUwMGksNzAwLDcwMGknKTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTV2aCAwcHggMTV2aDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgcC5oZWFkbGluZXtcbiAgICAgICAgZm9udC1zaXplOiAyLjZyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgICB9XG4gICAgICBwLnN1Yi1oZWFkbGluZXtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBvcGFjaXR5OjAuNztcbiAgICAgIH1cbiAgICAgIC5idXktbm93e1xuICAgICAgICBhe1xuICAgICAgICAgIGNvbG9yOiAjMTdjMGViO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbWd7XG4gICAgICAgIHJpZ2h0OiAtMTIwcHg7XG4gICAgICAgIHdpZHRoOiAxMzAlO1xuICAgICAgfVxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDg1dmg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxNXZoIDBweCAwcHg7XG4gICAgICAgIHAuaGVhZGxpbmV7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgfVxuICAgICAgICAuc3ViLWhlYWRsaW5lIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgICBpbWd7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcbiAgY29uc3Qgc3R5bGVHcmlkSGVhZGxpbmUgPSBjc3NgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggOCU7XG4gICAgfVxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBgXG4gIGNvbnN0IHN0eWxlR3JpZEltYWdlID0gY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICBgXG4gIGNvbnN0IGNvbG9yQnV0dG9uID0gY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6IzE3OThEMTtcbiAgICBjb2xvcjojZmZmO1xuICBgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IG1haW5TdHlsZSB9PlxuICAgICAgPExpc3RHcmlkIGNvbHM9ezEwfSBzdHlsZT17IHN0eWxlR3JpZEhlYWRsaW5lIH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRsaW5lXCI+S2FtcGFueWUgRGlnaXRhbCBBbmRhIFRpZGFrIFBlcm5haCBTZW1lbnllbmFuZ2thbiBJbmk8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1oZWFkbGluZVwiPkRvY29CbGFzdCBhZGFsYWggc29sdXNpIHRlcmJhaWsgRW1haWwgJiBTTVMgTWFya2V0aW5nLCBkZW5nYW4gZml0dXItZml0dXIgeWFuZyBsZW5na2FwIGRhbiBpc3RpbWV3YSB1bnR1ayBBbmRhPC9wPlxuICAgICAgICA8QnV0dG9uIHN0eWxlPXsgY29sb3JCdXR0b24gfSB3aWR0aD17NTB9PkNvYmEgR3JhdGlzPC9CdXR0b24+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImJ1eS1ub3dcIj5hdGF1IDxhIGhyZWY9XCIjXCI+YmVsaSBzZWthcmFuZyBqdWdhPC9hPjwvcD5cbiAgICAgIDwvTGlzdEdyaWQ+XG4gICAgICA8TGlzdEdyaWQgY29scz17MTJ9IHN0eWxlPXsgc3R5bGVHcmlkSW1hZ2UgfT5cbiAgICAgICAgPGltZyBzcmM9eyBNb2NrVXAgfSBhbHQ9XCJpbWFnZSBkb2NvYmxhc3RcIiAvPlxuICAgICAgPC9MaXN0R3JpZD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: mainStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 10,
    style: styleGridHeadline
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "headline"
  }, "Kampanye Digital Anda Tidak Pernah Semenyenangkan Ini"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "sub-headline"
  }, "DocoBlast adalah solusi terbaik Email & SMS Marketing, dengan fitur-fitur yang lengkap dan istimewa untuk Anda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: colorButton,
    width: 50
  }, "Coba Gratis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "buy-now"
  }, "atau ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "beli sekarang juga"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactism_components_containers_gridLayouts_listGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cols: 12,
    style: styleGridImage
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: reactism_static_bs_mockup_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "image docoblast"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.be5db4cf666b34f9f48f.hot-update.js.map
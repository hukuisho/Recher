/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./resources/ts/commons/profile_delete_pre.ts ***!
  \****************************************************/


addEventListener("DOMContentLoaded", function () {
  if (location.pathname == "/profile_delete_pre") {
    var richerDisplayShow = document.querySelector("#richer");
    var getBodyShow = document.querySelector("body");
    richerDisplayShow === null || richerDisplayShow === void 0 ? void 0 : richerDisplayShow.setAttribute("style", "display:none;");
    getBodyShow === null || getBodyShow === void 0 ? void 0 : getBodyShow.setAttribute("class", "delete");
    console.log("アカウント削除中");
    var time = 0;
    setTimeout(function () {
      window.location.href = "/";
    }, time += 2500);
  }
});
/******/ })()
;
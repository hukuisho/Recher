/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/ts/member/search/search.ts ***!
  \**********************************************/


addEventListener("DOMContentLoaded", function () {
  var searchWord = document.querySelector("#searchWord");
  var searchInput = document.querySelector("#searchInput");
  searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("click", function () {
    if (!Object(searchWord).value.match(/\S/g)) {
      var time = 0;
      alert("適切な検索ワードを入力してください");
      setTimeout(function () {
        window.location.href = "/member/search";
      }, time += 10);
    } else {
      var searchFormAction = document.querySelector("#searchFormAction");
      alert("Google検索ページへ移動します。");
      Object(searchFormAction).setAttribute("action", "http://www.google.co.jp/search");
    }
  });
});
/******/ })()
;
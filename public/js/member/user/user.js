/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./resources/ts/member/user/user.ts ***!
  \******************************************/


addEventListener("DOMContentLoaded", function () {
  if (document.URL.match("edit")) {
    var isUserEditKeyName = "visited";
    var isUserEditKeyValue = "true";
    var isFirstAlertText = "不適切な名前やメールアドレスの入力では、\n更新されることはありません";
    var visitedConsoleLogText = "訪問済み";

    if (!localStorage.getItem(isUserEditKeyName)) {
      //sessionStorageにキーと値を追加
      localStorage.setItem(isUserEditKeyName, isUserEditKeyValue); //ここに初回アクセス時の処理

      alert(isFirstAlertText);
    } else {
      console.log(visitedConsoleLogText);
    }
  }
});
/******/ })()
;
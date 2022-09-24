/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./resources/ts/member/user/user.ts ***!
  \******************************************/


addEventListener("DOMContentLoaded", function () {
  if (document.URL.match("edit")) {
    var userEditKeyValue = {
      key: "visited",
      value: "true"
    };
    var isWarningText = document.querySelector("#isWarningText");
    var isFirstAlertText = "不適切な名前や\nメールアドレスの入力では、\n更新されることはありません";
    var visitedConsoleLogText = "不適切な名前や" + "<br>" + "メールアドレスの入力では、" + "<br>" + "更新されることはありません";

    if (!localStorage.getItem(userEditKeyValue["key"])) {
      //sessionStorageにキーと値を追加
      localStorage.setItem(userEditKeyValue["key"], userEditKeyValue["value"]);
      isWarningText.innerHTML = visitedConsoleLogText; //ここに初回アクセス時の処理

      alert(isFirstAlertText);
    } else {
      isWarningText.innerHTML = visitedConsoleLogText;
    }
  }
});
/******/ })()
;
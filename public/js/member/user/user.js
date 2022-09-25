/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./resources/ts/member/user/user.ts ***!
  \******************************************/


addEventListener("DOMContentLoaded", function () {
  if (document.URL.match("edit")) {
    // icon s
    var PATTERN_KEY = ["アイコン１", "アイコン2", "アイコン3", "アイコン4", "アイコン5"];
    var getSelctIconOption = document.querySelectorAll("option");
    var ICON_OPTION_LIST = Object(getSelctIconOption).length;
    var selectIconList = document.querySelector("#selectIconList");

    for (var i = 0; i < ICON_OPTION_LIST; i++) {
      Object(getSelctIconOption[i]).innerHTML = PATTERN_KEY[i];
    } // セレクトボックスの値によって画像を切り替える。


    var changeIcon = document.querySelector("#changeIcon");
    selectIconList === null || selectIconList === void 0 ? void 0 : selectIconList.addEventListener("change", function () {
      if (Object(selectIconList).value) {
        changeIcon.setAttribute("src", Object(selectIconList).value);
      }
    }); // icon e

    var userEditKeyValue = {
      key: "visited",
      value: "true"
    };
    var isWarningText = document.querySelector("#isWarningText");
    var isFirstAlertText = "不適切な名前や\nメールアドレスの入力では、\n更新されることはありません";
    var visitedConsoleLogText = "不適切な名前や" + "<br>" + "メールアドレスの入力では、" + "<br>" + "更新されることはありません";

    if (!localStorage.getItem(userEditKeyValue["key"])) {
      //localStorageにキーと値を追加
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
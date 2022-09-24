/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/ts/member/top/top.ts ***!
  \****************************************/


addEventListener("DOMContentLoaded", function () {
  if (location.pathname == "/member") {
    var richerDisplay = document.querySelector(".richer");
    var getBody = document.querySelector("body");
    var loadAnimationKey = "visited";
    var loadAnimationKeyValue = "true";

    if (!sessionStorage.getItem(loadAnimationKey)) {
      //sessionStorageにキーと値を追加
      sessionStorage.setItem(loadAnimationKey, loadAnimationKeyValue); //ここに初回アクセス時の処理

      richerDisplay === null || richerDisplay === void 0 ? void 0 : richerDisplay.setAttribute("style", "display:none;");
      getBody === null || getBody === void 0 ? void 0 : getBody.setAttribute("class", "loading");
      console.log("ログインしました");
      var time = 0;
      setTimeout(function () {
        getBody === null || getBody === void 0 ? void 0 : getBody.classList.remove("loading");
        richerDisplay === null || richerDisplay === void 0 ? void 0 : richerDisplay.setAttribute("style", "display:block;");
      }, time += 2500);
    } else {
      //ここに通常アクセス時の処理
      console.log("ログイン中です");
    }
  }

  var getGreetingText = document.querySelector("#getGreetingText");
  var GREETING_TYPE = ["おはよう", "こんにちは", "こんばんは"];
  var MORNING = GREETING_TYPE[0],
      AFTERNOON = GREETING_TYPE[1],
      EVENING = GREETING_TYPE[2];
  var now = new Date();
  var hour = now.getHours();

  if (hour >= 4 && hour <= 10) {
    getGreetingText.innerHTML = MORNING;
  } else if (hour >= 11 && hour <= 17) {
    getGreetingText.innerHTML = AFTERNOON;
  } else if (hour >= 18 || hour <= 3) {
    getGreetingText.innerHTML = EVENING;
  }
});
/******/ })()
;
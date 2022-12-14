/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/ts/member/top/top.ts ***!
  \****************************************/


addEventListener("DOMContentLoaded", function () {
  if (location.pathname == "/member") {
    var loadingAnimationKeyValue = {
      key: "visited",
      value: "true"
    };
    var richerDisplay = document.querySelector("#richer");
    var getBody = document.querySelector("body");

    if (!sessionStorage.getItem(loadingAnimationKeyValue["key"])) {
      //sessionStorageにキーと値を追加
      sessionStorage.setItem(loadingAnimationKeyValue["key"], loadingAnimationKeyValue["value"]); //ここに初回アクセス時の処理

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
  var now = new Date();
  var hour = now.getHours();

  if (hour >= 4 && hour <= 10) {
    getGreetingText.innerHTML = "おはよう";
  } else if (hour >= 11 && hour <= 17) {
    getGreetingText.innerHTML = "こんにちは";
  } else if (hour >= 18 || hour <= 3) {
    getGreetingText.innerHTML = "こんばんは";
  }
});
/******/ })()
;
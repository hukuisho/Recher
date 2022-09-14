/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/ts/member/top/top.ts ***!
  \****************************************/


addEventListener("DOMContentLoaded", function () {
  var getGreetingText = document.querySelector("#greetingText");
  var GREETING_TYPE = ["おはようございます", "こんにちは", "こんばんは"];
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
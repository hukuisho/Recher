/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./resources/ts/commons/months/january.ts ***!
  \************************************************/


var januaryAnimation = function januaryAnimation() {
  var januaryAnimation = document.querySelector("#januaryAnimation");
  var januaryAnimationText = document.querySelector("#januaryAnimationText");
  var januaryAnimationHagoita1 = document.querySelector("#januaryAnimationHagoita1");
  var januaryAnimationHagoita2 = document.querySelector("#januaryAnimationHagoita2");
  var januaryAnimationHane = document.querySelector("#januaryAnimationHane");
  var januaryAnimationOinori = document.querySelector("#januaryAnimationOinori");
  var time = 0;
  setTimeout(function () {
    Object(januaryAnimationText).innerHTML = "謹賀新年";
    Object(januaryAnimationText).setAttribute("style", "font-size: 200%; color: goldenrod;");
  }, time += 500);
  setTimeout(function () {
    Object(januaryAnimationText).setAttribute("style", "font-size: 120%; color: rgb(198 58 126);");
  }, time += 2000);
  setTimeout(function () {
    Object(januaryAnimationText).innerHTML = "今年はどんな一年になるだろう...";
    Object(januaryAnimationText).setAttribute("style", "font-size: 120%; color:black;");
  }, time += 2700);
  setTimeout(function () {
    Object(januaryAnimationText).innerHTML = "";
    januaryAnimationHagoita1.classList.add("show");
    januaryAnimationHagoita2.classList.add("show");
    januaryAnimationHane.classList.add("show");
    Object(januaryAnimation).setAttribute("style", "background-color: #ffdbed;");
    Object(januaryAnimationText).innerHTML = "<br>" + "<br>" + "あなたにとって" + "<br>" + "幸せな出来事が" + "<br>" + "ありますことを" + "<br>" + "お祈りします🔔";
  }, time += 2500);
  setTimeout(function () {
    januaryAnimationOinori.classList.add("show");
    januaryAnimationText.innerHTML = "お幸せに";
    Object(januaryAnimation).setAttribute("style", "background-color: rgb(230 153 9);");
  }, time += 2000);
  setTimeout(function () {
    switch (location.pathname) {
      case "/member":
        Object(januaryAnimationText).innerHTML = "<a href='/member'>" + "もう一度見る" + "</a>";
        break;

      case "/preview":
        Object(januaryAnimationText).innerHTML = "<a href='/preview'>" + "もう一度見る" + "</a>";
        break;

      case "/about":
        Object(januaryAnimationText).innerHTML = "<a href='/preview'>" + "もう一度見る" + "</a>";
        break;
    }

    Object(januaryAnimationText).setAttribute("style", "text-decoration: underline 2px;");
  }, time += 1000);
};

addEventListener("DOMContentLoaded", function () {
  januaryAnimation();
});
/******/ })()
;
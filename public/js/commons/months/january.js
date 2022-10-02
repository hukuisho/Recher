/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./resources/ts/commons/months/january.ts ***!
  \************************************************/


var januaryAnimation = function januaryAnimation() {
  var januaryAnimationText = document.querySelector("#januaryAnimationText");
  var januaryAnimationHagoita1 = document.querySelector("#januaryAnimationHagoita1");
  var januaryAnimationHagoita2 = document.querySelector("#januaryAnimationHagoita2");
  var januaryAnimationHane = document.querySelector("#januaryAnimationHane");
  var januaryAnimationOinori = document.querySelector("#januaryAnimationOinori");
  var time = 0;
  time += 500;
  setTimeout(function () {
    Object(januaryAnimationText).innerHTML = "謹賀新年";
  }, time);
  time += 2000;
  setTimeout(function () {
    Object(januaryAnimationText).innerHTML = "今年はどんな一年になるだろう...";
  }, time);
  time += 2500;
  setTimeout(function () {
    Object(januaryAnimationText).innerHTML = "";
    januaryAnimationHagoita1.classList.add("show");
    januaryAnimationHagoita2.classList.add("show");
    januaryAnimationHane.classList.add("show");
    Object(januaryAnimationText).innerHTML = "<br>" + "あなたにとって" + "<br>" + "幸せな出来事が" + "<br>" + "ありますことを" + "<br>" + "お祈りします🔔";
  }, time);
  time += 2000;
  setTimeout(function () {
    Object(januaryAnimationText).innerHTML = "<a href='/member'>" + "もう一度見る" + "</a>";
    januaryAnimationOinori.classList.add("show");
    Object(januaryAnimationText).setAttribute("style", "text-decoration: underline 2px;");
  }, time);
  time += 1500;
};

addEventListener("DOMContentLoaded", function () {
  januaryAnimation();
});
/******/ })()
;
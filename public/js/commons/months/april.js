/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/ts/commons/months/april.ts ***!
  \**********************************************/
 //fukui

var aprilAnimation = function aprilAnimation() {
  var aprilAnimationText = document.querySelector("#aprilAnimationText");
  var aprilAnimationSakura = document.querySelector("#aprilAnimationSakura");
  var NewLife = document.querySelector("#NewLife");
  var Support = document.querySelector("#Support");
  var LifeImage = document.querySelector("#LifeImagee");
  var time = 0;
  setTimeout(function () {
    aprilAnimationText.classList.add("show");
    Object(aprilAnimationText).innerHTML = "<br>" + "<br>" + "<br>" + "<br>" + "4月は新しいことが始まりやすい季節・・・";
  }, time += 1000);
  setTimeout(function () {
    switch (location.pathname) {
      case "/member":
        Object(aprilAnimationText).innerHTML = "<br>" + "<br>" + "<br>" + "<br>" + "<a href='/member'>" + "もう一度見る" + "</a>";
        break;

      case "/preview":
        Object(aprilAnimationText).innerHTML = "<br>" + "<br>" + "<br>" + "<br>" + "<a href='/preview'>" + "もう一度見る" + "</a>";
        break;

      case "/about":
        Object(aprilAnimationText).innerHTML = "<br>" + "<br>" + "<br>" + "<br>" + "<a href='/preview'>" + "もう一度見る" + "</a>";
        break;
    }

    Object(aprilAnimationText).setAttribute("style", "text-decoration: underline 2px;");
    aprilAnimationSakura.classList.add("show");
  }, time += 2000);
};

addEventListener("DOMContentLoaded", function () {
  aprilAnimation();
}); //fukui
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************************!*\
  !*** ./resources/ts/commons/months/february.ts ***!
  \*************************************************/


var februaryAnimation = function februaryAnimation() {
  var onikitiImg = document.querySelector("#onikitiImg");
  var mamemakiImg = document.querySelector("#mamemakiImg");
  var loveImg = document.querySelector("#loveImg");
  var februaryAnimationText = document.querySelector("#februaryAnimationText");
  var februaryAnimationBg = document.querySelector("#februaryAnimationBg");
  var time = 800;
  setTimeout(function () {
    onikitiImg === null || onikitiImg === void 0 ? void 0 : onikitiImg.classList.add("show");
  }, time);
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "オラはおにきち";
  }, time += 1200);
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "2月になると...";
  }, time += 1200);
  setTimeout(function () {
    februaryAnimationText.classList.add("show");
    Object(februaryAnimationText).innerHTML = "悪いことしたくなるのだ";
  }, time += 1200);
  setTimeout(function () {
    onikitiImg === null || onikitiImg === void 0 ? void 0 : onikitiImg.classList.remove("show");
    Object(februaryAnimationText).innerHTML = "";
  }, time += 1200);
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "<br>" + "そして村に行き...";
  }, time += 1500);
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "";
  }, time += 2000);
  setTimeout(function () {
    mamemakiImg === null || mamemakiImg === void 0 ? void 0 : mamemakiImg.classList.add("show");
  }, time += 1000);
  setTimeout(function () {
    mamemakiImg === null || mamemakiImg === void 0 ? void 0 : mamemakiImg.classList.remove("show");
  }, time += 3000);
  setTimeout(function () {
    februaryAnimationBg === null || februaryAnimationBg === void 0 ? void 0 : februaryAnimationBg.classList.add("show");
    Object(februaryAnimationText).innerHTML = "<br>" + "そして2月といえば...";
  }, time += 500);
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "<br>" + "大切な人に想いを伝える";
  }, time += 1200);
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "<br>" + "バレンタインデー🍫";
    Object(februaryAnimationText).setAttribute("style", "color: #e76a7f;");
  }, time += 1200);
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "";
  }, time += 1000);
  setTimeout(function () {
    loveImg === null || loveImg === void 0 ? void 0 : loveImg.classList.add("show");
  }, time += 1000);
  setTimeout(function () {
    loveImg === null || loveImg === void 0 ? void 0 : loveImg.classList.remove("show");
  }, time += 2000);
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "<br>" + "良い2月をお過ごしください";
    Object(februaryAnimationText).setAttribute("style", "color: #795548;");
  }, time += 1200);
  setTimeout(function () {
    switch (location.pathname) {
      case "/member":
        Object(februaryAnimationText).innerHTML = "<br>" + "<a href=''>" + "もう一度見る" + "</a>";
        break;

      case "/preview":
        Object(februaryAnimationText).innerHTML = "<br>" + "<a href='/preview'>" + "もう一度見る" + "</a>";
        break;

      case "/about":
        Object(februaryAnimationText).innerHTML = "<br>" + "<a href='/preview'>" + "もう一度見る" + "</a>";
        break;
    }

    Object(februaryAnimationText).setAttribute("style", "text-decoration: underline 2px;");
  }, time += 3000);
};

addEventListener("DOMContentLoaded", function () {
  februaryAnimation();
});
/******/ })()
;
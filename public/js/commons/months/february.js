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
  time += 1200;
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "オラはおにきち";
  }, time);
  time += 1200;
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "2月になると...";
  }, time);
  time += 1200;
  setTimeout(function () {
    februaryAnimationText.classList.add("show");
    Object(februaryAnimationText).innerHTML = "悪いことしたくなるのだ";
  }, time);
  time += 1200;
  setTimeout(function () {
    onikitiImg === null || onikitiImg === void 0 ? void 0 : onikitiImg.classList.remove("show");
    Object(februaryAnimationText).innerHTML = "";
  }, time);
  time += 1500;
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "<br>" + "そして村に行き...";
  }, time);
  time += 2000;
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "";
  }, time);
  time += 1000;
  setTimeout(function () {
    mamemakiImg === null || mamemakiImg === void 0 ? void 0 : mamemakiImg.classList.add("show");
  }, time);
  time += 3000;
  setTimeout(function () {
    mamemakiImg === null || mamemakiImg === void 0 ? void 0 : mamemakiImg.classList.remove("show");
  }, time);
  time += 500;
  setTimeout(function () {
    februaryAnimationBg === null || februaryAnimationBg === void 0 ? void 0 : februaryAnimationBg.classList.add("show");
    Object(februaryAnimationText).innerHTML = "<br>" + "そして2月といえば...";
  }, time);
  time += 1200;
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "<br>" + "大切な人に想いを伝える";
  }, time);
  time += 1200;
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "<br>" + "バレンタインデー🍫";
    Object(februaryAnimationText).setAttribute("style", "color: #e76a7f;");
  }, time);
  time += 1000;
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "";
  }, time);
  time += 1000;
  setTimeout(function () {
    loveImg === null || loveImg === void 0 ? void 0 : loveImg.classList.add("show");
  }, time);
  time += 2000;
  setTimeout(function () {
    loveImg === null || loveImg === void 0 ? void 0 : loveImg.classList.remove("show");
  }, time);
  time += 1200;
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "<br>" + "良い2月をお過ごしください";
    Object(februaryAnimationText).setAttribute("style", "color: #795548;");
  }, time);
  time += 3000;
  setTimeout(function () {
    Object(februaryAnimationText).innerHTML = "<br>" + "<a href='/member'>" + "もう一度見る" + "</a>";
    Object(februaryAnimationText).setAttribute("style", "color: #795548; text-decoration: underline 2px;");
  }, time);
};

addEventListener("DOMContentLoaded", function () {
  februaryAnimation();
});
/******/ })()
;
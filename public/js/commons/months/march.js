/******/ (() => {
    // webpackBootstrap
    /******/ "use strict";
    var __webpack_exports__ = {};
    /*!**********************************************!*\
  !*** ./resources/ts/commons/months/march.ts ***!
  \**********************************************/

    var marchAnimation = function marchAnimation() {
        var marchAnimationText = document.querySelector("#marchAnimationText");
        var hinamatsuri = document.querySelector("#hinamatsuri");
        var whiteday = document.querySelector("#whiteday");
        var sotugyousyousyo = document.querySelector("#sotugyousyousyo");
        var marchBg = document.querySelector("#marchBg");
        var time = 0;
        time += 500;
        setTimeout(function () {
            marchAnimationText.classList.add("show");
            Object(marchAnimationText).innerHTML =
                "<br>" + "<br>" + "<br>" + "<br>" + "3月";
        }, time);
        time += 2000;
        setTimeout(function () {
            Object(marchAnimationText).innerHTML =
                "<br>" + "<br>" + "<br>" + "<br>" + "";
            marchBg.classList.add("show");
            marchAnimationText.classList.add("show");
        }, time);
        time += 100;
        setTimeout(function () {
            hinamatsuri.classList.add("show");
        }, time);
        time += 2000;
        setTimeout(function () {
            hinamatsuri.classList.remove("show");
            sotugyousyousyo.classList.add("show");
        }, time);
        time += 2000;
        setTimeout(function () {
            sotugyousyousyo.classList.remove("show");
            whiteday.classList.add("show");
        }, time);
        time += 1500;
        setTimeout(function () {
            Object(whiteday).style.opacity = 0;
        }, time);
        time += 1000;
        setTimeout(function () {
            marchBg.classList.remove("show");
            Object(marchAnimationText).innerHTML =
                "<br>" +
                "<br>" +
                "<br>" +
                "様々な" +
                "<br>" +
                "別れや" +
                "旅立ち";
        }, time);
        time += 2000;
        setTimeout(function () {
            Object(marchAnimationText).innerHTML =
                "<br>" +
                "<br>" +
                "<br>" +
                "<br>" +
                "楽しいイベントもあるこの季節";
        }, time);
        time += 2000;
        setTimeout(function () {
            Object(marchAnimationText).innerHTML =
                "<br>" +
                "<br>" +
                "<br>" +
                "<br>" +
                "あなたはどう過ごすのでしょうか？";
        }, time);
        time += 2000;
        setTimeout(function () {
            Object(marchAnimationText).innerHTML =
                "<br>" +
                "<br>" +
                "<br>" +
                "<br>" +
                "あなたはどう過ごすのでしょうか？";
        }, time);
        time += 1200;
        setTimeout(function () {
            Object(marchAnimationText).innerHTML =
                "<br>" +
                "<br>" +
                "<br>" +
                "<br>" +
                "体調に気をつけてお過ごしください" +
                "<br>";
        }, time);
        time += 3000;
        setTimeout(function () {
            Object(marchAnimationText).innerHTML =
                "<br>" +
                "<br>" +
                "<br>" +
                "<br>" +
                "<a href='/member'>" +
                "もう一度見る" +
                "</a>";
            Object(marchAnimationText).setAttribute(
                "style",
                "text-decoration: underline 2px;"
            );
        }, time);
    };

    addEventListener("DOMContentLoaded", function () {
        marchAnimation();
    });
    /******/
})();

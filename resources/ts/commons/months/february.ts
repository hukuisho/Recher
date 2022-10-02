const februaryAnimation = () => {
    const onikitiImg = document.querySelector("#onikitiImg");
    const mamemakiImg = document.querySelector("#mamemakiImg");
    const loveImg = document.querySelector("#loveImg");
    const februaryAnimationText = document.querySelector(
        "#februaryAnimationText"
    );
    const februaryAnimationBg = document.querySelector("#februaryAnimationBg");
    let time = 800;
    setTimeout(() => {
        onikitiImg?.classList.add("show");
    }, time);
    time += 1200;
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "オラはおにきち";
    }, time);
    time += 1200;
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "2月になると...";
    }, time);
    time += 1200;
    setTimeout(() => {
        februaryAnimationText!.classList.add("show");
        Object(februaryAnimationText).innerHTML = "悪いことしたくなるのだ";
    }, time);
    time += 1200;
    setTimeout(() => {
        onikitiImg?.classList.remove("show");
        Object(februaryAnimationText).innerHTML = "";
    }, time);
    time += 1500;
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "<br>" + "そして村に行き...";
    }, time);
    time += 2000;
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "";
    }, time);
    time += 1000;
    setTimeout(() => {
        mamemakiImg?.classList.add("show");
    }, time);
    time += 3000;
    setTimeout(() => {
        mamemakiImg?.classList.remove("show");
    }, time);
    time += 500;
    setTimeout(() => {
        februaryAnimationBg?.classList.add("show");
        Object(februaryAnimationText).innerHTML =
            "<br>" + "そして2月といえば...";
    }, time);
    time += 1200;
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML =
            "<br>" + "大切な人に想いを伝える";
    }, time);
    time += 1200;
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "<br>" + "バレンタインデー🍫";
        Object(februaryAnimationText).setAttribute("style", "color: #e76a7f;");
    }, time);
    time += 1000;
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "";
    }, time);
    time += 1000;
    setTimeout(() => {
        loveImg?.classList.add("show");
    }, time);
    time += 2000;
    setTimeout(() => {
        loveImg?.classList.remove("show");
    }, time);
    time += 1200;
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML =
            "<br>" + "良い2月をお過ごしください";
        Object(februaryAnimationText).setAttribute("style", "color: #795548;");
    }, time);
    time += 3000;
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML =
            "<br>" + "<a href='/member'>" + "もう一度見る" + "</a>";
        Object(februaryAnimationText).setAttribute(
            "style",
            "text-decoration: underline 2px;"
        );
    }, time);
};

addEventListener("DOMContentLoaded", () => {
    februaryAnimation();
});

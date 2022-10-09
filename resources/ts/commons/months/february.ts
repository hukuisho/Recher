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
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "オラはおにきち";
    }, (time += 1200));
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "2月になると...";
    }, (time += 1200));
    setTimeout(() => {
        februaryAnimationText!.classList.add("show");
        Object(februaryAnimationText).innerHTML = "悪いことしたくなるのだ";
    }, (time += 1200));
    setTimeout(() => {
        onikitiImg?.classList.remove("show");
        Object(februaryAnimationText).innerHTML = "";
    }, (time += 1200));
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "<br>" + "そして村に行き...";
    }, (time += 1500));
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "";
    }, (time += 2000));
    setTimeout(() => {
        mamemakiImg?.classList.add("show");
    }, (time += 1000));
    setTimeout(() => {
        mamemakiImg?.classList.remove("show");
    }, (time += 3000));
    setTimeout(() => {
        februaryAnimationBg?.classList.add("show");
        Object(februaryAnimationText).innerHTML =
            "<br>" + "そして2月といえば...";
    }, (time += 500));
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML =
            "<br>" + "大切な人に想いを伝える";
    }, (time += 1200));
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "<br>" + "バレンタインデー🍫";
        Object(februaryAnimationText).setAttribute("style", "color: #e76a7f;");
    }, (time += 1200));
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML = "";
    }, (time += 1000));
    setTimeout(() => {
        loveImg?.classList.add("show");
    }, (time += 1000));
    setTimeout(() => {
        loveImg?.classList.remove("show");
    }, (time += 2000));
    setTimeout(() => {
        Object(februaryAnimationText).innerHTML =
            "<br>" + "良い2月をお過ごしください";
        Object(februaryAnimationText).setAttribute("style", "color: #795548;");
    }, (time += 1200));
    setTimeout(() => {
        switch (location.pathname) {
            case "/member":
                Object(februaryAnimationText).innerHTML =
                    "<br>" + "<a href=''>" + "もう一度見る" + "</a>";
                break;
            case "/preview":
                Object(februaryAnimationText).innerHTML =
                    "<br>" + "<a href='/preview'>" + "もう一度見る" + "</a>";
                break;
            case "/about":
                Object(februaryAnimationText).innerHTML =
                    "<br>" + "<a href='/preview'>" + "もう一度見る" + "</a>";
                break;
        }
        Object(februaryAnimationText).setAttribute(
            "style",
            "text-decoration: underline 2px;"
        );
    }, (time += 3000));
};

addEventListener("DOMContentLoaded", () => {
    februaryAnimation();
});

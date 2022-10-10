const marchAnimation = () => {
    const marchAnimationText = document.querySelector("#marchAnimationText");
    const hinamatsuri = document.querySelector("#hinamatsuri");
    const whiteday = document.querySelector("#whiteday");
    const sotugyousyousyo = document.querySelector("#sotugyousyousyo");
    const marchBg = document.querySelector("#marchBg");

    let time = 0;
    setTimeout(() => {
        marchAnimationText!.classList.add("show");
        Object(marchAnimationText).innerHTML =
            "<br>" + "<br>" + "<br>" + "<br>" + "3月";
    }, (time += 500));
    setTimeout(() => {
        Object(marchAnimationText).innerHTML =
            "<br>" + "<br>" + "<br>" + "<br>" + "";
        marchBg!.classList.add("show");
        marchAnimationText!.classList.add("show");
    }, (time += 2000));
    setTimeout(() => {
        hinamatsuri!.classList.add("show");
    }, (time += 100));
    setTimeout(() => {
        hinamatsuri!.classList.remove("show");
        sotugyousyousyo!.classList.add("show");
    }, (time += 2000));
    setTimeout(() => {
        sotugyousyousyo!.classList.remove("show");
        whiteday!.classList.add("show");
    }, (time += 2200));
    setTimeout(() => {
        Object(whiteday).style.opacity = 0;
    }, (time += 1500));
    setTimeout(() => {
        marchBg!.classList.remove("show");
        Object(marchAnimationText).innerHTML =
            "<br>" + "<br>" + "<br>" + "様々な" + "<br>" + "旅立ちや";
    }, (time += 1000));
    setTimeout(() => {
        Object(marchAnimationText).innerHTML =
            "<br>" + "<br>" + "<br>" + "<br>" + "楽しいイベントもあるこの季節";
    }, (time += 2000));
    setTimeout(() => {
        Object(marchAnimationText).innerHTML =
            "<br>" +
            "<br>" +
            "<br>" +
            "<br>" +
            "あなたはどう過ごすのでしょうか？";
    }, (time += 2000));
    setTimeout(() => {
        Object(marchAnimationText).innerHTML =
            "<br>" +
            "<br>" +
            "<br>" +
            "<br>" +
            "あなたはどう過ごすのでしょうか？";
    }, (time += 2000));
    setTimeout(() => {
        Object(marchAnimationText).innerHTML =
            "<br>" +
            "<br>" +
            "<br>" +
            "<br>" +
            "体調に気をつけてお過ごしください" +
            "<br>";
    }, (time += 1200));
    setTimeout(() => {
        switch (location.pathname) {
            case "/member":
                Object(marchAnimationText).innerHTML =
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<a href='/member'>" +
                    "もう一度見る" +
                    "</a>";
                break;
            case "/preview":
                Object(marchAnimationText).innerHTML =
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<a href='/preview'>" +
                    "もう一度見る" +
                    "</a>";
                break;
            case "/about":
                Object(marchAnimationText).innerHTML =
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<a href='/preview'>" +
                    "もう一度見る" +
                    "</a>";
                break;
        }
        Object(marchAnimationText).setAttribute(
            "style",
            "text-decoration: underline 2px;"
        );
    }, (time += 3000));
};
addEventListener("DOMContentLoaded", () => {
    marchAnimation();
});

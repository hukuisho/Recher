//fukui
const aprilAnimation = () => {
    const aprilAnimationText = document.querySelector("#aprilAnimationText");
    const aprilAnimationSakura = document.querySelector(
        "#aprilAnimationSakura"
    );
    const NewLife = document.querySelector("#NewLife");
    const Support = document.querySelector("#Support");
    const LifeImage = document.querySelector("#LifeImagee");

    let time = 0;
    setTimeout(() => {
        aprilAnimationText!.classList.add("show");
        Object(aprilAnimationText).innerHTML =
            "<br>" +
            "<br>" +
            "<br>" +
            "<br>" +
            "4月は新しいことが始まりやすい季節・・・";
    }, (time += 1000));

    setTimeout(() => {
        switch (location.pathname) {
            case "/member":
                Object(aprilAnimationText).innerHTML =
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<a href='/member'>" +
                    "もう一度見る" +
                    "</a>";
                break;
            case "/preview":
                Object(aprilAnimationText).innerHTML =
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<a href='/preview'>" +
                    "もう一度見る" +
                    "</a>";
                break;
            case "/about":
                Object(aprilAnimationText).innerHTML =
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<br>" +
                    "<a href='/preview'>" +
                    "もう一度見る" +
                    "</a>";
                break;
        }

        Object(aprilAnimationText).setAttribute(
            "style",
            "text-decoration: underline 2px;"
        );
        // aprilAnimationSakura!.classList.add("show");
    }, (time += 2000));
};

addEventListener("DOMContentLoaded", () => {
    aprilAnimation();
});
//fukui

const januaryAnimation = () => {
    const januaryAnimation = document.querySelector("#januaryAnimation");
    const januaryAnimationText = document.querySelector(
        "#januaryAnimationText"
    );
    const januaryAnimationHagoita1 = document.querySelector(
        "#januaryAnimationHagoita1"
    );
    const januaryAnimationHagoita2 = document.querySelector(
        "#januaryAnimationHagoita2"
    );
    const januaryAnimationHane = document.querySelector(
        "#januaryAnimationHane"
    );
    const januaryAnimationOinori = document.querySelector(
        "#januaryAnimationOinori"
    );
    let time = 0;
    setTimeout(() => {
        Object(januaryAnimationText).innerHTML = "謹賀新年";
        Object(januaryAnimationText).setAttribute(
            "style",
            "font-size: 200%; color: goldenrod;"
        );
    }, (time += 500));
    setTimeout(() => {
        Object(januaryAnimationText).setAttribute(
            "style",
            "font-size: 120%; color: rgb(198 58 126);"
        );
    }, (time += 2000));
    setTimeout(() => {
        Object(januaryAnimationText).innerHTML =
            "今年はどんな一年になるだろう...";
        Object(januaryAnimationText).setAttribute(
            "style",
            "font-size: 120%; color:black;"
        );
    }, (time += 2700));
    setTimeout(() => {
        Object(januaryAnimationText).innerHTML = "";
        januaryAnimationHagoita1!.classList.add("show");
        januaryAnimationHagoita2!.classList.add("show");
        januaryAnimationHane!.classList.add("show");
        Object(januaryAnimation).setAttribute(
            "style",
            "background-color: #ffdbed;"
        );
        Object(januaryAnimationText).innerHTML =
            "<br>" +
            "<br>" +
            "あなたにとって" +
            "<br>" +
            "幸せな出来事が" +
            "<br>" +
            "ありますことを" +
            "<br>" +
            "お祈りします🔔";
    }, (time += 2500));
    setTimeout(() => {
        januaryAnimationOinori!.classList.add("show");
        januaryAnimationText!.innerHTML = "お幸せに";
        Object(januaryAnimation).setAttribute(
            "style",
            "background-color: rgb(230 153 9);"
        );
    }, (time += 2000));
    setTimeout(() => {
        switch (location.pathname) {
            case "/member":
                Object(januaryAnimationText).innerHTML =
                    "<a href='/member'>" + "もう一度見る" + "</a>";
                break;
            case "/preview":
                Object(januaryAnimationText).innerHTML =
                    "<a href='/preview'>" + "もう一度見る" + "</a>";
                break;
            case "/about":
                Object(januaryAnimationText).innerHTML =
                    "<a href='/preview'>" + "もう一度見る" + "</a>";
                break;
        }
        Object(januaryAnimationText).setAttribute(
            "style",
            "text-decoration: underline 2px;"
        );
    }, (time += 1000));
};
addEventListener("DOMContentLoaded", () => {
    januaryAnimation();
});

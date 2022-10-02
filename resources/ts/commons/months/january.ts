const januaryAnimation = () => {
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
    time += 500;
    setTimeout(() => {
        Object(januaryAnimationText).innerHTML = "謹賀新年";
    }, time);
    time += 2000;
    setTimeout(() => {
        Object(januaryAnimationText).innerHTML =
            "今年はどんな一年になるだろう...";
    }, time);
    time += 2500;
    setTimeout(() => {
        Object(januaryAnimationText).innerHTML = "";
        januaryAnimationHagoita1!.classList.add("show");
        januaryAnimationHagoita2!.classList.add("show");
        januaryAnimationHane!.classList.add("show");
        Object(januaryAnimationText).innerHTML =
            "<br>" +
            "あなたにとって" +
            "<br>" +
            "幸せな出来事が" +
            "<br>" +
            "ありますことを" +
            "<br>" +
            "お祈りします🔔";
    }, time);
    time += 2000;
    setTimeout(() => {
        Object(januaryAnimationText).innerHTML =
            "<a href='/member'>" + "もう一度見る" + "</a>";
        januaryAnimationOinori!.classList.add("show");
        Object(januaryAnimationText).setAttribute(
            "style",
            "text-decoration: underline 2px;"
        );
    }, time);
    time += 1500;
};
addEventListener("DOMContentLoaded", () => {
    januaryAnimation();
});

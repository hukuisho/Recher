addEventListener("DOMContentLoaded", () => {
    const getGreetingText = document.querySelector("#getGreetingText");

    const GREETING_TYPE: readonly string[] = [
        "おはようございます",
        "こんにちは",
        "こんばんは",
    ];
    const [MORNING, AFTERNOON, EVENING] = GREETING_TYPE;

    const now = new Date();
    const hour: number = now.getHours();

    if (hour >= 4 && hour <= 10) {
        getGreetingText!.innerHTML = MORNING;
    } else if (hour >= 11 && hour <= 17) {
        getGreetingText!.innerHTML = AFTERNOON;
    } else if (hour >= 18 || hour <= 3) {
        getGreetingText!.innerHTML = EVENING;
    }
});

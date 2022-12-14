addEventListener("DOMContentLoaded", () => {
    if (location.pathname == "/member") {
        interface memberTopKeyValue<T> {
            key: T;
            value: T;
        }
        const loadingAnimationKeyValue: memberTopKeyValue<string> = {
            key: "visited",
            value: "true",
        };
        const richerDisplay = document.querySelector("#richer");
        const getBody = document.querySelector("body");

        if (!sessionStorage.getItem(loadingAnimationKeyValue["key"])) {
            //sessionStorageにキーと値を追加
            sessionStorage.setItem(
                loadingAnimationKeyValue["key"],
                loadingAnimationKeyValue["value"]
            );

            //ここに初回アクセス時の処理
            richerDisplay?.setAttribute("style", "display:none;");
            getBody?.setAttribute("class", "loading");
            console.log("ログインしました");
            let time = 0;
            setTimeout(() => {
                getBody?.classList.remove("loading");
                richerDisplay?.setAttribute("style", "display:block;");
            }, (time += 2500));
        } else {
            //ここに通常アクセス時の処理
            console.log("ログイン中です");
        }
    }
    const getGreetingText = document.querySelector("#getGreetingText");

    const now = new Date();
    const hour: number = now.getHours();

    if (hour >= 4 && hour <= 10) {
        getGreetingText!.innerHTML = "おはよう";
    } else if (hour >= 11 && hour <= 17) {
        getGreetingText!.innerHTML = "こんにちは";
    } else if (hour >= 18 || hour <= 3) {
        getGreetingText!.innerHTML = "こんばんは";
    }
});

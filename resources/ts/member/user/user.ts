addEventListener("DOMContentLoaded", () => {
    interface userTopKeyValue<T> {
        key: T;
        value: T;
    }
    if (document.URL.match("edit")) {
        const userEditKeyValue: userTopKeyValue<string> = {
            key: "visited",
            value: "true",
        };
        const isWarningText = document.querySelector("#isWarningText");
        const isFirstAlertText: string =
            "不適切な名前や\nメールアドレスの入力では、\n更新されることはありません";
        const visitedConsoleLogText: string =
            "不適切な名前や" +
            "<br>" +
            "メールアドレスの入力では、" +
            "<br>" +
            "更新されることはありません";
        if (!localStorage.getItem(userEditKeyValue["key"])) {
            //localStorageにキーと値を追加
            localStorage.setItem(
                userEditKeyValue["key"],
                userEditKeyValue["value"]
            );
            isWarningText!.innerHTML = visitedConsoleLogText;
            //ここに初回アクセス時の処理
            alert(isFirstAlertText);
        } else {
            isWarningText!.innerHTML = visitedConsoleLogText;
        }
    }
});

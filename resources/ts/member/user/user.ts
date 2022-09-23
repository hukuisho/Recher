addEventListener("DOMContentLoaded", () => {
    if (document.URL.match("edit")) {
        const isUserEditKey: string = "visited";
        const isUserEditKeyValue: string = "true";
        const isWarningText = document.querySelector("#isWarningText");
        const isFirstAlertText: string =
            "不適切な名前や\nメールアドレスの入力では、\n更新されることはありません";
        const visitedConsoleLogText: string =
            "不適切な名前や" +
            "<br>" +
            "メールアドレスの入力では、" +
            "<br>" +
            "更新されることはありません";
        if (!localStorage.getItem(isUserEditKey)) {
            //sessionStorageにキーと値を追加
            localStorage.setItem(isUserEditKey, isUserEditKeyValue);
            isWarningText!.innerHTML = visitedConsoleLogText;
            //ここに初回アクセス時の処理
            alert(isFirstAlertText);
        } else {
            isWarningText!.innerHTML = visitedConsoleLogText;
        }
    }
});

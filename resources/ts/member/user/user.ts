addEventListener("DOMContentLoaded", () => {
    if (document.URL.match("edit")) {
        const isUserEditKeyName: string = "visited";
        const isUserEditKeyValue: string = "true";
        const isFirstAlertText: string =
            "不適切な名前やメールアドレスの入力では、\n更新されることはありません";
        const visitedConsoleLogText: string =
            "不適切な名前やメールアドレスの入力では、\n更新されることはありません";
        if (!localStorage.getItem(isUserEditKeyName)) {
            //sessionStorageにキーと値を追加
            localStorage.setItem(isUserEditKeyName, isUserEditKeyValue);
            //ここに初回アクセス時の処理
            alert(isFirstAlertText);
        } else {
            console.log(visitedConsoleLogText);
        }
    }
});

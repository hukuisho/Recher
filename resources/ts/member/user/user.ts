addEventListener("DOMContentLoaded", () => {
    interface memberUserKeyValue<T> {
        key: T;
        value: T;
    }

    if (document.URL.match("edit")) {
        // icon s
        const PATTERN_REPERTOIRE: readonly string[] = [
            "アイコン１",
            "アイコン2",
            "アイコン3",
            "アイコン4",
            "アイコン5",
        ];
        const getSelctIconOption = document.querySelectorAll("option");
        const ICON_OPTION_LIST = Object(getSelctIconOption).length;
        const selectIconList = document.querySelector("#selectIconList");
        for (let i = 0; i < ICON_OPTION_LIST; i++) {
            Object(getSelctIconOption[i]).innerHTML = PATTERN_REPERTOIRE[i];
        }
        // セレクトボックスの値によって画像を切り替える。
        const changeIcon = document.querySelector("#changeIcon");
        selectIconList?.addEventListener("change", () => {
            if (Object(selectIconList).value) {
                changeIcon!.setAttribute("src", Object(selectIconList).value);
            }
        });
        // icon e
        const userEditKeyValue: memberUserKeyValue<string> = {
            key: "visited",
            value: "true",
        };
        const isWarningText = document.querySelector("#isWarningText");
        const isFirstAlertText: string =
            "不適切な名前や\nメールアドレスの入力では、\n更新されることはありません";
        const visitedTrueText: string =
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
            isWarningText!.innerHTML = visitedTrueText;
            //ここに初回アクセス時の処理
            alert(isFirstAlertText);
        } else {
            isWarningText!.innerHTML = visitedTrueText;
        }
    }
});

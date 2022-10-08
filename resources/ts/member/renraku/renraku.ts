addEventListener("DOMContentLoaded", () => {
    interface renrakuKeyValue<T> {
        key: T;
        value: T;
    }
    if (location.pathname == "/member/renraku") {
        const renrakuFriend = document.querySelector("#renrakuFriend");
        renrakuFriend!.addEventListener("click", () => {
            const renrakuExplanationKeyValue: renrakuKeyValue<string> = {
                key: "clicked",
                value: "true",
            };

            if (!sessionStorage.getItem(renrakuExplanationKeyValue["key"])) {
                //sessionStorageにキーと値を追加
                sessionStorage.setItem(
                    renrakuExplanationKeyValue["key"],
                    renrakuExplanationKeyValue["value"]
                );
                alert(
                    "送信をする文章は適切な言葉遣いや表現を心がけましょう。\n※ユーザー同士のトラブルによる運営側は一切責任は負うことはありません。"
                );
                //ここに初回アクセス時の処理
                console.log("クリック");
            } else {
                //ここに通常アクセス時の処理
                console.log("クリック済みです");
            }
        });
    }
});

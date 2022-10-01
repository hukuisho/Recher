addEventListener("DOMContentLoaded", () => {
    if (location.pathname == "/profile_delete_pre") {
        const richerDisplayShow = document.querySelector("#richer");
        const getBodyShow = document.querySelector("body");

        //ここに初回アクセス時の処理
        richerDisplayShow?.setAttribute("style", "display:none;");
        getBodyShow?.setAttribute("class", "delete");
        console.log("アカウント削除中");
        let time = 0;
        setTimeout(() => {
            window.location.href = "/";
        }, (time += 2500));
    }
});

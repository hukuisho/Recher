addEventListener("DOMContentLoaded", () => {
    const searchWord = document.querySelector("#searchWord");
    const searchInput = document.querySelector("#searchInput");
    searchInput?.addEventListener("click", () => {
        if (!Object(searchWord).value.match(/\S/g)) {
            let time = 0;
            alert("適切な検索ワードを入力してください");
            setTimeout(() => {
                window.location.href = "/member/search";
            }, (time += 10));
        } else {
            const searchFormAction =
                document.querySelector("#searchFormAction");
            alert("Google検索ページへ移動します。");
            Object(searchFormAction).setAttribute(
                "action",
                "http://www.google.co.jp/search"
            );
        }
    });
});

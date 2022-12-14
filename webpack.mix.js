const mix = require("laravel-mix");
mix.ts("resources/ts/app.ts", "public/js");
mix.ts(
    "resources/ts/member/schedule/schedule.ts",
    "public/js/member/schedule/"
);
mix.ts("resources/ts/commons/header.ts", "public/js/commons/");
mix.ts("resources/ts/commons/footer.ts", "public/js/commons/");
mix.ts("resources/ts/commons/about.ts", "public/js/commons/");
mix.ts("resources/ts/commons/months/january.ts", "public/js/commons/months/");
mix.ts("resources/ts/commons/months/february.ts", "public/js/commons/months/");
mix.ts("resources/ts/commons/months/march.ts", "public/js/commons/months/");
//fukui s
mix.ts("resources/ts/commons/months/april.ts", "public/js/commons/months/");
//fukui e
mix.ts("resources/ts/commons/profile_delete_pre.ts", "public/js/commons/");
mix.ts("resources/ts/guest/index.ts", "public/js/guest/");
mix.ts("resources/ts/member/user/user.ts", "public/js/member/user/");
mix.ts(
    "resources/ts/member/timeline/timeline.ts",
    "public/js/member/timeline/"
);
mix.ts("resources/ts/member/top/top.ts", "public/js/member/top/");
mix.ts("resources/ts/member/search/search.ts", "public/js/member/search/");
mix.ts("resources/ts/member/renraku/renraku.ts", "public/js/member/renraku/");
mix.sass("resources/sass/app.scss", "public/css");

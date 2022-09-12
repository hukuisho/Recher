const mix = require("laravel-mix");
mix.ts("resources/ts/app.ts", "public/js");
mix.ts("resources/ts/commons/header.ts", "public/js/commons/");
mix.ts("resources/ts/commons/footer.ts", "public/js/commons/");
mix.ts("resources/ts/guest/index.ts", "public/js/guest/");
mix.ts(
    "resources/ts/member/timeline/timeline.ts",
    "public/js/member/timeline/"
);
mix.sass("resources/sass/app.scss", "public/css");

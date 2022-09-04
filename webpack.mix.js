const mix = require("laravel-mix");
mix.js("resources/ts/app.ts", "public/js");
mix.sass("resources/sass/app.scss", "public/css");

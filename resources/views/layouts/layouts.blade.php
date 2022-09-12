<html lang="ja">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
        <script src="{{ asset('/js/app.js') }}"></script>
        @unless ($_SERVER['REQUEST_URI'] == "/")
            <script src="{{ asset('/js/commons/header.js') }}"></script>
            <script src="{{ asset('/js/commons/footer.js') }}"></script>
        @endunless
        @switch ($_SERVER['REQUEST_URI'])
        @case("/")
            <script src="{{ asset('/js/guest/index.js') }}"></script>
            <title>非会員TOP</title>
            @break
        @case ("/member")
            <title>会員TOP</title>
            @break
        @default
            <title>Recher - 理想の生き方を見つけよう -</title>
        @endswitch
    </head>
    <body>
        <div class="richer">
            @unless ($_SERVER['REQUEST_URI'] == "/")
                <div class="richer__header">
                <div class="richer__header__navList">
                    <a href="" class="richer__header__navList__title">Richer</a>
                    <a href="" class="richer__header__navList__user">
                        <span class="richer__header__navList__user__icon"></span>
                    </a>
                </div>
            @endunless
            <div class="richer__container">
                @yield('content')
            </div>
            <!-- footer s -->
            @unless ($_SERVER['REQUEST_URI'] == "/")
                <div class="richer__footer">
                    <ul class="richer__footer__navList">
                        <li class="richer__footer__navList__timeline">
                            <a href="">投稿</a>
                        </li>
                        <li class="richer__footer__navList__schedule">
                            <a href="">予定</Link>
                        </li>
                        <li class="richer__footer__navList__search">
                            <a href="">検索</Link>
                        </li>
                        <li class="richer__footer__navList__bell">
                            <a href="">通知</Link>
                        </li>
                        <li class="richer__footer__navList__renraku">
                            <a href="">連絡</Link>
                        </li>
                    </ul>
                </div>
            @endunless
        </div>
    </body>
</html>
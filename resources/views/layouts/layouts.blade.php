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
            <script src="{{ asset('/js/member/top/top.js') }}"></script>
            <title>会員TOP</title>
            @break
        @case ("/member/search")
            <script src="{{ asset('/js/member/search/search.js') }}"></script>
            <title>検索</title>
            @break
        @default
            @if(strpos($_SERVER['REQUEST_URI'],'user') == true)
                <title>マイページ</title>
            @else 
                <title>Recher - 理想の生き方を見つけよう -</title>
            @endif
        @endswitch
    </head>
    <body>
        <div class="richer">
            @auth
                <div class="richer__header">
                    <div class="richer__header__navList">
                        <a href="/member" class="richer__header__navList__title">Richer</a>
                        <a href="/member/user" class="richer__header__navList__user">
                            <span class="richer__header__navList__user__icon"></span>
                        </a>
                    </div>
                </div>
            @endauth
            @guest
            <div class="richer__header">
                <div class="richer__header__navList">
                    <a href="/" class="richer__header__navList__title">Richer</a>
                    <a href="/login" class="richer__header__navList__user">
                        <span class="richer__header__navList__user__icon"></span>
                    </a>
                </div>
            </div>
            @endguest
            <div class="richer__container">
                <div class="richer__container__space"></div>
                @yield('content')
                <div class="richer__container__space"></div>
            </div>
            <!-- footer s -->
            @auth
                <div class="richer__footer">
                    <div class="richer__footer__navList">
                        <a href="" class="richer__footer__navList__timeline">
                            投稿
                        </a>
                        <a href="" class="richer__footer__navList__schedule">
                            予定
                        </a>
                        <a href="/member/search" class="richer__footer__navList__search">
                            検索
                        </a>
                        <a href="" class="richer__footer__navList__bell">
                            通知
                        </a>
                        <a href="" class="richer__footer__navList__renraku">
                            連絡
                        </a>
                    </div>
                </div>
            @endauth
            @guest
            <div class="richer__footer"><div>
            @endguest
        </div>
    </body>
</html>
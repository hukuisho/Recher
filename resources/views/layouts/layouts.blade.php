<html lang="ja">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
        <script src="{{ asset('/js/app.js') }}"></script>
        @switch ($_SERVER['REQUEST_URI'])
        @case("/")
            <title>非会員TOP</title>
            @break
        @case ("/member")
            <title>会員TOP</title>
            @break
        @case ("/member/search")
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
            @include('layouts.header')
            <div class="richer__container">
                <div class="richer__container__space"></div>
                @yield('content')
                <div class="richer__container__space"></div>
            </div>
            @include('layouts.footer')
        </div>
        @unless ($_SERVER['REQUEST_URI'] == "/")
            <script src="{{ asset('/js/commons/header.js') }}"></script>
            <script src="{{ asset('/js/commons/footer.js') }}"></script>
        @endunless
        @switch ($_SERVER['REQUEST_URI'])
            @case("/")
                <script src="{{ asset('/js/guest/index.js') }}"></script>
            @break
            @case("/member")
                <script src="{{ asset('/js/member/top/top.js') }}"></script>
            @break
            @case ("/member/search")
                <script src="{{ asset('/js/member/search/search.js') }}"></script>
            @break
            @default
            @if(strpos($_SERVER['REQUEST_URI'],'user') == true)
                <script src="{{ asset('/js/member/user/user.js') }}"></script>
                @break
                @else 
                    <script src="{{ asset('/js/member/user/user.js') }}"></script>
                @break
            @endif
        @endswitch
    </body>
</html>
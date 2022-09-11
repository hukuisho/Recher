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
        @default
            <title>Recher - 理想の生き方を見つけよう -</title>
        @endswitch
    </head>
    <body>
        <div>
            <div>
                @yield('content')
            </div>
        </div>

    </body>
</html>
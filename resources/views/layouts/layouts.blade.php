<html lang="ja">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
        <script src="{{ asset('/js/app.js') }}"></script>
        @if ($_SERVER['REQUEST_URI'] == "/") 
            <title>非会員TOP</title>
        @elseif ($_SERVER['REQUEST_URI'] == "/member")
            <title>会員TOP</title>
        @endif
    </head>
    <body>
        <div>
            <div>
                @yield('content')
            </div>
        </div>

    </body>
</html>
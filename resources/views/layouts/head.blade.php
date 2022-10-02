<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('/js/app.js') }}"></script>
    @switch ($_SERVER['REQUEST_URI'])
    @case("/")
        <title>非会員TOP</title>
        @break
    @case("/about")
        <title>紹介</title>
        @break
    @case("/notPage")
        <title>不正なアクセスです</title>
        @break
    @case("/profile_delete_pre")
        <title>アカウント削除中</title>
        @break
    @case ("/member")
        <title>会員TOP</title>
        @break
    @case ("/member/timeline")
        <title>投稿</title>
        @break
    @case ("/member/schedule")
        <title>予定</title>
        @break
    @case ("/member/search")
        <title>検索</title>
        @break
    @case ("/member/bell")
        <title>通知</title>
        @break
    @case ("/member/renraku")
        <title>連絡</title>
        @break
    @default
        @if(strpos($_SERVER['REQUEST_URI'],'user') == true)
            <title>マイページ</title>
            @else 
            <title>Recher - 理想の生き方を見つけよう -</title>
        @endif
    @endswitch
</head>
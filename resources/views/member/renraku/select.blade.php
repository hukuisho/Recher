@extends('layouts.layouts')
@section('content')
<div class="renraku">
    <div class="renraku__select">
        <a href="/member/renraku/admin" class="renraku__select__admin">運営と連絡</a>
        <a id="renrakuFriend" href="/member/renraku/friend" class="renraku__select__friend">友達と連絡</a>
    </div>
    <div class="renraku__explanation">
        <p class="renraku__explanation__text">
            「運営」または、「友達」のどちらかを選択し連絡を取りあうことができます。
        </p>
        <p class="renraku__explanation__text">
            送信をする文章は適切な言葉遣いや表現を心がけましょう。
        </p>
        <p class="renraku__explanation__text">
            <span>※ユーザー同士のトラブルによる運営側は一切責任は負うことはありません。</span>
        </p>
    </div>
</div>
@endsection
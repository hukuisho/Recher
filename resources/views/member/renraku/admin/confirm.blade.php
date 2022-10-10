@extends('layouts.layouts')
@section('content')
<form method="POST" action="/member/renraku/admin/send">
  @csrf
    <div class="renraku__admin-confirm">
        <label class="renraku__admin-confirm__menu">メールアドレス</label>
        {{ $inputs['email'] }}
        <input name="email" value="{{ $inputs['email'] }}" type="hidden">
        <label class="renraku__admin-confirm__menu">タイトル</label>
        {{ $inputs['title'] }}
        <input name="title" value="{{ $inputs['title'] }}" type="hidden">
        <label class="renraku__admin-confirm__menu">お問い合わせ内容</label>
        {!! nl2br(e($inputs['body'])) !!}
        <input name="body" value="{{ $inputs['body'] }}" type="hidden">
        <button type="submit" name="action" value="submit">送信する</button>
        <button><a href="/member/renraku/admin">入力内容修正</a></button>
  </div>
</form>
@endsection
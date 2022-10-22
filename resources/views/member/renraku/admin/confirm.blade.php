@extends('layouts.layouts')
@section('content')
<form method="POST" action="/member/renraku/admin/send">
  @csrf
    <div class="renraku__admin-confirm">
        <label class="renraku__admin-confirm__menu">メールアドレス</label>
        <h3 class="renraku__admin-confirm__menu__value">{{ $inputs['email'] }}</h3>
        <input name="email" value="{{ $inputs['email'] }}" type="hidden">
        <label class="renraku__admin-confirm__menu">タイトル</label>
        <h3 class="renraku__admin-confirm__menu__value">{{ $inputs['title'] }}</h3>
        <input name="title" value="{{ $inputs['title'] }}" type="hidden">
        <label class="renraku__admin-confirm__menu">お問い合わせ内容</label>
        <h3 class="renraku__admin-confirm__menu__value">{!! nl2br(e($inputs['body'])) !!}<h5>
        <input name="body" value="{{ $inputs['body'] }}" type="hidden">
        <button type="submit" name="action" value="submit">送信する</button>
        <button><a href="/member/renraku/admin">入力内容修正</a></button>
  </div>
</form>
@endsection
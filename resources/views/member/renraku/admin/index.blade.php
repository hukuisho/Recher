@extends('layouts.layouts')
@section('content')
<form method="POST" action="/member/renraku/admin/confirm" class="renraku__admin-form">
    @csrf

    <label class="renraku__admin-form__menu">メールアドレス</label>
    <input
        name="email"
        value="{{ old('email') }}"
        type="text"
        class="renraku__admin-form__text"
    >
        
    @if ($errors->has('email'))
        <p class="error-message">{{ $errors->first('email') }}</p>
    @endif

    <label class="renraku__admin-form__menu">タイトル</label>
    <input
        name="title"
        value="{{ old('title') }}"
        type="text"
        class="renraku__admin-form__text"
    >
    @if ($errors->has('title'))
        <p class="error-message">{{ $errors->first('title') }}</p>
    @endif

    <label class="renraku__admin-form__menu">お問い合わせ内容</label>
    <textarea name="body" class="renraku__admin-form__text renraku__admin-form__text__area">{{ old('body') }}</textarea>
    @if ($errors->has('body'))
        <p class="error-message">{{ $errors->first('body') }}</p>
    @endif

    <button class="renraku__admin-form__text__input-btn" type="submit">入力内容確認</button>
</form>
@endsection
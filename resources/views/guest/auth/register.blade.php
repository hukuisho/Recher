@extends('layouts.layouts')
@section('content')
    <h2 class="register">会員登録</h2>
    @if ($errors->any())
    <div class="login_error">
    <ul>
    @foreach ($errors->all() as $error)
        <li>{{ $error }}</li>
    @endforeach
    </ul>
    @endif
    <a class="auth-link" href="/login">>>会員アカウントをお持ちの方はこちら<<</a>
    <form action="{{ route('register') }}" method="post">
        @csrf 
        <dl class="form-list">
            <dt class="form-list__menu">名前</dt>
            <dd><input type="text" name="name" placeholder="山田太郎" value="{{ old('name') }}"></dd>
            <dt class="form-list__menu">メールアドレス</dt>
            <dd><input type="email" name="email" value="{{ old('email') }}"></dd>
            <dt class="form-list__menu">パスワード</dt>
            <dd><input type="password" name="password"></dd>
            <dt class="form-list__menu">パスワード（確認用）</dt>
            <dd><input class="form-list__password_confirmation" type="password" name="password_confirmation" placeholder="もう一度入力"></dd>
            <div class="form-list__button__position">
                <input class="form-list__button" type="submit"></input>
            </div>
        </dl>
    </form>
@endsection
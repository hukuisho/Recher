@extends('layouts.layouts')
@section('content')
    <h2 class="login">ログイン</h2>
    <a class="auth-link" href="/register">>>アカウントをお持ちで無い方はこちら<<</a>
    <form action="{{ route('login') }}" method="post">
    @csrf 
    <dl class="form-list">
        <dt>メールアドレス</dt>
        <dd><input type="email" name="email" value="{{ old('email') }}"></dd>
        <dt>パスワード</dt>
        <dd><input type="password" name="password"></dd>
        <div class="form-list__button__position">
            <input class="form-list__button" type="submit"></input>
        </div>
    </dl>
</form>
@endsection
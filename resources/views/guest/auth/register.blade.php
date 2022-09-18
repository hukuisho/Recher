@extends('layouts.layouts')
@section('content')
    <h2 class="register">会員登録</h2>
    <a class="auth-link" href="/login">>>会員アカウントをお持ちの方はこちら<<</a>
    <form action="{{ route('register') }}" method="post">
        @csrf 
        <dl class="form-list">
            <dt>名前</dt>
            <dd><input type="text" name="name" value="{{ old('name') }}"></dd>
            <dt>メールアドレス</dt>
            <dd><input type="email" name="email" value="{{ old('email') }}"></dd>
            <dt>パスワード</dt>
            <dd><input type="password" name="password"></dd>
            <dt>パスワード（確認用）</dt>
            <dd><input class="form-list__password_confirmation" type="password" name="password_confirmation" placeholder="もう一度入力"></dd>
            <div class="form-list__button__position">
                <input class="form-list__button" type="submit"></input>
            </div>
        </dl>
    </form>
@endsection
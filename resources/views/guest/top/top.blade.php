@extends('layouts.layouts')
@section('content')
    <div class="auth-select">
        <ul class="guest-top">
            <a class="guest-top__login" href="/login">
                <li>ログイン</li>
            </a>
            <a class="guest-top__register" href="/register">
                <li>新規登録</li>
            </a>
        </ul>
    </div>
@endsection

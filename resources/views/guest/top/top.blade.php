@extends('layouts.layouts')
@section('content')
    <div class="auth-select">
        <h3 class="auth-select__text">{{$viewUseArray["welcome"]}}</h3>
        <a class="about-page-link" href="/about">このアプリについて</a>
        <ul class="guest-top">
            <a class="guest-top__login" href="/login">
                <li>{{$viewUseArray["login"]}}</li>
            </a>
            <a class="guest-top__register" href="/register">
                <li>{{$viewUseArray["sign_up"]}}</li>
            </a>
        </ul>
        <details class="auth-select__terms-of-service">
            <summary class="auth-select__terms-of-service__text">
                {{$viewUseArray["terms_of_service"]}}
            </summary>
            <br>
            <p class="auth-select__terms-of-service__text__main">
                <span class="auth-select__terms-of-service__text__main__detail">文章</span>
            </p>
            <br>
        </details>
    </div>
@endsection

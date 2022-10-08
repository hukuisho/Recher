@extends('layouts.layouts')
@section('content')
    <div class="my_page">
        <a href="/member/user/edit/{{ Auth::user()->id }}">
            <img id="userIcon" class="my_page__userIcon" src="{{ Auth::user()->profile_image }}" alt="アイコン">
        </a>
        <h1 class="my_page__userName">{{ Auth::user()->name }}</h1>
        <a class="my_page__relationship-link" href="">友達</a>
        <a class="my_page__edit-link" href="/member/user/edit/{{ Auth::user()->id }}">編集</a>
        <a class="my_page__show-link" href="/member/user/show/{{ Auth::user()->id }}">詳細</a>
    </div>
@endsection
@extends('layouts.layouts')
@section('content')
    <div class="my_page">
        <img id="userIcon" class="my_page__userIcon" src="{{ Auth::user()->profile_image }}" alt="アイコン">
        <h1 class="my_page__userName">{{ Auth::user()->name }}</h1>
        <a class="my_page__relationship-link" href="">関係</a>
        <a class="my_page__edit-link" href="/member/user/edit/{{ Auth::user()->id }}">編集</a>
        <a class="my_page__show-link" href="/member/user/show/{{ Auth::user()->id }}">詳細</a>
    </div>
@endsection
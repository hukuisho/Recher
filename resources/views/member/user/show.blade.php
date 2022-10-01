@extends('layouts.layouts')
@section('content')
<div class="user-edit">
    <h2 class="user-show__title">詳細</h2>
    <div class="user-show__list">
        <img id="userIcon" class="user-show__icon" src="{{ Auth::user()->profile_image }}" alt="アイコン">
        <p class="user-show__menu">名前</p>
        <p class="user-show__menu__name">{{ Auth::user()->name }}</p>
        <p class="user-show__menu">メール</p>
        <p class="user-show__menu__email">{{ Auth::user()->email }}</p>
        <p class="user-show__menu">会員ID</p>
        <p class="user-show__menu__id">{{ Auth::user()->id }}</p>
    </div>
    <form class="user-show__logout" action="{{ route('logout') }}" method="post">
            @csrf 
            <button type="submit">ログアウト</button>
    </form>
</div>
@endsection
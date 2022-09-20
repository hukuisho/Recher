@extends('layouts.layouts')
@section('content')
<div class="user-edit">
    <h2 class="user-show__title">詳細</h2>
    <p class="user-show__menu">名前</p>
    <p class="user-show__menu__name">{{ Auth::user()->name }}</p>
    <p class="user-show__menu">メール</p>
    <p class="user-show__menu__email">{{ Auth::user()->email }}</p>
    <form class="my_page__logout" action="{{ route('logout') }}" method="post">
            @csrf 
            <button type="submit">ログアウト</button>
    </form>
</div>
@endsection
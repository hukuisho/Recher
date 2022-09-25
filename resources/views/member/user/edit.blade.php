@extends('layouts.layouts')
@section('content')
<div class="user-edit">
    <h2 class="user-edit__title">編集</h2>
    <form
    class="user-edit__form-list"
    action=""
    method="post">
    @csrf
         <img
            id="changeIcon"
            class=""
            src="/images/icon_1.png"
            alt="アイコン"
        />
        <p class="user-edit__menu">名前</p>
        <input class="user-edit__input" value="{{ Auth::user()->name }}" name="name">
        <p class="user-edit__menu">メール</p>
        <input class="user-edit__input" value="{{ Auth::user()->email }}" name="email"><br>
        <button id="userEditButton" class="user-edit__button" type="submit" value="">更新</button>
        <hr class="user-edit__hr">
        <h5 id="isWarningText" class="user-edit__warning-text"></h5>
    </form>
    <form class="my_page__logout" action="{{ route('logout') }}" method="post">
        @csrf 
            <button type="submit">ログアウト</button>
    </form>
</div>
@endsection
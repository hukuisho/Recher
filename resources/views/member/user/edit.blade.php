@extends('layouts.layouts')
@section('content')
<div class="user-edit">
    <h2 class="user-edit__title">編集</h2>
    <form
    class="user-edit__form-list"
    action=""
    method="post">
    @csrf
        <input
            type="image"
            id="changeIcon"
            class="user-edit__icon"
            src="{{ Auth::user()->profile_image }}"
            alt="アイコン"
            value=""
        />
        <select id="selectIconList" class="user-edit__select-icon-list" name="profile_image">
            <option value="/images/icon_1.png"></option>
            <option value="/images/icon_2.png"></option>
            <option value="/images/icon_3.png"></option>
            <option value="/images/icon_4.png"></option>
            <option value="/images/icon_5.png"></option>
        </select>
        <p class="user-edit__menu">名前</p>
        <input class="user-edit__input" value="{{ Auth::user()->name }}" name="name">
        <p class="user-edit__menu">メール</p>
        <input class="user-edit__input" value="{{ Auth::user()->email }}" name="email"><br>
        <button id="userEditButton" class="user-edit__button" type="submit" value="">更新</button>
        <hr class="user-edit__hr">
        <h5 id="isWarningText" class="user-edit__warning-text"></h5>
    </form>
    <form class="user-edit__logout" action="{{ route('logout') }}" method="post">
        @csrf 
        <button type="submit">ログアウト</button>
    </form>
    <form class="user-edit__delete" action="">
        @csrf 
            <button id="userDelete" type="submit" value="" name="delete">退会する</button>
    </form>
</div>
@endsection
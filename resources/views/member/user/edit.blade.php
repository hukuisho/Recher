@extends('layouts.layouts')
@section('content')
<div class="user-edit">
    <h3 class="user-edit__title">編集</h3>
    <form
    class="user-edit__form-list"
    action=""
    method="post">
    @csrf
        <p class="user-edit__menu">名前</p>
        <input class="user-edit__input" value="{{ Auth::user()->name }}" name="name">
        <p class="user-edit__menu">メール</p>
        <input class="user-edit__input" value="{{ Auth::user()->email }}" name="email"><br>
        <input class="user-edit__button" type="submit" value="更新" />
    </form>
    <form class="my_page__logout" action="{{ route('logout') }}" method="post">
            @csrf 
            <button type="submit">ログアウト</button>
    </form>
</div>
@endsection
@extends('layouts.layouts')
@section('content')
    <div class="my_page">
        <h1 class="my_page__userName">{{ Auth::user()->name }}</h1>
        <a class="my_page__relationship-link" href="">関係</a>
        <a class="my_page__edit-link" href="/member/user/edit/{{ Auth::user()->id }}">編集</a>
        <a class="my_page__show-link" href="">詳細</a>
            <form class="my_page__logout" action="{{ route('logout') }}" method="post">
                @csrf 
                <button type="submit">ログアウト</button>
            </form>
    </div>
@endsection
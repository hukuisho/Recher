@extends('layouts.layouts')
@section('content')
    <div class="my_page">
    <p>お帰りなさい{{ Auth::user()->name }}さん</p>
        <form class="my_page__logout" action="{{ route('logout') }}" method="post">
            @csrf 
            <button type="submit">ログアウト</button>
        </form>
    </div>
@endsection
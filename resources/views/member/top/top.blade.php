@extends('layouts.layouts')
@section('content')
    <form action="{{ route('logout') }}" method="post">
        @csrf 
        <button type="submit">ログアウト</button>
    </form>
    <h5 id="getGreetingText" class="greetingText"></h5>
@endsection
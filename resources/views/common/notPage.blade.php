@extends('layouts.layouts')
@section('content')
<section class="notPage">
    <h3 class="notPage__warning-text">{{$viewUseArray["warningText"]}}</h3>
    @auth
        <a class="notPage__top-text-link" href="member/">{{$viewUseArray["redirectTopPath"]}}</a>
    @endauth
    @guest
        <a class="notPage__top-text-link" href="/">{{$viewUseArray["redirectTopPath"]}}</a>
    @endguest
</section>
@endsection
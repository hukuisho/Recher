@extends('layouts.layouts')
@section('content')
    <form method="get" id="searchFormAction" class="search" action="">
        <p class="search__text">{{$viewUseArray["text"]}}</p>
        <input
            type="tel"
            id="searchWord"
            class="search__word"
            name="q"
            placeholder="検索ワードを入力してください。"
            maxlength="20"
            value=""
        />
        <input
            type="submit"
            name="btng"
            id="searchInput"
            style="background-color: goldenrod;"
            class="search__Word__input"
            value="検索"
        />
        <input type="hidden" name="hl" value="ja" />
        <hr>
        <p class="search__explanation-text">
            この機能をご利用する際は
        </p>
        <p class="search__explanation-text">
            予めGoogleアカウントを
        </p>
        <p class="search__explanation-text">
            お持ち頂くことが望ましいです。
        </p>
    </form>
@endsection
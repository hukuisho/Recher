@extends('layouts.layouts')
@section('content')
    <form method="get" class="search" action="http://www.google.co.jp/search">
        <p class="search__text">{{$viewUseArray["text"]}}</p>
        <input
            type="tel"
            class="search__word"
            name="q"
            placeholder="検索ワードを入力してください。"
            maxlength="20"
            value=""
        />
        <input
            type="submit"
            name="btng"
            id="isSearchInput"
            style="background-color: goldenrod;"
            class="search__Word__input"
            value="検索"
        />
        <input type="hidden" name="hl" value="ja" />
    </form>
@endsection
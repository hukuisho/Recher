@extends('layouts.layouts')
@section('content')
    <form method="get" id="isSearchAction" class="search" action="http://www.google.co.jp/search">
        <p class="search__text">{{$viewUseArray["text"]}}</p>
        <input
            type="tel"
            id="isSearchWord"
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
            class="search__Word__input"
            value="検索"
        />
        <input type="hidden" name="hl" value="ja" />
    </form>
@endsection
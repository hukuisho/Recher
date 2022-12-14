@php
$month = date('n');
@endphp
@unless ($_SERVER['REQUEST_URI'] == "/")
    <script src="{{ asset('/js/commons/header.js') }}"></script>
    <script src="{{ asset('/js/commons/footer.js') }}"></script>
@endunless
@switch ($_SERVER['REQUEST_URI'])
    @case("/")
        <script src="{{ asset('/js/guest/index.js') }}"></script>
        @break
    @case("/about")
        <script src="{{ asset('/js/commons/about.js') }}"></script>
        @switch ($month)
            @case("1")    
                <script src="{{ asset('/js/commons/months/january.js') }}"></script>
                @break
            @case("2")
                <script src="{{ asset('/js/commons/months/february.js') }}"></script>
                @break
            @case("3")
            <script src="{{ asset('/js/commons/months/march.js') }}"></script>
                @break
        @endswitch
    @break
    <!-- fukui s -->
    @case("/preview")
        <script src="{{ asset('/js/commons/months/january.js') }}"></script>
        <script src="{{ asset('/js/commons/months/february.js') }}"></script>
        <script src="{{ asset('/js/commons/months/march.js') }}"></script>
        <script src="{{ asset('/js/commons/months/april.js') }}"></script>
        @break
    <!-- fukui e -->
    @case("/profile_delete_pre")
        <script src="{{ asset('/js/commons/profile_delete_pre.js') }}"></script>
    @break
    @case("/member")
        <script src="{{ asset('/js/member/top/top.js') }}"></script>
        @switch ($month)
            @case("1")
                <script src="{{ asset('/js/commons/months/january.js') }}"></script>
            @break
            @case("2")
                <script src="{{ asset('/js/commons/months/february.js') }}"></script>
            @break
            @case("3")
            <script src="{{ asset('/js/commons/months/march.js') }}"></script>
            @break
        @endswitch
    @break
    @case ("/member/search")
        <script src="{{ asset('/js/member/search/search.js') }}"></script>
    @break
    @case ("/member/renraku")
        <script src="{{ asset('/js/member/renraku/renraku.js') }}"></script>
    @break
    @case ("/member/schedule")
        <script src="{{ asset('/js/member/schedule/Schedule.js') }}"></script>
    @break
    @default
    @if(strpos($_SERVER['REQUEST_URI'],'user') == true)
        <script src="{{ asset('/js/member/user/user.js') }}"></script>
        @break
    @else 
            <script src="{{ asset('/js/member/user/user.js') }}"></script>
        @break
    @endif
@endswitch

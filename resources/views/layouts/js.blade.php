@unless ($_SERVER['REQUEST_URI'] == "/")
    <script src="{{ asset('/js/commons/header.js') }}"></script>
    <script src="{{ asset('/js/commons/footer.js') }}"></script>
@endunless
@switch ($_SERVER['REQUEST_URI'])
    @case("/")
        <script src="{{ asset('/js/guest/index.js') }}"></script>
    @break
    @case("/profile_delete_pre")
        <script src="{{ asset('/js/commons/profile_delete_pre.js') }}"></script>
    @break
    @case("/member")
        <script src="{{ asset('/js/member/top/top.js') }}"></script>
    @break
    @case ("/member/search")
        <script src="{{ asset('/js/member/search/search.js') }}"></script>
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

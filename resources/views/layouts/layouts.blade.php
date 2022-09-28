<html lang="ja">
@include('layouts.head')
    <body>
        <div id="richer" class="richer">
            @include('layouts.header')
            <div class="richer__container">
                <div class="richer__container__space"></div>
                @yield('content')
                <div class="richer__container__space"></div>
            </div>
            @include('layouts.footer')
        </div>
        @include('layouts.js')
    </body>
</html>
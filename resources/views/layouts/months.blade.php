@php
$month = date('n');
@endphp
@switch ($month)
    @case("1")
        <div id="januaryAnimation" class="january-animation"></div>
        @break
    @case("2")
        <div id="february" class="february-animation"></div>
        @break
    @case("3")
        <div id="marchAnimation" class="march-animation"></div>
        @break
    @case("4")
        <div id="aprilAnimation" class="april-animation"></div>
        @break
    @case("5")
        <div id="mayAnimation" class="may-animation"></div>
        @break
    @case("6")
        <div id="juneAnimation" class="june-animation"></div>
        @break
    @case("7")
        <div id="julyAnimation" class="july-animation"></div>
        @break
    @case("8")
        <div id="augustAnimation" class="august-animation"></div>
        @break
    @case("9")
        <div id="septemberAnimation" class="september-animation"></div>
        @break
    @case("10")
        <div id="octoberAnimation" class="october-animation"></div>
        @break
    @case("11")
        <div id="novemberAnimation" class="november-animation"></div>
        @break
    @case("12")
        <div id="decemberAnimation" class="december-animation"></div>
        @break
@endswitch
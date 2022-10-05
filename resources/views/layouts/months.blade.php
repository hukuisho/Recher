@php
$month = date('n');
@endphp
@switch ($month)
    @case("1")
        <div id="januaryAnimation" class="january-animation">
            <img src="/images/january/oinori.png" id="januaryAnimationOinori" class="january-animation__oinori" alt="お祈り">
            <h3 id="januaryAnimationText" class="january-animation__text"></h3>
            <img src="/images/january/hagoita.jpg" id="januaryAnimationHagoita1"class="january-animation__hagoita1" alt="羽子板">
            <img src="/images/january/hagoita.jpg" id="januaryAnimationHagoita2" class="january-animation__hagoita2" alt="羽子板">
            <img src="/images/january/hane.jpg" id="januaryAnimationHane" class="january-animation__hane" alt="羽">
        </div>
        @break
    @case("2")
        <div id="februaryAnimation" class="february-animation">
            <h3 id="februaryAnimationText" class="february-animation__text"></h3>
            <img src="/images/february/onikiti.jpg" id="onikitiImg" class="february-animation__onikitiImg"></img>
            <img src="/images/february/mamemaki.jpg" id="mamemakiImg" class="february-animation__mamemakiImg"></img>
            <img src="/images/february/bg.jpg" id="februaryAnimationBg" class="february-animation__bg"></img>
            <img src="/images/february/love.jpg" id="loveImg" class="february-animation__loveImg"></img>
        </div>
        @break
    @case("3")
    <div id="marchAnimation" class="march-animation">
        <img src="/images/march/march_bg.png" id="marchBg" class="march-animation__march_bg"></img>
        <img src="/images/march/hinamatsuri.png" id="hinamatsuri" class="march-animation__hinamatsuri"></img>
        <img src="/images/march/sotugyousyousyo.png" id="sotugyousyousyo" class="march-animation__sotugyousyousyo"></img>
        <img src="/images/march/whiteday.png" id="whiteday" class="march-animation__whiteday"></img>
        <h3 id="marchAnimationText" class="march-animation__text"></h3>
    </div>
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
        <div id="octoberAnimation" class="september-animation"></div>
        @break
    @case("11")
        <div id="novemberAnimation" class="november-animation"></div>
        @break
    @case("12")
        <div id="decemberAnimation" class="december-animation"></div>
        @break
@endswitch
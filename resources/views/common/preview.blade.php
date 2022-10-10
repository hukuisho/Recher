@extends('layouts.layouts')
@section('content')
<div id="januaryAnimation" class="january-animation">
    <img src="/images/january/oinori.png" id="januaryAnimationOinori" class="january-animation__oinori" alt="お祈り">
    <h3 id="januaryAnimationText" class="january-animation__text"></h3>
    <img src="/images/january/hagoita.jpg" id="januaryAnimationHagoita1"class="january-animation__hagoita1" alt="羽子板">
    <img src="/images/january/hagoita.jpg" id="januaryAnimationHagoita2" class="january-animation__hagoita2" alt="羽子板">
    <img src="/images/january/hane.jpg" id="januaryAnimationHane" class="january-animation__hane" alt="羽">
</div>
<div id="februaryAnimation" class="february-animation">
    <h3 id="februaryAnimationText" class="february-animation__text"></h3>
    <img src="/images/february/onikiti.jpg" id="onikitiImg" class="february-animation__onikitiImg"></img>
    <img src="/images/february/mamemaki.jpg" id="mamemakiImg" class="february-animation__mamemakiImg"></img>
    <img src="/images/february/bg.jpg" id="februaryAnimationBg" class="february-animation__bg"></img>
    <img src="/images/february/love.jpg" id="loveImg" class="february-animation__loveImg"></img>
</div>
<div id="marchAnimation" class="march-animation">
    <img src="/images/march/march_bg.png" id="marchBg" class="march-animation__march_bg"></img>
    <img src="/images/march/hinamatsuri.png" id="hinamatsuri" class="march-animation__hinamatsuri"></img>
    <img src="/images/march/sotugyousyousyo.png" id="sotugyousyousyo" class="march-animation__sotugyousyousyo"></img>
    <img src="/images/march/whiteday.png" id="whiteday" class="march-animation__whiteday"></img>
    <h3 id="marchAnimationText" class="march-animation__text"></h3>

</div>
<!-- fukui -->
<div id="aprilAnimation" class="april-animation">
    <ul id="aprilAnimationSakura" class="april-animation__sakura">
    @for ($i = 0; $i < 8; $i++)
        <li></li>
    @endfor
    </ul>
    <img src="/images/april/NewLife.jpg" id="NewLife" class="april-animation_NewLife"></img>
    <img src="/images/april/Support.png" id="Support" class="april-animation_Support"></img>
    <img src="/images/april/LifeImage.png" id="LifeImage" class="april-animation_LifeImage"></img>
    <p id="aprilAnimationText" class="april-animation__text"></p>
</div>
<!-- fukui -->
<div id="mayAnimation" class="may-animation"></div>
<div id="juneAnimation" class="june-animation"></div>
<div id="julyAnimation" class="july-animation"></div>
<div id="augustAnimation" class="august-animation"></div>
<div id="septemberAnimation" class="september-animation"></div>
<div id="octoberAnimation" class="september-animation"></div>
<div id="novemberAnimation" class="november-animation"></div>
<div id="decemberAnimation" class="december-animation"></div>
@endsection
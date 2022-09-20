@auth
    <div class="richer__header">
        <div class="richer__header__navList">
            <a href="/member" class="richer__header__navList__title">Richer</a>
            <a href="/member/user" class="richer__header__navList__user">
                <span class="richer__header__navList__user__icon"></span>
            </a>
        </div>
    </div>
@endauth
@guest
<div class="richer__header">
    <div class="richer__header__navList">
        <a href="/" class="richer__header__navList__title">Richer</a>
        <a href="/login" class="richer__header__navList__user">
            <span class="richer__header__navList__user__icon"></span>
        </a>
    </div>
</div>
@endguest
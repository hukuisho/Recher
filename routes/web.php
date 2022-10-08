<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\CommonsController;
use App\Http\Controllers\CommonController;

//共通
Route::get('/about', [CommonController::class, 'about']);
//アニメーション確認用
Route::get('/preview', [CommonController::class, 'preview']);
//ユーザー退会しているように見せる用
Route::get('/profile_delete_pre', [CommonController::class, 'profile_delete_pre']);
Route::fallback(function(){ 
    //存在しないURLは自動的に/notPageにリダイレクトさせる。
    return redirect('/notPage'); 
});
Route::get('/notPage', [CommonController::class, 'notPage']);
//非会員
Route::get('/',[GuestController::class, 'top']);
//会員
Route::group(['middleware' => ['auth']], function () {
    Route::get('/member',                 [MemberController::class, 'top']);
    //ユーザー関連
    Route::get('/member/user',            [MemberController::class, 'my_page']);
    Route::get('/member/user/show/{id}',  [MemberController::class, 'profile_show']);
    Route::get('/member/user/edit/{id}',  [MemberController::class, 'profile_edit']);
    Route::post('/member/user/edit/{id}', [MemberController::class, 'profile_edit']);
    Route::get('/member/user/friend',     [MemberController::class, 'friend_top']);
    //投稿
    Route::get('/member/timeline',        [MemberController::class, 'timeline_index']);
    //予定
    Route::get('/member/schedule',        [MemberController::class, 'schedule_index']);
    //検索
    Route::get('/member/search',          [MemberController::class, 'search']);
    //通知
    Route::get('/member/bell',            [MemberController::class, 'bell_index']);
    //連絡
    Route::get('/member/renraku',         [MemberController::class, 'renraku_select']);
    Route::get('/member/renraku/admin',   [MemberController::class, 'renraku_select_admin']);
    Route::get('/member/renraku/friend',  [MemberController::class, 'renraku_select_friend']);
});
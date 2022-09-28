<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\CommonsController;
use App\Http\Controllers\LayoutControlle;
//非会員
Route::get('/', [GuestController::class, 'top']);
Route::get('/about', [GuestController::class, 'about']);
//会員
Route::group(['middleware' => ['auth']], function () {
    Route::get('/member', [MemberController::class, 'top']);
    Route::get('/member/user', [MemberController::class, 'my_page']);
    Route::get('/member/user/show/{id}', [MemberController::class, 'profile_show']);
    Route::get('/member/user/edit/{id}', [MemberController::class, 'profile_edit']);
    Route::post('/member/user/edit/{id}', [MemberController::class, 'profile_edit']);
    Route::get('/member/timeline', [MemberController::class, 'timeline_index']);
    Route::get('/member/schedule', [MemberController::class, 'schedule_index']);
    Route::get('/member/bell', [MemberController::class, 'bell_index']);
    Route::get('/member/renraku', [MemberController::class, 'renraku_index']);
    Route::get('/member/search', [MemberController::class, 'search']);
});
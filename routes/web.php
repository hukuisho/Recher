<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\CommonsController;
use App\Http\Controllers\LayoutControlle;
//共通
Route::get('/layouts', [LayoutController::class, 'index']);
//非会員
Route::get('/', [GuestController::class, 'top']);
//会員
Route::group(['middleware' => ['auth']], function () {
    Route::get('/member', [MemberController::class, 'top']);
    Route::get('/member/user', [MemberController::class, 'my_page']);
    Route::get('/member/user/edit/{id}', [MemberController::class, 'profile_edit']);
    Route::post('/member/user/edit/{id}', [MemberController::class, 'profile_edit']);
    Route::get('/member/search', [MemberController::class, 'search']);
});
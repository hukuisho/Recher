<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\CommonsController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//非会員
Route::get('/', [GuestController::class, 'top']);
//会員
Route::get('/member', [MemberController::class, 'top']);


// ////////////////////////
// //ログイン機能後に'/'は  //
// //ifで分岐             //
// ////////////////////////

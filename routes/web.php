<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemberController;


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

Route::get('/', function () {
    return view('app');
});Route::get('/member', [MemberController::class, 'top']);

// ////////////////////////
// //ログイン機能後に'/'は  //
// //ifで分岐             //
// ////////////////////////
// Route::get('/showvalue', [SampleController::class, 'showValue']);
// //非会員
// Route::get('guest/', function () {
//     return view('guest/top/top');
// });
// //会員
// Route::get('member/', function () {
//     return view('member/top/top');
// });

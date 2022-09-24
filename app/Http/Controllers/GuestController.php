<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GuestController extends Controller
{       
    public function top() {
        $login = "ログイン";
        $sign_up = "新規登録";
        $welcome = "ようこそ";
        $terms_of_service = "利用規約";

        $viewUseArray = array(
            "welcome" => $welcome,
            "login" => $login,
            "sign_up" => $sign_up,
            "terms_of_service" => $terms_of_service,
        );
        return view('guest/top/top')->with('viewUseArray',$viewUseArray);
    }
    public function register() {
        return view('guest/user/register');
    }
}

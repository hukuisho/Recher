<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GuestController extends Controller
{       
    public function top() {
        $viewUseArray = array(
            "a" => "a",
        );
        return view('guest/top/top')->with('viewUseArray',$viewUseArray);
    }
    public function register() {
        $viewUseArray = array(
            "a" => "a",
        );
        return view('guest/user/register')->with('viewUseArray',$viewUseArray);
    }
}

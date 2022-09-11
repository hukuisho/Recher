<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function top() {
        $a = "aaa";
        $viewUseArray = array(
            "a" => $a,
        );
        return view('member/top/top')->with('viewUseArray',$viewUseArray);
    }
}

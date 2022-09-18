<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function top() {
        $viewUseArray = array(
        );
        return view('member/top/top')->with('viewUseArray',$viewUseArray);
    }
    public function search() {
        $text = "ググる!!!";
        $viewUseArray = array(
            "text" => $text,
        );
        return view('member/search/index')->with('viewUseArray',$viewUseArray);
    }

}

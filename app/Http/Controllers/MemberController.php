<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;




class MemberController extends Controller
{
    public function my_page() {
        $viewUseArray = array(
        );

        return view('member/user/my_page')->with('viewUseArray',$viewUseArray);
    }
    public function profile_show(Request $request) {

        $viewUseArray = array(
        );
        return view('member.user.show')->with('viewUseArray',$viewUseArray);
    }
    public function profile_edit(Request $request) {
        $user_form = $request->all();
        $user = Auth::user();
        $user->fill($user_form)->save();
        $viewUseArray = array(
        );
        return view('member.user.edit')->with('viewUseArray',$viewUseArray);
    }
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

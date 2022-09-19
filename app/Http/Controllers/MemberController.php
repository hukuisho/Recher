<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;




class MemberController extends Controller
{
    // public function __construct(User $user)
    // {
    //     $user_id = Auth::id();
    // }
    public function my_page() {
        $viewUseArray = array(
        );

        return view('member/user/my_page')->with('viewUseArray',$viewUseArray);
    }
    public function profile_edit(Request $request, $user_id) {
        $user_form = $request->all();
        $user = Auth::user();
        $user->fill($user_form)->save();
        $viewUseArray = array(
        );
        return view('member.user.edit')->with('viewUseArray',$viewUseArray);
    }
    public function top() {
        $user_id = Auth::id();
        $user_info = User::select('*')->find($user_id);
        $user_name = $user_info["name"];
        $viewUseArray = array(
            "user_name" => $user_name,
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

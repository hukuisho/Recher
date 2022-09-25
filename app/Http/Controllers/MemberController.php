<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models;




class MemberController extends Controller
{
    public function my_page() {
        $viewUseArray = array(
        );

        return view('member/user/my_page')->with('viewUseArray',$viewUseArray);
    }
    public function profile_show() {

        $viewUseArray = array(
        );
        return view('member.user.show')->with('viewUseArray',$viewUseArray);
    }
    public function profile_edit(Request $request) {
        $user_form = $request->all();
        $user = Auth::user();
        
        try{
            if(!empty($user_form["profile_image"]) &&!empty($user_form["name"]) && !empty($user_form["email"])){
                // dd($user_form);
                $user->fill($user_form)->save();
                return redirect('member/user'); 
            } else {
                $user->fill($user_form)->save();
                return view('member.user.edit'); 
            }
        } catch (Exception $ex) {
            return view('member.user.edit');
        }
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
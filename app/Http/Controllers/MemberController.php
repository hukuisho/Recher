<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models;
use App\Mail\ContactsSendmail;


class MemberController extends Controller
{
    public function top() {
        $viewUseArray = array(
        );
        return view('member/top/top')->with('viewUseArray',$viewUseArray);
    }
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
        if (isset($user_form["delete"]) && $user_form["delete"] == "isset"){
            $user->find($user["id"])->delete();
            return redirect('/profile_delete_pre');
        }
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
    public function friend_top() {
        $viewUseArray = array(
        );
        return view('member/user/friend/top')->with('viewUseArray',$viewUseArray);
    }
    public function timeline_index() {
        $viewUseArray = array(
        );
        return view('member/timeline/index')->with('viewUseArray',$viewUseArray);
    }
    public function schedule_index() {
        $viewUseArray = array(
        );
        return view('member/schedule/index')->with('viewUseArray',$viewUseArray);
    }
    public function search() {
        $text = "ググる!!!";
        $viewUseArray = array(
            "text" => $text,
        );
        return view('member/search/index')->with('viewUseArray',$viewUseArray);
    }
    public function bell_index() {
        $viewUseArray = array(
        );
        return view('member/bell/index')->with('viewUseArray',$viewUseArray);
    }
    public function renraku_select() {
        $viewUseArray = array(
        );
        return view('member/renraku/select')->with('viewUseArray',$viewUseArray);
    }
    public function renraku_select_admin_index() {
        return view('member.renraku.admin.index');
    }
    public function renraku_select_admin_confirm(Request $request) {
        // バリデーションルールを定義
        // 引っかかるとエラーを起こしてくれる
        $request->validate([
        'email' => 'required|email',
        'title' => 'required',
        'body' => 'required',
        ]);
    
        // フォームからの入力値を全て取得
        $inputs = $request->all();
        // 確認ページに表示
        // 入力値を引数に渡す
        return view('member/renraku/admin/confirm', [
        'inputs' => $inputs,
        ]);
    }
    public function renraku_select_admin_send(Request $request)
    {
        // バリデーション
        $request->validate([
        'email' => 'required|email',
        'title' => 'required',
        'body' => 'required'
        ]);

        // actionの値を取得
        $action = $request->input('action');

        // action以外のinputの値を取得
        $inputs = $request->except('action');

            // 送信ボタンの場合、送信処理

            // ユーザにメールを送信
            \Mail::to($inputs['email'])->send(new ContactsSendmail($inputs));
            // 自分にメールを送信
            \Mail::to('hms0175km@gmail.com')->send(new ContactsSendmail($inputs));

            // 二重送信対策のためトークンを再発行
            $request->session()->regenerateToken();

            // 送信完了ページのviewを表示
            return view('member/renraku/admin/send');
    }
    public function renraku_select_friend() {
        $viewUseArray = array(
        );
        return view('member/renraku/friend/index')->with('viewUseArray',$viewUseArray);
    }

}
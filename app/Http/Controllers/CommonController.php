<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommonController extends Controller
{
    public function about() {
        

        $viewUseArray = array(
            
        );
        return view('common/about/about')->with('viewUseArray',$viewUseArray);
    }
    public function profile_delete_pre() {
        

        $viewUseArray = array(
            
        );
        return view('common/profile_delete_pre')->with('viewUseArray',$viewUseArray);
    }
    public function notPage() {
        $warningText = "ページが存在しません";
        $redirectTopPath = "TOPへ戻る";
        $viewUseArray = array(
            "warningText" => $warningText,
            "redirectTopPath" => $redirectTopPath,
        );
        return view('common/notPage')->with('viewUseArray',$viewUseArray);
    }
}

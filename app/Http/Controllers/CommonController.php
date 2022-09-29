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
    public function notPage() {
        $warningText = "不正なアクセスが行われました";
        $redirectTopPath = "TOPへ戻る";
        $viewUseArray = array(
            "warningText" => $warningText,
            "redirectTopPath" => $redirectTopPath,
        );
        return view('common/notPage')->with('viewUseArray',$viewUseArray);
    }
}

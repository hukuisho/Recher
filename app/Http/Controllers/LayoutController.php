<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LayoutController extends Controller
{
    public function index() {

      $viewUseArray = array(
      );
    return view('layouts/layouts')->with('viewUseArray',$viewUseArray);
    }
}

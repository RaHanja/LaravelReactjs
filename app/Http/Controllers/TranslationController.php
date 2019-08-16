<?php

namespace App\Http\Controllers;

use Barryvdh\TranslationManager\Controller;

class TranslationController extends Controller
{
    public function index(){
        return $this->getIndex() ;
    }
}

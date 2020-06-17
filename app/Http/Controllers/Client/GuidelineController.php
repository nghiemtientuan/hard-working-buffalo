<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GuidelineController extends Controller
{
    public function index()
    {
        return view('Client.guideline');
    }
}

<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NotFoundController extends Controller
{
    public function index()
    {
        return view('Client.notFound');
    }
}

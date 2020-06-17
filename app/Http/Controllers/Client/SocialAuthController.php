<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Services\SocialAccountService;
use App\Http\Controllers\Controller;
use Socialite;

class SocialAuthController extends Controller
{
    public function redirect($social)
    {
        return Socialite::driver($social)->redirect();
    }

    public function callback($social)
    {
        $student = SocialAccountService::createOrGetUser(Socialite::driver($social)->user(), $social);
        auth()->guard('student')->login($student);

        return redirect()->route('client.home');
    }
}

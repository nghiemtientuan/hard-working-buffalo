<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('guest:student')->except('logout');
    }

    public function getLogin()
    {
        return view('Client.login');
    }

    public function postLogin(Request $request)
    {
        $data = $request->only([
            'email',
            'password',
        ]);
        $isLogin = Auth::guard('student')->attempt($data, true);
        if ($isLogin) {
            return redirect()->route('client.home');
        } elseif (Auth::guard()->attempt($data, true)) {
            return redirect()->route('admin.home');
        } else {
            return redirect()->back()->withErrors(trans('client.actions.login_false'));
        }
    }

    public function logout()
    {
        Auth::logout();
        Auth::guard('student')->logout();

        return redirect()->route('client.home');
    }
}

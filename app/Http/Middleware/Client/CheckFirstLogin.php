<?php

namespace App\Http\Middleware\Client;

use App\Models\Student;
use Closure;
use Illuminate\Support\Facades\Auth;

class CheckFirstLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!Auth::guard('student')->check()
            || Auth::guard('student')->user()->active == Student::ACTIVE_TRUE) {
            return $next($request);
        } else {
            return redirect()->route('client.changePass.show')
                ->withErrors([trans('client.validations.changePassword.firstLogin')]);
        }
    }
}

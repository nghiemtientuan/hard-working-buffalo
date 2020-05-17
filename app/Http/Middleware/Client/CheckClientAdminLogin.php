<?php

namespace App\Http\Middleware\Client;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckClientAdminLogin
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
        if (Auth::guard('student')->check() || Auth::check()) {
            return $next($request);
        }

        return redirect()->route('client.login');
    }
}

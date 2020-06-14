<?php
if (! function_exists('getFullName')) {
    function getFullName($lastname, $firstname) {
        return $lastname . ' ' . $firstname;
    }
}

if (! function_exists('getCurrentUser')) {
    function getCurrentUser() {
        $user = null;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $user = \Illuminate\Support\Facades\Auth::user();
            $user->type = 'App\Models\User';
        } elseif (\Illuminate\Support\Facades\Auth::guard('student')->check()) {
            $user = \Illuminate\Support\Facades\Auth::guard('student')->user();
            $user->type = 'App\Models\Student';
        }

        return $user;
    }
}

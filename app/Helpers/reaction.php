<?php
if (! function_exists('getCountReact')) {
    function getCountReact($totalReacts, $reactKey) {
        $count = 0;
        foreach ($totalReacts as $react) {
            if ($reactKey == $react->react_id) $count++;
        }

        return $count;
    }
}

if (! function_exists('checkUserReaction')) {
    function checkUserReaction($totalReacts) {
        $check = false;
        $user = null;
        if (\Illuminate\Support\Facades\Auth::check()) {
            $user = \Illuminate\Support\Facades\Auth::user();

            foreach ($totalReacts as $react) {
                if ($react->user_id == $user->id && $react->type == \App\Models\ReactHistory::TYPE_USER) {
                    $check = true;
                }
            }
        } elseif (\Illuminate\Support\Facades\Auth::guard('student')->check()) {
            $user = \Illuminate\Support\Facades\Auth::guard('student')->user();

            foreach ($totalReacts as $react) {
                if ($react->user_id == $user->id && $react->type == \App\Models\ReactHistory::TYPE_STUDENT) {
                    $check = true;
                }
            }
        }

        return $check;
    }
}

if (! function_exists('getSelectedReact')) {
    function getSelectedReact($totalReacts) {
        $reactSelected = 0;

        if (\Illuminate\Support\Facades\Auth::check()) {
            $user = \Illuminate\Support\Facades\Auth::user();

            foreach ($totalReacts as $react) {
                if ($react->user_id == $user->id && $react->type == \App\Models\ReactHistory::TYPE_USER) {
                    $reactSelected = $react->react_id;
                }
            }
        } elseif (\Illuminate\Support\Facades\Auth::guard('student')->check()) {
            $user = \Illuminate\Support\Facades\Auth::guard('student')->user();

            foreach ($totalReacts as $react) {
                if ($react->user_id == $user->id && $react->type == \App\Models\ReactHistory::TYPE_STUDENT) {
                    $reactSelected = $react->react_id;
                }
            }
        }

        return $reactSelected;
    }
}

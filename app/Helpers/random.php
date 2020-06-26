<?php
if (! function_exists('randomCode')) {
    function randomCode($code = null) {
        if ($code) {
            return $code . \Illuminate\Support\Str::random(config('constant.question.random_code_length'));
        }

        return \Illuminate\Support\Str::random(config('constant.question.random_code_length'))
            . \Illuminate\Support\Str::random(config('constant.question.random_code_length'));
    }
}

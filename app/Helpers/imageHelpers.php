<?php
if (! function_exists('userDefaultImage')) {
    function userDefaultImage($file) {
        if ($file) {
            return $file->base_folder;
        } else {
            return config('constant.default_images.url_profile');
        }
    }
}

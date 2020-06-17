<?php
if (! function_exists('locationCityCountry')) {
    function locationCityCountry($ip) {
        $location = Location::get($ip);
        if ($location) {
            return $location->cityName . ', ' . $location->countryName;
        } else {
            return trans('backend.local');
        }
    }
}

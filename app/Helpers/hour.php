<?php
if (! function_exists('getHourMinuteSecond')) {
    function getHourMinuteSecond($second) {
        return gmdate("H:i:s", $second);
    }
}

if (! function_exists('getDateFormat')) {
    function getDateFormat($time, $format) {
        return date($format, strtotime($time));
    }
}

<?php
if (! function_exists('getHourMinuteSecond')) {
    function getHourMinuteSecond($second) {
        return gmdate("H:i:s", $second);
    }
}

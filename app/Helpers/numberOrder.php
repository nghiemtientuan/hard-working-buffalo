<?php
if (! function_exists('getRankingNumberOrder')) {
    function getRankingNumberOrder($no) {
        switch ($no) {
            case 1: return '<img src="/images/common/gold.png" class="rounded-circle w-75">';
            case 2: return '<img src="/images/common/silver.png" class="rounded-circle w-75">';
            case 3: return '<img src="/images/common/copper.png" class="rounded-circle w-75">';
            default: return $no;
        }
    }
}

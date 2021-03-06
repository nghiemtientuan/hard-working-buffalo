<?php

namespace App\Repositories\Contracts;

interface AttendanceRepositoryInterface
{
    public function getAttendanceInThisMonth($userId, $userType);

    public function getAttendanceNow($userId, $userType);
}

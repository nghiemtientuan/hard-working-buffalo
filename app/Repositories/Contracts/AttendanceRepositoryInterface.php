<?php

namespace App\Repositories\Contracts;

interface AttendanceRepositoryInterface
{
    public function getAttendanceInThisMonth($userId, $userType);
}

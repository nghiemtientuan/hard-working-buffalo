<?php

namespace App\Repositories\Eloquents;

use App\Models\Attendance;
use App\Repositories\Contracts\AttendanceRepositoryInterface;

class AttendanceRepository extends EloquentRepository implements AttendanceRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Attendance::class;
    }

    public function getAttendanceInThisMonth($userId, $userType)
    {
        $attendances =  $this->_model->where(Attendance::USER_ID_FIELD, $userId)
            ->where(Attendance::USER_TYPE_FIELD, $userType)
            ->whereMonth('created_at', now()->month)
            ->orderBy('created_at')
            ->get();

        foreach ($attendances as $key => $attendance) {
            switch ($attendances->action_type) {
                case Attendance::ACTION_LOGIN:
                    $attendances[$key]->color = Attendance::ACTION_LOGIN_COLOR;
                    $attendances[$key]->title = Attendance::ACTION_LOGIN_TITLE;
                    break;
                case Attendance::ACTION_TEST:
                    $attendances[$key]->color = Attendance::ACTION_TEST_COLOR;
                    $attendances[$key]->title = Attendance::ACTION_TEST_TITLE;
                    break;
            }
        }

        return $attendances;
    }
}

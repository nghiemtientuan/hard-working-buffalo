<?php

namespace App\Http\Middleware\Client;

use App\Models\Attendance;
use Closure;
use Illuminate\Support\Facades\Auth;
use App\Repositories\Contracts\AttendanceRepositoryInterface as AttendanceRepository;

class LoginAttendanceMiddleware
{
    protected $attendanceRepository;

    /**
     * LoginAttendanceMiddleware constructor.
     * @param AttendanceRepository $attendanceRepository
     */
    public function __construct(
        AttendanceRepository $attendanceRepository
    ) {
        $this->attendanceRepository = $attendanceRepository;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Auth::guard('student')->check()) {
            $studentId = Auth::guard('student')->user()->id;
            $checkInNow = $this->attendanceRepository->getAttendanceNow($studentId, Attendance::TYPE_STUDENT);

            if (!$checkInNow) {
                $dataAttendance = [
                    Attendance::USER_ID_FIELD => $studentId,
                    Attendance::USER_TYPE_FIELD => Attendance::TYPE_STUDENT,
                    Attendance::ACTION_TYPE_FIELD => Attendance::ACTION_LOGIN
                ];

                $this->attendanceRepository->create($dataAttendance);
            }
        } elseif (Auth::check()) {
            $userId = Auth::guard('student')->user()->id;
            $checkInNow = $this->attendanceRepository->getAttendanceNow($userId, Attendance::TYPE_USER);

            if (!$checkInNow) {
                $dataAttendance = [
                    Attendance::USER_ID_FIELD => $userId,
                    Attendance::USER_TYPE_FIELD => Attendance::TYPE_USER,
                    Attendance::ACTION_TYPE_FIELD => Attendance::ACTION_LOGIN
                ];

                $this->attendanceRepository->create($dataAttendance);
            }
        }

        return $next($request);
    }
}

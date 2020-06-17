<?php

namespace App\Http\Controllers\Client;

use App\Models\Attendance;
use Illuminate\Http\Request;
use App\Repositories\Contracts\AttendanceRepositoryInterface as AttendanceRepository;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class CalendarController extends Controller
{
    protected $attendanceRepository;

    /**
     * CalendarController constructor.
     * @param AttendanceRepository $attendanceRepository
     */
    public function __construct(AttendanceRepository $attendanceRepository)
    {
        $this->attendanceRepository = $attendanceRepository;
    }

    public function index()
    {
        return view('Client.calendar');
    }

    public function getEvent()
    {
        $student = Auth::guard('student')->user();
        $attendances = $this->attendanceRepository
            ->getAttendanceInThisMonth($student->id, Attendance::TYPE_STUDENT);

        return response()->json([
            'code' => config('constant.status_code.code_200'),
            'data' => [
                'attendances' => $attendances,
            ],
        ]);
    }
}

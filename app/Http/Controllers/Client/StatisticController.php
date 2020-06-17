<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\HistoryRepositoryInterface as HistoryRepository;
use Illuminate\Support\Facades\Auth;

class StatisticController extends Controller
{
    protected $historyRepository;

    /**
     * StatisticController constructor.
     * @param $historyRepository
     */
    public function __construct(HistoryRepository $historyRepository)
    {
        $this->historyRepository = $historyRepository;
    }

    public function index()
    {
        $student = Auth::guard('student')->user();
        $usedTests = $this->historyRepository->getUsedTest($student->id);

        return view('Client.statistic', compact('usedTests'));
    }

    public function search(Request $request)
    {
        $student = Auth::guard('student')->user();
        $statistic = $this->historyRepository->getStatisticTestByStudentId($student->id, $request->testId);

        return response()->json([
            'code' => config('constant.status_code.code_200'),
            'data' => [
                'statistic' => $statistic,
            ],
        ]);
    }

    public function target()
    {
        $student = Auth::guard('student')->user();

        return response()->json([
            'code' => config('constant.status_code.code_200'),
            'data' => [
                'target' => $student->target,
            ],
        ]);
    }
}

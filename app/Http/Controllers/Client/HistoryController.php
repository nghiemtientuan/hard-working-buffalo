<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Services\TestService;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\HistoryRepositoryInterface as HistoryRepository;
use App\Repositories\Contracts\CategoryRepositoryInterface as CategoryRepository;
use Illuminate\Support\Facades\Auth;

class HistoryController extends Controller
{
    protected $testService;
    protected $historyRepository;
    protected $categoryRepository;

    /**
     * HistoryController constructor.
     * @param TestService $testService
     * @param HistoryRepository $historyRepository
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(
        TestService $testService,
        HistoryRepository $historyRepository,
        CategoryRepository $categoryRepository
    ) {
        $this->testService = $testService;
        $this->historyRepository = $historyRepository;
        $this->categoryRepository = $categoryRepository;
    }

    public function index(Request $request)
    {
        $filter = $request->only([
            'test',
            'score',
            'from_date',
            'to_date',
            'student_name',
        ]);
        $studentId = null;
        if (Auth::guard('student')->check()) {
            $studentId = Auth::guard('student')->user()->id;
        }

        $histories = $this->historyRepository->getHistories($filter, $studentId);
        $cateTests = $this->categoryRepository->getAllChildCateTest();

        return view('Client.histories', compact('histories', 'filter', 'cateTests'));
    }

    public function show($historyId)
    {
        $history = $this->historyRepository->find($historyId)->load('test');
        $history->rank = $this->historyRepository->getRankHistory($history);
        $parts = $this->testService->getHistory($history, $history->random_seed);

        return view('Client.result', compact('history', 'parts'));
    }
}

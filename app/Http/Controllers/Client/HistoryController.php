<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Services\TestService;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\HistoryRepositoryInterface as HistoryRepository;

class HistoryController extends Controller
{
    protected $testService;
    protected $historyRepository;

    /**
     * HistoryController constructor.
     * @param TestService $testService
     * @param HistoryRepository $historyRepository
     */
    public function __construct(
        TestService $testService,
        HistoryRepository $historyRepository
    ) {
        $this->testService = $testService;
        $this->historyRepository = $historyRepository;
    }

    public function index()
    {

    }

    public function show($historyId)
    {
        $history = $this->historyRepository->find($historyId)->load('test');
        if ($history) {
            $parts = $this->testService->getHistory($history);

            return view('Client.result', compact('history', 'parts'));
        }

        return redirect()->route('client.notFound');
    }
}

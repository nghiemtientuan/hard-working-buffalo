<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Services\TestService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
    protected $testRepository;
    protected $testService;

    /**
     * TestController constructor.
     * @param TestRepository $testRepository
     * @param TestService $testService
     */
    public function __construct(
        TestRepository $testRepository,
        TestService $testService
    ) {
        $this->testRepository = $testRepository;
        $this->testService = $testService;
    }

    public function test($testId)
    {
        $test = $this->testRepository->find($testId);
        if ($test) {
            $parts = $this->testService->getAnswerQuestionPartInTest($testId);

            return view('Client.getTest', compact('test', 'parts'));
        }

        return redirect()->route('client.notFound');
    }

    public function result(Request $request, $testId)
    {
        $test = $this->testRepository->find($testId);
        if ($test) {
            $studentId = null;
            if (Auth::guard('student')->check()) {
                $studentId = Auth::guard('student')->user()->id;
            }
            $historyId = $this->testService->getResultTestAnswer($studentId, $testId, $request);

            return redirect()->route('client.histories.show', $historyId);
        }

        return redirect()->route('client.notFound');
    }
}

<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use App\Services\TestService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class TestController extends Controller
{
    protected $testRepository;
    protected $testService;
    protected $questionRepository;

    /**
     * TestController constructor.
     * @param TestRepository $testRepository
     * @param TestService $testService
     * @param QuestionRepository $questionRepository
     */
    public function __construct(
        TestRepository $testRepository,
        TestService $testService,
        QuestionRepository $questionRepository
    ) {
        $this->testRepository = $testRepository;
        $this->testService = $testService;
        $this->questionRepository = $questionRepository;
    }

    public function test($testId)
    {
        $test = $this->testRepository->find($testId);
        if ($test) {
            $parts = $this->testService->getAnswerQuestionPartInTest($testId);

            if (Auth::check()) {
                return view('Client.getResultTest', compact('test', 'parts'));
            } else {
                return view('Client.getTest', compact('test', 'parts'));
            }
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
            $historyId = $this->testService->getResultTestAnswer($studentId, $test, $request);

            return redirect()->route('client.histories.show', $historyId);
        }

        return redirect()->route('client.notFound');
    }

    public function getComments($questionId)
    {
        $comments = $this->questionRepository->getComments($questionId);

        return response()->json([
            'code' => config('constant.status_code.code_200'),
            'data' => $comments,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Services\TestService;
use App\Http\Controllers\Controller;

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
            dd($parts);

            return view('Client.test', compact('parts'));
        }

        return redirect()->route('client.notFound');
    }
}

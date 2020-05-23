<?php

namespace App\Http\Controllers\Client;

use App\Models\Student;
use App\Models\StudentTest;
use Illuminate\Http\Request;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use App\Repositories\Contracts\StudentRepositoryInterface as StudentRepository;
use App\Services\TestService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Exception;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
    protected $testRepository;
    protected $testService;
    protected $questionRepository;
    protected $studentRepository;

    /**
     * TestController constructor.
     * @param TestRepository $testRepository
     * @param TestService $testService
     * @param QuestionRepository $questionRepository
     * @param StudentRepository $studentRepository
     */
    public function __construct(
        TestRepository $testRepository,
        TestService $testService,
        QuestionRepository $questionRepository,
        StudentRepository $studentRepository
    ) {
        $this->testRepository = $testRepository;
        $this->testService = $testService;
        $this->questionRepository = $questionRepository;
        $this->studentRepository = $studentRepository;
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

    public function buy(Request $request)
    {
        $testId = $request->testId;
        $test = $this->testRepository->find($testId);
        if ($test) {
            $student = Auth::guard('student')->user();
            $studentTest = StudentTest::where(StudentTest::TEST_ID_FIELD, $testId)
                ->where(StudentTest::STUDENT_ID_FIELD, $student->id)->first();
            if ($studentTest) {
                return response()->json([
                    'code' => config('constant.status_code.code_402'),
                    'message' => trans('client.errors.buyTested'),
                ]);
            }

            if ($student->coin >= $test->price) {
                $studentTestData = [
                    StudentTest::STUDENT_ID_FIELD => $student->id,
                    StudentTest::TEST_ID_FIELD => $test->id,
                ];

                DB::beginTransaction();
                try {
                    StudentTest::create($studentTestData);
                    $this->studentRepository->update(
                        $student->id,
                        [
                            Student::COIN_FIELD => ($student->coin - $test->price)
                        ]
                    );

                    DB::commit();

                    return response()->json([
                        'code' => config('constant.status_code.code_200'),
                        'data' => [
                            'user' => $this->studentRepository->find($student->id),
                            'test' => $test,
                        ],
                        'message' => trans('client.success.buy_success'),
                    ]);
                } catch (Exception $exception) {
                    DB::rollBack();

                    return response()->json([
                        'code' => config('constant.status_code.code_400'),
                        'message' => trans('client.errors.serverError'),
                    ]);
                }
            } else {
                return response()->json([
                    'code' => config('constant.status_code.code_401'),
                    'message' => trans('client.errors.testsInCate.notEnoughCoins'),
                ]);
            }
        }

        return response()->json([
            'code' => config('constant.status_code.code_404'),
            'message' => trans('client.errors.testsInCate.testNotFound'),
        ]);
    }
}

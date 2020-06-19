<?php

namespace App\Http\Middleware\Client;

use App\Models\StudentTest;
use Closure;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use Illuminate\Support\Facades\Auth;

class CheckStudentBuyTest
{
    protected $testRepository;

    /**
     * CheckStudentBuyTest constructor.
     * @param $testRepository
     */
    public function __construct(TestRepository $testRepository)
    {
        $this->testRepository = $testRepository;
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
        $test = $this->testRepository->find($request->testId);
        if ($test) {
            if (Auth::check()) {
                return $next($request);
            }

            $student = Auth::guard('student')->user();
            $studentTest = StudentTest::where(StudentTest::TEST_ID_FIELD, $test->id)
                ->where(StudentTest::STUDENT_ID_FIELD, $student->id)
                ->first();

            if ($studentTest) {
                return $next($request);
            }
        }

        return redirect()->route('client.notFound');
        return $next($request);
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Models\Test;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use App\Services\QuestionService;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;

class TestController extends Controller
{
    protected $testRepository;
    protected $questionRepository;
    protected $questionService;

    /**
     * TestController constructor.
     * @param TestRepository $testRepository
     * @param QuestionRepository $questionRepository
     * @param QuestionService $questionService
     */
    public function __construct(
        TestRepository $testRepository,
        QuestionRepository $questionRepository,
        QuestionService $questionService
    ) {
        $this->testRepository = $testRepository;
        $this->questionRepository = $questionRepository;
        $this->questionService = $questionService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Admin.test.index');
    }

    public function getData()
    {
        $tests = $this->testRepository->getAll();

        return Datatables::of($tests)
            ->editColumn('publish', function ($test) {
                return $test->publish ? trans('backend.pages.show'): trans('backend.pages.hide');
            })
            ->addColumn('action', function ($test) {
                return view('Admin.test.actionListTest', compact('test'));
            })
            ->rawColumns(['action'])
            ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only([
            'code',
            'name',
            'execute_time',
            'price',
            'score',
            'total_question',
            'type',
            'guide',
        ]);
        $data[Test::PUBLISH_FIELD] = $request->has('publish');
        $data[Test::CREATED_USER_ID_FIELD] = auth()->user()->id;
        $test = $this->testRepository->create($data);

        return redirect()->route('admin.tests.questions.index', $test->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->only([
            'name',
            'execute_time',
            'price',
            'score',
            'total_question',
            'type',
            'guide',
        ]);
        $data[Test::PUBLISH_FIELD] = $request->has('publish');
        $test = $this->testRepository->find($id);
        if ($test) {
            DB::beginTransaction();
            try {
                $this->testRepository->update($id, $data);
                DB::commit();

                return redirect()->route('admin.tests.index')
                    ->with('success', trans('backend.actions.success'));
            } catch (\Exception $exception) {
                DB::rollBack();

                return redirect()->back()->with('error', $exception->getMessage());
            }
        }

        return redirect()->route('admin.tests.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $test = $this->testRepository->find($id);
        if ($test && $this->testRepository->delete($id)) {
            return redirect()->route('admin.tests.index')
                ->with('success', trans('backend.actions.success'));
        }

        return redirect()->route('admin.tests.index');
    }

    public function getQuestions($testId)
    {
        $test = $this->testRepository->find($testId);
        $parts = $this->questionRepository->getQuestionsByFormatTestId($testId);

        return view('Admin.test.questions', compact('test', 'parts'));
    }

    public function getImport($testId)
    {
        $test = $this->testRepository->find($testId)->load('parts');
        if ($test) {
            return view('Admin.test.importQuestions', compact('test'));
        }

        return redirect()->route('admin.notFound');
    }

    public function postImport(Request $request, $testId)
    {
        $test = $this->testRepository->find($testId)->load('parts');
        if ($test) {
            DB::beginTransaction();
            try {
                if ($request->questions) {
                    foreach ($request->questions as $question) {
                        $this->questionService->addSingleQuestionImport($test, $question);
                    }
                }

                DB::commit();

                return redirect()->route('admin.tests.questions.index', $test->id)
                    ->with('success', trans('backend.actions.success'));
            } catch (\Exception $exception) {
                DB::rollBack();

                return redirect()->back()->withErrors($exception->getMessage());
            }
        }

        return redirect()->route('admin.notFound');
    }
}

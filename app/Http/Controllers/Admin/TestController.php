<?php

namespace App\Http\Controllers\Admin;

use App\Models\Test;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Repositories\Contracts\FormatRepositoryInterface as FormatRepository;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;

class TestController extends Controller
{
    protected $testRepository;
    protected $questionRepository;
    protected $formatRepository;

    /**
     * TestController constructor.
     * @param TestRepository $testRepository
     * @param QuestionRepository $questionRepository
     * @param FormatRepository $formatRepository
     */
    public function __construct(
        TestRepository $testRepository,
        QuestionRepository $questionRepository,
        FormatRepository $formatRepository
    ) {
        $this->testRepository = $testRepository;
        $this->questionRepository = $questionRepository;
        $this->formatRepository = $formatRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $formats = $this->formatRepository->getAll();

        return view('Admin.test.index', compact('formats'));
    }

    public function getData()
    {
        $tests = $this->testRepository->getAll();

        return Datatables::of($tests)
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
            'level',
            'total_question',
            'type',
            'guide',
            'format_id',
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
            'level',
            'total_question',
            'type',
            'guide',
            'format_id',
        ]);
        $data[Test::PUBLISH_FIELD] = $request->has('publish');
        $test = $this->testRepository->find($id);
        if ($test) {
            DB::beginTransaction();
            try {
                $this->testRepository->update($id, $data);
                DB::commit();

                return redirect()->route('admin.tests.index')
                    ->with('sucess', trans('backend.actions.success'));
            } catch (\Exception $exception) {
                DB::rollBack();

                return redirect()->route('admin.tests.index')->with('error', $exception->getMessage());
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
                ->with('sucess', trans('backend.actions.success'));
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
        $test = $this->testRepository->find($testId);
        if ($test) {
            return view('Admin.test.importQuestions', compact('test'));
        }

        return redirect()->route('admin.notFound');
    }

    public function portImport(Request $request, $testId)
    {

    }
}

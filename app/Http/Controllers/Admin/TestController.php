<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;

class TestController extends Controller
{
    protected $testRepository;
    protected $questionRepository;

    /**
     * TestController constructor.
     * @param TestRepository $testRepository
     * @param QuestionRepository $questionRepository
     */
    public function __construct(
        TestRepository $testRepository,
        QuestionRepository $questionRepository
    ) {
        $this->testRepository = $testRepository;
        $this->questionRepository = $questionRepository;
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
        //
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
            'total_question',
            'price',
            'score',
            'level',
            'publish',
            'guide',
        ]);
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

    public function getQuestions($test_id)
    {
        $test = $this->testRepository->find($test_id);
        $parts = $this->questionRepository->getQuestionsByFormatTestId($test_id);

        return view('Admin.test.questions', compact('test', 'parts'));
    }
}

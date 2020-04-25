<?php

namespace App\Http\Controllers\Admin;

use App\Models\File;
use App\Models\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use App\Repositories\Contracts\PartRepositoryInterface as PartRepository;
use App\Services\QuestionService;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;

class QuestionController extends Controller
{
    protected $testRepository;
    protected $questionRepository;
    protected $partRepository;
    protected $questionService;

    /**
     * TestController constructor.
     * @param TestRepository $testRepository
     * @param QuestionRepository $questionRepository
     * @param PartRepository $partRepository
     * @param QuestionService $questionService
     */
    public function __construct(
        TestRepository $testRepository,
        QuestionRepository $questionRepository,
        PartRepository $partRepository,
        QuestionService $questionService
    ) {
        $this->testRepository = $testRepository;
        $this->questionRepository = $questionRepository;
        $this->partRepository = $partRepository;
        $this->questionService = $questionService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Admin.question.index');
    }

    public function getData()
    {
        $questions = $this->questionRepository->getAll();

        return Datatables::of($questions)
            ->editColumn('content', function ($question) {
                $content = $question->content;
                switch ($question->type) {
                    case Question::IMAGE_TYPE:
                        $content .= '<img class="question-image-list" src="' . $question->file->base_folder . '">';
                        break;
                    case Question::AUDIO_ONE_TYPE:
                    case Question::AUDIO_MANY_TYPE:
                        $content .= '<audio src="' . $question->file->base_folder . '">';
                        break;
                    default: break;
                }

                return $content;
            })
            ->addColumn('test', function ($question) {
                return $question->test ? $question->test->name : '';
            })
            ->addColumn('part', function ($question) {
                return $question->part ? $question->part->name : '';
            })
            ->addColumn('action', function ($question) {
                return view('Admin.question.actionQuestion', compact('question'));
            })
            ->rawColumns(['content', 'action'])
            ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($test_id)
    {
        $parts = $this->partRepository->getAll();
        $test = $this->testRepository->find($test_id);

        return view('Admin.question.addQuestion', compact('test', 'parts'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $test_id)
    {
        $questionSingleData = $request->only([
            'code',
            'suggest',
            'content',
            'part_id',
            'type',
            'answers',
            'correct_answer',
            'image',
            'audio',
        ]);
        $singleQuestion = $this->questionService->addSingleQuestion(
            $questionSingleData,
            $test_id,
            $request->has('bigQuestionKind')
        );

        if ($request->has('bigQuestionKind')) {
            foreach ($request->childQuestionAdd as $childQuestion) {
                $childQuestion[Question::PARENT_ID_FIELD] = $singleQuestion->id;
                $this->questionService->addSingleQuestion($childQuestion, $test_id);
            }
        }

        return redirect()->route('admin.tests.questions.index', $test_id)
            ->with('success', trans('backend.actions.success'));
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
        $parts = $this->partRepository->getAll();
        $question = $this->questionRepository->getQuestion($id);

        return view('Admin.question.editQuestion', compact('question', 'parts'));
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
        $questionSingleData = $request->only([
            'suggest',
            'content',
            'part_id',
            'type',
            'answers',
            'correct_answer',
            'image',
            'audio',
        ]);
        $singleQuestion = $this->questionService->updateSingleQuestion(
            $id,
            $questionSingleData,
            $request->has('bigQuestionKind')
        );

        if ($request->has('childQuestion')) {
            foreach ($request->childQuestion as $childQuestion) {
                $this->questionService->updateSingleQuestion(
                    $childQuestion['id'],
                    $childQuestion
                );
            }
        }

        if ($request->has('bigQuestionKind') && $request->childQuestionAdd && count($request->childQuestionAdd)) {
            foreach ($request->childQuestionAdd as $childQuestion) {
                $childQuestion[Question::PARENT_ID_FIELD] = $singleQuestion->id;
                $this->questionService->addSingleQuestion($childQuestion, $singleQuestion->test->id);
            }
        }

        if ($request->has('childQuestionDelete')) {
            foreach ($request->childQuestionDelete as $deleteId) {
                $this->questionService->deleteQuestion($deleteId);
            }
        }

        return redirect()->route('admin.tests.questions.index', $singleQuestion->test->id)
            ->with('success', trans('backend.actions.success'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $question = $this->questionRepository->find($id);
        if ($question) {
            $this->questionService->deleteQuestion($id);
            return redirect()->back()->with('success', trans('backend.actions.success'));
        }

        return redirect()->back();
    }
}

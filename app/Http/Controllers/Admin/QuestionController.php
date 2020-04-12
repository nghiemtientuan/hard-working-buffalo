<?php

namespace App\Http\Controllers\Admin;

use App\Models\Question;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;

class QuestionController extends Controller
{
    protected $questionRepository;

    /**
     * QuestionController constructor.
     * @param $questionRepository
     */
    public function __construct(QuestionRepository $questionRepository)
    {
        $this->questionRepository = $questionRepository;
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
        //
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
        if ($question && $this->questionRepository->delete($id)) {
            return redirect()->route('admin.questions.index')
                ->with('sucess', trans('backend.actions.success'));
        }

        return redirect()->route('admin.questions.index');
    }
}

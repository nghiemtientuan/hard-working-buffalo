<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\CommentQuestionRepositoryInterface as CommentQuestionRepository;
use Yajra\Datatables\Datatables;

class QuestionCommentController extends Controller
{
    protected $commentQuestionRepository;

    /**
     * QuestionComment constructor.
     * @param $commentQuestionRepository
     */
    public function __construct(CommentQuestionRepository $commentQuestionRepository)
    {
        $this->commentQuestionRepository = $commentQuestionRepository;
    }

    public function getData()
    {
        $comments = $this->commentQuestionRepository->getAll();

        return Datatables::of($comments)
            ->addColumn('username', function ($comment) {
                return $comment->user->username;
            })
            ->addColumn('question_code', function ($comment) {
                return $comment->question->code;
            })
            ->addColumn('created_at', function ($comment) {
                return getDateFormat($comment->created_at, config('constant.format.hmdmY'));
            })
            ->addColumn('action', function ($comment) {
                return view('Admin.question.actionComment', compact('comment'));
            })
            ->rawColumns(['action'])
            ->make(true);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Admin.question.comments');
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
        $comment = $this->commentQuestionRepository->find($id);
        if ($comment && $this->commentQuestionRepository->delete($id)) {
            return redirect()->route('admin.questions.comments.index')
                ->with('sucess', trans('backend.actions.success'));
        }

        return redirect()->route('admin.questions.comments.index');
    }
}

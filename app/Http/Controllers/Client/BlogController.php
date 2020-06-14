<?php

namespace App\Http\Controllers\Client;

use App\Models\BlogComment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\BlogRepositoryInterface as BlogRepository;
use App\Repositories\Contracts\BlogCommentRepositoryInterface as BlogCommentRepository;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    protected $blogRepository;
    protected $blogCommentRepository;

    /**
     * BlogController constructor.
     * @param BlogRepository $blogRepository
     * @param BlogCommentRepository $blogCommentRepository
     */
    public function __construct(
        BlogRepository $blogRepository,
        BlogCommentRepository $blogCommentRepository
    ) {
        $this->blogRepository = $blogRepository;
        $this->blogCommentRepository = $blogCommentRepository;
    }

    public function index()
    {
        $blogs = $this->blogRepository->getBlogsPaginate();

        return view('Client.blogs.index', compact('blogs'));
    }

    public function dataBlog()
    {
        $blogs = $this->blogRepository->getBlogsPaginate();

        return response()->json([
            'code' => config('constant.status_code.code_200'),
            'data' => [
                'blogs' => $blogs,
            ],
        ]);
    }

    public function dataComments($blogId)
    {
        $comments = $this->blogCommentRepository->getCommentPaginate($blogId);

        return response()->json([
            'code' => config('constant.status_code.code_200'),
            'data' => [
                'comments' => $comments,
            ],
        ]);
    }

    public function addComment(Request $request, $blogId)
    {
        if (Auth::check()) {
            $user = Auth::user();
            $user_type = BlogComment::TYPE_USER;
        } elseif (Auth::guard('student')->check()) {
            $user = Auth::guard('student')->user();
            $user_type = BlogComment::TYPE_STUDENT;
        } else {
            return response()->json([
                'code' => config('constant.status_code.code_400'),
                'data' => [],
                'message' => trans('client.errors.reaction.not_login'),
            ]);
        }

        $dataComment = [
            BlogComment::USER_ID_FIELD => $user->id,
            BlogComment::USER_TYPE_FIELD => $user_type,
            BlogComment::BLOG_ID_FIELD => $blogId,
            BlogComment::CONTENT_FIELD => $request->input('content'),
        ];

        $newComment = $this->blogCommentRepository->create($dataComment);
        $newComment->load([
            'user',
            'user.file',
        ]);

        return response()->json([
            'code' => config('constant.status_code.code_200'),
            'data' => [
                'newComment' => $newComment,
            ],
        ]);
    }
}

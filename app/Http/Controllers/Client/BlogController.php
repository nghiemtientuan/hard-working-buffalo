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
                'currentUser' => getCurrentUser(),
            ],
        ]);
    }

    public function addComment(Request $request, $blogId)
    {
        $user = getCurrentUser();
        if ($user) {
            $dataComment = [
                BlogComment::USER_ID_FIELD => $user->id,
                BlogComment::USER_TYPE_FIELD => $user->type,
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

        return response()->json([
            'code' => config('constant.status_code.code_400'),
            'data' => [],
            'message' => trans('client.errors.reaction.not_login'),
        ]);
    }

    public function deleteComment($commentId)
    {
        $comment = $this->blogCommentRepository->find($commentId);
        if ($comment) {
            $user = getCurrentUser();
            if ($user) {
                if ($comment->user_id == $user->id && $comment->user_type == $user->type) {
                    $this->blogCommentRepository->delete($commentId);

                    return response()->json([
                        'code' => config('constant.status_code.code_200'),
                        'data' => [
                            'check' => true,
                        ],
                    ]);
                }
            } else {
                return response()->json([
                    'code' => config('constant.status_code.code_400'),
                    'data' => [],
                    'message' => trans('client.errors.reaction.not_login'),
                ]);
            }
        }

        return response()->json([
            'code' => config('constant.status_code.code_400'),
            'data' => [],
            'message' => trans('client.errors.action_false'),
        ]);
    }
}

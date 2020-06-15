<?php

namespace App\Http\Controllers\Client;

use App\Models\Blog;
use App\Models\BlogComment;
use App\Models\ReactBlog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\BlogRepositoryInterface as BlogRepository;
use App\Repositories\Contracts\BlogCommentRepositoryInterface as BlogCommentRepository;
use App\Repositories\Contracts\ReactBlogRepositoryInterface as ReactBlogRepository;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    protected $blogRepository;
    protected $blogCommentRepository;
    protected $reactBlogRepository;

    /**
     * BlogController constructor.
     * @param BlogRepository $blogRepository
     * @param BlogCommentRepository $blogCommentRepository
     * @param ReactBlogRepository $reactBlogRepository
     */
    public function __construct(
        BlogRepository $blogRepository,
        BlogCommentRepository $blogCommentRepository,
        ReactBlogRepository $reactBlogRepository
    ) {
        $this->blogRepository = $blogRepository;
        $this->blogCommentRepository = $blogCommentRepository;
        $this->reactBlogRepository = $reactBlogRepository;
    }

    public function index()
    {
        $blogs = $this->blogRepository->getBlogsPaginate();
        $user = getCurrentUser();

        return view('Client.blogs.index', compact('blogs', 'user'));
    }

    public function store(Request $request)
    {
        $user = getCurrentUser();
        if ($user) {
            $dataBlog = [
                Blog::USER_ID_FIELD => $user->id,
                Blog::USER_TYPE_FIELD => $user->type,
                Blog::CONTENT_FIELD => $request->input('content'),
            ];

            $blog = $this->blogRepository->create($dataBlog)->load([
                'comments',
                'comments.user',
                'comments.user.file',
                'selectedReact',
                'reacts',
                'user',
                'user.file',
            ]);

            return response()->json([
                'code' => config('constant.status_code.code_200'),
                'data' => [
                    'blog' => $blog,
                    'currentUser' => getCurrentUser(),
                ],
            ]);
        }
    }

    public function show($blogId)
    {
        $blog = $this->blogRepository->find($blogId);

        if ($blog) {
            $user = getCurrentUser();

            return view('Client.blogs.blogItem', compact('blog', 'user'));
        }

        return redirect()->route('client.notFound');
    }

    public function destroy($blogId)
    {
        $blog = $this->blogRepository->find($blogId);

        if ($blog) {
            $user = getCurrentUser();
            if ($user && $blog->user_id == $user->id && $blog->user_type == $user->type) {
                $this->blogRepository->delete($blogId);

                return response()->json([
                    'code' => config('constant.status_code.code_200'),
                    'data' => [
                        'check' => true,
                    ],
                    'message' => trans('client.success.action_success'),
                ]);
            }
        }

        return response()->json([
            'code' => config('constant.status_code.code_400'),
            'message' => trans('client.errors.action_false'),
        ]);
    }

    public function dataBlog()
    {
        $blogs = $this->blogRepository->getBlogsPaginate();

        return response()->json([
            'code' => config('constant.status_code.code_200'),
            'data' => [
                'blogs' => $blogs,
                'currentUser' => getCurrentUser(),
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

    public function reaction(Request $request, $blogId)
    {
        if (
            $request->reactionId
            && $request->reactionId > 0
            && $request->reactionId < 5
            && $blogId
            && $this->blogRepository->find($blogId)
        ) {
            $data = [
                ReactBlog::REACT_ID_FIELD => $request->reactionId,
                ReactBlog::BLOG_ID_FIELD => $blogId,
            ];
            $user = getCurrentUser();
            if ($user) {
                $data[ReactBlog::USER_ID_FIELD] = $user->id;
                $data[ReactBlog::USER_TYPE_FIELD] = $user->type;

                $this->reactBlogRepository->updateOrCreate($data);
                $dataResponse = $this->reactBlogRepository->getRankingByType($blogId);

                return response()->json([
                    'code' => config('constant.status_code.code_200'),
                    'data' => [
                        'reacts' => $dataResponse,
                        'clickedReactUrl' => config('constant.reacts')[$request->reactionId],
                    ],
                    'message' => trans('client.success.action_success'),
                ]);
            }

            return response()->json([
                'code' => config('constant.status_code.code_400'),
                'data' => [],
                'message' => trans('client.errors.reaction.not_login'),
            ]);
        } else {
            return response()->json([
                'code' => config('constant.status_code.code_401'),
                'data' => [],
                'message' => trans('client.errors.reaction.wrong_format'),
            ]);
        }
    }
}

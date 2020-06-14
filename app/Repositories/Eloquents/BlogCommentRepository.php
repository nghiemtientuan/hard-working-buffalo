<?php

namespace App\Repositories\Eloquents;

use App\Models\BlogComment;
use App\Repositories\Contracts\BlogCommentRepositoryInterface;

class BlogCommentRepository extends EloquentRepository implements BlogCommentRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return BlogComment::class;
    }

    public function getCommentPaginate($blogId)
    {
        return $this->_model->where(BlogComment::BLOG_ID_FIELD, $blogId)
            ->paginate(config('constant.limit.comments'));
    }
}

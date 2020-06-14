<?php

namespace App\Repositories\Eloquents;

use App\Models\Blog;
use App\Repositories\Contracts\BlogRepositoryInterface;

class BlogRepository extends EloquentRepository implements BlogRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Blog::class;
    }

    public function getBlogsPaginate()
    {
        return $this->_model->orderBy('created_at', 'DESC')
            ->paginate(config('constant.limit.blog'));
    }
}

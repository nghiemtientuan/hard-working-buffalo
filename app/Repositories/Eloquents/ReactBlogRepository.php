<?php

namespace App\Repositories\Eloquents;

use App\Models\ReactBlog;
use App\Repositories\Contracts\ReactBlogRepositoryInterface;
use Illuminate\Support\Facades\DB;

class ReactBlogRepository extends EloquentRepository implements ReactBlogRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return ReactBlog::class;
    }

    public function updateOrCreate($data)
    {
        $this->_model->updateOrCreate([
            ReactBlog::USER_ID_FIELD => $data[ReactBlog::USER_ID_FIELD],
            ReactBlog::USER_TYPE_FIELD => $data[ReactBlog::USER_TYPE_FIELD],
            ReactBlog::BLOG_ID_FIELD => $data[ReactBlog::BLOG_ID_FIELD],
        ], $data);
    }

    public function getRankingByType($blogId)
    {
        return $this->_model->where(ReactBlog::BLOG_ID_FIELD, $blogId)
            ->groupBy(ReactBlog::REACT_ID_FIELD)
            ->orderBy(ReactBlog::REACT_ID_FIELD)
            ->select(DB::raw('COUNT(react_id) AS count, react_id'))->get();
    }
}

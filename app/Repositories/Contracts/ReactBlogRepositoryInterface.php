<?php

namespace App\Repositories\Contracts;

interface ReactBlogRepositoryInterface
{
    public function updateOrCreate($data);

    public function getRankingByType($blogId);
}

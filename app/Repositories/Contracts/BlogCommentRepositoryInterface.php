<?php

namespace App\Repositories\Contracts;

interface BlogCommentRepositoryInterface
{
    public function getCommentPaginate($blogId);
}

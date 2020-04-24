<?php

namespace App\Repositories\Eloquents;

use App\Models\QuestionComment;
use App\Repositories\Contracts\CommentQuestionRepositoryInterface;

class CommentQuestionRepository extends EloquentRepository implements CommentQuestionRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return QuestionComment::class;
    }

}

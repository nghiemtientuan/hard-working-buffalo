<?php

namespace App\Repositories\Eloquents;

use App\Models\Question;
use App\Repositories\Contracts\QuestionRepositoryInterface;

class QuestionRepository extends EloquentRepository implements QuestionRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Question::class;
    }

}

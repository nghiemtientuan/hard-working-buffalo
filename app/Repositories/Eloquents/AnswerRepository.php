<?php

namespace App\Repositories\Eloquents;

use App\Models\Answer;
use App\Repositories\Contracts\AnswerRepositoryInterface;

class AnswerRepository extends EloquentRepository implements AnswerRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Answer::class;
    }

}

<?php

namespace App\Repositories\Eloquents;

use App\Models\QuestionInPart;
use App\Repositories\Contracts\QuestionInPartRepositoryInterface;

class QuestionInPartRepository extends EloquentRepository implements QuestionInPartRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return QuestionInPart::class;
    }

}

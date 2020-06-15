<?php

namespace App\Repositories\Eloquents;

use App\Models\EvaluationHistory;
use App\Repositories\Contracts\EvaluationHistoryRepositoryInterface;

class EvaluationHistoryRepository extends EloquentRepository implements EvaluationHistoryRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return EvaluationHistory::class;
    }

}

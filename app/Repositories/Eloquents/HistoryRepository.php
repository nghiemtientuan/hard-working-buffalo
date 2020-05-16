<?php

namespace App\Repositories\Eloquents;

use App\Models\History;
use App\Repositories\Contracts\HistoryRepositoryInterface;

class HistoryRepository extends EloquentRepository implements HistoryRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return History::class;
    }

}

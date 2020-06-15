<?php

namespace App\Repositories\Eloquents;

use App\Models\ReactHistory;
use App\Repositories\Contracts\ReactHistoryRepositoryInterface;
use Illuminate\Support\Facades\DB;

class ReactHistoryRepository extends EloquentRepository implements ReactHistoryRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return ReactHistory::class;
    }

    public function updateOrCreate($data)
    {
        $this->_model->updateOrCreate([
            ReactHistory::USER_ID_FIELD => $data[ReactHistory::USER_ID_FIELD],
            ReactHistory::TYPE_FIELD => $data[ReactHistory::TYPE_FIELD],
            ReactHistory::HISTORY_ID_FIELD => $data[ReactHistory::HISTORY_ID_FIELD],
        ], $data);
    }

    public function getRankingByType($historyId)
    {
        return $this->_model->where(ReactHistory::HISTORY_ID_FIELD, $historyId)
            ->groupBy(ReactHistory::REACT_ID_FIELD)
            ->orderBy(ReactHistory::REACT_ID_FIELD)
            ->select(DB::raw('COUNT(react_id) AS count, react_id'))->get();
    }
}

<?php

namespace App\Repositories\Contracts;

interface ReactHistoryRepositoryInterface
{
    public function updateOrCreate($data);

    public function getRankingByType($historyId);
}

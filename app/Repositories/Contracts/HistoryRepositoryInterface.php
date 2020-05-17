<?php

namespace App\Repositories\Contracts;

interface HistoryRepositoryInterface
{
    public function getHistories($studentId, $filter);
}

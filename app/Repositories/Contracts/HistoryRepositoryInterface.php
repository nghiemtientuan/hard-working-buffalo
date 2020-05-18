<?php

namespace App\Repositories\Contracts;

interface HistoryRepositoryInterface
{
    public function getHistories($filter, $studentId);
}

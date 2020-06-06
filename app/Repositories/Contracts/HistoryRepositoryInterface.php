<?php

namespace App\Repositories\Contracts;

interface HistoryRepositoryInterface
{
    public function getHistories($filter, $studentId);

    public function getRanking($filter);

    public function getUsedTest($studentId);

    public function getStatisticTestByStudentId($studentId, $testId = null);

    public function getStudentTested($testId);

    public function getHistoriesByTestUser($testId, $studentId);
}

<?php

namespace App\Repositories\Eloquents;

use App\Models\History;
use App\Models\Student;
use App\Models\Test;
use App\Repositories\Contracts\HistoryRepositoryInterface;
use Illuminate\Support\Facades\DB;

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

    public function getHistories($filter, $studentId = null)
    {
        $query = $this->_model->orderBy('created_at', 'DESC');

        if ($studentId) {
            $query->where(History::STUDENT_ID_FIELD, $studentId);
        } else {
            $keyword = array_key_exists('student_name', $filter) ? $filter['student_name'] : '';
            $studentsSearchIds = Student::search($keyword)->pluck('id')->toArray();

            $query->whereIn(History::STUDENT_ID_FIELD, $studentsSearchIds);
        }

        if (array_key_exists('test', $filter) && $filter['test']) {
            $query->with('test')->whereHas('test', function ($qr) use ($filter) {
                $qr->where('id', $filter['test']);
            });
        }

        if (array_key_exists('score', $filter) && $filter['score']) {
            $query->where(History::SCORE_FIELD, '>=', $filter['score']);
        }

        if (array_key_exists('from_date', $filter) && $filter['from_date']) {
            $query->where('created_at', '>=', $filter['from_date']);
        }

        if (array_key_exists('to_date', $filter) && $filter['to_date']) {
            $query->where('created_at', '<=', $filter['to_date']);
        }

        return $query->orderBy('created_at', 'DESC')
            ->paginate(config('constant.limit.histories'));
    }

    public function getRanking($filter)
    {
        $query = $this->_model->whereMonth('created_at', now()->month);

        if (array_key_exists('test', $filter) && $filter['test']) {
            $query->where(History::TEST_ID_FIELD, $filter['test']);
        }

        $query->selectRaw('MAX(score) as maxSore, student_id, test_id')
            ->groupBy(['student_id', 'test_id']);

        return $this->_model->with([
            'student',
            'student.file',
            'test',
            'reacts',
        ])->join(DB::raw("({$query->toSql()}) AS sub"), function ($join) use ($query) {
            $join->on('histories.score', '=', 'sub.maxSore')
                ->on('histories.test_id', '=', 'sub.test_id')
                ->on('histories.student_id', '=', 'sub.student_id')
                ->addBinding($query->getBindings());
        })->orderBy('score', 'DESC')
            ->orderBy('duration')
            ->paginate(config('constant.limit.ranking'));
    }

    public function getUsedTest($studentId)
    {
        return Test::with('histories')
            ->whereHas('histories', function ($query) use ($studentId) {
                $query->where(History::STUDENT_ID_FIELD, $studentId);
            })->has('histories')
            ->get();
    }

    public function getStatisticTestByStudentId($studentId, $testId = null)
    {
        $query = $this->_model->with('test')
            ->where(History::STUDENT_ID_FIELD, $studentId);
        if ($testId) {
            $query->where(History::TEST_ID_FIELD, $testId);
        }

        $statistic = $query->orderBy('created_at', 'DESC')
            ->limit(config('constant.limit.testInStatistic'))
            ->get();

        return collect($statistic)->sortBy('created_at')->values();
    }

    public function getStudentTested($testId)
    {
        return Student::with('histories')
            ->whereHas('histories', function ($query) use ($testId) {
                $query->where(History::TEST_ID_FIELD, $testId);
            })->get();
    }

    public function getHistoriesByTestUser($testId, $studentId)
    {
        return $this->_model->where(History::TEST_ID_FIELD, $testId)
            ->where(History::STUDENT_ID_FIELD, $studentId)
            ->get();
    }
}

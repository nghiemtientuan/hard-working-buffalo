<?php

namespace App\Repositories\Eloquents;

use App\Models\History;
use App\Models\Student;
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
            $query->where('score', '>=', $filter['score']);
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
}

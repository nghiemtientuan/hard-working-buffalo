<?php

namespace App\Repositories\Eloquents;

use App\Models\History;
use App\Models\Student;
use App\Repositories\Contracts\StudentRepositoryInterface;

class StudentRepository extends EloquentRepository implements StudentRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Student::class;
    }

    public function getProfileTimeline($studentId)
    {
        return History::where(History::STUDENT_ID_FIELD, $studentId)
            ->with([
                'test',
            ])
            ->orderBy('created_at', 'DESC')
            ->paginate(config('constant.limit.timelineProfile'));
    }

}

<?php

namespace App\Repositories\Eloquents;

use App\Models\Student;
use App\Repositories\Contracts\StudentRepositoryInterface;
use App\Models\Category;

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

}

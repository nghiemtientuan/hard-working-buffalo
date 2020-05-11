<?php

namespace App\Repositories\Eloquents;

use App\Models\StudentType;
use App\Repositories\Contracts\StudentTypeRepositoryInterface;

class StudentTypeRepository extends EloquentRepository implements StudentTypeRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return StudentType::class;
    }

}

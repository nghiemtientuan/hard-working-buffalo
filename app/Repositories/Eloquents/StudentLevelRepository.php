<?php

namespace App\Repositories\Eloquents;

use App\Models\StudentLevel;
use App\Repositories\Contracts\StudentLevelRepositoryInterface;

class StudentLevelRepository extends EloquentRepository implements StudentLevelRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return StudentLevel::class;
    }

}

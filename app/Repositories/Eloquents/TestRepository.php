<?php

namespace App\Repositories\Eloquents;

use App\Models\Test;
use App\Repositories\Contracts\TestRepositoryInterface;

class TestRepository extends EloquentRepository implements TestRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Test::class;
    }

}

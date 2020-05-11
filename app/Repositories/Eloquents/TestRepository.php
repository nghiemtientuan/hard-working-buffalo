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

    public function getTestFree()
    {
        return $this->_model->where(Test::PRICE_FIELD, Test::PRICE_FREE_VALUE)->get();
    }

    public function getNewTest()
    {
        return $this->_model->orderBy('created_at', 'DESC')->limit(config('constant.limit.newTest'))->get();
    }
}

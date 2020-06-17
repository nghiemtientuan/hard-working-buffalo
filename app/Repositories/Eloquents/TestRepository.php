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
        return $this->_model->where(Test::PRICE_FIELD, Test::PRICE_FREE_VALUE)
            ->with('category')
            ->limit(config('constant.limit.freeTest'))
            ->get();
    }

    public function getNewTest()
    {
        return $this->_model->orderBy('created_at', 'DESC')
            ->with('category')
            ->limit(config('constant.limit.newTest'))
            ->get();
    }

    public function getTestNotShowAnswer()
    {
        return $this->_model->where(Test::IS_SHOW_ANSWER_FIELD, Test::IS_SHOW_ANSWER_FALSE)
            ->get();
    }
}

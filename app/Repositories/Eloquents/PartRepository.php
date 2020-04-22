<?php

namespace App\Repositories\Eloquents;

use App\Models\Part;
use App\Repositories\Contracts\PartRepositoryInterface;

class PartRepository extends EloquentRepository implements PartRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Part::class;
    }

}

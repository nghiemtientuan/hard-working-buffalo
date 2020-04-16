<?php

namespace App\Repositories\Eloquents;

use App\Models\Format;
use App\Repositories\Contracts\FormatRepositoryInterface;

class FormatRepository extends EloquentRepository implements FormatRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Format::class;
    }

}

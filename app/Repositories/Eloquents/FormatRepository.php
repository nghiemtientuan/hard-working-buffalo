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

    public function getAllInfo($id)
    {
        return $this->find($id)->load([
            'parts',
            'parts.questionFormats',
        ]);
    }
}

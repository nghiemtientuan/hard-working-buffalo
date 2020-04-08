<?php

namespace App\Repositories\Contracts;

interface CategoryRepositoryInterface
{
    public function getAllTreeCates();

    public function deleteCates($id);
}

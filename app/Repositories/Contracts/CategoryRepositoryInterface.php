<?php

namespace App\Repositories\Contracts;

interface CategoryRepositoryInterface
{
    public function getAllTreeCates();

    public function deleteCates($id);

    public function getParentCates();

    public function getChildCatesByParentId($categoryId);

    public function getTestsInCateByStudent($categoryId, $studentId);

    public function getAllChildCateTest();
}

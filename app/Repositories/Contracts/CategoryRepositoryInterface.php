<?php

namespace App\Repositories\Contracts;

interface CategoryRepositoryInterface
{
    public function getAllTreeCates();

    public function deleteCates($id);

    public function getParentCates();

    public function getChildCatesByParentId($categoryId);

    public function getTestsInCateByStudent($categoryId, $studentId, $testId = null);

    public function getAllChildCateTest();
}

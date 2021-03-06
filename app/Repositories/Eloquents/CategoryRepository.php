<?php

namespace App\Repositories\Eloquents;

use App\Models\File;
use App\Models\Student;
use App\Models\Test;
use App\Repositories\Contracts\CategoryRepositoryInterface;
use App\Models\Category;
use Illuminate\Support\Facades\DB;

class CategoryRepository extends EloquentRepository implements CategoryRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Category::class;
    }

    public function getAllTreeCates()
    {
        return $this->_model->where(Category::PARENT_ID_FIELD, null)->with('tests', 'childCates')->get();
    }

    public function deleteCates($id)
    {
        $category = $this->find($id);
        if (count($category->childCates)) {
            $this->_model->whereIn('id', $category->childCates->pluck('id'))->delete();
        }

        if ($category->file_id) {
            File::deleteWithFile($category->file_id);
        }
        $this->delete($id);
    }

    public function getParentCates()
    {
        return $this->_model->where(Category::PARENT_ID_FIELD, null)->get();
    }

    public function getChildCatesByParentId($categoryId)
    {
        return $this->_model->where(Category::PARENT_ID_FIELD, $categoryId)->get();
    }

    public function getTestsInCateByStudent($categoryId, $studentId, $testId = null)
    {
        $query = Test::with([
            'students' => function ($qr) use ($studentId) {
                $qr->where('students.id', $studentId);
            },
        ])->where(Test::CATEGORY_ID_FIELD, $categoryId)
            ->orderBy(Test::PRICE_FIELD)
            ->orderBy('created_at', 'DESC');

        if ($testId) {
            $query->where('id', $testId);
        }

        return $query->paginate(config('constant.limit.testInCate'));
    }

    public function getAllChildCateTest()
    {
        return $this->_model->where(Category::PARENT_ID_FIELD, '<>', null)->with('tests')->get();
    }
}

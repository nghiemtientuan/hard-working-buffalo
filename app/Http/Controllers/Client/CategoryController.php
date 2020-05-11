<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Repositories\Contracts\CategoryRepositoryInterface as CategoryRepository;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    protected $categoryRepository;

    /**
     * CategoryController constructor.
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function show($categoryId)
    {
        $category = $this->categoryRepository->find($categoryId);
        if ($category) {
            if ($category->parent_id) {
                $tests = $this->categoryRepository->getTestsInCate($categoryId);

                return view('Client.listTests', compact('category', 'tests'));
            } else {
                $childCates = $this->categoryRepository->getChildCatesByParentId($categoryId);

                return view('Client.listChildCategories', compact('category', 'childCates'));
            }
        }

        return redirect()->route('client.notFound');
    }
}

<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Repositories\Contracts\CategoryRepositoryInterface as CategoryRepository;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

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

    public function show(Request $request, $categoryId)
    {
        $category = $this->categoryRepository->find($categoryId);
        if ($category) {
            if ($category->parent_id) {
                $studentId = null;
                if (Auth::guard('student')->check()) {
                    $studentId = Auth::guard('student')->user()->id;
                }
                $tests = $this->categoryRepository->getTestsInCateByStudent($categoryId, $studentId, $request->testId);

                return view('Client.listTests', compact('category', 'tests'));
            } else {
                $childCates = $this->categoryRepository->getChildCatesByParentId($categoryId);

                return view('Client.listChildCategories', compact('category', 'childCates'));
            }
        }

        return redirect()->route('client.notFound');
    }
}

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
     * @param $categoryRepository
     */
    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function show($categoryId)
    {
        $category = $this->categoryRepository->getInfoParentCate($categoryId);
        if ($category) {
            $childCates = $this->categoryRepository->getChildCatesByParentId($categoryId);

            return view('Client.category', compact('category', 'childCates'));
        }

        return redirect()->route('client.notFound');
    }
}

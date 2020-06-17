<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Repositories\Contracts\CategoryRepositoryInterface as CategoryRepository;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    protected $categoryRepository;
    protected $testRepository;

    /**
     * HomeController constructor.
     * @param CategoryRepository $categoryRepository
     * @param TestRepository $testRepository
     */
    public function __construct(
        CategoryRepository $categoryRepository,
        TestRepository $testRepository
    ) {
        $this->categoryRepository = $categoryRepository;
        $this->testRepository = $testRepository;
    }

    public function index()
    {
        $categories = $this->categoryRepository->getParentCates();
        $freeTests = $this->testRepository->getTestFree();
        $newTests = $this->testRepository->getNewTest();

        return view('Client.home', compact('categories', 'freeTests', 'newTests'));
    }
}

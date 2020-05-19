<?php

namespace App\Http\Controllers\Client;

use App\Repositories\Contracts\CategoryRepositoryInterface as CategoryRepository;
use App\Repositories\Contracts\HistoryRepositoryInterface as HistoryRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RankingController extends Controller
{
    protected $categoryRepository;
    protected $historyRepository;

    /**
     * HistoryController constructor.
     * @param HistoryRepository $historyRepository
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(
        HistoryRepository $historyRepository,
        CategoryRepository $categoryRepository
    ) {
        $this->categoryRepository = $categoryRepository;
        $this->historyRepository = $historyRepository;
    }

    public function index(Request $request)
    {
        $filter = $request->only([
            'test',
        ]);
        $cateTests = $this->categoryRepository->getAllChildCateTest();
        $rankings = $this->historyRepository->getRanking($filter);

        return view('Client.ranking', compact('cateTests', 'filter', 'rankings'));
    }
}

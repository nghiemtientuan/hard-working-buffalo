<?php

namespace App\Http\Controllers\Client;

use App\Models\ReactHistory;
use App\Repositories\Contracts\CategoryRepositoryInterface as CategoryRepository;
use App\Repositories\Contracts\HistoryRepositoryInterface as HistoryRepository;
use App\Repositories\Contracts\ReactHistoryRepositoryInterface as ReactHistoryRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class RankingController extends Controller
{
    protected $categoryRepository;
    protected $historyRepository;
    protected $reactHistoryRepository;

    /**
     * HistoryController constructor.
     * @param HistoryRepository $historyRepository
     * @param CategoryRepository $categoryRepository
     * @param ReactHistoryRepository $reactHistoryRepository
     */
    public function __construct(
        HistoryRepository $historyRepository,
        CategoryRepository $categoryRepository,
        ReactHistoryRepository $reactHistoryRepository
    ) {
        $this->categoryRepository = $categoryRepository;
        $this->historyRepository = $historyRepository;
        $this->reactHistoryRepository = $reactHistoryRepository;
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

    public function reaction(Request $request)
    {
        if (
            $request->reactionId
            && $request->reactionId > 0
            && $request->reactionId < 5
            && $request->historyId
            && $this->historyRepository->find($request->historyId)
        ) {
            $data = [
                ReactHistory::REACT_ID_FIELD => $request->reactionId,
                ReactHistory::HISTORY_ID_FIELD => $request->historyId,
            ];
            if (Auth::check()) {
                $data[ReactHistory::USER_ID_FIELD] = Auth::user()->id;
                $data[ReactHistory::TYPE_FIELD] = ReactHistory::TYPE_USER;
            } elseif (Auth::guard('student')->check()) {
                $data[ReactHistory::USER_ID_FIELD] = Auth::guard('student')->user()->id;
                $data[ReactHistory::TYPE_FIELD] = ReactHistory::TYPE_STUDENT;
            } else {
                return response()->json([
                    'code' => config('constant.status_code.code_400'),
                    'data' => [],
                    'message' => trans('client.errors.reaction.not_login'),
                ]);
            }

            $this->reactHistoryRepository->updateOrCreate($data);
            $dataResponse = $this->reactHistoryRepository->getRankingByType($request->historyId);

            return response()->json([
                'code' => config('constant.status_code.code_200'),
                'data' => [
                    'reacts' => $dataResponse,
                    'clickedReactUrl' => config('constant.reacts')[$request->reactionId],
                ],
                'message' => trans('client.success.action_success'),
            ]);
        } else {
            return response()->json([
                'code' => config('constant.status_code.code_401'),
                'data' => [],
                'message' => trans('client.errors.reaction.wrong_format'),
            ]);
        }
    }
}

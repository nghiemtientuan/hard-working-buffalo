<?php

namespace App\Http\Middleware\Client;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Repositories\Contracts\HistoryRepositoryInterface as HistoryRepository;

class CheckOwnerHistory
{
    protected $historyRepository;

    /**
     * CheckOwnerHistory constructor.
     * @param $historyRepository
     */
    public function __construct(HistoryRepository $historyRepository)
    {
        $this->historyRepository = $historyRepository;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $history = $this->historyRepository->find($request->historyId)->load('student');
        if ($history && (Auth::check() || (Auth::guard('student')->check() && $history->student))) {
            return $next($request);
        }

        return redirect()->route('client.notFound');
    }
}
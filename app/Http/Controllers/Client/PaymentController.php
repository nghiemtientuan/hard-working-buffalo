<?php

namespace App\Http\Controllers\Client;

use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\SettingRepositoryInterface as SettingRepository;

class PaymentController extends Controller
{
    protected $settingRepository;

    /**
     * HistoryController constructor.
     * @param SettingRepository $settingRepository
     */
    public function __construct(
        SettingRepository $settingRepository
    ) {
        $this->settingRepository = $settingRepository;
    }

    public function index()
    {
        return view('Client.payment');
    }

    public function exchange(Request $request)
    {
        $coinNumber = $request->coinNumber;
        if ($coinNumber >= Setting::COST_COIN_MIN && $coinNumber <= Setting::COST_COIN_MAX ) {
            $settings = $this->settingRepository->getCostCoinSetting();
            $cost = $coinNumber * $settings[Setting::COST_COIN_KEY];

            return response()->json([
                'code' => config('constant.status_code.code_200'),
                'data' => [
                    'cost' => $cost,
                ],
            ]);
        } else {
            return response()->json([
                'code' => config('constant.status_code.code_400'),
                'message' => trans('client.errors.payment.coinNumberInvalid'),
            ]);
        }
    }

    public function getVnPay()
    {
        return view('Client.payment');
    }
}

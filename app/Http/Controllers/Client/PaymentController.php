<?php

namespace App\Http\Controllers\Client;

use App\Models\Payment;
use App\Models\Setting;
use App\Models\Student;
use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\SettingRepositoryInterface as SettingRepository;
use App\Repositories\Contracts\PaymentRepositoryInterface as PaymentRepository;
use App\Repositories\Contracts\StudentRepositoryInterface as StudentRepository;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class PaymentController extends Controller
{
    protected $settingRepository;
    protected $paymentRepository;
    protected $studentRepository;

    /**
     * HistoryController constructor.
     * @param SettingRepository $settingRepository
     * @param PaymentRepository $paymentRepository
     * @param StudentRepository $studentRepository
     */
    public function __construct(
        SettingRepository $settingRepository,
        PaymentRepository $paymentRepository,
        StudentRepository $studentRepository
    ) {
        $this->settingRepository = $settingRepository;
        $this->paymentRepository = $paymentRepository;
        $this->studentRepository = $studentRepository;
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

    public function postExchange(Request $request)
    {
        $coinNumber = $request->coinNumber;
        if ($coinNumber >= Setting::COST_COIN_MIN && $coinNumber <= Setting::COST_COIN_MAX ) {
            $settings = $this->settingRepository->getCostCoinSetting();
            $cost = $coinNumber * $settings[Setting::COST_COIN_KEY];

            try {
                switch ($request->keyPay) {
                    case Payment::MOMO_KEY_PAY:
                        $this->momoPay($cost, $coinNumber);
                        break;
                    case Payment::VNPAY_KEY_PAY:
                        $this->vnPay($cost);
                        break;
                }
            } catch (Exception $exception) {
                return redirect()->back()->withErrors($exception->getMessage());
            }
        } else {
            return redirect()->back()->withErrors([trans('client.errors.payment.coinNumberInvalid')]);
        }
    }

    private function momoPay($cost, $coinNumber)
    {
        $orderId = Str::uuid()->toString();
        $requestId = Str::uuid()->toString();
        $response = \MoMoAIO::purchase([
            'amount' => $cost,
            'returnUrl' => route('client.payments.momo.getSuccess'),
            'notifyUrl' => route('client.payments.momo.getSuccess'),
            'orderId' => $orderId,
            'requestId' => $requestId,
        ])->send();

        if ($response->payUrl) {
            $dataPayment = [
                Payment::STUDENT_ID_FIELD => Auth::guard('student')->user()->id,
                Payment::COIN_FIELD => $coinNumber,
                Payment::COST_FIELD => $cost,
                Payment::ORDER_ID_FIELD => $orderId,
                Payment::REQUEST_ID_FIELD => $requestId,
                Payment::TYPE_FIELD => Payment::MOMO_KEY_PAY,
            ];
            $this->paymentRepository->create($dataPayment);

            $response->redirect();
        } else {
            throw new Exception($response->getMessage());
        }
    }

    private function vnPay($cost)
    {
        $response = \VNPay::purchase([
            'vnp_TxnRef' => time(),
            'vnp_OrderType' => 100000,
            'vnp_OrderInfo' => time(),
            'vnp_IpAddr' => '127.0.0.1',
            'vnp_Amount' => $cost,
            'vnp_ReturnUrl' => route('client.payments.success'),
        ])->send();

        if ($response->isSuccessful()) {
            $response->redirect();
        } else {
            throw new Exception($response->getMessage());
        }
    }

    public function getSuccessMomo()
    {
        DB::beginTransaction();
        try {
            $response = \MoMoAIO::completePurchase()->send();

            if ($response->isSuccessful()) {
                $payment = $this->paymentRepository->getPaymentFalse($response->requestId, $response->orderId);
                if ($payment) {
                    $payment = $this->paymentRepository
                        ->update($payment->id, [Payment::IS_SUCCESS_FIELD => Payment::IS_SUCCESS]);
                    $user = Auth::guard('student')->user();
                    $newCoin = $user->coin + $payment->coin;

                    $this->savePaymentLog($user, $user->coin, $newCoin);
                    $this->studentRepository->update(
                        $user->id,
                        [
                            Student::COIN_FIELD => $newCoin,
                        ]
                    );
                }
                DB::commit();

                return redirect()->route('client.payments.index')
                    ->with(['success' => trans('client.success.payment_sucess', ['coins' => 10])]);
            }
            DB::commit();

            return redirect()->route('client.payments.index')
                ->withErrors([trans('client.errors.payment.payment_error')]);

        } catch (Exception $exception) {
            DB::rollBack();

            return redirect()->route('client.payments.index')
                ->withErrors([trans('client.errors.payment.payment_error')]);
        }

    }

    public function savePaymentLog($student, $oldCoin, $newCoin)
    {
        Log::info('Student(id: ' . $student->id . ', email: ' . $student->email . '): Payment: ('
            . $oldCoin . ' -> ' . $newCoin . ') +' . ($newCoin - $oldCoin) . ' coins');
    }
}

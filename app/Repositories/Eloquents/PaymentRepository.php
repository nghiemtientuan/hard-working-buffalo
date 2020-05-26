<?php

namespace App\Repositories\Eloquents;

use App\Models\Payment;
use App\Repositories\Contracts\PaymentRepositoryInterface;

class PaymentRepository extends EloquentRepository implements PaymentRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Payment::class;
    }

    public function getPaymentFalse($requestId, $orderId)
    {
        return $this->_model->where(Payment::REQUEST_ID_FIELD, $requestId)
            ->where(Payment::ORDER_ID_FIELD, $orderId)
            ->where(Payment::IS_SUCCESS_FIELD, Payment::IS_FALSE)
            ->first();
    }
}

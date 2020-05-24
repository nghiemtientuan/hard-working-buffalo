<?php

namespace App\Repositories\Contracts;

interface PaymentRepositoryInterface
{
    public function getPaymentFalse($requestId, $orderId);
}

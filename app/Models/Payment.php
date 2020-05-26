<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Payment extends Model
{
    use Notifiable;

    protected $table = 'payments';

    const STUDENT_ID_FIELD = 'student_id';
    const COIN_FIELD = 'coin';
    const COST_FIELD = 'cost';
    const PRICE_FIELD = 'price';
    const ORDER_ID_FIELD = 'order_id';
    const REQUEST_ID_FIELD = 'request_id';
    const TYPE_FIELD = 'type';
    const IS_SUCCESS_FIELD = 'is_success';

    const IS_SUCCESS = true;
    const IS_FALSE = false;

    const MOMO_KEY_PAY = 1;
    const VNPAY_KEY_PAY = 2;
    const VTCPAY_KEY_PAY = 3;

    protected $fillable = [
        Payment::STUDENT_ID_FIELD,
        Payment::COIN_FIELD,
        Payment::COST_FIELD,
        Payment::PRICE_FIELD,
        Payment::ORDER_ID_FIELD,
        Payment::REQUEST_ID_FIELD,
        Payment::TYPE_FIELD,
        Payment::IS_SUCCESS_FIELD,
        'created_at',
        'updated_at',
    ];

    public function student()
    {
        return $this->hasOne(Student::class, 'id', Payment::STUDENT_ID_FIELD);
    }

}

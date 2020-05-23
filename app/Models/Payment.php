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
    const PRICE_FIELD = 'price';

    protected $fillable = [
        Payment::STUDENT_ID_FIELD,
        Payment::COIN_FIELD,
        Payment::PRICE_FIELD,
        'created_at',
        'updated_at',
    ];

    public function student()
    {
        return $this->hasOne(Student::class, 'id', Payment::STUDENT_ID_FIELD);
    }

}

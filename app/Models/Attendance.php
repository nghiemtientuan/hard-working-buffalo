<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Attendance extends Model
{
    use Notifiable;

    const TYPE_USER = 'App\Models\User';
    const TYPE_STUDENT = 'App\Models\Student';

    protected $table = 'attendances';

    const USER_ID_FIELD = 'user_id';
    const TYPE_FIELD = 'type';

    protected $fillable = [
        Attendance::USER_ID_FIELD,
        Attendance::TYPE_FIELD,
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, Attendance::USER_ID_FIELD, 'id')
            ->where(Attendance::TYPE_FIELD, Attendance::TYPE_USER);
    }

    public function student()
    {
        return $this->belongsTo(Student::class, Attendance::USER_ID_FIELD, 'id')
            ->where(Attendance::TYPE_FIELD, Attendance::TYPE_STUDENT);
    }
}

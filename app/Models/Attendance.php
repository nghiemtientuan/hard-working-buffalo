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
    const USER_TYPE_FIELD = 'user_type';
    const ACTION_TYPE_FIELD = 'action_type';

    const ACTION_LOGIN = 1;
    const ACTION_LOGIN_COLOR = '#AFFF7B';
    const ACTION_LOGIN_TITLE = 'Login';
    const ACTION_TEST = 2;
    const ACTION_TEST_COLOR = '#FF4900';
    const ACTION_TEST_TITLE = 'Test';

    const SCHEDULE_TEST_COLOR = '#F2FF48';

    protected $fillable = [
        Attendance::USER_ID_FIELD,
        Attendance::USER_TYPE_FIELD,
        Attendance::ACTION_TYPE_FIELD,
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, Attendance::USER_ID_FIELD, 'id')
            ->where(Attendance::USER_TYPE_FIELD, Attendance::TYPE_USER);
    }

    public function student()
    {
        return $this->belongsTo(Student::class, Attendance::USER_ID_FIELD, 'id')
            ->where(Attendance::USER_TYPE_FIELD, Attendance::TYPE_STUDENT);
    }
}

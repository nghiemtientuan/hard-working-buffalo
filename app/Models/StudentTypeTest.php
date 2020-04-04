<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class StudentTypeTest extends Model
{
    use Notifiable;

    protected $table = 'student_type_test';

    const TEST_ID_FIELD = 'test_id';
    const STUDENT_TYPE_ID_FIELD = 'student_type_id';

    protected $fillable = [
        StudentTypeTest::TEST_ID_FIELD,
        StudentTypeTest::STUDENT_TYPE_ID_FIELD,
        'created_at',
        'updated_at',
    ];
}

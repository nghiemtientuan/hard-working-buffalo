<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class StudentTest extends Model
{
    use Notifiable;

    protected $table = 'student_test';

    const TEST_ID_FIELD = 'test_id';
    const STUDENT_ID_FIELD = 'student_id';

    protected $fillable = [
        StudentTest::TEST_ID_FIELD,
        StudentTest::STUDENT_ID_FIELD,
        'created_at',
        'updated_at',
    ];
}

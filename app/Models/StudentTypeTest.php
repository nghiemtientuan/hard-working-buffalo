<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class StudentTypeTest extends Model
{
    use Notifiable;

    protected $table = 'student_type_test';

    protected $fillable = [
        'test_id',
        'student_type_id',
        'created_at',
        'updated_at',
    ];
}

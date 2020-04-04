<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class StudentType extends Model
{
    use Notifiable;

    protected $table = 'student_types';

    const NAME_FIELD = 'name';

    protected $fillable = [
        StudentType::NAME_FIELD,
        'created_at',
        'updated_at',
    ];

    public function tests()
    {
        return $this->belongsToMany(
            Test::class,
            StudentTypeTest::class,
            'student_type_id',
            'test_id'
        );
    }

    public function students()
    {
        return $this->hasMany(Student::class, 'student_type_id', 'id');
    }
}

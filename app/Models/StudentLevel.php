<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class StudentLevel extends Model
{
    use Notifiable;

    protected $table = 'student_levels';

    protected $fillable = [
        'name',
        'score',
        'file_id',
        'created_at',
        'updated_at',
    ];

    public function students()
    {
        return $this->hasMany(Student::class, 'level_id', 'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class StudentLevel extends Model
{
    use Notifiable;

    protected $table = 'student_levels';

    const NAME_FIELD = 'name';
    const SCORE_FIELD = 'score';
    const FILE_ID_FIELD = 'file_id';

    protected $fillable = [
        StudentLevel::NAME_FIELD,
        StudentLevel::SCORE_FIELD,
        StudentLevel::FILE_ID_FIELD,
        'created_at',
        'updated_at',
    ];

    public function students()
    {
        return $this->hasMany(Student::class, 'level_id', 'id');
    }
}

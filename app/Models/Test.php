<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Test extends Model
{
    use Notifiable;

    protected $table = 'tests';

    protected $fillable = [
        'created_user_id',
        'format_id',
        'name',
        'code',
        'guide',
        'execute_time',
        'total_question',
        'price',
        'score',
        'level',
        'publish',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function format()
    {
        return $this->belongsTo(Format::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function histories()
    {
        return $this->hasMany(History::class);
    }

    public function studentTypes()
    {
        return $this->belongsToMany(
            StudentType::class,
            StudentTypeTest::class,
            'test_id',
            'student_type_id'
        );
    }

    public function likes()
    {
        return $this->hasMany(LikeTest::class);
    }
}

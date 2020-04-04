<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Student extends Model
{
    use Notifiable;

    protected $table = 'students';

    protected $fillable = [
        'file_id',
        'username',
        'firstname',
        'lastname',
        'birthday',
        'address',
        'phone',
        'level_id',
        'level_score',
        'student_type_id',
        'diamond',
        'active',
        'description',
        'email',
        'password',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function file()
    {
        return $this->hasOne(File::class)->where(File::TYPE_FIELD, File::TYPE_STUDENT);
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class)
            ->where(Attendance::TYPE_FIELD, Attendance::TYPE_STUDENT);
    }

    public function studentLevel()
    {
        return $this->belongsTo(StudentLevel::class, 'level_id', 'id');
    }

    public function studentType()
    {
        return $this->belongsTo(StudentType::class, 'student_type_id', 'id');
    }

    public function histories()
    {
        return $this->hasMany(History::class);
    }

    public function questionComments()
    {
        return $this->hasMany(QuestionComment::class, QuestionComment::USER_ID_FIELD, 'id')
            ->where(QuestionComment::TYPE_FIELD, QuestionComment::TYPE_STUDENT);
    }

    public function likeTests()
    {
        return $this->belongsToMany(
            Test::class,
            LikeTest::class,
            'user_id',
            'test_id'
        )->wherePivot(LikeTest::TYPE_FIELD, LikeTest::TYPE_STUDENT);
    }

    public function likeHistories()
    {
        return $this->belongsToMany(
            History::class,
            ReactHistory::class,
            'user_id',
            'history_id'
        )->wherePivot(ReactHistory::TYPE_FIELD, ReactHistory::TYPE_STUDENT);
    }
}

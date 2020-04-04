<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Student extends Model
{
    use Notifiable;

    protected $table = 'students';

    const FILE_ID_FIELD = 'file_id';
    const USERNAME_FIELD = 'username';
    const FIRSTNAME_FIELD = 'firstname';
    const LASTNAME_FIELD = 'lastname';
    const BIRTHDAY_FIELD = 'birthday';
    const ADDRESS_FIELD = 'address';
    const PHONE_FIELD = 'phone';
    const LEVEL_ID_FIELD = 'level_id';
    const LEVEL_SCORE_FIELD = 'level_score';
    const STUDENT_TYPE_ID_FIELD = 'student_type_id';
    const DIAMOND_FIELD = 'diamond';
    const ACTIVE_FIELD = 'active';
    const DESCRIPTION_FIELD = 'description';
    const EMAIL_FIELD = 'email';
    const PASSWORD_FIELD = 'password';

    protected $fillable = [
        Student::FILE_ID_FIELD,
        Student::USERNAME_FIELD,
        Student::FIRSTNAME_FIELD,
        Student::LASTNAME_FIELD,
        Student::BIRTHDAY_FIELD,
        Student::ADDRESS_FIELD,
        Student::PHONE_FIELD,
        Student::LEVEL_ID_FIELD,
        Student::LEVEL_SCORE_FIELD,
        Student::STUDENT_TYPE_ID_FIELD,
        Student::DIAMOND_FIELD,
        Student::ACTIVE_FIELD,
        Student::DESCRIPTION_FIELD,
        Student::EMAIL_FIELD,
        Student::PASSWORD_FIELD,
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

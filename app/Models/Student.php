<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Traits\FullTextSearch;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends Authenticatable
{
    use Notifiable, SoftDeletes, FullTextSearch;

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
    const COIN_FIELD = 'coin';
    const TARGET_FIELD = 'target';
    const ACTIVE_FIELD = 'active';
    const DESCRIPTION_FIELD = 'description';
    const EMAIL_FIELD = 'email';
    const PASSWORD_FIELD = 'password';

    const ACTIVE_TRUE = 1;
    const ACTIVE_FALSE = 0;
    const FIRSTNAME_DEFAULT = 'firstname';
    const LASTNAME_DEFAULT = 'lastname';
    const LEVEL_ID_DEFAULT = 1;
    const LEVEL_SCORE_DEFAULT = 0;

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
        Student::COIN_FIELD,
        Student::TARGET_FIELD,
        Student::ACTIVE_FIELD,
        Student::DESCRIPTION_FIELD,
        Student::EMAIL_FIELD,
        Student::PASSWORD_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    /**
     * The columns of the full text index
     */
    protected $searchable = [
        Student::FIRSTNAME_FIELD,
        Student::LASTNAME_FIELD,
        Student::USERNAME_FIELD,
    ];

    protected $with = [
        'file',
        'studentLevel',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function file()
    {
        return $this->hasOne(File::class, 'id', Student::FILE_ID_FIELD);
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

    public function tests()
    {
        return $this->belongsToMany(Test::class, StudentTest::class);
    }

    public function histories()
    {
        return $this->hasMany(History::class);
    }
}

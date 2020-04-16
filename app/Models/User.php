<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';

    const ROLE_ID_FIELD = 'role_id';
    const FILE_ID_FIELD = 'file_id';
    const USERNAME_FIELD = 'username';
    const FIRSTNAME_FIELD = 'firstname';
    const LASTNAME_FIELD = 'lastname';
    const BIRTHDAY_FIELD = 'birthday';
    const ADDRESS_FIELD = 'address';
    const PHONE_FIELD = 'phone';
    const ACTIVE_FIELD = 'active';
    const DESCRIPTION_FIELD = 'description';
    const EMAIL_FIELD = 'email';
    const PASSWORD_FIELD = 'password';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        User::ROLE_ID_FIELD,
        User::FILE_ID_FIELD,
        User::USERNAME_FIELD,
        User::FIRSTNAME_FIELD,
        User::LASTNAME_FIELD,
        User::BIRTHDAY_FIELD,
        User::ADDRESS_FIELD,
        User::PHONE_FIELD,
        User::ACTIVE_FIELD,
        User::DESCRIPTION_FIELD,
        User::EMAIL_FIELD,
        User::PASSWORD_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $with = [
        'file',
        'role',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function file()
    {
        return $this->hasOne(File::class, 'id', User::FILE_ID_FIELD);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class)
            ->where(Attendance::TYPE_FIELD, Attendance::TYPE_USER);
    }

    public function questionComments()
    {
        return $this->morphMany(
            QuestionComment::class,
            'user',
            QuestionComment::TYPE_FIELD,
            QuestionComment::USER_ID_FIELD,
            'id'
        );
    }

    public function likeTests()
    {
        return $this->belongsToMany(
            Test::class,
            LikeTest::class,
            'user_id',
            'test_id'
        )->wherePivot(LikeTest::TYPE_FIELD, LikeTest::TYPE_USER);
    }

    public function likeHistories()
    {
        return $this->belongsToMany(
            History::class,
            ReactHistory::class,
            'user_id',
            'history_id'
        )->wherePivot(ReactHistory::TYPE_FIELD, ReactHistory::TYPE_USER);
    }
}

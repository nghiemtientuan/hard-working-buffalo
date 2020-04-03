<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'role_id',
        'file_id',
        'username',
        'firstname',
        'lastname',
        'birthday',
        'address',
        'phone',
        'active',
        'description',
        'email',
        'password',
        'created_at',
        'updated_at',
        'deleted_at',
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
        return $this->hasOne(File::class)->where(File::TYPE_FIELD, File::TYPE_USER);
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
        return $this->hasMany(QuestionComment::class, QuestionComment::USER_ID_FIELD, 'id')
            ->where(QuestionComment::TYPE_FIELD, QuestionComment::TYPE_USER);
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

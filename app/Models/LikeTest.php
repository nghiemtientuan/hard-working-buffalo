<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class LikeTest extends Model
{
    use Notifiable;

    const TYPE_USER = 'App/Models/User';
    const TYPE_STUDENT = 'App/Models/Student';

    protected $table = 'like_test';

    const TYPE_FIELD = 'type';
    const TEST_ID_FIELD = 'test_id';
    const USER_ID_FIELD = 'user_id';

    protected $fillable = [
        LikeTest::TEST_ID_FIELD,
        LikeTest::USER_ID_FIELD,
        LikeTest::TYPE_FIELD,
        'created_at',
        'updated_at',
    ];

    public function test()
    {
        return $this->belongsTo(Test::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, LikeTest::TYPE_FIELD, 'id')
            ->where(LikeTest::TYPE_FIELD, LikeTest::TYPE_USER);
    }

    public function student()
    {
        return $this->belongsTo(Student::class, LikeTest::TYPE_FIELD, 'id')
            ->where(LikeTest::TYPE_FIELD, LikeTest::TYPE_STUDENT);
    }
}

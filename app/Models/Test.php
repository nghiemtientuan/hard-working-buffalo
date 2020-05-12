<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Test extends Model
{
    use Notifiable;

    protected $table = 'tests';

    const CREATED_USER_ID_FIELD = 'created_user_id';
    const FORMAT_ID_FIELD = 'format_id';
    const NAME_FIELD = 'name';
    const CODE_FIELD = 'code';
    const GUIDE_FIELD = 'guide';
    const EXECUTE_TIME_FIELD = 'execute_time';
    const TOTAL_QUESTION_FIELD = 'total_question';
    const PRICE_FIELD = 'price';
    const SCORE_FIELD = 'score';
    const LEVEL_FIELD = 'level';
    const PUBLISH_FIELD = 'publish';
    const IS_RANDOM_FIELD = 'is_random';

    const PRICE_FREE_VALUE = 0;
    const IS_RANDOM_FALSE = 0;
    const IS_RANDOM_TRUE = 1;

    protected $fillable = [
        Test::CREATED_USER_ID_FIELD,
        Test::FORMAT_ID_FIELD,
        Test::NAME_FIELD,
        Test::CODE_FIELD,
        Test::GUIDE_FIELD,
        Test::EXECUTE_TIME_FIELD,
        Test::TOTAL_QUESTION_FIELD,
        Test::PRICE_FIELD,
        Test::SCORE_FIELD,
        Test::LEVEL_FIELD,
        Test::PUBLISH_FIELD,
        Test::IS_RANDOM_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $with = [
        'format',
        'created_user',
    ];

    public function created_user()
    {
        return $this->belongsTo(User::class, Test::CREATED_USER_ID_FIELD, 'id');
    }

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

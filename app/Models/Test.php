<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Test extends Model
{
    use Notifiable;

    protected $table = 'tests';

    const CREATED_USER_ID_FIELD = 'created_user_id';
    const CATEGORY_ID_FIELD = 'category_id';
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
    const IS_FORMULA_SCORE_FIELD = 'is_formula_score';
    const DAY_SHOW_ANSWER_FIELD = 'day_show_answer';
    const IS_SHOW_ANSWER_FIELD = 'is_show_answer';

    const PRICE_FREE_VALUE = 0;
    const IS_RANDOM_FALSE = 0;
    const IS_RANDOM_TRUE = 1;
    const IS_FORMULA_SCORE_TRUE = 1;
    const IS_FORMULA_SCORE_FALSE = 0;
    const IS_SHOW_ANSWER_FALSE = 0;
    const IS_SHOW_ANSWER_TRUE = 0;
    const DATE_TIME_FORMAT = 'Y-m-d';

    protected $fillable = [
        Test::CREATED_USER_ID_FIELD,
        Test::CATEGORY_ID_FIELD,
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
        Test::IS_FORMULA_SCORE_FIELD,
        Test::DAY_SHOW_ANSWER_FIELD,
        Test::IS_SHOW_ANSWER_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $with = [
        'created_user',
    ];

    public function created_user()
    {
        return $this->belongsTo(User::class, Test::CREATED_USER_ID_FIELD, 'id');
    }

    public function parts()
    {
        return $this->hasMany(Part::class, Part::TEST_ID_FIELD, 'id');
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class, Test::CATEGORY_ID_FIELD, 'id');
    }

    public function histories()
    {
        return $this->hasMany(History::class);
    }

    public function likes()
    {
        return $this->hasMany(LikeTest::class);
    }

    public function students()
    {
        return $this->belongsToMany(Student::class, StudentTest::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class History extends Model
{
    use Notifiable;

    protected $table = 'histories';

    const TEST_ID_FIELD = 'test_id';
    const STUDENT_ID_FIELD = 'student_id';
    const DURATION_FIELD = 'duration';
    const RANDOM_SEED_FIELD = 'random_seed';
    const SCORE_FIELD = 'score';
    const USER_ANSWER_FIELD = 'user_answer';
    const READING_NUMBER_FIELD = 'reading_number';
    const LISTENING_NUMBER_FIELD = 'listening_number';

    protected $fillable = [
        History::TEST_ID_FIELD,
        History::STUDENT_ID_FIELD,
        History::DURATION_FIELD,
        History::RANDOM_SEED_FIELD,
        History::SCORE_FIELD,
        History::USER_ANSWER_FIELD,
        History::READING_NUMBER_FIELD,
        History::LISTENING_NUMBER_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function test()
    {
        return $this->belongsTo(Test::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}

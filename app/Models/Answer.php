<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Answer extends Model
{
    use Notifiable;

    protected $table = 'answers';

    const QUESTION_ID_FIELD = 'question_id';
    const CONTENT_FIELD = 'content';
    const CORRECT_ANSWER_FIELD = 'correct_answer';

    const CORRECT_ANSWER_VALUE = 1;
    const FALSE_ANSWER_VALUE = 0;

    protected $fillable = [
        Answer::QUESTION_ID_FIELD,
        Answer::CONTENT_FIELD,
        Answer::CORRECT_ANSWER_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}

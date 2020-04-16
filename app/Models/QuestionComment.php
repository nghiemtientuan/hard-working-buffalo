<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;

class QuestionComment extends Model
{
    use Notifiable, SoftDeletes;

    const TYPE_USER = 'App\Models\User';
    const TYPE_STUDENT = 'App\Models\Student';

    protected $table = 'question_comments';

    const TYPE_FIELD = 'type';
    const USER_ID_FIELD = 'user_id';
    const QUESTION_ID_FIELD = 'question_id';
    const CONTENT_FIELD = 'content';

    protected $fillable = [
        QuestionComment::QUESTION_ID_FIELD,
        QuestionComment::USER_ID_FIELD,
        QuestionComment::CONTENT_FIELD,
        QuestionComment::TYPE_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $with = [
        'user',
    ];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function user()
    {
        return $this->morphTo('user', QuestionComment::TYPE_FIELD, QuestionComment::USER_ID_FIELD);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Answer extends Model
{
    use Notifiable;

    protected $table = 'answers';

    const TYPE_FIELD = 'type';
    const QUESTION_ID_FIELD = 'question_id';
    const FILE_ID_FIELD = 'file_id';
    const CONTENT_FIELD = 'content';
    const CORRECT_ANSWER_FIELD = 'correct_answer';

    protected $fillable = [
        Answer::QUESTION_ID_FIELD,
        Answer::FILE_ID_FIELD,
        Answer::CONTENT_FIELD,
        Answer::TYPE_FIELD,
        Answer::CORRECT_ANSWER_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function file()
    {
        return $this->hasOne(File::class)->where(File::TYPE_FIELD, File::TYPE_ANSWER);
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}

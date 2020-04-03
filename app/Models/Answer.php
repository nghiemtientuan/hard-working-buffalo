<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Answer extends Model
{
    use Notifiable;

    protected $table = 'answers';

    const TYPE_FIELD = 'type';

    protected $fillable = [
        'question_id',
        'file_id',
        'content',
        Answer::TYPE_FIELD,
        'correct_answer',
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Question extends Model
{
    use Notifiable;

    protected $table = 'questions';

    const PARENT_ID_FIELD = 'parent_id';

    protected $fillable = [
        'file_id',
        Question::PARENT_ID_FIELD,
        'test_id',
        'part_id',
        'type',
        'suggest',
        'content',
        'code',
        'level',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    public function file()
    {
        return $this->hasOne(File::class)->where(File::TYPE_FIELD, File::TYPE_QUESTION);
    }

    public function test()
    {
        return $this->belongsTo(Test::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function part()
    {
        return $this->belongsTo(Part::class);
    }

    public function comments()
    {
        return $this->hasMany(QuestionComment::class);
    }

    public function childQuestions()
    {
        return $this->hasMany(Question::class, Question::PARENT_ID_FIELD, 'id');
    }

    public function parentQuestion()
    {
        return $this->belongsTo(Question::class, Question::PARENT_ID_FIELD, 'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Question extends Model
{
    use Notifiable;

    protected $table = 'questions';

    const FILE_ID_FIELD = 'file_id';
    const PARENT_ID_FIELD = 'parent_id';
    const TEST_ID_FIELD = 'test_id';
    const PART_ID_FIELD = 'part_id';
    const TYPE_FIELD = 'type';
    const SUGGEST_FIELD = 'suggest';
    const CONTENT_FIELD = 'content';
    const CODE_FIELD = 'code';
    const LEVEL_FIELD = 'level';

    const CONTENT_TYPE = 1;
    const IMAGE_TYPE = 2;
    const AUDIO_ONE_TYPE = 3;
    const AUDIO_MANY_TYPE = 4;

    protected $fillable = [
        Question::FILE_ID_FIELD,
        Question::PARENT_ID_FIELD,
        Question::TEST_ID_FIELD,
        Question::PART_ID_FIELD,
        Question::TYPE_FIELD,
        Question::SUGGEST_FIELD,
        Question::CONTENT_FIELD,
        Question::CODE_FIELD,
        Question::LEVEL_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $with = [
        'file',
    ];

    public function file()
    {
        return $this->hasOne(File::class, 'id', Question::FILE_ID_FIELD);
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

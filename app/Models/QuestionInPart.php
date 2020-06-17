<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class QuestionInPart extends Model
{
    use Notifiable;

    protected $table = 'question_in_part';

    const PART_ID_FIELD = 'part_id';
    const NUMBER_FIELD = 'number';
    const CHILD_QUESTIONS_FIELD = 'child_questions';

    protected $fillable = [
        QuestionInPart::PART_ID_FIELD,
        QuestionInPart::NUMBER_FIELD,
        QuestionInPart::CHILD_QUESTIONS_FIELD,
        'created_at',
        'updated_at',
    ];

    public function part()
    {
        return $this->belongsTo(Part::class);
    }
}

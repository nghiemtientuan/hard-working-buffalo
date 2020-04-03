<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class QuestionInPart extends Model
{
    use Notifiable;

    protected $table = 'question_in_part';

    protected $fillable = [
        'part_id',
        'number',
        'type',
        'child_questions',
        'created_at',
        'updated_at',
    ];

    public function part()
    {
        return $this->belongsTo(Part::class);
    }
}

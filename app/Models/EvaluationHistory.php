<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class EvaluationHistory extends Model
{
    use Notifiable;

    protected $table = 'evaluation_history';

    const HISTORY_ID_FIELD = 'history_id';
    const STUDENT_ID_FIELD = 'student_id';
    const VALUE_FIELD = 'value';
    const DESCRIPTION_FIELD = 'description';

    protected $fillable = [
        EvaluationHistory::HISTORY_ID_FIELD,
        EvaluationHistory::STUDENT_ID_FIELD,
        EvaluationHistory::VALUE_FIELD,
        EvaluationHistory::DESCRIPTION_FIELD,
        'created_at',
        'updated_at',
    ];

    public function history()
    {
        return $this->belongsTo(History::class, EvaluationHistory::HISTORY_ID_FIELD, 'id');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, EvaluationHistory::STUDENT_ID_FIELD, 'id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Format extends Model
{
    use Notifiable;

    protected $table = 'formats';

    const NAME_FIELD = 'name';
    const DESCRIPTION_FIELD = 'description';
    const TOTAL_QUESTION_FIELD = 'total_question';

    protected $fillable = [
        Format::NAME_FIELD,
        Format::DESCRIPTION_FIELD,
        Format::TOTAL_QUESTION_FIELD,
        'created_at',
        'updated_at',
    ];

    public function tests()
    {
        return $this->hasMany(Test::class);
    }

    public function parts()
    {
        return $this->hasMany(Part::class, Part::FORMAT_ID_FIELD, 'id');
    }
}

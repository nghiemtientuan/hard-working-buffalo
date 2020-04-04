<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Part extends Model
{
    use Notifiable;

    protected $table = 'parts';

    const NAME_FIELD = 'name';
    const DESCRIPTION_FIELD = 'description';

    protected $fillable = [
        Part::NAME_FIELD,
        Part::DESCRIPTION_FIELD,
        'created_at',
        'updated_at',
    ];

    public function format()
    {
        return $this->belongsToMany(Format::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function questionFormats()
    {
        return $this->hasMany(QuestionInPart::class);
    }
}

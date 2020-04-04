<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Part extends Model
{
    use Notifiable;

    protected $table = 'parts';

    protected $fillable = [
        'name',
        'description',
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

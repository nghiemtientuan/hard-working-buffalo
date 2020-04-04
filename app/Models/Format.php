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

    protected $fillable = [
        Format::NAME_FIELD,
        Format::DESCRIPTION_FIELD,
        'created_at',
        'updated_at',
    ];

    public function tests()
    {
        return $this->hasMany(Test::class);
    }

    public function parts()
    {
        return $this->belongsToMany(Part::class);
    }
}

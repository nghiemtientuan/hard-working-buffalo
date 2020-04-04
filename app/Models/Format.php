<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Format extends Model
{
    use Notifiable;

    protected $table = 'formats';

    protected $fillable = [
        'name',
        'description',
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

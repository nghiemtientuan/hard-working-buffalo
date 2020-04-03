<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class React extends Model
{
    use Notifiable;

    protected $table = 'reacts';

    protected $fillable = [
        'file_id',
        'title',
        'created_at',
        'updated_at',
    ];

    public function file()
    {
        return $this->hasOne(File::class);
    }

    public function histories()
    {
        return $this->belongsToMany(History::class);
    }
}

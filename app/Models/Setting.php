<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Setting extends Model
{
    use Notifiable;

    protected $table = 'settings';

    protected $fillable = [
        'key',
        'value',
        'created_at',
        'updated_at',
    ];
}

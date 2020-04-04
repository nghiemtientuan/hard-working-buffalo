<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Setting extends Model
{
    use Notifiable;

    protected $table = 'settings';

    const KEY_FIELD = 'key';
    const VALUE_FIELD = 'value';

    protected $fillable = [
        Setting::KEY_FIELD,
        Setting::VALUE_FIELD,
        'created_at',
        'updated_at',
    ];
}

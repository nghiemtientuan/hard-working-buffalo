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

    const COST_COIN_KEY = 'COST_COIN';
    const COST_COIN_MAX = 1000;
    const COST_COIN_MIN = 1;
    const COST_COIN_DEFAULT = 1000;

    protected $fillable = [
        Setting::KEY_FIELD,
        Setting::VALUE_FIELD,
        'created_at',
        'updated_at',
    ];
}

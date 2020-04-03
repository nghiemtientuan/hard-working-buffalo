<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ReactHistory extends Model
{
    use Notifiable;

    const TYPE_USER = 'App/Models/User';
    const TYPE_STUDENT = 'App/Models/Student';

    protected $table = 'react_history';

    const TYPE_FIELD = 'type';

    protected $fillable = [
        'history_id',
        'react_id',
        'user_id',
        'type',
        'created_at',
        'updated_at',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ReactHistory extends Model
{
    use Notifiable;

    const TYPE_USER = 'App\Models\User';
    const TYPE_STUDENT = 'App\Models\Student';

    protected $table = 'react_history';

    const TYPE_FIELD = 'type';
    const HISTORY_ID_FIELD = 'history_id';
    const REACT_ID_FIELD = 'react_id';
    const USER_ID_FIELD = 'user_id';

    protected $fillable = [
        ReactHistory::HISTORY_ID_FIELD,
        ReactHistory::REACT_ID_FIELD,
        ReactHistory::USER_ID_FIELD,
        ReactHistory::TYPE_FIELD,
        'created_at',
        'updated_at',
    ];
}

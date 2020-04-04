<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class React extends Model
{
    use Notifiable;

    protected $table = 'reacts';

    const FILE_ID_FIELD = 'file_id';
    const TITLE_FIELD = 'title';

    protected $fillable = [
        React::FILE_ID_FIELD,
        React::TITLE_FIELD,
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

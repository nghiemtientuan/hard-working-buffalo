<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class FormatPart extends Model
{
    use Notifiable;

    protected $table = 'format_part';

    protected $fillable = [
        'part_id',
        'format_id',
        'created_at',
        'updated_at',
    ];
}

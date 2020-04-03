<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class AttendanceScore extends Model
{
    use Notifiable;

    protected $table = 'attendance_scores';

    protected $fillable = [
        'number',
        'diamond',
        'created_at',
        'updated_at',
    ];
}

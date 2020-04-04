<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class AttendanceScore extends Model
{
    use Notifiable;

    protected $table = 'attendance_scores';

    const NUMBER_FIELD = 'number';
    const DIAMOND_FIELD = 'diamond';

    protected $fillable = [
        AttendanceScore::NUMBER_FIELD,
        AttendanceScore::DIAMOND_FIELD,
        'created_at',
        'updated_at',
    ];
}

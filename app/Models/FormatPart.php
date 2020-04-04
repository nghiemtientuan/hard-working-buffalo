<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class FormatPart extends Model
{
    use Notifiable;

    protected $table = 'format_part';

    const PART_ID_FIELD = 'part_id';
    const FORMAT_ID_FIELD = 'format_id';

    protected $fillable = [
        FormatPart::PART_ID_FIELD,
        FormatPart::FORMAT_ID_FIELD,
        'created_at',
        'updated_at',
    ];
}

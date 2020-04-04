<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class CategoryTest extends Model
{
    use Notifiable;

    protected $table = 'category_test';

    protected $fillable = [
        'category_id',
        'test_id',
        'created_at',
        'updated_at',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class CategoryTest extends Model
{
    use Notifiable;

    protected $table = 'category_test';

    const CATEGORY_ID_FIELD = 'category_id';
    const TEST_ID_FIELD = 'test_id';

    protected $fillable = [
        CategoryTest::CATEGORY_ID_FIELD,
        CategoryTest::TEST_ID_FIELD,
        'created_at',
        'updated_at',
    ];
}

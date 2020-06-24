<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Part extends Model
{
    use Notifiable;

    protected $table = 'parts';

    const NAME_FIELD = 'name';
    const DESCRIPTION_FIELD = 'description';
    const TEST_ID_FIELD = 'test_id';

    const FREE_NAME_VALUE = 'free-part';

    protected $fillable = [
        Part::NAME_FIELD,
        Part::DESCRIPTION_FIELD,
        Part::TEST_ID_FIELD,
        'created_at',
        'updated_at',
    ];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function test()
    {
        return $this->belongsTo(Test::class, Part::TEST_ID_FIELD, 'id');
    }
}

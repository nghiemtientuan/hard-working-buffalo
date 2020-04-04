<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Permission extends Model
{
    use Notifiable;

    protected $table = 'permissions';

    const NAME_FIELD = 'name';
    const SLUG_FIELD = 'slug';

    protected $fillable = [
        Permission::NAME_FIELD,
        Permission::SLUG_FIELD,
        'created_at',
        'updated_at',
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
}

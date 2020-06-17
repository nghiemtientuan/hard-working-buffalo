<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class RolePermission extends Model
{
    use Notifiable;

    protected $table = 'role_permission';

    const ROLE_ID_FIELD = 'role_id';
    const PERMISSION_ID_FIELD = 'permission_id';

    protected $fillable = [
        RolePermission::ROLE_ID_FIELD,
        RolePermission::PERMISSION_ID_FIELD,
        'created_at',
        'updated_at',
    ];
}

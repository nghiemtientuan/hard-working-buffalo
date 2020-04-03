<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class RolePermission extends Model
{
    use Notifiable;

    protected $table = 'role_permission';

    protected $fillable = [
        'role_id',
        'permission_id',
        'created_at',
        'updated_at',
    ];
}

<?php

namespace App\Repositories\Eloquents;

use App\Models\Role;
use App\Repositories\Contracts\RoleRepositoryInterface;

class RoleRepository extends EloquentRepository implements RoleRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Role::class;
    }

}

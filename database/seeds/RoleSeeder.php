<?php

use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->truncate();
        $data = [
            [
                Role::NAME_FIELD => 'teacher',
                Role::SLUG_FIELD => 'teacher',
            ],
            [
                Role::NAME_FIELD => 'writer',
                Role::SLUG_FIELD => 'writer',
            ],
            [
                Role::NAME_FIELD => 'admin',
                Role::SLUG_FIELD => 'admin',
            ],
            [
                Role::NAME_FIELD => 'super admin',
                Role::SLUG_FIELD => 'super-admin',
            ],
        ];
        foreach ($data as $item) {
            Role::create($item);
        }
    }
}

<?php

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $password = '123456';

        DB::table('users')->truncate();
        $data = [
            [
                User::ROLE_ID_FIELD => 1,
                User::FILE_ID_FIELD => 3,
                User::USERNAME_FIELD => 'teacher',
                User::FIRSTNAME_FIELD => 'teacher',
                User::LASTNAME_FIELD => 'teacher teacher',
                User::BIRTHDAY_FIELD => '22/02/1997',
                User::ADDRESS_FIELD => 'Ha Noi',
                User::PHONE_FIELD => '0124456789',
                User::ACTIVE_FIELD => 1,
                User::DESCRIPTION_FIELD => 'teacher role',
                User::EMAIL_FIELD => 'teacher@gmail.com',
                User::PASSWORD_FIELD => bcrypt($password),
            ],
            [
                User::ROLE_ID_FIELD => 2,
                User::FILE_ID_FIELD => 3,
                User::USERNAME_FIELD => 'writer',
                User::FIRSTNAME_FIELD => 'writer',
                User::LASTNAME_FIELD => 'writer writer',
                User::BIRTHDAY_FIELD => '22/03/1997',
                User::ADDRESS_FIELD => 'Bac Ninh',
                User::PHONE_FIELD => '0223456789',
                User::ACTIVE_FIELD => 1,
                User::DESCRIPTION_FIELD => 'writer role',
                User::EMAIL_FIELD => 'write@gmail.com',
                User::PASSWORD_FIELD => bcrypt($password),
            ],
            [
                User::ROLE_ID_FIELD => 3,
                User::FILE_ID_FIELD => 3,
                User::USERNAME_FIELD => 'admin',
                User::FIRSTNAME_FIELD => 'admin',
                User::LASTNAME_FIELD => 'admin admin',
                User::BIRTHDAY_FIELD => '22/04/1997',
                User::ADDRESS_FIELD => 'Bac Ninh',
                User::PHONE_FIELD => '0123456789',
                User::ACTIVE_FIELD => 1,
                User::DESCRIPTION_FIELD => 'admin role',
                User::EMAIL_FIELD => 'admin@gmail.com',
                User::PASSWORD_FIELD => bcrypt($password),
            ],
            [
                User::ROLE_ID_FIELD => 3,
                User::FILE_ID_FIELD => 3,
                User::USERNAME_FIELD => 'super admin',
                User::FIRSTNAME_FIELD => 'super admin',
                User::LASTNAME_FIELD => 'super admin admin',
                User::BIRTHDAY_FIELD => '22/04/1997',
                User::ADDRESS_FIELD => 'Ha Noi',
                User::PHONE_FIELD => '0123456789',
                User::ACTIVE_FIELD => 1,
                User::DESCRIPTION_FIELD => 'super admin role',
                User::EMAIL_FIELD => 'superadmin@gmail.com',
                User::PASSWORD_FIELD => bcrypt($password),
            ],
        ];
        foreach ($data as $item) {
            User::create($item);
        }
    }
}

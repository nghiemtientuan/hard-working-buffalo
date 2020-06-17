<?php

use App\Models\Student;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('students')->truncate();
        $data = [
            [
                Student::FILE_ID_FIELD => 1,
                Student::USERNAME_FIELD => 'student1',
                Student::FIRSTNAME_FIELD => 'student1',
                Student::LASTNAME_FIELD => 'student',
                Student::BIRTHDAY_FIELD => '22/02/1997',
                Student::ADDRESS_FIELD => 'Ha Noi',
                Student::PHONE_FIELD => '0123456789',
                Student::LEVEL_ID_FIELD => 1,
                Student::LEVEL_SCORE_FIELD => 12,
                Student::COIN_FIELD => 100,
                Student::ACTIVE_FIELD => 1,
                Student::DESCRIPTION_FIELD => 'student role',
                Student::EMAIL_FIELD => 'student1@gmail.com',
                Student::PASSWORD_FIELD => bcrypt('123456'),
            ],
            [
                Student::FILE_ID_FIELD => 2,
                Student::USERNAME_FIELD => 'student2',
                Student::FIRSTNAME_FIELD => 'student2',
                Student::LASTNAME_FIELD => 'student',
                Student::BIRTHDAY_FIELD => '21/05/1997',
                Student::ADDRESS_FIELD => 'Bac Ninh',
                Student::PHONE_FIELD => '0123456789',
                Student::LEVEL_ID_FIELD => 2,
                Student::LEVEL_SCORE_FIELD => 24,
                Student::COIN_FIELD => 72,
                Student::ACTIVE_FIELD => 1,
                Student::DESCRIPTION_FIELD => 'student role',
                Student::EMAIL_FIELD => 'student2@gmail.com',
                Student::PASSWORD_FIELD => bcrypt('123456'),
            ],
        ];
        foreach ($data as $item) {
            Student::create($item);
        }
    }
}

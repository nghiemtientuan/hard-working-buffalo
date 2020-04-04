<?php

use App\Models\StudentType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('student_types')->truncate();
        $data = [
            [
                StudentType::NAME_FIELD => 'free',
            ],
            [
                StudentType::NAME_FIELD => 'active',
            ],
            [
                StudentType::NAME_FIELD => 'active++',
            ],
            [
                StudentType::NAME_FIELD => 'plus',
            ],
        ];
        foreach ($data as $item) {
            StudentType::create($item);
        }
    }
}

<?php

use App\Models\StudentLevel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('student_levels')->truncate();
        $data = [
            [
                StudentLevel::NAME_FIELD => 'beginner',
                StudentLevel::SCORE_FIELD => 250,
            ],
            [
                StudentLevel::NAME_FIELD => 'High Beginner',
                StudentLevel::SCORE_FIELD => 500,
            ],
            [
                StudentLevel::NAME_FIELD => 'Intermediate',
                StudentLevel::SCORE_FIELD => 750,
            ],
            [
                StudentLevel::NAME_FIELD => 'Advanced',
                StudentLevel::SCORE_FIELD => 1000,
            ],
        ];
        foreach ($data as $item) {
            StudentLevel::create($item);
        }
    }
}

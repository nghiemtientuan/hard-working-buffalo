<?php

use Illuminate\Database\Seeder;
use App\Models\Test;
use Illuminate\Support\Facades\DB;

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tests')->truncate();
        $data = [
            [
                Test::CREATED_USER_ID_FIELD => 2,
                Test::FORMAT_ID_FIELD => 1,
                Test::NAME_FIELD => 'test 1',
                Test::CODE_FIELD => 'VVGB155',
                Test::GUIDE_FIELD => 'huong dan',
                Test::EXECUTE_TIME_FIELD => 60,
                Test::TOTAL_QUESTION_FIELD => 60,
                Test::PRICE_FIELD => 22,
                Test::SCORE_FIELD => 23,
                Test::LEVEL_FIELD => 1,
                Test::PUBLISH_FIELD => 1,
            ],
            [
                Test::CREATED_USER_ID_FIELD => 2,
                Test::FORMAT_ID_FIELD => 2,
                Test::NAME_FIELD => 'test 2',
                Test::CODE_FIELD => 'VFCSC1312',
                Test::GUIDE_FIELD => 'huong dan',
                Test::EXECUTE_TIME_FIELD => 120,
                Test::TOTAL_QUESTION_FIELD => 60,
                Test::PRICE_FIELD => 44,
                Test::SCORE_FIELD => 43,
                Test::LEVEL_FIELD => 2,
                Test::PUBLISH_FIELD => 1,
            ],
            [
                Test::CREATED_USER_ID_FIELD => 2,
                Test::FORMAT_ID_FIELD => 3,
                Test::NAME_FIELD => 'test 3',
                Test::CODE_FIELD => 'VDEGF3234',
                Test::GUIDE_FIELD => 'huong dan',
                Test::EXECUTE_TIME_FIELD => 60,
                Test::TOTAL_QUESTION_FIELD => 60,
                Test::PRICE_FIELD => 55,
                Test::SCORE_FIELD => 56,
                Test::LEVEL_FIELD => 3,
                Test::PUBLISH_FIELD => 1,
            ],
        ];
        foreach ($data as $item) {
            Test::create($item);
        }
    }
}

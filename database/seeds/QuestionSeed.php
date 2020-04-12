<?php

use App\Models\Question;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('questions')->truncate();
        $data = [
            [
                Question::TEST_ID_FIELD => 1,
                Question::PART_ID_FIELD => 1,
                Question::TYPE_FIELD => Question::CONTENT_TYPE,
                Question::SUGGEST_FIELD => 'suggest 1',
                Question::CONTENT_FIELD => 'content 1',
                Question::CODE_FIELD => 'NDSKJB565',
                Question::LEVEL_FIELD => 1,
            ],
            [
                Question::FILE_ID_FIELD => 1,
                Question::TEST_ID_FIELD => 1,
                Question::PART_ID_FIELD => 2,
                Question::TYPE_FIELD => Question::IMAGE_TYPE,
                Question::SUGGEST_FIELD => 'suggest 2',
                Question::CONTENT_FIELD => 'content 2',
                Question::CODE_FIELD => 'FHBVHV7575',
                Question::LEVEL_FIELD => 2,
            ],
            [
                Question::FILE_ID_FIELD => 2,
                Question::TEST_ID_FIELD => 1,
                Question::PART_ID_FIELD => 3,
                Question::TYPE_FIELD => Question::IMAGE_TYPE,
                Question::SUGGEST_FIELD => 'suggest 3',
                Question::CONTENT_FIELD => 'content 3',
                Question::CODE_FIELD => 'BHVH465',
                Question::LEVEL_FIELD => 3,
            ],
        ];
        foreach ($data as $item) {
            Question::create($item);
        }
    }
}

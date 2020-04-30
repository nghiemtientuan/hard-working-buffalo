<?php

use App\Models\QuestionInPart;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionInPartSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('question_in_part')->truncate();
        $data = [
            [
                QuestionInPart::PART_ID_FIELD => 1,
                QuestionInPart::NUMBER_FIELD => 5,
                QuestionInPart::CHILD_QUESTIONS_FIELD => 0,
            ],
            [
                QuestionInPart::PART_ID_FIELD => 2,
                QuestionInPart::NUMBER_FIELD => 5,
                QuestionInPart::CHILD_QUESTIONS_FIELD => 0,
            ],
            [
                QuestionInPart::PART_ID_FIELD => 3,
                QuestionInPart::NUMBER_FIELD => 5,
                QuestionInPart::CHILD_QUESTIONS_FIELD => 2,
            ],
            [
                QuestionInPart::PART_ID_FIELD => 4,
                QuestionInPart::NUMBER_FIELD => 5,
                QuestionInPart::CHILD_QUESTIONS_FIELD => 0,
            ],
            [
                QuestionInPart::PART_ID_FIELD => 5,
                QuestionInPart::NUMBER_FIELD => 5,
                QuestionInPart::CHILD_QUESTIONS_FIELD => 0,
            ],
            [
                QuestionInPart::PART_ID_FIELD => 6,
                QuestionInPart::NUMBER_FIELD => 5,
                QuestionInPart::CHILD_QUESTIONS_FIELD => 2,
            ],
            [
                QuestionInPart::PART_ID_FIELD => 7,
                QuestionInPart::NUMBER_FIELD => 5,
                QuestionInPart::CHILD_QUESTIONS_FIELD => 3,
            ],
        ];
        foreach ($data as $item) {
            QuestionInPart::create($item);
        }
    }
}

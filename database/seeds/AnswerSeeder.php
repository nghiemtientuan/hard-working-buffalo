<?php

use App\Models\Answer;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('answers')->truncate();
        $data = [
            [
                Answer::QUESTION_ID_FIELD => 1,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 1,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 1,
            ],
            [
                Answer::QUESTION_ID_FIELD => 1,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 1,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 3,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 3,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 1,
            ],
            [
                Answer::QUESTION_ID_FIELD => 3,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 3,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 4,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 4,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 4,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 1,
            ],
            [
                Answer::QUESTION_ID_FIELD => 4,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 5,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 1,
            ],
            [
                Answer::QUESTION_ID_FIELD => 5,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 5,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 5,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 6,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 6,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 1,
            ],
            [
                Answer::QUESTION_ID_FIELD => 6,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
            [
                Answer::QUESTION_ID_FIELD => 6,
                Answer::CONTENT_FIELD => 'teacher',
                Answer::CORRECT_ANSWER_FIELD => 0,
            ],
        ];
        foreach ($data as $item) {
            Answer::create($item);
        }
    }
}

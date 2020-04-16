<?php

use App\Models\QuestionComment;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionCommentSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('question_comments')->truncate();
        $data = [
            [
                QuestionComment::QUESTION_ID_FIELD => 1,
                QuestionComment::USER_ID_FIELD => 1,
                QuestionComment::CONTENT_FIELD => 'question content 1',
                QuestionComment::TYPE_FIELD => QuestionComment::TYPE_USER,
            ],
            [
                QuestionComment::QUESTION_ID_FIELD => 1,
                QuestionComment::USER_ID_FIELD => 2,
                QuestionComment::CONTENT_FIELD => 'question content 2',
                QuestionComment::TYPE_FIELD => QuestionComment::TYPE_USER,
            ],
            [
                QuestionComment::QUESTION_ID_FIELD => 1,
                QuestionComment::USER_ID_FIELD => 1,
                QuestionComment::CONTENT_FIELD => 'question content 3',
                QuestionComment::TYPE_FIELD => QuestionComment::TYPE_STUDENT,
            ],
            [
                QuestionComment::QUESTION_ID_FIELD => 1,
                QuestionComment::USER_ID_FIELD => 2,
                QuestionComment::CONTENT_FIELD => 'question content 4',
                QuestionComment::TYPE_FIELD => QuestionComment::TYPE_STUDENT,
            ],
        ];
        foreach ($data as $item) {
            QuestionComment::create($item);
        }
    }
}

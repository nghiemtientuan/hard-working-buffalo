<?php

namespace App\Repositories\Contracts;

interface QuestionRepositoryInterface
{
    public function getQuestionsByFormatTestId($test_id);

    public function getQuestion($id);

    public function getAnswerQuestionPartInTest($testId, $seedRandom = null);

    public function getComments($questionId);
}

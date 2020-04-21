<?php

namespace App\Repositories\Contracts;

interface QuestionRepositoryInterface
{
    public function getQuestionsByFormatTestId($test_id);

    public function getQuestion($id);
}

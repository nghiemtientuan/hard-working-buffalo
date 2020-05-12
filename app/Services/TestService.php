<?php

namespace App\Services;

use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;

class TestService
{
    protected $questionRepository;

    /**
     * PostService constructor.
     * @param QuestionRepository $questionRepository
     */
    public function __construct(
        QuestionRepository $questionRepository
    ) {
        $this->questionRepository = $questionRepository;
    }

    public function getAnswerQuestionPartInTest($testId)
    {
        return $this->questionRepository->getAnswerQuestionPartInTest($testId);
    }
}

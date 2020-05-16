<?php

namespace App\Services;

use App\Models\Answer;
use App\Models\History;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use App\Repositories\Contracts\HistoryRepositoryInterface as HistoryRepository;
use Illuminate\Support\Facades\Auth;

class TestService
{
    protected $questionRepository;
    protected $historyRepository;

    const FIRST_ANSWER_NAME = 'answerQuestion_';

    /**
     * PostService constructor.
     * @param QuestionRepository $questionRepository
     * @param HistoryRepository $historyRepository
     */
    public function __construct(
        QuestionRepository $questionRepository,
        HistoryRepository $historyRepository
    ) {
        $this->questionRepository = $questionRepository;
        $this->historyRepository = $historyRepository;
    }

    public function getAnswerQuestionPartInTest($testId)
    {
        return $this->questionRepository->getAnswerQuestionPartInTest($testId);
    }

    public function getResultTestAnswer($studentId, $testId, $request)
    {
        $userAnswer = [];
        $score = 0;
        $parts = $this->getAnswerQuestionPartInTest($testId);

        foreach ($parts as $part) {
            foreach ($part->questions as $question) {
                if (!count($question->answers) && count($question->childQuestions)) {
                    foreach ($question->childQuestions as $childQuestion) {
                        $userAnswer[] = $this->infoUserAnswer($childQuestion, $request);
                        $score += $this->checkCorrectAnswer($childQuestion, $request);
                    }
                } else {
                    $userAnswer[] = $this->infoUserAnswer($question, $request);
                    $score += $this->checkCorrectAnswer($question, $request);
                }
            }
        }

        $history = [
            History::STUDENT_ID_FIELD => $studentId,
            History::TEST_ID_FIELD => $testId,
            History::SCORE_FIELD => $score,
            History::USER_ANSWER_FIELD => json_encode($userAnswer),
        ];
        $history = $this->historyRepository->create($history);

        return $history->id;
    }

    public function infoUserAnswer($question, $request)
    {
        $info = [
            'question_id' => $question->id,
        ];

        if ($request->has(self::FIRST_ANSWER_NAME . $question->id)) {
            $info['choose_answer'] = $request->input(self::FIRST_ANSWER_NAME . $question->id);
        }

        return $info;
    }

    public function checkCorrectAnswer($question, $request)
    {
        if ($request->has(self::FIRST_ANSWER_NAME . $question->id)) {
            foreach ($question->answers as $answer) {
                if ($answer->correct_answer == Answer::CORRECT_ANSWER_VALUE &&
                    $answer->id == $request->input(self::FIRST_ANSWER_NAME . $question->id)) {
                    return 1;
                }
            }
        }

        return 0;
    }
}

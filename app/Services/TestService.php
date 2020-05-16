<?php

namespace App\Services;

use App\Models\Answer;
use App\Models\History;
use App\Models\Question;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use App\Repositories\Contracts\HistoryRepositoryInterface as HistoryRepository;
use App\Repositories\Contracts\TestRepositoryInterface as TestRepository;

class TestService
{
    protected $questionRepository;
    protected $historyRepository;
    protected $testRepository;

    const FIRST_ANSWER_NAME = 'answerQuestion_';

    /**
     * PostService constructor.
     * @param TestRepository $testRepository
     * @param QuestionRepository $questionRepository
     * @param HistoryRepository $historyRepository
     */
    public function __construct(
        TestRepository $testRepository,
        QuestionRepository $questionRepository,
        HistoryRepository $historyRepository
    ) {
        $this->testRepository = $testRepository;
        $this->questionRepository = $questionRepository;
        $this->historyRepository = $historyRepository;
    }

    public function getAnswerQuestionPartInTest($testId)
    {
        return $this->questionRepository->getAnswerQuestionPartInTest($testId);
    }

    public function getResultTestAnswer($studentId, $test, $request)
    {
        $userAnswer = [];
        $readingNumber = 0;
        $listeningNumber = 0;
        $parts = $this->getAnswerQuestionPartInTest($test->id);

        foreach ($parts as $part) {
            foreach ($part->questions as $question) {
                if (!count($question->answers) && count($question->childQuestions)) {
                    foreach ($question->childQuestions as $childQuestion) {
                        $userAnswer[] = $this->infoUserAnswer($childQuestion, $request);
                        switch ($childQuestion->type) {
                            case Question::CONTENT_TYPE:
                            case Question::IMAGE_TYPE:
                                $readingNumber += $this->checkCorrectAnswer($childQuestion, $request);
                                break;
                            case Question::AUDIO_ONE_TYPE:
                            case Question::AUDIO_MANY_TYPE:
                                $listeningNumber += $this->checkCorrectAnswer($childQuestion, $request);
                                break;
                        }
                    }
                } else {
                    $userAnswer[] = $this->infoUserAnswer($question, $request);
                    switch ($question->type) {
                        case Question::CONTENT_TYPE:
                        case Question::IMAGE_TYPE:
                            $readingNumber += $this->checkCorrectAnswer($question, $request);
                            break;
                        case Question::AUDIO_ONE_TYPE:
                        case Question::AUDIO_MANY_TYPE:
                            $listeningNumber += $this->checkCorrectAnswer($question, $request);
                            break;
                    }
                }
            }
        }

        $history = [
            History::STUDENT_ID_FIELD => $studentId,
            History::TEST_ID_FIELD => $test->id,
            History::READING_NUMBER_FIELD => $readingNumber,
            History::LISTENING_NUMBER_FIELD => $listeningNumber,
            History::SCORE_FIELD => getFormulaScore(
                $readingNumber,
                $listeningNumber,
                $test->total_question,
                $test->is_formula_score
            ),
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

    public function getHistory($history)
    {
        $parts = $this->getAnswerQuestionPartInTest($history->test_id);

        foreach ($parts as $keyPart => $part) {
            foreach ($part->questions as $keyQuestion => $question) {
                if (!count($question->answers) && count($question->childQuestions)) {
                    foreach ($question->childQuestions as $keyChildQuestion => $childQuestion) {
                        $parts[$keyPart]->questions[$keyQuestion]->childQuestions[$keyChildQuestion]->chooseQuestion =
                            $this->getCorrectAnswerHistory($history, $childQuestion->id);
                    }
                } else {
                    $parts[$keyPart]->questions[$keyQuestion]->chooseQuestion =
                        $this->getCorrectAnswerHistory($history, $question->id);
                }
            }
        }

        return $parts;
    }

    public function getCorrectAnswerHistory($history, $questionId)
    {
        $chooseAnswer = null;
        $userAnswers = json_decode($history->user_answer);

        for ($i = 0; $i < count($userAnswers); $i++) {
            if ($userAnswers[$i]->question_id == $questionId && property_exists($userAnswers[$i], 'choose_answer')) {
                $chooseAnswer = $userAnswers[$i]->choose_answer;
                break;
            }
        }

        return $chooseAnswer;
    }
}

<?php

namespace App\Services;

use App\Models\Answer;
use App\Models\File;
use App\Models\Question;
use App\Repositories\Contracts\FileRepositoryInterface as FileRepository;
use App\Repositories\Contracts\QuestionRepositoryInterface as QuestionRepository;
use App\Repositories\Contracts\AnswerRepositoryInterface as AnswerRepository;

class QuestionService
{
    protected $questionRepository;
    protected $fileRepository;
    protected $answerRepository;

    /**
     * PostService constructor.
     * @param QuestionRepository $questionRepository
     * @param FileRepository $fileRepository
     * @param AnswerRepository $answerRepository
     */
    public function __construct(
        QuestionRepository $questionRepository,
        FileRepository $fileRepository,
        AnswerRepository $answerRepository
    ) {
        $this->questionRepository = $questionRepository;
        $this->fileRepository = $fileRepository;
        $this->answerRepository = $answerRepository;
    }

    public function addSingleQuestion($data, $test_id, $parentKind=false)
    {
        $data[Question::TEST_ID_FIELD] = $test_id;
        switch ($data['type']) {
            case Question::IMAGE_TYPE:
                if (array_key_exists('image', $data) && $data['image']) {
                    $fileSave = $this->fileRepository->saveSingleImage(
                        $data['image'],
                        File::TEST_FOLDER . '/' . $test_id,
                        File::TYPE_QUESTION
                    );
                    $data[Question::FILE_ID_FIELD] = $fileSave->id;
                }
                break;
            case Question::AUDIO_ONE_TYPE:
            case Question::AUDIO_MANY_TYPE:
                if (array_key_exists('audio', $data) && $data['audio']) {
                    $fileSave = $this->fileRepository->saveSingleAudio(
                        $data['audio'],
                        File::TEST_FOLDER . '/' . $test_id,
                        File::TYPE_QUESTION
                    );
                    $data[Question::FILE_ID_FIELD] = $fileSave->id;
                }
                break;
        }

        $singleQuestion = $this->questionRepository->create($data);

        if (!$parentKind && array_key_exists('answers', $data) && count($data['answers'])) {
            foreach ($data['answers'] as $keyAnwer => $answer) {
                if ($data['correct_answer'] == $keyAnwer) {
                    $answer[Answer::CORRECT_ANSWER_FIELD] = Answer::CORRECT_ANSWER_VALUE;
                }
                $this->addSingleAnswer($answer, $test_id, $singleQuestion->id);
            }
        }

        return $singleQuestion;
    }

    public function addSingleAnswer($data, $test_id, $question_id)
    {
        $data[Answer::QUESTION_ID_FIELD] = $question_id;
        if (array_key_exists('file', $data)) {
            $fileSave = $this->fileRepository->saveSingleImage(
                $data['file'],
                File::TEST_FOLDER . '/' . $test_id,
                File::TYPE_ANSWER
            );
            $data[Answer::FILE_ID_FIELD] = $fileSave->id;
        }

        $this->answerRepository->create($data);
    }
}

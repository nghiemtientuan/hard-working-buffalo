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
        $data = $this->addQuestionFileWithType(null, File::TEST_FOLDER . '/' . $test_id, $data);

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

    public function updateSingleQuestion($question_id, $data, $parentKind=false)
    {
        $question = $this->questionRepository->find($question_id);
        $fileFolder = File::TEST_FOLDER . '/' . $question->test->id;
        if ($question) {
            $data = $this->addQuestionFileWithType(
                $question->file_id,
                $fileFolder,
                $data
            );

            $singleQuestion = $this->questionRepository->update($question_id, $data);

            if (!$parentKind && array_key_exists('answers', $data) && count($data['answers'])) {
                foreach ($data['answers'] as $keyAnwer => $answer) {
                    if ($data['correct_answer'] == $keyAnwer) {
                        $answer[Answer::CORRECT_ANSWER_FIELD] = Answer::CORRECT_ANSWER_VALUE;
                    } else {
                        $answer[Answer::CORRECT_ANSWER_FIELD] = Answer::FALSE_ANSWER_VALUE;
                    }
                    $this->updateSingleAnswer($fileFolder, $answer);
                }
            }

            return $singleQuestion;
        }
    }

    public function updateSingleAnswer($folder, $data)
    {
        $answer = $this->answerRepository->find($data['id']);
        if ($answer && array_key_exists('file', $data)) {
            $fileSave = $this->fileRepository->updateSingleImage(
                $answer->file_id,
                $data['file'],
                $folder,
                File::TYPE_ANSWER
            );
            $data[Answer::FILE_ID_FIELD] = $fileSave->id;
        }

        $this->answerRepository->update($data['id'], $data);
    }

    public function addQuestionFileWithType($oldFileId, $folder, $data)
    {
        switch ($data['type']) {
            case Question::IMAGE_TYPE:
                if (array_key_exists('image', $data) && $data['image']) {
                    $fileSave = $this->fileRepository->updateSingleImage(
                        $oldFileId,
                        $data['image'],
                        $folder,
                        File::TYPE_QUESTION
                    );
                    $data[Question::FILE_ID_FIELD] = $fileSave->id;
                }
                break;
            case Question::AUDIO_ONE_TYPE:
            case Question::AUDIO_MANY_TYPE:
                if (array_key_exists('audio', $data) && $data['audio']) {
                    $fileSave = $this->fileRepository->updateSingleAudio(
                        $oldFileId,
                        $data['audio'],
                        $folder,
                        File::TYPE_QUESTION
                    );
                    $data[Question::FILE_ID_FIELD] = $fileSave->id;
                }
                break;
        }

        return $data;
    }

    public function deleteQuestion($question_id)
    {
        $question = $this->questionRepository->find($question_id)->load([
            'childQuestions',
            'childQuestions.answers',
            'answers',
        ]);
        if ($question) {
            if ($question->file_id) {
                $this->fileRepository->deleteWithFile($question->file_id);
            }
            foreach ($question->childQuestions as $childQuestion) {
                $this->deleteQuestion($childQuestion->id);
            }
            foreach ($question->answers as $answer) {
                $this->deleteAnswer($answer->id);
            }
            $question->delete();
        }
    }

    public function deleteAnswer($answer_id)
    {
        $answer = $this->answerRepository->find($answer_id);
        if ($answer->file_id) {
            $this->fileRepository->deleteWithFile($answer->file_id);
        }
        $answer->delete();
    }
}

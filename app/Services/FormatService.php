<?php

namespace App\Services;

use App\Models\Part;
use App\Models\QuestionInPart;
use App\Repositories\Contracts\FormatRepositoryInterface as FormatRepository;
use App\Repositories\Contracts\PartRepositoryInterface as PartRepository;
use App\Repositories\Contracts\QuestionInPartRepositoryInterface as QuestionInPartRepository;

class FormatService
{
    protected $formatRepository;
    protected $questionInPartRepository;
    protected $partRepository;

    /**
     * PostService constructor.
     * @param FormatRepository $formatRepository
     * @param PartRepository $partRepository
     * @param QuestionInPartRepository $questionInPartRepository
     */
    public function __construct(
        FormatRepository $formatRepository,
        PartRepository $partRepository,
        QuestionInPartRepository $questionInPartRepository
    ) {
        $this->formatRepository = $formatRepository;
        $this->partRepository = $partRepository;
        $this->questionInPartRepository = $questionInPartRepository;
    }

    public function addSinglePart($formatId, $data) {
        $format = $this->formatRepository->find($formatId);
        if ($format) {
            $data[Part::FORMAT_ID_FIELD] = $formatId;
            $part = $this->partRepository->create($data);

            if (array_key_exists('addQuestion', $data) && count($data['addQuestion'])) {
                foreach ($data['addQuestion'] as $addQuestion) {
                    $this->addQuestion($part->id, $addQuestion);
                }
            }

            return $part;
        }

        return false;
    }

    public function editSinglePart($partId, $data) {
        if (array_key_exists('addQuestion', $data) && count($data['addQuestion'])) {
            foreach ($data['addQuestion'] as $addQuestion) {
                $this->addQuestion($partId, $addQuestion);
            }
        }

        if (array_key_exists('editQuestion', $data) && count($data['editQuestion'])) {
            foreach ($data['editQuestion'] as $editQuestion) {
                $this->editQuestion($editQuestion['id'], $editQuestion);
            }
        }

        if (array_key_exists('deleteQuestion', $data) && count($data['deleteQuestion'])) {
            foreach ($data['deleteQuestion'] as $deleteQuestionId) {
                $this->deleteSingleQuestion($deleteQuestionId);
            }
        }

        return true;
    }

    public function addQuestion($partId, $data) {
        $data[QuestionInPart::CHILD_QUESTIONS_FIELD] = $data['childQuestions'];
        $data[QuestionInPart::PART_ID_FIELD] = $partId;

        return $this->questionInPartRepository->create($data);
    }

    public function editQuestion($questionId, $data) {
        $data[QuestionInPart::CHILD_QUESTIONS_FIELD] = $data['childQuestions'];

        return $this->questionInPartRepository->update($questionId, $data);
    }

    public function deleteSingleQuestion($questionId) {
        $question = $this->questionInPartRepository->find($questionId);
        if ($question) {
            return $question->delete();
        }

        return false;
    }

    public function deleteSinglePart($partId) {
        $part = $this->partRepository->find($partId)->load(['questionFormats']);
        if ($part) {
            foreach ($part->questionFormats as $questionFormat) {
                $this->deleteSingleQuestion($questionFormat->id);
            }

            return $part->delete();
        }

        return false;
    }

    public function deleteFormat($formatId) {
        $format = $this->formatRepository->find($formatId)->load('parts');
        if ($format) {
            foreach ($format->parts as $part) {
                $this->deleteSinglePart($part->id);
            }

            return $format->delete();
        }

        return false;
    }
}

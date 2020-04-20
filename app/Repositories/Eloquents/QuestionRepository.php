<?php

namespace App\Repositories\Eloquents;

use App\Models\Part;
use App\Models\Question;
use App\Models\Test;
use App\Repositories\Contracts\QuestionRepositoryInterface;

class QuestionRepository extends EloquentRepository implements QuestionRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Question::class;
    }

    public function getQuestionsByFormatTestId($test_id)
    {
        $test = Test::find($test_id)->load([
            'format',
            'format.parts',
            'format.parts.questions' => function ($query) use ($test_id) {
                $query->where(Question::TEST_ID_FIELD, $test_id)->where(Question::PARENT_ID_FIELD, null);
            },
            'format.parts.questions.childQuestions',
        ]);
        $parts = [];
        $partIds = [];
        if ($test->format && count($test->format->parts)) {
            $partIds = $test->format->parts->pluck('id');
            $parts = $test->format->parts;
        }

        $freePart = new Part([Part::NAME_FIELD => Part::FREE_NAME_VALUE]);
        $freePart->questions = $this->_model->where(Question::TEST_ID_FIELD, $test_id)
            ->where('parent_id', null)
            ->with([
                'childQuestions',
                'part',
            ])
            ->where(function ($query) use ($partIds) {
                $query->doesntHave('part')
                    ->orWhereHas('part', function ($query) use ($partIds) {
                        $query->whereNotIn('parts.id', $partIds);
                    });
            })->get();
        $parts[] = $freePart;

        return $parts;
    }
}

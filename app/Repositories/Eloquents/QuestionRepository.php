<?php

namespace App\Repositories\Eloquents;

use App\Models\Part;
use App\Models\Question;
use App\Models\QuestionComment;
use App\Models\Test;
use App\Repositories\Contracts\QuestionRepositoryInterface;
use function Clue\StreamFilter\fun;
use function foo\func;

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

    public function getQuestionsByFormatTestId($testId)
    {
        $test = Test::find($testId)->load([
            'format',
            'format.parts',
            'format.parts.questions' => function ($query) use ($testId) {
                $query->where(Question::TEST_ID_FIELD, $testId)->where(Question::PARENT_ID_FIELD, null);
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
        $freePart->questions = $this->_model->where(Question::TEST_ID_FIELD, $testId)
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

    public function getAnswerQuestionPartInTest($testId, $seedRandom = null)
    {
        $test = Test::find($testId)->load([
            'format',
            'format.parts',
            'format.parts.questions' => function ($query) use ($testId, $seedRandom) {
                $query->where(Question::TEST_ID_FIELD, $testId)->where(Question::PARENT_ID_FIELD, null);
                if ($seedRandom) {
                    $query->inRandomOrder($seedRandom);
                }
            },
            'format.parts.questions.file',
            'format.parts.questions.answers' => function ($query) use ($seedRandom) {
                if ($seedRandom) {
                    $query->inRandomOrder($seedRandom);
                }
            },
            'format.parts.questions.childQuestions',
            'format.parts.questions.childQuestions.answers' => function ($query) use ($seedRandom) {
                if ($seedRandom) {
                    $query->inRandomOrder($seedRandom);
                }
            },
            'format.parts.questions.childQuestions.file',
        ]);
        $parts = [];
        if ($test->format && $test->format->parts && count($test->format->parts)) {
            return $test->format->parts;
        } else {
            $freePart = new Part([Part::NAME_FIELD => Part::FREE_NAME_VALUE]);

            $query = $this->_model->where(Question::TEST_ID_FIELD, $testId)
                ->where('parent_id', null)
                ->with([
                    'file',
                    'answers' => function ($query) use ($seedRandom) {
                        if ($seedRandom) {
                            $query->inRandomOrder($seedRandom);
                        }
                    },
                    'childQuestions',
                    'childQuestions.answers' => function ($query) use ($seedRandom) {
                        if ($seedRandom) {
                            $query->inRandomOrder($seedRandom);
                        }
                    },
                    'childQuestions.file',
                ]);
            if ($seedRandom) {
                $query->inRandomOrder($seedRandom);
            }
            $freePart->questions = $query->get();
            $parts[] = $freePart;

            return $parts;
        }
    }

    public function getQuestion($id)
    {
        return $this->_model->find($id)
            ->load([
                'childQuestions',
                'childQuestions.answers',
                'comments',
                'answers',
                'test',
            ]);
    }

    public function getComments($questionId)
    {
        $comments = QuestionComment::where(QuestionComment::QUESTION_ID_FIELD, $questionId)
            ->orderBy('created_at')
            ->paginate(config('constant.limit.comments'));

        foreach ($comments as $keyComment => $comment) {
            $comments[$keyComment]->user->avatar = userDefaultImage($comment->user->file);
        }

        return $comments;
    }
}

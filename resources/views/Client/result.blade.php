@extends('Client.master')

@section('title', trans('client.pages.result.testTitle') . $history->test->name)

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-4 mb-5">
                    <h2 class="section-title-underline mb-5">
                        <span>{{ $history->test->name }}</span>
                    </h2>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="icon-stars text-white"></span>
                        </div>
                        <div class="feature-1-content text-left pl-1 pr-1 pb-0">
                            <table class="table table-bordered table-framed mb-5">
                                <tbody>
                                    <tr>
                                        <th rowspan="2"></th>
                                        <th width="15%">{{ trans('client.pages.result.score') }}</th>
                                        <th width="15%">{{ trans('client.pages.result.reading') }}</th>
                                        <th width="15%">{{ trans('client.pages.result.listening') }}</th>
                                        <th width="15%">{{ trans('client.pages.result.duration') }}</th>
                                    </tr>
                                    <tr>
                                        <th>{{ $history->score }}@if ($history->test->is_formula_score == \App\Models\Test::IS_FORMULA_SCORE_TRUE)
                                                {{ '/ ' . config('constant.scoreTest.total_formula') }}
                                            @else
                                                {{ '/ ' . config('constant.scoreTest.total_not_formula') }}
                                            @endif
                                        </th>
                                        <th>{{ $history->reading_number }}</th>
                                        <th>{{ $history->listening_number }}</th>
                                        <th>{{ getHourMinuteSecond($history->duration) }}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="icon-book text-white"></span>
                        </div>
                        <div class="feature-1-content text-left pl-1 pr-1 pb-0">
                            @if ($history->test->is_show_answer == \App\Models\Test::IS_SHOW_ANSWER_FALSE)
                                <div class="text-center">{{ trans('client.pages.result.block_answer', ['day' => $history->test->day_show_answer]) }}</div>
                            @else
                                @php $indexQuestion = 0 @endphp
                                @foreach ($parts as $part)
                                    <div class="alert alert-dark p-2">
                                        <label class="text-semibold">{{ trans('client.pages.getTest.text_part') . ' ' . $part->name }}: {{ $part->description }}</label>
                                    </div>

                                    @foreach ($part->questions as $question)
                                        @if (!count($question->answers) && count($question->childQuestions))
                                            <div class="form-group">
                                                <div class="alert alert-success p-2">
                                                    <label class="text-semibold">
                                                        {{ trans('client.pages.getTest.text_big_question') }}: ({{ $question->code }}) {{ $question->content }}
                                                    </label>
                                                </div>

                                                <div class="row">
                                                    @foreach ($question->childQuestions as $childQuestion)
                                                        @php $indexQuestion++ @endphp
                                                        <div class="form-group col-lg-12">
                                                            <div class="alert alert-info p-2">
                                                                <label class="text-semibold">
                                                                    {{ trans('client.pages.getTest.text_question') }} {{ $indexQuestion }}: ({{ $childQuestion->code }}) {{ $childQuestion->content }}
                                                                </label>
                                                                <div class="question_content_file">
                                                                    @switch ($childQuestion->type)
                                                                        @case (\App\Models\Question::IMAGE_TYPE)
                                                                            <img src="{{ $childQuestion->file->base_folder }}">
                                                                            @break
                                                                        @case (\App\Models\Question::AUDIO_ONE_TYPE)
                                                                            <audio src="{{ $childQuestion->file->base_folder }}" controls></audio>
                                                                            @break
                                                                        @case (\App\Models\Question::AUDIO_MANY_TYPE)
                                                                            <audio src="{{ $childQuestion->file->base_folder }}" controls></audio>
                                                                            @break
                                                                        @default @break
                                                                    @endswitch
                                                                </div>
                                                            </div>

                                                            <div class="row">
                                                                @foreach ($childQuestion->answers as $answer)
                                                                    <div class="col-md-6">
                                                                        <div class="icheck-material-@if($answer->correct_answer == \App\Models\Answer::CORRECT_ANSWER_VALUE){{ 'green' }}@else{{ 'red' }}@endif pl-2">
                                                                            <input
                                                                                type="radio"
                                                                                id="question_{{ $childQuestion->id }}_answerInput_{{ $answer->id }}"
                                                                                value="{{ $answer->id }}"
                                                                                disabled
                                                                                @if ($answer->correct_answer == \App\Models\Answer::CORRECT_ANSWER_VALUE || $childQuestion->chooseQuestion == $answer->id) checked @endif
                                                                            />
                                                                            <label for="question_{{ $childQuestion->id }}_answerInput_{{ $answer->id }}">{{ $answer->content }}</label>
                                                                        </div>
                                                                    </div>
                                                                @endforeach
                                                            </div>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            </div>

                                            <hr />
                                        @else
                                            @php $indexQuestion++ @endphp
                                            <div class="form-group">
                                                <div class="alert alert-info p-2">
                                                    <label class="text-semibold">
                                                        {{ trans('client.pages.getTest.text_question') }} {{ $indexQuestion }}: ({{ $question->code }}) {{ $question->content }}
                                                    </label>
                                                    <div class="question_content_file">
                                                        @switch ($question->type)
                                                            @case (\App\Models\Question::IMAGE_TYPE)
                                                                <img src="{{ $question->file->base_folder }}">
                                                                @break
                                                            @case (\App\Models\Question::AUDIO_ONE_TYPE)
                                                                <audio src="{{ $question->file->base_folder }}"></audio>
                                                                @break
                                                            @case (\App\Models\Question::AUDIO_MANY_TYPE)
                                                                <audio src="{{ $question->file->base_folder }}"></audio>
                                                                @break
                                                            @default @break
                                                        @endswitch
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    @foreach ($question->answers as $answer)
                                                        <div class="col-md-6">
                                                            <div class="icheck-material-@if($answer->correct_answer == \App\Models\Answer::CORRECT_ANSWER_VALUE){{ 'green' }}@else{{ 'red' }}@endif pl-2">
                                                                <input
                                                                    type="radio"
                                                                    id="question_{{ $question->id }}_answerInput_{{ $answer->id }}"
                                                                    value="{{ $answer->id }}"
                                                                    disabled
                                                                    @if ($answer->correct_answer == \App\Models\Answer::CORRECT_ANSWER_VALUE || $question->chooseQuestion == $answer->id) checked @endif
                                                                />
                                                                <label for="question_{{ $question->id }}_answerInput_{{ $answer->id }}">{{ $answer->content }}</label>
                                                            </div>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            </div>
                                            <hr />
                                        @endif
                                    @endforeach
                                @endforeach
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

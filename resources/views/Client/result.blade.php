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
                                        <th rowspan="2"><div class="w-30 m-auto font-size-65">{!! getRankingNumberOrder($history->rank) !!}</div></th>
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
                                                    <div class="close d-flex">
                                                        <a
                                                            href="#"
                                                            class="mr-5 showCommentsBtn"
                                                            type="button"
                                                            data-popup="tooltip"
                                                            data-toggle="modal"
                                                            data-target="#commentsList"
                                                            data-questionId="{{ $question->id }}"
                                                            title="{{ trans('client.pages.result.comments') }}"
                                                        >
                                                            <em class="fa fa-comment-alt"></em>
                                                        </a>
                                                    </div>
                                                    <label class="text-semibold">
                                                        {{ trans('client.pages.getTest.text_big_question') }}: ({{ $question->code }}) {{ $question->content }}
                                                    </label>
                                                </div>

                                                <div class="row">
                                                    @foreach ($question->childQuestions as $childQuestion)
                                                        @php $indexQuestion++ @endphp
                                                        <div class="form-group col-lg-12">
                                                            <div class="alert alert-info p-2">
                                                                <div class="close d-flex">
                                                                    <a
                                                                        href="#"
                                                                        class="mr-5 showCommentsBtn"
                                                                        type="button"
                                                                        data-popup="tooltip"
                                                                        data-toggle="modal"
                                                                        data-target="#commentsList"
                                                                        data-questionId="{{ $childQuestion->id }}"
                                                                        title="{{ trans('client.pages.result.comments') }}"
                                                                    >
                                                                        <em class="fa fa-comment-alt"></em>
                                                                    </a>
                                                                </div>
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
                                                    <div class="close d-flex">
                                                        <a
                                                            href="#"
                                                            class="mr-5 showCommentsBtn"
                                                            type="button"
                                                            data-popup="tooltip"
                                                            data-toggle="modal"
                                                            data-target="#commentsList"
                                                            data-questionId="{{ $question->id }}"
                                                            title="{{ trans('client.pages.result.comments') }}"
                                                        >
                                                            <em class="fa fa-comment-alt"></em>
                                                        </a>
                                                    </div>
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

    {{--  comments  --}}
    <div id="commentsList" class="modal fade">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="alert alert-dark p-2">
                        <label class="text-semibold">{{ trans('client.pages.result.direction') }}<span id="directionContent"></span></label>
                    </div>
                    <div id="commentsListDiv"></div>
                    <div id="commentItemExample" class="commentItem d-none">
                        <div class="col-2">
                            <img src="#" class="commentItem-content-avatar rounded-circle width-70">
                        </div>
                        <div class="col-10">
                            <div>
                                <code class="commentItem-infoAdd-username"></code><br />
                                <small class="commentItem-infoAdd-time"></small>
                                <a href="#" class="commentItem-infoAdd-linkDelete" data-popup="tooltip" title="{{ trans('client.pages.result.delete') }}">
                                    <i class="fas fa-trash"></i>
                                </a>
                            </div>
                            <div>
                                <div class="commentItem-content-content"></div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div id="newCommentWrite" class="d-flex">
                        <div class="col-10">
                            <textarea id="newContentComment" class="form-control" cols="60" rows="3" maxlength="500"></textarea>
                        </div>
                        <div class="col-2">
                            <button id="newContentSend" class="btn btn-primary">{{ trans('client.pages.result.send') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{--  end comments  --}}

    {{--  evaluation  --}}
    @if (Session::has('showEvaluation') && Session::get('showEvaluation') == true)
        <div id="testEvaluation" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="form-group text-center">
                            <label class="font-weight-600 mt-20">{{ trans('client.pages.result.result_evaluation_congratulation') }}</label>
                            <label class="font-weight-600">{{ trans('client.pages.result.result_evaluation_text') }}</label>
                            <div class="form-group m-form__group divEmotions">
                                <input type="hidden" id="value_evaluation" value="{{ config('constant.test_evaluation_icons.default_selected') }}">

                                <ul class="list-inline">
                                    @foreach(config('constant.test_evaluation_icons.src') as $value => $imageSrc)
                                        <li class="list-inline-item radioEmotion mr-2">
                                            <input type="radio" name="evaluation_value" id="emotion_{{ $value }}" value="{{ $value }}" class="input-hidden"
                                                @if($value == config('constant.test_evaluation_icons.default_selected')){{ 'checked' }}@endif
                                            />
                                            <label id="emotion_{{ $value }}" for="emotion_{{ $value }}">
                                                <img src="{{ asset($imageSrc) }}" width="50px"
                                                     class="hoverEvaluation @if($value == config('constant.test_evaluation_icons.default_selected')){{ 'selectDefault' }}@endif"
                                                     data-inputId="emotion_{{ $value }}"
                                                     data-image="{{ asset($imageSrc) }}"
                                                     data-imageChange="{{
                                                        isset(config('constant.test_evaluation_icons.changeSrc')[$value])
                                                        ? asset(config('constant.test_evaluation_icons.changeSrc')[$value])
                                                        : asset($imageSrc) }}
                                                     "
                                                     alt=""
                                                >
                                            </label>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                            <div>
                                <textarea id="description" class="form-control" cols="30" rows="3"></textarea>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button
                                id="submitEvaluation"
                                data-historyId="{{ $history->id }}"
                                type="submit"
                                class="btn btn-primary"
                                data-dismiss="modal"
                            >{{ trans('client.pages.evaluation') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif
    {{--  end evaluation  --}}
@endsection

@section('script')
    <script src="{{ asset('js/Client/commentResult.js') }}"></script>
    @if (Session::has('showEvaluation') && Session::get('showEvaluation') == true)
        <script src="{{ asset('js/Client/result.js') }}"></script>
    @endif
@endsection

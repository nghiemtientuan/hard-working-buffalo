@extends('Client.master')

@section('title', trans('client.pages.getTest.test') . $test->name)

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-25">
        <div class="row justify-content-center text-center pl-10 m-0">
            <div class="col-lg-12 mb-5 pb-10">
                <h2 class="section-title-underline">
                    <span>{{ $test->name }}</span>
                </h2>
            </div>
        </div>

        <div class="row m-0">
            <div class="col-lg-12">
                <div class="feature-1 border">
                    <div class="icon-wrapper bg-primary">
                        <span class="icon-book text-white"></span>
                    </div>
                    <div class="feature-1-content text-left pl-1 pr-1 pb-0">
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
                                                <a href="{{ route('admin.questions.edit', $question->id) }}" class="mr-5 btn btn-link" data-popup="tooltip" title="{{ trans('client.pages.edit') }}">
                                                    <em class="icon-pencil"></em>
                                                </a>
                                                <button
                                                    class="btn btn-link p-0 b-none commentsBtn"
                                                    data-popup="tooltip"
                                                    title="{{ trans('client.pages.comments') }}"
                                                    data-urlComments="{{ route('client.api.questions.getComments', $question->id) }}"
                                                    data-toggle="modal"
                                                    data-target="#commentsModal"
                                                >
                                                    <em class="icon-comment"></em>
                                                </button>
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
                                                            <a href="{{ route('admin.questions.edit', $childQuestion->id) }}" class="mr-5 btn btn-link" data-popup="tooltip" title="{{ trans('client.pages.edit') }}">
                                                                <em class="icon-pencil"></em>
                                                            </a>
                                                            <button
                                                                class="btn btn-link p-0 b-none commentsBtn"
                                                                data-popup="tooltip"
                                                                title="{{ trans('client.pages.comments') }}"
                                                                data-urlComments="{{ route('client.api.questions.getComments', $childQuestion->id) }}"
                                                                data-toggle="modal"
                                                                data-target="#commentsModal"
                                                            >
                                                                <em class="icon-comment"></em>
                                                            </button>
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
                                                                <div class="icheck-material-green pl-2">
                                                                    <input
                                                                        type="radio"
                                                                        id="question_{{ $childQuestion->id }}_answerInput_{{ $answer->id }}"
                                                                        disabled
                                                                        @if ($answer->correct_answer == \App\Models\Answer::CORRECT_ANSWER_VALUE) checked @endif
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
                                                <a href="{{ route('admin.questions.edit', $question->id) }}" class="mr-5 btn btn-link" data-popup="tooltip" title="{{ trans('client.pages.edit') }}">
                                                    <em class="icon-pencil"></em>
                                                </a>
                                                <button
                                                    class="btn btn-link p-0 b-none commentsBtn"
                                                    data-popup="tooltip"
                                                    title="{{ trans('client.pages.comments') }}"
                                                    data-urlComments="{{ route('client.api.questions.getComments', $question->id) }}"
                                                    data-toggle="modal"
                                                    data-target="#commentsModal"
                                                >
                                                    <em class="icon-comment"></em>
                                                </button>
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
                                                    <div class="icheck-material-green pl-2">
                                                        <input
                                                            type="radio"
                                                            id="question_{{ $question->id }}_answerInput_{{ $answer->id }}"
                                                            disabled
                                                            @if ($answer->correct_answer == \App\Models\Answer::CORRECT_ANSWER_VALUE) checked @endif
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
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>

    <div id="commentsModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-success">
                    <h5>{{ trans('client.pages.getTest.comments') }}</h5>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body">
                    <div class="alert alert-dark p-2">
                        <label class="text-semibold">tgdr</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset('js/Client/getResultTest.js') }}"></script>
@endsection

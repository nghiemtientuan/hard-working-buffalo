@extends('Client.master')

@section('title', trans('client.pages.getTest.test') . $test->name)

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-25">
        <div class="row justify-content-center text-center pl-10 m-0">
            <div class="col-lg-10 mb-5 pb-10">
                <h2 class="section-title-underline">
                    <span>{{ $test->name }}</span>
                </h2>
            </div>
            <div class="col-lg-2"></div>
        </div>

        <form id="form_test" action="{{ route('client.tests.result', $test->id) }}" method="POST">
            @csrf

            <div class="row pl-10 m-0">
                <div class="col-lg-10">
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
                                                                    <div class="icheck-material-red pl-2">
                                                                        <input
                                                                            type="radio"
                                                                            id="question_{{ $childQuestion->id }}_answerInput_{{ $answer->id }}"
                                                                            name="answerQuestion_{{ $childQuestion->id }}"
                                                                            data-indexQuestion="{{ $indexQuestion }}"
                                                                            value="{{ $answer->id }}"
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
                                                        <div class="icheck-material-red pl-2">
                                                            <input
                                                                type="radio"
                                                                id="question_{{ $question->id }}_answerInput_{{ $answer->id }}"
                                                                name="answerQuestion_{{ $question->id }}"
                                                                data-indexQuestion="{{ $indexQuestion }}"
                                                                value="{{ $answer->id }}"
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

                            <input id="durationInput" type="hidden" name="duration" />
                            <div class="form-group text-center">
                                <input type="submit" value="{{ trans('client.pages.getTest.send') }}" class="btn btn-primary btn-lg px-5">
                            </div>
                        </div>
                    </div>
                </div>

                <div id="myHeader" class="col-lg-2 p-0" data-guide="{{ $test->guide }}">
                    <div class="feature-1 border position-fixed w-20">
                        <div class="icon-wrapper bg-primary">
                            <span class="icon-timer text-white"></span>
                        </div>
                        <div class="feature-1-content text-left pl-1 pr-1 background-primary pt-30 pb-0">
                            <div id="clockDiv" data-testId="{{ $test->id }}" data-execute_time="{{ $test->execute_time }}"></div>
                            <div id="hightlightQuestion" class="fs-10">
                                <table class="table table-bordered">
                                    <tbody>
                                        @for ($index = 1; $index < $indexQuestion; $index++)
                                            @if ($index % 10 == 1)<tr>@endif
                                                <th id="questionHighlightTh_{{ $index }}" class="p-0" width="10%">{{ $index }}</th>
                                            @if ($index % 10 == 0)</tr>@endif
                                        @endfor
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="site-section pb-0"></div>
@endsection

@section('script')
    <script src="{{ asset('js/Client/getTest.js') }}"></script>
@endsection

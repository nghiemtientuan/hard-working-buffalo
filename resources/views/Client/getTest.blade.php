@extends('Client.master')

@section('title', trans('client.pages.getTest.test') . $test->name)

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-20">
        <div class="row justify-content-center text-center pl-10">
            <div class="col-lg-10 mb-5 pb-10">
                <h2 class="section-title-underline">
                    <span>{{ $test->name }}</span>
                </h2>
            </div>
            <div class="col-lg-2"></div>
        </div>

        <form id="form_test" action="#" method="POST">
            @csrf

            <div class="row pl-10">
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
                                                        </div>

                                                        <div class="row">
                                                            @foreach ($childQuestion->answers as $answer)
                                                                <div class="col-md-6">
                                                                    <div class="icheck-material-red pl-2">
                                                                        <input type="radio"
                                                                               id="answer_"
                                                                        />
                                                                        <label for="answer_">{{ $answer->content }}</label>
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
                                            </div>

                                            <div class="row">
                                                @foreach ($question->answers as $answer)
                                                    <div class="col-md-6">
                                                        <div class="icheck-material-red pl-2">
                                                            <input type="radio"
                                                                   id="answer_"
                                                            />
                                                            <label for="answer_">{{ $answer->content }}</label>
                                                        </div>
                                                    </div>
                                                @endforeach
                                            </div>
                                        </div>
                                        <hr />
                                    @endif
                                @endforeach
                            @endforeach

                            <div class="form-group text-center">
                                <input type="submit" value="{{ trans('client.pages.getTest.send') }}" class="btn btn-primary btn-lg px-5">
                            </div>
                        </div>
                    </div>
                </div>

                <div id="myHeader" class="col-lg-2">
                    <div class="feature-1 border position-fixed w-20">
                        <div class="icon-wrapper bg-primary">
                            <span class="icon-timer text-white"></span>
                        </div>
                        <div class="feature-1-content text-left pl-1 pr-1 background-primary">
                            <div id="clockDiv"
                                 data-execute_time="60"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="site-section pb-0"></div>
@endsection

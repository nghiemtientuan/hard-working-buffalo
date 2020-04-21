@extends('Admin.master')

@section('title', trans('backend.pages.test.list_tests'))

@section('progress_bar')
    <li><a href="#"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li><a href="{{ route('admin.tests.index') }}">{{ trans('backend.pages.test.list_tests') }}</a></li>
    <li class="active">{{ $test->name }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <fieldset class="content-group">
                <legend class="text-bold">{{ $test->name }}</legend>

                <div class="content-group-sm">
                    <h5 class="text-semibold no-margin">({{ $test->code }}) - {{ $test->name }}</h5>
                    <span class="display-block">
                        <label class="label label-success">{{ trans('backend.pages.questionInTest.free') }}</label>
                        <label class="label label-primary">{{ trans('backend.pages.questionInTest.publish') }}</label>
                        <label class="label label-default">{{ $test->created_at }}</label>
                    </span>
                    <span class="display-block">{{ $test->guide }}</span>
                    <span class="display-block">{{ trans('backend.pages.questionInTest.number_questions') }} : {{ $test->total_question }} / {{ count($test->questions) }}</span>
                    <span class="display-block">{{ trans('backend.pages.questionInTest.execute_time') }} : {{ $test->execute_time }}'</span>
                </div>

                <div class="form-group">
                    <div class="text-right">
                        <a href="#" class="btn btn-primary mr-5">{{ trans('backend.pages.questionInTest.create_question') }}</a>
                        <a href="#" class="btn btn-success">{{ trans('backend.pages.questionInTest.import_question') }}</a>
                    </div>
                </div>
                <hr />

                @php $keyQuestion = 0 @endphp
                @foreach ($parts as $part)
                    {{ $part->name }}
                    @foreach ($part->questions as $question)
                        @if (count($question->childQuestions))
                            <div class="form-group">
                                <div class="alert alert-info mb-10 pb-5 pl-10">
                                    <a href="{{ route('admin.questions.edit', $question->id) }}" type="button" class="close"><i class="icon-pencil7"></i></a>
                                    <label class="text-semibold">{{ trans('backend.pages.questionInTest.bigQuestion') }} - {{ $question->code }}: {{ $question->content }}</label>
                                    @switch($question->type)
                                        @case(\App\Models\Question::IMAGE_TYPE)
                                            <br />
                                            <img class="image_question" src="{{ $question->file->base_folder }}" alt="">
                                            @break
                                        @case(\App\Models\Question::AUDIO_ONE_TYPE)
                                        @case(\App\Models\Question::AUDIO_MANY_TYPE)
                                            <br />
                                            <audio src="{{ $question->file->base_folder }}" controls></audio>
                                            @break
                                    @endswitch
                                </div>

                                <div class="row pl-40 pr-10">
                                    @foreach ($question->childQuestions as $childQuestion)
                                        @php $keyQuestion++ @endphp
                                        <div class="form-group">
                                            <div class="alert alert-success mb-10 pb-5 pl-10">
                                                <a href="{{ route('admin.questions.edit', $childQuestion->id) }}" type="button" class="close"><i class="icon-pencil7"></i></a>
                                                <label class="text-semibold">{{ trans('backend.pages.questionInTest.question') }} {{ $keyQuestion }} - {{ $childQuestion->code }}: {{ $childQuestion->content }}</label>
                                                @switch($childQuestion->type)
                                                    @case(\App\Models\Question::IMAGE_TYPE)
                                                        <br />
                                                        <img class="image_question" src="{{ $childQuestion->file->base_folder }}" alt="">
                                                        @break
                                                    @case(\App\Models\Question::AUDIO_ONE_TYPE)
                                                    @case(\App\Models\Question::AUDIO_MANY_TYPE)
                                                        <br />
                                                        <audio src="{{ $childQuestion->file->base_folder }}" controls></audio>
                                                        @break
                                                @endswitch
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @else
                            @php $keyQuestion++ @endphp
                            <div class="form-group">
                                <div class="alert alert-info mb-10 pb-5 pl-10">
                                    <a href="{{ route('admin.questions.edit', $question->id) }}" type="button" class="close"><i class="icon-pencil7"></i></a>
                                    <label class="text-semibold">{{ trans('backend.pages.questionInTest.question') }} {{ $keyQuestion }} - {{ $question->code }}: {{ $question->content }}</label>
                                    @switch($question->type)
                                        @case(\App\Models\Question::IMAGE_TYPE)
                                            <br />
                                            <img class="image_question" src="{{ $question->file->base_folder }}" alt="">
                                            @break
                                        @case(\App\Models\Question::AUDIO_ONE_TYPE)
                                        @case(\App\Models\Question::AUDIO_MANY_TYPE)
                                            <br />
                                            <audio src="{{ $question->file->base_folder }}" controls></audio>
                                            @break
                                    @endswitch
                                </div>
                            </div>
                        @endif
                    @endforeach
                @endforeach
            </fieldset>
        </div>
    </div>
@endsection

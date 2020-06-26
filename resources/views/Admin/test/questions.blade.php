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
                        <a href="{{ route('admin.questions.create', $test->id) }}" class="btn btn-primary mr-5">{{ trans('backend.pages.questionInTest.create_question') }}</a>
                        <a href="{{ route('admin.tests.questions.getImport', $test->id) }}" class="btn btn-success">{{ trans('backend.pages.questionInTest.import_question') }}</a>
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
                                    <div class="close d-flex">
                                        <a href="{{ route('admin.questions.edit', $question->id) }}" class="mr-5" type="button" data-popup="tooltip" title="{{ trans('backend.pages.edit') }}">
                                            <em class="icon-pencil7"></em>
                                        </a>
                                        <form method="POST" action="{{ route('admin.questions.destroy', $question->id) }}">
                                            @method('DELETE')
                                            @csrf
                                            <button class="btn btn-link p-0 b-none deleteQuestionBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                                                <em class="icon-trash"></em>
                                            </button>
                                        </form>
                                    </div>
                                    <label class="text-semibold">{{ trans('backend.pages.questionInTest.bigQuestion') }} - {{ $question->code }}: {{ $question->content }}</label>
                                    @switch($question->type)
                                        @case(\App\Models\Question::IMAGE_TYPE)
                                            <br />
                                            @if ($question->file)<img class="image_question" src="{{ $question->file->base_folder }}" alt="">@endif
                                            @break
                                        @case(\App\Models\Question::AUDIO_ONE_TYPE)
                                        @case(\App\Models\Question::AUDIO_MANY_TYPE)
                                            <br />
                                            @if ($question->file)<audio src="{{ $question->file->base_folder }}" controls></audio>@endif
                                            @break
                                    @endswitch
                                </div>

                                <div class="row pl-40 pr-10">
                                    @foreach ($question->childQuestions as $childQuestion)
                                        @php $keyQuestion++ @endphp
                                        <div class="form-group">
                                            <div class="alert alert-success mb-10 pb-5 pl-10">
                                                <div class="close d-flex">
                                                    <a href="{{ route('admin.questions.edit', $childQuestion->id) }}" class="mr-5" type="button" data-popup="tooltip" title="{{ trans('backend.pages.edit') }}">
                                                        <em class="icon-pencil7"></em>
                                                    </a>
                                                    <form method="POST" action="{{ route('admin.questions.destroy', $childQuestion->id) }}">
                                                        @method('DELETE')
                                                        @csrf
                                                        <button class="btn btn-link p-0 b-none deleteQuestionBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                                                            <em class="icon-trash"></em>
                                                        </button>
                                                    </form>
                                                </div>
                                                <label class="text-semibold">{{ trans('backend.pages.questionInTest.question') }} {{ $keyQuestion }} - {{ $childQuestion->code }}: {{ $childQuestion->content }}</label>
                                                @switch($childQuestion->type)
                                                    @case(\App\Models\Question::IMAGE_TYPE)
                                                        <br />
                                                        @if ($childQuestion->file)<img class="image_question" src="{{ $childQuestion->file->base_folder }}" alt="">@endif
                                                        @break
                                                    @case(\App\Models\Question::AUDIO_ONE_TYPE)
                                                    @case(\App\Models\Question::AUDIO_MANY_TYPE)
                                                        <br />
                                                        @if ($childQuestion->file)<audio src="{{ $childQuestion->file->base_folder }}" controls></audio>@endif
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
                                    <div class="close d-flex">
                                        <a href="{{ route('admin.questions.edit', $question->id) }}" class="mr-5" type="button" data-popup="tooltip" title="{{ trans('backend.pages.edit') }}">
                                            <em class="icon-pencil7"></em>
                                        </a>
                                        <form method="POST" action="{{ route('admin.questions.destroy', $question->id) }}">
                                            @method('DELETE')
                                            @csrf
                                            <button class="btn btn-link p-0 b-none deleteQuestionBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                                                <em class="icon-trash"></em>
                                            </button>
                                        </form>
                                    </div>
                                    <label class="text-semibold">{{ trans('backend.pages.questionInTest.question') }} {{ $keyQuestion }} - {{ $question->code }}: {{ $question->content }}</label>
                                    @switch($question->type)
                                        @case(\App\Models\Question::IMAGE_TYPE)
                                            <br />
                                            @if ($question->file)<img class="image_question" src="{{ $question->file->base_folder }}" alt="">@endif
                                            @break
                                        @case(\App\Models\Question::AUDIO_ONE_TYPE)
                                        @case(\App\Models\Question::AUDIO_MANY_TYPE)
                                            <br />
                                            @if ($question->file)<audio src="{{ $question->file->base_folder }}" controls></audio>@endif
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

@section('script')
    <script src="{{ asset('js/Admin/list_question_in_test.js') }}"></script>
@endsection

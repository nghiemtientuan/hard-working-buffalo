@extends('Admin.master')

@section('title', trans('backend.pages.editQuestion.edit_question'))

@section('progress_bar')
    <li><a href="{{ route('admin.home') }}"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li><a href="{{ route('admin.tests.index') }}">{{ trans('backend.pages.test.list_tests') }}</a></li>
    <li><a href="{{ route('admin.tests.questions.index', $question->test->id) }}">{{ $question->test->name }}</a></li>
    <li class="active">{{ trans('backend.pages.editQuestion.question') . ' - ' . $question->code }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <form class="form-horizontal" method="POST" action="{{ route('admin.questions.update', $question->id) }}" enctype="multipart/form-data">
                @csrf
                @method('PUT')

                <fieldset class="content-group">
                    <legend class="text-bold">{{ trans('backend.pages.editQuestion.question') }} - {{ $question->code }}</legend>

                    @if (count($question->childQuestions))
                        <div class="form-group">
                            <div id="parentQuestion" class="alert alert-info mb-10 pb-5 pl-10">
                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.code') }}</label>
                                    <div class="col-lg-9">
                                        <input type="text" class="form-control" value="{{ $question->code }}" disabled>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.suggest') }}</label>
                                    <div class="col-lg-11">
                                        <input name="suggest" type="text" class="form-control" value="{{ $question->suggest }}">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.content') }}</label>
                                    <div class="col-lg-11">
                                        <input name="content" type="text" class="form-control" value="{{ $question->content }}">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.part') }}</label>
                                    <div class="col-lg-11">
                                        <select name="part_id" class="form-control">
                                            @foreach ($parts as $part)
                                                <option
                                                    value="{{ $part->id }}"
                                                    @if ($question->part_id == $part->id)
                                                        selected
                                                    @endif
                                                >{{ $part->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.question_type') }}</label>
                                    <div class="col-lg-11">
                                        <select name="type" class="form-control">
                                            <option
                                                value="{{ \App\Models\Question::CONTENT_TYPE }}"
                                                @if ($question->type == \App\Models\Question::CONTENT_TYPE)
                                                    selected
                                                @endif
                                            >
                                                {{ trans('backend.pages.editQuestion.text') }}
                                            </option>
                                            <option
                                                value="{{ \App\Models\Question::IMAGE_TYPE }}"
                                                @if ($question->type == \App\Models\Question::IMAGE_TYPE)
                                                    selected
                                                @endif
                                            >
                                                {{ trans('backend.pages.editQuestion.image') }}
                                            </option>
                                            <option
                                                value="{{ \App\Models\Question::AUDIO_ONE_TYPE }}"
                                                @if ($question->type == \App\Models\Question::AUDIO_ONE_TYPE)
                                                    selected
                                                @endif
                                            >
                                                {{ trans('backend.pages.editQuestion.audio_one_time') }}
                                            </option>
                                            <option
                                                value="{{ \App\Models\Question::AUDIO_MANY_TYPE }}"
                                                @if ($question->type == \App\Models\Question::AUDIO_MANY_TYPE)
                                                    selected
                                                @endif
                                            >
                                                {{ trans('backend.pages.editQuestion.audio_many_time') }}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                @if ($question->type != \App\Models\Question::CONTENT_TYPE)
                                    <div class="form-group">
                                        <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.file') }}</label>
                                        <div class="col-lg-11">
                                            @if ($question->type == \App\Models\Question::IMAGE_TYPE)
                                                <img class="image_question" src="{{ $question->file->base_folder }}" alt="">
                                            @else
                                                <audio src="{{ $question->file->base_folder }}" controls></audio>
                                            @endif
                                        </div>
                                    </div>
                                @endif

                                <div class="form-group imageDiv @if ($question->type != \App\Models\Question::IMAGE_TYPE) hidden @endif">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.image') }}</label>
                                    <div class="col-lg-4">
                                        <input name="image" type="file" class="file-input" data-show-caption="false" data-show-upload="false"
                                               data-browse-class="btn btn-primary btn-sm" data-remove-class="btn btn-default btn-sm" accept="image/*">
                                    </div>
                                </div>

                                <div class="form-group audioDiv @if ($question->type != \App\Models\Question::AUDIO_ONE_TYPE && $question->type != \App\Models\Question::AUDIO_MANY_TYPE) hidden @endif">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.audio') }}</label>
                                    <div class="col-lg-4">
                                        <input name="audio" type="file" />
                                    </div>
                                </div>

                                <div id="childQuestionNumberDiv" class="form-group">
                                    <label class="col-lg-10">{{ trans('backend.pages.editQuestion.childQuestionNumber') }} : <span id="showChildQuestionNumber">{{ count($question->childQuestions) }}</span></label>
                                </div>
                            </div>

                            <span id="childQuestionDeleteSpan"></span>
                            <input type="hidden" id="childQuestionsNumber" value="{{ count($question->childQuestions) }}">
                            <div id="list-childQuestion">
                                @foreach ($question->childQuestions as $childQuestion)
                                    <div id="childQuestion_{{ $childQuestion->id }}" class="row pl-40 pr-10">
                                        <div class="form-group">
                                            <div class="alert alert-success mb-10 pb-5 pl-10">
                                                <div class="form-group">
                                                    <button type="button" data-oldQuestionDeleteId="{{ $childQuestion->id }}" data-childQuestionId="childQuestion_{{ $childQuestion->id }}" class="close btn btn-link childQuestion_delete"><span>&times;</span></button>
                                                </div>

                                                <input type="hidden" name="childQuestion[{{ $childQuestion->id }}][id]" value="{{ $childQuestion->id }}">

                                                <div class="form-group">
                                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.code') }}</label>
                                                    <div class="col-lg-9">
                                                        <input type="text" class="form-control childQuestion_code" value="{{ $childQuestion->code }}" disabled>
                                                    </div>
                                                    <div class="col-lg-2">
                                                        <button class="btn btn-success randomCodeBtn hidden" data-childQuestionId="childQuestion_{{ $childQuestion->id }}">{{ trans('backend.pages.addQuestion.random_code') }}</button>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.suggest') }}</label>
                                                    <div class="col-lg-11">
                                                        <input name="childQuestion[{{ $childQuestion->id }}][suggest]" type="text" class="form-control childQuestion_suggest" value="{{ $childQuestion->suggest }}">
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.content') }}</label>
                                                    <div class="col-lg-11">
                                                        <input name="childQuestion[{{ $childQuestion->id }}][content]" type="text" class="form-control childQuestion_content" value="{{ $childQuestion->content }}">
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.question_type') }}</label>
                                                    <div class="col-lg-11">
                                                        <select name="childQuestion[{{ $childQuestion->id }}][type]" data-childQuestionId="childQuestion_{{ $childQuestion->id }}" class="form-control childQuestion_type">
                                                            <option
                                                                value="{{ \App\Models\Question::CONTENT_TYPE }}"
                                                                @if ($childQuestion->type == \App\Models\Question::CONTENT_TYPE)
                                                                    selected
                                                                @endif
                                                            >
                                                                {{ trans('backend.pages.editQuestion.text') }}
                                                            </option>
                                                            <option
                                                                value="{{ \App\Models\Question::IMAGE_TYPE }}"
                                                                @if ($childQuestion->type == \App\Models\Question::IMAGE_TYPE)
                                                                    selected
                                                                @endif
                                                            >
                                                                {{ trans('backend.pages.editQuestion.image') }}
                                                            </option>
                                                            <option
                                                                value="{{ \App\Models\Question::AUDIO_ONE_TYPE }}"
                                                                @if ($childQuestion->type == \App\Models\Question::AUDIO_ONE_TYPE)
                                                                    selected
                                                                @endif
                                                            >
                                                                {{ trans('backend.pages.editQuestion.audio_one_time') }}
                                                            </option>
                                                            <option
                                                                value="{{ \App\Models\Question::AUDIO_MANY_TYPE }}"
                                                                @if ($childQuestion->type == \App\Models\Question::AUDIO_MANY_TYPE)
                                                                    selected
                                                                @endif
                                                            >
                                                                {{ trans('backend.pages.editQuestion.audio_many_time') }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                @if ($childQuestion->type != \App\Models\Question::CONTENT_TYPE)
                                                    <div class="form-group fileOldQuestion">
                                                        <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.file') }}</label>
                                                        <div class="col-lg-11">
                                                            @if ($childQuestion->type == \App\Models\Question::IMAGE_TYPE)
                                                                <img class="image_question" src="{{ $childQuestion->file->base_folder }}" alt="">
                                                            @else
                                                                <audio src="{{ $childQuestion->file->base_folder }}" controls></audio>
                                                            @endif
                                                        </div>
                                                    </div>
                                                @endif

                                                <div class="form-group div_image @if ($childQuestion->type != \App\Models\Question::IMAGE_TYPE) hidden @endif">
                                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.image') }}</label>
                                                    <div class="col-lg-4">
                                                        <input name="childQuestion[{{ $childQuestion->id }}][image]" type="file" class="file-input childQuestion_image" data-show-caption="false" data-show-upload="false"
                                                               data-browse-class="btn btn-primary btn-sm" data-remove-class="btn btn-default btn-sm" accept="image/*">
                                                    </div>
                                                </div>

                                                <div class="form-group div_audio @if ($childQuestion->type != \App\Models\Question::AUDIO_ONE_TYPE && $childQuestion->type != \App\Models\Question::AUDIO_MANY_TYPE) hidden @endif">
                                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.audio') }}</label>
                                                    <div class="col-lg-4">
                                                        <input name="childQuestion[{{ $childQuestion->id }}][audio]" class="childQuestion_audio" type="file" />
                                                    </div>
                                                </div>

                                                <div class="row answers">
                                                    <div class="col-md-6">
                                                        @for($i = 1; $i <= 4; $i++)
                                                            <div class="col-md-12 mt-20 answerDiv_{{ $i }}">
                                                                <div class="col-md-1">
                                                                    <div class="icheck-material-red pl-10">
                                                                        <input
                                                                            id="childQuestion_{{ $childQuestion->id }}_answer_{{ $i }}"
                                                                            class="answer_{{ $i }}"
                                                                            type="radio"
                                                                            name="childQuestion[{{ $childQuestion->id }}][correct_answer]" value="{{ $i }}"
                                                                        />
                                                                        <label for="childQuestion_{{ $childQuestion->id }}_answer_{{ $i }}" class="label_{{ $i }}"></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-11">
                                                                    <input name="childQuestion[{{ $childQuestion->id }}][answers][{{ $i }}][content]" type="text" class="form-control answer_content_{{ $i }}"
                                                                           value="">
                                                                    <input name="childQuestion[{{ $childQuestion->id }}][answers][{{ $i }}][file]" type="file" class="file-input answer_file_{{ $i }}" data-show-caption="false" data-show-upload="false"
                                                                           data-browse-class="btn btn-primary btn-sm" data-remove-class="btn btn-default btn-sm" accept="image/*" />
                                                                </div>
                                                            </div>

                                                            @if($i == 2)
                                                                </div>
                                                                <div class="col-md-6">
                                                            @endif
                                                        @endfor
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                            <div id="addChildQuestionBtnDiv" class="row pl-40 pr-10">
                                <div class="form-group">
                                    <div class="alert alert-success mb-10 pb-5 pl-10 text-center">
                                        <button id="add_childQuestion" class="btn btn-link">
                                            <em class="icon-add"></em>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @else
                        <div class="form-group">
                            <div id="singleQuestion" class="alert alert-info mb-10 pb-5 pl-10">
                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.code') }}</label>
                                    <div class="col-lg-11">
                                        <input type="text" class="form-control" value="{{ $question->code }}" disabled>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.suggest') }}</label>
                                    <div class="col-lg-11">
                                        <input name="suggest" type="text" class="form-control" value="{{ $question->suggest }}">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.content') }}</label>
                                    <div class="col-lg-11">
                                        <input name="content" type="text" class="form-control" value="{{ $question->content }}">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.part') }}</label>
                                    <div class="col-lg-11">
                                        <select name="part_id" class="form-control">
                                            @foreach ($parts as $part)
                                                <option
                                                    value="{{ $part->id }}"
                                                    @if ($question->part_id == $part->id)
                                                    selected
                                                    @endif
                                                >{{ $part->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.question_type') }}</label>
                                    <div class="col-lg-11">
                                        <select id="type" name="type" class="form-control">
                                            <option
                                                value="{{ \App\Models\Question::CONTENT_TYPE }}"
                                                @if ($question->type == \App\Models\Question::CONTENT_TYPE)
                                                    selected
                                                @endif
                                            >
                                                {{ trans('backend.pages.editQuestion.text') }}
                                            </option>
                                            <option
                                                value="{{ \App\Models\Question::IMAGE_TYPE }}"
                                                @if ($question->type == \App\Models\Question::IMAGE_TYPE)
                                                    selected
                                                @endif
                                            >
                                                {{ trans('backend.pages.editQuestion.image') }}
                                            </option>
                                            <option
                                                value="{{ \App\Models\Question::AUDIO_ONE_TYPE }}"
                                                @if ($question->type == \App\Models\Question::AUDIO_ONE_TYPE)
                                                    selected
                                                @endif
                                            >
                                                {{ trans('backend.pages.editQuestion.audio_one_time') }}
                                            </option>
                                            <option
                                                value="{{ \App\Models\Question::AUDIO_MANY_TYPE }}"
                                                @if ($question->type == \App\Models\Question::AUDIO_MANY_TYPE)
                                                    selected
                                                @endif
                                            >
                                                {{ trans('backend.pages.editQuestion.audio_many_time') }}
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                @if ($question->type != \App\Models\Question::CONTENT_TYPE)
                                    <div class="form-group">
                                        <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.file') }}</label>
                                        <div class="col-lg-11">
                                            @if ($question->type == \App\Models\Question::IMAGE_TYPE)
                                                <img class="image_question" src="{{ $question->file->base_folder }}" alt="">
                                            @else
                                                <audio src="{{ $question->file->base_folder }}" controls></audio>
                                            @endif
                                        </div>
                                    </div>
                                @endif

                                <div class="form-group imageDiv @if ($question->type != \App\Models\Question::IMAGE_TYPE) hidden @endif">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.image') }}</label>
                                    <div class="col-lg-4">
                                        <input name="image" type="file" class="file-input" data-show-caption="false" data-show-upload="false"
                                               data-browse-class="btn btn-primary btn-sm" data-remove-class="btn btn-default btn-sm" accept="image/*">
                                    </div>
                                </div>

                                <div class="form-group audioDiv @if ($question->type != \App\Models\Question::AUDIO_ONE_TYPE && $question->type != \App\Models\Question::AUDIO_MANY_TYPE) hidden @endif">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.audio') }}</label>
                                    <div class="col-lg-4">
                                        <input name="audio" type="file" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        @for($i = 1; $i <= 4; $i++)
                                            <div class="col-md-12 mt-20">
                                                <div class="col-md-1">
                                                    <div class="icheck-material-red pl-10">
                                                        <input type="radio" id="question_answer_{{ $i }}" name="correct_answer" value="{{ $i }}"/>
                                                        <label for="question_answer_{{ $i }}"></label>
                                                    </div>
                                                </div>
                                                <div class="col-md-11">
                                                    <input name="answers[{{ $i }}][content]" type="text" class="form-control"
                                                           value="">
                                                    <input name="answers[{{ $i }}][file]" type="file" class="file-input" data-show-caption="false" data-show-upload="false"
                                                           data-browse-class="btn btn-primary btn-sm" data-remove-class="btn btn-default btn-sm" accept="image/*" />
                                                </div>
                                            </div>

                                            @if($i == 2)
                                                </div>
                                                <div class="col-md-6">
                                            @endif
                                        @endfor
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                </fieldset>

                <div class="text-right">
                    <button type="submit" class="btn btn-primary">{{ trans('backend.pages.submit') }} <i class="icon-arrow-right14 position-right"></i></button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset(mix('js/Admin/editQuestion.js')) }}"></script>
@endsection

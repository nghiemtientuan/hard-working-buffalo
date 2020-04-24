@extends('Admin.master')

@section('title', trans('backend.pages.addQuestion.add_question'))

@section('progress_bar')
    <li><a href="{{ route('admin.home') }}"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li><a href="{{ route('admin.tests.index') }}">{{ trans('backend.pages.test.list_tests') }}</a></li>
    <li><a href="{{ route('admin.tests.questions.index', $test->id) }}">{{ $test->name }}</a></li>
    <li class="active">{{ trans('backend.pages.addQuestion.add_question') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <form class="form-horizontal" method="POST" action="{{ route('admin.questions.store', $test->id) }}" enctype="multipart/form-data">
                @csrf

                <fieldset class="content-group">
                    <legend class="text-bold">{{ $test->name }} - {{ trans('backend.pages.addQuestion.add_question') }}</legend>

                    <div class="form-group">
                        <div id="singleQuestion" class="alert alert-info mb-10 pb-5 pl-10">
                            <div class="form-group">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.code') }}</label>
                                <div class="col-lg-9">
                                    <input name="code" type="text" class="form-control">
                                </div>
                                <div class="col-lg-2">
                                    <button id="randomCode" class="btn btn-success">{{ trans('backend.pages.addQuestion.random_code') }}</button>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.suggest') }}</label>
                                <div class="col-lg-11">
                                    <input name="suggest" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.content') }}</label>
                                <div class="col-lg-11">
                                    <input name="content" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.part') }}</label>
                                <div class="col-lg-11">
                                    <select name="part_id" class="form-control">
                                        @foreach ($parts as $part)
                                            <option value="{{ $part->id }}">{{ $part->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.question_type') }}</label>
                                <div class="col-lg-11">
                                    <select name="type" class="form-control">
                                        <option value="{{ \App\Models\Question::CONTENT_TYPE }}">
                                            {{ trans('backend.pages.addQuestion.text') }}
                                        </option>
                                        <option value="{{ \App\Models\Question::IMAGE_TYPE }}">
                                            {{ trans('backend.pages.addQuestion.image') }}
                                        </option>
                                        <option value="{{ \App\Models\Question::AUDIO_ONE_TYPE }}">
                                            {{ trans('backend.pages.addQuestion.audio_one_time') }}
                                        </option>
                                        <option value="{{ \App\Models\Question::AUDIO_MANY_TYPE }}">
                                            {{ trans('backend.pages.addQuestion.audio_many_time') }}
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group imageDiv hidden">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.image') }}</label>
                                <div class="col-lg-4">
                                    <input name="image" type="file" class="file-input" data-show-caption="false" data-show-upload="false"
                                           data-browse-class="btn btn-primary btn-sm" data-remove-class="btn btn-default btn-sm" accept="image/*">
                                </div>
                            </div>

                            <div class="form-group audioDiv hidden">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.audio') }}</label>
                                <div class="col-lg-4">
                                    <input name="audio" type="file" />
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.big_question') }}</label>
                                <label class="col-lg-1">
                                    <input id="question_check_kind" type="checkbox" class="switchery">
                                </label>
                                <label id="childQuestionNumberLabel" class="col-lg-10 hidden">- {{ trans('backend.pages.addQuestion.childQuestionNumber') }} : <span id="showChildQuestionNumber">1</span></label>
                            </div>

                            <div id="answerParentQuestion" class="row">
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

                        <input type="hidden" id="childQuestionsNumber" value="1">
                        <div id="list-childQuestion" class="hidden">
                            <div id="childQuestion_1" class="row pl-40 pr-10">
                                <div class="form-group">
                                    <div class="alert alert-success mb-10 pb-5 pl-10">
                                        <div class="form-group">
                                            <button type="button" data-childQuestionId="childQuestion_1" class="close btn btn-link childQuestion_delete"><span>&times;</span></button>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.code') }}</label>
                                            <div class="col-lg-9">
                                                <input name="childQuestionAdd[1][code]" type="text" class="form-control childQuestion_code">
                                            </div>
                                            <div class="col-lg-2">
                                                <button class="btn btn-success randomCode" data-childQuestionId="childQuestion_1">{{ trans('backend.pages.addQuestion.random_code') }}</button>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.suggest') }}</label>
                                            <div class="col-lg-11">
                                                <input name="childQuestionAdd[1][suggest]" type="text" class="form-control childQuestion_suggest">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.content') }}</label>
                                            <div class="col-lg-11">
                                                <input name="childQuestionAdd[1][content]" type="text" class="form-control childQuestion_content">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.question_type') }}</label>
                                            <div class="col-lg-11">
                                                <select name="childQuestionAdd[1][type]" class="form-control childQuestion_type">
                                                    <option value="{{ \App\Models\Question::CONTENT_TYPE }}">
                                                        {{ trans('backend.pages.editQuestion.text') }}
                                                    </option>
                                                    <option value="{{ \App\Models\Question::IMAGE_TYPE }}">
                                                        {{ trans('backend.pages.editQuestion.image') }}
                                                    </option>
                                                    <option value="{{ \App\Models\Question::AUDIO_ONE_TYPE }}">
                                                        {{ trans('backend.pages.editQuestion.audio_one_time') }}
                                                    </option>
                                                    <option value="{{ \App\Models\Question::AUDIO_MANY_TYPE }}">
                                                        {{ trans('backend.pages.editQuestion.audio_many_time') }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group div_image hidden">
                                            <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.image') }}</label>
                                            <div class="col-lg-4">
                                                <input name="childQuestionAdd[1][image]" type="file" class="file-input childQuestion_image" data-show-caption="false" data-show-upload="false"
                                                       data-browse-class="btn btn-primary btn-sm" data-remove-class="btn btn-default btn-sm" accept="image/*">
                                            </div>
                                        </div>

                                        <div class="form-group div_audio hidden">
                                            <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.audio') }}</label>
                                            <div class="col-lg-4">
                                                <input name="childQuestionAdd[1][audio]" class="childQuestion_audio" type="file" />
                                            </div>
                                        </div>

                                        <div class="row answers">
                                            <div class="col-md-6">
                                                @for($i = 1; $i <= 4; $i++)
                                                    <div class="col-md-12 mt-20 answerDiv_{{ $i }}">
                                                        <div class="col-md-1">
                                                            <div class="icheck-material-red pl-10">
                                                                <input
                                                                    id="childQuestion_1_answer_{{ $i }}"
                                                                    class="answer_{{ $i }}"
                                                                    type="radio"
                                                                    name="childQuestionAdd[1][correct_answer]" value="{{ $i }}"
                                                                />
                                                                <label for="childQuestion_1_answer_{{ $i }}" class="label_{{ $i }}"></label>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-11">
                                                            <input name="childQuestionAdd[1][answers][{{ $i }}][content]" type="text" class="form-control answer_content_{{ $i }}"
                                                                   value="">
                                                            <input name="childQuestionAdd[1][answers][{{ $i }}][file]" type="file" class="file-input answer_file_{{ $i }}" data-show-caption="false" data-show-upload="false"
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
                        </div>

                        <div id="addChildQuestionBtnDiv" class="row pl-40 pr-10 hidden">
                            <div class="form-group">
                                <div class="alert alert-success mb-10 pb-5 pl-10 text-center">
                                    <button id="add_childQuestion" class="btn btn-link">
                                        <em class="icon-add"></em>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <div class="text-right">
                    <button type="submit" class="btn btn-primary">{{ trans('backend.pages.submit') }} <i class="icon-arrow-right14 position-right"></i></button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('script')
    <script type="text/javascript" src="{{ asset('bower_components/assets/Admin/js/plugins/forms/styling/switchery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/assets/Admin/js/pages/form_checkboxes_radios.js') }}"></script>
    <script src="{{ asset(mix('js/Admin/addQuestion.js')) }}"></script>
@endsection

@extends('Admin.master')

@section('title', trans('backend.pages.importQuestions.title'))

@section('progress_bar')
    <li><a href="#"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li><a href="{{ route('admin.tests.index') }}">{{ trans('backend.pages.test.list_tests') }}</a></li>
    <li><a href="{{ route('admin.tests.questions.index', $test->id) }}">{{ $test->name }}</a></li>
    <li class="active">{{ trans('backend.pages.importQuestions.import') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <form class="form-horizontal" action="{{ route('admin.tests.questions.postImport', $test->id) }}" method="POST">
                @csrf

                <fieldset class="content-group">
                    <legend class="text-bold">{{ $test->name }}</legend>

                    @include('Admin.layouts.errorOrSuccess')

                    <div class="row">
                        <div class="col-lg-5">
                            <table class="table table-bordered" id="list_part">
                                <thead>
                                    <tr>
                                        <th>{{ trans('backend.pages.importQuestions.name') }}</th>
                                        <th width="20%" class="text-center">{{ trans('backend.pages.importQuestions.id') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($test->parts as $part)
                                        <tr>
                                            <td>{{ $part->name }}</td>
                                            <td class="text-center">{{ $part->id }}</td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                        <div class="col-lg-7">
                            <div class="row">
                                <label class="control-label col-lg-4">
                                    <a href="{{ config('constant.files.format_test') }}">
                                        <em class="icon-file-download2"></em>
                                        {{ trans('backend.pages.importQuestions.file_template') }}
                                    </a>
                                </label>
                                <div class="col-lg-8 d-flex">
                                    <input id="fileImportQuestion" type="file" class="file-input" data-show-caption="false" data-show-upload="false"
                                           data-browse-class="btn btn-primary btn-sm" data-remove-class="btn btn-default btn-sm" accept=".xlsx,.xls,.csv,.obs">
                                    <button id="loadFileImportQuestion" class="btn btn-success ml-5">
                                        <em class="icon-cloud-upload"></em>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div id="listQuestionImport" class="row"></div>

                    <div id="questionExample" class="alert alert-info mb-10 pb-5 pl-10 d-none">
                        <div class="form-group mb-20">
                            <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.code') }}</label>
                            <div class="col-lg-9">
                                <input type="text" class="form-control inputCode" disabled required>
                            </div>
                            <div class="col-lg-2">
                                <button class="btn btn-success randomCode">{{ trans('backend.pages.addQuestion.random_code') }}</button>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.suggest') }}</label>
                            <div class="col-lg-11">
                                <input type="text" class="form-control inputSuggest">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.content') }}</label>
                            <div class="col-lg-11">
                                <input type="text" class="form-control inputContent">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.question_type') }}</label>
                            <label class="control-label col-lg-11 questionTypeLabel"></label>
                        </div>

                        <input type="hidden" class="inputType">
                        <input type="hidden" class="inputPartId">

                        <div class="row">
                            <div class="col-md-6">
                                @for($i = 1; $i <= 4; $i++)
                                    <div class="col-md-12 mt-20">
                                        <div class="col-md-1">
                                            <div class="icheck-material-red pl-10">
                                                <input
                                                    class="answerRadio_{{ $i }}"
                                                    type="radio"
                                                    value="{{ $i }}"
                                                    disabled
                                                    required
                                                />
                                                <label class="answerLabel_{{ $i }}"></label>
                                            </div>
                                        </div>
                                        <div class="col-md-11">
                                            <input type="text" class="form-control inputAnswer_{{ $i }}">
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

                    <div id="childQuestionExample" class="row pl-40 pr-10 d-none">
                        <div class="form-group">
                            <div class="alert alert-success mb-10 pb-5 pl-10">
                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.code') }}</label>
                                    <div class="col-lg-9">
                                        <input type="text" class="form-control inputCode">
                                    </div>
                                    <div class="col-lg-2">
                                        <button class="btn btn-success randomCode">{{ trans('backend.pages.addQuestion.random_code') }}</button>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.suggest') }}</label>
                                    <div class="col-lg-11">
                                        <input type="text" class="form-control inputSuggest">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.content') }}</label>
                                    <div class="col-lg-11">
                                        <input type="text" class="form-control inputContent">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.question_type') }}</label>
                                    <label class="control-label col-lg-11 questionTypeLabel"></label>
                                </div>

                                <input type="hidden" class="inputType">
                                <input type="hidden" class="inputPartId">

                                <div class="row answers">
                                    <div class="col-md-6">
                                        @for($i = 1; $i <= 4; $i++)
                                            <div class="col-md-12 mt-20 answerDiv_{{ $i }}">
                                                <div class="col-md-1">
                                                    <div class="icheck-material-red pl-10">
                                                        <input
                                                            class="answerRadio_{{ $i }}"
                                                            type="radio"
                                                            value="{{ $i }}"
                                                            disabled
                                                            required
                                                        />
                                                        <label class="answerLabel_{{ $i }}"></label>
                                                    </div>
                                                </div>
                                                <div class="col-md-11">
                                                    <input type="text" class="form-control inputAnswer_{{ $i }}">
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

                    <div id="bigQuestionExample" class="alert alert-info mb-10 pb-5 pl-10 d-none">
                        <div class="form-group">
                            <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.code') }}</label>
                            <div class="col-lg-9">
                                <input type="text" class="form-control inputCode" disabled required>
                            </div>
                            <div class="col-lg-2">
                                <button class="btn btn-success randomCode">{{ trans('backend.pages.addQuestion.random_code') }}</button>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.suggest') }}</label>
                            <div class="col-lg-11">
                                <input type="text" class="form-control inputSuggest">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-1">{{ trans('backend.pages.addQuestion.content') }}</label>
                            <div class="col-lg-11">
                                <input type="text" class="form-control inputContent">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-1">{{ trans('backend.pages.editQuestion.question_type') }}</label>
                            <label class="control-label col-lg-11 questionTypeLabel"></label>
                        </div>

                        <input type="hidden" class="inputType">
                        <input type="hidden" class="inputPartId">
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
    <script src="{{ asset('bower_components/assets/Admin/js/sheetjs/xlsx.full.min.js') }}"></script>
    <script src="{{ asset('js/Admin/list_questions_import.js') }}"></script>
@endsection

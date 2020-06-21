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
            <form action="{{ route('admin.tests.questions.postImport', $test->id) }}" method="POST">
                @csrf

                <fieldset class="content-group">
                    <legend class="text-bold">{{ $test->name }}</legend>

                    <div class="form-group">
                        <label class="control-label col-lg-1">{{ trans('backend.pages.importQuestions.file') }}</label>
                        <div class="col-lg-4 mb-20">
                            <input id="fileImportQuestion" type="file" class="file-input" data-show-caption="false" data-show-upload="false"
                                data-browse-class="btn btn-primary btn-sm" data-remove-class="btn btn-default btn-sm" accept=".xlsx,.xls,.csv">
                        </div>
                    </div>

                    <table class="table table-bordered" id="list_questions_import">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </fieldset>

                <div class="text-right">
                    <button type="submit" class="btn btn-primary">{{ trans('backend.pages.submit') }} <i class="icon-arrow-right14 position-right"></i></button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset('js/Admin/list_questions_import.js') }}"></script>
@endsection

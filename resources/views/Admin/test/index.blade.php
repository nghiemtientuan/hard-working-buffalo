@extends('Admin.master')

@section('title', trans('backend.pages.test.list_tests'))

@section('progress_bar')
    <li><a href="#"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li class="active">{{ trans('backend.pages.test.list_tests') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <fieldset class="content-group">
                <legend class="text-bold">{{ trans('backend.pages.test.list_tests') }}</legend>
                @include('Admin.layouts.errorOrSuccess')
            </fieldset>

            <table class="table table-bordered" id="list_test_table">
                <thead>
                    <tr>
                        <th>{{ trans('backend.pages.test.code') }}</th>
                        <th>{{ trans('backend.pages.test.name') }}</th>
                        <th>{{ trans('backend.pages.test.execute_time') }}</th>
                        <th>{{ trans('backend.pages.test.score') }}</th>
                        <th>{{ trans('backend.pages.test.level') }}</th>
                        <th>{{ trans('backend.pages.test.publish') }}</th>
                        <th>{{ trans('backend.pages.actions') }}</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

    <div id="showTest" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h5 class="modal-title">{{ trans('backend.pages.students.info') }}</h5>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.username') }}:</label>
                        <div class="col-lg-9"><label id="name"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.email') }}:</label>
                        <div class="col-lg-9"><label id="code"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.fullname') }}:</label>
                        <div class="col-lg-9"><label id="author"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.fullname') }}:</label>
                        <div class="col-lg-9"><label id="execute_time"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.birthday') }}:</label>
                        <div class="col-lg-9"><label id="total_question"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.address') }}:</label>
                        <div class="col-lg-9"><label id="number_questions"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.phone') }}:</label>
                        <div class="col-lg-9"><label id="price"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.level') }}:</label>
                        <div class="col-lg-9"><label id="score"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.account_type') }}:</label>
                        <div class="col-lg-9"><label id="level"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.diamond') }}:</label>
                        <div class="col-lg-9"><label id="publish"></label></div>
                    </div>
                    <div class="form-group"><label class="control-label col-lg-12" id="guide"></label></div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">{{ trans('backend.pages.close') }}</button>
                </div>
            </div>
        </div>
    </div>

    <div id="editTest" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.test.edit_test') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.name') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="name" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.execute_time') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="execute_time" type="number" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.total_question') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="total_question" type="number" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.price') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="price" type="number" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.score') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="score" type="number" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.level') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="level" type="number" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.publish') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="publish" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.guide') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <textarea name="guide" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-link" data-dismiss="modal">{{ trans('backend.pages.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('backend.pages.submit') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset(mix('js/Admin/list_test.js')) }}"></script>
@endsection

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
                <legend class="text-bold mb-0">{{ trans('backend.pages.test.list_tests') }}</legend>
            </fieldset>

            <div class="form-group text-right mb-10">
                <button
                    type="button"
                    class="btn btn-primary addTestBtn"
                    data-toggle="modal"
                    data-target="#addTest"
                >{{ trans('backend.pages.add') }}</button>
            </div>

            @include('Admin.layouts.errorOrSuccess')

            <table class="table table-bordered" id="list_test_table">
                <thead>
                    <tr>
                        <th width="15%">{{ trans('backend.pages.test.code') }}</th>
                        <th>{{ trans('backend.pages.test.name') }}</th>
                        <th width="8%">{{ trans('backend.pages.test.execute_time') }}</th>
                        <th width="8%">{{ trans('backend.pages.test.coin') }}</th>
                        <th width="8%">{{ trans('backend.pages.test.score') }}</th>
                        <th width="8%">{{ trans('backend.pages.test.publish') }}</th>
                        <th width="20%">{{ trans('backend.pages.actions') }}</th>
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
                    <h5 class="modal-title">{{ trans('backend.pages.test.info') }}</h5>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.test.name') }}:</label>
                        <div class="col-lg-9"><label id="name"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.test.code') }}:</label>
                        <div class="col-lg-9"><label id="code"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.test.author') }}:</label>
                        <div class="col-lg-9"><label id="author"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.test.execute_time') }}:</label>
                        <div class="col-lg-9"><label id="execute_time"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.test.total_question') }}:</label>
                        <div class="col-lg-9"><label id="total_question"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.test.number_questions') }}:</label>
                        <div class="col-lg-9"><label id="number_questions"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.test.price') }}:</label>
                        <div class="col-lg-9"><label id="price"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.test.score') }}:</label>
                        <div class="col-lg-9"><label id="score"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.test.publish') }}:</label>
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
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.total_question') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="total_question" type="number" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.format') }}</label>
                            <div class="col-lg-9">
                                <select name="format_id" class="form-control">
                                    <option value="{{ \App\Models\Format::VALUE_NONE_FORMAT }}" selected>{{ \App\Models\Format::NAME_NONE_OPTION }}</option>
                                    @foreach ($formats as $format)
                                        <option value="{{ $format->id }}">{{ $format->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.publish') }}</label>
                            <label class="col-lg-9">
                                <input type="checkbox" name="publish" class="switchery">
                            </label>
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

    <div id="addTest" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" action="{{ route('admin.tests.store') }}" method="POST">
                    @csrf
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.test.add_test') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.code') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-7">
                                <input name="code" type="text" class="form-control" />
                            </div>
                            <div class="col-lg-2">
                                <button id="randomCode" class="btn btn-success">{{ trans('backend.pages.test.random_code') }}</button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.name') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="name" type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.execute_time') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="execute_time" type="number" min="1" max="120" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.price') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="price" type="number" min="0" max="120" class="form-control" value="{{ \App\Models\Test::PRICE_FREE_VALUE }}"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.score') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="score" type="number" min="0" max="100" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.total_question') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="total_question" type="number" min="1" max="200" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.format') }}</label>
                            <div class="col-lg-9">
                                <select name="format_id" class="form-control">
                                    <option value="{{ \App\Models\Format::VALUE_NONE_FORMAT }}" selected>{{ \App\Models\Format::NAME_NONE_OPTION }}</option>
                                    @foreach ($formats as $format)
                                        <option value="{{ $format->id }}">{{ $format->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.publish') }}</label>
                            <label class="col-lg-9">
                                <input type="checkbox" name="publish" class="switchery">
                            </label>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.test.guide') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <textarea name="guide" class="form-control" ></textarea>
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
    <script src="{{ asset('js/Admin/list_test.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/assets/Admin/js/plugins/forms/styling/switchery.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('bower_components/assets/Admin/js/pages/form_checkboxes_radios.js') }}"></script>
@endsection

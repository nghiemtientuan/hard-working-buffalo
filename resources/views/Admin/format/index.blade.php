@extends('Admin.master')

@section('title', trans('backend.pages.format.list_formats'))

@section('progress_bar')
    <li><a href="#"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li class="active">{{ trans('backend.pages.format.list_formats') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <fieldset class="content-group">
                <legend class="text-bold">{{ trans('backend.pages.format.list_formats') }}</legend>
                @include('Admin.layouts.errorOrSuccess')
            </fieldset>

            <table class="table table-bordered" id="list_format_table">
                <thead>
                    <tr>
                        <th>{{ trans('backend.pages.format.name') }}</th>
                        <th>{{ trans('backend.pages.format.description') }}</th>
                        <th>{{ trans('backend.pages.format.apply_test_number') }}</th>
                        <th>{{ trans('backend.pages.format.created_at') }}</th>
                        <th>{{ trans('backend.pages.actions') }}</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>

    <div id="editFormat" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.format.edit_format') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.format.name') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="name" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.format.description') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <textarea name="description" class="form-control"></textarea>
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
    <script src="{{ asset(mix('js/Admin/list_format.js')) }}"></script>
@endsection

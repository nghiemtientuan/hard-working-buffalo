@extends('Admin.master')

@section('title', trans('backend.pages.user.list_users'))

@section('progress_bar')
    <li><a href="#"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li class="active">{{ trans('backend.pages.user.list_users') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <fieldset class="content-group">
                <legend class="text-bold mb-0">{{ trans('backend.pages.user.list_users') }}</legend>
            </fieldset>

            <div class="form-group text-right mb-10">
                <button
                    type="button"
                    class="btn btn-primary addUserBtn"
                    data-toggle="modal"
                    data-target="#addUser"
                >{{ trans('backend.pages.add') }}</button>
            </div>

            @include('Admin.layouts.errorOrSuccess')

            <table class="table table-bordered" id="list_users_table">
                <thead>
                <tr>
                    <th>{{ trans('backend.pages.user.image') }}</th>
                    <th>{{ trans('backend.pages.user.username') }}</th>
                    <th>{{ trans('backend.pages.user.email') }}</th>
                    <th>{{ trans('backend.pages.user.birthday') }}</th>
                    <th>{{ trans('backend.pages.user.role') }}</th>
                    <th>{{ trans('backend.pages.actions') }}</th>
                </tr>
                </thead>
            </table>
        </div>
    </div>

    <div id="showUser" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-info">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h5 class="modal-title">{{ trans('backend.pages.students.info') }}</h5>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <img class="user-image-detail" src="" alt="">
                    </div>

                    <div class="row">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.user.username') }}:</label>
                        <div class="col-lg-9"><label id="username"></label></div>
                    </div>
                    <div class="row">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.user.email') }}:</label>
                        <div class="col-lg-9"><label id="email"></label></div>
                    </div>
                    <div class="row">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.user.fullname') }}:</label>
                        <div class="col-lg-9"><label id="fullname"></label></div>
                    </div>
                    <div class="row">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.user.birthday') }}:</label>
                        <div class="col-lg-9"><label id="birthday"></label></div>
                    </div>
                    <div class="row">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.user.address') }}:</label>
                        <div class="col-lg-9"><label id="address"></label></div>
                    </div>
                    <div class="row">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.user.phone') }}:</label>
                        <div class="col-lg-9"><label id="phone"></label></div>
                    </div>
                    <div class="row">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.user.role') }}:</label>
                        <div class="col-lg-9"><label id="role"></label></div>
                    </div>
                    <div class="row">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.user.active') }}:</label>
                        <div class="col-lg-9"><label id="active" class="label label-default"></label></div>
                    </div>
                    <div class="row"><label class="control-label col-lg-12" id="description"></label></div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">{{ trans('backend.pages.close') }}</button>
                </div>
            </div>
        </div>
    </div>

    <div id="editUser" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.user.edit_user') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.firstname') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="firstname" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.lastname') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="lastname" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.address') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="address" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.phone') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="phone" type="text" class="form-control">
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

    <div id="addUser" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" method="POST" action="{{ route('admin.users.store') }}">
                    @csrf
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.user.edit_user') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.email') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="email" type="email" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.role') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <select name="role_id" class="form-control">
                                    @foreach ($roles as $role)
                                        <option value="{{ $role->id }}">{{ $role->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.firstname') }}</label>
                            <div class="col-lg-9">
                                <input name="firstname" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.lastname') }}</label>
                            <div class="col-lg-9">
                                <input name="lastname" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.address') }}</label>
                            <div class="col-lg-9">
                                <input name="address" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.user.phone') }}</label>
                            <div class="col-lg-9">
                                <input name="phone" type="text" class="form-control">
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
    <script src="{{ asset('js/Admin/list_user.js') }}"></script>
@endsection

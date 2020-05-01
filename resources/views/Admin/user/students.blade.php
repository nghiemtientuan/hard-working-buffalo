@extends('Admin.master')

@section('title', trans('backend.pages.students.list_students'))

@section('progress_bar')
    <li><a href="#"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li class="active">{{ trans('backend.pages.students.list_students') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <fieldset class="content-group">
                <legend class="text-bold">{{ trans('backend.pages.students.list_students') }}</legend>
            </fieldset>

            <div class="form-group text-right mb-10">
                <button
                    type="button"
                    class="btn btn-primary addStudentBtn"
                    data-toggle="modal"
                    data-target="#addStudent"
                >{{ trans('backend.pages.add') }}</button>
            </div>

            @include('Admin.layouts.errorOrSuccess')

            <table class="table table-bordered" id="list_student_table">
                <thead>
                <tr>
                    <th>{{ trans('backend.pages.students.image') }}</th>
                    <th>{{ trans('backend.pages.students.username') }}</th>
                    <th>{{ trans('backend.pages.students.birthday') }}</th>
                    <th>{{ trans('backend.pages.students.level') }}</th>
                    <th>{{ trans('backend.pages.students.account_type') }}</th>
                    <th>{{ trans('backend.pages.actions') }}</th>
                </tr>
                </thead>
            </table>
        </div>
    </div>

    <div id="showStudent" class="modal fade">
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

                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.username') }}:</label>
                        <div class="col-lg-9"><label id="username"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.email') }}:</label>
                        <div class="col-lg-9"><label id="email"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.fullname') }}:</label>
                        <div class="col-lg-9"><label id="fullname"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.birthday') }}:</label>
                        <div class="col-lg-9"><label id="birthday"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.address') }}:</label>
                        <div class="col-lg-9"><label id="address"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.phone') }}:</label>
                        <div class="col-lg-9"><label id="phone"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.level') }}:</label>
                        <div class="col-lg-9"><label id="level"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.account_type') }}:</label>
                        <div class="col-lg-9"><label id="type"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.diamond') }}:</label>
                        <div class="col-lg-9"><label id="diamond"></label></div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-lg-3">{{ trans('backend.pages.students.active') }}:</label>
                        <div class="col-lg-9"><label id="active"></label></div>
                    </div>
                    <div class="form-group"><label class="control-label col-lg-12" id="description"></label></div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">{{ trans('backend.pages.close') }}</button>
                </div>
            </div>
        </div>
    </div>

    <div id="editStudent" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.students.edit_student') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.students.firstname') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="firstname" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.students.lastname') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="lastname" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.students.address') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="address" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.students.phone') }}<span class="text-danger">*</span></label>
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

    <div id="addStudent" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" method="POST" action="{{ route('admin.students.store') }}">
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
    <script src="{{ asset(mix('js/Admin/list_student.js')) }}"></script>
@endsection

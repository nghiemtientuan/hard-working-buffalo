@extends('Admin.master')

@section('title', trans('backend.pages.profile.profile'))

@section('progress_bar')
    <li><a href="{{ route('admin.home') }}"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li class="active">{{ trans('backend.pages.profile.profile') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-heading mb-10">
            <div class="heading-elements">
                <ul class="icons-list">
                    <li>
                        <button
                            id="editProfileBtn"
                            class="btn btn-link"
                            data-toggle="modal"
                            data-target="#editProfile"
                        >
                            <em class="icon-pencil7"></em>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="panel-body">
            <div class="thumbnail">
                <div class="thumb thumb-rounded">
                    <img id="image-profile" src="{{ userDefaultImage($user->file) }}" alt="">
                </div>

                <div class="caption text-center">
                    <h6 class="text-semibold no-margin">{{ $user->username }}<br />
                        {{ getFullName($user->lastname, $user->firstname) }}
                        <small class="display-block">{{ $user->role->name }}</small>
                    </h6>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-lg-3">{{ trans('backend.pages.profile.username') }}:</label>
                <div class="col-lg-9"><label>{{ $user->username }}</label></div>
            </div>
            <div class="form-group">
                <label class="control-label col-lg-3">{{ trans('backend.pages.profile.email') }}:</label>
                <div class="col-lg-9"><label>{{ $user->email }}</label></div>
            </div>
            <div class="form-group">
                <label class="control-label col-lg-3">{{ trans('backend.pages.profile.fullname') }}:</label>
                <div class="col-lg-9"><label>{{ getFullName($user->lastname, $user->firstname) }}</label></div>
            </div>
            <div class="form-group">
                <label class="control-label col-lg-3">{{ trans('backend.pages.profile.birthday') }}:</label>
                <div class="col-lg-9"><label>{{ $user->birthday }}</label></div>
            </div>
            <div class="form-group">
                <label class="control-label col-lg-3">{{ trans('backend.pages.profile.address') }}:</label>
                <div class="col-lg-9"><label>{{ $user->address }}</label></div>
            </div>
            <div class="form-group">
                <label class="control-label col-lg-3">{{ trans('backend.pages.profile.phone') }}:</label>
                <div class="col-lg-9"><label>{{ $user->phone }}</label></div>
            </div>
            <div class="form-group"><label class="control-label col-lg-12">{{ $user->description }}</label></div>
        </div>
    </div>

    <div id="editProfile" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form action="{{ route('admin.profile.update') }}" class="form-horizontal" method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.profile.editProfile') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <div class="thumbnail">
                                <div class="thumb thumb-rounded">
                                    <img id="image-profile" src="{{ userDefaultImage($user->file) }}" alt="">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.profile.newImage') }}</label>
                            <div class="col-lg-9">
                                <div class="form-group">
                                    <input
                                        type="file"
                                        name="imageProfile"
                                        class="file-input"
                                        data-show-caption="false"
                                        data-show-upload="false"
                                        data-browse-class="btn btn-primary btn-sm"
                                        data-remove-class="btn btn-default btn-sm"
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.profile.username') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="username" value="{{ $user->username }}" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.profile.firstname') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="firstname" value="{{ $user->firstname }}" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.profile.lastname') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="lastname" value="{{ $user->lastname }}" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.profile.address') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="address" value="{{ $user->address }}" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.profile.phone') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="phone" value="{{ $user->phone }}" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.profile.description') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <textarea name="description" class="form-control">{{ $user->description }}</textarea>
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
    <script src="{{ asset('js/Admin/profile.js') }}"></script>
@endsection

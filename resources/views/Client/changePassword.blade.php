@extends('Client.master')

@section('title', trans('client.pages.changePassword.changePasswordTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <form action="{{ route('client.changePass.update') }}" method="POST">
                        @csrf

                        @if(isset($errors) && count($errors))
                            <div class="alert alert-danger alert-styled-left alert-arrow-left alert-bordered">
                                <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">{{ trans('client.actions.close') }}</span></button>
                                <span class="text-semibold">{{ $errors->first() }}</span>
                            </div>
                        @endif

                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label for="password">{{ trans('client.pages.changePassword.oldPassword') }}</label>
                                <input name="oldPassword" type="password" id="oldPassword" class="form-control form-control-lg" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="password">{{ trans('client.pages.changePassword.newPassword') }}</label>
                                <input name="newPassword" type="password" id="newPassword" class="form-control form-control-lg" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="password">{{ trans('client.pages.changePassword.rePassword') }}</label>
                                <input name="rePassword" type="password" id="rePassword" class="form-control form-control-lg" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <input type="submit" value="{{ trans('client.pages.changePassword.changeBtn') }}" class="btn btn-primary btn-lg px-5">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

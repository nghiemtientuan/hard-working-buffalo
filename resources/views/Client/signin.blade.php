@extends('Client.master')

@section('title', trans('client.pages.signin.signinTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <form action="{{ route('client.postSignin') }}" method="POST">
                        @csrf

                        @include ('Client.layouts.errorOrSuccess')

                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label for="username">{{ trans('client.pages.signin.email') }}</label>
                                <input name="email" type="email" id="email" class="form-control form-control-lg" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="password">{{ trans('client.pages.signin.password') }}</label>
                                <input name="password" type="password" id="password" class="form-control form-control-lg" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="password">{{ trans('client.pages.signin.rePassword') }}</label>
                                <input name="rePassword" type="password" id="rePassword" class="form-control form-control-lg" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <input type="submit" value="{{ trans('client.pages.signin.submitBtn') }}" class="btn btn-primary btn-lg px-5">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

@extends('Client.master')

@section('title', trans('client.pages.login.login'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-5">
                    <form action="{{ route('client.postLogin') }}" method="POST">
                        @csrf

                        @if(isset($errors) && count($errors))
                            <div class="alert alert-danger alert-styled-left alert-arrow-left alert-bordered">
                                <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">{{ trans('client.actions.close') }}</span></button>
                                <span class="text-semibold">{{ trans('client.actions.login_false') }}</span>
                            </div>
                        @endif

                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label for="username">{{ trans('client.pages.login.email') }}</label>
                                <input name="email" type="email" id="email" class="form-control form-control-lg" required>
                            </div>
                            <div class="col-md-12">
                                <label for="password">{{ trans('client.pages.login.password') }}</label>
                                <input name="password" type="password" id="password" class="form-control form-control-lg" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 form-group">
                                <a href="{{ route('client.getSignin') }}">{{ trans('client.pages.login.not_have_an_account') }}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <input type="submit" value="{{ trans('client.pages.login.loginBtn') }}" class="btn btn-primary btn-lg px-5">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

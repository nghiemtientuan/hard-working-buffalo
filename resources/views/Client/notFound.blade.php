@extends('Client.master')

@section('title', trans('client.pages.notFound.notFoundTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="row justify-content-center text-center pl-10 m-0">
            <div class="col-lg-10 mb-5 pb-10">
                <h1>{{ trans('client.pages.notFound.notFoundContent') }}</h1>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

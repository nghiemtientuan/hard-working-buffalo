@extends('Client.master')

@section('title', trans('client.pages.getTest.test') . $test->name)

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-20">
        <div class="row justify-content-center text-center pl-10">
            <div class="col-lg-10 mb-5 pb-10">
                <h2 class="section-title-underline">
                    <span>{{ $test->name }}</span>
                </h2>
            </div>
            <div class="col-lg-2"></div>
        </div>

        <form id="form_test" action="#" method="POST">
            @csrf

            <div class="row pl-10">
                <div class="col-lg-10">
                    <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="icon-book text-white"></span>
                        </div>
                        <div class="feature-1-content text-left pl-1 pr-1 pb-0">

                        </div>
                    </div>
                </div>
                <input type="hidden" name="duration" id="duration">

                <div id="myHeader" class="col-lg-2">
                    <div class="feature-1 border position-fixed w-20">
                        <div class="icon-wrapper bg-primary">
                            <span class="icon-timer text-white"></span>
                        </div>
                        <div class="feature-1-content text-left pl-1 pr-1 background-primary">
                            <div id="clockDiv"
                                 data-execute_time="60"
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="site-section pb-0"></div>
@endsection

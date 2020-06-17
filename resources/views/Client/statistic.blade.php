@extends('Client.master')

@section('title', trans('client.pages.statistic.statisticTitle'))

@section('style')
    <link rel="stylesheet" href="{{ asset('bower_components/assets/Client/css/chartjs/Chart.min.css') }}">
@endsection

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4">
                    <select id="testStatisticSelect" class="form-control">
                        <option value="">{{ trans('client.pages.statistic.10_test_lastest') }}</option>
                        @foreach ($usedTests as $test)
                            <option value="{{ $test->id }}">{{ $test->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="col-lg-10">
                    <canvas id="statisticTest"></canvas>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

@section('script')
    <script src="{{ asset('bower_components/assets/Client/js/chartjs/Chart.min.js') }}"></script>
    <script src="{{ asset('bower_components/assets/Client/js/chartjs/chartjs-annotation.min.js') }}"></script>
    <script src="{{ asset('js/Client/chatBottom.js') }}"></script>
    <script src="{{ asset('js/Client/statistic.js') }}"></script>
@endsection

@extends('Client.master')

@section('title', trans('client.pages.calendar.calendarTitle'))

@section('style')
    <link rel="stylesheet" href="{{ asset('bower_components/assets/Admin/css/fullcalendar/fullcalendar.min.css') }}">
@endsection

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="fullcalendar-basic"></div>
                </div>
            </div>
            <div class="row justify-content-center mt-20">
                <div class="col-md-4"></div>
                <div class="col-md-2 d-flex justify-content-center">
                    <label class="color_attendance_green mr-5"></label> {{ trans('client.pages.calendar.login') }}
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <label class="color_attendance_red mr-5"></label> {{ trans('client.pages.calendar.test') }}
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

@section('script')
    <script src="{{ asset('bower_components/assets/Admin/js/plugins/ui/moment/moment.min.js') }}"></script>
    <script src="{{ asset('bower_components/assets/Admin/js/plugins/ui/fullcalendar/fullcalendar.min.js') }}"></script>
    <script src="{{ asset('js/Client/chatBottom.js') }}"></script>
    <script src="{{ asset('js/Client/calendar.js') }}"></script>
@endsection

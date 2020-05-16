@extends('Client.master')

@section('title', trans('client.pages.result.testTitle') . $history->test->name)

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-20">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-4 mb-5">
                    <h2 class="section-title-underline mb-5">
                        <span>{{ $history->test->name }}</span>
                    </h2>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="icon-stars text-white"></span>
                        </div>
                        <div class="feature-1-content text-left pl-1 pr-1 pb-0">
                            <table class="table table-bordered table-framed mb-5">
                                <tbody>
                                    <tr>
                                        <th rowspan="2">

                                        </th>
                                        <th width="20%">{{ trans('client.pages.result.score') }}</th>
                                        <th width="20%">{{ trans('client.pages.result.questions') }}</th>
                                        <th width="20%">{{ trans('client.pages.result.duration') }}</th>
                                    </tr>
                                    <tr>
                                        <th>0</th>
                                        <th>{{ $history->score }} / {{ $history->test->total_question }}</th>
                                        <th>0</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="icon-book text-white"></span>
                        </div>
                        <div class="feature-1-content text-left pl-1 pr-1 pb-0">

                        </div>

                        <div class="form-group text-center">
                            <a href="#"
                               class="btn btn-primary btn-lg px-5">{{ trans('client.test.back') }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

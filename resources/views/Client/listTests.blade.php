@extends('Client.master')

@section('title', trans('client.pages.tests.buffalo_tests') . $category->name)

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-4 mb-5">
                    <h2 class="section-title-underline mb-5">
                        <span>{{ $category->name }}</span>
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="flaticon-books-1 text-white"></span>
                        </div>
                        <div class="feature-1-content">
                            <table class="table table-bordered table-framed">
                                <thead>
                                    <tr>
                                        <th>{{ trans('client.pages.tests.test_code') }}</th>
                                        <th>{{ trans('client.pages.tests.name_test') }}</th>
                                        <th>{{ trans('client.pages.tests.execute_time') }}</th>
                                        <th width="10%"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($tests as $test)
                                        <tr id="testRowTr_{{ $test->id }}">
                                            <td class="testCodeRowTr">
                                                <a
                                                    @if ($test->price == \App\Models\Test::PRICE_FREE_VALUE || count($test->students) > 0)
                                                        href="{{ route('client.tests.test', $test->id) }}"
                                                    @endif
                                                    data-popup="tooltip" title="{{ $test->name }}"
                                                >
                                                    {{ $test->code }}
                                                </a>

                                                @if ($test->price == \App\Models\Test::PRICE_FREE_VALUE)
                                                    <label class="label label-success">{{ trans('client.pages.categories.free') }}</label>
                                                @endif
                                                @if ($test->created_at->format('m') == now()->month)
                                                    <label class="label label-primary">{{ trans('client.pages.categories.new') }}</label>
                                                @endif
                                            </td>
                                            <td class="testNameRowTr">
                                                <a
                                                    @if ($test->price == \App\Models\Test::PRICE_FREE_VALUE || count($test->students) > 0)
                                                        href="{{ route('client.tests.test', $test->id) }}"
                                                    @endif
                                                    data-popup="tooltip" title="{{ $test->name }}"
                                                >
                                                    {{ $test->name }}
                                                </a>
                                            </td>
                                            <td>{{ $test->execute_time }}'</td>
                                            <td>
                                                @if ($test->price > \App\Models\Test::PRICE_FREE_VALUE && count($test->students) == 0)
                                                    <button class="btn btn-primary buyTestBtn" type="button" data-testId="{{ $test->id }}">
                                                        {{ trans('client.pages.categories.buy') }}
                                                        {{ $test->price }}
                                                        <i class="fa fa-gem"></i>
                                                    </button>
                                                @endif
                                            </td>
                                        </tr>
                                    @endforeach

                                    @if(!count($tests))
                                        <tr><td colspan="3">{{ trans('client.no_data') }}</td></tr>
                                    @endif
                                </tbody>
                            </table>
                            {{ $tests->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

@section('script')
    <script src="{{ asset('js/Client/chatBottom.js') }}"></script>
    <script src="{{ asset('js/Client/listTests.js') }}"></script>
@endsection

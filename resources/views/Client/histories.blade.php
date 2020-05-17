@extends('Client.master')

@section('title', trans('client.pages.histories.historiesTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-25">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-4 mb-5">
                    <h2 class="section-title-underline mb-5">
                        <span>{{ trans('client.pages.histories.historiesTitle') }}</span>
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="icon-history text-white"></span>
                        </div>
                        <div class="feature-1-content">
                            <form action="{{ route('client.histories.index') }}" method="GET" class="row mb-4">
                                <div class="col-lg-2">
                                    <select name="test" class="form-control">
                                        <option value="">{{ trans('client.pages.histories.allTest') }}</option>

                                        @foreach($cateTests as $category)
                                            <optgroup label="{{ $category->name }}">
                                                @foreach($category->tests as $test)
                                                    <option value="{{ $test->id }}" @if (array_key_exists('test', $filter) && $filter['test'] == $test->id) selected @endif>
                                                        ({{ $test->code }}) {{ $test->name }}
                                                    </option>
                                                @endforeach
                                            </optgroup>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="col-lg-2">
                                    <input name="score" type="text" value="{{ array_key_exists('score', $filter) ? $filter['score'] : null }}"
                                           class="form-control" placeholder="{{ trans('client.pages.histories.score') }}">
                                </div>

                                <div class="col-lg-3 d-flex">
                                    {{ trans('client.pages.histories.from') }}: <input name="from_date" value="{{ array_key_exists('score', $filter) ? $filter['from_date'] : null }}" type="date" class="form-control">
                                </div>

                                <div class="col-lg-3 d-flex">
                                    {{ trans('client.pages.histories.to') }}: <input name="to_date" value="{{ array_key_exists('score', $filter) ? $filter['to_date'] : null }}" type="date" class="form-control">
                                </div>

                                <div class="col-lg-2">
                                    <button type="submit" class="btn btn-primary mr-2"><i class="icon-search"></i></button>
                                    <a href="{{ route('client.histories.index') }}" class="btn btn-danger"><i class="icon-remove"></i></a>
                                </div>
                            </form>

                            <table class="table table-bordered table-framed">
                                <thead>
                                    <tr>
                                        <th>{{ trans('client.pages.histories.test_code') }}</th>
                                        <th>{{ trans('client.pages.histories.name_test') }}</th>
                                        <th>{{ trans('client.pages.histories.duration') }}</th>
                                        <th>{{ trans('client.pages.histories.score') }}</th>
                                        <th>{{ trans('client.pages.histories.created_at') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($histories as $history)
                                        <tr>
                                            <td><a href="{{ route('client.histories.show', $history->id) }}">{{ $history->test->code }}</a></td>
                                            <td><a href="{{ route('client.histories.show', $history->id) }}">{{ $history->test->name }}</a></td>
                                            <td><a href="{{ route('client.histories.show', $history->id) }}">0</a></td>
                                            <td><a href="{{ route('client.histories.show', $history->id) }}">{{ $history->score }}</a></td>
                                            <td><a href="{{ route('client.histories.show', $history->id) }}">{{ $history->created_at }}</a></td>
                                        </tr>
                                    @endforeach

                                    @if(!count($histories))
                                        <tr>
                                            <td colspan="5">{{ trans('client.no_data') }}</td>
                                        </tr>
                                    @endif
                                </tbody>
                            </table>

                            {{ $histories->appends(request()->input())->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

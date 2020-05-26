@extends('Client.master')

@section('title', trans('client.pages.ranking.rankingTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-4 mb-5">
                    <h2 class="section-title-underline mb-5">
                        <span>{{ trans('client.pages.ranking.rankingTitle') }}</span>
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="flaticon-mortarboard text-white"></span>
                        </div>
                        <div class="feature-1-content">
                            <form class="row mb-4">
                                <div class="col-lg-4">{{ trans('client.pages.ranking.in_month') }}</div>

                                <div class="col-lg-4">
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
                                <input class="btn btn-primary" type="submit">
                            </form>

                            <table class="table table-bordered table-framed">
                                <thead>
                                    <tr>
                                        <th width="10%"></th>
                                        <th width="10%"></th>
                                        <th width="30%">{{ trans('client.pages.ranking.username') }}</th>
                                        <th width="30%">{{ trans('client.pages.ranking.name_test') }}</th>
                                        <th width="20%">{{ trans('client.pages.ranking.score') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($rankings as $key => $ranking)
                                        <tr>
                                            <td>
                                                {!! getRankingNumberOrder(request()->page + $key + 1) !!}
                                            </td>
                                            <td>
                                                <img src="{{ userDefaultImage($ranking->student->file) }}" class="rounded-circle w-75">
                                            </td>
                                            <td>{{ $ranking->student->username }}</td>
                                            <td>({{ $ranking->test->code }}) {{ $ranking->test->name }}</td>
                                            <td>{{ $ranking->score }}</td>
                                        </tr>
                                    @endforeach

                                    @if(!count($rankings))
                                        <tr>
                                            <td colspan="6">{{ trans('client.no_data') }}</td>
                                        </tr>
                                    @endif
                                </tbody>
                            </table>

                            {{ $rankings->appends(request()->input())->links() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

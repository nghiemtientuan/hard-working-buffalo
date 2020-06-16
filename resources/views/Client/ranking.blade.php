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
                            <span class="flaticon-books text-white"></span>
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
                                        <th width="20%">{{ trans('client.pages.ranking.username') }}</th>
                                        <th width="25%">{{ trans('client.pages.ranking.name_test') }}</th>
                                        <th width="10%">{{ trans('client.pages.ranking.duration') }}</th>
                                        <th width="15%">{{ trans('client.pages.ranking.score') }}</th>
                                        @if (Auth::check() || Auth::guard('student')->check())
                                            <th width="10%"></th>
                                        @endif
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
                                            <td>
                                                {{ getHourMinuteSecond($ranking->duration) }}
                                            </td>
                                            <td>
                                                {{ $ranking->score }}
                                                <div id="clicked-icon-list-{{ $ranking->id }}" class="d-flex clicked-icon-list">
                                                    @foreach (config('constant.reacts') as $keyReact => $reactUrl)
                                                        @php $countReact = getCountReact($ranking->reacts, $keyReact) @endphp

                                                        <div class="@if ($countReact) d-flex @else d-none @endif align-content-center clicked-icon-list-active clicked-icon-list-active-{{ $keyReact }}">
                                                            <div class="d-flex clicked-icon-list__item--img">
                                                                <img src="{{ $reactUrl }}">
                                                            </div>
                                                            <div class="d-flex align-items-center clicked-icon-list__item--number">{{ $countReact }}</div>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            </td>
                                            @if (Auth::check() || Auth::guard('student')->check())
                                                @php $selectedReact = getSelectedReact($ranking->reacts) @endphp
                                                <td class="reactions-location">
                                                    <button class="btn btn-light btnLikeHover btnLikeHover-{{ $ranking->id }} @if (checkUserReaction($ranking->reacts)) btnLikeClicked @endif">
                                                        <span class="btnClickLike">
                                                            @if ($selectedReact == 0)
                                                                <em class="fa fa-thumbs-up"></em>
                                                            @else
                                                                <img class="btnClickLike--img" src="{{ config('constant.reacts')[$selectedReact] }}">
                                                            @endif
                                                        </span> {{ trans('client.pages.ranking.react') }}
                                                        <div class="reactions-lists">
                                                            <ol>
                                                                @foreach (config('constant.reacts') as $keyReact => $reactUrl)
                                                                    <li>
                                                                        <div class="reaction-item reaction-item-{{ $keyReact }} d-flex flex-column align-items-center justify-content-center">
                                                                            <span
                                                                                class="reaction-item--content reaction"
                                                                                data-reactionId="{{ $keyReact }}"
                                                                                data-reactSelected="{{ $selectedReact }}"
                                                                                data-historyId="{{ $ranking->id }}"
                                                                            >
                                                                                <img class="reaction-item--content--img" src="{{ $reactUrl }}">
                                                                            </span>

                                                                            <span class="dot-active mt-auto @if ($selectedReact != $keyReact) d-none @endif"></span>
                                                                        </div>
                                                                    </li>
                                                                @endforeach
                                                            </ol>
                                                        </div>
                                                    </button>
                                                </td>
                                            @endif
                                        </tr>
                                    @endforeach

                                    @if(!count($rankings))
                                        <tr>
                                            <td colspan="7">{{ trans('client.no_data') }}</td>
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

@section('script')
    <script src="{{ asset('js/Client/chatBottom.js') }}"></script>
    <script src="{{ asset('js/Client/ranking.js') }}"></script>
@endsection

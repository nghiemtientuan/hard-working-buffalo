@extends('Client.master')

@section('title', trans('client.pages.guideline.guidelineTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div class="row">
                <div class="container">
                    <h1>{{ trans('client.pages.guideline.guidelineTitle') }}</h1>
                    <hr>
                    <div class="row">
                        <div class="col-md-2 mb-3">
                            <ul class="nav nav-pills flex-column" id="tabGuideline" role="tablist">
                                @foreach (config('constant.guidelines') as $nameGuide => $images)
                                    <li class="nav-item">
                                        <a
                                            class="nav-link @if ($loop->index == 0) active @endif"
                                            id="{{ $nameGuide }}-tab"
                                            data-toggle="tab"
                                            href="#{{ $nameGuide }}"
                                            role="tab"
                                        >
                                            {{ trans('client.pages.guideline.list.' . $nameGuide . '.title') }}
                                        </a>
                                    </li>
                                @endforeach
                            </ul>
                        </div>

                        <div class="col-md-10">
                            <div class="tab-content" id="tabGuidelineContent">
                                @foreach (config('constant.guidelines') as $nameGuide => $images)
                                    <div class="tab-pane fade show @if ($loop->index == 0) active @endif" id="{{ $nameGuide }}" role="tabpanel">
                                        <h2>{{ trans('client.pages.guideline.list.' . $nameGuide . '.title') }}</h2>
                                        <p>{{ trans('client.pages.guideline.list.' . $nameGuide . '.content') }}</p>

                                        <div id="carousel-{{ $nameGuide }}" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                @foreach (config('constant.guidelines.' . $nameGuide) as $keyImage => $image)
                                                    <li data-target="#carouselExampleIndicators" data-slide-to="{{ $keyImage }}" class="@if ($keyImage == 0) active @endif"></li>
                                                @endforeach
                                            </ol>
                                            <div class="carousel-inner">
                                                @foreach (config('constant.guidelines.' . $nameGuide) as $keyImage => $image)
                                                    <div class="carousel-item @if ($keyImage == 0) active @endif">
                                                        <img class="d-block w-100" src="{{ $image }}">
                                                    </div>
                                                @endforeach
                                            </div>
                                            <a class="carousel-control-prev" href="#carousel-{{ $nameGuide }}" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon bg-grey p-20 border-radius-50" aria-hidden="true"></span>
                                            </a>
                                            <a class="carousel-control-next" href="#carousel-{{ $nameGuide }}" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon bg-grey p-20 border-radius-50" aria-hidden="true"></span>
                                            </a>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

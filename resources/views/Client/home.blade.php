@extends('Client.master')

@section('title', trans('client.pages.home.buffalo'))

@section('content')
    @include('Client.layouts.slider')

    <div class="site-section pb-0">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center">
                <div class="col-lg-4 mb-5">
                    <h2 class="section-title-underline mb-5">
                        <span>{{ trans('client.pages.home.categories') }}</span>
                    </h2>
                </div>
            </div>
            <div class="row">
                @foreach($categories as $category)
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div class="feature-1 border">
                            <div class="icon-wrapper bg-primary">
                                <span class="flaticon-mortarboard text-white"></span>
                            </div>
                            <div class="feature-1-content">
                                <h2>{{ $category->name }}</h2>
                                <p>{{ $category->guide }}</p>
                                <p>
                                    <a href="{{ route('client.categories.show', $category->id) }}"
                                       class="btn btn-primary px-4 rounded-0">{{ trans('client.pages.home.learn_more') }}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>

    <div class="site-section pb-0">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-6">
                    <h2 class="section-title-underline mb-3">
                        <span>{{ trans('client.pages.home.free_test') }}</span>
                    </h2>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="owl-slide-3 owl-carousel">
                        @foreach($freeTests as $test)
                            <div class="course-1-item">
                                <figure class="thumnail">
                                    <div class="price">{{ trans('client.pages.home.free') }}</div>
                                    <div class="category"><h3>{{ $test->created_at }}</h3></div>
                                </figure>
                                <div class="course-1-content pb-4">
                                    <h2>({{ $test->code }}) {{ $test->name }}</h2>
                                    <p><a href="#"
                                          class="btn btn-primary rounded-0 px-4">{{ trans('client.pages.home.test_now') }}</a>
                                    </p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-6">
                    <h2 class="section-title-underline mb-3">
                        <span>{{ trans('client.pages.home.new_test') }}</span>
                    </h2>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="owl-slide-3 owl-carousel">
                        @foreach($newTests as $test)
                            <div class="course-1-item">
                                <figure class="thumnail">
                                    @if ($test->price == 0)
                                        <div class="price">{{ trans('client.pages.home.free') }}</div>
                                    @endif
                                    <div class="category"><h3>{{ $test->created_at }}</h3></div>
                                </figure>
                                <div class="course-1-content pb-4">
                                    <h2>({{ $test->code }}) {{ $test->name }}</h2>
                                    <p><a href="#"
                                          class="btn btn-primary rounded-0 px-4">{{ trans('client.pages.home.test_now') }}</a>
                                    </p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section-bg style-1 background-image-hero1 p-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <h2 class="section-title-underline style-2">
                        <span>{{ trans('client.pages.home.about_our_website') }}</span>
                    </h2>
                </div>
                <div class="col-lg-8">
                    <p class="lead">{{ trans('client.pages.home.right_about_our_website') }}</p>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset('js/Client/chatBottom.js') }}"></script>
@endsection

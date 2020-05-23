@extends('Client.master')

@section('title', trans('client.pages.profile.profileTitle'))

@section('style')
    <link rel="stylesheet" href="{{ asset(mix('css/profile.css')) }}">
@endsection

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-25">
        <div class="container">
            <div class="profile-cover">
                <div class="profile-cover-img" style="background-image: url({{ config('constant.default_images.url_cover') }})"></div>
                <div class="media">
                    <div class="media-left">
                        <a href="#" class="profile-thumb">
                            <img src="{{ userDefaultImage($user->file) }}" class="img-circle img-md">
                        </a>
                    </div>

                    <div class="media-body">
                        <h1>{{ $user->username }} (<small class="display-block">{{ getFullName($user->firstname, $user->lastname) }}</small>)</h1>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="timeline timeline-left content-group mt-20">
                            @foreach ($timelines as $timeline)
                                <div class="timeline-container">
                                    <div class="timeline-row">
                                        <div class="timeline-icon">
                                            <img src="{{ userDefaultImage($user->file) }}">
                                        </div>

                                        <div class="panel panel-flat timeline-content">
                                            <div class="panel-heading">
                                                <h6 class="panel-title">{{ trans('client.timeline.testTitle') }}</h6>
                                                <div class="heading-elements">
                                                    <span class="heading-text"><i class="icon-history position-left text-success"></i> {{ $timeline->created_at }}</span>
                                                </div>
                                            </div>

                                            <div class="panel-body">
                                                <a href="{{ route('client.histories.show', $timeline->id) }}">{{ trans('client.timeline.testBody', ['testName' => $timeline->test->name]) }}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>

                    {{ $timelines->links() }}
                </div>
            </div>
        </div>
    </div>
@endsection

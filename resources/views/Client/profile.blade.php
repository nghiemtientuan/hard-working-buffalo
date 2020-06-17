@extends('Client.master')

@section('title', trans('client.pages.profile.profileTitle'))

@section('style')
    <link rel="stylesheet" href="{{ asset(mix('css/profile.css')) }}">
@endsection

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
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
                        <h1>
                            {{ $user->username }} (<small class="display-block">{{ getFullName($user->firstname, $user->lastname) }}</small>)
                            @if ($user->id == Auth::guard('student')->user()->id)
                                <a href="{{ route('client.profile.edit') }}"><i class="icon-pencil"></i></a>
                            @endif
                        </h1>
                        <a
                            href="
                                @if ($user->id == Auth::guard('student')->user()->id)
                                    {{ route('client.timeline.index') }}
                                @else
                                    {{ route('client.timeline.index', ['user' => $user->id]) }}
                                @endif
                            "
                            class="btn btn-link color-black"
                        >{{ trans('client.pages.profile.timeline') }}</a>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group d-flex">
                            <label class="control-label col-lg-3">{{ trans('client.pages.profile.address') }}:</label>
                            <div class="col-lg-9"><label>{{ $user->address }}</label></div>
                        </div>
                        <div class="form-group d-flex">
                            <label class="control-label col-lg-3">{{ trans('client.pages.profile.level') }}:</label>
                            <div class="col-lg-9"><label>{{ $user->level ? $user->level->name : '' }}</label></div>
                        </div>
                    </div>
                    @if ($user->id == Auth::guard('student')->user()->id)
                        <div class="col-lg-6">
                            <div class="form-group d-flex">
                                <label class="control-label col-lg-3">{{ trans('client.pages.profile.birthday') }}:</label>
                                <div class="col-lg-9"><label>{{ $user->birthday }}</label></div>
                            </div>
                            <div class="form-group d-flex">
                                <label class="control-label col-lg-3">{{ trans('client.pages.profile.phone') }}:</label>
                                <div class="col-lg-9"><label>{{ $user->phone }}</label></div>
                            </div>
                        </div>
                    @endif
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label class="control-label col-lg-12">{{ trans('client.pages.profile.description') }}: </label>
                            <div class="col-lg-12"><label>{{ $user->description }}</label></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

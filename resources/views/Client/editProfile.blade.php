@extends('Client.master')

@section('title', trans('client.pages.editProfile.editProfileTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <form action="{{ route('client.profile.update') }}" method="POST">
                @csrf

                @include ('Client.layouts.errorOrSuccess')
                <div class="row justify-content-center">
                    <div class="col-md-12 form-group">
                        <div>
                            <label>{{ trans('client.pages.editProfile.profile') }}</label>
                        </div>
                        <ul class="list-inline text-center">
                            @foreach(config('constant.profile_students') as $value => $imageSrc)
                                <li class="list-inline-item mr-2">
                                    <div class="icheck-material-red">
                                        <input type="radio" name="file_id" id="imgage_profile_{{ $value }}" value="{{ $value }}"
                                           @if ($user->file_id == $value) checked @endif required
                                        />
                                        <label id="imgage_profile_label_{{ $value }}" for="imgage_profile_{{ $value }}">
                                            <img src="{{ asset($imageSrc) }}" width="50px" alt="" >
                                        </label>
                                    </div>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="col-md-7">
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label for="username">{{ trans('client.pages.editProfile.username') }}</label>
                                <input name="username" type="text" id="username" class="form-control form-control-lg" value="{{ $user->username }}" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="firstname">{{ trans('client.pages.editProfile.firstname') }}</label>
                                <input name="firstname" type="text" id="firstname" class="form-control form-control-lg" value="{{ $user->firstname }}" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="lastname">{{ trans('client.pages.editProfile.lastname') }}</label>
                                <input name="lastname" type="text" id="lastname" class="form-control form-control-lg" value="{{ $user->lastname }}" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="birthday">{{ trans('client.pages.editProfile.birthday') }}</label>
                                <input name="birthday" type="text" id="birthday" class="form-control form-control-lg" value="{{ $user->birthday }}" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="address">{{ trans('client.pages.editProfile.address') }}</label>
                                <input name="address" type="text" id="address" class="form-control form-control-lg" value="{{ $user->address }}" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="phone">{{ trans('client.pages.editProfile.phone') }}</label>
                                <input name="phone" type="number" id="phone" class="form-control form-control-lg" value="{{ $user->phone }}" required>
                            </div>
                            <div class="col-md-12 form-group">
                                <label for="description">{{ trans('client.pages.editProfile.description') }}</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    cols="30"
                                    rows="5"
                                    class="form-control form-control-lg"
                                    required
                                >{{ $user->description }}</textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <input type="submit" value="{{ trans('client.pages.editProfile.updateBtn') }}" class="btn btn-primary btn-lg px-5">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

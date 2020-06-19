@extends('Client.master')

@section('title', trans('client.pages.target.targetTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            @include ('Client.layouts.errorOrSuccess')

            <div class="row justify-content-center">
                <div class="col-md-3">
                    <img src="{{ asset(config('constant.default_images.url_buffalo')) }}" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <p>{{ trans('client.pages.target.your_target') }}: </p>
                    <p id="targetScoreP" class="d-flex">{{ $student->target }}
                        <button
                            class="btn btn-link"
                            data-toggle="modal"
                            data-target="#editTarget"
                        >
                            <em class="fas fa-pen"></em>
                        </button>
                    </p>

                </div>
            </div>
        </div>
    </div>

    <div id="editTarget" class="modal fade">
        <form action="{{ route('client.target.update') }}" method="POST">
            @csrf

            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-labelp-0">{{ trans('client.pages.target.your_target') }}:</label>
                            <div>
                                <input type="number" name="target" value="{{ $student->target }}" min="0" max="990" class="form-control" />
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">{{ trans('client.pages.close') }}</button>
                            <button type="submit" class="btn btn-success">{{ trans('client.pages.save') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="site-section pb-0"></div>
@endsection

@extends('Admin.master')

@section('title', $format->name)

@section('progress_bar')
    <li><a href="{{ route('admin.home') }}"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li><a href="{{ route('admin.formats.index') }}">{{ trans('backend.pages.format.list_formats') }}</a></li>
    <li class="active">{{ $format->name }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <fieldset class="content-group">
                <legend class="text-bold">{{ $format->name }}</legend>
                @include('Admin.layouts.errorOrSuccess')
            </fieldset>

            <div class="content-group-sm">
                <span class="display-block">
                    <span class="display-block">{{ $format->description }}</span>
                    <label class="label label-success">{{ trans('backend.pages.show_format.questions') }}</label>
                    <label class="label label-primary">{{ $format->created_at }}</label>
                </span>
            </div>

            <div class="form-group">
                <div class="text-right">
                    <a href="{{ route('admin.formats.edit', $format->id) }}" class="btn btn-primary mr-5">{{ trans('backend.pages.show_format.edit_format') }}</a>
                </div>
            </div>

            @foreach ($format->parts as $key => $part)
                <div class="@if($key != 0) mt-10 @endif">
                    {{ $part->name }}
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>{{ trans('backend.pages.show_format.number') }}</th>
                                <th>{{ trans('backend.pages.show_format.number_child_question') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($part->questionFormats as $question)
                                <tr>
                                    <td>{{ $question->number }}</td>
                                    <td>{{ $question->child_questions }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            @endforeach
        </div>
    </div>
@endsection

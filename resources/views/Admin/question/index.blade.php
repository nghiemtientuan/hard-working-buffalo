@extends('Admin.master')

@section('title', trans('backend.pages.question.list_questions'))

@section('progress_bar')
    <li><a href="#"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li class="active">{{ trans('backend.pages.question.list_questions') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <fieldset class="content-group">
                <legend class="text-bold">{{ trans('backend.pages.question.list_questions') }}</legend>
                @include('Admin.layouts.errorOrSuccess')
            </fieldset>

            <table class="table table-bordered" id="list_question_table">
                <thead>
                <tr>
                    <th>{{ trans('backend.pages.question.code') }}</th>
                    <th>{{ trans('backend.pages.question.content') }}</th>
                    <th>{{ trans('backend.pages.question.test') }}</th>
                    <th>{{ trans('backend.pages.question.part') }}</th>
                    <th>{{ trans('backend.pages.question.level') }}</th>
                    <th>{{ trans('backend.pages.question.type') }}</th>
                    <th>{{ trans('backend.pages.actions') }}</th>
                </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset(mix('js/Admin/list_question.js')) }}"></script>
@endsection

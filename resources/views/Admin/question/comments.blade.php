@extends('Admin.master')

@section('title', trans('backend.pages.questionComment.list_comments'))

@section('progress_bar')
    <li><a href="#"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li class="active">{{ trans('backend.pages.questionComment.list_comments') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <fieldset class="content-group">
                <legend class="text-bold">{{ trans('backend.pages.questionComment.list_comments') }}</legend>
                @include('Admin.layouts.errorOrSuccess')
            </fieldset>

            <table class="table table-bordered" id="list_question_comment_table">
                <thead>
                    <tr>
                        <th>{{ trans('backend.pages.questionComment.user_name') }}</th>
                        <th>{{ trans('backend.pages.questionComment.question_code') }}</th>
                        <th>{{ trans('backend.pages.questionComment.content') }}</th>
                        <th>{{ trans('backend.pages.questionComment.created_at') }}</th>
                        <th>{{ trans('backend.pages.actions') }}</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset(mix('js/Admin/list_question_comment.js')) }}"></script>
@endsection

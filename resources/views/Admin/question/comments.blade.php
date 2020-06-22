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
                        <th width="25%">{{ trans('backend.pages.questionComment.user_name') }}</th>
                        <th width="25%">{{ trans('backend.pages.questionComment.question_code') }}</th>
                        <th width="32%">{{ trans('backend.pages.questionComment.content') }}</th>
                        <th width="10%">{{ trans('backend.pages.questionComment.created_at') }}</th>
                        <th width="8%">{{ trans('backend.pages.actions') }}</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset('js/Admin/list_question_comment.js') }}"></script>
@endsection

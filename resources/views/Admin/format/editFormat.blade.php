@extends('Admin.master')

@section('title', $format->name)

@section('progress_bar')
    <li><a href="{{ route('admin.home') }}"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li><a href="{{ route('admin.formats.index') }}">{{ trans('backend.pages.format.list_formats') }}</a></li>
    <li><a href="{{ route('admin.formats.show', $format->id) }}">{{ $format->name }}</a></li>
    <li class="active">{{ trans('backend.pages.edit_format.edit') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-body">
            <form class="form-horizontal" method="POST" action="{{ route('admin.formats.updateFormat', $format->id) }}" novalidate>
                @csrf
                @method('PUT')
                <fieldset class="content-group">
                    <legend class="text-bold">{{ $format->name }}</legend>
                    @include('Admin.layouts.errorOrSuccess')
                </fieldset>

                <div class="content-group-sm">
                    <span class="display-block">
                        <span class="display-block">{{ $format->description }}</span>
                        <label class="label label-success">{{ $format->total_question . ' ' . trans('backend.pages.edit_format.questions') }}</label>
                    </span>
                </div>

                <div id="listParts">
                    <span id="deletePartSpan"></span>
                    <div id="partExample" class="mt-10 hidden">
                        <div class="alert alert-success mb-0 mt-20">
                            <button type="button" class="close deletePart" data-partElementId=""><span>×</span></button>

                            <span class="namePart"></span>
                        </div>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>{{ trans('backend.pages.edit_format.number') }}</th>
                                    <th>{{ trans('backend.pages.edit_format.number_child_question') }}</th>
                                    <th>{{ trans('backend.pages.actions') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="question_" class="question hidden">
                                    <td>
                                        <span class="numberQuestionSpan"></span>
                                        <input
                                            value="" type="number"
                                            min="1" max="50"
                                            class="form-control hidden numberQuestionEditInput"
                                        >
                                    </td>
                                    <td>
                                        <span class="numberChildQuestionSpan"></span>
                                        <input
                                            value="" type="number"
                                            min="1" max="10"
                                            class="form-control hidden numberChildQuestionEditInput"
                                        >
                                    </td>
                                    <td>
                                        <ul class="icons-list">
                                            <li>
                                                <a
                                                    class="pr-10 editQuestion"
                                                    href="#"
                                                    title="{{ trans('backend.pages.show') }}"
                                                >
                                                    <em class="icon-pencil7"></em>
                                                </a>
                                            </li>
                                            <li>
                                                <button class="btn btn-link p-0 deleteQuestion" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                                                    <em class="icon-trash"></em>
                                                </button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr class="addQuestionTr">
                                    <td>
                                        <input type="number" min="1" max="50" class="form-control numberQuestion" placeholder="{{ trans('backend.pages.enterHere') }}">
                                    </td>
                                    <td>
                                        <input type="number" min="1" max="10" class="form-control numberChildQuestion">
                                    </td>
                                    <td>
                                        <ul class="icons-list">
                                            <li>
                                                <button class="btn btn-link p-0 addQuestion" data-popup="tooltip" title="{{ trans('backend.pages.add') }}">
                                                    <em class="icon-add"></em>
                                                </button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    @foreach ($format->parts as $key => $part)
                        <div id="part_{{ $part->id }}" class="@if($key != 0) mt-10 @endif">
                            <span class="deleteQuestionSpan"></span>
                            <div class="alert alert-success mb-0 mt-20">
                                <button type="button" class="close deletePart" data-oldPartId="{{ $part->id }}" data-partElementId="part_{{ $part->id }}"><span>×</span></button>

                                <span class="namePart">{{ $part->name }}</span>
                            </div>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>{{ trans('backend.pages.edit_format.number') }}</th>
                                        <th>{{ trans('backend.pages.edit_format.number_child_question') }}</th>
                                        <th>{{ trans('backend.pages.actions') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($part->questionFormats as $question)
                                        <tr id="question_{{ $question->id }}" class="question">
                                            <td>
                                                <span class="numberQuestionSpan">{{ $question->number }}</span>
                                                <input type="hidden" class="questionIdInput" name="part[{{ $part->id }}][editQuestion][{{ $question->id }}][id]" value="{{ $question->id }}">
                                                <input
                                                    name="part[{{ $part->id }}][editQuestion][{{ $question->id }}][number]"
                                                    value="{{ $question->number }}" type="number"
                                                    min="1" max="50"
                                                    class="form-control hidden numberQuestionEditInput"
                                                >
                                            </td>
                                            <td>
                                                <span class="numberChildQuestionSpan">{{ $question->child_questions }}</span>
                                                <input
                                                    name="part[{{ $part->id }}][editQuestion][{{ $question->id }}][childQuestions]"
                                                    value="{{ $question->child_questions }}" type="number"
                                                    min="1" max="10"
                                                    class="form-control hidden numberChildQuestionEditInput"
                                                >
                                            </td>
                                            <td>
                                                <ul class="icons-list">
                                                    <li>
                                                        <a
                                                            class="pr-10 editQuestion"
                                                            href="#"
                                                            title="{{ trans('backend.pages.show') }}"
                                                            data-partElementId="part_{{ $part->id }}"
                                                            data-questionElementId="question_{{ $question->id }}"
                                                        >
                                                            <em class="icon-pencil7"></em>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <button
                                                            class="btn btn-link p-0 deleteQuestion"
                                                            data-oldPartId="{{ $part->id }}"
                                                            data-oldQuestionId="{{ $question->id }}"
                                                            data-questionElementId="question_{{ $question->id }}"
                                                            data-partElementId="part_{{ $part->id }}"
                                                            data-popup="tooltip"
                                                            title="{{ trans('backend.pages.remove') }}">
                                                            <em class="icon-trash"></em>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    @endforeach
                                    <tr id="addQuestionTr_{{ $part->id }}" class="addQuestionTr">
                                        <td>
                                            <input type="number" min="1" max="50" class="form-control numberQuestion" placeholder="{{ trans('backend.pages.enterHere') }}">
                                        </td>
                                        <td>
                                            <input type="number" min="1" max="10" class="form-control numberChildQuestion">
                                        </td>
                                        <td>
                                            <ul class="icons-list">
                                                <li>
                                                    <button data-partElementId="part_{{ $part->id }}" data-partId="{{ $part->id }}" class="btn btn-link p-0 addQuestion" data-popup="tooltip" title="{{ trans('backend.pages.add') }}">
                                                        <em class="icon-add"></em>
                                                    </button>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    @endforeach
                </div>

                <div id="addPartDiv" class="row mt-10">
                    <div class="form-group">
                        <div class="alert alert-success mb-10 pb-5 pl-10 text-center">
                            {{ trans('backend.pages.edit_format.add_part') }}
                            <div class="form-group">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.edit_format.namePart') }}</label>
                                <div class="col-lg-11">
                                    <input id="namePart" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label col-lg-1">{{ trans('backend.pages.edit_format.description') }}</label>
                                <div class="col-lg-11">
                                    <input id="descriptionPart" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="text-center">
                                <button id="addPartBtn" type="button" class="btn btn-primary">{{ trans('backend.pages.add') }}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-right">
                    <button type="submit" class="btn btn-primary">{{ trans('backend.pages.submit') }} <i class="icon-arrow-right14 position-right"></i></button>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset(mix('js/Admin/editFormat.js')) }}"></script>
@endsection

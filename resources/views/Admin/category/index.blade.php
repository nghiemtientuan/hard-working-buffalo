@extends('Admin.master')

@section('title', trans('backend.pages.categories.list_categories'))

@section('progress_bar')
    <li><a href="#"><em class="icon-home2 position-left"></em> {{ trans('backend.progress_bar.home') }}</a></li>
    <li class="active">{{ trans('backend.pages.categories.list_categories') }}</li>
@endsection

@section('content')
    <div class="panel panel-flat">
        <div class="panel-heading">
            @include('Admin.layouts.errorOrSuccess')

            <h5 class="panel-title">{{ trans('backend.pages.categories.list_categories') }}</h5>

            <div id="treeCategories" class="mt-10">
                <ul>
                    @foreach($treeCates as $category)
                        <li data-jstree='{"icon":"icon-home2 position-left"}'>{{ $category->name }} ({{ count($category->childCates) }})
                            <ul>
                                @foreach($category->childCates as $childCategory)
                                    <li data-jstree='{"icon":"icon-key"}'>{{ $childCategory->name }} ({{ count($childCategory->tests) }})
                                        <ul>
                                            @foreach($childCategory->tests as $test)
                                                <li data-jstree='{"icon":"icon-clipboard"}'>{{ $test->name }}</li>
                                            @endforeach

                                            <li class="add_item" data-jstree='{"icon":"icon-add"}'
                                                data-href="#"
                                            ></li>
                                        </ul>
                                    </li>
                                @endforeach

                                <li class="add_item" data-jstree='{"icon":"icon-add"}'
                                    data-href="#"
                                ></li>
                            </ul>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>

    @foreach($treeCates as $category)
        <div class="panel panel-flat">
            <div class="panel-heading">
                <h5 class="panel-title">{{ $category->name }}
                    <a href="#" class="btn btn-link" data-popup="tooltip" title="{{ trans('page.edit') }}"><em class="icon-pencil7"></em></a>
                </h5>

                <div class="heading-elements">
                    <ul class="icons-list">
                        <li><a data-action="collapse"></a></li>
                        <li><a data-action="close"></a></li>
                    </ul>
                </div>
            </div>

            <div class="table-responsive">
                <table class="table table-bordered table-framed">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>{{ trans('backend.pages.categories.name') }}</th>
                            <th>{{ trans('backend.pages.categories.guide') }}</th>
                            <th>{{ trans('backend.pages.categories.number_of_tests') }}</th>
                            <th>{{ trans('backend.pages.categories.last_edit') }}</th>
                            <th>{{ trans('backend.pages.categories.actions') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                    @if(count($category->childCates) > 0)
                        @foreach($category->childCates as $key => $childCategory)
                            <tr>
                                <td>{{ $key + 1 }}</td>
                                <td>{{ $childCategory->name }}</td>
                                <td>{{ $childCategory->content_guide }}</td>
                                <td>{{ count($childCategory->tests) }}</td>
                                <td>{{ $childCategory->updated_at }}</td>
                                <td>
                                    <ul class="icons-list">
                                        <li><a href="#" data-popup="tooltip" title="{{ trans('backend.pages.edit') }}"><em class="icon-pencil7"></em></a></li>
                                        <li>
                                            <form method="POST" action="#">
                                                @method('DELETE')
                                                @csrf
                                                <button class="btn btn-link" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}"><em class="icon-trash"></em></button>
                                            </form>
                                        </li>
                                    </ul>
                                </td>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="9" class="text-center h2">{{ trans('backend.pages.no_data') }}</td>
                        </tr>
                    @endif
                    </tbody>
                </table>
            </div>
        </div>
    @endforeach
@endsection

@section('script')
    <script src="{{ asset(mix('js/Admin/list_category.js')) }}"></script>
@endsection


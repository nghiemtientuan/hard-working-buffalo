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

                                            <li
                                                class="add_item"
                                                data-jstree='{"icon":"icon-add"}'
                                                data-href="#"
                                            ></li>
                                        </ul>
                                    </li>
                                @endforeach

                                <li
                                    data-toggle="modal"
                                    data-target="#addChildCate"
                                    data-jstree='{"icon":"icon-add"}'
                                    data-href="#"
                                >
                                    <input type="hidden" value="{{ $category->id }}">
                                </li>
                            </ul>
                        </li>
                    @endforeach

                    <li
                        data-toggle="modal"
                        data-target="#addParentCate"
                        data-jstree='{"icon":"icon-add"}'
                        data-href="#"
                    >
                        <input type="hidden" value="parent">
                    </li>
                </ul>
            </div>
        </div>
    </div>

    @foreach($treeCates as $category)
        <div class="panel panel-flat">
            <div class="panel-heading">
                <h5 class="panel-title"><img class="cate-image-maxHeight" src="{{ $category->file->base_folder }}" />{{ $category->name }}
                    <a
                        class="btn btn-link"
                        data-popup="tooltip"
                        data-toggle="modal"
                        data-target="#editParentCate"
                        data-name="{{ $category->name }}"
                        data-urlFile="{{ $category->file->base_folder }}"
                        data-urlUpdate="{{ route('admin.categories.update', $category->id) }}"
                        title="{{ trans('backend.pages.edit') }}"
                    ><em class="icon-pencil7"></em></a>
                    <form method="POST" action="{{ route('admin.categories.destroy', $category->id) }}">
                        @method('DELETE')
                        @csrf
                        <button class="btn btn-link deleteCateBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                            <em class="icon-trash"></em>
                        </button>
                    </form>
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
                                <td>{{ $childCategory->guide }}</td>
                                <td>{{ count($childCategory->tests) }}</td>
                                <td>{{ $childCategory->updated_at }}</td>
                                <td>
                                    <ul class="icons-list">
                                        <li>
                                            <a
                                                data-popup="tooltip"
                                                data-toggle="modal"
                                                data-target="#editChildCate"
                                                data-name="{{ $childCategory->name }}"
                                                data-guide="{{ $childCategory->guide }}"
                                                data-urlUpdate="{{ route('admin.categories.update', $childCategory->id) }}"
                                                title="{{ trans('backend.pages.edit') }}"
                                            ><em class="icon-pencil7"></em></a></li>
                                        <li>
                                            <form method="POST" action="{{ route('admin.categories.destroy', $childCategory->id) }}">
                                                @method('DELETE')
                                                @csrf
                                                <button class="btn btn-link deleteCateBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}"><em class="icon-trash"></em></button>
                                            </form>
                                        </li>
                                    </ul>
                                </td>
                        @endforeach
                    @else
                        <tr>
                            <td colspan="6" class="text-center h2">{{ trans('backend.pages.no_data') }}</td>
                        </tr>
                    @endif
                    </tbody>
                </table>
            </div>
        </div>
    @endforeach

    <div id="addParentCate" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" action="{{ route('admin.categories.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <input id="parentId" type="hidden" name="parentId">
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.categories.add_category') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.categories.name') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="name" type="text" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.categories.newImage') }}</label>
                            <div class="col-lg-9">
                                <div class="form-group">
                                    <input
                                        type="file"
                                        name="imageCate"
                                        class="file-input"
                                        data-show-caption="false"
                                        data-show-upload="false"
                                        data-browse-class="btn btn-primary btn-sm"
                                        data-remove-class="btn btn-default btn-sm"
                                    >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-link" data-dismiss="modal">{{ trans('backend.pages.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('backend.pages.submit') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="addChildCate" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" action="{{ route('admin.categories.store') }}" method="POST">
                    @csrf
                    <input id="parentId" type="hidden" name="parentId">
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.categories.add_category') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.categories.name') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input type="text" name="name" class="form-control" placeholder="{{ trans('backend.pages.categories.name') }}">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.categories.guide') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <textarea class="form-control" name="guide" cols="56" rows="5" placeholder="{{ trans('backend.pages.categories.guide') }}"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-link" data-dismiss="modal">{{ trans('backend.pages.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('backend.pages.submit') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="editParentCate" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.categories.edit_category') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.categories.name') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="name" type="text" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.categories.image') }}</label>
                            <div class="col-lg-9">
                                <img class="category-image" src="" />
                            </div>
                        </div>

                        <div class="form-group">
                                <label class="control-label col-lg-3">{{ trans('backend.pages.categories.newImage') }}</label>
                                <div class="col-lg-9">
                                    <div class="form-group">
                                        <input
                                            type="file"
                                            name="imageCate"
                                            class="file-input"
                                            data-show-caption="false"
                                            data-show-upload="false"
                                            data-browse-class="btn btn-primary btn-sm"
                                            data-remove-class="btn btn-default btn-sm"
                                        >
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-link" data-dismiss="modal">{{ trans('backend.pages.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('backend.pages.submit') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div id="editChildCate" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form class="form-horizontal" method="POST">
                    @csrf
                    @method('PUT')
                    <div class="modal-header bg-info">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title">{{ trans('backend.pages.categories.edit_category') }}</h5>
                    </div>

                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.categories.name') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <input name="name" type="text" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="control-label col-lg-3">{{ trans('backend.pages.categories.guide') }}<span class="text-danger">*</span></label>
                            <div class="col-lg-9">
                                <textarea class="form-control" name="guide" cols="56" rows="5" placeholder="{{ trans('backend.pages.categories.guide') }}"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-link" data-dismiss="modal">{{ trans('backend.pages.close') }}</button>
                        <button type="submit" class="btn btn-primary">{{ trans('backend.pages.submit') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset(mix('js/Admin/list_category.js')) }}"></script>
@endsection


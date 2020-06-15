@extends('Client.master')

@section('title', trans('client.pages.blog.blogTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-30">
        <div class="container">
            <div id="blogAdd">
                <div class="panel">
                    <div class="panel-heading d-flex">
                        <div class="panel-heading-avatar col-1">
                            <img src="{{ userDefaultImage(getCurrentUser()->file) }}" class="rounded-circle w-50">
                        </div>

                        <div class="panel-heading-content col-11 p-0">
                            <textarea id="newBlogContent" cols="60" rows="4" class="form-control"></textarea>
                        </div>
                    </div>

                    <div class="mt-20">
                        <button id="btnSubmitNewPost" class="btn btn-primary w-100">{{ trans('client.pages.post') }}</button>
                    </div>
                </div>
            </div>

            <div id="blogsList">
                @foreach ($blogs as $blog)
                    <div id="blogItem_{{ $blog->id }}" class="blogItem panel">
                        <div class="panel-heading d-flex">
                            <div class="panel-heading-avatar col-1">
                                <img src="{{ userDefaultImage($blog->user->file) }}" class="rounded-circle w-50 panel-heading-avatar-image">
                            </div>

                            <div class="panel-heading-name col-10">
                                <p class="panel-heading-name-username m-0">{{ $blog->user->username }}</p>
                                <small><code class="panel-heading-name-time">{{ $blog->created_at }}</code></small>
                            </div>

                            @if ($user && $blog->user_id == $user->id && $blog->user_type == $user->type)
                                <div class="panel-heading-dropdown btnRemoveBlogDiv col-1">
                                    <a href="#" class="btn btn-link btnRemoveBlog" data-blogId="{{ $blog->id }}"><em class="fas fa-trash"></em></a>
                                </div>
                            @endif
                        </div>

                        <div class="panel-body">{{ $blog->content }}</div>

                        <div class="panel-reactionList d-flex justify-content-between">
                            <div class="clicked-icon-list panel-reactionList-list d-flex">
                                @foreach (config('constant.reacts') as $keyReact => $reactUrl)
                                    @php $countReact = getCountReact($blog->reacts, $keyReact) @endphp

                                    <div class="react-icon-{{ $keyReact }} @if ($countReact) d-flex @else d-none @endif align-content-center clicked-icon-list-active clicked-icon-list-active-{{ $keyReact }}">
                                        <div class="d-flex clicked-icon-list__item--img">
                                            <img src="{{ $reactUrl }}">
                                        </div>
                                        <div class="d-flex align-items-center clicked-icon-list__item--number">{{ $countReact }}</div>
                                    </div>
                                @endforeach
                            </div>

                            <div class="panel-reactionList-totalComment">
                                <span>{{ count($blog->comments) }}</span> {{ trans('client.pages.blog.comments') }}
                            </div>
                        </div>
                        <hr />

                        <div class="list-btn d-flex text-center">
                            @php $selectedReact = getSelectedReact($blog->reacts) @endphp

                            <div class="reactionsBlog-location col-6 p-0">
                                <button class="btn btn-light w-100 btnLikeHover @if (checkUserReaction($blog->reacts)) btnLikeClicked @endif">
                                    <span class="btnClickLike">
                                        @if ($selectedReact == 0)
                                            <em class="fa fa-thumbs-up"></em>
                                        @else
                                            <img class="btnClickLike--img" src="{{ config('constant.reacts')[$selectedReact] }}">
                                        @endif
                                    </span> {{ trans('client.pages.blog.react') }}
                                    <div class="reactionsBlog-lists">
                                        <ol>
                                            @foreach (config('constant.reacts') as $keyReact => $reactUrl)
                                                <li>
                                                    <div class="reactionsBlog-item reactionsBlog-item-{{ $keyReact }} d-flex flex-column align-items-center justify-content-center">
                                                        <span
                                                            class="reactionsBlog-item--content reaction"
                                                            data-reactionId="{{ $keyReact }}"
                                                            data-reactSelected="{{ $selectedReact }}"
                                                            data-blogId="{{ $blog->id }}"
                                                        >
                                                            <img class="reactionsBlog-item--content--img" src="{{ $reactUrl }}">
                                                        </span>

                                                        <span class="dot-active mt-auto @if ($selectedReact != $keyReact) d-none @endif"></span>
                                                    </div>
                                                </li>
                                            @endforeach
                                        </ol>
                                    </div>
                                </button>
                            </div>
                            <div class="col-6 p-0">
                                <button
                                    class="btn btn-light w-100 btnClickComment"
                                    data-countComments="{{ count($blog->comments) }}"
                                    data-urlLastPageComment="{{ route('client.blogs.dataComments', [
                                        'blogId' => $blog->id,
                                        'page' => (ceil(count($blog->comments)/config('constant.limit.comments')))
                                    ]) }}"
                                    data-blogId="{{ $blog->id }}"
                                >
                                    <em class="fa fa-comment-alt"></em> {{ trans('client.pages.blog.comments') }}
                                </button>
                            </div>
                        </div>
                        <hr />

                        <div class="seemore-comments">
                            <a href="#" class="btn btn-link d-none btn-seemore-comment" data-blogId="{{ $blog->id }}">{{ trans('client.pages.see_more') }}</a>
                        </div>

                        <div class="list-comments"></div>

                        <div class="add-comments d-none">
                            <div class="col-10 p-0 mr-5 mt-10">
                                <textarea class="form-control add-comments-content" cols="30" rows="3"></textarea>
                            </div>

                            <div class="col-2 p-0 mt-10">
                                <button class="btn btn-primary w-100 add-comments-btn" data-blogId="{{ $blog->id }}">{{ trans('client.pages.send') }}</button>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

            @if ($blogs->currentPage() != $blogs->lastPage())
                <div class="mt-20">
                    <button
                        id="btnSeeMoreBlogs"
                        class="btn btn-default w-100"
                        data-next_page_url="{{ route('client.blogs.dataBlog', ['page' => 2]) }}"
                    >{{ trans('client.pages.see_more') }}</button>
                </div>
            @endif
        </div>
    </div>

    <div id="blogItemExample" class="blogItem panel d-none">
        <div class="panel-heading d-flex">
            <div class="panel-heading-avatar col-1">
                <img src="#" class="rounded-circle w-50 panel-heading-avatar-image">
            </div>

            <div class="panel-heading-name col-10">
                <p class="panel-heading-name-username m-0"></p>
                <small><code class="panel-heading-name-time"></code></small>
            </div>

            <div class="panel-heading-dropdown btnRemoveBlogDiv col-1">
                <a href="#" class="btn btn-link btnRemoveBlog" data-blogId=""><em class="fas fa-trash"></em></a>
            </div>
        </div>

        <div class="panel-body"></div>

        <div class="panel-reactionList d-flex justify-content-between">
            <div class="clicked-icon-list panel-reactionList-list d-flex">
                @foreach (config('constant.reacts') as $keyReact => $reactUrl)
                    <div class="react-icon-{{ $keyReact }} d-flex align-content-center clicked-icon-list-active clicked-icon-list-active-{{ $keyReact }}">
                        <div class="d-flex clicked-icon-list__item--img">
                            <img src="{{ $reactUrl }}">
                        </div>
                        <div class="d-flex align-items-center clicked-icon-list__item--number"></div>
                    </div>
                @endforeach
            </div>

            <div>
                <span class="panel-reactionList-totalComment"></span> {{ trans('client.pages.blog.comments') }}
            </div>
        </div>
        <hr />

        <div class="list-btn d-flex text-center">
            <div class="reactionsBlog-location col-6 p-0">
                <button class="btn btn-light w-100 btnLikeHover">
                    <span class="btnClickLike">
                        <em class="fa fa-thumbs-up"></em>
                    </span> {{ trans('client.pages.blog.react') }}
                    <div class="reactionsBlog-lists">
                        <ol>
                            @foreach (config('constant.reacts') as $keyReact => $reactUrl)
                                <li>
                                    <div class="reactionsBlog-item reactionsBlog-item-{{ $keyReact }} d-flex flex-column align-items-center justify-content-center">
                                        <span
                                            class="reactionsBlog-item--content reaction"
                                            data-reactionId="{{ $keyReact }}"
                                        >
                                            <img class="reactionsBlog-item--content--img" src="{{ $reactUrl }}">
                                        </span>

                                        <span class="dot-active mt-auto"></span>
                                    </div>
                                </li>
                            @endforeach
                        </ol>
                    </div>
                </button>
            </div>
            <div class="col-6 p-0">
                <button class="btn btn-light w-100 btnClickComment" data-countComments="">
                    <em class="fa fa-comment-alt"></em> {{ trans('client.pages.blog.comments') }}
                </button>
            </div>
        </div>
        <hr />

        <div class="seemore-comments">
            <a href="#" class="btn btn-link d-none btn-seemore-comment" data-blogId="">{{ trans('client.pages.see_more') }}</a>
        </div>

        <div class="list-comments"></div>

        <div class="add-comments d-none">
            <div class="col-10 p-0 mr-5 mt-10">
                <textarea class="form-control add-comments-content" cols="30" rows="3"></textarea>
            </div>

            <div class="col-2 p-0 mt-10">
                <button class="btn btn-primary w-100 add-comments-btn" data-blogId="">{{ trans('client.pages.send') }}</button>
            </div>
        </div>
    </div>

    <div id="commentItemExample" class="d-none mt-10">
        <div class="col-1">
            <img src="#" class="rounded-circle commentItem-avatar w-50">
        </div>

        <div class="commentItem-content">
            <div>
                <a href="#" class="commentItem-content-username"></a>
                <span class="commentItem-content-content"></span>
            </div>
            <a href="#" class="removeCommentBtn"><small>{{ trans('client.pages.delete') }}</small></a>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

@section('script')
    <script src="{{ asset('js/Client/blog.js') }}"></script>
@endsection

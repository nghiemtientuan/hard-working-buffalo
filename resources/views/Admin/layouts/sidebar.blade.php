<div class="sidebar sidebar-main">
    <div class="sidebar-content">
        <div class="sidebar-user">
            <div class="category-content">
                <div class="media">
                    <a href="#" class="media-left">
                        <img src="{{ userDefaultImage(Auth::user()->file) }}" class="img-circle img-sm">
                    </a>
                    <div class="media-body">
                        <span class="media-heading text-semibold">{{ Auth::user()->username }}</span>
                        <div class="text-size-mini text-muted">
                            <i class="icon-pin text-size-small"></i> &nbsp;{{ locationCityCountry(Request::ip()) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sidebar-category sidebar-category-visible">
            <div class="category-content no-padding">
                <ul class="navigation navigation-main navigation-accordion">
                    <li class="navigation-header"><span>{{ trans('backend.sidebar.main') }}</span> <i class="icon-menu"></i></li>

                    <li class="{{ request()->is('admin') ? 'active' : '' }}">
                        <a href="#"><i class="icon-home4"></i> <span>{{ trans('backend.sidebar.list.dashboard') }}</span></a>
                    </li>

                    <li class="{{ request()->is('admin/categories') || request()->is('admin/categories/*') ? 'active' : '' }}">
                        <a href="{{ route('admin.categories.index') }}"><i class="icon-copy"></i> <span>{{ trans('backend.sidebar.list.categories') }}</span></a>
                    </li>

                    <li
                        class="{{
                            request()->is('admin/users')
                            || request()->is('admin/users/*')
                            || request()->is('admin/students')
                            || request()->is('admin/students/*')
                            ? 'active' : '' }}"
                    >
                        <a href="#"><i class="icon-stack2"></i> <span>{{ trans('backend.sidebar.list.accounts') }}</span></a>
                        <ul>
                            <li class="{{ request()->is('admin/students') ? 'active' : '' }}">
                                <a href="{{ route('admin.students.index') }}">{{ trans('backend.sidebar.list.students') }}</a>
                            </li>
                            <li class="{{ request()->is('admin/users') ? 'active' : '' }}">
                                <a href="{{ route('admin.users.index') }}">{{ trans('backend.sidebar.list.users') }}</a>
                            </li>
                        </ul>
                    </li>

                    <li class="{{ request()->is('admin/tests') || request()->is('admin/tests/*') ? 'active' : '' }}">
                        <a href="{{ route('admin.tests.index') }}"><i class="icon-copy"></i> <span>{{ trans('backend.sidebar.list.tests') }}</span></a>
                    </li>

                    <li class="{{ (request()->is('admin/questions') || request()->is('admin/questions/*'))
                        && !request()->is('admin/questions/comments') ? 'active' : '' }}">
                        <a href="{{ route('admin.questions.index') }}"><i class="icon-copy"></i> <span>{{ trans('backend.sidebar.list.questions') }}</span></a>
                    </li>

                    <li class="{{ request()->is('admin/questions/comments') ? 'active' : '' }}">
                        <a href="{{ route('admin.questions.comments.index') }}"><i class="icon-droplet2"></i> <span>{{ trans('backend.sidebar.list.question_comments') }}</span></a>
                    </li>

                    <li class="{{ request()->is('admin/backups') ? 'active' : '' }}">
                        <a href="#"><i class="icon-droplet2"></i> <span>{{ trans('backend.sidebar.list.backups') }}</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

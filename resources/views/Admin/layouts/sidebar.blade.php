<div class="sidebar sidebar-main">
    <div class="sidebar-content">
        <div class="sidebar-user">
            <div class="category-content">
                <div class="media">
                    <a href="#" class="media-left">
                        <img src="#" class="img-circle img-sm">
                    </a>
                    <div class="media-body">
                        <span class="media-heading text-semibold"></span>
                        <div class="text-size-mini text-muted">
                            <i class="icon-pin text-size-small"></i> &nbsp;
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
                        <a href="#"><i class="icon-copy"></i> <span>{{ trans('backend.sidebar.list.categories') }}</span></a>
                    </li>

                    <li class="{{ request()->is('admin/users') || request()->is('admin/users/*') ? 'active' : '' }}">
                        <a href="#"><i class="icon-stack2"></i> <span>{{ trans('backend.sidebar.list.accounts') }}</span></a>
                        <ul>
                            <li class="{{ request()->is('admin/users') ? 'active' : '' }}">
                                <a href="#">{{ trans('backend.sidebar.list.students') }}</a>
                            </li>
                            <li class="{{ request()->is('admin/users/edit') ? 'active' : '' }}">
                                <a href="#">{{ trans('backend.sidebar.list.users') }}</a>
                            </li>
                        </ul>
                    </li>

                    <li class="{{ request()->is('admin/categories') || request()->is('admin/categories/*') ? 'active' : '' }}">
                        <a href="#"><i class="icon-copy"></i> <span>{{ trans('backend.sidebar.list.tests') }}</span></a>
                    </li>

                    <li class="{{ request()->is('admin/categories') || request()->is('admin/categories/*') ? 'active' : '' }}">
                        <a href="#"><i class="icon-copy"></i> <span>{{ trans('backend.sidebar.list.questions') }}</span></a>
                    </li>

                    <li class="{{ request()->is('admin/comments') ? 'active' : '' }}">
                        <a href="#"><i class="icon-droplet2"></i> <span>{{ trans('backend.sidebar.list.question_comments') }}</span></a>
                    </li>

                    <li class="{{ request()->is('admin/backups') ? 'active' : '' }}">
                        <a href="#"><i class="icon-droplet2"></i> <span>{{ trans('backend.sidebar.list.backups') }}</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

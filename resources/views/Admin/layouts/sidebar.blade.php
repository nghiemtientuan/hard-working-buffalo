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
                    <li class="navigation-header"><span>{{ trans('sidebar.Main') }}</span> <i class="icon-menu"></i></li>
                    <li class="{{ request()->is('admin') ? 'active' : '' }}">
                        <a href="#"><i class="icon-home4"></i> <span>{{ trans('sidebar.Dashboard') }}</span></a>
                    </li>
                        <li class="{{ request()->is('admin/users') || request()->is('admin/users/*') ? 'active' : '' }}">
                            <a href="#"><i class="icon-stack2"></i> <span>{{ trans('page.users.list.users') }}</span></a>
                            <ul>
                                <li class="{{ request()->is('admin/users') ? 'active' : '' }}">
                                    <a href="#">{{ trans('page.list_users') }}</a>
                                </li>
                                    <li class="{{ request()->is('admin/users/edit') ? 'active' : '' }}">
                                        <a href="#">{{ trans('page.add_user') }}</a>
                                    </li>
                            </ul>
                        </li>
                        <li class="{{ request()->is('admin/categories') || request()->is('admin/categories/*') ? 'active' : '' }}">
                            <a href="#"><i class="icon-copy"></i> <span>{{ trans('page.category.list_categories') }}</span></a>
                        </li>
                        <li class="{{ request()->is('admin/tests') || request()->is('admin/tests/*') ? 'active' : '' }}">
                            <a href="#"><i class="icon-droplet2"></i> <span>{{ trans('page.test.list_tests') }}</span></a>
                            <ul>
                                <li class="{{ request()->is('admin/tests') ? 'active' : '' }}">
                                    <a href="#">{{ trans('page.list_tests') }}</a>
                                </li>
                                    <li class="{{ request()->is('admin/tests/create') ? 'active' : '' }}">
                                        <a href="#">{{ trans('page.add_test') }}</a>
                                    </li>
                            </ul>
                        </li>
                        <li class="{{ request()->is('admin/questions') || request()->is('admin/questions/*') ? 'active' : '' }}">
                            <a href="#"><i class="icon-droplet2"></i> <span>{{ trans('page.question.questions') }}</span></a>
                            <ul>
                                <li class="{{ request()->is('admin/questions') ? 'active' : '' }}">
                                    <a href="#">{{ trans('page.question.list_questions') }}</a>
                                </li>
                                    <li class="{{ request()->is('admin/questions/create') ? 'active' : '' }}">
                                        <a href="#">{{ trans('page.question.add_question') }}</a>
                                    </li>
                                    <li class="{{ request()->is('admin/questions/import') ? 'active' : '' }}">
                                        <a href="#">{{ trans('page.question.add_question_by_file') }}</a>
                                    </li>
                            </ul>
                        </li>
                        <li class="{{ request()->is('admin/comments') ? 'active' : '' }}">
                            <a href="#"><i class="icon-droplet2"></i> <span>{{ trans('page.comment.comments') }}</span></a>
                        </li>
                        <li class="{{ request()->is('admin/backups') ? 'active' : '' }}">
                            <a href="#"><i class="icon-droplet2"></i> <span>{{ trans('page.backup.list_backup') }}</span></a>
                        </li>
                </ul>
            </div>
        </div>
    </div>
</div>

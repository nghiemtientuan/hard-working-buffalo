<div class="navbar navbar-default header-highlight">
    <div class="navbar-header">
        <a class="navbar-brand" href="#"><img src="#"></a>

        <ul class="nav navbar-nav visible-xs-block">
            <li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a></li>
            <li><a class="sidebar-mobile-main-toggle"><i class="icon-paragraph-justify3"></i></a></li>
        </ul>
    </div>

    <div class="navbar-collapse collapse" id="navbar-mobile">
        <ul class="nav navbar-nav">
            <li><a class="sidebar-control sidebar-main-toggle hidden-xs"><i class="icon-paragraph-justify3"></i></a></li>
        </ul>

        <p class="navbar-text"><span class="label bg-success">{{ trans('navbar.Online') }}</span></p>

        <p class="navbar-text">
            <a class="text-success" href="#"><i class="icon-backward"></i> {{ trans('navbar.view_client') }}</a>
        </p>

        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown language-switch">
                <a class="dropdown-toggle" data-toggle="dropdown">
                    <img src="#" class="position-left">
                    {{ trans('navbar.English') }}
                    <span class="caret"></span>
                </a>

                <ul class="dropdown-menu">
                    <li><a class="deutsch"><img src="#"> {{ trans('navbar.Deutsch') }}</a></li>
                </ul>
            </li>

            <li id="dropdown_notify" class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="icon-bubbles4"></i>
                    <span class="visible-xs-inline-block position-right">{{ trans('navbar.Messages') }}</span>
                    <span id="count_notifications" class="badge bg-warning-400"></span>
                </a>

                <div class="dropdown-menu dropdown-content width-350">
                    <div class="dropdown-content-heading">
                        {{ trans('navbar.Messages') }}
                    </div>

                    <ul id="list_notifications" class="media-list dropdown-content-body"></ul>
                </div>
            </li>
            <li class="dropdown dropdown-user">
                <a class="dropdown-toggle" data-toggle="dropdown">
                    <img src="#">
                    <span></span>
                    <i class="caret"></i>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="#"><i class="icon-user-plus"></i> {{ trans('navbar.my_profile') }}</a></li>
                    <li><a href="#"><i class="icon-cog5"></i> {{ trans('navbar.account_settings') }}</a></li>
                    <li><a href="#"><i class="icon-switch2"></i> {{ trans('navbar.logout') }}</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>

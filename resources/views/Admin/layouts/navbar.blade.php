<div class="navbar navbar-default header-highlight">
    <div class="navbar-header">
        <a class="navbar-brand pt-5 pb-5" href="{{ route('admin.home') }}"><img id="logoNavbar" src="{{ config('constant.default_images.url_logo') }}" alt=""></a>

        <ul class="nav navbar-nav visible-xs-block">
            <li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a></li>
            <li><a class="sidebar-mobile-main-toggle"><i class="icon-paragraph-justify3"></i></a></li>
        </ul>
    </div>

    <div class="navbar-collapse collapse" id="navbar-mobile">
        <ul class="nav navbar-nav">
            <li><a class="sidebar-control sidebar-main-toggle hidden-xs"><i class="icon-paragraph-justify3"></i></a></li>
        </ul>

        <p class="navbar-text"><span class="label bg-success">{{ trans('backend.navbar.online') }}</span></p>

        <p class="navbar-text">
            <a class="text-success" href="{{ route('client.home') }}"><i class="icon-backward"></i> {{ trans('backend.navbar.view_client') }}</a>
        </p>

        <ul class="nav navbar-nav navbar-right">
            <li class="dropdown language-switch">
                <a class="dropdown-toggle" data-toggle="dropdown">
                    <img src="/bower_components/assets/Common/images/flags/england.png" class="position-left">
                    {{ trans('backend.navbar.english') }}
                    <span class="caret"></span>
                </a>

                <ul class="dropdown-menu">
                    <li><a class="vietnam"><img src="/bower_components/assets/Common/images/flags/vn.png"> {{ trans('backend.navbar.vietnam') }}</a></li>
                </ul>
            </li>

            <li id="dropdown_notify" class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="icon-bubbles4"></i>
                    <span class="visible-xs-inline-block position-right">{{ trans('backend.navbar.messages') }}</span>
                    <span id="count_notifications" class="badge bg-warning-400"></span>
                </a>

                <div class="dropdown-menu dropdown-content width-350">
                    <div class="dropdown-content-heading">
                        {{ trans('backend.navbar.messages') }}
                    </div>

                    <ul id="list_notifications" class="media-list dropdown-content-body"></ul>
                </div>
            </li>
            <li class="dropdown dropdown-user">
                <a class="dropdown-toggle" data-toggle="dropdown">
                    <img src="{{ userDefaultImage(Auth::user()->file) }}">
                    <span></span>
                    <i class="caret"></i>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="{{ route('admin.profile') }}"><i class="icon-user-plus"></i> {{ trans('backend.navbar.my_profile') }}</a></li>
                    <li><a href="#"><i class="icon-cog5"></i> {{ trans('backend.navbar.account_settings') }}</a></li>
                    <li>
                        <form action="{{ route('client.logout') }}" method="POST">
                            @csrf
                            <button type="submit" class="btn btn-link">
                                <i class="icon-switch2"></i> {{ trans('backend.navbar.logout') }}
                            </button>
                        </form>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>

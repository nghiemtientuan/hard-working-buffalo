<div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
        </div>
    </div>
    <div class="site-mobile-menu-body"></div>
</div>

<div class="py-2 bg-light">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-9 d-none d-lg-block">
                <span class="small mr-3"><span class="icon-phone2 mr-2"></span>{{ config('settings.phone_help') }}</span>
                <span class="small mr-3"><span class="icon-envelope-o mr-2"></span>{{ config('settings.email_help') }}</span>
                @if (Auth::check())
                    <a href="{{ route('admin.home') }}"><span class="icon-retweet"></span>{{ trans('client.header.view_backend') }}</a>
                @endif
            </div>
            <div class="col-lg-3 text-right">
                @if (Auth::guard('student')->check() || Auth::check())
                    <form action="{{ route('client.logout') }}" method="POST">
                        @csrf
                        <button type="submit" class="btn btn-link small mr-3">
                            <span class="icon-unlock-alt"></span> {{ trans('client.header.logout') }}
                        </button>
                    </form>
                @else
                    <a href="{{ route('client.login') }}" class="small mr-3">
                        <span class="icon-unlock-alt"></span> {{ trans('client.header.login') }}
                    </a>
                @endif
            </div>
        </div>
    </div>
</div>
<header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
    <div class="container">
        <div class="d-flex align-items-center">
            <div class="site-logo">
                <a href="#" class="d-block">
                    <img src="{{ asset(config('constant.default_images.url_logo')) }}" class="img-fluid">
                </a>
            </div>
            <div class="mr-auto">
                @include('Client.layouts.navbar')
            </div>
            <ul class="nav navbar-nav navbar-right">
                @if (Auth::check() || Auth::guard('student')->check())
                    <li class="dropdown dropdown-user">
                        <a class="dropdown-toggle" data-toggle="dropdown">
                            @if (Auth::guard('student')->check())
                                {{ Auth::guard('student')->user()->username }}
                                (<span id="headerCoinNumber">25</span> {{ trans('client.header.coin') }})
                                <img src="{{ userDefaultImage(Auth::guard('student')->user()->file) }}" class="rounded-circle w-50">
                            @else
                                {{ Auth::user()->username }}
                                <img src="{{ userDefaultImage(Auth::user()->file) }}" class="rounded-circle w-50">
                            @endif
                            <i class="caret"></i>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-right">
                            <li><a href="{{ route('admin.profile') }}"><i class="icon-user-plus"></i> {{ trans('backend.navbar.my_profile') }}</a></li>
                            <li><a href="#"><i class="icon-cog5"></i> {{ trans('backend.navbar.account_settings') }}</a></li>
                            <li>
                                <button type="submit" class="btn btn-link">
                                    <i class="icon-switch2"></i> {{ trans('backend.navbar.logout') }}
                                </button>
                            </li>
                        </ul>
                    </li>
                @endif
            </ul>
        </div>
    </div>
</header>

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
                    <a href="{{ route('client.getSignin') }}" class="small mr-3">
                        <span class="icon-user-plus"></span> {{ trans('client.header.signIn') }}
                    </a>
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
            <ul class="nav navbar-nav navbar-right cursor-pointer">
                @if (Auth::check() || Auth::guard('student')->check())
                    <li class="dropdown dropdown-user">
                        <a class="dropdown-toggle" data-toggle="dropdown">
                            @if (Auth::guard('student')->check())
                                {{ Auth::guard('student')->user()->username }}
                                (<span id="headerCoinNumber">{{ Auth::guard('student')->user()->coin }}</span> <i class="fa fa-gem"></i>)
                                <img src="{{ userDefaultImage(Auth::guard('student')->user()->file) }}" class="rounded-circle w-50">
                                <i class="caret"></i>
                            @else
                                {{ Auth::user()->username }}
                                <img src="{{ userDefaultImage(Auth::user()->file) }}" class="rounded-circle w-50">
                            @endif
                        </a>

                        @if (Auth::guard('student')->check())
                            <ul class="dropdown-menu dropdown-menu-right p-2 mt-20 width-250">
                                <li><a class="color-black" href="{{ route('client.profile.index') }}"><i class="icon-user"></i> {{ trans('client.navbar.my_profile') }}</a></li>
                                <li><a class="color-black" href="{{ route('client.timeline.index') }}"><i class="icon-clock-o"></i> {{ trans('client.navbar.timeline') }}</a></li>
                                <li><a class="color-black" href="{{ route('client.payments.index') }}"><i class="icon-payment"></i> {{ trans('client.navbar.payment') }}</a></li>
                                <li><a class="color-black" href="{{ route('client.changePass.show') }}"><i class="icon-sync"></i>{{ trans('client.navbar.change_password') }}</a></li>
                            </ul>
                        @endif
                    </li>
                @endif
            </ul>
        </div>
    </div>
</header>

<nav class="site-navigation position-relative text-right" role="navigation">
    <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block pl-10">
        <li class="{{ request()->is('/') ? 'active' : '' }}">
            <a href="{{ route('client.home') }}" class="nav-link text-left pl-10 pr-10">{{ trans('client.navbar.main') }}</a>
        </li>
        <li class="has-children {{ request()->is('categories/*') ? 'active' : '' }}">
            <a href="#" class="nav-link text-left">{{ trans('client.navbar.list.categories') }}</a>
            <ul class="dropdown">
                @foreach($parentCateComposer as $parentCate)
                    <li>
                        <a href="{{ route('client.categories.show', $parentCate->id) }}">{{ $parentCate->name }}</a>
                    </li>
                @endforeach
            </ul>
        </li>
        @if (Auth::guard('student')->check() || Auth::check())
            <li class="{{ request()->is('histories') ? 'active' : '' }}">
                <a href="{{ route('client.histories.index') }}" class="nav-link text-left pl-10 pr-10">{{ trans('client.navbar.list.histories') }}</a>
            </li>

            @if (Auth::guard('student')->check())
                <li class="{{ request()->is('calendars') ? 'active' : '' }}">
                    <a href="{{ route('client.calendars.index') }}" class="nav-link text-left pl-10 pr-10">{{ trans('client.navbar.list.calendar') }}</a>
                </li>
                <li class="{{ request()->is('statistic/*') ? 'active' : '' }}">
                    <a href="{{ route('client.statistic.index') }}" class="nav-link text-left pl-10 pr-10">{{ trans('client.navbar.list.statistic') }}</a>
                </li>
            @endif
        @endif
        <li class="{{ request()->is('ranking') ? 'active' : '' }}">
            <a href="{{ route('client.ranking.index') }}" class="nav-link text-left pl-10 pr-10">{{ trans('client.navbar.list.ranking') }}</a>
        </li>
        @if (Auth::guard('student')->check() || Auth::check())
            <li class="{{ request()->is('blogs') ? 'active' : '' }}">
                <a href="{{ route('client.blogs.index') }}" class="nav-link text-left pl-10 pr-10">{{ trans('client.navbar.list.blog') }}</a>
            </li>
        @endif
    </ul>
</nav>

<nav class="site-navigation position-relative text-right" role="navigation">
    <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
        <li class="active">
            <a href="#" class="nav-link text-left">{{ trans('client.navbar.main') }}</a>
        </li>
        <li class="has-children">
            <a href="#" class="nav-link text-left">{{ trans('client.navbar.list.categories') }}</a>
            <ul class="dropdown">
                @foreach($parentCateComposer as $parentCate)
                    <li>
                        <a href="#">{{ $parentCate->name }}</a>
                    </li>
                @endforeach
            </ul>
        </li>
        <li>
            <a href="#" class="nav-link text-left">{{ trans('client.navbar.list.histories') }}</a>
        </li>
        <li>
            <a href="#" class="nav-link text-left">{{ trans('client.navbar.list.ranking') }}</a>
        </li>
        <li>
            <a href="#" class="nav-link text-left">{{ trans('client.navbar.list.blog') }}</a>
        </li>
    </ul>
</nav>

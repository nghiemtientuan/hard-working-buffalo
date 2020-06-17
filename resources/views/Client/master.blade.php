<!DOCTYPE html>
<html lang="en">
<head>
    <title>@yield('title')</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    @routes
    @include('Client.layouts.styles')

    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body class="color-black" data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
    <div class="site-wrap">
        @include('Client.layouts.header')

        @yield('content')

        @include('Client.layouts.footer')

        @include('Client.layouts.loader')
    </div>

    @include('Client.layouts.scripts')
</body>
</html>

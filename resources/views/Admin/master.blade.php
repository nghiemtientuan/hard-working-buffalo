<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    @routes

    @include('Admin.layouts.styles')
</head>

<body>
    <!-- Main navbar -->
    @include('Admin.layouts.navbar')
    <!-- /main navbar -->

    <!-- Page container -->
    <div class="page-container">

        <!-- Page content -->
        <div class="page-content">

            <!-- Main sidebar -->
            @include('Admin.layouts.sidebar')
            <!-- /main sidebar -->

            <!-- Main content -->
            <div class="content-wrapper">
                <div class="page-header mt-15 mb-15">
                    <div class="breadcrumb-line breadcrumb-line-component">
                        <ul class="breadcrumb">
                            @yield('progress_bar')
                        </ul>
                    </div>
                </div>

                <!-- Content area -->
                <div class="content">

                    @yield('content')

                    <!-- Footer -->
                    @include('Admin.layouts.footer')
                    <!-- /footer -->

                </div>
                <!-- /content area -->

            </div>
            <!-- /main content -->

        </div>
        <!-- /page content -->

    </div>
    <!-- /page container -->

    @include('Admin.layouts.scripts')
</body>
</html>

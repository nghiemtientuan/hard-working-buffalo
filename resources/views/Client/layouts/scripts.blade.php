<script src="{{ asset('bower_components/assets/Client/js/jquery-3.3.1.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/jquery-migrate-3.0.1.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/jquery-ui.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/popper.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/jquery.stellar.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/jquery.countdown.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/bootstrap-datepicker.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/jquery.easing.1.3.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/aos.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/jquery.fancybox.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/jquery.sticky.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/jquery.mb.YTPlayer.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/sweetalert.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Client/js/main.js') }}"></script>
<script src="{{ asset('bower_components/assets/Common/js/toastr/toastr.min.js') }}"></script>

<script type="text/javascript" src="{{ asset(mix('js/common/helper.js')) }}"></script>
<script type='text/javascript'>
    window.translations = {!! $translations !!}
</script>
@yield('script')

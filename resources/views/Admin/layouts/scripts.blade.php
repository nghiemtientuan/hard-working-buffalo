<script src="{{ asset('bower_components/assets/Admin/js/plugins/visualization/c3/c3.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Admin/js/core/libraries/jquery.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Admin/js/datatables/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Admin/js/treejs/jstree.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Common/js/sweet-alert/sweetalert2@9.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/assets/Admin/js/toastr/toastr.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/assets/Admin/js/plugins/forms/validation/validate.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/purify.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/assets/Admin/js/plugins/uploaders/fileinput/plugins/sortable.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('bower_components/assets/Admin/js/plugins/uploaders/fileinput/fileinput.min.js') }}"></script>
<script src="{{ asset('bower_components/assets/Admin/js/pages/uploader_bootstrap.js') }}"></script>

<script type="text/javascript" src="{{ asset(mix('js/common/helper.js')) }}"></script>
<script type="text/javascript" src="{{ asset(mix('js/admin.js')) }}"></script>
<script type='text/javascript'>
    window.translations = {!! $translations !!}
</script>

@yield('script')

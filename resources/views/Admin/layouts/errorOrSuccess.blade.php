@if (Session::has('success'))
    <div class="autoHideAlert alert alert-success alert-styled-left alert-arrow-left alert-bordered">
        <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">Close</span></button>
        <span class="text-semibold">{{ Session::get('success') }}</span>
    </div>
@endif

@if (isset($errors) && count($errors))
    <div class="autoHideAlert alert alert-danger alert-styled-left alert-arrow-left alert-bordered">
        <button type="button" class="close" data-dismiss="alert"><span>&times;</span><span class="sr-only">{{ trans('client.actions.close') }}</span></button>
        <span class="text-semibold">{{ $errors->first() }}</span>
    </div>
@endif

@if (Session::has('success') || (isset($errors) && count($errors)))
    <script src="{{ asset('js/common/layouts.js') }}"></script>
@endif

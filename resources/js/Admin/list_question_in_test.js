$(document).ready(function () {
    $(document).on('click', '.deleteQuestionBtn', function (e) {
        e.preventDefault();
        Swal.fire({
            title: trans('backend.actions.are_you_sure'),
            text: trans('backend.actions.you_will_delete_this'),
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: trans('backend.actions.yes')
        }).then((result) => {
            if (result.value) {
                $(this).parent('form').submit();
            }
        });
    });
});

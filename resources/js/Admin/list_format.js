$(function () {
    $('#list_format_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: route('admin.formats.getData').template,
        columns: [
            { data: 'name', name: 'name' },
            { data: 'description', name: 'description' },
            { data: 'applyTestsNumber', name: 'applyTestsNumber' },
            { data: 'created_at', name: 'created_at' },
            { data: 'action', name: 'action' },
        ]
    });
});

$(document).ready(function () {
    let formatValidates = {
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            description: {
                required: true,
                minlength: 2,
                maxlength: 255,
            },
        }
    };

    let validatorUpdateFormat = $("#editFormat form").validate(formatValidates);

    $('#editFormat form input[name=name]').on('keyup', function () {
        validateDisabled($('#editFormat form'), $('#editFormat button[type="submit"]'));
    });
    $('#editFormat form textarea[name=description]').on('keyup', function () {
        validateDisabled($('#editFormat form'), $('#editFormat button[type="submit"]'));
    });

    $('#list_format_table').on('click', '.editFormatBtn', function () {
        validatorUpdateFormat.resetForm();
        $('#editFormat form').attr('action', route('admin.formats.update', $(this).attr('data-formatId')));
        $('#editFormat input[name=name]').val($(this).attr('data-name'));
        $('#editFormat textarea[name=description]').text($(this).attr('data-description'));
    });

    $('#list_format_table').on('click', '.deleteFormatBtn', function (e) {
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

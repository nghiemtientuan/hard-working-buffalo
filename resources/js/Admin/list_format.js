$(function () {
    $('#list_format_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: route('admin.formats.getData').template,
        columns: [
            { data: 'name', name: 'name' },
            { data: 'total_question', name: 'total_question' },
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
            total_question: {
                required: true,
                min: 1,
                max: 100,
            },
            description: {
                required: true,
                minlength: 2,
                maxlength: 255,
            },
        }
    };

    let validatorUpdateFormat = $("#editFormat form").validate(formatValidates);
    let validatorAddFormat = $("#addFormat form").validate(formatValidates);

    $('#addFormat form').on('keyup', 'input[name=name], textarea[name=description]', function () {
        validateDisabled($('#addFormat form'), $('#addFormat button[type="submit"]'));
    });

    $('#editFormat form').on('keyup', 'input[name=name], textarea[name=description]', function () {
        validateDisabled($('#editFormat form'), $('#editFormat button[type="submit"]'));
    });

    $('#addFormatBtn').on('click', function () {
        validatorAddFormat.resetForm();
    });

    $('#list_format_table').on('click', '.editFormatBtn', function () {
        validatorUpdateFormat.resetForm();
        $('#editFormat form').attr('action', route('admin.formats.update', $(this).attr('data-formatId')));
        $('#editFormat input[name=name]').val($(this).attr('data-name'));
        $('#editFormat input[name=total_question]').val($(this).attr('data-total_question'));
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

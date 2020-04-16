$(function () {
    $('#list_test_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: route('admin.tests.getData').template,
        columns: [
            { data: 'code', name: 'code' },
            { data: 'name', name: 'name' },
            { data: 'execute_time', name: 'execute_time' },
            { data: 'score', name: 'score' },
            { data: 'level', name: 'level' },
            { data: 'publish', name: 'publish' },
            { data: 'action', name: 'action' },
        ]
    });
});

$(document).ready(function () {
    let testValidates = {
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            execute_time: {
                required: true,
                min: 1,
                max: 240,
            },
            total_question: {
                required: true,
                min: 1,
                max: 200,
            },
            price: {
                required: true,
                min: 1,
                max: 10000,
            },
            score: {
                required: true,
                min: 1,
                max: 100,
            },
            level: {
                required: true,
                min: 1,
                max: 10,
            },
            publish: {
                required: true,
                min: 0,
                max: 1,
            },
            guide: {
                required: true,
                minlength: 2,
                maxlength: 500
            },
        }
    };

    let validatorUpdateTest = $("#editTest form").validate(testValidates);

    $('#editTest form input[name=name]').on('keyup', function () {
        validateDisabled($('#editTest form'), $('#editTest button[type="submit"]'));
    });
    $('#editTest form input[name=execute_time]').on('keyup', function () {
        validateDisabled($('#editTest form'), $('#editTest button[type="submit"]'));
    });
    $('#editTest form input[name=total_question]').on('keyup', function () {
        validateDisabled($('#editTest form'), $('#editTest button[type="submit"]'));
    });
    $('#editTest form input[name=price]').on('keyup', function () {
        validateDisabled($('#editTest form'), $('#editTest button[type="submit"]'));
    });
    $('#editTest form input[name=score]').on('keyup', function () {
        validateDisabled($('#editTest form'), $('#editTest button[type="submit"]'));
    });
    $('#editTest form input[name=level]').on('keyup', function () {
        validateDisabled($('#editTest form'), $('#editTest button[type="submit"]'));
    });
    $('#editTest form input[name=publish]').on('keyup', function () {
        validateDisabled($('#editTest form'), $('#editTest button[type="submit"]'));
    });
    $('#editTest form textarea[name=guide]').on('keyup', function () {
        validateDisabled($('#editTest form'), $('#editTest button[type="submit"]'));
    });

    $('#list_test_table').on('click', '.showTestBtn', function () {
        $('#showTest #author').html($(this).attr('data-author'));
        $('#showTest #format').html($(this).attr('data-format'));
        $('#showTest #name').html($(this).attr('data-name'));
        $('#showTest #code').html($(this).attr('data-code'));
        $('#showTest #guide').html($(this).attr('data-guide'));
        $('#showTest #execute_time').html($(this).attr('data-execute_time'));
        $('#showTest #total_question').html($(this).attr('data-total_question'));
        $('#showTest #number_questions').html($(this).attr('data-number_questions'));
        $('#showTest #price').html($(this).attr('data-price'));
        $('#showTest #score').html($(this).attr('data-score'));
        $('#showTest #level').html($(this).attr('data-level'));
        $('#showTest #publish').html($(this).attr('data-publish'));
    });

    $('#list_test_table').on('click', '.editTestBtn', function () {
        validatorUpdateTest.resetForm();
        $('#editTest form').attr('action', route('admin.tests.update', $(this).attr('data-testId')));
        $('#editTest input[name=name]').val($(this).attr('data-name'));
        $('#editTest input[name=execute_time]').val($(this).attr('data-execute_time'));
        $('#editTest input[name=total_question]').val($(this).attr('data-total_question'));
        $('#editTest input[name=price]').val($(this).attr('data-price'));
        $('#editTest input[name=score]').val($(this).attr('data-score'));
        $('#editTest input[name=level]').val($(this).attr('data-level'));
        $('#editTest input[name=publish]').val($(this).attr('data-publish'));
        $('#editTest textarea[name=guide]').val($(this).attr('data-guide'));
    });

    $('#list_test_table').on('click', '.deleteTestBtn', function (e) {
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

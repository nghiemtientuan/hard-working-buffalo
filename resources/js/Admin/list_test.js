$(function () {
    $('#list_test_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: route('admin.tests.getData').template,
        columns: [
            { data: 'code', name: 'code' },
            { data: 'name', name: 'name' },
            { data: 'execute_time', name: 'execute_time' },
            { data: 'price', name: 'price' },
            { data: 'score', name: 'score' },
            { data: 'publish', name: 'publish' },
            { data: 'action', name: 'action' },
        ]
    });
});

$(document).ready(function () {
    let testValidates = {
        rules: {
            code: {
                minlength: 2,
                maxlength: 10,
            },
            name: {
                required: true,
                minlength: 2,
            },
            execute_time: {
                required: true,
                min: 1,
                max: 120,
            },
            total_question: {
                required: true,
                min: 1,
                max: 200,
            },
            price: {
                required: true,
                min: 0,
                max: 10000,
            },
            score: {
                required: true,
                min: 1,
                max: 100,
            },
            guide: {
                minlength: 2,
                maxlength: 500
            },
        }
    };

    let validatorUpdateTest = $("#editTest form").validate(testValidates);
    let validatorAddTest = $("#addTest form").validate(testValidates);

    $('#editTest form').on(
        'keyup',
        'input[name=name], input[name=execute_time], input[name=total_question], input[name=price], input[name=score], input[name=publish], textarea[name=guide]',
        function () {
            validateDisabled($('#editTest form'), $('#editTest button[type="submit"]'));
        }
    );

    $('#addTest form').on(
        'keyup',
        'input[name=name], input[name=execute_time], input[name=total_question], input[name=price], input[name=score], input[name=publish], textarea[name=guide]',
        function () {
            validateDisabled($('#addTest form'), $('#addTest button[type="submit"]'));
        }
    );

    $('#list_test_table').on('click', '.showTestBtn', function () {
        $('#showTest #author').html($(this).attr('data-author'));
        $('#showTest #name').html($(this).attr('data-name'));
        $('#showTest #code').html($(this).attr('data-code'));
        $('#showTest #guide').html($(this).attr('data-guide'));
        $('#showTest #execute_time').html($(this).attr('data-execute_time'));
        $('#showTest #total_question').html($(this).attr('data-total_question'));
        $('#showTest #number_questions').html($(this).attr('data-number_questions'));
        $('#showTest #price').html($(this).attr('data-price'));
        $('#showTest #score').html($(this).attr('data-score'));
        $('#showTest #publish').html($(this).attr('data-publish'));
    });

    $('#addTestBtn').on('click', function () {
        validatorAddTest.resetForm();
    });

    $('#list_test_table').on('click', '.editTestBtn', function () {
        validatorUpdateTest.resetForm();
        $('#editTest form').attr('action', route('admin.tests.update', $(this).attr('data-testId')));
        $('#editTest input[name=name]').val($(this).attr('data-name'));
        $('#editTest input[name=execute_time]').val($(this).attr('data-execute_time'));
        $('#editTest input[name=total_question]').val($(this).attr('data-total_question'));
        $('#editTest input[name=price]').val($(this).attr('data-price'));
        $('#editTest input[name=score]').val($(this).attr('data-score'));
        if ($(this).attr('data-publish') == 1) {
            if (!$('#editTest input[name=publish]').is(':checked')) {
                $('#editTest input[name=publish]').click();
            }
        } else {
            if ($('#editTest input[name=publish]').is(':checked')) {
                $('#editTest input[name=publish]').click();
            }
        }
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

$('#addTest #randomCode').on('click', function (e) {
    e.preventDefault();
    $('#addTest input[name=code]').val(randomString());
});

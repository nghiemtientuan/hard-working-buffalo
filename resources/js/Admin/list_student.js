$(function () {
    $('#list_student_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: route('admin.students.getData').template,
        columns: [
            { data: 'image', name: 'image' },
            { data: 'username', name: 'username' },
            { data: 'birthday', name: 'birthday' },
            { data: 'coin', name: 'coin' },
            { data: 'level', name: 'level' },
            { data: 'action', name: 'action' },
        ]
    });
});

$(document).ready(function () {
    let studentValidates = {
        rules: {
            firstname: {
                required: true,
                minlength: 2,
            },
            lastname: {
                required: true,
                minlength: 2,
            },
            address: {
                required: true,
                minlength: 2,
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
            },
        }
    };

    let studentAddValidates = {
        rules: {
            email: {
                required: true,
                minlength: 5,
                maxlength: 50,
                email: true,
            },
            firstname: {
                required: true,
                minlength: 2,
                maxlength: 20,
            },
            lastname: {
                required: true,
                minlength: 2,
                maxlength: 20,
            },
            address: {
                required: true,
                minlength: 2,
                maxlength: 20,
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
            },
            coin: {
                min: 0,
                max: 10000000,
            }
        }
    };

    let validatorUpdateStudent = $("#editStudent form").validate(studentValidates);
    let validatorAddStudent = $("#addStudent form").validate(studentAddValidates);
    $('#addStudentBtn').on('click', function () {
        validatorAddStudent.resetForm();
    });

    $('#editStudent form').on(
        'keyup',
        'input[name=firstname], input[name=lastname], input[name=address], input[name=phone]',
        function () {
            validateDisabled($('#editStudent form'), $('#editStudent button[type="submit"]'));
        }
    );

    $('#addStudent form').on(
        'keyup',
        'input[name=email], input[name=firstname], input[name=lastname], input[name=address], input[name=phone]',
        function () {
            validateDisabled($('#addStudent form'), $('#addStudent button[type="submit"]'));
        }
    );

    $('#list_student_table').on('click', '.showStudentBtn', function () {
        $('#showStudent img').attr('src', $(this).attr('data-urlImage'));
        $('#showStudent #username').html($(this).attr('data-username'));
        $('#showStudent #email').html($(this).attr('data-email'));
        $('#showStudent #fullname').html($(this).attr('data-fullname'));
        $('#showStudent #birthday').html($(this).attr('data-birthday'));
        $('#showStudent #address').html($(this).attr('data-address'));
        $('#showStudent #phone').html($(this).attr('data-phone'));
        $('#showStudent #level').html($(this).attr('data-level'));
        $('#showStudent #type').html($(this).attr('data-type'));
        $('#showStudent #coin').html($(this).attr('data-coin'));
        $('#showStudent #active').html($(this).attr('data-active'));
        $('#showStudent #description').html($(this).attr('data-description'));
    });

    $('#list_student_table').on('click', '.editStudentBtn', function () {
        validatorUpdateStudent.resetForm();
        $('#editStudent form').attr('action', route('admin.students.update', $(this).attr('data-studentId')));
        $('#editStudent input[name=firstname]').val($(this).attr('data-firstname'));
        $('#editStudent input[name=lastname]').val($(this).attr('data-lastname'));
        $('#editStudent input[name=address]').val($(this).attr('data-address'));
        $('#editStudent input[name=phone]').val($(this).attr('data-phone'));
        $('#editStudent input[name=coin]').val($(this).attr('data-coin'));
    });

    $('#list_student_table').on('click', '.deleteStudentBtn', function (e) {
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

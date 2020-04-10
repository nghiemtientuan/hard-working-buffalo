$(function () {
    $('#list_student_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: route('admin.students.getData').template,
        columns: [
            { data: 'image', name: 'image' },
            { data: 'username', name: 'username' },
            { data: 'birthday', name: 'birthday' },
            { data: 'level', name: 'level' },
            { data: 'type', name: 'type' },
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

    let validatorUpdateUser = $("#editStudent form").validate(studentValidates);
    $('#editStudent form input[name=firstname]').on('keyup', function () {
        validateDisabled($('#editStudent form'), $('#editStudent button[type="submit"]'));
    });
    $('#editStudent form input[name=lastname]').on('keyup', function () {
        validateDisabled($('#editStudent form'), $('#editStudent button[type="submit"]'));
    });
    $('#editStudent form input[name=address]').on('keyup', function () {
        validateDisabled($('#editStudent form'), $('#editStudent button[type="submit"]'));
    });
    $('#editStudent form input[name=phone]').on('keyup', function () {
        validateDisabled($('#editStudent form'), $('#editStudent button[type="submit"]'));
    });

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
        $('#showStudent #diamond').html($(this).attr('data-diamond'));
        $('#showStudent #active').html($(this).attr('data-active'));
        $('#showStudent #description').html($(this).attr('data-description'));
    });

    $('#list_student_table').on('click', '.editStudentBtn', function () {
        validatorUpdateUser.resetForm();
        $('#editStudent form').attr('action', route('admin.students.update', $(this).attr('data-studentId')));
        $('#editStudent input[name=firstname]').val($(this).attr('data-firstname'));
        $('#editStudent input[name=lastname]').val($(this).attr('data-lastname'));
        $('#editStudent input[name=address]').val($(this).attr('data-address'));
        $('#editStudent input[name=phone]').val($(this).attr('data-phone'));
    });

    $('#list_student_table').on('click', '.deleteStudentBtn', function (e) {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                $(this).parent('form').submit();
            }
        });
    });
});

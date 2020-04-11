$(function () {
    $('#list_users_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: route('admin.users.getData').template,
        columns: [
            { data: 'image', name: 'image' },
            { data: 'username', name: 'username' },
            { data: 'email', name: 'email' },
            { data: 'birthday', name: 'birthday' },
            { data: 'role', name: 'role' },
            { data: 'action', name: 'action' },
        ]
    });
});

$(document).ready(function () {
    let userValidates = {
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

    let validatorUpdateUser = $("#editUser form").validate(userValidates);
    $('#editUser form input[name=firstname]').on('keyup', function () {
        validateDisabled($('#editUser form'), $('#editUser button[type="submit"]'));
    });
    $('#editUser form input[name=lastname]').on('keyup', function () {
        validateDisabled($('#editUser form'), $('#editUser button[type="submit"]'));
    });
    $('#editUser form input[name=address]').on('keyup', function () {
        validateDisabled($('#editUser form'), $('#editUser button[type="submit"]'));
    });
    $('#editUser form input[name=phone]').on('keyup', function () {
        validateDisabled($('#editUser form'), $('#editUser button[type="submit"]'));
    });

    $('#list_users_table').on('click', '.showUserBtn', function () {
        $('#showUser img').attr('src', $(this).attr('data-urlImage'));
        $('#showUser #username').html($(this).attr('data-username'));
        $('#showUser #email').html($(this).attr('data-email'));
        $('#showUser #fullname').html($(this).attr('data-fullname'));
        $('#showUser #birthday').html($(this).attr('data-birthday'));
        $('#showUser #address').html($(this).attr('data-address'));
        $('#showUser #phone').html($(this).attr('data-phone'));
        $('#showUser #role').html($(this).attr('data-role'));
        $('#showUser #active').html($(this).attr('data-active'));
        $('#showUser #description').html($(this).attr('data-description'));
    });

    $('#list_users_table').on('click', '.editUserBtn', function () {
        validatorUpdateUser.resetForm();
        $('#editUser form').attr('action', route('admin.users.update', $(this).attr('data-userId')));
        $('#editUser input[name=firstname]').val($(this).attr('data-firstname'));
        $('#editUser input[name=lastname]').val($(this).attr('data-lastname'));
        $('#editUser input[name=address]').val($(this).attr('data-address'));
        $('#editUser input[name=phone]').val($(this).attr('data-phone'));
    });

    $('#list_users_table').on('click', '.deleteUserBtn', function (e) {
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

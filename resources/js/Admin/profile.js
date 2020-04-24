let userValidates = {
    rules: {
        username: {
            required: true,
            minlength: 2,
        },
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
        description: {
            required: true,
            minlength: 2,
            maxlength: 255,
        },
    }
};

let validatorUpdateUser = $("#editProfile form").validate(userValidates);
$('#editProfile form input[name=username]').on('keyup', function () {
    validateDisabled($('#editProfile form'), $('#editProfile button[type="submit"]'));
});
$('#editProfile form input[name=firstname]').on('keyup', function () {
    validateDisabled($('#editProfile form'), $('#editProfile button[type="submit"]'));
});
$('#editProfile form input[name=lastname]').on('keyup', function () {
    validateDisabled($('#editProfile form'), $('#editProfile button[type="submit"]'));
});
$('#editProfile form input[name=address]').on('keyup', function () {
    validateDisabled($('#editProfile form'), $('#editProfile button[type="submit"]'));
});
$('#editProfile form input[name=phone]').on('keyup', function () {
    validateDisabled($('#editProfile form'), $('#editProfile button[type="submit"]'));
});
$('#editProfile form textarea[name=description]').on('keyup', function () {
    validateDisabled($('#editProfile form'), $('#editProfile button[type="submit"]'));
});

$(document).on('click', '#editProfileBtn', function () {
    validatorUpdateUser.resetForm();
});

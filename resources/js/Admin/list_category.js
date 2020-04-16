$(function(){
    $('#treeCategories').jstree();
    $(document).on('click', '.add_item', function () {
        var href = this.dataset.href;
        window.open(href, "_self");
    });
});

$(document).ready(function () {
    let childCateValidates = {
        rules: {
            name: {
                required: true,
                minlength: 5,
            },
            guide: {
                required: true,
                minlength: 5,
            },
        }
    };

    let parentCateValidates = {
        rules: {
            name: {
                required: true,
                minlength: 5,
            },
        },
    };

    let validatorAddChildCate = $("#addChildCate form").validate(childCateValidates);

    let validatorAddParentCate = $("#addParentCate form").validate(parentCateValidates);

    let validatorEditChildCate = $("#editChildCate form").validate(childCateValidates);

    let validatorEditParentCate = $("#editParentCate form").validate(parentCateValidates);

    $('#addParentCate form input[name=name]').on('keyup', function () {
        validateDisabled($('#addParentCate form'), $('#addParentCate button[type="submit"]'));
    });

    $('#addChildCate form input[name=name]').on('keyup', function () {
        validateDisabled($('#addChildCate form'), $('#addChildCate button[type="submit"]'));
    });

    $('#addChildCate form textarea[name=guide]').on('keyup', function () {
        validateDisabled($('#addChildCate form'), $('#addChildCate button[type="submit"]'));
    });

    $('#editParentCate form input[name=name]').on('keyup', function () {
        validateDisabled($('#editParentCate form'), $('#editParentCate button[type="submit"]'));
    });

    $('#editChildCate form input[name=name]').on('keyup', function () {
        validateDisabled($('#editChildCate form'), $('#editChildCate button[type="submit"]'));
    });

    $('#editChildCate form textarea[name=guide]').on('keyup', function () {
        validateDisabled($('#editChildCate form'), $('#editChildCate button[type="submit"]'));
    });

    $('#treeCategories li').on('click', function() {
        validatorAddChildCate.resetForm();
        validatorAddParentCate.resetForm();
    });

    $('#treeCategories li').on('click', function(e) {
        let parentId = $(this).find('input').val();
        if (parentId != 'parent') {
            $('#addChildCate #parentId').val(parentId);
        }
    });

    $('table a[data-target="#editChildCate"]').on('click', function () {
        $('#editChildCate input[name="name"]').val($(this).attr('data-name'));
        $('#editChildCate textarea[name="guide"]').val($(this).attr('data-guide'));
        $('#editChildCate form').attr('action', $(this).attr('data-urlUpdate'));
        validatorEditChildCate.resetForm();
    });

    $('a[data-target="#editParentCate"]').on('click', function () {
        $('#editParentCate input[name="name"]').val($(this).attr('data-name'));
        $('#editParentCate img').attr('src', $(this).attr('data-urlFile'));
        $('#editParentCate form').attr('action', $(this).attr('data-urlUpdate'));
        validatorEditParentCate.resetForm();
    });

    $('.deleteCateBtn').on('click', function (e) {
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

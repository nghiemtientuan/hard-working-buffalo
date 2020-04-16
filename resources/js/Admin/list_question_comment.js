$(function () {
    $('#list_question_comment_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: route('admin.questions.comments.getData').template,
        columns: [
            { data: 'username', name: 'username' },
            { data: 'question_code', name: 'question_code' },
            { data: 'content', name: 'content' },
            { data: 'created_at', name: 'created_at' },
            { data: 'action', name: 'action' },
        ]
    });
});

$(document).ready(function () {
    $('#list_question_comment_table').on('click', '.deleteQuestionCommentBtn', function (e) {
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

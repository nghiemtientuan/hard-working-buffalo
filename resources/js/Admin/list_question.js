$(function () {
    $('#list_question_table').DataTable({
        processing: true,
        serverSide: true,
        ajax: route('admin.questions.getData').template,
        columns: [
            { data: 'code', name: 'code' },
            { data: 'content', name: 'content' },
            { data: 'test', name: 'test' },
            { data: 'part', name: 'part' },
            { data: 'level', name: 'level' },
            { data: 'type', name: 'type' },
            { data: 'action', name: 'action' },
        ]
    });
});

$(document).ready(function () {
    $('#list_question_table').on('click', '.deleteQuestionBtn', function (e) {
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

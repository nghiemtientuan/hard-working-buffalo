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

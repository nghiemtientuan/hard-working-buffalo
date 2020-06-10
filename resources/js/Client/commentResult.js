let _token = $('input[name="_token"]').val();

$('.container .showCommentsBtn').on('click', function () {
    let questionId = $(this).attr('data-questionId');
    $('#commentsList #commentsListDiv').html('');
    $('#commentsList #newCommentWrite #newContentSend').attr('data-questionId', questionId);

    $.ajax({
        type: 'GET',
        url: route('client.api.questions.getComments', questionId),
        cache: false,
        data: {questionId},
        success: function (dataAjax1) {
            if (dataAjax1.code == STATUS_CODE.code_200) {
                $('#commentsList #directionContent').html(dataAjax1.data.question.suggest);

                if (dataAjax1.data.comments.last_page == 1) {
                    renderComments(dataAjax1.data.comments.data, questionId);
                } else {
                    $.ajax({
                        type: 'GET',
                        url: route('client.api.questions.getComments'),
                        cache: false,
                        data: {questionId, page: dataAjax1.data.comments.last_page},
                        success: function (dataAjax2) {
                            if (dataAjax2.code == STATUS_CODE.code_200) {
                                renderComments(dataAjax2.data.comments.data);
                            }
                        },
                    });
                }
            }
        },
    });
});

function renderComments(comments) {
    comments.map(comment => {
        renderCommentItem(comment);
    });
}

function renderCommentItem(comment) {
    let commentElement = $('#commentsList #commentItemExample').clone();
    commentElement.attr('id', 'commentItem_' + comment.id);
    commentElement.removeClass('d-none').addClass('d-flex');
    commentElement.find('.commentItem-content-avatar').attr('src', comment.user.avatar);
    commentElement.find('.commentItem-content-content').html(comment.content);
    commentElement.find('.commentItem-infoAdd-username').html(comment.user.username);
    commentElement.find('.commentItem-infoAdd-time').html(comment.created_at);
    commentElement.find('.commentItem-infoAdd-linkDelete').attr('data-commentId', comment.id);
    $('#commentsList #commentsListDiv').append(commentElement);
}

$('#commentsList #newCommentWrite #newContentSend').on('click', function () {
    let description = $('#commentsList #newCommentWrite #newContentComment').val();
    let questionId = $(this).attr('data-questionId');

    if (description && description.length <= 500) {
        $.ajax({
            type: 'POST',
            url: route('client.api.questions.addComment', questionId),
            cache: false,
            data: {_token, description},
            success: function (data) {
                if (data.code == STATUS_CODE.code_200) {
                    renderCommentItem(data.data.comment);
                    $('#commentsList #newCommentWrite #newContentComment').val('');
                }
            },
        });
    }
});

$('#commentsList #commentsListDiv').on('click', '.commentItem-infoAdd-linkDelete', function (e) {
    e.preventDefault();
    let commentId = $(this).attr('data-commentId');

    $.ajax({
        type: 'DELETE',
        url: route('client.api.questions.deleteComment', commentId),
        cache: false,
        data: {_token},
        success: function (data) {
            if (data.code == STATUS_CODE.code_200) {
                $('#commentsList #commentsListDiv #commentItem_' + commentId).remove();
            }
        },
    });
});

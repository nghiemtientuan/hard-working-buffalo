let _token = $('input[name="_token"]').val();

$('.container .showCommentsBtn').on('click', function () {
    let questionId = $(this).attr('data-questionId');
    $('#commentsList #commentsListDiv').html('');
    $('#commentsList #newCommentWrite #newContentSend').attr('data-questionId', questionId);

    $.ajax({
        type: 'GET',
        url: route('client.api.questions.getComments', questionId),
        cache: false,
        success: function (dataAjax1) {
            if (dataAjax1.code == STATUS_CODE.code_200) {
                $('#commentsList #directionContent').html(dataAjax1.data.question.suggest);

                if (dataAjax1.data.comments.last_page == 1) {
                    $('#commentsList #seeMore').addClass('d-none');
                    $('#commentsList #seeMore #seeMoreTotal').html(0);
                    $('#commentsList #seeMore').attr('data-prev_page_url', '');
                    renderComments(dataAjax1.data.comments.data, dataAjax1.data.currentUser);
                } else {
                    $.ajax({
                        type: 'GET',
                        url: route('client.api.questions.getComments', questionId),
                        cache: false,
                        data: {questionId, page: dataAjax1.data.comments.last_page},
                        success: function (dataAjax2) {
                            if (dataAjax2.code == STATUS_CODE.code_200) {
                                $('#commentsList #seeMore').removeClass('d-none');
                                $('#commentsList #seeMore #seeMoreTotal').html(dataAjax2.data.comments.from - 1);
                                $('#commentsList #seeMore').attr(
                                    'data-prev_page_url',
                                    dataAjax2.data.comments.prev_page_url
                                );
                                renderComments(dataAjax2.data.comments.data, dataAjax2.data.currentUser);
                            }
                        },
                    });
                }
            }
        },
    });
});

function renderComments(comments, currentUser) {
    let commentElements = comments.map(comment => {
        let isShowDeleteBtn = false;
        if (currentUser.user_id == comment.user.id && currentUser.role_id == comment.user.role_id) {
            isShowDeleteBtn = true;
        }

        return renderCommentItem(comment, isShowDeleteBtn);
    });

    $('#commentsList #commentsListDiv').append(commentElements);
}

function renderCommentItem(comment, isShowDeleteBtn) {
    let commentElement = $('#commentsList #commentItemExample').clone();
    commentElement.attr('id', 'commentItem_' + comment.id);
    commentElement.removeClass('d-none').addClass('d-flex');
    commentElement.find('.commentItem-content-avatar').attr('src', comment.user.avatar);
    commentElement.find('.commentItem-content-content').html(comment.content);
    commentElement.find('.commentItem-infoAdd-username').html(comment.user.username);
    commentElement.find('.commentItem-infoAdd-time').html(comment.created_at);
    commentElement.find('.commentItem-infoAdd-linkDelete').attr('data-commentId', comment.id);
    if (!isShowDeleteBtn) {
        commentElement.find('.commentItem-infoAdd-linkDelete').remove();
    }

    return commentElement;
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
                    const commentElement = renderCommentItem(data.data.comment, true);
                    $('#commentsList #commentsListDiv').append(commentElement);

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

function nextSeeMore(nextComments, currentUser) {
    const commentElements = nextComments.map(comment => {
        let isShowDeleteBtn = false;
        if (currentUser.user_id == comment.user.id && currentUser.role_id == comment.user.role_id) {
            isShowDeleteBtn = true;
        }

        return renderCommentItem(comment, isShowDeleteBtn);
    });

    $('#commentsList #commentsListDiv').prepend(commentElements);
}

$('#commentsList #seeMore').on('click', function (e) {
    e.preventDefault();
    let prev_page_url = $(this).attr('data-prev_page_url');

    $.ajax({
        type: 'GET',
        url: prev_page_url,
        cache: false,
        success: function (data) {
            if (data.code == STATUS_CODE.code_200) {
                if (data.data.comments.current_page == 1) {
                    $('#commentsList #seeMore').addClass('d-none');
                    $('#commentsList #seeMore #seeMoreTotal').html(0);
                    $('#commentsList #seeMore').attr('data-prev_page_url', '');
                } else {
                    $('#commentsList #seeMore').attr('data-prev_page_url', data.data.comments.prev_page_url);
                    $('#commentsList #seeMore #seeMoreTotal').html(data.data.comments.from - 1);
                }

                nextSeeMore(data.data.comments.data, data.data.currentUser);
            }
        },
    });
});

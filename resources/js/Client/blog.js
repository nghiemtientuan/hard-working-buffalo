let _token = $('input[name="_token"]').val();

$(document).on('click', '#btnSeeMoreBlogs', function () {
    let nextPage = $(this).attr('data-next_page_url');

    if (nextPage && typeof nextPage === 'string') {
        $.ajax({
            type: 'GET',
            url: nextPage,
            cache: false,
            success: function (data) {
                if (data.code == STATUS_CODE.code_200) {
                    if (data.data.blogs.current_page == data.data.blogs.last_page) {
                        $('#btnSeeMoreBlogs').addClass('d-none');
                        $('#btnSeeMoreBlogs').attr('data-next_page_url', '');
                    }
                    renderBlogList(data.data.blogs.data);
                }
            },
        });
    } else {
        $(this).addClass('d-none');
    }
});

$('#blogAdd').on('click', '#btnSubmitNewPost', function () {
    let content = $('#blogAdd #newBlogContent').val();

    if (content) {
        $.ajax({
            type: 'POST',
            url: route('client.blogs.store'),
            cache: false,
            data: {_token, content},
            success: function (data) {
                if (data.code == STATUS_CODE.code_200) {
                    let blogElement = renderBlogItem(data.data.blog);
                    $('#blogsList').prepend(blogElement)
                    $('#blogAdd #newBlogContent').val('');
                }
            },
        });
    }
});

function renderBlogList(blogs) {
    let blogsElement = blogs.map(blog => renderBlogItem(blog));

    $('#blogsList').append(blogsElement);
}

function renderBlogItem(blog) {
    let blogElement = $('#blogItemExample').clone();
    blogElement.removeClass('d-none');
    blogElement.find('.panel-heading-avatar-image').attr('src', userDefaultImage(blog.user.file));
    blogElement.find('.panel-heading-name-username').html(blog.user.username);
    blogElement.find('.panel-heading-name-time').html(blog.created_at);
    blogElement.find('.panel-body').html(blog.content);
    blogElement.find('.panel-reactionList-totalComment').html(blog.comments.length);

    return blogElement;
}

$(document).on('click', '.btnClickComment', function () {
    let countComments = parseInt($(this).attr('data-countComments'));
    let urlLastPageComment = $(this).attr('data-urlLastPageComment');
    let blogId = $(this).attr('data-blogId');

    if (countComments) {
        $.ajax({
            type: 'GET',
            url: urlLastPageComment,
            cache: false,
            success: function (data) {
                if (data.code == STATUS_CODE.code_200) {
                    $('#blogItem_' + blogId + ' .list-comments').html('');
                    renderCommentAndNext(blogId, data.data.comments, data.data.currentUser, false);

                    $('#blogItem_' + blogId + ' .add-comments').removeClass('d-none').addClass('d-flex');
                }
            },
        });
    }
});

function renderCommentAndNext(blogId, comments, currentUser, isAddFirst) {
    if (comments.current_page == 1) {
        $('#blogItem_' + blogId + ' .btn-seemore-comment').attr('data-prev_page_url', '');
        $('#blogItem_' + blogId + ' .btn-seemore-comment').addClass('d-none');
    } else {
        $('#blogItem_' + blogId + ' .btn-seemore-comment').attr('data-prev_page_url', comments.prev_page_url);
        $('#blogItem_' + blogId + ' .btn-seemore-comment').removeClass('d-none');
    }
    renderCommentList(currentUser, comments.data, blogId, isAddFirst);
}

function renderCommentList(currentUser, comments, blogId, isAddFirst) {
    let commentsElement = comments.map(comment => {
        if (currentUser.id == comment.user_id && currentUser.type == comment.user_type) {
            return renderCommentItem(blogId, comment, true);
        } else {
            return renderCommentItem(blogId, comment, false);
        }
    });

    if (isAddFirst) {
        $('#blogItem_' + blogId + ' .list-comments').prepend(commentsElement);
    } else {
        $('#blogItem_' + blogId + ' .list-comments').append(commentsElement);
    }
}

function renderCommentItem(blogId, comment, isDelete) {
    let commentElement = $('#commentItemExample').clone();
    commentElement.removeClass('d-none').addClass('d-flex');
    commentElement.attr('id', 'comment_' + comment.id);
    commentElement.find('.commentItem-avatar').attr('src', userDefaultImage(comment.user.file));
    commentElement.find('.commentItem-content-username').html(comment.user.username);
    commentElement.find('.commentItem-content-content').html(comment.content);
    if (isDelete) {
        commentElement.find('.removeCommentBtn').attr('data-commentId', comment.id);
        commentElement.find('.removeCommentBtn').attr('data-blogId', blogId);
    } else {
        commentElement.find('.removeCommentBtn').remove();
    }

    return commentElement;
}

$('.seemore-comments').on('click', '.btn-seemore-comment', function (e) {
    e.preventDefault();
    let prev_page_url = $(this).attr('data-prev_page_url');
    let blogId = $(this).attr('data-blogId');

    if(prev_page_url) {
        $.ajax({
            type: 'GET',
            url: prev_page_url,
            cache: false,
            success: function (data) {
                if (data.code == STATUS_CODE.code_200) {
                    renderCommentAndNext(blogId, data.data.comments, data.data.currentUser, true);
                }
            },
        });
    }
});

$(document).on('click', '.add-comments-btn', function () {
    let blogId = $(this).attr('data-blogId');
    let content = $('#blogItem_' + blogId + ' .add-comments-content').val();

    if (content) {
        $.ajax({
            type: 'POST',
            url: route('client.blogs.addComment', blogId),
            cache: false,
            data: {_token, content},
            success: function (data) {
                if (data.code == STATUS_CODE.code_200) {
                    const newCommentElement = renderCommentItem(blogId, data.data.newComment, true);
                    $('#blogItem_' + blogId + ' .list-comments').append(newCommentElement);

                    $('#blogItem_' + blogId + ' .add-comments-content').val('');
                }
            },
        });
    }
});

$(document).on('click', '.removeCommentBtn', function (e) {
    e.preventDefault();
    let commentId = $(this).attr('data-commentId');
    let blogId = $(this).attr('data-blogId');

    $.ajax({
        type: 'DELETE',
        url: route('client.blogs.deleteComment', commentId),
        cache: false,
        data: {_token},
        success: function (data) {
            if (data.code == STATUS_CODE.code_200) {
                $('#blogItem_' + blogId + ' #comment_' + commentId).remove();
            }
        },
    });
});

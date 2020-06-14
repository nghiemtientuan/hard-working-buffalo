let _token = $('input[name="_token"]').val();

$('#btnSeeMoreBlogs').on('click', function () {
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

$('.btnClickComment').on('click', function () {
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
                    renderCommentAndNext(blogId, data.data.comments, false);

                    $('#blogItem_' + blogId + ' .add-comments').removeClass('d-none').addClass('d-flex');
                }
            },
        });
    }
});

function renderCommentAndNext(blogId, comments, isAddFirst) {
    if (comments.current_page == 1) {
        $('#blogItem_' + blogId + ' .btn-seemore-comment').attr('data-prev_page_url', '');
        $('#blogItem_' + blogId + ' .btn-seemore-comment').addClass('d-none');
    } else {
        $('#blogItem_' + blogId + ' .btn-seemore-comment').attr('data-prev_page_url', comments.prev_page_url);
        $('#blogItem_' + blogId + ' .btn-seemore-comment').removeClass('d-none');
    }
    renderCommentList(comments.data, blogId, isAddFirst);
}

function renderCommentList(comments, blogId, isAddFirst) {
    let commentsElement = comments.map(comment => renderCommentItem(comment));

    if (isAddFirst) {
        $('#blogItem_' + blogId + ' .list-comments').prepend(commentsElement);
    } else {
        $('#blogItem_' + blogId + ' .list-comments').append(commentsElement);
    }
}

function renderCommentItem(comment) {
    let commentElement = $('#commentItemExample').clone();
    commentElement.removeClass('d-none').addClass('d-flex');
    commentElement.find('.commentItem-avatar').attr('src', userDefaultImage(comment.user.file));
    commentElement.find('.commentItem-content-username').html(comment.user.username);
    commentElement.find('.commentItem-content-content').html(comment.content);

    return commentElement;
}

$('.seemore-comments .btn-seemore-comment').on('click', function (e) {
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
                    renderCommentAndNext(blogId, data.data.comments, true);
                }
            },
        });
    }
});

$('.add-comments-btn').on('click', function () {
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
                    const newCommentElement = renderCommentItem(data.data.newComment);
                    $('#blogItem_' + blogId + ' .list-comments').append(newCommentElement);

                    $('#blogItem_' + blogId + ' .add-comments-content').val('');
                }
            },
        });
    }
});

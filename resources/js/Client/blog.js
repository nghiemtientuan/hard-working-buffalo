let _token = $('input[name="_token"]').val();

$(document).on({
    mouseenter: function() {
        $(this).find('.reactionsBlog-lists').css('display', 'block');
    },
    mouseleave: function(){
        $(this).find('.reactionsBlog-lists').css('display', 'none');
    }
}, '.btnLikeHover');

$(document).on({
    mouseenter: function() {
        $(this).find('.reactionsBlog-lists').css('display', 'block');
    },
    mouseleave: function(){
        $(this).find('.reactionsBlog-lists').css('display', 'none');
    }
}, '.reactionsBlog-lists');

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
                    } else {
                        $('#btnSeeMoreBlogs').attr('data-next_page_url', data.data.blogs.next_page_url);
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
    blogElement.attr('id', 'blogItem_' + blog.id);
    blogElement.find('.panel-heading-avatar-image').attr('src', userDefaultImage(blog.user.file));
    blogElement.find('.panel-heading-name-username').html(blog.user.username);
    blogElement.find('.panel-heading-name-time').html(blog.created_at);
    blogElement.find('.panel-body').html(blog.content);
    blogElement.find('.panel-reactionList-totalComment').html(blog.comments.length);
    blogElement.find('.panel-reactionList-totalComment').html(blog.comments.length);
    blogElement.find('.reaction').attr('data-blogId', blog.id);
    blogElement.find('.btnClickComment').attr('data-blogId', blog.id);
    blogElement.find('.btnClickComment').attr('data-countComments', blog.comments.length);
    blogElement.find('.btnClickComment').attr(
        'data-urlLastPageComment',
        route('client.blogs.dataComments', {
            "blogId": blog.id,
            "page": Math.ceil(blog.comments.length/10)
        })
    );
    blogElement.find('.btn-seemore-comment').attr('data-blogId', blog.id);
    blogElement.find('.add-comments-btn').attr('data-blogId', blog.id);

    let selectedReact = null;
    if (blog.selected_react.length) {
        selectedReact = blog.selected_react[0];
    }
    blogElement = renderReacts(blogElement, blog.id, blog.reacts, selectedReact);

    return blogElement;
}

function renderReacts(blogElement, blogId, reacts, selectedReact) {
    blogElement.find('.dot-active').removeClass('d-none').addClass('d-none');
    if (selectedReact) {
        blogElement.find('.btnLikeHover').addClass('btnLikeClicked');
        blogElement.find('.btnClickLike').html('<img class="btnClickLike--img" src="' + CONFIG.reacts[selectedReact.react_id] + '">');

        blogElement.find('.reactionsBlog-item-' + selectedReact.react_id + ' .dot-active').removeClass('d-none');
        blogElement.find('.reactionsBlog-item--content').attr('data-reactSelected', selectedReact.react_id);
    }

    blogElement.find('.clicked-icon-list-active').removeClass('d-flex').addClass('d-none');
    reacts.forEach((react) => {
        let clickedIconListActiveElement = '.clicked-icon-list-active-' + react.react_id;
        let numberReact = getNumberReact(reacts, react.react_id);
        blogElement.find(clickedIconListActiveElement).removeClass('d-none').addClass('d-flex');
        blogElement.find(clickedIconListActiveElement + ' .clicked-icon-list__item--number').html(numberReact);
    });

    return blogElement;
}

function getNumberReact(reacts, react_id) {
    let number = 0;
    reacts.map(react => {
        if (react.react_id === react_id) number++;
    });

    return number;
}

$(document).on('click', '.btnClickComment', function () {
    let countComments = parseInt($(this).attr('data-countComments'));
    let urlLastPageComment = $(this).attr('data-urlLastPageComment');
    let blogId = $(this).attr('data-blogId');
    $('#blogItem_' + blogId + ' .add-comments').removeClass('d-none').addClass('d-flex');

    if (countComments) {
        $.ajax({
            type: 'GET',
            url: urlLastPageComment,
            cache: false,
            success: function (data) {
                if (data.code == STATUS_CODE.code_200) {
                    $('#blogItem_' + blogId + ' .list-comments').html('');
                    renderCommentAndNext(blogId, data.data.comments, data.data.currentUser, false);
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

$(document).on('click', '.btn-seemore-comment', function (e) {
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

$(document).on('click', '.btnLikeHover .reaction', function () {
    let reactionId = $(this).attr('data-reactionId');
    let blogId = $(this).attr('data-blogId');
    let reactSelected = $(this).attr('data-reactSelected');

    if (reactSelected !== reactionId) {
        $.ajax({
            type: 'POST',
            url: route('client.blogs.reaction', blogId),
            cache: false,
            data: {_token, reactionId},
            success: function (data) {
                if (data.code == STATUS_CODE.code_200) {
                    let blogElementId = '#blogItem_' + blogId;
                    $(blogElementId + ' .btnLikeHover').addClass('btnLikeClicked');
                    $(blogElementId + ' .btnClickLike').html('<img class="btnClickLike--img" src="' + data.data.clickedReactUrl + '">')

                    $(blogElementId + ' .reactionsBlog-item .dot-active').removeClass('d-none').addClass('d-none');
                    $(blogElementId + ' .reactionsBlog-item-' + reactionId + ' .dot-active').removeClass('d-none');
                    $(blogElementId + ' .reactionsBlog-item--content').attr('data-reactSelected', reactionId);

                    $(blogElementId + ' .clicked-icon-list-active').removeClass('d-flex').addClass('d-none');
                    data.data.reacts.forEach((react) => {
                        let clickedIconListActiveElement = '.clicked-icon-list-active-' + react.react_id;
                        $(blogElementId + ' ' + clickedIconListActiveElement).removeClass('d-none').addClass('d-flex');
                        $(blogElementId + ' ' + clickedIconListActiveElement + ' .clicked-icon-list__item--number').html(react.count);
                    });
                } else {
                    toastr.error(data.message, data.message);
                }
            }
        });
    }
});

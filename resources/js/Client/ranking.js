let _token = $('input[name="_token"]').val();

$('.btnLikeHover').hover(function(){
    $(this).find('.reactions-lists').css('display', 'block');
}, function(){
    $(this).find('.reactions-lists').css('display', 'none');
});

$('.reactions-lists').hover(function(){
    $(this).find('.reactions-lists').css('display', 'block');
}, function(){
    $(this).find('.reactions-lists').css('display', 'none');
});

$('.btnLikeHover .reaction').on('click', function () {
    let reactionId = $(this).attr('data-reactionId');
    let historyId = $(this).attr('data-historyId');
    let reactSelected = $(this).attr('data-reactSelected');

    if (reactSelected != reactionId) {
        $.ajax({
            type: 'POST',
            url: route('client.ranking.reaction'),
            cache: false,
            data: {_token, reactionId, historyId},
            success: function (data) {
                if (data.code == STATUS_CODE.code_200) {
                    let clickedIconListElement = '#clicked-icon-list-' + historyId;
                    $('.btnLikeHover-' + historyId).addClass('btnLikeClicked');
                    $('.btnLikeHover-' + historyId + ' .btnClickLike').html('<img class="btnClickLike--img" src="' + data.data.clickedReactUrl + '">')
                    $(clickedIconListElement + ' .clicked-icon-list-active').removeClass('d-flex').addClass('d-none');
                    data.data.reacts.forEach((react) => {
                        let clickedIconListActiveElement = '.clicked-icon-list-active-' + react.react_id;
                        $(clickedIconListElement + ' ' + clickedIconListActiveElement).removeClass('d-none').addClass('d-flex');
                        $(clickedIconListElement + ' ' + clickedIconListActiveElement + ' .clicked-icon-list__item--number').html(react.count);
                    });

                    $('.btnLikeHover-' + historyId + ' .reaction-item .dot-active').removeClass('d-none').addClass('d-none');
                    $('.btnLikeHover-' + historyId + ' .reaction-item-' + reactionId + ' .dot-active').removeClass('d-none');
                    $('.btnLikeHover-' + historyId + ' .reaction-item--content').attr('data-reactSelected', reactionId);
                } else {
                    toastr.error(data.message, data.message);
                }
                $('#loader').removeClass('show');
            }
        });
    }
});

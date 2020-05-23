$('.commentsBtn').on('click', function () {
    $.ajax({
        type: 'GET',
        url: $(this).attr('data-urlComments'),
        cache: false,
        beforeSend: function() {
            $('#loader').addClass('show');
        },
        success: function (data) {
            if (data.code == STATUS_CODE.code_200) {
                data.data.map(comment => {

                });
            }
            $('#loader').removeClass('show');
        },
        error: function (data) {
            console.log('error: ' + data);
        }
    });
});

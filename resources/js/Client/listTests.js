let csrfToken = $('meta[name=csrf-token]').attr('content');

$('.buyTestBtn').on('click', function () {
    let testId = $(this).attr('data-testId');
    Swal.fire({
        title: trans('client.actions.are_you_sure'),
        text: trans('client.actions.you_will_buy_this'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: trans('backend.actions.yes')
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: 'POST',
                url: route('client.tests.buy'),
                cache: false,
                data: {testId: testId, _token: csrfToken},
                beforeSend: function() {
                    $('#loader').addClass('show');
                },
                success: function (data) {
                    switch(data.code) {
                        case STATUS_CODE.code_200:
                            toastr.success(data.message);
                            $('#headerCoinNumber').html(data.data.user.coin);
                            $('.buyTestBtn[data-testId=' + testId + ']').remove();
                            break;
                        case STATUS_CODE.code_400:
                        case STATUS_CODE.code_401:
                        case STATUS_CODE.code_402:
                        case STATUS_CODE.code_404:
                            toastr.warning(data.message);
                            break;
                    }
                    $('#loader').removeClass('show');
                },
                error: function (data) {
                    console.log('error: ' + data);
                    $('#loader').removeClass('show');
                }
            });
        }
    });
});

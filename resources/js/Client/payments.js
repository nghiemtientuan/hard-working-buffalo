$('#coinNumberInput').on('change input', function () {
    let coinNumber = $(this).val();

    $.ajax({
        type: 'GET',
        url: route('client.payments.exchange'),
        cache: false,
        data: {coinNumber: coinNumber},
        success: function (data) {
            if (data.code == STATUS_CODE.code_200) {
                $('#coinNumberSpan').html(formatCurrency(data.data.cost));
                $('input[type=submit]').attr('disabled', false);
            } else if (data.code == STATUS_CODE.code_400) {
                $('input[type=submit]').attr('disabled', true);
                toastr.warning(data.message);
            }
            $('#loader').removeClass('show');
        },
        error: function (data) {
            console.log('error: ' + data);
            $('#loader').removeClass('show');
        }
    });
});

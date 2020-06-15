let _token = $('input[name="_token"]').val();
$('#testEvaluation').modal('show');

//select default
$('#testEvaluation .selectDefault').attr("src", $('#testEvaluation .selectDefault').attr('data-imageChange'));

//hover image
$('#testEvaluation .hoverEvaluation').hover(
    function () {
        $(this).attr("src", $(this).attr('data-imageChange'));
    },
    function () {
        let inputId = $(this).attr('data-inputId');
        if (!$('#' + inputId).is(':checked')) {
            $(this).attr("src", $(this).attr('data-image'));
        }
    }
);

//click image
$(document).on('click', "#testEvaluation .hoverEvaluation", function () {
    $('#testEvaluation .hoverEvaluation').each(function () {
        $(this).attr("src", $(this).attr('data-image'));
    });
    $(this).attr("src", $(this).attr('data-imageChange'));
    $('#value_evaluation').val($(this).parent().prev().val());
});

$('#testEvaluation').on('hide.bs.modal', function() {
    submitEvaluation();
});

function submitEvaluation() {
    let historyId = $('#testEvaluation #submitEvaluation').attr('data-historyId');
    let valueIcon = $('#testEvaluation #value_evaluation').val();
    let description = $('#testEvaluation #description').val();

    $.ajax({
        type: 'POST',
        url: route('client.tests.evaluation', historyId),
        cache: false,
        data: {_token, value: valueIcon, description},
        success: function (data) {},
        error: function () {}
    });
}

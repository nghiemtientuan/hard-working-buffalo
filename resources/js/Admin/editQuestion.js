let childQuestionIdElement = 'childQuestion_';
let addChildQuestionElement = 'add_';
let LIMIT_CHILD_QUESTION = 10;

$('#parentQuestion select[name=type]').change(function () {
    let type = $(this).val();
    switch (parseInt(type)) {
        case 1:
            $('#parentQuestion #imageDiv').addClass('hidden');
            $('#parentQuestion #audioDiv').addClass('hidden');
            break;
        case 2:
            $('#parentQuestion #imageDiv').removeClass('hidden');
            $('#parentQuestion #audioDiv').addClass('hidden');
            break;
        case 3:
        case 4:
            $('#parentQuestion #imageDiv').addClass('hidden');
            $('#parentQuestion #audioDiv').removeClass('hidden');
            break;
    }
});

$('#list-childQuestion select').change(function () {
    let childQuestionId = $(this).attr('data-childQuestionId');
    let questionDiv = '#' + childQuestionIdElement + childQuestionId;
    let type = $(this).val();
    switch (parseInt(type)) {
        case 1:
            $(questionDiv + ' .div_image').addClass('hidden');
            $(questionDiv + ' .div_audio').addClass('hidden');
            break;
        case 2:
            $(questionDiv + ' .div_image').removeClass('hidden');
            $(questionDiv + ' .div_audio').addClass('hidden');
            break;
        case 3:
        case 4:
            $(questionDiv + ' .div_image').addClass('hidden');
            $(questionDiv + ' .div_audio').removeClass('hidden');
            break;
    }
});

let childQuestionAddNumber = 0;
let addChildQuestionName = 'childQuestionAdd';
$('#add_childQuestion').on('click', function (e) {
    e.preventDefault();
    let currentChildQuestion = $('#childQuestionsNumber').val();
    if (currentChildQuestion < LIMIT_CHILD_QUESTION) {
        currentChildQuestion++;
        childQuestionAddNumber++;
        let childQuestionAdd = $('#list-childQuestion').children(":first").clone();
        childQuestionAdd.attr('id', childQuestionIdElement + addChildQuestionElement + childQuestionAddNumber);
        childQuestionAdd.find('.childQuestion_delete').attr('data-childQuestionId', childQuestionIdElement + addChildQuestionElement + childQuestionAddNumber);
        childQuestionAdd.find('.childQuestion_code').attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][code]');
        childQuestionAdd.find('.childQuestion_suggest').attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][suggest]');
        childQuestionAdd.find('.childQuestion_content').attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][content]');
        childQuestionAdd.find('.childQuestion_type').attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][type]');
        for (let i = 1; i <= 4; i++) {
            childQuestionAdd.find('.answer_' + i).attr('id', addChildQuestionName + childQuestionAddNumber + '_answer_' + i);
            childQuestionAdd.find('.answer_' + i).attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][correct_answer]');
            childQuestionAdd.find('.label_' + i).attr('for', addChildQuestionName + childQuestionAddNumber + '_answer_' + i);

            childQuestionAdd.find('.answer_content_' + i).attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][answers][' + i + '][content]');
            childQuestionAdd.find('.answer_file_' + i).attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][answers][' + i + '][file]');
        }

        $('#list-childQuestion').append(childQuestionAdd);
        $('#childQuestionsNumber').val(currentChildQuestion)
    } else {
        $('#addChildQuestionBtnDiv').addClass('hidden');
    }
});

$('#list-childQuestion').on('click', '.childQuestion_delete', function () {
    Swal.fire({
        title: trans('backend.actions.are_you_sure'),
        text: trans('backend.actions.you_will_delete_this'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: trans('backend.actions.yes')
    }).then((result) => {
        if (result.value) {
            $('#childQuestionsNumber').val($('#childQuestionsNumber').val() - 1);
            $('#addChildQuestionBtnDiv').removeClass('hidden');

            let childQuestionDivId = $(this).attr('data-childQuestionId');
            $('#list-childQuestion #' + childQuestionDivId).remove();
        }
    });
});

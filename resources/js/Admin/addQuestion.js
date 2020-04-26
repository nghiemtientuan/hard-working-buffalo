let childQuestionIdElement = 'childQuestion_';
let addChildQuestionElement = 'add_';
let LIMIT_CHILD_QUESTION = 10;

$('#singleQuestion #randomCode').click(function (e) {
    e.preventDefault();
    $('#singleQuestion input[name=code]').val(randomString());
});

$('#list-childQuestion').on('click', '.randomCode', function (e) {
    e.preventDefault();
    let childQuestionId = $(this).attr('data-childQuestionId');
    $('#' + childQuestionId + ' .childQuestion_code').val(randomString());
});

//require answer parent content
$('#answerParentQuestion input[name=correct_answer]').on('click', function () {
    let answerIndex = $(this).attr('data-answerIndex');
    if (!$('#answerParentQuestion .answer_file_' + answerIndex).val()) {
        $('#answerParentQuestion .answer_content').removeAttr('required');
        $('#answerParentQuestion .answer_content_' + answerIndex).attr('required', true);
    }
});

$('#answerParentQuestion input[type=file]').on('change', function () {
    let answerIndex = $(this).attr('data-answerIndex');
    if ($(this).val()) {
        $('#answerParentQuestion .answer_content_' + answerIndex).removeAttr('required');
    } else if ($('#answerParentQuestion #question_answer_' + answerIndex).is(':checked')) {
        $('#answerParentQuestion .answer_content_' + answerIndex).attr('required', true);
    }
});

$('#answerParentQuestion input[type=file]').on('fileclear', function(event) {
    let answerIndex = $(this).attr('data-answerIndex');
    if ($('#answerParentQuestion #question_answer_' + answerIndex).is(':checked')) {
        $('#answerParentQuestion .answer_content_' + answerIndex).attr('required', true);
    }
});

//require answer child content
$('#list-childQuestion').on('click', '.answer_radio', function () {
    let childQuestionId = $(this).attr('data-childQuestionId');
    let answerIndex = $(this).attr('data-answerIndex');
    $('#' + childQuestionId + ' .answer_content').removeAttr('required');
    $('#' + childQuestionId + ' .answer_content_' + answerIndex).attr('required', true);
});

$('#list-childQuestion').on('change', '.answer_file', function () {
    let childQuestionId = $(this).attr('data-childQuestionId');
    let answerIndex = $(this).attr('data-answerIndex');
    if ($(this).val()) {
        $('#' + childQuestionId + ' .answer_content_' + answerIndex).removeAttr('required');
    } else if ($('#list-childQuestion #' + childQuestionId + ' #' + childQuestionId + '_answer_' + answerIndex).is(':checked')) {
        $('#' + childQuestionId + ' .answer_content_' + answerIndex).attr('required', true);
    }
});

$('#list-childQuestion').on('fileclear', '.answer_file', function () {
    let childQuestionId = $(this).attr('data-childQuestionId');
    let answerIndex = $(this).attr('data-answerIndex');
    if ($('#list-childQuestion #' + childQuestionId + ' #' + childQuestionId + '_answer_' + answerIndex).is(':checked')) {
        $('#' + childQuestionId + ' .answer_content_' + answerIndex).attr('required', true);
    }
});

//kind question
$('#question_check_kind').change(function () {
    let kind = $(this).is(":checked")

    if (kind) {
        $('#answerParentQuestion').addClass('hidden');
        $('#list-childQuestion').removeClass('hidden');
        $('#addChildQuestionBtnDiv').removeClass('hidden');
        $('#childQuestionNumberLabel').removeClass('hidden');
        //disable answer parent
        $('#answerParentQuestion input').attr('disabled', true);

        //enable childquestion
        $('#list-childQuestion input').attr('disabled', false);
        $('#list-childQuestion select').attr('disabled', false);
    } else {
        $('#answerParentQuestion').removeClass('hidden');
        $('#list-childQuestion').addClass('hidden');
        $('#addChildQuestionBtnDiv').addClass('hidden');
        $('#childQuestionNumberLabel').addClass('hidden');
        //enable answer parent
        $('#answerParentQuestion input').attr('disabled', false);

        //diable childquestion
        $('#list-childQuestion input').attr('disabled', true);
        $('#list-childQuestion select').attr('disabled', true);
    }
});

$('#singleQuestion select[name=type]').change(function () {
    let type = $(this).val();
    switch (parseInt(type)) {
        case 1:
            $('#singleQuestion .imageDiv').addClass('hidden');
            $('#singleQuestion .audioDiv').addClass('hidden');
            break;
        case 2:
            $('#singleQuestion .imageDiv').removeClass('hidden');
            $('#singleQuestion .audioDiv').addClass('hidden');
            break;
        case 3:
        case 4:
            $('#singleQuestion .imageDiv').addClass('hidden');
            $('#singleQuestion .audioDiv').removeClass('hidden');
            break;
    }
});

$('#list-childQuestion').on('change', 'select', function () {
    let childQuestionId = $(this).attr('data-childQuestionId');
    let questionDiv = '#' + childQuestionId;
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

let childQuestionAddNumber = 1;
let addChildQuestionName = 'childQuestionAdd';
$('#add_childQuestion').on('click', function (e) {
    e.preventDefault();
    let currentChildQuestion = $('#childQuestionsNumber').val();
    if (currentChildQuestion < LIMIT_CHILD_QUESTION) {
        currentChildQuestion++;
        childQuestionAddNumber++;
        let childQuestionAdd = $('#list-childQuestion').children(":first").clone();

        //rename
        childQuestionAdd.attr('id', childQuestionIdElement + addChildQuestionElement + childQuestionAddNumber);
        childQuestionAdd.find('.childQuestion_delete').attr('data-childQuestionId', childQuestionIdElement + addChildQuestionElement + childQuestionAddNumber);
        childQuestionAdd.find('.randomCode').attr('data-childQuestionId', childQuestionIdElement + addChildQuestionElement + childQuestionAddNumber);
        childQuestionAdd.find('.childQuestion_code').attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][code]');
        childQuestionAdd.find('.childQuestion_suggest').attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][suggest]');
        childQuestionAdd.find('.childQuestion_content').attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][content]');
        childQuestionAdd.find('.childQuestion_type').attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][type]');
        childQuestionAdd.find('.childQuestion_type').attr('data-childQuestionId', childQuestionIdElement + addChildQuestionElement + childQuestionAddNumber);
        childQuestionAdd.find('.childQuestion_audio').attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][audio]');
        childQuestionAdd.find('.div_image').addClass('hidden');
        childQuestionAdd.find('.div_audio').addClass('hidden');

        //clear old data
        childQuestionAdd.find('input').val('');
        childQuestionAdd.find('input[type=radio]').attr('checked', false);
        childQuestionAdd.find('option').attr('selected', false);

        //remove image select
        let childQuestion_image_input = childQuestionAdd.find('.childQuestion_image');
        childQuestionAdd.find('.div_image').find('.col-lg-4').children().remove();
        childQuestion_image_input.attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][image]');
        childQuestionAdd.find('.div_image').find('.col-lg-4').append(childQuestion_image_input);
        renderInputFile(childQuestionAdd.find('.div_image').find('input'));

        //answers
        for (let i = 1; i <= 4; i++) {
            childQuestionAdd.find('.answer_' + i).attr('id', addChildQuestionName + childQuestionAddNumber + '_answer_' + i);
            childQuestionAdd.find('.answer_' + i).attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][correct_answer]');
            childQuestionAdd.find('.answer_' + i).attr('value', i);
            childQuestionAdd.find('.label_' + i).attr('for', addChildQuestionName + childQuestionAddNumber + '_answer_' + i);

            childQuestionAdd.find('.answer_content_' + i).attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][answers][' + i + '][content]');
            childQuestionAdd.find('.answer_file_' + i).attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][answers][' + i + '][file]');

            //remove file select
            let answer_image_input = childQuestionAdd.find('.answer_file_' + i);
            childQuestionAdd.find('.answerDiv_' + i).find('.col-md-11').find('.file-input').remove();
            answer_image_input.attr('name', addChildQuestionName + '[' + childQuestionAddNumber + '][answers][' + i + '][file]');
            childQuestionAdd.find('.answerDiv_' + i).find('.col-md-11').append(answer_image_input);
            renderInputFile(childQuestionAdd.find('.answerDiv_' + i).find('.col-md-11').find('input[type=file]'));
        }

        $('#list-childQuestion').append(childQuestionAdd);
        $('#childQuestionsNumber').val(currentChildQuestion);
        $('#showChildQuestionNumber').html(currentChildQuestion);
    } else {
        $('#addChildQuestionBtnDiv').addClass('hidden');
    }
});

$('#list-childQuestion').on('click', '.childQuestion_delete', function () {
    let currentChildQuestion = $('#childQuestionsNumber').val();
    if (currentChildQuestion > 1) {
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
                $('#childQuestionsNumber').val(currentChildQuestion - 1);
                $('#showChildQuestionNumber').html(currentChildQuestion - 1);
                $('#addChildQuestionBtnDiv').removeClass('hidden');

                let childQuestionDivId = $(this).attr('data-childQuestionId');
                $('#list-childQuestion #' + childQuestionDivId).remove();
            }
        });
    }
});

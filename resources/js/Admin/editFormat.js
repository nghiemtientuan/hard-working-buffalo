let partFirstElementId = 'part_';
let partFirstElementAddId = 'part_add_';
let questionFirstElementAddId = 'question_add_';
let partAddIndex = 1;
let questionAddIndex = 1;
let addPartName = 'addPart';

//add part
$('#addPartDiv #addPartBtn').on('click', function () {
    let namePart = $('#addPartDiv #namePart').val();
    let descriptionPart = $('#addPartDiv #descriptionPart').val();
    if (namePart) {
        let partElement = $('#listParts #partExample').clone();
        partElement.removeClass('hidden');
        partElement.attr('id', partFirstElementAddId + partAddIndex);
        partElement.find('.deletePart').attr('data-partElementId', partFirstElementAddId + partAddIndex);
        partElement.find('.namePart').html(namePart + ' (' + descriptionPart + ')');
        partElement.find('.addQuestion').attr('data-partElementId', partFirstElementAddId + partAddIndex);
        partElement.find('.addQuestion').attr('data-partId', partAddIndex);
        partElement.find('.addQuestion').attr('data-checkPartAdd', true);
        partElement.append('<input type="hidden" name="' + addPartName + '[' + partAddIndex +'][name]" value="' + namePart + '"></input>');
        partElement.append('<input type="hidden" name="' + addPartName + '[' + partAddIndex +'][description]" value="' + descriptionPart + '"></input>');

        $('#listParts').append(partElement);
        partAddIndex++;

        //clear data
        $('#addPartDiv #namePart').val('');
        $('#addPartDiv #descriptionPart').val('');
    }
});

//add question in part
$('#listParts').on('click', '.addQuestion', function (e) {
    e.preventDefault();
    let partIdElement = $(this).attr('data-partElementId');
    let questionElementId = questionFirstElementAddId + questionAddIndex;
    let partId = $(this).attr('data-partId');
    let checkPartAdd = $(this).attr('data-checkPartAdd');
    let questionElement = $('#listParts #partExample tbody .question').clone();
    let numberQuestionInput = '#listParts #' + partIdElement + ' .addQuestionTr .numberQuestion';
    let numberChildQuestionInput = '#listParts #' + partIdElement + ' .addQuestionTr .numberChildQuestion';
    let number = $(numberQuestionInput).val();
    let numberChildQuestion = $(numberChildQuestionInput).val() || 0;

    if (number) {
        questionElement.removeClass('hidden');
        questionElement.attr('id', questionElementId);
        questionElement.find('.numberQuestionSpan').html(number);
        questionElement.find('.numberQuestionEditInput').val(number);
        questionElement.find('.numberChildQuestionSpan').html(numberChildQuestion);
        questionElement.find('.numberChildQuestionEditInput').val(numberChildQuestion);
        questionElement.find('.editQuestion').attr('data-partElementId', partIdElement);
        questionElement.find('.editQuestion').attr('data-questionElementId', questionElementId);
        questionElement.find('.deleteQuestion').attr('data-partElementId', partIdElement);
        questionElement.find('.deleteQuestion').attr('data-questionElementId', questionElementId);
        if (checkPartAdd) {
            questionElement.find('.numberQuestionEditInput').attr('name', addPartName + '[' + partId + '][addQuestion][' + questionAddIndex + '][number]');
            questionElement.find('.numberChildQuestionEditInput').attr('name', addPartName + '[' + partId + '][addQuestion][' + questionAddIndex + '][childQuestions]');
        } else {
            questionElement.find('.numberQuestionEditInput').attr('name', 'part[' + partId + '][addQuestion][' + questionAddIndex + '][number]');
            questionElement.find('.numberChildQuestionEditInput').attr('name', 'part[' + partId + '][addQuestion][' + questionAddIndex + '][childQuestions]');
        }

        $('#listParts #' + partIdElement + ' tbody').prepend(questionElement);
        questionAddIndex++;

        //remove data
        $(numberQuestionInput).val('');
        $(numberChildQuestionInput).val('');
        checkTotalQuestion();
    }
});

//edit question
$('#listParts').on('click', '.editQuestion', function (e) {
    e.preventDefault();
    let partElementId = $(this).attr('data-partElementId');
    let questionElementId = $(this).attr('data-questionElementId');

    $('#listParts #' + partElementId + ' #' + questionElementId + ' .numberQuestionSpan').addClass('hidden');
    $('#listParts #' + partElementId + ' #' + questionElementId + ' .numberQuestionEditInput').removeClass('hidden');
    $('#listParts #' + partElementId + ' #' + questionElementId + ' .numberChildQuestionSpan').addClass('hidden');
    $('#listParts #' + partElementId + ' #' + questionElementId + ' .numberChildQuestionEditInput').removeClass('hidden');
    $(this).addClass('hidden');
    $('#listParts #' + partElementId + ' #' + questionElementId + ' .resetQuestion').removeClass('hidden');
});

//reset question
$('#listParts').on('click', '.resetQuestion', function (e) {
    e.preventDefault();
    let partElementId = $(this).attr('data-partElementId');
    let questionElementId = $(this).attr('data-questionElementId');
    let number = $('#listParts #' + partElementId + ' #' + questionElementId + ' .numberQuestionSpan').html();
    let numberChildQuestion = $('#listParts #' + partElementId + ' #' + questionElementId + ' .numberChildQuestionSpan').html();

    $('#listParts #' + partElementId + ' #' + questionElementId + ' .numberQuestionEditInput').val(number);
    $('#listParts #' + partElementId + ' #' + questionElementId + ' .numberChildQuestionEditInput').val(numberChildQuestion);
    checkTotalQuestion();
});

//remove part
$('#listParts').on('click', '.deletePart', function (e) {
    e.preventDefault();
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
            let oldPartId = $(this).attr('data-oldPartId');
            if (oldPartId) {
                let inputHidden = '<input type="hidden" name="deletePart[]" value="' + oldPartId + '">';
                $('#listParts #deletePartSpan').append(inputHidden);
            }

            let partElementId = $(this).attr('data-partElementId');
            $('#listParts #' + partElementId).remove();
            checkTotalQuestion();
        }
    });
});

//remove question
$('#listParts').on('click', '.deleteQuestion', function (e) {
    e.preventDefault();
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
            let partElementId = $(this).attr('data-partElementId');
            let questionElementId = $(this).attr('data-questionElementId');
            let oldPartId = $(this).attr('data-oldPartId');
            let oldQuestionId = $(this).attr('data-oldQuestionId');
            if (oldPartId && oldQuestionId) {
                let inputHidden = '<input type="hidden" name="part[' + oldPartId + '][deleteQuestion][]" value="' + oldQuestionId + '">';
                $('#listParts #' + partElementId + ' .deleteQuestionSpan').append(inputHidden);
            }

            $('#listParts #' + partElementId + ' #' + questionElementId).remove();
            checkTotalQuestion();
        }
    });
});

checkTotalQuestion();
$('#listParts').on(
    'input click change',
    '.numberQuestionEditInput, .numberChildQuestionEditInput',
    checkTotalQuestion
);

function checkTotalQuestion() {
    let totalQuestionPart = parseInt($('#totalQuestion').val());
    let currentQuestion = 0;
    $('#listParts .question').map(function() {
        let number = parseInt($(this).find('.numberQuestionEditInput').val()) || 0;
        let numberChildQuestion = parseInt($(this).find('.numberChildQuestionEditInput').val()) || 0;

        if (numberChildQuestion == 0) {
            currentQuestion += number;
        } else {
            currentQuestion += number * numberChildQuestion;
        }
    });

    if (currentQuestion == totalQuestionPart) {
        $('#submitBtn').attr('disabled', false);
    } else {
        $('#submitBtn').attr('disabled', true);
    }
}

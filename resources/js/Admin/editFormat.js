let partFirstElementId = 'part_';
let partFirstElementAddId = 'part_add_';
let partAddIndex = 1;
let questionAddIndex = 1;
let addPartName = 'addPart';

$('#addPartDiv #addPartBtn').on('click', function () {
    let namePart = $('#addPartDiv #namePart').val();
    let descriptionPart = $('#addPartDiv #descriptionPart').val();
    if (namePart) {
        let partElement = $('#listParts #partExample').clone();
        partElement.removeClass('hidden');
        partElement.attr('id', partFirstElementAddId + partAddIndex);
        partElement.find('.namePart').html(namePart);
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

$('#listParts').on('click', '.addQuestion', function (e) {
    e.preventDefault();
    let partIdElement = $(this).attr('data-partElementId');
    let partId = $(this).attr('data-partId');
    let checkPartAdd = $(this).attr('data-checkPartAdd');
    let questionElement = $('#listParts #partExample tbody .question').clone();
    let numberQuestionInput = '#listParts #' + partIdElement + ' .addQuestionTr .numberQuestion';
    let numberChildQuestionInput = '#listParts #' + partIdElement + ' .addQuestionTr .numberChildQuestion';
    let number = $(numberQuestionInput).val();
    let numberChildQuestion = $(numberChildQuestionInput).val() || 0;

    if (number) {
        questionElement.removeClass('hidden');
        questionElement.find('.numberQuestionSpan').html(number);
        questionElement.find('.numberQuestionEditInput').val(number);
        questionElement.find('.numberChildQuestionSpan').html(numberChildQuestion);
        questionElement.find('.numberChildQuestionEditInput').val(numberChildQuestion);
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
    }
});

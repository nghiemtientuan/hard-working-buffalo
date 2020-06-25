let fileUpload = null;
const ROW_TYPE = {
    question: 'question',
    bigQuestion: 'bigQuestion',
    childQuestion: 'childQuestion',
    answer: 'answer'
};
const QUESTION_TYPE = {
    1: 'TEXT',
    2: 'IMAGE',
    3: 'AUDIO ONE TIME',
    4: 'AUDIO MANY TIME',
};
const FIRST_ROW_INDEX = 9;
let indexQuestion = 0;
const listQuestionImportElement = $('#listQuestionImport');

$('#fileImportQuestion').on('change', function (e) {
    const files = e.target.files;
    if (files && files.length) {
        fileUpload = files[0];
    }
});

$('#loadFileImportQuestion').on('click', function (e) {
    e.preventDefault();

    if (fileUpload) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(fileUpload);
        reader.onload = function () {
            const data = new Uint8Array(reader.result);
            const wb = XLSX.read(data, {type: 'array'});
            const first_worksheet = wb.Sheets[wb.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(first_worksheet, {header:1});

            if (rows && rows.length > FIRST_ROW_INDEX) {
                indexQuestion = 0;
                listQuestionImportElement.html('');
                renderFile(rows);
            }
        }
    }
});

function renderFile(rows) {
    let indexBigQuestion = 0;
    let indexChildQuestion = 0;
    let questionElement = null;

    rows.map((row, keyRow) => {
        if (keyRow >= FIRST_ROW_INDEX) {
            switch (row[0]) {
                case ROW_TYPE.bigQuestion:
                    indexChildQuestion = 0;
                    indexBigQuestion = indexQuestion;
                    renderBigQuestion(row, indexQuestion);
                    indexQuestion++;
                    break;

                case ROW_TYPE.childQuestion:
                    questionElement = renderQuestion(row, indexChildQuestion, indexBigQuestion);
                    renderAnswer(rows, keyRow, questionElement, indexChildQuestion, indexBigQuestion);
                    indexChildQuestion++;
                    break;

                case ROW_TYPE.question:
                    questionElement = renderQuestion(row, indexQuestion)
                    renderAnswer(rows, keyRow, questionElement, indexQuestion);
                    indexQuestion++;
                    break;
            }
        }
    });
}

const questionId = 'question_';
const questionChildId = 'questionChild_';
const questionName = 'questions';
const childQuestionName = 'childQuestions';
const answerName = 'answers';

function getTypeQuestion(rowType) {
    return rowType ? rowType : 1
}

function renderBigQuestion(question, keyBigQuestion) {
    let questionElement = $('#bigQuestionExample').clone();
    const type = getTypeQuestion(question[3]);
    questionElement.attr('id', questionId + keyBigQuestion);
    questionElement.removeClass('d-none');
    questionElement.find('.inputCode').val(question[2]);
    questionElement.find('.inputCode').removeAttr('disabled');
    questionElement.find('.inputCode').attr('name', questionName + '[' + keyBigQuestion + '][code]');
    questionElement.find('.inputSuggest').val(question[4]);
    questionElement.find('.inputSuggest').attr('name', questionName + '[' + keyBigQuestion + '][suggest]');
    questionElement.find('.inputContent').val(question[5]);
    questionElement.find('.inputContent').attr('name', questionName + '[' + keyBigQuestion + '][content]');
    questionElement.find('.inputType').val(type);
    questionElement.find('.inputType').attr('name', questionName + '[' + keyBigQuestion + '][type]');
    questionElement.find('.inputPartId').val(question[1]);
    questionElement.find('.inputPartId').attr('name', questionName + '[' + keyBigQuestion + '][partId]');
    questionElement.find('.questionTypeLabel').html(QUESTION_TYPE[type]);

    listQuestionImportElement.append(questionElement);
}

function renderQuestion(question, keyQuestion, keyBigQuestion = null) {
    let questionElement = null;
    const type = getTypeQuestion(question[3]);
    if (keyBigQuestion) {
        //render child question
        questionElement = $('#childQuestionExample').clone();
        questionElement.attr('id', questionChildId + keyBigQuestion + '_' + keyQuestion);
        questionElement.find('.inputCode').attr('name', questionName + '[' + keyBigQuestion + '][' + childQuestionName + '][' + keyQuestion + '][code]');
        questionElement.find('.inputSuggest').attr('name', questionName + '[' + keyBigQuestion + '][' + childQuestionName + '][' + keyQuestion + '][suggest]');
        questionElement.find('.inputContent').attr('name', questionName + '[' + keyBigQuestion + '][' + childQuestionName + '][' + keyQuestion + '][content]');
        questionElement.find('.inputType').attr('name', questionName + '[' + keyBigQuestion + '][' + childQuestionName + '][' + keyQuestion + '][type]');
        questionElement.find('.inputPartId').attr('name', questionName + '[' + keyBigQuestion + '][' + childQuestionName + '][' + keyQuestion + '][partId]');
    } else {
        //render question
        questionElement = $('#questionExample').clone();
        questionElement.attr('id', questionId + keyQuestion);
        questionElement.find('.inputCode').attr('name', questionName + '[' + keyQuestion + '][code]');
        questionElement.find('.inputSuggest').attr('name', questionName + '[' + keyQuestion + '][suggest]');
        questionElement.find('.inputContent').attr('name', questionName + '[' + keyQuestion + '][content]');
        questionElement.find('.inputType').attr('name', questionName + '[' + keyQuestion + '][type]');
        questionElement.find('.inputPartId').attr('name', questionName + '[' + keyQuestion + '][partId]');
    }

    questionElement.removeClass('d-none');
    questionElement.find('.inputCode').val(question[2]);
    questionElement.find('.inputCode').removeAttr('disabled');
    questionElement.find('.inputSuggest').val(question[4]);
    questionElement.find('.inputContent').val(question[5]);
    questionElement.find('.inputType').val(type);
    questionElement.find('.inputPartId').val(question[1]);
    questionElement.find('.questionTypeLabel').html(QUESTION_TYPE[type]);

    listQuestionImportElement.append(questionElement);

    return questionElement;
}

function renderAnswer(rows, currentIndex, questionElement, keyQuestion, keyBigQuestion = null) {
    let indexAnswer = 1;
    for (let i = currentIndex + 1; i < (currentIndex + 5); i++) {
        const type = rows[i][0];
        if (type != ROW_TYPE.answer) break;

        questionElement.find('.answerRadio_' + indexAnswer).removeAttr('disabled');
        if (keyBigQuestion) {
            //answer childQuestion
            questionElement.find('.inputAnswer_' + indexAnswer).val(rows[i][1]);
            questionElement.find('.inputAnswer_' + indexAnswer).attr(
                'name', questionName + '[' + keyBigQuestion + '][' + childQuestionName + '][' + keyQuestion + '][' + answerName + '][' + indexAnswer + ']'
            );
            questionElement.find('.answerRadio_' + indexAnswer).val(indexAnswer);
            questionElement.find('.answerRadio_' + indexAnswer).attr(
                'name', questionName + '[' + keyBigQuestion + '][' + childQuestionName + '][' + keyQuestion + '][correct_answer]'
            );
            questionElement.find('.answerRadio_' + indexAnswer).attr('id', answerName + '_' + keyBigQuestion + '_' + keyQuestion + '_' + indexAnswer);
            questionElement.find('.answerLabel_' + indexAnswer).attr('for', answerName + '_' + keyBigQuestion + '_' + keyQuestion + '_' + indexAnswer);
        } else {
            //answer question
            questionElement.find('.inputAnswer_' + indexAnswer).val(rows[i][1]);
            questionElement.find('.inputAnswer_' + indexAnswer).attr(
                'name', questionName + '[' + keyQuestion + '][' + answerName + '][' + indexAnswer + ']'
            );
            questionElement.find('.answerRadio_' + indexAnswer).val(indexAnswer);
            questionElement.find('.answerRadio_' + indexAnswer).attr(
                'name', questionName + '[' + keyQuestion + '][correct_answer]'
            );
            questionElement.find('.answerRadio_' + indexAnswer).attr('id', answerName + '_' + keyQuestion + '_' + indexAnswer);
            questionElement.find('.answerLabel_' + indexAnswer).attr('for', answerName + '_' + keyQuestion + '_' + indexAnswer);
        }

        if (rows[i][2] === 1 || rows[i][2] === 'TRUE') {
            questionElement.find('.answerRadio_' + indexAnswer).attr('checked', 'checked');
        }

        indexAnswer++;
    }
}

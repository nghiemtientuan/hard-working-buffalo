let fileUpload = null;
const ROW_TYPE = {
    question: 'question',
    bigQuestion: 'bigQuestion',
    childQuestion: 'childQuestion',
    answer: 'answer'
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
    let indexChildQuestion = 0;

    rows.map((row, keyRow) => {
        if (keyRow >= FIRST_ROW_INDEX) {
            switch (row[0]) {
                case ROW_TYPE.bigQuestion:
                    indexChildQuestion = 0;
                    renderBigQuestion(row, indexQuestion);
                    indexQuestion++;
                    break;

                case ROW_TYPE.childQuestion:
                    renderQuestion(row, indexChildQuestion, indexQuestion);
                    renderAnswer(rows, keyRow,  indexChildQuestion, indexQuestion);
                    indexChildQuestion++;
                    break;

                case ROW_TYPE.question:
                    renderQuestion(row, indexQuestion)
                    renderAnswer(rows, keyRow, indexQuestion);
                    indexQuestion++;
                    break;
            }
        }
    });
}

const questionId = 'question_';
const questionChildId = 'questionChild_';
function renderBigQuestion(question, keyBigQuestion) {
    let questionElement = $('#bigQuestionExample').clone();
    questionElement.attr('id', questionId + keyBigQuestion);
    questionElement.removeClass('d-none');
    questionElement.find('.inputCode').val(question[2]);
    questionElement.find('.inputSuggest').val(question[4]);
    questionElement.find('.inputContent').val(question[5]);

    listQuestionImportElement.append(questionElement);
}

function renderQuestion(question, keyQuestion, keyBigQuestion = null) {
    let questionElement = null;
    if (keyBigQuestion) {
        //render child question
        questionElement = $('#childQuestionExample').clone();
        questionElement.attr('id', questionChildId + keyBigQuestion + '_' + keyQuestion);
    } else {
        //render question
        questionElement = $('#questionExample').clone();
        questionElement.attr('id', questionId + keyQuestion);
    }

    questionElement.removeClass('d-none');
    questionElement.find('.inputCode').val(question[2]);
    questionElement.find('.inputSuggest').val(question[4]);
    questionElement.find('.inputContent').val(question[5]);

    listQuestionImportElement.append(questionElement);
}

function renderAnswer(rows, currentIndex, keyQuestion, keyBigQuestion = null) {
    let indexAnswer = 0;
    for (let i = currentIndex + 1; i < rows.length; i++) {
        const type = rows[i][0];
        if (type != ROW_TYPE.answer) break;

        console.log(rows[i]);
        indexAnswer++;
    }
}

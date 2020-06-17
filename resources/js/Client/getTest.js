let testId = $('#myHeader #clockDiv').attr('data-testId');
let execute_time = $('#clockDiv').attr('data-execute_time');
let timeIntervalGlobal;
let duration = localStorage.getItem('duration_test_' + testId) || 0;
let time_in_minutes = execute_time - duration / 60;
let userAnswerSaveArrays = JSON.parse(localStorage.getItem('userAnswer_' + testId)) || [];
userAnswerSaveArrays.map(userAnswer => {
    $('input[name=' + userAnswer.name + '][value=' + userAnswer.value + ']').attr('checked', 'checked');
    $(userAnswer.hightlightQuestionId).addClass('bgc-Dddddd');
});
Swal.fire({
    title: trans('client.actions.are_you_ready'),
    icon: 'info',
    text: $('#myHeader').attr('data-guide'),
    showCancelButton: true,
    cancelButtonText: trans('client.pages.getTest.back_category'),
    confirmButtonColor: '#3085d6',
    confirmButtonText: trans('client.actions.yes_ready'),
    allowOutsideClick: false,
    backgroundColor: 'rgba(43, 165, 137, 0.45)',
    onBeforeOpen: () => {
        Swal.showLoading();
        $(window).on('load', function () {
            Swal.hideLoading();
        });
    },
}).then((result) => {
    if (result.value) {
        let current_time = Date.parse(new Date());
        let deadline = new Date(current_time + time_in_minutes * 60 * 1000);
        timeIntervalGlobal = run_clock('clockDiv', deadline);
    } else {
        let categoryId = $('#categoryId').val();
        window.location.replace(route('client.categories.show', categoryId));
    }
});

$('.swal2-container.swal2-shown').css('background-color', '#51be78');

window.onscroll = function () {
    myFunction()
};

function myFunction()
{
    if (window.pageYOffset > 53) {
        $('#myHeader .feature-1').css({'top': '140px', 'z-index': '200', 'transition':'1s'});
    } else {
        $('#myHeader .feature-1').css({'top': '260px', 'z-index': '200', 'transition':'1s'});
    }
}

function time_remaining(endTime)
{
    let t = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds};
}

function run_clock(id, endtime)
{
    let clock = document.getElementById(id);

    function update_clock()
    {
        let t = time_remaining(endtime);
        clock.innerHTML = '<h4 class="text-center"><i class="icon-timer"></i>' + t.minutes + ': ' + t.seconds + '</h4>';

        if (t.total <= 0) {
            time_out();
        } else {
            duration++;
        }
        localStorage.setItem('duration_test_' + testId, duration);
    }

    update_clock();
    return setInterval(update_clock, 1000);
}

function stopRunClock()
{
    clearInterval(timeIntervalGlobal);
}

function time_out()
{
    stopRunClock();
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Timeout',
        showConfirmButton: false,
        timer: 2000
    });
    setTimeout(function () {
        submit_form();
    }, 1500);
}

$(document).on('click', 'input[type=submit]', function (e) {
    e.preventDefault();
    Swal.fire({
        title: trans('client.actions.are_you_sure'),
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: trans('client.actions.yes_submit')
    }).then((result) => {
        if (result.value) {
            submit_form();
        }
    });
});

function submit_form()
{
    stopRunClock();
    $('#durationInput').val(duration);
    localStorage.removeItem('userAnswer_' + testId);
    localStorage.removeItem('duration_test_' + testId);
    document.getElementById("form_test").submit();
}

$(document).on('click', 'input[type=radio]', function () {
    let indexQuestion = $(this).attr('data-indexQuestion');
    let hightlightQuestionId = '#myHeader #hightlightQuestion #questionHighlightTh_' + indexQuestion;
    let name = $(this).attr('name');
    let value = $(this).val();
    let userAnswerArrays = JSON.parse(localStorage.getItem('userAnswer_' + testId)) || [];
    let newUserAnswer = {
        name,
        value,
        hightlightQuestionId
    }

    if (!$(hightlightQuestionId).hasClass('bgc-Dddddd')) {
        $(hightlightQuestionId).addClass('bgc-Dddddd');
    }

    addUserAnswer(newUserAnswer, userAnswerArrays);
});

function addUserAnswer(newUserAnswer, userAnswerArrays) {
    if (checkDuplicateUserAnswer(newUserAnswer, userAnswerArrays)) {
        userAnswerArrays.map((userAnswer, key) => {
            if (userAnswer.name === newUserAnswer.name) {
                userAnswerArrays[key].value = newUserAnswer.value;
            }
        });
    } else {
        userAnswerArrays = userAnswerArrays.concat(newUserAnswer);
    }

    localStorage.setItem('userAnswer_' + testId, JSON.stringify(userAnswerArrays));
}

function checkDuplicateUserAnswer(newUserAnswer, userAnswerArray) {
    let duplicate = userAnswerArray.find(userAnswer => newUserAnswer.name === userAnswer.name);

    return duplicate ? true : false;
}

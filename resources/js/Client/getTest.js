let execute_time = $('#clockDiv').data('execute_time');
let timeIntervalGlobal;
let time_in_minutes = execute_time;
let duration = 0;

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
    }

    update_clock();
    return setInterval(update_clock, 1000);
}

$(window).on('load', function () {
    let current_time = Date.parse(new Date());
    let deadline = new Date(current_time + time_in_minutes * 60 * 1000);
    timeIntervalGlobal = run_clock('clockDiv', deadline);
});

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
    document.getElementById("form_test").submit();
}

$(document).on('click', 'input[type=radio]', function () {
    let indexQuestion = $(this).attr('data-indexQuestion');
    let hightlightQuestionId = '#myHeader #hightlightQuestion #questionHighlightTh_' + indexQuestion;

    if (!$(hightlightQuestionId).hasClass('bgc-Dddddd')) {
        $(hightlightQuestionId).addClass('bgc-Dddddd');
    }
});

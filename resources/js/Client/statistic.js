Chart.defaults.global.defaultFontColor = '#000000';
Chart.defaults.global.defaultFontFamily = 'Arial';
let lineChart = document.getElementById('statisticTest');
let statisticChart;

$.ajax({
    type: 'GET',
    url: route('client.statistic.target'),
    cache: false,
    beforeSend: function() {
        $('#loader').addClass('show');
    },
    success: function (data) {
        if (data.code === STATUS_CODE.code_200) {
            statisticChart = new Chart(lineChart, {
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [
                        {
                            label: trans('client.pages.statistic.score'),
                            data: [],
                            backgroundColor: 'rgba(0, 128, 128, 0.3)',
                            borderColor: 'rgba(0, 128, 128, 0.7)',
                            borderWidth: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 990
                            }
                        }]
                    },
                    annotation: {
                        annotations: [{
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: data.data.target,
                            borderColor: 'rgb(255,0,0)',
                            borderWidth: 4,
                            label: {
                                enabled: true,
                                content: trans('client.pages.statistic.target'),
                                position : "right"
                            }
                        }]
                    }
                }
            });

            callAndRenderStatistic();
        }
    },
    error: function (data) {
        console.log('error: ' + data);
        $('#loader').removeClass('show');
    }
});

$(document).on('change', '#testStatisticSelect', function () {
    let testId = $(this).val();

    callAndRenderStatistic(testId);
});

function getLabels(statistic) {
    let labels = [];
    labels = statistic.map(history => history.test.name);

    return labels;
}

function getDatasets(statistic) {
    let datasets = [];
    datasets = statistic.map(history => history.score);

    return datasets;
}

function callAndRenderStatistic(testId = null) {
    $.ajax({
        type: 'GET',
        url: route('client.statistic.search'),
        cache: false,
        data: {testId: testId},
        beforeSend: function() {
            $('#loader').addClass('show');
        },
        success: function (data) {
            if (data.code === STATUS_CODE.code_200) {
                statisticChart.data.labels = getLabels(data.data.statistic);
                statisticChart.data.datasets[0].data = getDatasets(data.data.statistic);
                statisticChart.update();
            }
            $('#loader').removeClass('show');
        },
        error: function (data) {
            console.log('error: ' + data);
            $('#loader').removeClass('show');
        }
    });
}

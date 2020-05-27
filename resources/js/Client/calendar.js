$.ajax({
    type: 'GET',
    url: route('client.calendars.getEvent'),
    cache: false,
    beforeSend: function() {
        $('#loader').addClass('show');
    },
    success: function (data) {
        if (data.code === STATUS_CODE.code_200) {
            let currentdate = new Date();
            let events = [];
            if (data.data.attendances && data.data.attendances.length > 0) {
                data.data.attendances.forEach(attendance => {
                    let created_at = moment(new Date(attendance.created_at)).format('YYYY-MM-DD');
                    let event = {
                        title: attendance.title,
                        color: attendance.color,
                        start: created_at,
                        rendering: 'background'
                    };
                    if (attendance.action_type === 1 || attendance.action_type === 2) {
                        event.rendering = 'background';
                    }
                    console.log(events);

                    events.push(event);
                });
            }
            console.log(events);

            $('.fullcalendar-basic').fullCalendar({
                header: {
                    left: 'prev today next',
                    center: 'title',
                    right: ''
                },
                defaultDate: currentdate.getFullYear() + '-' + (currentdate.getMonth() + 1) + '-' + currentdate.getDay(),
                editable: true,
                events: events
            });
        }
        $('#loader').removeClass('show');
    },
    error: function (data) {
        console.log('error: ' + data);
        $('#loader').removeClass('show');
    }
});

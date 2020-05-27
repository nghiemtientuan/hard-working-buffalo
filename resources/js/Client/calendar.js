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
            if (data.attendances && data.attendances.length > 0) {
                data.attendances.forEach(attendance => {
                    let event = {
                        title: attendance.title,
                        color: attendance.color,
                        start: attendance.created_at,
                        rendering: 'background'
                    };
                    if (attendance.action_type === 1 || attendance.action_type === 2) {
                        event.rendering = 'background';
                    }

                    events.push(event);
                });
            }

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

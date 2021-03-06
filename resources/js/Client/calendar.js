$.ajax({
    type: 'GET',
    url: route('client.calendars.getEvent'),
    cache: false,
    beforeSend: function() {
        $('#loader').addClass('show');
    },
    success: function (data) {
        if (data.code === STATUS_CODE.code_200) {
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

                    events.push(event);
                });
            }

            $('.fullcalendar-basic').fullCalendar({
                header: {
                    left: 'prev today next',
                    center: 'title',
                    right: ''
                },
                defaultDate: new Date(),
                editable: true,
                events: events
            });
        }
        $('#loader').removeClass('show');
    },
    error: function () {
        $('#loader').removeClass('show');
    }
});

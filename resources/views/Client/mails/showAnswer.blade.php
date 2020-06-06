Hey {{ getFullName($student->lastname, $student->firstname) }}!<br />
The test that is <a href="{{ route('client.tests.test', $test->id) }}">({{ $test->code }}){{ $test->name }}</a> has been shown the answer<br />
Please check the answers and comment immediately<br />
Your tests are:<br />
@foreach ($histories as $history)
    <a href="{{ route('client.histories.show', $history->id) }}">{{ $history->created_at }}</a><br />
@endforeach
<br />
-----------------------------------------------------------------<br />
<br />
Team {{ config('mail.mail_form_name') }}<br />
{{ config('mail.mail_form_address') }}<br />

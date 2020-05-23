Hey {{ getFullName($lastname, $firstname) }}!<br />
Your account has been created on <a href="{{ config('app.url') }}">{{ config('app.url') }}</a><br />
Your password is: {{ $password }}<br />
Please change your password immediately upon login on the website<br />
<br />
-----------------------------------------------------------------<br />
<br />
Team {{ config('mail.mail_form_name') }}<br />
{{ config('mail.mail_form_address') }}<br />

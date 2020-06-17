<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Mail;

class SendMailShowAnswer implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $student;
    protected $test;
    protected $histories;

    /**
     * Create a new job instance.
     *
     * @param $student
     * @param $test
     * @param $histories
     */
    public function __construct($student, $test, $histories)
    {
        $this->student = $student;
        $this->test = $test;
        $this->histories = $histories;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $toEmail = $this->student->email;
        $dataMail = [
            'student' => $this->student,
            'test' => $this->test,
            'histories' => $this->histories,
        ];
        Mail::send('Client.mails.showAnswer', $dataMail, function($message) use ($toEmail) {
            $message->from(config('mail.mail_form_address'), config('mail.mail_form_name'));
            $message->to($toEmail)->subject(config('constant.subject_mail.createAccount'));
        });
    }
}

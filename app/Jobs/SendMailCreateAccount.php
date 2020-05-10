<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Mail;

class SendMailCreateAccount implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $data;
    protected $password;

    /**
     * Create a new job instance.
     * @param $data
     * @param $password
     */
    public function __construct($data, $password)
    {
        $this->data = $data;
        $this->password = $password;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $toEmail = $this->data['email'];
        $dataUser = $this->data;
        $dataUser['password'] = $this->password;
        Mail::send('Admin.mails.createAccount', $dataUser, function($message) use ($toEmail) {
            $message->from(config('mail.mail_form_address'), config('mail.mail_form_name'));
            $message->to($toEmail)->subject(config('constant.subject_mail.createAccount'));
        });
    }
}

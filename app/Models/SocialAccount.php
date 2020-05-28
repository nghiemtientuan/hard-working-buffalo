<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialAccount extends Model
{
    const STUDENT_ID = 'student_id';
    const PROVIDER_STUDENT_ID_FIELD = 'provider_student_id';
    const PROVIDER_FIELD = 'provider';

    const FACEBOOK_SOCIAL = 'facebook';
    const GOOGLE_SOCIAL = 'google';

    protected $fillable = [
        SocialAccount::STUDENT_ID,
        SocialAccount::PROVIDER_STUDENT_ID_FIELD,
        SocialAccount::PROVIDER_FIELD,
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}

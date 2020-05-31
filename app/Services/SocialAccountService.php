<?php

namespace App\Services;

use App\Models\SocialAccount;
use App\Models\Student;
use Laravel\Socialite\Contracts\User as ProviderUser;

class SocialAccountService
{
    public static function createOrGetUser(ProviderUser $providerUser, $social)
    {
        $account = SocialAccount::whereProvider($social)
            ->whereProviderStudentId($providerUser->getId())
            ->first();

        if ($account) {
            return $account->user;
        } else {
            $email = $providerUser->getEmail();
            $account = new SocialAccount([
                SocialAccount::PROVIDER_STUDENT_ID_FIELD => $providerUser->getId(),
                SocialAccount::PROVIDER_FIELD => $social,
            ]);
            $user = Student::whereEmail($email)->first();

            if (!$user) {

                $user = Student::create([
                    Student::EMAIL_FIELD => $email,
                    Student::USERNAME_FIELD => $providerUser->getName(),
                    Student::FIRSTNAME_FIELD => Student::FIRSTNAME_DEFAULT,
                    Student::LASTNAME_FIELD => Student::LASTNAME_DEFAULT,
                    Student::ACTIVE_FIELD => Student::ACTIVE_TRUE,
                ]);
            }
            $account->student()->associate($user);
            $account->save();

            return $user;
        }
    }
}

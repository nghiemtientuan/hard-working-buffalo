<?php

namespace App\Repositories\Contracts;

interface StudentRepositoryInterface
{
    public function getProfileTimeline($studentId);
}

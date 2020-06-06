<?php

namespace App\Repositories\Contracts;

interface TestRepositoryInterface
{
    public function getTestFree();

    public function getNewTest();

    public function getTestNotShowAnswer();
}

<?php

namespace App\Repositories\Contracts;

interface SettingRepositoryInterface
{
    public function getCostCoinSetting();

    public function getAttribute($attribute);
}

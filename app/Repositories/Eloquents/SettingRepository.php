<?php

namespace App\Repositories\Eloquents;

use App\Models\Setting;
use App\Repositories\Contracts\SettingRepositoryInterface;

class SettingRepository extends EloquentRepository implements SettingRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Setting::class;
    }

    private function parseArraySetting($settingsObject)
    {
        $settingsArray = [];
        foreach ($settingsObject as $setting) {
            $settingsArray[$setting[Setting::KEY_FIELD]] = $setting[Setting::VALUE_FIELD];
        }

        return $settingsArray;
    }

    public function getCostCoinSetting()
    {
        $settingsObject = $this->_model->select(Setting::KEY_FIELD, Setting::VALUE_FIELD)
            ->where(Setting::KEY_FIELD, Setting::COST_COIN_KEY)
            ->get();
        $settingsArray = $this->parseArraySetting($settingsObject);

        if (!isset($settingsArray[Setting::COST_COIN_KEY])) {
            $settingsArray[Setting::COST_COIN_KEY] = Setting::COST_COIN_DEFAULT;
        }

        return $settingsArray;
    }
}

<?php

use App\Models\Setting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->truncate();
        $data = [
            [
                Setting::KEY_FIELD => Setting::COST_COIN_KEY,
                Setting::VALUE_FIELD => 1000,
            ],
        ];
        foreach ($data as $item) {
            Setting::create($item);
        }
    }
}

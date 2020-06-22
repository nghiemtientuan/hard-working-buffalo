<?php

use App\Models\Setting;
use App\Models\Student;
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
            [
                Setting::KEY_FIELD => Setting::DEFAULT_COIN_NEW_STUDENT_KEY,
                Setting::VALUE_FIELD => Student::COIN_DEFAULT_NEW_STUDENT
            ],
        ];
        foreach ($data as $item) {
            Setting::create($item);
        }
    }
}

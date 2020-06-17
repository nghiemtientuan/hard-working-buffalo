<?php

use App\Models\Format;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FormatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('formats')->truncate();
        $data = [
            [
                Format::NAME_FIELD => 'old toeic',
                Format::DESCRIPTION_FIELD => 'old toeic',
                Format::TOTAL_QUESTION_FIELD => 100,
            ],
            [
                Format::NAME_FIELD => 'new toeic',
                Format::DESCRIPTION_FIELD => 'new toeic',
                Format::TOTAL_QUESTION_FIELD => 100,
            ],
            [
                Format::NAME_FIELD => 'custom',
                Format::DESCRIPTION_FIELD => 'custom',
                Format::TOTAL_QUESTION_FIELD => 100,
            ],
        ];
        foreach ($data as $item) {
            Format::create($item);
        }
    }
}

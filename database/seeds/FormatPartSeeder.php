<?php

use App\Models\FormatPart;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FormatPartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('format_part')->truncate();
        $data = [
            [
                FormatPart::FORMAT_ID_FIELD => 1,
                FormatPart::PART_ID_FIELD => 1,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 1,
                FormatPart::PART_ID_FIELD => 2,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 1,
                FormatPart::PART_ID_FIELD => 3,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 1,
                FormatPart::PART_ID_FIELD => 4,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 1,
                FormatPart::PART_ID_FIELD => 5,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 1,
                FormatPart::PART_ID_FIELD => 6,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 1,
                FormatPart::PART_ID_FIELD => 7,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 2,
                FormatPart::PART_ID_FIELD => 1,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 2,
                FormatPart::PART_ID_FIELD => 2,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 2,
                FormatPart::PART_ID_FIELD => 3,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 2,
                FormatPart::PART_ID_FIELD => 4,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 2,
                FormatPart::PART_ID_FIELD => 5,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 2,
                FormatPart::PART_ID_FIELD => 6,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 2,
                FormatPart::PART_ID_FIELD => 7,
            ],
            [
                FormatPart::FORMAT_ID_FIELD => 3,
                FormatPart::PART_ID_FIELD => 8,
            ],
        ];
        foreach ($data as $item) {
            FormatPart::create($item);
        }
    }
}

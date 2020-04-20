<?php

use App\Models\Part;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('parts')->truncate();
        $data = [
            [
                Part::NAME_FIELD => 'Part 1',
                Part::DESCRIPTION_FIELD => 'Part 1',
            ],
            [
                Part::NAME_FIELD => 'Part 2',
                Part::DESCRIPTION_FIELD => 'Part 2',
            ],
            [
                Part::NAME_FIELD => 'Part 3',
                Part::DESCRIPTION_FIELD => 'Part 3',
            ],
            [
                Part::NAME_FIELD => 'Part 4',
                Part::DESCRIPTION_FIELD => 'Part 4',
            ],
            [
                Part::NAME_FIELD => 'Part 5',
                Part::DESCRIPTION_FIELD => 'Part 5',
            ],
            [
                Part::NAME_FIELD => 'Part 6',
                Part::DESCRIPTION_FIELD => 'Part 6',
            ],
            [
                Part::NAME_FIELD => 'Part 7',
                Part::DESCRIPTION_FIELD => 'Part 7',
            ],
            [
                Part::NAME_FIELD => 'Custom 1',
                Part::DESCRIPTION_FIELD => 'Custom 1',
            ],
            [
                Part::NAME_FIELD => 'Custom 2',
                Part::DESCRIPTION_FIELD => 'Custom 2',
            ],
        ];
        foreach ($data as $item) {
            Part::create($item);
        }
    }
}

<?php

use App\Models\File;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('files')->truncate();
        $data = [
            [
                File::NAME_FIELD => 'a.png',
                File::BASE_FOLDER_FIELD => '/images/categories/a.png',
                File::TYPE_FIELD => File::TYPE_CATEGORY,
            ],
            [
                File::NAME_FIELD => 'b.png',
                File::BASE_FOLDER_FIELD => '/images/categories/b.png',
                File::TYPE_FIELD => File::TYPE_CATEGORY,
            ],
            [
                File::NAME_FIELD => 'c.png',
                File::BASE_FOLDER_FIELD => '/images/categories/c.png',
                File::TYPE_FIELD => File::TYPE_CATEGORY,
            ],
        ];
        foreach ($data as $item) {
            File::create($item);
        }
    }
}

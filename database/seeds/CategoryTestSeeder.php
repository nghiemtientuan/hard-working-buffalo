<?php

use App\Models\CategoryTest;
use Illuminate\Database\Seeder;

class CategoryTestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category_test')->truncate();
        $data = [
            [
                CategoryTest::TEST_ID_FIELD => 1,
                CategoryTest::CATEGORY_ID_FIELD => 4,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 2,
                CategoryTest::CATEGORY_ID_FIELD => 4,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 3,
                CategoryTest::CATEGORY_ID_FIELD => 4,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 1,
                CategoryTest::CATEGORY_ID_FIELD => 5,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 2,
                CategoryTest::CATEGORY_ID_FIELD => 5,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 3,
                CategoryTest::CATEGORY_ID_FIELD => 5,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 1,
                CategoryTest::CATEGORY_ID_FIELD => 6,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 2,
                CategoryTest::CATEGORY_ID_FIELD => 6,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 3,
                CategoryTest::CATEGORY_ID_FIELD => 6,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 1,
                CategoryTest::CATEGORY_ID_FIELD => 7,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 2,
                CategoryTest::CATEGORY_ID_FIELD => 7,
            ],
            [
                CategoryTest::TEST_ID_FIELD => 3,
                CategoryTest::CATEGORY_ID_FIELD => 7,
            ],
        ];
        foreach ($data as $item) {
            CategoryTest::create($item);
        }
    }
}

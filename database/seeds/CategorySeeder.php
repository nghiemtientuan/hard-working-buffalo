<?php

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->truncate();
        $data = [
            [
                Category::NAME_FIELD => 'Test Toeic',
                Category::FILE_ID_FIELD => 1,
            ],
            [
                Category::NAME_FIELD => 'Topic',
                Category::FILE_ID_FIELD => 2,
            ],
            [
                Category::NAME_FIELD => 'Vocabulary',
                Category::FILE_ID_FIELD => 3,
            ],
            [
                Category::NAME_FIELD => 'test 0-200',
                Category::PARENT_ID_FIELD => 1,
                Category::GUIDE_FIELD => 'test 0-200'
            ],
            [
                Category::NAME_FIELD => 'test 200-400',
                Category::PARENT_ID_FIELD => 1,
                Category::GUIDE_FIELD => 'test 200-400'
            ],
            [
                Category::NAME_FIELD => 'test 400-600',
                Category::PARENT_ID_FIELD => 1,
                Category::GUIDE_FIELD => 'test 400-600'
            ],
            [
                Category::NAME_FIELD => 'test 600-700',
                Category::PARENT_ID_FIELD => 1,
                Category::GUIDE_FIELD => 'test 600-700'
            ],
            [
                Category::NAME_FIELD => 'test 700-800',
                Category::PARENT_ID_FIELD => 1,
                Category::GUIDE_FIELD => 'test 700-800'
            ],
            [
                Category::NAME_FIELD => 'test 800-900',
                Category::PARENT_ID_FIELD => 1,
                Category::GUIDE_FIELD => 'test 800-900'
            ],
            [
                Category::NAME_FIELD => 'test *',
                Category::PARENT_ID_FIELD => 1,
                Category::GUIDE_FIELD => 'test *'
            ],
            [
                Category::NAME_FIELD => 'Animals',
                Category::PARENT_ID_FIELD => 2,
                Category::GUIDE_FIELD => 'test Animal'
            ],
            [
                Category::NAME_FIELD => 'Relationship',
                Category::PARENT_ID_FIELD => 2,
                Category::GUIDE_FIELD => 'Relationship'
            ],
            [
                Category::NAME_FIELD => 'Fashion',
                Category::PARENT_ID_FIELD => 2,
                Category::GUIDE_FIELD => 'Fashion'
            ],
            [
                Category::NAME_FIELD => 'Life',
                Category::PARENT_ID_FIELD => 2,
                Category::GUIDE_FIELD => 'Life'
            ],
            [
                Category::NAME_FIELD => 'Body',
                Category::PARENT_ID_FIELD => 2,
                Category::GUIDE_FIELD => 'Body'
            ],
            [
                Category::NAME_FIELD => 'Vehicles',
                Category::PARENT_ID_FIELD => 2,
                Category::GUIDE_FIELD => 'Vehicles'
            ],
            [
                Category::NAME_FIELD => 'Animals',
                Category::PARENT_ID_FIELD => 3,
                Category::GUIDE_FIELD => 'test Animal'
            ],
            [
                Category::NAME_FIELD => 'Relationships',
                Category::PARENT_ID_FIELD => 3,
                Category::GUIDE_FIELD => 'Relationships'
            ],
            [
                Category::NAME_FIELD => 'Fashions',
                Category::PARENT_ID_FIELD => 3,
                Category::GUIDE_FIELD => 'Fashions'
            ],
            [
                Category::NAME_FIELD => 'Life',
                Category::PARENT_ID_FIELD => 3,
                Category::GUIDE_FIELD => 'Life'
            ],
            [
                Category::NAME_FIELD => 'Body',
                Category::PARENT_ID_FIELD => 3,
                Category::GUIDE_FIELD => 'Body'
            ],
            [
                Category::NAME_FIELD => 'Vehicle',
                Category::PARENT_ID_FIELD => 3,
                Category::GUIDE_FIELD => 'Vehicle'
            ],
        ];
        foreach ($data as $item) {
            Category::create($item);
        }
    }
}

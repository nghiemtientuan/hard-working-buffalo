<?php

use App\Models\Blog;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blogs')->truncate();
        $data = [
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_USER,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                Blog::USER_ID_FIELD => 1,
                Blog::USER_TYPE_FIELD => Blog::TYPE_STUDENT,
                Blog::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
        ];
        foreach ($data as $item) {
            Blog::create($item);
        }
    }
}

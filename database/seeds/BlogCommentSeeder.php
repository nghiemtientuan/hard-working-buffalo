<?php

use App\Models\BlogComment;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogCommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('blog_comments')->truncate();
        $data = [
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_USER,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
            [
                BlogComment::BLOG_ID_FIELD => 1,
                BlogComment::USER_ID_FIELD => 1,
                BlogComment::USER_TYPE_FIELD => BlogComment::TYPE_STUDENT,
                BlogComment::CONTENT_FIELD => 'jss ss ss ss ss ss ss ss ss ss ss ss ss',
            ],
        ];
        foreach ($data as $item) {
            BlogComment::create($item);
        }
    }
}

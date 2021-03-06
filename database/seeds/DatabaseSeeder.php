<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CategorySeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(StudentLevelSeeder::class);
        $this->call(StudentSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(FileSeeder::class);
        $this->call(TestSeeder::class);
        $this->call(QuestionSeed::class);
        $this->call(QuestionCommentSeed::class);
        $this->call(PartSeeder::class);
        $this->call(AnswerSeeder::class);
        $this->call(SettingSeeder::class);
        $this->call(BlogSeeder::class);
        $this->call(BlogCommentSeeder::class);
    }
}

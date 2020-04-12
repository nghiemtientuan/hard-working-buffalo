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
        $this->call(StudentTypeSeeder::class);
        $this->call(StudentSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(FileSeeder::class);
        $this->call(TestSeeder::class);
    }
}

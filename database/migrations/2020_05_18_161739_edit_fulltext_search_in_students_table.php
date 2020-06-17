<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EditFulltextSearchInStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('students', function (Blueprint $table) {
            DB::statement('ALTER TABLE students ADD FULLTEXT `username` (`username`)');
            DB::statement('ALTER TABLE students ADD FULLTEXT `firstname` (`firstname`)');
            DB::statement('ALTER TABLE students ADD FULLTEXT `lastname` (`lastname`)');
            DB::statement('ALTER TABLE students ENGINE = MyISAM');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('students', function (Blueprint $table) {
            DB::statement('ALTER TABLE students DROP INDEX username');
            DB::statement('ALTER TABLE students DROP INDEX firstname');
            DB::statement('ALTER TABLE students DROP INDEX lastname');
            DB::statement('ALTER TABLE students ENGINE = InnoDB');
        });
    }
}

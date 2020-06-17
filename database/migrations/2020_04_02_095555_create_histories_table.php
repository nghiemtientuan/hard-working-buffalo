<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('histories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('test_id')->nullable();
            $table->integer('student_id')->nullable();
            $table->integer('duration')->nullable();
            $table->string('random_seed')->nullable();
            $table->integer('score')->nullable();
            $table->integer('reading_number')->nullable();
            $table->integer('listening_number')->nullable();
            $table->text('user_answer')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('histories');
    }
}

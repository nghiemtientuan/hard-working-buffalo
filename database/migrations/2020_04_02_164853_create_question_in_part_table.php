<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionInPartTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question_in_part', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('part_id')->nullable();
            $table->integer('number')->nullable();
            $table->integer('type')->nullable();
            $table->integer('child_questions')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('question_in_part');
    }
}

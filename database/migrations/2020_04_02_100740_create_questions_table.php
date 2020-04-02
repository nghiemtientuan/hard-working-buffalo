<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('file_id')->nullable();
            $table->integer('parent_id')->nullable();
            $table->integer('test_id')->nullable();
            $table->integer('part_id')->nullable();
            $table->integer('type')->nullable();
            $table->text('suggest')->nullable();
            $table->text('content')->nullable();
            $table->string('code')->nullable();
            $table->integer('level')->nullable();
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
        Schema::dropIfExists('questions');
    }
}

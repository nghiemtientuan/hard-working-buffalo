<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Models\Test;

class CreateTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('category_id')->nullable();
            $table->integer('created_user_id')->nullable();
            $table->string('name')->nullable();
            $table->string('code')->nullable();
            $table->text('guide')->nullable();
            $table->string('day_show_answer')->nullable();
            $table->integer('is_show_answer')->default(Test::IS_SHOW_ANSWER_FALSE);
            $table->integer('execute_time')->nullable();
            $table->integer('total_question')->nullable();
            $table->integer('is_formula_score')->default(0);
            $table->integer('price')->nullable();
            $table->integer('score')->nullable();
            $table->integer('level')->nullable();
            $table->integer('publish')->nullable();
            $table->integer('is_random')->default(Test::IS_RANDOM_TRUE);
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
        Schema::dropIfExists('tests');
    }
}

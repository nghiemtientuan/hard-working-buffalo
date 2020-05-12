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
            $table->integer('created_user_id')->nullable();
            $table->integer('format_id')->nullable();
            $table->string('name')->nullable();
            $table->string('code')->nullable();
            $table->text('guide')->nullable();
            $table->integer('execute_time')->nullable();
            $table->integer('total_question')->nullable();
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

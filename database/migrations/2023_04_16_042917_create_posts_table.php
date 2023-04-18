<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('post_title')->unique();
             $table->string('slug');
            $table->text('excerpt')->nullable();
            $table->integer('min_to_read')->default(1);
            $table->boolean('is_published');
            $table->text('body')->nullable();
            $table->string('imagepath')->nullable();
             $table->string('imagespath')->nullable();
            $table->UnsignedBigInteger('user_id');
            
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('posts');
    }
};

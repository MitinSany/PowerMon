<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCalendarPhoneTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calendar_phone', function (Blueprint $table) {
            $table->unsignedInteger('calendar_day_id')->index();
            $table->foreign('calendar_day_id')->references('id')->on('calendar')->onDelete('cascade');

            $table->unsignedInteger('phone_id')->index();
            $table->foreign('phone_id')->references('id')->on('phones')->onDelete('cascade');

            $table->unique(['calendar_day_id', 'phone_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('calendar_phone');
    }
}

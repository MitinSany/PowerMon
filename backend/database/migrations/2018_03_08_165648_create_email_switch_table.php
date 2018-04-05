<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmailSwitchTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('email_switch', function (Blueprint $table) {
            $table->unsignedInteger('switch_id')->index();
            $table->foreign('switch_id')->references('id')->on('switches')->onDelete('cascade');

            $table->unsignedInteger('email_id')->index();
            $table->foreign('email_id')->references('id')->on('emails')->onDelete('cascade');

            $table->unique(['switch_id', 'email_id']);
            //$table->timestampsTz();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('email_switch');
    }
}

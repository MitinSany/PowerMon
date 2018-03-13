<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSwitchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('switches', function (Blueprint $table) {
            $table->increments('id');
            $table->timestampsTz();

            $table->string('technical_site_name')->nullable();
            $table->string('switch_name')->nullable();
            $table->integer('port')->nullable();
            $table->string('link')->nullable();
            $table->string('comment')->nullable();

            $table->boolean('check_snmp')->default(false);;
            $table->boolean('email_send')->default(false);;
            $table->boolean('sms_send')->default(false);;
            $table->boolean('sms_night')->default(false);;

            $table->string('snmp_ip')->nullable();
            $table->string('snmp_community')->nullable();
            $table->string('snmp_oid')->nullable();

            $table->integer('order')->nullable();
            $table->integer('rank')->nullable();

            $table->integer('status_snmp')->nullable();
            $table->integer('status_ping')->nullable();

            $table->dateTimeTz('changed')->nullable();
            $table->dateTimeTz('snmp_uptime')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('switches');
    }
}

<?php

namespace App\Providers;

use App\Models\DevSwitch;
use App\Models\Email;
use App\Models\Phone;
use Illuminate\Support\Facades\Event;
use Laravel\Lumen\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     *
    protected $listen = [
        'App\Events\IncTableRevEvent' => [
            'App\Listeners\IncTableRevListener',
        ],
    ];*/

    /**
     * Register any other events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
        DevSwitch::creating('App\Events\IncTableRevEvent');
        DevSwitch::saving('App\Events\IncTableRevEvent');
        DevSwitch::deleting('App\Events\IncTableRevEvent');

        Email::creating('App\Events\IncTableRevEvent');
        Email::saving('App\Events\IncTableRevEvent');
        Email::deleting('App\Events\IncTableRevEvent');

        Phone::creating('App\Events\IncTableRevEvent');
        Phone::saving('App\Events\IncTableRevEvent');
        Phone::deleting('App\Events\IncTableRevEvent');

        //TODO: addcalendar and logs models handers
    }
}

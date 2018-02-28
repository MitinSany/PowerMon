<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Laravel\Lumen\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    /*protected $listen = [
        'App\Events\SomeEvent' => [
            'App\Listeners\ModelSavedListener',
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

        Event::listen('eloquent.saved: *', $this->handleModelSave);
    }

    protected function handleModelSave(string $eventName, array $data) {

    }
}

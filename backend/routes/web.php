<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('/auth/login', 'AuthController@postLogin');
$router->get('/user', 'UserController@getUserData');

//$router->get('/stores_revisions', 'StoresRevisionsController@all');

$router->group(['prefix' => 'stores'], function () use ($router) {
    $router->group(['prefix' => 'switches'], function () use ($router) {
        $router->get('all', ['uses' => 'SwitchController@all']);
        $router->get('read/{id}', ['uses' => 'SwitchController@read', 'as' => 'stores/switches/read']);
        $router->post('create', ['uses' => 'SwitchController@create']);
        $router->put('update', ['uses' => 'SwitchController@update']);
        $router->delete('delete', ['uses' => 'SwitchController@delete']);
    });

    $router->group(['prefix' => 'emails'], function () use ($router) {
        $router->get('all', ['uses' => 'EmailController@all']);
//        $router->get('read/{id}', ['uses' => 'EmailController@read', 'as' => 'stores/emails/read']);
        $router->post('create', ['uses' => 'EmailController@create']);
//        $router->put('update', ['uses' => 'EmailController@update']);
//        $router->delete('delete', ['uses' => 'EmailController@delete']);
    });

    $router->group(['prefix' => 'phones'], function () use ($router) {
        $router->get('all', ['uses' => 'PhoneController@all']);
//        $router->get('read/{id}', ['uses' => 'PhoneController@read', 'as' => 'stores/phones/read']);
        $router->post('create', ['uses' => 'PhoneController@create']);
//        $router->put('update', ['uses' => 'PhoneController@update']);
//        $router->delete('delete', ['uses' => 'PhoneController@delete']);
    });

    $router->group(['prefix' => 'tables_revisions'], function () use ($router) {
        $router->get('all', ['uses' => 'TablesRevisionsController@all']);
    });
});


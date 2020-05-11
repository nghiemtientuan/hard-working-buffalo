<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('login', 'Auth\LoginController@getLogin')->name('client.login');
Route::post('login', 'Auth\LoginController@postLogin')->name('client.postLogin');
Route::post('logout', 'Auth\LoginController@logout')->name('client.logout');

Route::group([
    'namespace' => 'Client',
    'as' => 'client.',
], function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::get('categories', 'CategoryController@index')->name('categories');
});

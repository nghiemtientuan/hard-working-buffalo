<?php

Route::group([
    'prefix' => 'admin',
    'namespace' => 'Admin',
], function () {
    Route::get('/', 'HomeController@index')->name('admin.home');
});

<?php

Route::group([
    'prefix' => 'admin',
    'namespace' => 'Admin',
    'as' => 'admin.',
], function () {
    Route::get('/', 'HomeController@index')->name('admin.home');

    Route::resource('categories', 'CategoryController')->except('create', 'show', 'edit');
});

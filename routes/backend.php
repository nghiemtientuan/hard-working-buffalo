<?php

Route::group([
    'prefix' => 'admin',
    'namespace' => 'Admin',
    'as' => 'admin.',
], function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::resource('categories', 'CategoryController')->except('create', 'show', 'edit');

    Route::resource('users', 'UserController');

    Route::get('students/getData', 'StudentController@getData')->name('students.getData');
    Route::resource('students', 'StudentController')->except('create', 'show', 'edit');
});

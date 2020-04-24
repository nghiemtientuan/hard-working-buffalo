<?php

Route::group([
    'prefix' => 'admin',
    'namespace' => 'Admin',
    'as' => 'admin.',
    'middleware' => ['auth']
], function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::resource('categories', 'CategoryController')->except('create', 'show', 'edit');

    Route::get('users/getData', 'UserController@getData')->name('users.getData');
    Route::resource('users', 'UserController')->except('create', 'show', 'edit');

    Route::get('students/getData', 'StudentController@getData')->name('students.getData');
    Route::resource('students', 'StudentController')->except('create', 'show', 'edit');

    Route::group([
        'prefix' => 'tests',
        'as' => 'tests.',
    ], function () {
        Route::get('getData', 'TestController@getData')->name('getData');

        Route::get('{test_id}/questions', 'TestController@getQuestions')->name('questions.index');
    });
    Route::resource('tests', 'TestController')->except('create', 'show', 'edit');

    Route::group([
        'prefix' => 'questions',
        'as' => 'questions.',
    ], function () {
        Route::get('getData', 'QuestionController@getData')->name('getData');
        Route::get('{test_id}/create', 'QuestionController@create')->name('create');
        Route::post('{test_id}/store', 'QuestionController@store')->name('store');

        Route::get('comments/getData', 'QuestionCommentController@getData')->name('comments.getData');
        Route::resource('comments', 'QuestionCommentController')->except('create', 'store', 'show', 'edit', 'update');
    });
    Route::resource('questions', 'QuestionController')->except('create', 'store', 'show');

    Route::group([
        'prefix' => 'formats',
        'as' => 'formats.',
    ], function () {
        Route::get('getData', 'FormatController@getData')->name('getData');
    });
    Route::resource('formats', 'FormatController')->except('create', 'show', 'edit');

    Route::get('profile', 'ProfileController@index')->name('profile');
    Route::put('profile', 'ProfileController@update')->name('profile.update');
});

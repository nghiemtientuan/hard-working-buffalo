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

Route::get('change_password', 'Client\StudentController@getChangePass')
    ->middleware('checkStudentRole')
    ->name('client.changePass.show');
Route::post('change_password', 'Client\StudentController@postChangePass')
    ->middleware('checkStudentRole')
    ->name('client.changePass.update');

Route::group([
    'namespace' => 'Client',
    'as' => 'client.',
    'middleware' => ['checkStudentFirstLogin']
], function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::get('categories/{categoryId}', 'CategoryController@show')->name('categories.show');

    Route::group(['middleware' => ['checkClientAdminLogin']], function () {
        Route::post('tests/buy', 'TestController@buy')->name('tests.buy');

        Route::get('tests/{testId}', 'TestController@test')->name('tests.test');
        Route::post('tests/{testId}', 'TestController@result')->name('tests.result');

        Route::get('histories', 'HistoryController@index')->name('histories.index');
        Route::get('histories/{historyId}', 'HistoryController@show')
            ->middleware('checkOwnerHistory')
            ->name('histories.show');
    });

    Route::get('ranking', 'RankingController@index')->name('ranking.index');

    Route::get('profile', 'StudentController@profile')->middleware('checkStudentRole')->name('profile.index');

    Route::group(['prefix' => 'api', 'as' => 'api.'], function () {
        Route::get('questions/{questionId}/comments', 'TestController@getComments')->name('questions.getComments');
    });

    Route::get('not_found', 'NotFoundController@index')->name('notFound');
});

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

Route::get('/redirect/{social}', 'Client\SocialAuthController@redirect')->name('client.socials.redirect');
Route::get('/callback/{social}', 'Client\SocialAuthController@callback');

Route::get('change_password', 'Client\StudentController@getChangePass')
    ->middleware(['checkStudentRole', 'loginAttendance'])
    ->name('client.changePass.show');
Route::post('change_password', 'Client\StudentController@postChangePass')
    ->middleware(['checkStudentRole', 'loginAttendance'])
    ->name('client.changePass.update');

Route::get('signin', 'Client\StudentController@getSignin')->name('client.getSignin');
Route::post('signin', 'Client\StudentController@postSignin')->name('client.postSignin');

Route::group([
    'namespace' => 'Client',
    'as' => 'client.',
    'middleware' => ['checkStudentFirstLogin', 'loginAttendance']
], function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::get('categories/{categoryId}', 'CategoryController@show')->name('categories.show');

    Route::group(['middleware' => ['checkClientAdminLogin']], function () {
        Route::post('tests/buy', 'TestController@buy')->name('tests.buy');

        Route::get('tests/{testId}', 'TestController@test')->name('tests.test');
        Route::post('tests/{testId}', 'TestController@result')->middleware('testedAttendance')->name('tests.result');

        Route::get('histories', 'HistoryController@index')->name('histories.index');
        Route::get('histories/{historyId}', 'HistoryController@show')
            ->middleware('checkOwnerHistory')
            ->name('histories.show');
    });

    Route::get('ranking', 'RankingController@index')->name('ranking.index');

    Route::get('timeline', 'StudentController@timeline')->middleware('checkStudentRole')->name('timeline.index');

    Route::get('profile', 'StudentController@profile')->middleware('checkStudentRole')->name('profile.index');
    Route::get('profile/edit', 'StudentController@editProfile')->name('profile.edit');
    Route::post('profile/update', 'StudentController@updateProfile')->name('profile.update');

    Route::group(['prefix' => 'api', 'as' => 'api.'], function () {
        Route::get('questions/{questionId}/comments', 'TestController@getComments')->name('questions.getComments');
    });

    Route::get('calendars', 'CalendarController@index')->name('calendars.index');
    Route::get('calendars/events', 'CalendarController@getEvent')->name('calendars.getEvent');

    Route::group([
        'as' => 'payments.',
        'prefix' => 'payments',
    ], function () {
        Route::get('/', 'PaymentController@index')->name('index');

        Route::get('exchange', 'PaymentController@exchange')->name('exchange');
        Route::post('exchange', 'PaymentController@postExchange')->name('postExchange');

        Route::get('momo/success', 'PaymentController@getSuccessMomo')->name('momo.getSuccess');
    });

    Route::get('not_found', 'NotFoundController@index')->name('notFound');
});

Route::post('payments/momo/success', 'PaymentController@postSuccessMomo')->name('client.payments.momo.postSuccessMomo');

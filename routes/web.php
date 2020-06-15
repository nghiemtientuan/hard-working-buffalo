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

        Route::post('tests/{historyId}/evaluation', 'TestController@evaluation')->name('tests.evaluation');

        Route::get('histories', 'HistoryController@index')->name('histories.index');
        Route::get('histories/{historyId}', 'HistoryController@show')
            ->middleware('checkOwnerHistory')
            ->name('histories.show');
    });

    Route::get('ranking', 'RankingController@index')->name('ranking.index');
    Route::post('ranking/reaction', 'RankingController@reaction')->name('ranking.reaction');

    Route::get('timeline', 'StudentController@timeline')->middleware('checkStudentRole')->name('timeline.index');

    Route::get('profile', 'StudentController@profile')->middleware('checkStudentRole')->name('profile.index');
    Route::get('profile/edit', 'StudentController@editProfile')->name('profile.edit');
    Route::post('profile/update', 'StudentController@updateProfile')->name('profile.update');

    Route::group(['prefix' => 'api', 'as' => 'api.'], function () {
        Route::get('questions/{questionId}/comments', 'TestController@getComments')->name('questions.getComments');

        Route::post('questions/{questionId}/comments/add', 'TestController@addComment')->name('questions.addComment');

        Route::delete('questions/comments/{commentId}', 'TestController@deleteComment')->name('questions.deleteComment');
    });

    Route::get('calendars', 'CalendarController@index')->name('calendars.index');
    Route::get('calendars/events', 'CalendarController@getEvent')->name('calendars.getEvent');

    Route::get('statistic/index', 'StatisticController@index')->name('statistic.index');
    Route::get('statistic/search', 'StatisticController@search')->name('statistic.search');
    Route::get('statistic/target', 'StatisticController@target')->name('statistic.target');

    Route::get('target/index', 'StudentController@getTarget')->name('target.index');
    Route::post('target/update', 'StudentController@updateTarget')->name('target.update');

    Route::group([
        'as' => 'payments.',
        'prefix' => 'payments',
    ], function () {
        Route::get('/', 'PaymentController@index')->name('index');

        Route::get('exchange', 'PaymentController@exchange')->name('exchange');
        Route::post('exchange', 'PaymentController@postExchange')->name('postExchange');

        Route::get('momo/success', 'PaymentController@getSuccessMomo')->name('momo.getSuccess');
    });

    Route::group([
        'as' => 'blogs.',
        'prefix' => 'blogs',
    ], function () {
        Route::get('/', 'BlogController@index')->name('index');
        Route::post('/', 'BlogController@store')->name('store');

        Route::get('data', 'BlogController@dataBlog')->name('dataBlog');

        Route::get('{blogId}', 'BlogController@show')->name('show');
        Route::delete('{blogId}', 'BlogController@destroy')->name('destroy');
        Route::post('{blogId}/reaction', 'BlogController@reaction')->name('reaction');

        Route::post('{blogId}/addComment', 'BlogController@addComment')->name('addComment');
        Route::delete('deleteComment/{commentId}', 'BlogController@deleteComment')->name('deleteComment');
        Route::get('{blogId}/dataComments', 'BlogController@dataComments')->name('dataComments');
    });

    Route::get('guideline', 'GuidelineController@index')->name('guideline.index');

    Route::get('not_found', 'NotFoundController@index')->name('notFound');
});

Route::post('payments/momo/success', 'PaymentController@postSuccessMomo')->name('client.payments.momo.postSuccessMomo');

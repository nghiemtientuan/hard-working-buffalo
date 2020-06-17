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
        Route::group(['prefix' => 'tests', 'as' => 'tests.'], function () {
            Route::post('buy', 'TestController@buy')->name('buy');

            Route::group(['prefix' => '{testId}'], function () {
                Route::get('/', 'TestController@test')->name('test');
                Route::post('/', 'TestController@result')->middleware('testedAttendance')->name('result');
            });

            Route::post('{historyId}/evaluation', 'TestController@evaluation')->name('evaluation');
        });

        Route::group(['prefix' => 'histories'], function () {
            Route::get('/', 'HistoryController@index')->name('histories.index');
            Route::get('{historyId}', 'HistoryController@show')
                ->middleware('checkOwnerHistory')
                ->name('histories.show');
        });

        Route::get('timeline', 'StudentController@timeline')->middleware('checkStudentRole')->name('timeline.index');

        Route::group(['prefix' => 'profile', 'as' => 'profile.'], function () {
            Route::get('/', 'StudentController@profile')->middleware('checkStudentRole')->name('index');
            Route::get('edit', 'StudentController@editProfile')->name('edit');
            Route::post('update', 'StudentController@updateProfile')->name('update');
        });

        Route::group(['prefix' => 'api', 'as' => 'api.'], function () {
            Route::group(['prefix' => 'questions', 'as' => 'questions.'], function () {
                Route::get('{questionId}/comments', 'TestController@getComments')->name('getComments');

                Route::post('{questionId}/comments/add', 'TestController@addComment')->name('addComment');

                Route::delete('comments/{commentId}', 'TestController@deleteComment')->name('deleteComment');
            });
        });

        Route::group(['prefix' => 'calendars', 'as' => 'calendars.'], function () {
            Route::get('/', 'CalendarController@index')->name('index');
            Route::get('events', 'CalendarController@getEvent')->name('getEvent');
        });

        Route::group(['prefix' => 'statistic', 'as' => 'statistic.'], function () {
            Route::get('index', 'StatisticController@index')->name('index');
            Route::get('search', 'StatisticController@search')->name('search');
            Route::get('target', 'StatisticController@target')->name('target');
        });

        Route::group(['prefix' => 'target', 'as' => 'target.'], function () {
            Route::get('index', 'StudentController@getTarget')->name('index');
            Route::post('update', 'StudentController@updateTarget')->name('update');
        });

        Route::group([
            'as' => 'payments.',
            'prefix' => 'payments',
        ], function () {
            Route::get('/', 'PaymentController@index')->name('index');

            Route::get('exchange', 'PaymentController@exchange')->name('exchange');
            Route::post('exchange', 'PaymentController@postExchange')->name('postExchange');

            Route::get('momo/success', 'PaymentController@getSuccessMomo')->name('momo.getSuccess');
        });

        Route::get('guideline', 'GuidelineController@index')->name('guideline.index');
    });

    Route::group(['prefix' => 'ranking', 'as' => 'ranking.'], function () {
        Route::get('ranking', 'RankingController@index')->name('index');
        Route::post('ranking/reaction', 'RankingController@reaction')
            ->middleware('checkClientAdminLogin')
            ->name('reaction');
    });

    Route::group([
        'as' => 'blogs.',
        'prefix' => 'blogs',
    ], function () {
        Route::get('/', 'BlogController@index')->name('index');
        Route::post('/', 'BlogController@store')->middleware('checkClientAdminLogin')->name('store');

        Route::get('data', 'BlogController@dataBlog')->name('dataBlog');

        Route::group(['prefix' => '{blogId}'], function () {
            Route::get('/', 'BlogController@show')->name('show');
            Route::get('dataComments', 'BlogController@dataComments')->name('dataComments');

            Route::group(['middleware' => 'checkClientAdminLogin'], function () {
                Route::delete('/', 'BlogController@destroy')->name('destroy');
                Route::post('reaction', 'BlogController@reaction')->name('reaction');

                Route::post('addComment', 'BlogController@addComment')->name('addComment');
                Route::delete('{commentId}', 'BlogController@deleteComment')->name('deleteComment');
            });
        });
    });

    Route::get('not_found', 'NotFoundController@index')->name('notFound');
});

Route::post('payments/momo/success', 'PaymentController@postSuccessMomo')->name('client.payments.momo.postSuccessMomo');

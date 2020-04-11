<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Schema::defaultStringLength(191);
        if (env('APP_ENV') === 'local' || env('APP_ENV') === 'dev') {
            $this->app->register(\Barryvdh\Debugbar\ServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $repositories = [
            'CategoryRepositoryInterface' => 'CategoryRepository',
            'FileRepositoryInterface' => 'FileRepository',
            'StudentRepositoryInterface' => 'StudentRepository',
            'UserRepositoryInterface' => 'UserRepository',
        ];
        foreach ($repositories as $key => $val) {
            $this->app->singleton("App\\Repositories\\Contracts\\$key", "App\\Repositories\\Eloquents\\$val");
        }
    }
}

<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ComposerServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer(
            'Admin.layouts.scripts',
            'App\Http\ViewComposers\TranslationComposer'
        );
        view()->composer(
            'Client.layouts.navbar',
            'App\Http\ViewComposers\ParentCategoryComposer'
        );
    }
}

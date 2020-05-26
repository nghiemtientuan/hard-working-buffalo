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
            [
                'Admin.layouts.scripts',
                'Client.layouts.scripts',
            ],
            'App\Http\ViewComposers\TranslationComposer'
        );
        view()->composer(
            [
                'Client.layouts.navbar',
                'Client.layouts.footer',
            ],
            'App\Http\ViewComposers\ParentCategoryComposer'
        );
    }
}

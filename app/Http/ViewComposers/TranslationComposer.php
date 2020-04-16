<?php
namespace App\Http\ViewComposers;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Illuminate\View\View;

class TranslationComposer
{
    /**
     * The path to the current lang files.
     *
     * @var string
     */
    protected $langPath;

    protected $data;

    /**
     * Create a movie composer.
     *
     * @return void
     */
    public function __construct()
    {
        $this->langPath = resource_path('lang/' . App::getLocale());
        $this->data = collect(File::allFiles($this->langPath))->flatMap(function ($file) {
            return [
                ($translation = $file->getBasename('.php')) => trans($translation),
            ];
        })->toJson();
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('translations', $this->data);
    }
}

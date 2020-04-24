<?php
namespace App\Http\ViewComposers;

use Illuminate\View\View;
use App\Repositories\Contracts\CategoryRepositoryInterface as CategoryRepository;

class ParentCategoryComposer
{
    protected $categoryRepository;

    /**
     * Create a movie composer.
     *
     * @param CategoryRepository $categoryRepository
     */
    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * Bind data to the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $parentCates = $this->categoryRepository->getParentCates();
        $view->with('parentCateComposer', $parentCates);
    }
}

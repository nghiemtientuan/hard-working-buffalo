<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Models\File;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\CategoryRepositoryInterface as CategoryRepository;
use App\Repositories\Contracts\FileRepositoryInterface as FileRepository;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    protected $categoryRepository;
    protected $fileRepository;

    /**
     * CategoryController constructor.
     * @param CategoryRepository $categoryRepository
     * @param FileRepository $fileRepository
     */
    public function __construct(
        CategoryRepository $categoryRepository,
        FileRepository $fileRepository
    ) {
        $this->categoryRepository = $categoryRepository;
        $this->fileRepository = $fileRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $treeCates = $this->categoryRepository->getAllTreeCates();

        return view('Admin.category.index', compact('treeCates'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only([
            'name',
            'guide',
            'parentId',
        ]);
        if (!$request->parentId) {
            if ($request->file('imageCate')) {
                $saveFile = $this->fileRepository->saveSingleImage(
                    $request->file('imageCate'),
                    File::CATEGORY_FOLDER,
                    File::TYPE_CATEGORY
                );

                if ($saveFile) {
                    $data[Category::FILE_ID_FIELD] = $saveFile->id;
                }
            }
        } else {
            $data[Category::PARENT_ID_FIELD] = $data['parentId'];
        }

        DB::beginTransaction();
        try {
            $this->categoryRepository->create($data);
            DB::commit();

            return redirect()->route('admin.categories.index')
                ->with('sucess', trans('backend.actions.success'));
        } catch (\Exception $exception) {
            DB::rollBack();

            return redirect()->route('admin.categories.index')->with('error', $exception->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->only([
            'name',
            'guide',
        ]);
        $category = $this->categoryRepository->find($id);
        if ($category) {
            if (!$category->parent_id && $request->file('imageCate')) {
                $saveFile = $this->fileRepository->updateSingleImage(
                    $category->file_id,
                    $request->file('imageCate'),
                    File::CATEGORY_FOLDER,
                    File::TYPE_CATEGORY
                );

                if ($saveFile) {
                    $data[Category::FILE_ID_FIELD] = $saveFile->id;
                }
            }

            DB::beginTransaction();
            try {
                $this->categoryRepository->update($id, $data);
                DB::commit();

                return redirect()->route('admin.categories.index')
                    ->with('sucess', trans('backend.actions.success'));
            } catch (\Exception $exception) {
                DB::rollBack();

                return redirect()->route('admin.categories.index')->with('error', $exception->getMessage());
            }
        }

        return redirect()->route('admin.categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = $this->categoryRepository->find($id);
        if ($category) {
            $checkDelete = $this->categoryRepository->deleteCates($id);

            if ($checkDelete) {
                return redirect()->route('admin.categories.index')
                    ->with('sucess', trans('backend.actions.success'));
            }

            return redirect()->route('admin.categories.index');
        }

        return redirect()->route('admin.categories.index');
    }
}

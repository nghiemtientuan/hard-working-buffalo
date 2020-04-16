<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\FormatRepositoryInterface as FormatRepository;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;

class FormatController extends Controller
{
    protected $formatRepository;

    /**
     * FormatController constructor.
     * @param $formatRepository
     */
    public function __construct(FormatRepository $formatRepository)
    {
        $this->formatRepository = $formatRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Admin.format.index');
    }

    public function getData()
    {
        $formats = $this->formatRepository->getAll();

        return Datatables::of($formats)
            ->addColumn('applyTestsNumber', function ($format) {
                return count($format->tests);
            })
            ->addColumn('action', function ($format) {
                return view('Admin.format.actionFormat', compact('format'));
            })
            ->rawColumns(['action'])
            ->make(true);
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
        //
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
            'description',
        ]);
        $format = $this->formatRepository->find($id);
        if ($format) {
            DB::beginTransaction();
            try {
                $this->formatRepository->update($id, $data);
                DB::commit();

                return redirect()->route('admin.formats.index')
                    ->with('sucess', trans('backend.actions.success'));
            } catch (\Exception $exception) {
                DB::rollBack();

                return redirect()->route('admin.tests.index')->with('error', $exception->getMessage());
            }
        }

        return redirect()->route('admin.formats.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $format = $this->formatRepository->find($id);
        if ($format && $this->formatRepository->delete($id)) {
            return redirect()->route('admin.formats.index')
                ->with('sucess', trans('backend.actions.success'));
        }

        return redirect()->route('admin.formats.index');
    }
}

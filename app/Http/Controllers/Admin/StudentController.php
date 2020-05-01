<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\StudentRepositoryInterface as StudentRepository;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;

class StudentController extends Controller
{
    protected $studentRepository;

    /**
     * CategoryController constructor.
     * @param StudentRepository $studentRepository
     */
    public function __construct(
        StudentRepository $studentRepository
    ) {
        $this->studentRepository = $studentRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Admin.user.students');
    }

    public function getData()
    {
        $students = $this->studentRepository->getAll();

        return Datatables::of($students)
            ->editColumn('image', function ($student) {
                return '<img class="user-image-list" src="' . userDefaultImage($student->file) . '">';
            })
            ->editColumn('level', function ($student) {
                return $student->studentLevel->name;
            })
            ->editColumn('type', function ($student) {
                return $student->studentType->name;
            })
            ->addColumn('action', function ($student) {
                return view('Admin.user.actionStudent', compact('student'));
            })
            ->rawColumns(['image', 'action'])
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
        $data = $request->only([
            'email',
            'firstname',
            'lastname',
            'address',
            'phone',
        ]);
        $student = $this->studentRepository->create($data);

        return redirect()->route('admin.students.index')
            ->with('success', trans('backend.actions.success'));
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
            'firstname',
            'lastname',
            'address',
            'phone',
        ]);
        $student = $this->studentRepository->find($id);
        if ($student) {
            DB::beginTransaction();
            try {
                $this->studentRepository->update($id, $data);
                DB::commit();

                return redirect()->route('admin.students.index')
                    ->with('sucess', trans('backend.actions.success'));
            } catch (\Exception $exception) {
                DB::rollBack();

                return redirect()->route('admin.students.index')->with('error', $exception->getMessage());
            }
        }

        return redirect()->route('admin.students.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $student = $this->studentRepository->find($id);
        if ($student && $this->studentRepository->delete($id)) {
            return redirect()->route('admin.students.index')
                ->with('sucess', trans('backend.actions.success'));
        }

        return redirect()->route('admin.students.index');
    }
}

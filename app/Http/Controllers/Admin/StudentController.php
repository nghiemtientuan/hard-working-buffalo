<?php

namespace App\Http\Controllers\Admin;

use App\Jobs\SendMailCreateAccount;
use App\Models\Setting;
use App\Models\Student;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\StudentRepositoryInterface as StudentRepository;
use App\Repositories\Contracts\StudentLevelRepositoryInterface as LevelRepository;
use App\Repositories\Contracts\SettingRepositoryInterface as SettingRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Yajra\Datatables\Datatables;

class StudentController extends Controller
{
    protected $studentRepository;
    protected $levelRepository;
    protected $settingRepository;

    /**
     * CategoryController constructor.
     * @param SettingRepository $settingRepository
     * @param StudentRepository $studentRepository
     * @param LevelRepository $levelRepository
     */
    public function __construct(
        SettingRepository $settingRepository,
        StudentRepository $studentRepository,
        LevelRepository $levelRepository
    ) {
        $this->settingRepository = $settingRepository;
        $this->studentRepository = $studentRepository;
        $this->levelRepository = $levelRepository;
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
        $this->settingRepository->getAttribute(Setting::DEFAULT_COIN_NEW_STUDENT_KEY);
        $data = $request->only([
            'email',
            'firstname',
            'lastname',
            'address',
            'phone',
        ]);
        $data[Student::COIN_FIELD] = $this->settingRepository
            ->getAttribute(Setting::DEFAULT_COIN_NEW_STUDENT_KEY);
        $password = Str::random(config('constant.password.length_random_password'));
        $data['password'] = bcrypt($password);
        $this->studentRepository->create($data);

        $this->dispatch(new SendMailCreateAccount($data, $password));

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
            'coin',
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

<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\UserRepositoryInterface as UserRepository;
use App\Repositories\Contracts\RoleRepositoryInterface as RoleRepository;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;
use App\Jobs\SendMailCreateAccount;

class UserController extends Controller
{
    protected $userRepository;
    protected $roleRepository;

    /**
     * UserController constructor.
     * @param UserRepository $userRepository
     * @param RoleRepository $roleRepository
     */
    public function __construct(
        UserRepository $userRepository,
        RoleRepository $roleRepository
    ) {
        $this->userRepository = $userRepository;
        $this->roleRepository = $roleRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = $this->roleRepository->getAll();

        return view('Admin.user.users', compact('roles'));
    }

    public function getData()
    {
        $users = $this->userRepository->getAll();

        return Datatables::of($users)
            ->editColumn('image', function ($user) {
                return '<img class="user-image-list" src="' . userDefaultImage($user->file) . '">';
            })
            ->addColumn('role', function ($user) {
                return $user->role->name;
            })
            ->addColumn('action', function ($user) {
                return view('Admin.user.actionUser', compact('user'));
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
            'role_id',
        ]);
        $password = str_random(config('constant.password.length_random_password'));
        $data['password'] = bcrypt($password);
        $this->userRepository->create($data);

        $this->dispatch(new SendMailCreateAccount($data, $password));

        return redirect()->route('admin.users.index')
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
        $student = $this->userRepository->find($id);
        if ($student) {
            DB::beginTransaction();
            try {
                $this->userRepository->update($id, $data);
                DB::commit();

                return redirect()->route('admin.users.index')
                    ->with('sucess', trans('backend.actions.success'));
            } catch (\Exception $exception) {
                DB::rollBack();

                return redirect()->route('admin.users.index')->with('error', $exception->getMessage());
            }
        }

        return redirect()->route('admin.users.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = $this->userRepository->find($id);
        if ($user && $this->userRepository->delete($id)) {
            return redirect()->route('admin.users.index')
                ->with('sucess', trans('backend.actions.success'));
        }

        return redirect()->route('admin.users.index');
    }
}

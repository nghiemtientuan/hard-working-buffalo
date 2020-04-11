<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\Contracts\UserRepositoryInterface as UserRepository;
use Illuminate\Support\Facades\DB;
use Yajra\Datatables\Datatables;

class UserController extends Controller
{
    protected $userRepository;

    /**
     * UserController constructor.
     * @param $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('Admin.user.users');
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

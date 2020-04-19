<?php

namespace App\Http\Controllers\Admin;

use App\Models\File;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Repositories\Contracts\UserRepositoryInterface as UserRepository;
use App\Repositories\Contracts\FileRepositoryInterface as FileRepository;

class ProfileController extends Controller
{
    protected $userRepository;
    protected $fileRepository;

    /**
     * UserController constructor.
     * @param UserRepository $userRepository
     * @param FileRepository $fileRepository
     */
    public function __construct(
        UserRepository $userRepository,
        FileRepository $fileRepository
    ) {
        $this->userRepository = $userRepository;
        $this->fileRepository = $fileRepository;
    }

    public function index()
    {
        $user = Auth::user();

        return view('Admin.profile.index', compact('user'));
    }

    public function update(Request $request)
    {
        $data = $request->only([
            'username',
            'firstname',
            'lastname',
            'address',
            'phone',
            'description',
        ]);
        $user = Auth::user();
        if ($request->file('imageProfile')) {
            $saveFile = $this->fileRepository->saveSingleImage(
                $request->file('imageProfile'),
                File::USER_FOLDER,
                File::TYPE_USER
            );
            $data[User::FILE_ID_FIELD] = $saveFile->id;
        }
        $this->userRepository->update($user->id, $data);

        return redirect()->route('admin.profile')
            ->with('sucess', trans('backend.actions.success'));
    }
}

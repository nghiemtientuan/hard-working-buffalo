<?php

namespace App\Http\Controllers\Client;

use App\Http\Requests\Client\ChangePasswordRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Repositories\Contracts\StudentRepositoryInterface as StudentRepository;
use Illuminate\Support\Facades\Hash;

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

    public function profile()
    {
        $userId = Auth::guard('student')->user()->id;
        $user = $this->studentRepository->find($userId);
        $timelines = $this->studentRepository->getProfileTimeline($userId);

        return view('Client.profile', compact('user', 'timelines'));
    }

    public function getChangePass()
    {
        return view('Client.changePassword');
    }

    public function postChangePass(ChangePasswordRequest $request)
    {
        if ($request->newPassword === $request->rePassword) {
            $student = Auth::guard('student')->user();

            if (Hash::check($request->oldPassword, $student->password)) {
                $this->studentRepository->find($student->id)->update(['password', bcrypt($request->newPassword)]);
                Auth::guard('student')->logout();

                return redirect()->route('client.login');
            }

            return redirect()->back()->withErrors([trans('client.validations.changePassword.oldPassword')]);
        }

        return redirect()->back()->withErrors([trans('client.validations.changePassword.newPassword_re')]);
    }
}

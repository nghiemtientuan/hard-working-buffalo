<?php

namespace App\Http\Controllers\Client;

use App\Http\Requests\Client\ChangePasswordRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\Client\SignInRequest;
use App\Http\Requests\Client\UpdateStudentProfileRequest;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Repositories\Contracts\StudentRepositoryInterface as StudentRepository;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Exception;

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

    public function timeline(Request $request)
    {
        $userId = Auth::guard('student')->user()->id;
        if ($request->user && $request->user != $userId) {
            $userId = $request->user;
        }
        $user = $this->studentRepository->find($userId);
        $timelines = $this->studentRepository->getProfileTimeline($userId);

        return view('Client.timeline', compact('user', 'timelines'));
    }

    public function profile(Request $request)
    {
        $userId = Auth::guard('student')->user()->id;
        if ($request->user && $request->user != $userId) {
            $userId = $request->user;
        }

        $user = $this->studentRepository->find($userId);

        return view('Client.profile', compact('user'));
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
                $this->studentRepository->find($student->id)->update(
                    [
                        'password' => bcrypt($request->newPassword),
                        Student::ACTIVE_FIELD => Student::ACTIVE_TRUE,
                    ]
                );
                Auth::guard('student')->logout();

                return redirect()->route('client.login');
            }

            return redirect()->back()->withErrors([trans('client.validations.changePassword.oldPassword')]);
        }

        return redirect()->back()->withErrors([trans('client.validations.changePassword.newPassword_re')]);
    }

    public function getSignin()
    {
        return view('Client.signin');
    }

    public function postSignin(SignInRequest $request)
    {
        if ($request->password === $request->rePassword) {
            $newStudent = $request->only([
                'email',
                'password',
            ]);
            $newStudent['password'] = bcrypt($newStudent['password']);
            $this->studentRepository->create($newStudent);

            return redirect()->route('client.login')
                ->with('success', trans('client.success.create_account'));
        }

        return redirect()->back()->withErrors([trans('client.validations.signin.password_re')]);
    }

    public function editProfile()
    {
        $userId = Auth::guard('student')->user()->id;
        $user = $this->studentRepository->find($userId);

        return view('Client.editProfile', compact('user'));
    }

    public function updateProfile(UpdateStudentProfileRequest $request)
    {
        $userData = $request->only([
            'username',
            'firstname',
            'lastname',
            'birthday',
            'address',
            'phone',
            'description',
            'file_id',
        ]);
        $userId = Auth::guard('student')->user()->id;
        $this->studentRepository->update($userId, $userData);

        return redirect()->route('client.profile.index')
            ->with('success', trans('client.success.update_profile'));
    }

    public function getTarget()
    {
        $student = Auth::guard('student')->user();

        return view('Client.target', compact('student'));
    }

    public function updateTarget(Request $request)
    {
        $student = Auth::guard('student')->user();

        DB::beginTransaction();
        try {
            $this->studentRepository->update(
                $student->id,
                [
                    Student::TARGET_FIELD => $request->target,
                ]
            );

            DB::commit();

            return redirect()->route('client.target.index')
                ->with('success', trans('client.success.update_target'));
        } catch (Exception $exception) {
            DB::rollBack();

            return redirect()->back()->withErrors(trans('client.errors.target.updateFalse'));
        }
    }
}

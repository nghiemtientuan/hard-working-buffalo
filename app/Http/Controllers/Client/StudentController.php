<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Repositories\Contracts\StudentRepositoryInterface as StudentRepository;

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

    public function postChangePass(Request $request)
    {
        dd($request->all());
    }
}

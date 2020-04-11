<ul class="icons-list">
    <li>
        <a
            class="pr-10 showStudentBtn"
            href="#"
            data-toggle="modal"
            data-target="#showStudent"
            data-popup="tooltip"
            data-urlImage="{{ userDefaultImage($student->file) }}"
            data-email="{{ $student->email }}"
            data-username="{{ $student->username }}"
            data-fullname="{{ getFullName($student->lastname, $student->firstname)}}"
            data-birthday="{{ $student->birthday }}"
            data-address="{{ $student->address }}"
            data-phone="{{ $student->phone }}"
            data-level="{{ $student->studentLevel->name }}"
            data-type="{{ $student->studentType->name }}"
            data-diamond="{{ $student->diamond }}"
            data-active="{{ $student->active }}"
            data-description="{{ $student->description }}"
            title="{{ trans('backend.pages.show') }}"
        >
            <em class="icon-eye"></em>
        </a>
    </li>
    <li>
        <a
            class="pr-10 editStudentBtn"
            href="#"
            data-toggle="modal"
            data-target="#editStudent"
            data-popup="tooltip"
            data-studentId="{{ $student->id }}"
            data-firstname="{{ $student->firstname }}"
            data-lastname="{{ $student->lastname }}"
            data-address="{{ $student->address }}"
            data-phone="{{ $student->phone }}"
            title="{{ trans('backend.pages.edit') }}"
        >
            <em class="icon-pencil7"></em>
        </a>
    </li>
    <li>
        <form method="POST" action="{{ route('admin.students.destroy', $student->id) }}">
            @method('DELETE')
            @csrf
            <button class="btn btn-link p-0 deleteStudentBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                <em class="icon-trash"></em>
            </button>
        </form>
    </li>
</ul>

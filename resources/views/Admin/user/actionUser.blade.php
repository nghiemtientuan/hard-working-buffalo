<ul class="icons-list">
    <li>
        <a
            class="pr-10 showUserBtn"
            href="#"
            data-toggle="modal"
            data-target="#showUser"
            data-popup="tooltip"
            data-urlImage="{{ userDefaultImage($user->file) }}"
            data-email="{{ $user->email }}"
            data-username="{{ $user->username }}"
            data-fullname="{{ getFullName($user->lastname, $user->firstname)}}"
            data-birthday="{{ $user->birthday }}"
            data-address="{{ $user->address }}"
            data-phone="{{ $user->phone }}"
            data-role="{{ $user->role->name }}"
            data-active="{{ $user->active ? trans('backend.pages.active') : trans('backend.pages.not_active') }}"
            data-description="{{ $user->description }}"
            title="{{ trans('backend.pages.show') }}"
        >
            <em class="icon-eye"></em>
        </a>
    </li>
    <li>
        <a
            class="pr-10 editUserBtn"
            href="#"
            data-toggle="modal"
            data-target="#editUser"
            data-popup="tooltip"
            data-userId="{{ $user->id }}"
            data-firstname="{{ $user->firstname }}"
            data-lastname="{{ $user->lastname }}"
            data-address="{{ $user->address }}"
            data-phone="{{ $user->phone }}"
            title="{{ trans('backend.pages.edit') }}"
        >
            <em class="icon-pencil7"></em>
        </a>
    </li>
    <li>
        <form method="POST" action="{{ route('admin.users.destroy', $user->id) }}">
            @method('DELETE')
            @csrf
            <button class="btn btn-link p-0 deleteUserBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                <em class="icon-trash"></em>
            </button>
        </form>
    </li>
</ul>

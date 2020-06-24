<ul class="icons-list">
    <li>
        <a
            class="pr-10 showTestBtn"
            href="#"
            data-toggle="modal"
            data-target="#showTest"
            data-popup="tooltip"
            data-author="{{ $test->created_user ? $test->created_user->username : '' }}"
            data-name="{{ $test->name }}"
            data-code="{{ $test->code }}"
            data-guide="{{ $test->guide }}"
            data-execute_time="{{ $test->execute_time }}"
            data-total_question="{{ $test->total_question }}"
            data-number_questions="{{ $test->total_question }}"
            data-price="{{ $test->price }}"
            data-score="{{ $test->score }}"
            data-publish="{{ $test->publish ? trans('backend.pages.show'): trans('backend.pages.hide') }}"
            title="{{ trans('backend.pages.show') }}"
        >
            <em class="icon-eye"></em>
        </a>
    </li>
    <li>
        <a
            class="pr-10"
            href="{{ route('admin.tests.questions.index', $test->id) }}"
            data-popup="tooltip"
            title="{{ trans('backend.pages.show') }}"
        >
            <em class="icon-copy"></em>
        </a>
    </li>
    <li>
        <a
            class="pr-10 editTestBtn"
            href="#"
            data-toggle="modal"
            data-target="#editTest"
            data-popup="tooltip"
            data-testId="{{ $test->id }}"
            data-name="{{ $test->name }}"
            data-guide="{{ $test->guide }}"
            data-execute_time="{{ $test->execute_time }}"
            data-total_question="{{ $test->total_question }}"
            data-price="{{ $test->price }}"
            data-score="{{ $test->score }}"
            data-publish="{{ $test->publish }}"
            title="{{ trans('backend.pages.edit') }}"
        >
            <em class="icon-pencil7"></em>
        </a>
    </li>
    <li>
        <form method="POST" action="{{ route('admin.tests.destroy', $test->id) }}">
            @method('DELETE')
            @csrf
            <button class="btn btn-link p-0 deleteTestBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                <em class="icon-trash"></em>
            </button>
        </form>
    </li>
</ul>

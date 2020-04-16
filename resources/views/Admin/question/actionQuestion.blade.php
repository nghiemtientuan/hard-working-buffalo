<ul class="icons-list">
    <li>
        <a
            class="pr-10 showQuestionBtn"
            href="#"
            title="{{ trans('backend.pages.show') }}"
        >
            <em class="icon-eye"></em>
        </a>
    </li>
    <li>
        <form method="POST" action="{{ route('admin.questions.destroy', $question->id) }}">
            @method('DELETE')
            @csrf
            <button class="btn btn-link p-0 deleteQuestionBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                <em class="icon-trash"></em>
            </button>
        </form>
    </li>
</ul>

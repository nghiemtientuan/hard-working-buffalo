<ul class="icons-list">
    <li>
        <form method="POST" action="{{ route('admin.questions.comments.destroy', $comment->id) }}">
            @method('DELETE')
            @csrf
            <button class="btn btn-link p-0 deleteQuestionCommentBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                <em class="icon-trash"></em>
            </button>
        </form>
    </li>
</ul>

<ul class="icons-list">
    <li>
        <a
            class="pr-10 editFormatBtn"
            href="#"
            data-toggle="modal"
            data-target="#editFormat"
            data-popup="tooltip"
            data-formatId="{{ $format->id }}"
            data-name="{{ $format->name }}"
            data-total_question="{{ $format->total_question }}"
            data-description="{{ $format->description }}"
        >
            <em class="icon-pencil7"></em>
        </a>
    </li>
    <li>
        <a
            class="pr-10"
            href="{{ route('admin.formats.show', $format->id) }}"
            data-popup="tooltip"
            title="{{ trans('backend.pages.show') }}"
        >
            <em class="icon-copy"></em>
        </a>
    </li>
    <li>
        <form method="POST" action="{{ route('admin.formats.destroy', $format->id) }}">
            @method('DELETE')
            @csrf
            <button class="btn btn-link p-0 deleteFormatBtn" data-popup="tooltip" title="{{ trans('backend.pages.remove') }}">
                <em class="icon-trash"></em>
            </button>
        </form>
    </li>
</ul>

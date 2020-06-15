<div id="commentsList" class="modal fade">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body">
                <div class="alert alert-dark p-2">
                    <label class="text-semibold">{{ trans('client.pages.result.direction') }}<span id="directionContent"></span></label>
                </div>
                <div id="seeMore" class="text-center">
                    <a href="#" class="btn btn-link">{{ trans('client.pages.result.see_more') }} (<span id="seeMoreTotal"></span>) <em class="fas fa-caret-up"></em></a>
                </div>
                <div id="commentsListDiv"></div>
                <div id="commentItemExample" class="commentItem d-none">
                    <div class="col-2">
                        <img src="#" class="commentItem-content-avatar rounded-circle width-70">
                    </div>
                    <div class="col-10">
                        <div>
                            <code class="commentItem-infoAdd-username"></code><br />
                            <small class="commentItem-infoAdd-time"></small>
                            <a href="#" class="commentItem-infoAdd-linkDelete" data-popup="tooltip" title="{{ trans('client.pages.result.delete') }}">
                                <i class="fas fa-trash"></i>
                            </a>
                        </div>
                        <div>
                            <div class="commentItem-content-content"></div>
                        </div>
                    </div>
                </div>

                <hr />
                <div id="newCommentWrite" class="d-flex">
                    <div class="col-10">
                        <textarea id="newContentComment" class="form-control" cols="60" rows="3" maxlength="500"></textarea>
                    </div>
                    <div class="col-2">
                        <button id="newContentSend" class="btn btn-primary">{{ trans('client.pages.result.send') }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

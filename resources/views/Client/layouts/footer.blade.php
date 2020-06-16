<div class="footer p-0">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
                <p class="mb-4"><img src="{{ asset(config('constant.default_images.url_logo')) }}" class="img-fluid"></p>
                <p>{{ trans('client.footer.hard_working_buffalo') }}</p>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 text-center">
                <h3 class="footer-heading m-3"><span>{{ trans('client.footer.categories') }}</span></h3>
                <ul class="list-unstyled">
                    @foreach ($parentCateComposer as $cate)
                        <li>
                            <a href="{{ route('client.categories.show', $cate->id) }}">{{ $cate->name }}</a>
                        </li>
                    @endforeach
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 text-center">
                <h3 class="footer-heading m-3"><span>{{ trans('client.footer.page') }}</span></h3>
                <ul class="list-unstyled">
                    <li><a href="{{ config('constant.links.link_facebook') }}">{{ trans('client.footer.links.facebook') }}</a></li>
                    <li><a href="{{ config('constant.links.link_youtube') }}">{{ trans('client.footer.links.youtube') }}</a></li>
                    <li><a href="{{ config('constant.links.link_twitter') }}">{{ trans('client.footer.links.twitter') }}</a></li>
                </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 text-center">
                <h3 class="footer-heading m-3"><span>{{ trans('client.footer.contact') }}</span></h3>
                <ul class="list-unstyled">
                    <li><a href="{{ config('constant.links.link_feedback') }}" target="_blank"> {{ trans('client.footer.feedback') }}</a></li>
                    <li>{{ config('settings.phone_help') }}</li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="copyright p-0">
                    <p>
                        {{ trans('client.footer.company') }} <i class="icon-heart" aria-hidden="true"></i> {{ trans('client.footer.hard_working_buffalo') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <p class="mb-4"><img src="{{ asset(config('constant.default_images.url_logo')) }}" class="img-fluid"></p>
                <p>{{ trans('client.footer.hard_working_buffalo') }}</p>
            </div>
            <div class="col-lg-3">
                <h3 class="footer-heading"><span>{{ trans('client.footer.categories') }}</span></h3>
                <ul class="list-unstyled">
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                    <li><a href="#"></a></li>
                </ul>
            </div>
            <div class="col-lg-3">
                <h3 class="footer-heading"><span>{{ trans('client.footer.page') }}</span></h3>
                <ul class="list-unstyled">
                    <li><a href="{{ config('constant.links.link_facebook') }}">{{ trans('client.footer.links.facebook') }}</a></li>
                    <li><a href="{{ config('constant.links.link_youtube') }}">{{ trans('client.footer.links.youtube') }}</a></li>
                    <li><a href="{{ config('constant.links.link_twitter') }}">{{ trans('client.footer.links.twitter') }}</a></li>
                </ul>
            </div>
            <div class="col-lg-3">
                <h3 class="footer-heading"><span>{{ trans('client.footer.contact') }}</span></h3>
                <ul class="list-unstyled">
                        <li><a href="#">{{ trans('client.footer.help_center') }}</a></li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="copyright">
                    <p>
                        {{ trans('client.footer.company') }} <i class="icon-heart" aria-hidden="true"></i> {{ trans('client.footer.hard_working_buffalo') }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

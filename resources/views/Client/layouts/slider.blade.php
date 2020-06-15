<div class="site-section pb-0"></div>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        @foreach (config('constant.slides') as $keySlide => $slide)
            <li data-target="#carouselExampleIndicators" data-slide-to="{{ $keySlide }}" class="@if ($loop->index == 0) active @endif"></li>
        @endforeach
    </ol>
    <div class="carousel-inner height-400">
        @foreach (config('constant.slides') as $keySlide => $slide)
            <div class="carousel-item @if ($loop->index == 0) active @endif">
                <img class="d-block w-100" src="{{ $slide }}" alt="">
            </div>
        @endforeach
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon bg-grey p-20 border-radius-50" aria-hidden="true"></span>
        <span class="sr-only">{{ trans('client.pages.previous') }}</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon bg-grey p-20 border-radius-50" aria-hidden="true"></span>
        <span class="sr-only">{{ trans('client.pages.next') }}</span>
    </a>
</div>

@extends('Client.master')

@section('title', trans('client.pages.payments.paymentTitle'))

@section('content')
    <div class="site-section pb-0"></div>

    <div class="site-section pb-0 pt-25">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-lg-4 mb-5">
                    <h2 class="section-title-underline mb-5">
                        <span>{{ trans('client.pages.payments.paymentTitle') }}</span>
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="feature-1 border">
                        <div class="icon-wrapper bg-primary">
                            <span class="flaticon-mortarboard text-white"></span>
                        </div>
                        <div class="feature-1-content">
                            <div class="col-lg-12 mb-5">
                                <select name="test" class="form-control" required>
                                    <option value=""></option>
                                    <option value="1">VNPay</option>
                                </select>
                            </div>

                            <table class="table table-bordered table-framed">
                                <thead>
                                <tr>
                                    <th width="50%"><i class="fa fa-gem" /></th>
                                    <th width="50%"><i class="fa fa-money-bill" /></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input
                                                class="form-control"
                                                id="coinNumberInput"
                                                type="number"
                                                min="{{ \App\Models\Setting::COST_COIN_MIN }}"
                                                max="{{ \App\Models\Setting::COST_COIN_MAX }}"
                                                name="coinNumber"
                                            />
                                        </td>
                                        <td>
                                            <span id="coinNumberSpan">0</span> {{ trans('client.pages.payments.vnd') }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="form-group text-center">
                            <input type="submit" value="{{ trans('client.pages.payments.send') }}" class="btn btn-primary btn-lg px-5" disabled>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="site-section pb-0"></div>
@endsection

@section('script')
    <script src="{{ asset('js/Client/payments.js') }}"></script>
@endsection

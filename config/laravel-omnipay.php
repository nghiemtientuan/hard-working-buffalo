<?php

return [
    'gateways' => [
        'MoMoAIO' => [
            'driver' => 'MoMo_AllInOne',
            'options' => [
                'accessKey' => env('MOMO_ACCESS_KEY'),
                'secretKey' => env('MOMO_SECRET_KEY'),
                'partnerCode' => env('MOMO_PARTNER_CODE'),
                'testMode' => env('MOMO_TEST_MODE'),
            ],
        ],
        'MoMoQRCode' => [
            'driver' => 'MoMo_QRCode',
            'options' => [
                'accessKey' => '',
                'secretKey' => '',
                'partnerCode' => '',
                'testMode' => false,
            ],
        ],
        'MoMoAIA' => [
            'driver' => 'MoMo_AppInApp',
            'options' => [
                'accessKey' => '',
                'secretKey' => '',
                'partnerCode' => '',
                'publicKey' => '',
                'testMode' => false,
            ],
        ],
        'MoMoPOS' => [
            'driver' => 'MoMo_POS',
            'options' => [
                'accessKey' => '',
                'secretKey' => '',
                'partnerCode' => '',
                'publicKey' => '',
                'testMode' => false,
            ],
        ],
        'OnePayDomestic' => [
            'driver' => 'OnePay_Domestic',
            'options' => [
                'vpcMerchant' => '',
                'vpcAccessCode' => '',
                'vpcUser' => '',
                'vpcPassword' => '',
                'vpcHashKey' => '',
                'testMode' => false,
            ],
        ],
        'OnePayInternational' => [
            'driver' => 'OnePay_International',
            'options' => [
                'vpcMerchant' => '',
                'vpcAccessCode' => '',
                'vpcUser' => '',
                'vpcPassword' => '',
                'vpcHashKey' => '',
                'testMode' => false,
            ],
        ],
        'VTCPay' => [
            'driver' => 'VTCPay',
            'options' => [
                'websiteId' => '',
                'securityCode' => '',
                'testMode' => false,
            ],
        ],
        'VNPay' => [
            'driver' => 'VNPay',
            'options' => [
                'vnpTmnCode' => '',
                'vnpHashSecret' => '',
                'testMode' => false,
            ],
        ],
    ],
];

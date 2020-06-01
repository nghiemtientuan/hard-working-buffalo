<?php

return [
    'default_images' => [
        'url_profile' => '/images/common/profile.png',
        'url_logo' => '/images/common/logo.png',
        'url_cover' => '/images/common/cover.png',
        'url_vnPay' => '/images/common/vnpay.png',
        'url_buffalo' => '/images/common/buffalo.png'
    ],
    'react' => [
        1 => '/images/reacts/like.png',
        2 => '/images/reacts/love.png',
        3 => '/images/reacts/haha.png',
        4 => '/images/reacts/wow.png',
    ],
    'pays' => [
        \App\Models\Payment::MOMO_KEY_PAY => 'MoMo',
        \App\Models\Payment::VNPAY_KEY_PAY => 'VNPay',
    ],
    'links' => [
        'link_facebook' => 'a',
        'link_youtube' => 'b',
        'link_twitter' => 'c',
        'link_feedback' => 'https://forms.gle/7MzLuVVHFM74moQTA',
    ],
    'subject_mail' => [
        'createAccount' => 'Account create successfully',
    ],
    'password' => [
        'length_random_password' => 10,
    ],
    'limit' => [
        'freeTest' => 5,
        'newTest' => 5,
        'histories' => 20,
        'ranking' => 20,
        'timelineProfile' => 10,
        'testInCate' => 20,
        'testInStatistic' => 10,
    ],
    'scoreTest' => [
        'total_formula' => 990,
        'total_not_formula' => 100,
    ],
    'fulltext' => [
        'min_strlen_word_search' => 2,
    ],
    'status_code' => [
        'code_200' => 200,
        'code_400' => 400,
        'code_401' => 401,
        'code_402' => 402,
        'code_404' => 404,
    ],
];

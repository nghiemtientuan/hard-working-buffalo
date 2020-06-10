<?php

return [
    'default_images' => [
        'url_profile' => '/images/common/profile.png',
        'url_logo' => '/images/common/logo.png',
        'url_cover' => '/images/common/cover.png',
        'url_vnPay' => '/images/common/vnpay.png',
        'url_buffalo' => '/images/common/buffalo.png'
    ],
    'reacts' => [
        1 => '/images/reacts/like.gif',
        2 => '/images/reacts/love.gif',
        3 => '/images/reacts/haha.gif',
        4 => '/images/reacts/wow.gif',
    ],
    'test_evaluation_icons' => [
        'default_selected' => 3,
        'src' => [
            1 => '/images/emotions/point_1.png',
            2 => '/images/emotions/point_2.png',
            3 => '/images/emotions/point_3.png',
            4 => '/images/emotions/point_4.png',
            5 => '/images/emotions/point_5.png',
        ],
        'changeSrc' => [
            1 => '/images/emotions/point_hover_1.png',
            2 => '/images/emotions/point_hover_2.png',
            3 => '/images/emotions/point_hover_3.png',
            4 => '/images/emotions/point_hover_4.png',
            5 => '/images/emotions/point_hover_5.png',
        ],
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
        'comments' => 10
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
        'code_403' => 403,
        'code_404' => 404,
    ],
];

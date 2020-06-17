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
        'comments' => 10,
        'blog' => 10,
    ],
    // 400px
    'slides' => [
        1 => '/images/slides/slide1.png',
        2 => '/images/slides/slide2.png',
        3 => '/images/slides/slide3.png',
        4 => '/images/slides/slide4.png',
        5 => '/images/slides/slide5.png',
    ],
    'format' => [
        'dmY' => 'd/m/Y',
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
    'guidelines' => [
        'home' => [
            '/images/guidelines/home1.png',
            '/images/guidelines/home2.png',
        ],
        'categories' => [
            '/images/guidelines/categories1.png',
            '/images/guidelines/categories2.png',
        ],
        'test' => [
            '/images/guidelines/test1.png',
            '/images/guidelines/test2.png',
            '/images/guidelines/test3.png',
            '/images/guidelines/test4.png',
            '/images/guidelines/test5.png',
        ],
        'history' => [
            '/images/guidelines/history1.png',
            '/images/guidelines/history2.png',
            '/images/guidelines/history3.png',
        ],
        'calendar' => [
            '/images/guidelines/calendar1.png',
        ],
        'statistic' => [
            '/images/guidelines/statistic1.png',
        ],
        'ranking' => [
            '/images/guidelines/ranking1.png',
        ],
        'menu' => [
            '/images/guidelines/menu1.png',
        ],
        'profile' => [
            '/images/guidelines/profile1.png',
        ],
        'timeline' => [
            '/images/guidelines/timeline1.png',
        ],
        'target' => [
            '/images/guidelines/target1.png',
            '/images/guidelines/target2.png',
        ],
        'payment' => [
            '/images/guidelines/payment1.png',
        ],
        'changePass' => [
            '/images/guidelines/changepass1.png',
        ],
        'chatBottom' => [
            '/images/guidelines/chatbottom1.png',
            '/images/guidelines/chatbottom2.png',
        ],
    ],
];

<?php

return [
    'default_images' => [
        'url_profile' => '/images/common/profile.png',
        'url_logo' => '/images/common/logo.png',
        'url_cover' => '/images/common/cover.png',
        'url_vnPay' => '/images/common/vnpay.png',
        'url_buffalo' => '/images/common/buffalo.png'
    ],
    'files' => [
        'format_test' => '/storage/common/format_test.xlsx',
    ],
    'profile_students' => [
        1 => '/images/students/mouse.png',
        2 => '/images/students/buffalo.png',
        3 => '/images/students/buffalo2.png',
        4 => '/images/students/tiger.png',
        5 => '/images/students/cat.png',
        6 => '/images/students/dragon.png',
        7 => '/images/students/snake.png',
        8 => '/images/students/horse.png',
        9 => '/images/students/sheep.png',
        10 => '/images/students/monkey.png',
        11 => '/images/students/chicken.png',
        12 => '/images/students/chicken2.png',
        13 => '/images/students/dog.png',
        14 => '/images/students/pig.png',
        15 => '/images/students/profile1.png',
        16 => '/images/students/profile3.png',
        17 => '/images/students/profile4.png',
        18 => '/images/students/profile5.png',
        19 => '/images/students/profile6.png',
        20 => '/images/students/profile9.png',
        21 => '/images/students/profile10.png',
        22 => '/images/students/profile11.png',
        23 => '/images/students/profile.gif',
        24 => '/images/students/goat.png',
        25 => '/images/students/profile12.png',
        26 => '/images/students/profile13.png',
        27 => '/images/students/profile14.png',
        28 => '/images/students/profile15.png',
        29 => '/images/students/profile16.png',
        30 => '/images/students/profile17.png',
        31 => '/images/students/profile18.png',
        32 => '/images/students/profile20.png',
        33 => '/images/students/profile21.png',
        34 => '/images/students/profile22.png',
        35 => '/images/students/profile23.png',
        36 => '/images/students/profile25.png',
        37 => '/images/students/profile26.png',
        38 => '/images/students/profile27.png',
        39 => '/images/students/profile28.png',
        40 => '/images/students/profile29.png',
        41 => '/images/students/profile30.png',
        42 => '/images/students/profile31.png',
        43 => '/images/students/profile32.gif',
        44 => '/images/students/profile33.gif',
        45 => '/images/students/profile34.gif',
        46 => '/images/students/profile35.gif',
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
        'hmdmY' => 'H:i d/m/Y',
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
    'question' => [
        'random_code_length' => 10,
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

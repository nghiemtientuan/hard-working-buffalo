<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class ReactBlog extends Model
{
    use Notifiable;

    const TYPE_USER = 'App\Models\User';
    const TYPE_STUDENT = 'App\Models\Student';

    protected $table = 'react_blog';

    const BLOG_ID_FIELD = 'blog_id';
    const REACT_ID_FIELD = 'react_id';
    const USER_ID_FIELD = 'user_id';
    const USER_TYPE_FIELD = 'type';

    protected $fillable = [
        ReactBlog::BLOG_ID_FIELD,
        ReactBlog::REACT_ID_FIELD,
        ReactBlog::USER_ID_FIELD,
        ReactBlog::USER_TYPE_FIELD,
        'created_at',
        'updated_at',
    ];
}

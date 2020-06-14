<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class BlogComment extends Model
{
    use Notifiable;

    protected $table = 'blog_comments';

    const BLOG_ID_FIELD = 'blog_id';
    const USER_ID_FIELD = 'user_id';
    const USER_TYPE_FIELD = 'user_type';
    const CONTENT_FIELD = 'content';

    const TYPE_USER = 'App\Models\User';
    const TYPE_STUDENT = 'App\Models\Student';

    protected $fillable = [
        BlogComment::BLOG_ID_FIELD,
        BlogComment::USER_ID_FIELD,
        BlogComment::USER_TYPE_FIELD,
        BlogComment::CONTENT_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $with = [
        'user',
    ];

    public function blog()
    {
        return $this->belongsTo(BlogComment::class, BlogComment::BLOG_ID_FIELD, 'id');
    }

    public function user()
    {
        return $this->morphTo('user', BlogComment::USER_TYPE_FIELD, BlogComment::USER_ID_FIELD);
    }
}

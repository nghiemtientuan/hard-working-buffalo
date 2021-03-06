<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Blog extends Model
{
    use Notifiable, SoftDeletes;

    protected $table = 'blogs';

    const USER_ID_FIELD = 'user_id';
    const USER_TYPE_FIELD = 'user_type';
    const CONTENT_FIELD = 'content';

    const TYPE_USER = 'App\Models\User';
    const TYPE_STUDENT = 'App\Models\Student';

    protected $fillable = [
        Blog::USER_ID_FIELD,
        Blog::USER_TYPE_FIELD,
        Blog::CONTENT_FIELD,
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $with = [
        'reacts',
        'comments',
        'user',
        'selectedReact',
    ];

    public function comments()
    {
        return $this->hasMany(BlogComment::class, BlogComment::BLOG_ID_FIELD, 'id');
    }

    public function reacts()
    {
        return $this->hasMany(ReactBlog::class, ReactBlog::BLOG_ID_FIELD, 'id');
    }

    public function selectedReact()
    {
        $user = getCurrentUser();

        return $this->reacts()->where(ReactBlog::USER_TYPE_FIELD, $user ? $user->type : null)
            ->where(ReactBlog::USER_ID_FIELD, $user ? $user->id : null);
    }

    public function user()
    {
        return $this->morphTo('user', Blog::USER_TYPE_FIELD, Blog::USER_ID_FIELD);
    }
}

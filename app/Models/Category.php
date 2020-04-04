<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Category extends Model
{
    use Notifiable;

    protected $table = 'categories';

    const PARENT_ID_FIELD = 'parent_id';

    protected $fillable = [
        Category::PARENT_ID_FIELD,
        'file_id',
        'name',
        'guide',
        'created_at',
        'updated_at',
    ];

    public function file()
    {
        return $this->hasOne(File::class)->where(File::TYPE_FIELD, File::TYPE_CATEGORY);
    }

    public function childCates()
    {
        return $this->hasMany(Category::class, Category::PARENT_ID_FIELD, 'id');
    }

    public function parentCate()
    {
        return $this->belongsTo(Category::class, Category::PARENT_ID_FIELD, 'id');
    }

    public function tests()
    {
        return $this->belongsToMany(Test::class);
    }
}

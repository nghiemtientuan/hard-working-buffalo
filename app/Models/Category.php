<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Category extends Model
{
    use Notifiable;

    protected $table = 'categories';

    const PARENT_ID_FIELD = 'parent_id';
    const FILE_ID_FIELD = 'file_id';
    const NAME_FIELD = 'name';
    const GUIDE_FIELD = 'guide';

    protected $fillable = [
        Category::PARENT_ID_FIELD,
        Category::FILE_ID_FIELD,
        Category::NAME_FIELD,
        Category::GUIDE_FIELD,
        'created_at',
        'updated_at',
    ];

    protected $with = [
        'file',
        'childCates',
    ];

    public function file()
    {
        return $this->hasOne(File::class, 'id', Category::FILE_ID_FIELD);
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

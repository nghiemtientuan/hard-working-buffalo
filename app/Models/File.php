<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class File extends Model
{
    use Notifiable;

    const TYPE_ANSWER = 'App\Models\Answer';
    const TYPE_CATEGORY = 'App\Models\Category';
    const TYPE_REACT = 'App\Models\React';
    const TYPE_USER = 'App\Models\User';
    const TYPE_STUDENT = 'App\Models\Student';
    const TYPE_QUESTION = 'App\Models\Question';
    const TEST_FOLDER = '\images\tests';
    const CATEGORY_FOLDER = '\images\categories';
    const REACT_FOLDER = '\images\reacts';
    const USER_FOLDER = '\images\users';
    const STUDENT_FOLDER = '\images\students';

    protected $table = 'files';

    const TYPE_FIELD = 'type';
    const NAME_FIELD = 'name';
    const EXTENSION_FIELD = 'extension';
    const BASE_FOLDER_FIELD = 'base_folder';

    protected $fillable = [
        File::NAME_FIELD,
        File::EXTENSION_FIELD,
        File::BASE_FOLDER_FIELD,
        File::TYPE_FIELD,
        'created_at',
        'updated_at',
    ];

    public function answer()
    {
        return $this->hasOne(Answer::class)->where(File::TYPE_FIELD, File::TYPE_ANSWER);
    }

    public function category()
    {
        return $this->hasOne(Category::class)->where(File::TYPE_FIELD, File::TYPE_CATEGORY);
    }

    public function react()
    {
        return $this->hasOne(File::class)->where(File::TYPE_FIELD, File::TYPE_REACT);
    }

    public function student()
    {
        return $this->hasOne(Student::class)->where(File::TYPE_FIELD, File::TYPE_STUDENT);
    }

    public function user()
    {
        return $this->hasOne(User::class)->where(File::TYPE_FIELD, File::TYPE_USER);
    }

    public function question()
    {
        return $this->hasOne(Question::class)->where(File::TYPE_FIELD, File::TYPE_QUESTION);
    }

    public static function deleteWithFile($id)
    {
        $file = File::find($id);
        $file_path = public_path() . '/' . $file->base_folder;
        if (file_exists($file_path)) {
            unlink($file_path);
        }

        return File::destroy($id);
    }
}

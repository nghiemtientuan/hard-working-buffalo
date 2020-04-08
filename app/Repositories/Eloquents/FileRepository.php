<?php

namespace App\Repositories\Eloquents;

use App\Repositories\Contracts\FileRepositoryInterface;
use App\Models\File;
use Illuminate\Support\Facades\DB;
use Intervention\Image\ImageManagerStatic as Image;

class FileRepository extends EloquentRepository implements FileRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return File::class;
    }

    public function saveSingleImage($photo, $folder, $type)
    {
        $imageName = $photo->getClientOriginalName();
        $this->checkFolderExit($folder);
        $imageRaw = Image::make($photo);

        // xử lý lưu ảnh gốc vào server
        $imageName = time() . '_' . $imageName;
        $imageRaw->save(public_path() . '/' . $folder . '/' . $imageName, 90);
        $arrData = [
            File::NAME_FIELD => $imageName,
            File::EXTENSION_FIELD => $photo->getClientOriginalExtension(),
            File::TYPE_FIELD => $type,
            File::BASE_FOLDER_FIELD => $folder . '/' . $imageName,
        ];

        DB::beginTransaction();
        try {
            $file = $this->create($arrData);
            DB::commit();

            return $file;
        } catch (\Exception $exception) {
            DB::rollBack();

            return false;
        }
    }

    public function updateSingleImage($oldId, $photo, $folder, $type)
    {
        if ($oldId) {
            $this->delete($oldId);
        }

        return $this->saveSingleImage($photo, $folder, $type);
    }

    public function saveSingleAudio($audio, $folder, $type)
    {
        $audioName = $audio->getClientOriginalName();
        $this->checkFolderExit($folder);
        $audioName = time() . '_' . $audioName;
        $audio->move(public_path() . '/' . $folder, $audioName);
        $arrData = [
            File::NAME_FIELD => $audioName,
            File::EXTENSION_FIELD => $audio->getClientOriginalExtension(),
            File::TYPE_FIELD => $type,
            File::BASE_FOLDER_FIELD => $folder . '/' . $audioName,
        ];
        DB::beginTransaction();
        try {
            $file = $this->create($arrData);
            DB::commit();

            return $file;
        } catch (\Exception $exception) {
            DB::rollBack();

            return false;
        }
    }

    public function updateSingleAudio($oldId, $photo, $folder, $type)
    {
        if ($oldId) {
            $this->delete($oldId);
        }

        return $this->saveSingleAudio($photo, $folder, $type);
    }

    public function checkFolderExit($folder)
    {
        if (!file_exists($folder)) {
            mkdir($folder, 755, true);
        }
    }
}

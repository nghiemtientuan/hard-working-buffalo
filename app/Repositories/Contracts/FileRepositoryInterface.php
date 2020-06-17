<?php

namespace App\Repositories\Contracts;

interface FileRepositoryInterface
{
    public function saveSingleImage($photo, $folder, $type);

    public function updateSingleImage($oldId, $photo, $folder, $type);

    public function saveSingleAudio($audio, $folder, $type);

    public function updateSingleAudio($oldId, $photo, $folder, $type);

    public function deleteWithFile($id);
}

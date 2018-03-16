<?php

namespace App\Events;

use App\Models\TablesRevision;
use Illuminate\Database\Eloquent\Model;

class IncTableRevEvent extends Event
{
    public function handle(Model $classObject)
    {
        $className = $classObject->getTable();
        $tableRevision = TablesRevision::firstOrCreate(['table' => $className]);
        $tableRevision->revision = $tableRevision->revision + 1;
        $tableRevision->save();
    }
}

<?php

namespace App\Traits;

use App\Exceptions\Exception;

trait ModelEx
{
    public function toManySync(string $field, array $data)
    {
        /**
         * @var $this \App\Models\DevSwitch
         */
        $fieldName = $field . 's';
        $existIds = [];
        foreach ($data as $item) {
            if (array_key_exists('id', $item)) {
                $existIds[] = (int)$item['id'];
            } elseif (array_key_exists($field, $item)) {
                $itemClass = '\\' . get_class($this->$fieldName()->getRelated());
                $existsItem = $itemClass::where($field, (string)$item[$field])->first();

                if(!$existsItem) {
                    $existsItem = new $itemClass;
                    $existsItem->$field = (string)$item[$field];
                    $existsItem->save();
                }

                $this->$fieldName()->attach($existsItem->id);
                $existIds[] = $existsItem->id;
            } else {
                throw new Exception('Unknown item');
            }
        }
        $this->$fieldName()->sync($existIds);
    }
}
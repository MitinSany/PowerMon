<?php

namespace App\Traits;

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
                $newItem = new $itemClass;

                $newItem->$field = (string)$item[$field];
                $newItem->save();

                $this->$fieldName()->attach($newItem->id);
            } else {
                //unknown item
            }
            $this->$fieldName()->sync($existIds);
        }

    }
}
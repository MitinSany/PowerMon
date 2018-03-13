<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phone extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'phone'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'pivot'
    ];
}


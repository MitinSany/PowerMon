<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email'
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
        'pivot'
    ];
}


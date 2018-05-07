<?php

namespace App\Models;

use App\Traits\ModelEx;
use Illuminate\Database\Eloquent\Model;

class CalendarDay extends Model
{

    use ModelEx;

    const DAYS_BEFORE = 7;
    const DAYS_AFTER = 14;
    const TOTAL_DAYS = self::DAYS_BEFORE + self::DAYS_AFTER + 1;

    protected $table = 'calendar';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'date'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function phones()
    {
        return $this->belongsToMany('App\Models\Phone', 'phone_switch', 'switch_id', 'phone_id');
    }

    public function setPhonesAttribute($data)
    {
        return $this->toManySave('phone', $data);
    }
}


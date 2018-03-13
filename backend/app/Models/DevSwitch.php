<?php

namespace App\Models;

use App\Traits\ModelEx;
use Illuminate\Database\Eloquent\Model;

class DevSwitch extends Model
{

    use ModelEx;

    protected $table = 'switches';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'technical_site_name', 'switch_name', 'port', 'link', 'comment', 'check_snmp', 'email_send', 'sms_send',
        'sms_night', 'snmp_ip', 'snmp_community', 'snmp_oid', 'order', 'rank'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function emails()
    {
        return $this->belongsToMany('App\Models\Email', 'email_switch', 'switch_id','email_id' );
    }

    public function phones()
    {
        return $this->belongsToMany('App\Models\Phone', 'phone_switch', 'switch_id', 'phone_id');
    }

    public function setPortAttribute($value) {
        $this->attributes['port'] = $value === 0 || $value == null ? null : $value;
    }

    public function setEmailsAttribute($data) {
        return $this->toManySave('email', $data);
    }

    public function setPhonesAttribute($data) {
        return $this->toManySave('phone', $data);
    }
}


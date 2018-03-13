Ext.define('PowerMon.model.Switch', {
    extend: 'Ext.data.Model',
    requires: ['PowerMon.model.Email'],
    idProperty: 'id',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'snmp_status', type: 'int'},
        {name: 'ping_delay', type: 'int'},
        {name: 'technical_site_name', type: 'string'},
        {name: 'switch_name', type: 'string'},
        {name: 'port', type: 'int'},
        {name: 'link', type: 'string'},
        {name: 'comment', type: 'string'},
        {name: 'check_snmp', type: 'boolean'},
        {name: 'email_send', type: 'boolean'},
        {name: 'sms_send', type: 'boolean'},
        {name: 'sms_night', type: 'boolean'},
        {name: 'snmp_ip', type: 'string'},
        {name: 'snmp_community', type: 'string'},
        {name: 'snmp_oid', type: 'string'},
        {name: 'emails', type: 'auto'},
        {name: 'phones', type: 'auto'},
        /*{name: 'email1', type: 'string'},
        {name: 'email2', type: 'string'},
        {name: 'email3', type: 'string'},
        {name: 'email4', type: 'string'},
        {name: 'phone_number1', type: 'string'},
        {name: 'phone_number2', type: 'string'},
        {name: 'phone_number3', type: 'string'},
        {name: 'phone_number4', type: 'string'}*/
    ],
    /*hasMany:[
        {
            name:'emails',
            model:'PowerMon.model.Email'
        }
    ]*/
});
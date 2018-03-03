Ext.define('PowerMon.model.Switch', {
    extend: 'Ext.data.Model',
    requires: ['PowerMon.model.Email'],
    idProperty: 'id',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'snmp_status',  type: 'int'},
        {name: 'ping_delay',  type: 'int'},
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
        {name: 'email1', type: 'string'},
        {name: 'email2', type: 'string'},
        {name: 'email3', type: 'string'},
        {name: 'email4', type: 'string'},
        {name: 'phone_number1', type: 'string'},
        {name: 'phone_number2', type: 'string'},
        {name: 'phone_number3', type: 'string'},
        {name: 'phone_number4', type: 'string'}
    ],
    proxy: {
        type: 'ajax',
        api: {
            read: '/stores/switches/read',
            create: '/stores/switches/create',
            update: '/stores/switches/update',
            destroy: '/stores/switches/destroy'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
//            totalProperty: 'total',
//            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            root: 'data'
        },
    },
    manyToMany: 'Email',
    /*associations: [{
        type: 'hasMany',
        model: 'Email',
        primaryKey: 'id',
        foreignKey: 'parent_id',
        autoLoad: true,
        associationKey: 'emails' // read child data from child_groups
    }]*/
});
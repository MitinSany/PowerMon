Ext.define('PowerMon.model.Phone', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'phone', type: 'string'}
    ]
});
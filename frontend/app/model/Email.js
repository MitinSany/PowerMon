Ext.define('PowerMon.model.Email', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'email', type: 'string'}
    ]
});
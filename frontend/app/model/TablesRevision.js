Ext.define('PowerMon.model.TablesRevision', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'table', type: 'string'},
        {name: 'revision', type: 'int'}
    ]
});
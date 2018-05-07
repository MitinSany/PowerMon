Ext.define('PowerMon.model.CalendarDay', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'date', type: 'string'},
        {name: 'phones', type: 'auto', useNull: true}
    ]
});
Ext.define('PowerMon.store.Calendar', {
    extend: 'Ext.data.Store',
    model: 'PowerMon.model.CalendarDay',
    //fields: ['date', 'dofw', 'editable', 'ts', 'dofw', 'n1', 'n2', 'n3', 'n4', 'n5'],
    autoLoad: false,
    remoteSort: false,
    proxy: {
        type: 'ajax',
        api: {
            read: '/stores/calendar/all',
            create: '/stores/calendar/create',
            update: '/stores/calendar/update',
            destroy: '/stores/calendar/delete'
        },
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
            totalProperty: 'total',
            //messageProperty: 'message'
        },
        writer: {
            type: 'json',
            root: 'data',
            //allowSingle: false
        }
    }
});

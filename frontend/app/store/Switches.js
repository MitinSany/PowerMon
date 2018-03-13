Ext.define('PowerMon.store.Switches', {
    extend: 'Ext.data.Store',
    model: 'PowerMon.model.Switch',
    autoLoad: false,
    autoSync: true,
    remoteSort: false,
    proxy: {
        type: 'ajax',
        api: {
            read: '/stores/switches/all',
            create: '/stores/switches/create',
            update: '/stores/switches/update',
            destroy: '/stores/switches/delete'
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
            root: 'data'
        },
    },
})

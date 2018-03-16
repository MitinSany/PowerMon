Ext.define('PowerMon.store.Emails', {
    extend: 'Ext.data.Store',
    model: 'PowerMon.model.Email',
    autoLoad: false,
    autoSync: false,
    remoteSort: false,
    proxy: {
        type: 'ajax',
        api: {
            read: '/stores/emails/all',
            create: '/stores/emails/create',
            update: '/stores/emails/update',
            destroy: '/stores/emails/delete'
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
            allowSingle: false
        }
    }
}); 

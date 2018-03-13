Ext.define('PowerMon.store.Emails', {
    extend: 'Ext.data.Store',
    model: 'PowerMon.model.Email',
    autoLoad: false,
    autoSync: true,
    remoteSort: false,
    proxy: {
        type: 'ajax',
        api: {
            read: '/stores/emails/view',
            create: '/stores/emails/create',
            update: '/stores/emails/update',
            destroy: '/stores/emails/destroy'
        },
        reader: {
            type: 'json',
            successProperty: 'success',
            root: 'data',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            root: 'data'
        },
    },
    data: [
        {id: 1, email: 'e1'},
        {id: 2, email: 'e2'},
    ]
}); 

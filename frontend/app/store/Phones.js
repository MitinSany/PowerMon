Ext.define('PowerMon.store.Phones', {
    extend: 'Ext.data.Store',
    model: 'PowerMon.model.Phone',
    autoLoad: false,
    remoteSort: false,
    proxy: {
        type: 'ajax',
        api: {
            read: '/stores/phones/all',
            create: '/stores/phones/create',
//            update: '/stores/phones/update',
//            destroy: '/stores/phones/delete'
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

Ext.define('PowerMon.store.TablesRevisions', {
    extend: 'Ext.data.Store',
    model: 'PowerMon.model.TablesRevision',
    proxy: {
        type: 'ajax',
        url: '/stores/tables_revisions/all',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
            totalProperty: 'total',
            //messageProperty: 'message'
        }
    }
}); 

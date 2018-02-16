Ext.define('PowerMon.store.Logs', {
    extend: 'Ext.data.Store',
    fields: ['date', 'event', 'msg', 'dst'],
    autoLoad: false,
    remoteSort: false,
    constructor1: function (config) {
        Ext.applyIf(config, {
            proxy: {
                type: 'direct',
                directFn: exPmon.get_store_logs
            }
        });
        this.callParent([config]);
    }
}); 

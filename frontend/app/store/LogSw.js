Ext.define('PowerMon.store.LogSw', {
    extend: 'Ext.data.Store',
    fields: ['id', 'name'],
    autoLoad: false,
    remoteSort: false,
    constructor1: function (config) {
        Ext.applyIf(config, {
            proxy: {
                type: 'direct',
                directFn: exPmon.get_store_logsw
            }
        });
        this.callParent([config]);
    }
}); 

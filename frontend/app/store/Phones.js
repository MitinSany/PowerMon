Ext.define('PowerMon.store.Phones', {
    extend: 'Ext.data.Store',
    fields: ['phone'],
    autoLoad: false,
    remoteSort: false,
    constructor1: function (config) {
        Ext.applyIf(config, {
            proxy: {
                type: 'direct',
                directFn: exPmon.get_store_phones
            }
        });
        this.callParent([config]);
    }
}); 

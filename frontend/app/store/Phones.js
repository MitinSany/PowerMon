Ext.define('PowerMon.store.Phones', {
    extend: 'Ext.data.Store',
    model: 'PowerMon.model.Phone',
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

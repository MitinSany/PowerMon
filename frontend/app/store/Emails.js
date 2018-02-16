Ext.define('PowerMon.store.Emails', {
    extend: 'Ext.data.Store',
    fields: ['email'],
    autoLoad: false,
    remoteSort: false,
    constructor1: function (config) {
        Ext.applyIf(config, {
            proxy: {
                type: 'direct',
                directFn: exPmon.get_store_emails
            }
        });
        this.callParent([config]);
    }
}); 

Ext.define('PowerMon.store.SwListStore',
    {
        extend: 'Ext.data.Store',
        fields: ['id', 'status', 'rank', 'tp', 'sw', 'port', 'ip',
            'time', 'mrtg', 'ping'],
        autoLoad: false,
        remoteSort: false,
        constructor1: function (config) {
            Ext.applyIf(config, {
                proxy: {
                    type: 'direct',
                    directFn: exPmon.get_store_swlist
                }
            });
            this.callParent([config]);
        }
    });

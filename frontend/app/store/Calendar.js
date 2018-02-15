Ext.define('PowerMon.store.Calendar', {
	extend : 'Ext.data.Store',
	fields : [ 'date','dofw','editable','ts','dofw','n1','n2','n3','n4','n5' ],
	autoLoad : false,
	remoteSort : false,
	constructor1 : function(config) {
		Ext.applyIf(config, {
			proxy : {
				type : 'direct',
				directFn : exPmon.get_store_calendar  
			}
		});
		this.callParent([ config ]);
	}
});

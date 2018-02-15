Ext.define('PowerMon.controller.Log', {
    extend : 'Ext.app.Controller',
    stores : [ 'Logs', 'LogSw' ],
    //	views : [ 'Log' ],

    init : function(appllication) {
        if (this.inited) {
            return;
        }
        this.inited = true;

        function LoadLog(self) {
            Ext.getStore('Logs').on('beforeload', function(store, operation, options) {
                store.getProxy().setExtraParam('id', self.down('#swid').getValue());
                store.getProxy().setExtraParam('msg', self.down('#msg').getValue());
                store.getProxy().setExtraParam('debug', self.down('#debug').getValue());
                store.getProxy().setExtraParam('email', self.down('#email').getValue());
                store.getProxy().setExtraParam('sms', self.down('#sms').getValue());
            });
        }

        this.control({
            '#LogView' : {
                afterrender : function(self, eOpts) {
                    LoadLog(self);
                }
            },
            '#LogView #swid' : {
                change : function(self, newValue, oldValue, eOpts) {
                    Ext.getStore('Logs').reload();

                }
            },
            '#LogView #msg' : {
                change : function(self, newValue, oldValue, eOpts) {
                    Ext.getStore('Logs').reload();

                }
            },
            '#LogView #debug' : {
                change : function(self, newValue, oldValue, eOpts) {
                    Ext.getStore('Logs').reload();

                }
            },
            '#LogView #email' : {
                change : function(self, newValue, oldValue, eOpts) {
                    Ext.getStore('Logs').reload();

                }
            },
            '#LogView #sms' : {
                change : function(self, newValue, oldValue, eOpts) {
                    Ext.getStore('Logs').reload();

                }
            },
            '#LogView #refresh' : {
                click : function(self) {
                    Ext.getStore('Logs').reload();

                }
            }
        });
    }
});
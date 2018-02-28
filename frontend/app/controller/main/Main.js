Ext.define('PowerMon.controller.main.Main', {
    extend: 'Ext.app.Controller',
    requires: ['PowerMon.user.Profile', 'PowerMon.view.main.Toolbar', 'Ext.ux.Spotlight'],
    views: ['main.View'],
    stores: ['Phones', 'Emails'],

    init: function (application) {
        this.listen({
            controller: {
                '*': {
                    createmainwindow: this.createMainWindow
                }
            }
        });
        this.spot = Ext.create('Ext.ux.Spotlight');
    },

    createMainWindow: function() {
        Ext.widget('mainview');
    }
});



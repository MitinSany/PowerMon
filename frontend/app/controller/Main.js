Ext.define('PowerMon.controller.Main', {
    extend: 'Ext.app.Controller',
    //requires: ['PowerMon.user.Profile'],
    views: ['MainView', 'SwPanel', 'SwList', 'SwListEdit', 'About', 'Calendar', 'Log'],
    stores: ['Phones', 'Emails']
});



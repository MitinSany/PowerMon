Ext.define('PowerMon.Application', {
    name: 'PowerMon',

    extend: 'Ext.app.Application',

    views: [
        'LoginForm', 'MainView'
    ],

    controllers: [
        'LoginController', 'Main'
    ],

    stores: [],

    autoCreateViewport: false,

    launch: function () {
        var token = localStorage.getItem('user-token');
        Ext.widget(token ? 'mainview' : 'loginform');
        //Ext.create(token ? 'PowerMon.view.MainView' : 'PowerMon.view.LoginForm');
    },

    init: function () {
        Ext.QuickTips.init();
    }
});

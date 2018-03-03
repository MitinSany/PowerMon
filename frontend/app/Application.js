Ext.define('PowerMon.Application', {
    name: 'PowerMon',
    extend: 'Ext.app.Application',
    requires: ['PowerMon.user.Token', 'PowerMon.user.Profile'],

    controllers: [
        'login.Login', 'main.Main', 'main.Spotlight',
        'switches.Switches', 'switches.Edit',
        'calendar.Calendar',
        'log.Log'
    ],

    stores: ['Switches', 'Emails'],

    autoCreateViewport: false,

    launch: function () {
        var token = this.getTokenObj().getToken();
        if (token) {
            this.fireEvent('settokenheader', token);
            this.fireEvent('createmainwindow');
        } else {
            this.fireEvent('createloginwindow');
        }
    },

    init: function () {
        Ext.QuickTips.init();
        this.token = Ext.create('PowerMon.user.Token');
    },

    getTokenObj: function () {
        return this.token;
    },

    getUserData: function (callback) {
        Ext.Ajax.request({
            url: '/user',
            method: 'GET',
            success: callback,
            scope: this
        });
    },

    createAppUser: function (response) {
        var data = Ext.decode(response.responseText).data;
        this.createAppUserByData(data);
        this.appUser.save();
        this.fireEvent('afteruserload');
    },

    createAppUserByData: function (data) {
        this.appUser = Ext.create('PowerMon.user.Profile', {
            name: data.name,
            comment: data.comment,
            roles: data.roles
        });
    },

    getAppUser: function () {
        if (typeof this.appUser === 'undefined') {
            this.fireEvent('settokenheader', this.getTokenObj().getToken());
            this.createAppUserByData({});
            this.getUserData(this.createAppUser);
        }
        return this.appUser;
    }
});

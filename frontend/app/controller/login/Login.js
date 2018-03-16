Ext.define('PowerMon.controller.login.Login', {
    extend: 'Ext.app.Controller',
    alias: 'controller.login',
    views: ['PowerMon.view.login.Login'],

    init: function (application) {
        this.control({
            'loginform': {
                login: this.onLogin
            },
            'mainview': {
                logout: this.onLogout
            }
        });
        this.listen({
            controller: {
                '*': {
                    settokenheader: this.getApplication().getTokenObj().setTokenHeader,
                    createloginwindow: this.createLoginWindow
                }
            }
        });
    },

    onLogin: function (loginDialog, loginForm, loginCredentials) {

        var me = this, tokenObj = me.getApplication().getTokenObj();

        Ext.Ajax.request({
            url: '/auth/login',
            method: 'POST',
            params: {
                login: loginCredentials.login,
                password: loginCredentials.password
            },
            success: function (response) {
                var data = Ext.decode(response.responseText);
                if (data.token) {
                    tokenObj.setTokenHeader(data.token);
                    loginDialog.destroy();
                    tokenObj.saveToken(data.token);
                    me.getApplication().fireEvent('createmainwindow');
                }
            },
            failure: function () {
                tokenObj.clearToken();
                tokenObj.cleanTokenHeader();
                Ext.Msg.alert('Error', 'Username or Password not valid!');
            }
        });
    },

    onLogout: function (mainView) {
        var me = this;
        me.getApplication().getTokenObj().clearToken();
        me.getApplication().getTokenObj().cleanTokenHeader();
        me.getApplication().appUser = undefined;
        me.getApplication().fireEvent('destroymainwindow');
        Ext.widget('loginform');
    },

    createLoginWindow: function() {
        Ext.widget('loginform');
    }
});

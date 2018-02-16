Ext.define('PowerMon.controller.LoginController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.login',

    init: function (application) {
        this.control({
            'loginform': {
                login: this.onLogin
            },
            'mainview': {
                logout: this.onLogout
            }
        });
    },

    onLogin: function (loginDialog, loginForm, loginCredentials) {

        var me = this;

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

                    // instantiate user info in global scope for easy referencing
                    /*PowerMon.User = Ext.create("PowerMon.user.Profile", {
                        firstName: data.firstName,
                        lastName: data.lastName,
                        roles: data.roles
                    });//*/

                    loginDialog.destroy();

                    me.saveToken(data.token);

                    Ext.widget('mainview');
                }
            },
            failure: function () {
                me.clearToken();
                Ext.Msg.alert('Error', 'Username or Password not valid!');
            }
        });

        // authenticate
        /*        Ext.Ajax.request({
                    url: 'cred.json',
                    params: {
                        username: loginCredentials.username,
                        password: loginCredentials.password
                    },
                    success: function (response) {

                        var data = Ext.decode(response.responseText);

                        if (data.firstName) {

                            // instantiate user info in global scope for easy referencing
                            PowerMon.User = Ext.create("PowerMon.user.Profile", {
                                firstName: data.firstName,
                                lastName: data.lastName,
                                roles: data.roles
                            });

                            // destroy login dialog
                            loginDialog.destroy();


                            Ext.Msg.alert("Login Successful",
                                Ext.String.format("Welcome {0} {1}",
                                    PowerMon.User.getFirstName(),
                                    PowerMon.User.getLastName())
                            );

                            // load main UI
                            Ext.create("PowerMon.view.Viewport");
                        } else {
                            Ext.Msg.alert("Invalid credentials", "You entered invalid credentials.", function () {
                                loginForm.getForm().reset();
                            })
                        }
                    }
                });//*/
    },

    saveToken: function (token) {
        var app = this.getApplication();
        localStorage.setItem('user-token', token);
        app.fireEvent('tokenmodified');
    },

    clearToken: function () {
        localStorage.removeItem('user-token');
    },

    onLogout: function(mainView) {
        var me = this;
        me.clearToken();
        mainView.destroy();
        Ext.widget('loginform');
    }
});

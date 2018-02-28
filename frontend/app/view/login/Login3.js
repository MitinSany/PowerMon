Ext.define('PowerMon.view.login.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginform',
    autoRender: true,
    autoShow: true,
    width: 340,
    bodyPadding: 10,
    defaults: {
        anchor: '100%',
        enableKeyEvents: true,
        listeners: {
            specialKey: function (field, el) {
                if (el.getKey() == Ext.EventObject.ENTER) {
                    this.up().Login();
                }
            }
        }
    },
    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
        // invalidCls: '' //unset the invalidCls so individual
        // fields do not get
        // styled as invalid
    },

    bodyBorder: true,
    // url : 'index.php',
    title: 'Вход в систему статистики',
    frame: true,

    keys: {
        key: Ext.EventObject.ENTER,
        fn: function () {
            if (this.isValid()) {
                this.Login();
            } else {
                return false;
            }
        }
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Логин',
        name: 'username',
        allowBlank: false
    }, {
        xtype: 'textfield',
        fieldLabel: 'Пароль',
        name: 'password',
        inputType: 'password',
        allowBlank: false
    }],
    onShow: function () {
        this.center();
        // this.setTop(100);
        this.move('t', 200, true);
        this.getForm().findField('username').focus();
    },

    /*Login: function () {
        // Ext.get('formErrorState').addCls('.x-msg-box-wait');
        Ext.get('formErrorState').update('Авторизация...');
        // this.setDisabled(true);
        // this.up('loginform').submit({});
        var formval = this.getValues();

        // var reqdata['username']=formval['username'];
        // console.log(formval);
        // exCore.dologin({username:formval['username'],authreq:true},
        // function(result) { //step1
        /*
         * exCore.dologin(formval, function(result) { if (result) {
         * window.login.hide(); window.main = Ext.widget('mainform'); } else {
         * Ext.get('formErrorState').update('Неверный логин'); }
         *
         * });
         */
        /*		exCore.dologin({
                            username : formval['username'],
                            authreq : true
                        }, function(s) {
                            if (s > 0) {
                                var hash = hexMD5(hexMD5(formval['password']) + s);
                                exCore.dologin({
                                            username : formval['username'],
                                            password : hash,
                                            utype:'p'
                                        }, function(res) {
                                            if (res === true) {
                                                window.login.hide();
                                                expires = new Date();
                                                expires.setTime(expires.getTime() + (1000 * 86400 * 365));
                                                set_cookie('utype',formval['utype'],expires);
                                                window.main = Ext.widget('partnerform');
                                                window.main.show();
                                            } else {
                                                Ext.get('formErrorState')
                                                        .update('Ошибка авторизации');
                                            }

                                        });
                            } else {
                                Ext.get('formErrorState').update('Ошибка авторизации');
                            }
                        });

    },//*/
    dockedItems: [{
        dock: 'top',
        //html: '<img align="center" style="border:none;" alt="wifi.in.ua LOGO" src="app/res/logo.png">',
        height: 110
    }, {
        xtype: 'container',
        dock: 'bottom',
        layout: {
            type: 'hbox',
            align: 'middle'
        },
        padding: '5 5 5',

        items: [{
            flex: 2,
            xtype: 'component',
            id: 'formErrorState'
            // baseCls : 'x-statusbar',
        }, {
            flex: 1,
            text: 'Вход',
            xtype: 'button',
            formBind: true,
            disabled: true,
            // type : 'submit',
            handler: function () {
                this.up('loginform').Login();
            }
        }]
    }]

});

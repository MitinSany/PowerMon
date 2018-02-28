Ext.define("PowerMon.view.main.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.maintoolbar',
    requires: ['Ext.container.ButtonGroup'],

    initComponent: function () {
        var appUser = PowerMon.app.getAppUser();
        var items = [{
            defaults: {
                scale: 'medium'
            },
            xtype: 'buttongroup',
            items: [{
                text: 'Свитчи',
                iconCls: 'btn_switch',
                toggleGroup: 'grp',
                enableToggle: true,
                pressed: true,
                handler: function () {
                    this.up('mainview').down('#maincard').getLayout().setActiveItem('card-switch');

                }
            }, {
                text: 'Календарь',
                iconCls: 'btn_calendar',
                toggleGroup: 'grp',
                enableToggle: true,
                handler: function () {
                    this.up('mainview').down('#maincard').getLayout().setActiveItem('card-calendar');

                }
            }, {
                text: 'Журнал',
                iconCls: 'btn_log',
                toggleGroup: 'grp',
                enableToggle: true,
                handler: function () {
                    this.up('mainview').down('#maincard').getLayout().setActiveItem(2);
                }
            }]
        }, {
            defaults: {
                scale: 'medium'
            },
            xtype: 'buttongroup',
            items: [{
                text: 'Настройки',
                action: 'edit_users',
                iconCls: 'preferences-system',
                //disabled: !appUser.isUserInRole(['edit_users']),
                handler: function (btn) {

                }
            }, {
                text: 'Выход',
                action: 'exit',
                iconCls: 'system-log-out',
                handler: function (btn) {
                    var mainView = btn.up('mainview');
                    mainView.fireEvent('logout', mainView)
                }
            }]
        }, '->', {
            defaults: {
                scale: 'medium'
            },
            xtype: 'buttongroup',
            items: [{
                text: 'О системе',
                action: 'about',
                iconCls: 'btn_about',
                handler: function () {
                    Ext.widget('about').show();
                }
            }]
        }];

        Ext.apply(this, {items: items});

        this.callParent(arguments);
    },
    listeners: {
        afteruserload: {
            fn: function () {
                alert(111);
            }
        }
    }
})
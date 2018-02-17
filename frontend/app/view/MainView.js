Ext.define('PowerMon.view.MainView', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.ux.statusbar.StatusBar',
        'Ext.layout.container.Border',
        'Ext.container.ButtonGroup',
        'Ext.layout.container.Card'
    ],
    alias: 'widget.mainview',
    layout: 'border',

    items: [{
        region: 'north',
        border: true,
        margins: '0 0 0 0',
        xtype: 'toolbar',

        items: [{
            defaults: {
                scale: 'medium'
            },
            xtype: 'buttongroup',
            items: [{
                text: 'Свитчи',
                action: 'switchs',
                iconCls: 'btn_switch',
                toggleGroup: 'grp',
                enableToggle: true,
                pressed: true,
                handler: function fn() {
                    this.up('mainview').down('#maincard').getLayout().setActiveItem(0);

                }
            }, {
                text: 'Календарь',
                action: 'calendar',
                iconCls: 'btn_calendar',
                toggleGroup: 'grp',
                enableToggle: true,
                handler: function fn() {
                    this.up('mainview').down('#maincard').getLayout().setActiveItem(1);

                }
            }, {
                text: 'Журнал',
                action: 'log',
                itemId: 'log',
                iconCls: 'btn_log',
                toggleGroup: 'grp',
                enableToggle: true,
                handler: function fn() {
                    this.up('mainview').down('#maincard').getLayout().setActiveItem(2);
                }
            }]
        }, {
            defaults: {
                scale: 'medium'
            },
            xtype: 'buttongroup',
            items: [{
                text: 'Выход',
                action: 'exit',
                iconCls: 'btn_logout',
                handler: function (btn) {
                    var mainView = btn.up('mainview');
                    mainView.fireEvent('logout', mainView)
                }
            }]
        }

            , '->',

            {
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
            }]
    }, {
        region: 'center',
        layout: 'card',
        id: 'maincard',
        activeItem: 0,
        border: false,
        defaults: [{
            border: false
        }],
        items: [{
            id: 'card-sw',
            xtype: 'swpanel'
        }, {
            id: 'card-cal',
            xtype: 'calendar'
        }, {
            id: 'card-log',
            xtype: 'log'
        }]
    }, {
        xtype: 'statusbar',
        id: 'statusbar',
        region: 'south',
        //statusAlign: 'right',
        //text: 'Готов',
        height: 26//,    items:['-',{text:'ololo'}]


    }]

});
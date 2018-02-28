Ext.define('PowerMon.view.main.View', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.ux.statusbar.StatusBar',
        'Ext.layout.container.Border',
        'Ext.layout.container.Card'
    ],
    alias: 'widget.mainview',
    layout: 'border',
    itemId: 'mainview',
    items: [{
        region: 'north',
        border: true,
        margins: '0 0 0 0',
        xtype: 'maintoolbar'
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
            id: 'card-switch',
            xtype: 'swpanel'
        }, {
            id: 'card-calendar',
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
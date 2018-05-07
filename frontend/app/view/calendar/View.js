Ext.define('PowerMon.view.calendar.View', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.calendar.view',
    layout: 'border',
    bodyStyle: 'padding: 2px;',
    border: false,
    items: [
        {
            region: 'center',
            layout: 'fit',
            title: 'Календарь',
            border: true,
            split: true,
            collapsible: false,
            flex: 4,
            xtype: 'calendar.list'
        }, {
            region: 'east',
            title: 'Список дежурных номеров',
            width: 260,
            split: true,
            collapsible: false,
            collapsed: false,
            flex: 2,
            xtype: 'calendar.edit'

        }
    ]
});
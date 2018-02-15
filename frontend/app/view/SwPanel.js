Ext.define('PowerMon.view.SwPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.swpanel',
    layout : 'border',
    bodyStyle : 'padding: 2px;',
    border : false,
    items : [
        {
            region : 'center',
            layout : 'fit',
            title : 'Свитчи',
            border : true,
            split : true,
            collapsible : false,
            flex : 4,
            xtype : 'swlist'
        }, {
            region : 'east',
            title : 'Данные',
            width : 260,
            split : true,
            collapsible : false,
            collapsed : false,
            flex : 2,
            xtype : 'swlistedit'

        }
    ],
    initComponent : function() {
        this.callParent(arguments);

    }
});
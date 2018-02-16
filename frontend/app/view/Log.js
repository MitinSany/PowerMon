Ext.define('PowerMon.view.Log', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.log',
    title: 'Журнал сообщений',
    layout: 'fit',
    border: true,
    itemId: 'LogView',
    style: 'padding: 2px;',
    items: [{
        xtype: 'grid',
        name: 'loggrid',
        border: false,
        loadMask: false,
        viewConfig: {
            loadMask: false
        },//*/
        store: ['Logs'],
        columns: [{
            header: 'Дата',
            dataIndex: 'date',
            sortable: true,
            draggable: false,
            menuDisabled: true,
            align: 'center'
        }, {
            header: 'Событие',
            dataIndex: 'event',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            align: 'center'
        }, {
            header: 'Адресат',
            dataIndex: 'dst',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            minWidth: 140
        }, {
            header: 'Сообщение',
            dataIndex: 'msg',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            flex: 3
        }],
        tbar: [{
            text: 'Обновить',
            itemId: 'refresh',
            iconCls: 'refresh'
        }, {
            text: 'Показать',
            xtype: 'tbtext'

        }, {
            xtype: 'combobox',
            itemId: 'swid',
            typeAhead: false,
            triggerAction: 'all',
            selectOnTab: true,
            store: ['LogSw'],
            lazyRender: true,
            displayField: 'name',
            valueField: 'id',
            queryMode: 'local',
            minWidth: 200,
            allowBlank: false,
            editable: false,
            value: 0
        }, '-', {
            xtype: 'checkboxfield',
            itemId: 'msg',
            fieldLabel: '&nbsp;',
            labelSeparator: '',
            boxLabel: 'Сообщения',
            labelWidth: 0,
            labelAlign: 'right',
            checked: true
        }, {
            xtype: 'checkboxfield',
            itemId: 'debug',
            fieldLabel: '&nbsp;',
            labelSeparator: '',
            boxLabel: 'Отладка',
            labelWidth: 0,
            labelAlign: 'right'
        }, {
            xtype: 'checkboxfield',
            itemId: 'email',
            fieldLabel: '&nbsp;',
            labelSeparator: '',
            boxLabel: 'Email',
            labelWidth: 0,
            labelAlign: 'right'
        }, {
            xtype: 'checkboxfield',
            itemId: 'sms',
            fieldLabel: '&nbsp;',
            labelSeparator: '',
            boxLabel: 'Sms',
            labelWidth: 0,
            labelAlign: 'right'
        }, '-']
    }],
    initComponent: function () {
        this.callParent(arguments);
        this.addCls('x-border-layout-ct');
    }
});
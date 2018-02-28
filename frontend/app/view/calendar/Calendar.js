Ext.define('PowerMon.view.calendar.Calendar', {
    extend: 'Ext.panel.Panel',
    requires: ['Ext.grid.plugin.CellEditing'],
    alias: 'widget.calendar',
    layout: 'border',
    bodyStyle: 'padding: 2px;',
    border: false,
    /*	phone: function(v) {
            var re = /[^0-9]/;
            return (!re.test(v))&&(v.length==12);
        },*/
    items: [{
        xtype: 'grid',
        region: 'center',
        itemId: 'CalendarGrid',
        title: 'Календарь',
        store: ['Calendar'],
        selType: 'cellmodel',
        loadMask: false,
        viewConfig: {
            loadMask: false
        },
        /*plugins: [
            Ext.create('Ext.grid.plugin.CellEditing', {
                clicksToEdit: 1
            })
        ],*/
        tbar: [{
            text: 'Сохранить',
            itemId: 'save',
            iconCls: 'save',
            disabled: true
        }, {
            text: 'Отменить',
            itemId: 'cancel',
            iconCls: 'cancel',
            disabled: true
        }, {
            text: 'Обновить',
            itemId: 'refresh',
            iconCls: 'refresh'
        }],
        columns: [{
            header: 'Дата',
            dataIndex: 'date',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            align: 'center',
            width: 65,
            id: 'date'
        }, {
            header: ' ',
            dataIndex: 'dofw',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            align: 'center',
            width: 40,
            renderer: function (value) {
                if (value == 'Mon') {
                    return 'Пн';
                } else if (value == 'Tue') {
                    return 'Вт';
                } else if (value == 'Wed') {
                    return 'Ср';
                } else if (value == 'Thu') {
                    return 'Чт';
                } else if (value == 'Fri') {
                    return 'Пт';
                } else if (value == 'Sat') {
                    return '<font color="red">Сб</font>';
                } else if (value == 'Sun') {
                    return '<font color="red">Вс</font>';
                }

            }
        }, {
            header: 'Номер 1',
            dataIndex: 'n1',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            align: 'center',
            width: 120,
//			vtype: 'phone',
            field: {
                xtype: 'combobox',
                typeAhead: true,
                triggerAction: 'all',
                selectOnTab: true,
                store: 'Phones',
                lazyRender: true,
                displayField: 'phone',
                valueField: 'phone',
                queryMode: 'local',
                allowBlank: true
            }
        }, {
            header: 'Номер 2',
            dataIndex: 'n2',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            align: 'center',
            field: {
                xtype: 'combobox',
                typeAhead: true,
                triggerAction: 'all',
                selectOnTab: true,
                store: 'Phones',
                lazyRender: true,
                displayField: 'phone',
                valueField: 'phone',
                queryMode: 'local',
                allowBlank: true
            }
        }, {
            header: 'Номер 3',
            dataIndex: 'n3',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            align: 'center',
            field: {
                xtype: 'combobox',
                typeAhead: true,
                triggerAction: 'all',
                selectOnTab: true,
                store: 'Phones',
                lazyRender: true,
                displayField: 'phone',
                valueField: 'phone',
                queryMode: 'local',
                allowBlank: true
            }
        }, {
            header: 'Номер 4',
            dataIndex: 'n4',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            align: 'center',
            field: {
                xtype: 'combobox',
                typeAhead: true,
                triggerAction: 'all',
                selectOnTab: true,
                store: 'Phones',
                lazyRender: true,
                displayField: 'phone',
                valueField: 'phone',
                queryMode: 'local',
                allowBlank: true
            }
        }, {
            header: 'Номер 5',
            dataIndex: 'n5',
            sortable: false,
            draggable: false,
            menuDisabled: true,
            align: 'center',
            field: {
                xtype: 'combobox',
                typeAhead: true,
                triggerAction: 'all',
                selectOnTab: true,
                store: 'Phones',
                lazyRender: true,
                displayField: 'phone',
                valueField: 'phone',
                queryMode: 'local',
                allowBlank: true
            }
        }]
    }],
    initComponent: function () {
        this.callParent(arguments);
    }
});

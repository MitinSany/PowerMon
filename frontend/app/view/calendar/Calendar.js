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
        store: 'Calendar',
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
            iconCls: 'btn_refresh'
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
            renderer: function (value, metaData, record, row, col, store, gridView) {
                return this.dayColumnRenderer(value, metaData, record, row, col, store, gridView);
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

    dofwColumnRenderer: function (value, metaData, record, row, col, store, gridView) {
        var val = '';
        switch (value) {
            case 'Mon':
                val = 'Пн';
                break;

            case 'Tue':
                val = 'Вт';
                break;

            case 'Wed':
                val = 'Ср';
                break;

            case 'Thu':
                val = 'Чт';
                break;

            case 'Fri':
                val = 'Пт';
                break;

            case 'Sat':
                val = 'Сб';
                metaData.style = 'color: red;';
                break;

            case 'Sun':
                val = 'Вс';
                metaData.style = 'color: red;';
                break;
        }
        return val;
    }

});
